"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

const PRODUCTS = [
  {
    icon: "📚", title: "Monthly AI Toolkit", price: "$29", period: "/mo", sub: true, badge: "Most Popular",
    productId: "toolkit-monthly",
    desc: "A fresh PDF guide every month covering the best AI tools, prompts, and automation strategies for business owners.",
    features: ["Monthly PDF Guide (20–30 pages)", "AI Prompt Template Pack", "Tool-of-the-Month Deep Dive", "Automation Workflow Templates", "Private Community Access", "Cancel Anytime"],
  },
  {
    icon: "🗓️", title: "Annual AI Toolkit", price: "$249", period: "/yr", sub: true, badge: "Save $99",
    productId: "toolkit-annual",
    desc: "Full year of monthly guides plus bonus templates, early access, and priority support.",
    features: ["Everything in Monthly Plan", "Save $99 vs. Monthly", "Bonus Automation Templates", "Early Access to New Guides", "Priority Email Support"],
  },
  {
    icon: "🏢", title: "Business Launch Starter Kit", price: "$79", period: " one-time", sub: false,
    productId: "starter-kit",
    desc: "Step-by-step PDF guide to launching your business — from LLC setup to your first paying client.",
    features: ["LLC & Business Structure Guide", "Branding Basics Workbook", "First Website Checklist", "Google Business Profile Setup", "Social Media Starter Pack", "First 10 Clients Outreach Templates"],
  },
  {
    icon: "💡", title: "AI Prompt Library", price: "$49", period: " one-time", sub: false,
    productId: "prompt-library",
    desc: "150+ battle-tested business prompts for sales, social, email, proposals, and more.",
    features: ["150+ Business Prompts", "Sales & Proposal Templates", "Social Media Caption Bank", "Email Sequence Templates", "Client Communication Scripts", "SEO-Focused Content Prompts"],
  },
];

const FAQS = [
  { q: "Do I need any tech experience to use these guides?", a: "Not at all. Every guide is written in plain English for business owners, not developers. If you can use Google Docs, you can follow these guides." },
  { q: "What format are the PDFs in?", a: "All guides are delivered as beautifully formatted PDFs, viewable on any device. You'll receive a personal download link by email immediately after purchase." },
  { q: "Can I upgrade to full service later?", a: "Absolutely. Many clients start with a DIY guide to understand their options, then hire us to execute. We even credit your guide purchase toward your first package." },
  { q: "What if I don't receive my email?", a: "Check your spam folder first. If it's still not there after 10 minutes, email admin@techunaverse.com with your receipt and we'll sort it immediately." },
];

