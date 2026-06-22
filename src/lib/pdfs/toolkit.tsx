import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { S } from "./styles";

const Footer = ({ page }: { page: number }) => (
  <View style={S.footer}>
    <Text style={S.footerText}>TechUnaVerse · Monthly AI Toolkit · June 2026</Text>
    <Text style={S.footerText}>Page {page} · Subscriber Edition</Text>
  </View>
);

const TOOL_SPOTLIGHT = {
  name: "Claude Opus 4.8",
  tagline: "The most capable Claude model yet — built for serious business work.",
  why: "Claude Opus 4.8 handles complex reasoning, long documents, and nuanced writing better than any previous version. If you've only tried the free tier, the jump in quality is significant.",
  useCases: [
    "Drafting full proposals and contracts from a brief",
    "Analyzing 50+ page documents and surfacing key insights",
    "Writing first drafts of entire email sequences",
    "Building custom AI workflows via the API",
  ],
  pricing: "Claude.ai Pro: $20/mo. API access available for developers.",
  tip: "Use the 'extended thinking' feature for complex decisions — it reasons through problems step by step before answering.",
};

const AUTOMATIONS = [
  {
    title: "Auto-Log New Leads to a Google Sheet",
    tools: "Tally + Zapier + Google Sheets",
    steps: [
      "Create a lead capture form in Tally (free)",
      "In Zapier, trigger on 'New Tally Response'",
      "Action: Add Row to Google Sheet",
      "Add columns: Name, Email, Service, Date, Source",
    ],
    time: "30 minutes to set up. Saves 2+ hours/week.",
  },
  {
    title: "AI-Powered Meeting Summary to Notion",
    tools: "Fireflies.ai + Zapier + Notion",
    steps: [
      "Connect Fireflies.ai to your Google Calendar",
      "In Zapier, trigger on 'New Fireflies Transcript'",
      "Use a Claude/ChatGPT Zapier action to summarize",
      "Action: Create Notion page with summary + action items",
    ],
    time: "45 minutes to set up. Never write meeting notes again.",
  },
  {
    title: "New Client Onboarding on Autopilot",
    tools: "Stripe + Zapier + Gmail + Notion",
    steps: [
      "Trigger: New successful Stripe payment",
      "Action 1: Send welcome email with onboarding instructions",
      "Action 2: Create Notion client page from template",
      "Action 3: Add to your CRM or client tracker sheet",
    ],
    time: "1 hour to set up. Works while you sleep.",
  },
  {
    title: "Weekly Performance Report via Email",
    tools: "Google Analytics + Zapier + Gmail",
    steps: [
      "Set up a weekly Zapier schedule trigger (every Monday 7am)",
      "Pull data from Google Analytics via Zapier",
      "Format into a simple email digest",
      "Send to yourself (or your team) automatically",
    ],
    time: "1 hour to set up. Know your numbers without logging in.",
  },
  {
    title: "Repurpose Blog Posts to Social Content",
    tools: "RSS + Zapier + Claude + Buffer",
    steps: [
      "Trigger: New RSS item (new blog post published)",
      "Action 1: Pass the post URL to Claude API via Zapier",
      "Prompt: 'Turn this blog post into 3 LinkedIn posts and 5 tweets'",
      "Action 2: Save outputs to Buffer as drafts",
    ],
    time: "1.5 hours to set up. Every blog post becomes 8+ pieces of content.",
  },
];

