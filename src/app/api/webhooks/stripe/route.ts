import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { sendEmail } from "@/lib/mailer";
import { getAdminSupabase } from "@/lib/supabase-admin";
import { PRODUCTS } from "@/lib/products";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  const stripe = getStripe();
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as import("stripe").Stripe.Checkout.Session;
  const email = session.customer_details?.email ?? session.customer_email;
  const productId = session.metadata?.product_id;
  const productName = session.metadata?.product_name ?? productId;
  const file = session.metadata?.file;

  if (!email || !productId || !file) {
    console.error("Missing session metadata:", session.metadata);
    return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
  }

  const product = PRODUCTS[productId];
  const supabase = getAdminSupabase();

  // Insert purchase and retrieve the generated download token
  const { data: purchase, error } = await supabase
    .from("purchases")
    .insert({
      email,
      product_id: productId,
      product_name: productName,
      amount_cents: product?.amount ?? 0,
      stripe_session_id: session.id,
    })
    .select("download_token")
    .single();

  if (error) {
    console.error("Purchase insert error:", error);
    return NextResponse.json({ error: "DB error" }, { status: 500 });
  }

  const token = purchase.download_token;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techunaverse.com";
  const downloadUrl = `${siteUrl}/api/download/${token}`;

  await sendEmail({
    to: email,
    subject: `Your ${productName} is ready to download ✦`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1e293b">
        <div style="background:#0A0E2E;padding:32px 40px;border-radius:12px 12px 0 0">
          <p style="color:#D4AF37;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px">TechUnaVerse</p>
          <h1 style="color:#fff;font-size:24px;margin:0">You're all set.</h1>
        </div>
        <div style="background:#f8fafc;padding:32px 40px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
          <p>Thanks for purchasing <strong>${productName}</strong>. Your download is ready:</p>
          <div style="text-align:center;margin:28px 0">
            <a href="${downloadUrl}" style="background:#D4AF37;color:#0A0E2E;padding:14px 32px;border-radius:8px;font-weight:700;text-decoration:none;font-size:15px">
              Download Now →
            </a>
          </div>
          <p style="font-size:13px;color:#64748b">This link is unique to your purchase and will always work — bookmark it for easy access.</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
          <p style="font-size:13px;color:#475569">
            Questions? Reply to this email or contact us at admin@techunaverse.com. We respond within 24 hours.<br/><br/>
            Ready to take the next step? <a href="https://techunaverse.com/contact" style="color:#7C3AED;font-weight:600">Book a free discovery call →</a>
          </p>
          <p style="font-size:12px;color:#94a3b8;margin-top:24px">TechUnaVerse LLC · Virginia, USA · techunaverse.com</p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ received: true });
}
