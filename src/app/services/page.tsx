"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── AI CONSULTING TAB ─── */
const AI_SERVICES = [
  {
    icon: "💬", title: "Web Strategy Consultation", price: "$150",
    desc: "1-hour focused session to plan your website — sitemap, copy strategy, and tech stack.", new: true,
    features: ["1-Hour Deep Dive", "Sitemap & Page Planning", "Tech Stack Recommendation", "Written Action Plan"],
  },
  {
    icon: "🎯", title: "AI Strategy Session", price: "$250",
    desc: "90-minute consultation to assess your AI opportunities and build a clear roadmap.",
    features: ["90-Minute Deep Dive", "AI Opportunity Assessment", "Custom Roadmap & Recommendations", "Recording Included"],
  },
  {
    icon: "🧠", title: "KnowledgeBot Launch Package", price: "$1,500",
    desc: "An AI assistant that centralizes your company knowledge and answers questions instantly.",
    features: ["Internal AI Assistant", "FAQ Knowledge Base", "Document Search", "Employee Onboarding Support", "Setup, Training & User Guide"],
  },
  {
    icon: "⚡", title: "Business Automation Package", price: "$3,000", featured: true,
    desc: "Automate your most repetitive processes and reclaim hours every week.",
    features: ["Workflow Assessment & Process Mapping", "Custom Automation Development", "Testing & Deployment", "Process Documentation", "Staff Training"],
  },
  {
    icon: "🚀", title: "Digital Transformation Package", price: "$5,000+",
    desc: "A comprehensive modernization of your operations — AI, automation, website, and training in one engagement.",
    features: ["Custom AI Assistant", "Website Integration", "Internal Knowledge System", "Analytics Dashboard", "Full Staff Training & Support"],
  },
];

/* ─── WEB DEV TAB ─── */
const WEB_PACKAGES = [
  {
    tier: "Starter", price: "$1,500", timeline: "2-week delivery",
    desc: "Perfect for new businesses that need a clean, professional online presence fast.",
    features: ["5-Page Custom Website", "Mobile-Optimized Design", "Contact Form & Lead Capture", "SEO Foundation Setup", "Google Analytics", "1 Round of Revisions"],
  },
  {
    tier: "Pro", price: "$3,000", timeline: "4-week delivery", popular: true,
    desc: "For growing businesses ready to turn their website into a lead-generation machine.",
    features: ["Up to 10 Pages", "CMS Integration (easy content updates)", "Advanced Lead Capture + CRM Hook", "Google Business Profile Setup", "Performance & Core Web Vitals", "Social Media Integration", "2 Rounds of Revisions", "30-Day Post-Launch Support"],
  },
  {
    tier: "Premium", price: "$5,000+", timeline: "6–8 week delivery",
    desc: "Full brand-and-build experience with custom features and ongoing partnership.",
    features: ["Unlimited Pages", "E-Commerce Option", "AI Chatbot Embedded", "Custom Animations & Interactions", "Full Brand Identity Package", "Email Marketing Integration", "Priority Support (3 months)", "Monthly Performance Report"],
  },
];

/* ─── DIY RESOURCES TAB ─── */
const DIY_PRODUCTS = [
  {
    icon: "📚", title: "Monthly AI Toolkit", price: "$29", period: "/mo", sub: true,
    badge: "Most Popular",
    desc: "A fresh PDF guide every month covering the best AI tools, prompt templates, and automation strategies — written for business owners, not developers.",
    features: ["Monthly PDF Guide (20–30 pages)", "AI Prompt Template Pack", "Tool-of-the-Month Deep Dive", "Automation Workflow Templates", "Private Community Access", "Cancel Anytime"],
  },
  {
    icon: "🗓️", title: "Annual AI Toolkit", price: "$249", period: "/yr", sub: true,
    badge: "Save $99",
    desc: "Everything in the monthly plan plus bonus automation templates, early access to new guides, and priority email support.",
    features: ["Everything in Monthly Plan", "Save $99 vs. Monthly", "Bonus Automation Templates", "Early Access to New Guides", "Priority Email Support (48hr)"],
  },
  {
    icon: "🏢", title: "Business Launch Starter Kit", price: "$79", period: " one-time",
    desc: "A step-by-step PDF guide to launching your business the right way — from LLC setup to your first paying client.",
    features: ["LLC & Business Structure Guide", "Branding Basics Workbook", "First Website Checklist", "Google Business Profile Setup", "Social Media Starter Pack", "Email + Domain Setup Guide", "First 10 Clients Outreach Templates"],
  },
  {
    icon: "💡", title: "AI Prompt Library", price: "$49", period: " one-time",
    desc: "150+ battle-tested prompts for every part of running a business — write better, faster, and sound more professional.",
    features: ["150+ Business Prompts", "Sales & Proposal Templates", "Social Media Caption Bank", "Email Sequence Templates", "Client Communication Scripts", "Meeting Summary Prompts", "SEO-Focused Content Prompts"],
  },
];