const PROMPTS = [
  { label: "Cold DM Opener", text: "Write a 3-sentence LinkedIn DM to [job title] at [company type]. I offer [service]. Don't pitch — just acknowledge something specific about their work and ask one smart question to start a conversation." },
  { label: "Discovery Call to Proposal", text: "Based on these discovery call notes: [paste notes], write a proposal outline with problem statement, recommended solution, scope, timeline, and investment. I offer [service] at [price range]." },
  { label: "Referral Partner Email", text: "Write an email to [professional type] asking to form a referral partnership. I'm a [your business] and I believe our clients overlap. Propose a simple mutual referral arrangement and suggest a 20-minute call to explore it." },
  { label: "Follow-Up After No Response", text: "Write a follow-up message for a prospect who attended a discovery call 5 days ago but hasn't responded. Reference [specific thing from the call]. Keep it under 4 sentences. Don't be pushy — offer a clear next step." },
  { label: "Objection: I Need to Think About It", text: "A prospect said 'I need to think about it' after a sales call. Write a response that respects their process, briefly restates the key benefit, and makes it easy to move forward or ask questions." },
  { label: "Social Proof DM", text: "Write a message asking a happy customer for a short written testimonial. Make it easy by giving them 2 prompts: 'What was your situation before?' and 'What was the result?' Offer to draft it from their bullet points." },
  { label: "Value Post Hook Pack", text: "Write 10 opening lines for social posts about [topic] targeted at [audience]. Mix: bold claims, surprising statistics, relatable frustrations, and curiosity gaps. Each hook must make someone stop scrolling." },
  { label: "Pricing Page Copy", text: "Write the copy for my [tier name] pricing tier at [price]. Include: who it's for (3 characteristics), what's included (6 bullet points as benefits), and one bold outcome statement. No feature lists — only benefits." },
  { label: "Client Result Story", text: "Write a 200-word social media post telling the story of a client result: Before: [situation]. What we did: [service]. After: [result]. Make it story-driven, not a sales pitch. End with a question that invites engagement." },
  { label: "Niche Content Calendar", text: "Create a 2-week content calendar for [business type] posting on [platform] 5 days/week. Focus niche: [topic]. Mix: 3 educational, 2 storytelling, 2 social proof, 2 engagement, 1 soft pitch per week. Give post ideas, not just categories." },
];

