import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { S } from "./styles";

const TOOLS = [
  { name: "Claude (Anthropic)", use: "AI writing, strategy, analysis, Q&A — the most capable assistant for nuanced business tasks.", price: "Free · claude.ai" },
  { name: "ChatGPT (OpenAI)", use: "Versatile AI for content, brainstorming, research, and customer-facing copy.", price: "Free + $20/mo Plus · chat.openai.com" },
  { name: "Canva AI", use: "Design social graphics, presentations, and marketing materials with AI-powered templates.", price: "Free + $13/mo Pro · canva.com" },
  { name: "Zapier", use: "Connect 6,000+ apps and automate repetitive tasks without code — invoices, CRM updates, notifications.", price: "Free to 100 tasks/mo · zapier.com" },
  { name: "Make.com", use: "Advanced visual automation builder. Better than Zapier for complex multi-step workflows.", price: "Free 1,000 ops/mo · make.com" },
  { name: "Notion AI", use: "AI-powered knowledge base, SOPs, meeting notes, and project management in one workspace.", price: "$10–$15/mo with AI · notion.so" },
  { name: "Fireflies.ai", use: "Joins your Zoom/Teams calls, transcribes everything, and generates action items automatically.", price: "Free 800 min/mo · fireflies.ai" },
  { name: "Grammarly", use: "Real-time writing assistant that fixes grammar, tone, clarity, and engagement across every app you use.", price: "Free + $12/mo Pro · grammarly.com" },
  { name: "Tidio", use: "AI chatbot for your website that captures leads, answers FAQs, and qualifies visitors 24/7.", price: "Free 50 chats/mo · tidio.com" },
  { name: "Buffer", use: "Schedule and publish to all social platforms with AI caption suggestions built right in.", price: "Free 3 channels · buffer.com" },
  { name: "Google Gemini", use: "AI assistant built into Gmail, Docs, Sheets, and Drive — great if you already live in Google Workspace.", price: "Free with Google account · gemini.google.com" },
  { name: "Loom AI", use: "Record quick videos for clients, your team, or tutorials. AI generates summaries and action items.", price: "Free 25 videos/mo · loom.com" },
];

const TIPS = [
  "Start with 2–3 tools, not all 12. Pick the one that solves your biggest pain point first.",
  "Free tiers are enough to start. Upgrade only when you've proven the tool saves you time.",
  "Automate one thing this week. A single Zapier workflow can save hours per month.",
  "Claude and ChatGPT are not the same. Try both with the same prompt and see which fits your style.",
  "Your AI chatbot (Tidio) should go up before you run any paid ads — don't spend money to send people to a site that doesn't convert.",
];

export function ChecklistPDF() {
  return (
    <Document title="12 AI Tools Every Small Business Needs in 2026" author="TechUnaVerse">
      <Page size="A4" style={S.page}>
        {/* Header */}
        <View style={S.headerBand}>
          <Text style={S.brand}>TechUnaVerse · Free Guide</Text>
          <Text style={S.docTitle}>12 AI Tools Every Small{"\n"}Business Needs in 2026</Text>
          <Text style={S.docSubtitle}>With pricing, use cases, and where to start — no fluff.</Text>
        </View>

        <View style={S.goldBox}>
          <Text style={[S.body, { fontFamily: "Helvetica-Bold", color: "#92400E" }]}>How to use this guide</Text>
          <Text style={[S.body, { color: "#92400E", marginTop: 3 }]}>
            Don't try to implement all 12 at once. Read through, pick the 2–3 that match your biggest challenge right now, and spend 30 minutes testing each one this week.
          </Text>
        </View>

        <Text style={S.h2}>The 12 Tools</Text>

        {TOOLS.map((tool, i) => (
          <View key={i} style={S.toolCard}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
              <Text style={S.toolName}>{i + 1}. {tool.name}</Text>
              <Text style={S.toolPrice}>{tool.price}</Text>
            </View>
            <Text style={S.small}>{tool.use}</Text>
          </View>
        ))}

        {/* Footer */}
        <View style={S.footer}>
          <Text style={S.footerText}>TechUnaVerse LLC · techunaverse.com · admin@techunaverse.com</Text>
          <Text style={S.footerText}>Free Guide — Not for resale</Text>
        </View>
      </Page>

      <Page size="A4" style={S.page}>
        <Text style={S.h2}>5 Tips Before You Start</Text>
        {TIPS.map((tip, i) => (
          <View key={i} style={[S.row, { marginBottom: 10 }]}>
            <View style={S.numBadge}><Text style={S.numText}>{i + 1}</Text></View>
            <Text style={S.itemText}>{tip}</Text>
          </View>
        ))}

        <View style={S.divider} />

        <Text style={S.h2}>Ready to Go Further?</Text>
        <View style={S.box}>
          <Text style={[S.body, { fontFamily: "Helvetica-Bold" }]}>Work directly with TechUnaVerse</Text>
          <Text style={[S.small, { marginTop: 4 }]}>
            We build custom AI chatbots, automate your workflows, and design your entire AI strategy. Book a free 30-minute discovery call at techunaverse.com/contact or grab a 90-minute AI Strategy Session for $250 — you'll leave with a clear roadmap built specifically for your business.
          </Text>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={[S.small, { color: "#0A0E2E", fontFamily: "Helvetica-Bold" }]}>Our most popular services:</Text>
          {[
            "KnowledgeBot Launch Package — $1,500 (custom AI chatbot for your website)",
            "Business Automation Package — $3,000 (full workflow automation)",
            "AI Strategy Session (90 min) — $250 (1-on-1 with Brionna)",
          ].map((item, i) => (
            <View key={i} style={[S.row, { marginTop: 6 }]}>
              <Text style={S.bullet}>▸</Text>
              <Text style={S.itemText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={S.footer}>
          <Text style={S.footerText}>TechUnaVerse LLC · techunaverse.com · admin@techunaverse.com</Text>
          <Text style={S.footerText}>© 2026 All rights reserved</Text>
        </View>
      </Page>
    </Document>
  );
}
