import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { S } from "./styles";

const Footer = ({ page }: { page: number }) => (
  <View style={S.footer}>
    <Text style={S.footerText}>TechUnaVerse · AI Prompt Library · 150+ Business Prompts</Text>
    <Text style={S.footerText}>Page {page}</Text>
  </View>
);

type PromptGroup = { category: string; color: string; prompts: { label: string; text: string }[] };

const GROUPS: PromptGroup[] = [
  {
    category: "Sales & Proposals",
    color: "#7C3AED",
    prompts: [
      { label: "Proposal Generator", text: "Write a professional proposal for a client who needs [service]. Their business is [description], their main challenge is [challenge], and their budget range is [budget]. Include an overview, scope of work, timeline, investment, and next steps." },
      { label: "Pricing Objection Handler", text: "A potential client said our price is too high. Our service is [service] priced at [price]. Write a response that acknowledges their concern, reframes the ROI, and offers a path forward without discounting." },
      { label: "Discovery Call Script", text: "Create a 30-minute discovery call script for a [service] business. Include opening small talk, 8–10 diagnostic questions, how to present the offer, and a close that asks for a decision." },
      { label: "Follow-Up Sequence", text: "Write a 3-email follow-up sequence for a prospect who attended a sales call but hasn't responded. Space them 3 days apart. Keep them short, warm, and non-pushy. Offer value in each one." },
      { label: "Case Study Outline", text: "Turn this client result into a case study: Client type: [type]. Problem before: [before]. What we did: [solution]. Result after: [result]. Format it with a compelling headline, story arc, and clear takeaways." },
      { label: "LinkedIn Sales Message", text: "Write a personalized LinkedIn connection message for a [job title] at a [company type]. I offer [service]. Keep it under 200 characters and don't pitch — just start a conversation." },
      { label: "Retainer Pitch", text: "Write a pitch for converting a one-time client into a monthly retainer. Our one-time project was [project]. The retainer would include [services]. Emphasize continuity, predictability, and ongoing value." },
    ],
  },
  {
    category: "Social Media",
    color: "#0891B2",
    prompts: [
      { label: "Hook Generator", text: "Write 10 scroll-stopping opening lines for a [platform] post about [topic]. The audience is [audience]. Mix curiosity hooks, bold statements, and relatable pain points. No hashtags." },
      { label: "Carousel Script", text: "Write a 7-slide LinkedIn/Instagram carousel about [topic]. Slide 1: hook. Slides 2–6: one insight per slide. Slide 7: CTA. Each slide should have a headline (max 8 words) and 1–2 supporting sentences." },
      { label: "Month of Content", text: "Create a 30-day content calendar for a [business type] on [platform]. Mix educational, inspirational, promotional, and behind-the-scenes content. Include the post topic and content type for each day." },
      { label: "Viral Reel Script", text: "Write a 60-second Reel script about [topic] for a [business type]. Format: hook (0–3s), problem (3–15s), solution/value (15–50s), CTA (50–60s). Write it as spoken dialogue, conversational and punchy." },
      { label: "Bio Optimizer", text: "Rewrite my [platform] bio. Current bio: [bio]. My business is [description] and I help [ideal client] achieve [result]. Make it clear, credible, and include a CTA. Under 150 characters." },
      { label: "Hashtag Strategy", text: "Give me a hashtag strategy for a [business type] posting about [niche] on [platform]. Include 5 large hashtags (1M+ posts), 5 medium (100K–1M), and 5 small niche tags (under 100K). Explain why each tier matters." },
      { label: "Engagement Bait Post", text: "Write a [platform] post that asks a question to drive comments from [ideal audience] about [topic]. Make it conversational, easy to answer, and genuinely interesting. Don't use 'comment below' as the CTA." },
    ],
  },
  {
    category: "Email Marketing",
    color: "#16A34A",
    prompts: [
      { label: "Welcome Email", text: "Write a welcome email for new subscribers to my [business type] email list. They signed up for [lead magnet]. Introduce me, deliver the lead magnet, set expectations for future emails, and end with a soft offer or question." },
      { label: "Nurture Sequence (5 emails)", text: "Write a 5-email nurture sequence for [audience type] who downloaded [lead magnet]. Email 1: welcome + deliver. Email 2: biggest mistake. Email 3: success story/case study. Email 4: FAQs and objections. Email 5: soft pitch for [product/service]." },
      { label: "Newsletter Template", text: "Write a weekly newsletter issue for [audience] about [topic]. Format: subject line (A/B options), preview text, opening hook, main content (3 sections), one link or resource, and a sign-off. Conversational tone." },
      { label: "Re-engagement Email", text: "Write a win-back email for subscribers who haven't opened my emails in 60+ days. Subject line should be curiosity-based. Body: acknowledge the silence, offer something valuable, and make it easy to stay subscribed or unsubscribe." },
      { label: "Launch Sequence", text: "Write a 7-email launch sequence for [product/service] at [price]. Doors open [date], close [date]. Include: teaser (3 days before), open day (2 emails), value/case study, objection handler, close (2 emails). Create urgency without being pushy." },
      { label: "Cold Email Outreach", text: "Write a cold email to [job title] at [company type] about [service]. Research hook in line 1. Problem statement line 2. Value proposition line 3. Proof point line 4. Soft CTA (question, not a pitch). Under 100 words total." },
    ],
  },
  {
    category: "Client Communication",
    color: "#D97706",
    prompts: [
      { label: "Onboarding Welcome", text: "Write a client onboarding email for a new [service] client. Include a warm welcome, what to expect in week 1, any information I need from them, how to reach me, and a timeline of next steps. Confident but warm tone." },
      { label: "Project Update", text: "Write a weekly project update email for a client. Project: [project]. Status: [on track/delayed/ahead]. Completed this week: [tasks]. Next week plan: [tasks]. Any blockers or decisions needed: [list]. Keep it brief and clear." },
      { label: "Difficult Feedback Response", text: "A client sent critical feedback about [issue]. Write a professional response that acknowledges their experience, takes responsibility where appropriate, explains what happened (briefly, without excuses), and outlines next steps." },
      { label: "Scope Creep Reply", text: "A client is requesting [additional work] outside our original agreement. Write a professional response that acknowledges the request, explains it's outside the current scope, offers to add it for [price/timeline], and keeps the relationship warm." },
      { label: "Testimonial Request", text: "Write a short email asking a happy client for a testimonial. Make it easy by giving them 3 guiding questions: what their challenge was before, what the experience was like, and what result they got. Offer to draft it from their notes if they prefer." },
    ],
  },
  {
    category: "Content Creation",
    color: "#BE185D",
    prompts: [
      { label: "Blog Post Outline", text: "Create a detailed blog post outline for '[topic]' targeting [audience]. Include SEO-optimized title, meta description, intro hook, 5–7 H2 sections with bullet sub-points, a FAQ section, and a CTA. Keyword: [keyword]." },
      { label: "YouTube Script", text: "Write a full YouTube script for a [length] video about [topic]. Audience: [audience]. Include: hook (first 30 seconds — no intro), agenda, 3–5 main points with examples, outro, and CTA. Conversational, not stiff." },
      { label: "Podcast Episode Outline", text: "Create a 45-minute podcast episode outline on [topic] for [audience]. Include intro, 5 key discussion points with talking prompts, 3 guest questions (if applicable), mid-episode CTA, and outro with CTA." },
      { label: "AI-Generated Image Prompt", text: "Write 5 detailed image generation prompts for [topic/brand]. Each prompt should describe the style (photorealistic, illustration, etc.), lighting, mood, colors, and subject. Optimize for [Midjourney/DALL-E/Stable Diffusion]." },
      { label: "Case Study — Story Format", text: "Write a compelling case study in story format for a client result. Client: [description]. Before: [situation]. The turning point: [what changed]. Our solution: [what we did]. The outcome: [specific results]. Close with a lesson or CTA." },
      { label: "Lead Magnet Content", text: "Create the full content outline for a lead magnet PDF called '[title]' for [audience]. Include cover page elements, 5–7 main sections with content, action worksheets or checklists, and a back page CTA. Estimate 10–15 pages." },
      { label: "FAQ Page Copy", text: "Write an FAQ page for a [business type]. Include 12 questions covering: what we do, who we serve, pricing, how to get started, what makes us different, timeline, what they need to provide, and refund policy. Conversational answers, under 100 words each." },
    ],
  },
  {
    category: "Business Strategy",
    color: "#0F172A",
    prompts: [
      { label: "Competitive Analysis", text: "Help me analyze my top 3 competitors in [industry]. For each: strengths, weaknesses, pricing model, target audience, and what I can do better or differently. Give me a clear positioning recommendation based on the gaps." },
      { label: "Pricing Strategy", text: "Help me set pricing for [service/product]. My costs are [cost breakdown], my target profit margin is [%], the market rate is [range], and my ideal client earns/spends [amount]. Recommend a pricing model and rate, and explain the logic." },
      { label: "90-Day Business Plan", text: "Create a 90-day action plan for [business goal]. Break it into 3 monthly phases. Each month: one primary goal, 3 key actions, one metric to track, and one potential obstacle + mitigation. Keep it specific and achievable." },
      { label: "Ideal Client Profile", text: "Help me define my ideal client avatar for [business type]. Include: demographics, psychographics, daily challenges, what they've already tried, what they fear, what success looks like to them, where they spend time online, and what they search for." },
      { label: "Revenue Goal Breakdown", text: "Help me reverse-engineer my annual revenue goal of [$amount]. Break it down by: monthly target, weekly target, average deal size [price], number of clients needed per month, number of sales conversations needed, and outreach volume required at [conversion rate]." },
    ],
  },
  {
    category: "SEO & Marketing",
    color: "#0369A1",
    prompts: [
      { label: "Meta Description", text: "Write 3 meta descriptions for a [page type] page about [topic]. Each under 160 characters. Include the primary keyword '[keyword]' and a clear benefit. Make them compelling enough to improve click-through rate." },
      { label: "Blog Title Options", text: "Write 15 blog post title options for the topic '[topic]' targeting '[keyword]'. Mix formats: how-to, listicles, questions, curiosity gaps, and bold statements. Each should make someone want to click." },
      { label: "Local SEO Content", text: "Write a 300-word locally optimized 'About' section for a [business type] in [city, state]. Naturally include the city name and surrounding areas, what makes the business local, and relevant local trust signals." },
      { label: "Ad Copy (Google Ads)", text: "Write 5 Google Ads text ads for [service/product] targeting the keyword '[keyword]'. Each ad needs: Headline 1 (30 chars), Headline 2 (30 chars), Headline 3 (30 chars), Description 1 (90 chars), Description 2 (90 chars). Focus on benefits and CTA." },
      { label: "Product Page Copy", text: "Write a full product/service page for [offer]. Include: headline, subheadline, who it's for, what's included (formatted as benefits not features), social proof placeholder, FAQ (5 questions), and CTA. SEO keyword: [keyword]." },
      { label: "Internal Linking Strategy", text: "I have a website with pages about [list pages/topics]. Create an internal linking plan that improves SEO. Which pages should link to which, using what anchor text, and why? Prioritize based on which pages I most want to rank." },
    ],
  },
];

