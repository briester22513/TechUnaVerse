import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { getAdminSupabase } from "@/lib/supabase-admin";
import { ChecklistPDF } from "@/lib/pdfs/checklist";
import { StarterKitPDF } from "@/lib/pdfs/starter-kit";
import { PromptLibraryPDF } from "@/lib/pdfs/prompt-library";
import { ToolkitPDF } from "@/lib/pdfs/toolkit";

const PDFS = [
  { file: "checklist.pdf", component: ChecklistPDF },
  { file: "starter-kit.pdf", component: StarterKitPDF },
  { file: "prompt-library.pdf", component: PromptLibraryPDF },
  { file: "toolkit-current.pdf", component: ToolkitPDF },
];

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-admin-secret");
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getAdminSupabase();

  // Ensure bucket exists
  const { error: bucketErr } = await supabase.storage.createBucket("pdfs", { public: false });
  if (bucketErr && !bucketErr.message.includes("already exists")) {
    return NextResponse.json({ error: `Bucket error: ${bucketErr.message}` }, { status: 500 });
  }

  const results: Record<string, string> = {};

  for (const { file, component: Component } of PDFS) {
    try {
      const buffer = await renderToBuffer(React.createElement(Component));
      const { error } = await supabase.storage.from("pdfs").upload(file, buffer, {
        contentType: "application/pdf",
        upsert: true,
      });
      results[file] = error ? `Error: ${error.message}` : "uploaded";
    } catch (err) {
      results[file] = `Error: ${String(err)}`;
    }
  }

  return NextResponse.json({ ok: true, results });
}
