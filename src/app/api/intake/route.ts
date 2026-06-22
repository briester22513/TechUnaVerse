import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error("Supabase env vars not set");
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, company, service, message } = body;

    if (!first_name || !last_name || !email || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = getSupabase();
    const { error } = await supabase.from("intake_submissions").insert({
      first_name,
      last_name,
      email,
      company: company || null,
      service,
      message: message || null,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Intake error:", err);
    return NextResponse.json(
      { error: "Submission failed. Please email admin@techunaverse.com directly." },
      { status: 500 }
    );
  }
}