function CheckoutButton({ productId, sub }: { productId: string; sub: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Failed to create checkout");
      window.location.href = data.url;
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={status === "loading"}
      className="text-center block w-full py-3 rounded-[10px] text-[0.88rem] font-semibold border border-[rgba(6,182,212,0.4)] text-teal hover:bg-teal hover:text-navy transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-transparent"
    >
      {status === "loading" ? "Redirecting…" : status === "error" ? "Try again" : sub ? "Subscribe Now →" : "Get Instant Access →"}
    </button>
  );
}

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [leadStatus, setLeadStatus] = useState<Status>("idle");
  const [leadEmail, setLeadEmail] = useState("");

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLeadStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setLeadStatus("success");
    } catch {
      setLeadStatus("error");
      setTimeout(() => setLeadStatus("idle"), 3000);
    }
  }

  return (
    <div className="pt-20 pb-20">
      {/* Hero banner */}
      <div className="px-6 lg:px-10 mb-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[rgba(6,182,212,0.12)] to-[rgba(124,58,237,0.12)] border border-[rgba(6,182,212,0.2)] rounded-[24px] px-10 py-14 text-center">
          <ScrollReveal>
            <span className="text-[0.75rem] font-bold uppercase tracking-widest text-teal">DIY Resources</span>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-tight mt-2 mb-4">
              Build It Yourself. <span className="text-gold">We Made It Simple.</span>
            </h1>
            <p className="text-slate-400 max-w-[520px] mx-auto leading-[1.8] text-[1rem]">
              Not ready for full service? Get our PDF guides and toolkits — everything you need to take action on AI and business growth today.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-6 lg:px-10 max-w-6xl mx-auto">

        {/* Free lead magnet */}
        <ScrollReveal className="mb-10">
          <div className="bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.3)] rounded-[20px] p-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="text-5xl flex-shrink-0">🎁</div>
            <div className="flex-1">
              <span className="text-gold text-[0.7rem] font-bold uppercase tracking-widest">Free Download</span>
              <h2 className="font-bold text-xl mt-1 mb-2">AI Tool Checklist for Small Businesses</h2>
              <p className="text-slate-400 text-[0.88rem] leading-relaxed">The 12 AI tools every small business should know about in 2026 — with use cases, pricing, and getting-started tips. No fluff.</p>
            </div>

            {leadStatus === "success" ? (
              <div className="flex-shrink-0 text-center">
                <p className="text-emerald-400 font-semibold text-[0.9rem]">✓ Check your inbox!</p>
                <p className="text-slate-500 text-[0.78rem] mt-1">Download link sent.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <input
                  type="email"
                  value={leadEmail}
                  onChange={e => setLeadEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-glass border border-glass rounded-[8px] px-4 py-2.5 text-white placeholder-slate-500 text-[0.87rem] outline-none focus:border-[rgba(212,175,55,0.4)] w-52"
                />
                <button
                  type="submit"
                  disabled={leadStatus === "loading"}
                  className="px-5 py-2.5 bg-gradient-to-r from-gold to-gold2 text-navy font-bold rounded-[8px] cursor-pointer border-none text-[0.87rem] whitespace-nowrap hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {leadStatus === "loading" ? "Sending…" : leadStatus === "error" ? "Try again" : "Get Free Checklist →"}
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {PRODUCTS.map((d, i) => (
            <ScrollReveal key={d.title} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              <div className={`relative flex flex-col bg-glass border rounded-[20px] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${d.sub ? "border-[rgba(212,175,55,0.4)]" : "border-glass hover:border-[rgba(6,182,212,0.35)]"}`}>
                {d.badge && <span className="absolute top-5 right-5 bg-gradient-to-r from-gold to-gold2 text-navy text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">{d.badge}</span>}
                <div className="text-3xl mb-3">{d.icon}</div>
                {d.sub && <span className="self-start text-teal text-[0.72rem] font-bold uppercase tracking-wide bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.25)] rounded-full px-2.5 py-0.5 mb-3">Subscription</span>}
                <p className="font-serif text-[2rem] font-bold text-gold">{d.price}<span className="text-slate-400 font-sans text-[0.9rem] font-normal">{d.period}</span></p>
                <h3 className="font-bold text-[1.1rem] mt-1.5 mb-2">{d.title}</h3>
                <p className="text-slate-400 text-[0.87rem] leading-relaxed mb-5 flex-grow">{d.desc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[0.84rem] text-slate-300">
                      <span className="text-teal font-bold flex-shrink-0 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <CheckoutButton productId={d.productId} sub={d.sub} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* FAQ */}
        <ScrollReveal>
          <h2 className="font-serif text-[1.8rem] font-black mb-6">Frequently Asked <span className="text-gold">Questions</span></h2>
          <div className="flex flex-col gap-3 max-w-[700px]">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-glass border border-glass rounded-[14px] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-[0.92rem] cursor-pointer bg-transparent border-none text-white hover:text-gold transition-colors duration-200"
                >
                  {faq.q}
                  <span className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`faq-answer ${openFaq === i ? "open" : ""}`}>
                  <p className="px-6 pb-5 text-slate-400 text-[0.88rem] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Upgrade CTA */}
        <ScrollReveal className="mt-14">
          <div className="bg-gradient-to-br from-[rgba(124,58,237,0.15)] to-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] rounded-[20px] p-10 text-center">
            <h2 className="font-serif text-[1.8rem] font-black mb-3">Ready to Skip to <span className="text-gold">Done-For-You?</span></h2>
            <p className="text-slate-400 max-w-[420px] mx-auto mb-7 leading-relaxed">Guide purchases credit toward any full-service package. Let us do the heavy lifting.</p>
            <a href="https://calendar.app.google/F7pGNirVTiWuG3CM7" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3.5 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all duration-200 no-underline">
              Book a Free Discovery Call →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