export function PromptLibraryPDF() {
  return (
    <Document title="AI Prompt Library — 150+ Business Prompts" author="TechUnaVerse">

      {/* Cover Page */}
      <Page size="A4" style={S.page}>
        <View style={S.headerBand}>
          <Text style={S.brand}>TechUnaVerse · AI Prompt Library</Text>
          <Text style={S.docTitle}>150+ AI Prompts for{"\n"}Business Owners</Text>
          <Text style={S.docSubtitle}>Copy, paste, and customize. Organized by use case.</Text>
        </View>

        <View style={S.goldBox}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold", color: "#92400E" }]}>How to Use These Prompts</Text>
          <Text style={[S.small, { marginTop: 4, color: "#92400E" }]}>
            Replace text in [brackets] with your specific details. The more specific you are, the better the AI's output. Always review and edit before sending anything to a client.
          </Text>
        </View>

        <Text style={S.h2}>Categories</Text>
        {GROUPS.map((g, i) => (
          <View key={i} style={[S.row, { marginBottom: 7 }]}>
            <Text style={[S.bullet, { color: g.color }]}>▸</Text>
            <Text style={S.itemText}><Text style={{ fontFamily: "Helvetica-Bold" }}>{g.category}</Text> — {g.prompts.length} prompts</Text>
          </View>
        ))}

        <Footer page={1} />
      </Page>

      {/* One page per category */}
      {GROUPS.map((group, gi) => (
        <Page key={gi} size="A4" style={S.page}>
          <View style={{ backgroundColor: group.color, marginHorizontal: -48, marginTop: -48, paddingHorizontal: 48, paddingVertical: 16, marginBottom: 20 }}>
            <Text style={[S.brand, { color: "rgba(255,255,255,0.7)" }]}>TechUnaVerse · AI Prompt Library</Text>
            <Text style={[S.docTitle, { fontSize: 20 }]}>{group.category}</Text>
          </View>
          {group.prompts.map((p, pi) => (
            <View key={pi} style={S.promptCard}>
              <Text style={[S.promptLabel, { color: group.color }]}>{p.label}</Text>
              <Text style={S.promptText}>{p.text}</Text>
            </View>
          ))}
          <Footer page={gi + 2} />
        </Page>
      ))}

      {/* Back page */}
      <Page size="A4" style={S.page}>
        <View style={S.headerBand}>
          <Text style={[S.docTitle, { fontSize: 20 }]}>Want Done-For-You?</Text>
          <Text style={S.docSubtitle}>Let TechUnaVerse handle the execution.</Text>
        </View>
        <Text style={[S.body, { marginBottom: 16 }]}>
          You have the prompts — now imagine having an AI system that runs these automatically for your business. TechUnaVerse builds custom AI solutions including chatbots, automation pipelines, and full digital transformation.
        </Text>
        {[
          ["AI Strategy Session (90 min) — $250", "1-on-1 with Brionna to map your AI roadmap. You'll leave with a clear action plan."],
          ["KnowledgeBot Launch Package — $1,500", "A custom AI chatbot trained on your business, deployed to your website in 2 weeks."],
          ["Business Automation Package — $3,000", "Full workflow automation. We connect your tools and eliminate manual work."],
          ["Digital Transformation — $5,000+", "Comprehensive AI implementation across your entire operation."],
        ].map(([name, desc]) => (
          <View key={name as string} style={S.toolCard}>
            <Text style={S.toolName}>{name}</Text>
            <Text style={S.small}>{desc}</Text>
          </View>
        ))}
        <View style={S.goldBox}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold" }]}>Book a free discovery call: techunaverse.com/contact</Text>
          <Text style={[S.small, { marginTop: 3 }]}>admin@techunaverse.com · Virginia, USA · Response within 24 hours</Text>
        </View>
        <Footer page={GROUPS.length + 2} />
      </Page>

    </Document>
  );
}
