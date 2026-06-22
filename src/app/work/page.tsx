"use client";
import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Browser mockup sub-components ── */
function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="bg-[#1e2840] px-3 py-2 flex items-center gap-2 h-8">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full browser-dot-red" />
        <div className="w-2.5 h-2.5 rounded-full browser-dot-yellow" />
        <div className="w-2.5 h-2.5 rounded-full browser-dot-green" />
      </div>
      <div className="flex-1 bg-[rgba(255,255,255,0.06)] rounded px-2 py-0.5 text-[10px] text-slate-500 font-mono truncate">{url}</div>
    </div>
  );
}

function MockNavBar({ logoColor = "#D4AF37" }: { logoColor?: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5 bg-[rgba(255,255,255,0.05)]">
      <div style={{ background: logoColor }} className="h-1.5 w-10 rounded" />
      <div className="flex gap-2">
        {[1, 2, 3].map((i) => <div key={i} className="h-1 w-5 bg-[rgba(255,255,255,0.25)] rounded" />)}
      </div>
    </div>
  );
}

/* ── SITE PREVIEWS ── */
function RealtyPreview() {
  return (
    <div className="h-[168px] bg-gradient-to-b from-[#0f3460] to-[#1a1a2e] relative overflow-hidden">
      <MockNavBar logoColor="#E8A020" />
      <div className="px-3 pt-2">
        <div className="h-2.5 w-3/4 bg-[rgba(255,255,255,0.6)] rounded mb-1.5" />
        <div className="h-1.5 w-1/2 bg-[rgba(255,255,255,0.25)] rounded mb-3" />
        <div className="h-5 w-20 rounded bg-[#E8A020]" />
      </div>
      <div className="flex gap-1.5 px-3 mt-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 h-11 bg-[rgba(255,255,255,0.07)] rounded border border-[rgba(255,255,255,0.1)]" />
        ))}
      </div>
    </div>
  );
}

function PropertyMgmtPreview() {
  return (
    <div className="h-[168px] bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] relative overflow-hidden">
      <MockNavBar logoColor="#06B6D4" />
      <div className="flex h-[calc(168px-32px)]">
        <div className="w-20 bg-[rgba(0,0,0,0.3)] flex flex-col gap-1 p-2">
          {[1, 2, 3, 4].map((i) => <div key={i} className={`h-4 rounded ${i === 1 ? "bg-teal/40" : "bg-[rgba(255,255,255,0.06)]"}`} />)}
        </div>
        <div className="flex-1 p-2 flex flex-col gap-1.5">
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 h-9 bg-[rgba(255,255,255,0.06)] rounded border border-[rgba(255,255,255,0.08)] flex items-end p-1">
                <div className="w-full h-3 bg-teal/30 rounded-sm" />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-[rgba(255,255,255,0.04)] rounded border border-[rgba(255,255,255,0.07)]" />
        </div>
      </div>
    </div>
  );
}

function NonprofitPreview() {
  return (
    <div className="h-[168px] bg-gradient-to-br from-[#1a0a2e] to-[#2d1b55] relative overflow-hidden">
      <MockNavBar logoColor="#9D6DF5" />
      <div className="px-3 pt-2 text-center">
        <div className="h-2.5 w-2/3 bg-[rgba(255,255,255,0.55)] rounded mx-auto mb-1.5" />
        <div className="h-1.5 w-1/2 bg-[rgba(255,255,255,0.25)] rounded mx-auto mb-3" />
        <div className="flex gap-2 justify-center">
          <div className="h-5 w-16 rounded bg-[#7C3AED]" />
          <div className="h-5 w-16 rounded border border-[rgba(157,109,245,0.5)]" />
        </div>
      </div>
      <div className="flex gap-1.5 px-3 mt-4">
        {["🎓", "🤝", "🌍"].map((icon) => (
          <div key={icon} className="flex-1 h-10 bg-[rgba(255,255,255,0.05)] rounded border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-xs">{icon}</div>
        ))}
      </div>
    </div>
  );
}

