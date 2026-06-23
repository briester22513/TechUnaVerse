import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";
import { getAdminSupabase } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Store lead (ignore duplicate email)
    const supabase = getAdminSupabase();
    await supabase.from("leads").upsert({ email, source: "checklist" }, { onConflict: "email", ignoreDuplicates: true });

    // Generate signed download URL for the free checklist
    const { data: urlData } = await supabase.storage.from("pdfs").createSignedUrl("checklist.pdf", 60 * 60 * 24); // 24h

    const downloadUrl = urlData?.signedUrl ?? `${process.env.NEXT_PUBLIC_SITE_URL}/api/admin/seed-pdfs`;

    // Send email
    await sendEmail({
      to: email,
      subject: "Your free AI Tool Checklist is here ✦",
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1e293b">
          <div style="background:#0A0E2E;padding:32px 40px;border-radius:12px 12px 0 0">
            <p style="color:#D4AF37;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px">TechUnaVerse</p>
            <h1 style="color:#fff;font-size:24px;margin:0">Your checklist is ready.</h1>
          </div>
          <div style="background:#f8fafc;padding:32px 40px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
            <p>Thanks for grabbing the <strong>12 AI Tools Every Small Business Needs in 2026</strong>. Here's your download:</p>
            <div style="text-align:center;margin:28px 0">
              <a href="${downloadUrl}" style="background:#D4AF37;color:#0A0E2E;padding:14px 32px;border-radius:8px;font-weight:700;text-decoration:none;font-size:15px">
                Download Your Checklist →
              </a>
            </div>
            <p style="font-size:13px;color:#64748b">Link expires in 24 hours. If you need it again, just sign up once more.</p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
            <p style="font-size:13px;color:#475569">
              Ready to skip the DIY? We offer a free 30-minute discovery call and an AI Strategy Session ($250) where Brionna builds your custom AI roadmap.
              <br/><br/>
              <a href="https://techunaverse.com/contact" style="color:#7C3AED;font-weight:600">Book a free call →</a>
            </p>
            <p style="font-size:12px;color:#94a3b8;margin-top:24px">TechUnaVerse LLC · Virginia, USA · admin@techunaverse.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("Leads error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