function ServiceCard({ s }: { s: typeof AI_SERVICES[0] }) {
  return (
    <div className={`relative bg-glass border rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${s.featured ? "border-[rgba(212,175,55,0.45)] bg-gradient-to-br from-[rgba(212,175,55,0.07)] to-transparent" : "border-glass hover:border-[rgba(124,58,237,0.4)]"}`}>
      {s.featured && <span className="absolute top-5 right-5 bg-gradient-to-r from-gold to-gold2 text-navy text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">Most Popular</span>}
      {s.new && <span className="absolute top-5 right-5 bg-gradient-to-r from-teal to-[#0891b2] text-white text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">New</span>}
      <div className="text-2xl mb-3">{s.icon}</div>
      <p className="font-serif text-[2rem] font-bold text-gold mt-2 mb-1">{s.price}</p>
      <h3 className="font-bold text-[1.05rem] mb-2">{s.title}</h3>
      <p className="text-slate-400 text-[0.86rem] leading-relaxed mb-5">{s.desc}</p>
      <ul className="flex-1 flex flex-col gap-2 mb-6">
        {s.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[0.84rem] text-slate-300">
            <span className="text-gold font-bold mt-0.5 flex-shrink-0">✓</span> {f}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`w-full text-center py-3 rounded-[10px] text-[0.88rem] font-semibold transition-all duration-200 no-underline block ${s.featured ? "bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.35)] text-gold hover:bg-gold hover:text-navy" : "bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.25)] text-purple2 hover:bg-purple hover:text-white hover:border-purple"}`}
      >
        Get Started →
      </Link>
    </div>
  );
}