export function ToolkitPDF() {
  return (
    <Document title="Monthly AI Toolkit — June 2026" author="TechUnaVerse">

      {/* Cover */}
      <Page size="A4" style={S.page}>
        <View style={S.headerBand}>
          <Text style={S.brand}>TechUnaVerse · Subscriber Edition · June 2026</Text>
          <Text style={S.docTitle}>Monthly AI Toolkit</Text>
          <Text style={S.docSubtitle}>Your curated guide to AI tools, automations, and prompts for business growth.</Text>
        </View>

        <Text style={S.h2}>This Month's Highlights</Text>
        {[
          ["🛠️", "Tool Spotlight", "Claude Opus 4.8 — what it can do for your business"],
          ["⚡", "5 Automations", "Set-and-forget workflows you can build this weekend"],
          ["💬", "10 Prompts", "Client acquisition prompt pack"],
          ["📊", "AI Stat of the Month", "The number that should change how you think about AI adoption"],
          ["📚", "Resource Roundup", "Top 5 AI newsletters worth your inbox"],
        ].map(([icon, title, desc]) => (
          <View key={title as string} style={[S.row, { marginBottom: 10 }]}>
            <Text style={[S.body, { marginRight: 10, fontSize: 14 }]}>{icon}</Text>
            <View>
              <Text style={[S.body, { fontFamily: "Helvetica-Bold" }]}>{title}</Text>
              <Text style={S.small}>{desc}</Text>
            </View>
          </View>
        ))}

        <View style={S.divider} />
        <View style={S.goldBox}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold", color: "#92400E" }]}>From Brionna's Desk</Text>
          <Text style={[S.small, { marginTop: 4, color: "#92400E", fontFamily: "Helvetica-Oblique" }]}>
            "June is when most businesses hit the mid-year slump and realize they've been working harder, not smarter. This month's kit is all about getting back time. Pick one automation from this guide and implement it before the end of the week. That one decision could save you 2–5 hours every month from here on out."
          </Text>
        </View>
        <Footer page={1} />
      </Page>

      {/* Tool Spotlight */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>🛠️ Tool Spotlight: {TOOL_SPOTLIGHT.name}</Text>
        <Text style={[S.small, { fontFamily: "Helvetica-Oblique", color: "#7C3AED", marginBottom: 10 }]}>{TOOL_SPOTLIGHT.tagline}</Text>
        <Text style={[S.body, { marginBottom: 12 }]}>{TOOL_SPOTLIGHT.why}</Text>

        <Text style={S.h3}>Best Use Cases for Business Owners</Text>
        {TOOL_SPOTLIGHT.useCases.map((u, i) => (
          <View key={i} style={[S.row, { marginBottom: 6 }]}>
            <Text style={S.bullet}>▸</Text>
            <Text style={S.itemText}>{u}</Text>
          </View>
        ))}

        <View style={S.box}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold" }]}>Pro Tip</Text>
          <Text style={[S.small, { marginTop: 3 }]}>{TOOL_SPOTLIGHT.tip}</Text>
        </View>

        <Text style={[S.small, { marginTop: 8, color: "#7C3AED" }]}>Pricing: {TOOL_SPOTLIGHT.pricing}</Text>

        <View style={S.divider} />
        <View style={S.goldBox}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold", color: "#92400E" }]}>📊 AI Stat of the Month</Text>
          <Text style={[S.body, { color: "#92400E", fontSize: 18, fontFamily: "Helvetica-Bold", marginVertical: 6 }]}>72%</Text>
          <Text style={[S.small, { color: "#92400E" }]}>of businesses that adopted AI in 2025 reported saving more than 5 hours per week per employee within 90 days. The barrier isn't capability — it's implementation. That's why you're here.</Text>
        </View>
        <Footer page={2} />
      </Page>

      {/* Automations */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>⚡ 5 Automations to Build This Weekend</Text>
        <Text style={[S.small, { marginBottom: 14 }]}>Each automation is rated by setup time and weekly time saved. Start with the one that solves your biggest pain.</Text>
        {AUTOMATIONS.map((a, i) => (
          <View key={i} style={[S.toolCard, { marginBottom: 12 }]}>
            <Text style={S.toolName}>{i + 1}. {a.title}</Text>
            <Text style={[S.toolPrice, { marginBottom: 6 }]}>Tools: {a.tools} · {a.time}</Text>
            {a.steps.map((step, si) => (
              <View key={si} style={[S.row, { marginBottom: 3 }]}>
                <Text style={[S.bullet, { fontSize: 8 }]}>→</Text>
                <Text style={[S.small, { flex: 1 }]}>{step}</Text>
              </View>
            ))}
          </View>
        ))}
        <Footer page={3} />
      </Page>

      {/* Prompts */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>💬 June Prompt Pack: Client Acquisition</Text>
        <Text style={[S.small, { marginBottom: 12 }]}>10 prompts designed to help you find, pitch, and close more clients. Replace [brackets] with your specifics.</Text>
        {PROMPTS.map((p, i) => (
          <View key={i} style={S.promptCard}>
            <Text style={S.promptLabel}>{p.label}</Text>
            <Text style={S.promptText}>{p.text}</Text>
          </View>
        ))}
        <Footer page={4} />
      </Page>

      {/* Resources + Closing */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>📚 Resources Worth Your Time This Month</Text>
        {[
          ["The Rundown AI", "Daily AI news in 5 minutes. Best for staying current without overwhelm. therundown.ai"],
          ["Ben's Bites", "Practical AI tools and use cases. Great for business owners. bensbites.beehiiv.com"],
          ["TLDR AI", "Technical but digestible. Good if you want to understand what's coming. tldr.tech/ai"],
          ["Lenny's Newsletter", "Product, growth, and AI strategy for builders. lennynewsletter.com"],
          ["Marketing Brew", "AI in marketing — trends, tools, and case studies. marketingbrew.com"],
        ].map(([name, desc]) => (
          <View key={name as string} style={[S.row, { marginBottom: 8 }]}>
            <Text style={S.bullet}>▸</Text>
            <View style={{ flex: 1 }}>
              <Text style={[S.small, { fontFamily: "Helvetica-Bold" }]}>{name}</Text>
              <Text style={S.small}>{desc}</Text>
            </View>
          </View>
        ))}

        <View style={S.divider} />
        <Text style={S.h2}>Your June Action Items</Text>
        {[
          "Pick one automation from this guide and build it before Sunday",
          "Try Claude Opus 4.8 for one task you normally spend 2+ hours on",
          "Send 5 outreach messages using the Client Acquisition prompt pack",
          "Forward this guide to one business owner who'd benefit",
        ].map((item, i) => (
          <View key={i} style={[S.row, { marginBottom: 7 }]}>
            <Text style={[S.bullet, { color: "#16A34A" }]}>□</Text>
            <Text style={S.itemText}>{item}</Text>
          </View>
        ))}

        <View style={S.divider} />
        <View style={S.box}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold" }]}>Ready to go beyond DIY?</Text>
          <Text style={[S.small, { marginTop: 3 }]}>TechUnaVerse builds and implements everything in this toolkit for you. Book a free discovery call at techunaverse.com/contact. Your next toolkit drops in 30 days.</Text>
        </View>
        <Footer page={5} />
      </Page>

    </Document>
  );
}
