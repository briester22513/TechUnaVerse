import { NextRequest, NextResponse } from "next/server";
import { getAdminSupabase } from "@/lib/supabase-admin";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  if (!token) return NextResponse.json({ error: "Missing token" }, { status: 400 });

  const supabase = getAdminSupabase();

  // Look up the purchase
  const { data: purchase, error } = await supabase
    .from("purchases")
    .select("product_name, download_token, downloaded_at")
    .eq("download_token", token)
    .single();

  if (error || !purchase) {
    return new NextResponse(
      `<html><body style="font-family:sans-serif;text-align:center;padding:60px">
        <h2>Link not found</h2>
        <p>This download link is invalid. Please check your email or contact <a href="mailto:admin@techunaverse.com">admin@techunaverse.com</a>.</p>
      </body></html>`,
      { status: 404, headers: { "Content-Type": "text/html" } }
    );
  }

  // Stamp downloaded_at on first use (non-blocking)
  if (!purchase.downloaded_at) {
    supabase.from("purchases").update({ downloaded_at: new Date().toISOString() }).eq("download_token", token).then(() => {});
  }

  // Look up the file name for this purchase
  const { data: purchaseRow } = await supabase
    .from("purchases")
    .select("product_id")
    .eq("download_token", token)
    .single();

  // Map product_id → file
  const { PRODUCTS } = await import("@/lib/products");
  const productId = purchaseRow?.product_id ?? "";
  const file = PRODUCTS[productId]?.file ?? `${productId}.pdf`;

  // Create a 1-hour signed URL
  const { data: signedData } = await supabase.storage.from("pdfs").createSignedUrl(file, 3600);

  if (!signedData?.signedUrl) {
    return new NextResponse(
      `<html><body style="font-family:sans-serif;text-align:center;padding:60px">
        <h2>File unavailable</h2>
        <p>We couldn't generate your download link. Please email <a href="mailto:admin@techunaverse.com">admin@techunaverse.com</a> and we'll send the file directly.</p>
      </body></html>`,
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }

  return NextResponse.redirect(signedData.signedUrl);
}
