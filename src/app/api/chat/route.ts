import { NextRequest, NextResponse } from "next/server";
import https from "https";

// ─── RAG Knowledge Base ───────────────────────────────────────────────────────
const KB = [
  {
    id: "company-overview",
    tags: ["what is techunaverse", "about", "company", "who", "overview", "virginia", "llc", "brionna", "ecosystem"],
    content: `TechUnaVerse LLC is a multi-division innovation ecosystem founded by Brionna Una Alexander, based in Virginia. It empowers creators, builders, and entrepreneurs through AI consulting, custom craftsmanship, lifestyle branding, real estate development, and STEM education. Mission: "Building Legacies Through Innovation." Website: techunaverse.com | Email: admin@techunaverse.com`,
  },
  {
    id: "founder",
    tags: ["founder", "brionna", "una", "alexander", "who founded", "owner", "ceo", "about brionna"],
    content: `Brionna Una Alexander is the founder and CEO of TechUnaVerse LLC — a technologist, entrepreneur, and advocate based in Virginia. She personally leads all AI strategy sessions and consulting engagements, ensuring clients receive expert attention rather than being handed off to a junior team. She built TechUnaVerse to be a multi-division ecosystem serving businesses and communities at every stage of growth.`,
  },
  {
    id: "ai-division",
    tags: ["techunaverse ai", "ai consulting", "ai division", "digital transformation", "technology", "artificial intelligence", "active"],
    content: `TechUnaVerse AI is the flagship active division. It offers AI consulting, workflow automation, knowledge management systems, AI-enhanced website development, and full digital transformation for growing businesses. It helps organizations integrate AI to save time, reduce costs, and scale intelligently. Currently accepting new clients.`,
  },
  {
    id: "knowledgebot-package",
    tags: ["knowledgebot", "chatbot", "ai chatbot", "bot", "1500", "1,500", "package", "pricing", "cost", "how much"],
    content: `KnowledgeBot Launch Package — $1,500. A custom AI chatbot built for your business. It handles customer questions, captures leads, and works 24/7. Includes setup, training on your content, and deployment to your website. Perfect for businesses wanting to automate customer support or FAQs. Timeline: ~2 weeks.`,
  },
  {
    id: "automation-package",
    tags: ["automation", "workflow", "business automation", "3000", "3,000", "integrate", "package", "pricing", "cost", "how much", "repetitive"],
    content: `Business Automation Package — $3,000. Full workflow automation and integrations for your business. Includes process mapping, tool integrations (CRMs, email systems, databases), and team training. Eliminates manual and repetitive work. Great for businesses spending too many hours on tasks that could be automated. Timeline: 3–4 weeks.`,
  },
  {
    id: "digital-transformation-package",
    tags: ["digital transformation", "enterprise", "full strategy", "5000", "5,000", "ai strategy", "implementation", "pricing", "cost", "how much", "complex"],
    content: `Digital Transformation Package — $5,000+. Comprehensive AI strategy and full implementation for businesses ready to transform their operations. Includes AI audit, custom roadmap, tool selection, implementation, and team training. Best for businesses with complex needs or multiple departments to modernize. Timeline: 6–10 weeks. Price varies by scope.`,
  },
  {
    id: "website-development",
    tags: ["website", "web development", "web design", "site", "pricing", "cost", "how much", "build website", "landing page"],
    content: `Website Development — $1,500–$5,000+. Modern, AI-enhanced websites built to convert visitors into clients. Includes design, development, mobile optimization, and optional AI feature integration. Simple marketing sites start at $1,500; complex custom applications go higher. Every site is fully responsive and performance-optimized.`,
  },
  {
    id: "strategy-session",
    tags: ["strategy session", "consultation", "90 minute", "250", "call", "book", "roadmap", "1 on 1", "one on one", "advice", "unsure where to start"],
    content: `AI Strategy Session (90 min) — $250. A one-on-one roadmap call with Brionna Alexander herself. Covers your business goals, current tools, and delivers a clear AI action plan. Ideal if you're unsure where to begin with AI. Includes a written summary of recommendations. Book at techunaverse.com/contact.`,
  },
  {
    id: "all-pricing",
    tags: ["all prices", "price list", "packages", "services list", "menu", "how much", "cost", "rates", "fees"],
    content: `Full TechUnaVerse AI pricing: KnowledgeBot Launch $1,500 | Business Automation $3,000 | Digital Transformation $5,000+ | Website Development $1,500–$5,000+ | AI Strategy Session (90 min) $250. UNA Studios: custom quote per project. All other divisions coming soon. Book a discovery call to find the right fit.`,
  },
  {
    id: "una-studios",
    tags: ["una studios", "woodworking", "craft", "handmade", "custom", "artisan", "studios", "paddle", "engrave", "gift", "wood", "decor"],
    content: `UNA Studios is an active division specializing in custom handcrafted products: custom engraved Greek organization paddles, laser engraved gifts and home décor, wooden wall art and signage, wedding and event products, and corporate branded items. Pricing is project-based — get a quote by contacting admin@techunaverse.com with your project details (type, quantity, timeline, and any design references).`,
  },
  {
    id: "una-apparel",
    tags: ["una", "una apparel", "lifestyle", "clothing", "brand", "unbound", "noble", "ambitious", "coming soon", "fashion"],
    content: `UNA is a coming-soon premium lifestyle brand rooted in being Unbound, Noble, and Ambitious — built for bold entrepreneurs and changemakers. It is a purpose-driven apparel and lifestyle brand. Launch date TBD. Express interest or sign up for updates via techunaverse.com/contact.`,
  },
  {
    id: "builduna",
    tags: ["builduna", "real estate", "housing", "property", "development", "multifamily", "investment", "community", "coming soon"],
    content: `BuildUNA Legacy Development is a coming-soon division focused on real estate acquisition, multifamily housing, mixed-use development, and community investment. Goal: build generational wealth in underserved communities through strategic real estate. Express interest via techunaverse.com/contact.`,
  },
  {
    id: "makers-lab",
    tags: ["makers lab", "una makers lab", "stem", "education", "youth", "nonprofit", "robotics", "coding", "ai literacy", "coming soon", "kids", "children"],
    content: `UNA Makers Lab Foundation is a coming-soon nonprofit providing STEM education, AI literacy, robotics, coding, and entrepreneurship programs for underserved youth. Mission: give the next generation the tools to build in a tech-driven world. Express interest via techunaverse.com/contact.`,
  },
  {
    id: "process",
    tags: ["process", "how it works", "steps", "timeline", "what happens", "next step", "workflow", "how do you work"],
    content: `TechUnaVerse's 3-step process: (1) Discovery Call — free 30-minute conversation to understand your goals, challenges, and vision. No obligation. (2) Custom Strategy — a tailored roadmap with scope, timeline, and pricing delivered before any work starts. (3) Build & Launch — execution with regular updates and team training so you can run everything confidently post-launch.`,
  },
  {
    id: "get-started",
    tags: ["get started", "how to start", "contact", "book", "begin", "work with", "hire", "next step", "ready"],
    content: `To get started with TechUnaVerse: Visit techunaverse.com/contact and submit a project inquiry or book a Discovery Call. For UNA Studios, email admin@techunaverse.com with your project details. For AI services, the $250 AI Strategy Session is the fastest way to get a personalized roadmap. All inquiries get a response within 24 hours.`,
  },
  {
    id: "contact",
    tags: ["contact", "email", "reach out", "phone", "location", "virginia", "where", "hours"],
    content: `Contact TechUnaVerse: Email admin@techunaverse.com | Contact form at techunaverse.com/contact | Location: Virginia, USA | Response time: within 24 hours guaranteed. Brionna personally reviews every inquiry.`,
  },
  {
    id: "why-techunaverse",
    tags: ["why", "different", "unique", "choose", "advantage", "compare", "what makes", "better", "trustworthy"],
    content: `What makes TechUnaVerse different: (1) Founder-led — Brionna personally handles all AI engagements, not a junior team. (2) No-jargon guarantee — clear, plain-English communication throughout every project. (3) Virginia-based — local accountability and reliability. (4) Multi-division — one trusted partner for AI, creative, and future needs. (5) Mission-driven — built to empower creators and entrepreneurs, not just close deals.`,
  },
  {
    id: "divisions-overview",
    tags: ["divisions", "all divisions", "what divisions", "how many", "overview all", "five", "5 divisions"],
    content: `TechUnaVerse has 5 divisions: (1) TechUnaVerse AI — AI consulting & digital transformation [Active]. (2) UNA Studios — custom woodworking & handcrafted products [Active]. (3) UNA — premium lifestyle apparel brand [Coming Soon]. (4) BuildUNA — real estate & community development [Coming Soon]. (5) UNA Makers Lab — nonprofit STEM education for youth [Coming Soon].`,
  },
];