export default function Services() {
  const [tab, setTab] = useState<"ai" | "web" | "diy">("ai");

  return (
    <div className="pt-20 pb-20 px-6 lg:px-10 max-w-6xl mx-auto">
      <ScrollReveal>
        <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">TechUnaVerse Services</span>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-tight mt-2 mb-3">
          Technology That Works <span className="text-gold">For You.</span>
        </h1>
        <p className="text-slate-400 max-w-[580px] leading-[1.8] mb-10">
          From hands-on AI consulting to DIY PDF guides — choose the level of support that fits your stage and budget.
        </p>
      </ScrollReveal>

      {/* Tab header */}
      <div className="flex gap-1 flex-wrap border-b border-gold-dim mb-10">
        {([
          { key: "ai",  label: "🤖  AI Consulting" },
          { key: "web", label: "🌐  Web Development" },
          { key: "diy", label: "📄  DIY Resources" },
        ] as const).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-3 text-[0.9rem] font-semibold border-b-2 -mb-px transition-all duration-200 bg-transparent cursor-pointer ${tab === key ? "text-gold border-gold" : "text-slate-400 border-transparent hover:text-white"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* AI Consulting */}
      {tab === "ai" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AI_SERVICES.map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
          {/* Ideal clients */}
          <div className="mt-10 bg-glass border border-glass rounded-[16px] p-8 text-center">
            <p className="text-slate-400 text-[0.85rem] mb-4 font-semibold uppercase tracking-wider">Ideal Clients</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Small Businesses", "Real Estate Companies", "Property Managers", "Nonprofits", "Healthcare Practices", "Professional Services"].map((c) => (
                <span key={c} className="bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.22)] rounded-full px-4 py-1.5 text-[0.82rem] text-purple2 font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Web Development */}
      {tab === "web" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEB_PACKAGES.map((p) => (
              <div key={p.tier} className={`relative flex flex-col bg-glass border rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${p.popular ? "border-[rgba(212,175,55,0.45)] bg-gradient-to-br from-[rgba(212,175,55,0.07)] to-transparent" : "border-glass hover:border-[rgba(6,182,212,0.4)]"}`}>
                {p.popular && <span className="absolute top-5 right-5 bg-gradient-to-r from-gold to-gold2 text-navy text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">Most Popular</span>}
                <p className="text-teal text-[0.75rem] font-bold uppercase tracking-widest mb-1">{p.tier}</p>
                <p className="font-serif text-[2.4rem] font-bold text-gold">{p.price}</p>
                <p className="text-slate-500 text-[0.78rem] mb-3">{p.timeline}</p>
                <p className="text-slate-400 text-[0.87rem] leading-relaxed mb-5">{p.desc}</p>
                <ul className="flex-1 flex flex-col gap-2.5 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.84rem] text-slate-300">
                      <span className="text-gold font-bold flex-shrink-0 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center block py-3 rounded-[10px] text-[0.88rem] font-semibold no-underline transition-all duration-200 ${p.popular ? "bg-[rgba(212,175,55,0.15)] border border-[rgba(212,175,55,0.35)] text-gold hover:bg-gold hover:text-navy" : "bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.3)] text-teal hover:bg-teal hover:text-navy"}`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-[0.82rem] text-center mt-8">All web packages include mobile-optimized design and a 2-week satisfaction guarantee. Have a unique project? <Link href="/contact" className="text-gold hover:underline">Let&apos;s talk.</Link></p>
        </div>
      )}

      {/* DIY Resources */}
      {tab === "diy" && (
        <div>
          <div className="bg-gradient-to-br from-[rgba(6,182,212,0.1)] to-[rgba(124,58,237,0.1)] border border-[rgba(6,182,212,0.2)] rounded-[20px] p-8 text-center mb-8">
            <h2 className="font-serif text-[1.8rem] font-black mb-2">Build It Yourself. We Made It Simple.</h2>
            <p className="text-slate-400 max-w-[460px] mx-auto text-[0.95rem] leading-relaxed">
              Not ready for full service? Our PDF guides and toolkits give you everything you need to take action today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DIY_PRODUCTS.map((d) => (
              <div key={d.title} className={`relative flex flex-col bg-glass border rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${d.sub ? "border-[rgba(212,175,55,0.4)]" : "border-glass hover:border-[rgba(6,182,212,0.35)]"}`}>
                {d.badge && <span className="absolute top-5 right-5 bg-gradient-to-r from-gold to-gold2 text-navy text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">{d.badge}</span>}
                <div className="text-2xl mb-3">{d.icon}</div>
                {d.sub && <span className="inline-flex items-center gap-1 text-teal text-[0.72rem] font-bold uppercase tracking-wide bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.25)] rounded-full px-2.5 py-0.5 mb-3 self-start">Subscription</span>}
                <p className="font-serif text-[2rem] font-bold text-gold">
                  {d.price}<span className="text-slate-400 font-sans text-[0.9rem] font-normal">{d.period}</span>
                </p>
                <h3 className="font-bold text-[1.05rem] mt-1 mb-2">{d.title}</h3>
                <p className="text-slate-400 text-[0.86rem] leading-relaxed mb-5 flex-grow">{d.desc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.84rem] text-slate-300">
                      <span className="text-teal font-bold flex-shrink-0 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="text-center block py-3 rounded-[10px] text-[0.88rem] font-semibold no-underline border border-[rgba(6,182,212,0.35)] text-teal hover:bg-teal hover:text-navy transition-all duration-200">
                  {d.sub ? "Subscribe Now →" : "Get Instant Access →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
