import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { S } from "./styles";

const Footer = ({ page }: { page: number }) => (
  <View style={S.footer}>
    <Text style={S.footerText}>TechUnaVerse LLC · Business Launch Starter Kit</Text>
    <Text style={S.footerText}>Page {page} · techunaverse.com</Text>
  </View>
);

export function StarterKitPDF() {
  return (
    <Document title="Business Launch Starter Kit" author="TechUnaVerse">

      {/* Page 1 — Cover */}
      <Page size="A4" style={S.page}>
        <View style={S.headerBand}>
          <Text style={S.brand}>TechUnaVerse · Business Launch Starter Kit</Text>
          <Text style={S.docTitle}>From Zero to{"\n"}First Paying Client</Text>
          <Text style={S.docSubtitle}>Your step-by-step guide to launching a legitimate business in 2026.</Text>
        </View>

        <Text style={[S.body, { marginBottom: 16 }]}>
          This kit walks you through every critical step of starting your business — from choosing your legal structure to landing your first client. Each section includes action steps you can complete this week.
        </Text>

        <Text style={S.h2}>What's Inside</Text>
        {[
          ["1", "Choosing Your Business Structure", "LLC vs. Sole Proprietor — what actually matters"],
          ["2", "Registering Your LLC", "Step-by-step state filing guide"],
          ["3", "EIN & Business Banking", "Set up in under an hour"],
          ["4", "Building Your Brand Identity", "Name, logo, colors — the right way"],
          ["5", "Your First Website Checklist", "20 must-haves before you launch"],
          ["6", "Google Business Profile Setup", "10-step guide to local visibility"],
          ["7", "Social Media Starter Pack", "3-platform strategy for new businesses"],
          ["8", "Landing Your First 10 Clients", "5 outreach templates that work"],
        ].map(([num, title, sub]) => (
          <View key={num} style={[S.row, { marginBottom: 8 }]}>
            <View style={S.numBadge}><Text style={S.numText}>{num}</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={[S.body, { fontFamily: "Helvetica-Bold" }]}>{title}</Text>
              <Text style={S.small}>{sub}</Text>
            </View>
          </View>
        ))}
        <Footer page={1} />
      </Page>

      {/* Page 2 — Structure + LLC */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>1. Choosing Your Business Structure</Text>
        <View style={S.box}>
          <Text style={[S.body, { fontFamily: "Helvetica-Bold" }]}>TL;DR: Form an LLC.</Text>
          <Text style={[S.small, { marginTop: 4 }]}>
            For most small business owners, an LLC is the right choice. It separates your personal assets from business liability, looks more credible to clients, and has minimal ongoing requirements. The cost is typically $50–$200 one-time state filing fee.
          </Text>
        </View>
        <Text style={[S.h3, { marginTop: 12 }]}>LLC vs. Sole Proprietor at a Glance</Text>
        {[
          ["Liability protection", "✓ Yes — your personal assets are protected", "✗ No — you're personally liable"],
          ["Credibility with clients", "✓ Higher — \"LLC\" signals legitimacy", "Lower — often seen as a side hustle"],
          ["Setup cost", "$50–$200 state filing fee", "Free — just start working"],
          ["Tax flexibility", "✓ Can elect S-Corp status to save on self-employment tax", "Self-employment tax on all profit"],
          ["Bank account", "✓ Easy to open business account", "Some banks require DBA filing"],
        ].map(([factor, llc, sole]) => (
          <View key={factor} style={{ marginBottom: 6 }}>
            <Text style={[S.small, { fontFamily: "Helvetica-Bold", color: "#0A0E2E" }]}>{factor}</Text>
            <Text style={[S.small, { color: "#16A34A" }]}>LLC: {llc}</Text>
            <Text style={[S.small, { color: "#DC2626" }]}>Sole Prop: {sole}</Text>
          </View>
        ))}

        <Text style={S.h2}>2. Registering Your LLC</Text>
        <Text style={[S.body, { marginBottom: 8 }]}>Complete these steps in order. Most states process filings online in 1–5 business days.</Text>
        {[
          "Choose your state. Register in the state where you operate or where you live. Virginia: sos.virginia.gov. Most states have a Business One-Stop portal.",
          "Search name availability. Your LLC name must be unique in your state. Search the state business database before you fall in love with a name.",
          "Choose a Registered Agent. Required in all states. This is the person who receives legal documents. You can be your own agent, or use a service ($50–$150/yr).",
          "File Articles of Organization. This is the official document that creates your LLC. Online filing is fastest. Cost varies by state ($50–$200).",
          "Create an Operating Agreement. Not required in all states but strongly recommended. This document defines how your LLC is run. Free templates at legalzoom.com.",
          "Get your EIN. Free from irs.gov — see next section.",
        ].map((step, i) => (
          <View key={i} style={[S.row, { marginBottom: 8 }]}>
            <View style={S.numBadge}><Text style={S.numText}>{i + 1}</Text></View>
            <Text style={S.itemText}>{step}</Text>
          </View>
        ))}
        <Footer page={2} />
      </Page>

      {/* Page 3 — Banking + Brand */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>3. EIN & Business Banking</Text>
        <View style={S.goldBox}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold", color: "#92400E" }]}>Get your EIN first — you need it to open a bank account.</Text>
          <Text style={[S.small, { marginTop: 3, color: "#92400E" }]}>Go to irs.gov/ein and apply online. It's free and takes 5 minutes. You'll receive your EIN immediately.</Text>
        </View>
        <Text style={S.h3}>Recommended Business Checking Accounts</Text>
        {[
          ["Relay Financial", "Best overall for small businesses. No fees, up to 20 sub-accounts, free ACH. relay.fi"],
          ["Mercury", "Great for tech-forward founders. No fees, strong API. mercury.com"],
          ["Chase Business Checking", "Best if you want a physical branch. $15/mo waived with $2K average balance."],
        ].map(([name, desc]) => (
          <View key={name as string} style={[S.row, { marginBottom: 6 }]}>
            <Text style={S.bullet}>▸</Text>
            <View style={{ flex: 1 }}>
              <Text style={[S.small, { fontFamily: "Helvetica-Bold" }]}>{name}</Text>
              <Text style={S.small}>{desc}</Text>
            </View>
          </View>
        ))}

        <View style={S.divider} />

        <Text style={S.h2}>4. Building Your Brand Identity</Text>
        <Text style={[S.body, { marginBottom: 8 }]}>Your brand is how people feel when they interact with your business. Get these four things right before you touch anything else.</Text>
        {[
          ["Business Name", "Check availability: state database, trademark database (tmsearch.uspto.gov), and your desired social handles + domain."],
          ["Domain", "Buy your .com at Namecheap or Google Domains. First choice: yourname.com. Fallback: getbusinessname.com or businessnamehq.com."],
          ["Logo", "Use Canva AI (free) for a starter logo. Budget $100–$300 on Fiverr for a pro version once you're generating revenue."],
          ["Brand Colors", "Pick 2–3 colors. Use Coolors.co to generate palettes. Check contrast for accessibility. Write down the hex codes and use them consistently."],
        ].map(([item, desc]) => (
          <View key={item as string} style={S.toolCard}>
            <Text style={S.toolName}>{item}</Text>
            <Text style={S.small}>{desc}</Text>
          </View>
        ))}
        <Footer page={3} />
      </Page>

      {/* Page 4 — Website + Google */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>5. Your First Website Checklist</Text>
        <Text style={[S.small, { marginBottom: 10 }]}>Check each item before you call your site "live." These are the non-negotiables.</Text>
        {[
          "Clear headline that says who you help and how (above the fold)",
          "Professional photo or brand photo — no stock photos of strangers",
          "Services listed with prices or 'Starting at' ranges",
          "At least one testimonial or social proof (or a 'Beta Clients Welcome' badge if you're new)",
          "Contact form or booking link (don't make people email you)",
          "Mobile-responsive layout — test on your phone before launch",
          "Page load time under 3 seconds — run through Google PageSpeed",
          "Privacy policy page (required if you collect emails or run ads)",
          "SSL certificate (https://) — most hosts include this free",
          "Google Analytics or Plausible installed and tracking",
          "Clear call-to-action on every page (one per page, not five)",
          "About page with your name, photo, and why you started this business",
          "Footer with contact info, social links, and copyright",
          "Meta descriptions written for each page (for Google)",
          "Connect domain to Google Search Console",
        ].map((item, i) => (
          <View key={i} style={[S.row, { marginBottom: 6 }]}>
            <Text style={[S.bullet, { color: "#16A34A" }]}>□</Text>
            <Text style={S.itemText}>{item}</Text>
          </View>
        ))}
        <Footer page={4} />
      </Page>

      {/* Page 5 — Social + Clients */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>6. Google Business Profile (10 Steps)</Text>
        <Text style={[S.small, { marginBottom: 8 }]}>A Google Business Profile is free local SEO. Even service-based businesses benefit enormously. Setup takes 30 minutes.</Text>
        {[
          "Go to business.google.com and sign in with your business Google account",
          "Enter your business name exactly as it appears on your LLC",
          "Choose your primary business category (be specific — choose 'AI Consultant' not just 'Consultant')",
          "Add your service area or physical address",
          "Add your website URL",
          "Add your phone number (a Google Voice number is fine if you want privacy)",
          "Upload your logo as the profile photo",
          "Upload 5+ photos of your work, workspace, or team",
          "Write your business description (750 characters, lead with keywords)",
          "Verify your listing via postcard or phone call",
        ].map((step, i) => (
          <View key={i} style={[S.row, { marginBottom: 7 }]}>
            <View style={S.numBadge}><Text style={S.numText}>{i + 1}</Text></View>
            <Text style={S.itemText}>{step}</Text>
          </View>
        ))}

        <View style={S.divider} />

        <Text style={S.h2}>7. Social Media Starter Pack</Text>
        <Text style={[S.small, { marginBottom: 8 }]}>Pick one primary platform and post consistently for 90 days before adding a second.</Text>
        {[
          ["LinkedIn", "Best for B2B and professional services. Post 3x/week: 1 value tip, 1 behind-the-scenes, 1 client result or testimonial."],
          ["Instagram", "Best for visual businesses (creative, lifestyle, product). Use Reels 3–4x/week. Post carousels for educational content."],
          ["Facebook", "Best for local service businesses. Create a Business Page and join 5–10 local groups. Don't spam — answer questions and add value."],
        ].map(([platform, tip]) => (
          <View key={platform as string} style={S.toolCard}>
            <Text style={S.toolName}>{platform}</Text>
            <Text style={S.small}>{tip}</Text>
          </View>
        ))}
        <Footer page={5} />
      </Page>

      {/* Page 6 — First 10 Clients */}
      <Page size="A4" style={S.page}>
        <Text style={S.h2}>8. Landing Your First 10 Clients</Text>
        <Text style={[S.body, { marginBottom: 12 }]}>Don't overthink outreach. Use these templates, personalize the first 2 sentences, and send 5 per day. Your first client is closer than you think.</Text>

        {[
          {
            label: "Template 1 — Warm Outreach (for people you know)",
            text: `Hi [Name],\n\nI recently launched [Your Business] and I'm taking on my first clients. I know you've been working on [relevant challenge], and I think I could genuinely help.\n\nI'm offering [specific service] and I'd love to give you a free 30-minute strategy call to see if it's a fit. No pressure at all.\n\nWould [Day] or [Day] work for a quick call?`,
          },
          {
            label: "Template 2 — Cold Outreach (LinkedIn/Email)",
            text: `Hi [Name],\n\nI noticed [specific thing about their business or content]. I work with [type of business] to [specific result], and I had a few ideas that might be useful for you.\n\nI'm not going to pitch you — I'd just love to share what I've seen work. Worth a 15-minute call?\n\nEither way, keep up the great work on [specific thing].`,
          },
          {
            label: "Template 3 — Follow-Up (if no response after 5 days)",
            text: `Hey [Name] — just floating this back up. I know inboxes get crazy.\n\nStill happy to chat if timing works. If now isn't right, no worries — feel free to reach out whenever it makes sense.`,
          },
          {
            label: "Template 4 — Referral Ask (after your first client)",
            text: `Hi [Name],\n\nWorking with you has been great. If you know anyone else who could use [service], I'd love an introduction. I offer [referral incentive or just ask as a favor].\n\nNo pressure at all — just thought I'd ask. Thanks again for trusting me with [project].`,
          },
          {
            label: "Template 5 — Facebook/LinkedIn Group Visibility Post",
            text: `I just launched [Business Name] and I'm looking for [3–5 ideal clients] to work with over the next 30 days at a reduced rate in exchange for a testimonial.\n\nI help [specific type of person] with [specific problem]. Here's what I'd do for you: [brief description].\n\nDM me if interested or drop a comment below. Happy to jump on a quick call first.`,
          },
        ].map(({ label, text }) => (
          <View key={label} style={S.promptCard}>
            <Text style={S.promptLabel}>{label}</Text>
            <Text style={S.promptText}>{text}</Text>
          </View>
        ))}

        <View style={S.divider} />
        <View style={S.box}>
          <Text style={[S.small, { fontFamily: "Helvetica-Bold" }]}>Want done-for-you? TechUnaVerse builds AI-powered lead systems, websites, and automation that bring clients to you.</Text>
          <Text style={[S.small, { marginTop: 4 }]}>Book a free discovery call: techunaverse.com/contact</Text>
        </View>
        <Footer page={6} />
      </Page>

    </Document>
  );
}