// ─── Retrieval ────────────────────────────────────────────────────────────────
function retrieve(query: string, k = 4) {
  const normalized = query.toLowerCase().replace(/[^\w\s]/g, " ");
  const terms = normalized.split(/\s+/).filter((t) => t.length > 1);
  if (terms.length === 0) return KB.slice(0, k);

  return KB.map((chunk) => {
    let score = 0;
    const tagsText = chunk.tags.join(" ").toLowerCase();
    const contentText = chunk.content.toLowerCase();
    for (const term of terms) {
      if (tagsText.includes(term)) score += 5;
      score += (contentText.match(new RegExp(term, "g")) || []).length;
    }
    return { chunk, score };
  })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k)
    .map((s) => s.chunk);
}

// ─── System prompt ────────────────────────────────────────────────────────────
function buildSystemPrompt(context: string) {
  return `You are Nova, the intelligent AI guide for TechUnaVerse — a multi-division innovation company founded by Brionna Una Alexander in Virginia. You help visitors understand services, pricing, and divisions, and guide them toward taking the right next step.

== RETRIEVED KNOWLEDGE (base your answer on this) ==
${context}
== END KNOWLEDGE ==

GUIDELINES:
- Be warm, confident, and concise — you represent a premium brand
- Answer directly using the knowledge above; do not invent services, prices, or details not shown
- Keep responses under 130 words unless detail is genuinely needed
- Use "we" and "our" when referring to TechUnaVerse
- End every response with a clear, soft call-to-action (visit /contact, book a session, or invite a follow-up question)
- If the knowledge above doesn't answer the question, say so honestly and direct them to admin@techunaverse.com
- For pricing questions, give exact figures from the knowledge — never approximate or hedge on stated prices`;
}