function HealthcarePreview() {
  return (
    <div className="h-[168px] bg-gradient-to-b from-[#0a1628] to-[#0d2b45] relative overflow-hidden">
      <MockNavBar logoColor="#06B6D4" />
      <div className="px-3 pt-2">
        <div className="h-2.5 w-3/5 bg-[rgba(255,255,255,0.6)] rounded mb-1.5" />
        <div className="h-1.5 w-5/12 bg-[rgba(255,255,255,0.25)] rounded mb-3" />
        <div className="h-5 w-24 rounded bg-teal/70" />
      </div>
      <div className="grid grid-cols-2 gap-1.5 px-3 mt-3">
        {["Book Appointment", "Services", "Our Team", "Patient Portal"].map((t) => (
          <div key={t} className="h-7 bg-[rgba(255,255,255,0.06)] rounded border border-[rgba(255,255,255,0.08)] flex items-center px-2">
            <div className="h-1 w-12 bg-[rgba(255,255,255,0.3)] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BoutiquePreview() {
  return (
    <div className="h-[168px] bg-gradient-to-br from-[#1c0d0d] to-[#3b1515] relative overflow-hidden">
      <MockNavBar logoColor="#F87171" />
      <div className="px-3 pt-2">
        <div className="h-3 w-2/3 bg-[rgba(255,255,255,0.6)] rounded mb-1.5" />
        <div className="h-1.5 w-1/2 bg-[rgba(255,255,255,0.2)] rounded mb-3" />
        <div className="h-5 w-20 rounded bg-[#F87171]/70" />
      </div>
      <div className="flex gap-1.5 px-3 mt-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-1 h-10 bg-[rgba(255,255,255,0.06)] rounded border border-[rgba(255,255,255,0.09)]">
            <div className="h-5 bg-[rgba(248,113,113,0.15)] rounded-t" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatBotPreview({ accentColor = "#7C3AED" }: { accentColor?: string }) {
  const msgs = [
    { bot: true,  text: "Hi! How can I help you today?" },
    { bot: false, text: "When is my rent due?" },
    { bot: true,  text: "Your rent is due on the 1st. Would you like a reminder?" },
  ];
  return (
    <div className="h-[168px] bg-[#0f1535] flex flex-col">
      <div className="px-2 py-1.5 border-b border-[rgba(255,255,255,0.06)] flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, ${accentColor}, #9D6DF5)` }} />
        <div className="h-1.5 w-20 bg-[rgba(255,255,255,0.4)] rounded" />
      </div>
      <div className="flex-1 flex flex-col gap-1.5 px-2 py-2 overflow-hidden">
        {msgs.map((m, i) => (
          <div key={i} className={`flex gap-1.5 items-end ${m.bot ? "" : "flex-row-reverse"}`}>
            <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: m.bot ? `${accentColor}` : "#06B6D4" }} />
            <div className={`text-[7px] px-2 py-1 rounded-[6px] max-w-[120px] leading-tight text-[rgba(255,255,255,0.8)] ${m.bot ? "bg-[rgba(124,58,237,0.3)]" : "bg-[rgba(6,182,212,0.3)]"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-2 mb-2 h-5 bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)] flex items-center px-2 gap-2">
        <div className="flex-1 h-1 bg-[rgba(255,255,255,0.1)] rounded" />
        <div className="w-3 h-3 rounded-full" style={{ background: accentColor }} />
      </div>
    </div>
  );
}

/* ── PORTFOLIO DATA ── */
type PortfolioType = "website" | "aibot" | "setup";

const PORTFOLIO: {
  type: PortfolioType; url: string; typeLabel: string;
  title: string; desc: string; tags: string[];
  preview: React.ReactNode;
}[] = [
  {
    type: "website", url: "sunriserealty.com", typeLabel: "Website",
    title: "Sunrise Realty Group",
    desc: "Lead-gen focused real estate site with property search, agent profiles, and automated inquiry routing.",
    tags: ["Real Estate", "Lead Capture", "SEO"],
    preview: <RealtyPreview />,
  },
  {
    type: "website", url: "metroproperty.com", typeLabel: "Website",
    title: "Metro Property Solutions",
    desc: "Property management company with tenant portal, maintenance requests, and owner dashboard.",
    tags: ["Property Mgmt", "Dashboard", "Portal"],
    preview: <PropertyMgmtPreview />,
  },
  {
    type: "website", url: "hopefoundationva.org", typeLabel: "Website",
    title: "Hope Foundation VA",
    desc: "Nonprofit site with donation flow, volunteer signup, program catalog, and grant reporting pages.",
    tags: ["Nonprofit", "Donations", "Events"],
    preview: <NonprofitPreview />,
  },
  {
    type: "website", url: "drchenfamily.com", typeLabel: "Website",
    title: "Dr. Chen Family Practice",
    desc: "Healthcare practice site with online appointment booking, services overview, and HIPAA-compliant forms.",
    tags: ["Healthcare", "Booking", "HIPAA-Ready"],
    preview: <HealthcarePreview />,
  },
  {
    type: "website", url: "bloomandgather.co", typeLabel: "Website",
    title: "Bloom & Gather Boutique",
    desc: "Local boutique e-commerce site with product catalog, Instagram feed integration, and loyalty program.",
    tags: ["E-Commerce", "Local Business", "Brand"],
    preview: <BoutiquePreview />,
  },
  {
    type: "aibot", url: "propertybot.ai", typeLabel: "AI Bot",
    title: "PropertyBot AI",
    desc: "Tenant-facing chatbot that answers lease questions, maintenance requests, and payment inquiries 24/7.",
    tags: ["AI Chatbot", "Real Estate", "Automation"],
    preview: <ChatBotPreview accentColor="#7C3AED" />,
  },
  {
    type: "aibot", url: "intakebot.ai", typeLabel: "AI Bot",
    title: "Client Intake Assistant",
    desc: "Lead-capture bot that qualifies prospects, collects project info, and books discovery calls automatically.",
    tags: ["Lead Gen", "Automation", "CRM Ready"],
    preview: <ChatBotPreview accentColor="#06B6D4" />,
  },
  {
    type: "aibot", url: "knowledgebot.ai", typeLabel: "AI Bot",
    title: "FAQ Knowledge Bot",
    desc: "Internal knowledge base chatbot trained on company docs, policies, and SOPs — answers staff questions instantly.",
    tags: ["Internal AI", "Knowledge Base", "HR"],
    preview: <ChatBotPreview accentColor="#D4AF37" />,
  },
];

const FILTERS: { key: "all" | PortfolioType; label: string }[] = [
  { key: "all",     label: "All" },
  { key: "website", label: "🌐  Websites" },
  { key: "aibot",   label: "🤖  AI Bots" },
  { key: "setup",   label: "🏢  Business Setup" },
];

export default function Work() {
  const [filter, setFilter] = useState<"all" | PortfolioType>("all");
  const visible = filter === "all" ? PORTFOLIO : PORTFOLIO.filter((p) => p.type === filter);

  return (
    <div className="pt-20 pb-20 px-6 lg:px-10 max-w-6xl mx-auto">
      <ScrollReveal>
        <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">Sample Solutions</span>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-tight mt-2 mb-3">
          What We <span className="text-gold">Build.</span>
        </h1>
        <p className="text-slate-400 max-w-[600px] leading-[1.8] mb-3">
          These are demos and sample projects showing the type of websites, AI bots, and business systems we build.
          We work with real estate teams, healthcare practices, nonprofits, and local businesses.
        </p>
        <p className="text-slate-500 text-[0.82rem] mb-10 italic">
          *These are sample/demo projects illustrating our capabilities. Ready to see what we&apos;d build for your business?{" "}
          <Link href="/contact" className="text-gold hover:underline">Book a free call.</Link>
        </p>
      </ScrollReveal>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-10">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full text-[0.85rem] font-semibold border transition-all duration-200 cursor-pointer ${
              filter === key
                ? "bg-[rgba(212,175,55,0.15)] border-[rgba(212,175,55,0.5)] text-gold"
                : "bg-glass border-glass text-slate-300 hover:border-[rgba(212,175,55,0.3)] hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filter === "setup" ? (
        /* Business Setup placeholder */
        <div className="bg-glass border border-glass rounded-[20px] p-12 text-center">
          <p className="text-4xl mb-4">🏢</p>
          <h2 className="font-serif text-2xl font-black mb-3">Business Setup Packages</h2>
          <p className="text-slate-400 max-w-[460px] mx-auto leading-relaxed mb-6">
            We help founders get their digital presence off the ground — domain, email, Google Business, website, and first 10 client outreach all in one package.
          </p>
          <Link href="/contact" className="inline-block px-7 py-3 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold no-underline hover:-translate-y-0.5 transition-all duration-200">
            Book a Discovery Call →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item, i) => (
            <ScrollReveal key={item.title} delay={(Math.min(i % 3 + 1, 4)) as 1 | 2 | 3 | 4}>
              <div className="bg-navy2 border border-glass rounded-[20px] overflow-hidden hover:-translate-y-1 hover:border-[rgba(212,175,55,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
                {/* Browser mockup */}
                <div className="px-5 pt-5 pb-0">
                  <div className="rounded-[12px_12px_0_0] overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                    <BrowserChrome url={item.url} />
                    {item.preview}
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <p className="text-teal text-[0.7rem] font-bold uppercase tracking-widest mb-1.5">{item.typeLabel}</p>
                  <h3 className="font-bold text-[1.05rem] mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-[0.84rem] leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span key={t} className="bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] text-purple2 text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* CTA */}
      <ScrollReveal className="mt-16">
        <div className="bg-gradient-to-br from-[rgba(124,58,237,0.15)] to-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] rounded-[20px] p-10 text-center">
          <h2 className="font-serif text-[2rem] font-black mb-3">Want something built for <span className="text-gold">your business?</span></h2>
          <p className="text-slate-400 max-w-[440px] mx-auto mb-7 leading-relaxed">Share your idea and we&apos;ll put together a custom proposal — usually within 48 hours.</p>
          <Link href="/contact" className="inline-block px-8 py-3.5 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all duration-200 no-underline">
            Start Your Project →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