// ─── Anthropic HTTP helper ────────────────────────────────────────────────────
function callAnthropic(apiKey: string, payload: object): Promise<{ ok: boolean; data: Record<string, unknown> }> {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = https.request(
      {
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
          "content-length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => { raw += chunk; });
        res.on("end", () => {
          try {
            resolve({ ok: (res.statusCode ?? 500) >= 200 && (res.statusCode ?? 500) < 300, data: JSON.parse(raw) });
          } catch {
            reject(new Error(`Non-JSON Anthropic response (${res.statusCode}): ${raw.slice(0, 200)}`));
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ─── Route handlers ───────────────────────────────────────────────────────────
export async function GET() {
  return NextResponse.json({
    status: "Nova API reachable",
    node: process.version,
    hasApiKey: !!process.env.ANTHROPIC_API_KEY,
  });
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "Nova is still being set up. Please contact us at admin@techunaverse.com" },
        { status: 503 }
      );
    }

    const body = await request.json();
    const history = ((body.messages ?? []) as { role: string; content: string }[]).filter(
      (m) => m.role === "user" || m.role === "assistant"
    );

    const lastUser = [...history].reverse().find((m) => m.role === "user");
    const chunks = retrieve(lastUser?.content ?? "");
    const context = chunks.length > 0
      ? chunks.map((c) => `[${c.id}]\n${c.content}`).join("\n\n")
      : "No specific knowledge matched. Direct to admin@techunaverse.com for specifics.";

    const { ok, data } = await callAnthropic(process.env.ANTHROPIC_API_KEY, {
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: buildSystemPrompt(context),
      messages: history.slice(-10),
    });

    if (!ok) throw new Error(`Anthropic error: ${JSON.stringify(data)}`);

    const reply = (data.content as { text?: string }[])?.[0]?.text ?? "I'm having a moment — please try again!";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please reach out at admin@techunaverse.com" },
      { status: 500 }
    );
  }
}
