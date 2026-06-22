"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const UniverseJourneyCanvas = dynamic(
  () => import("@/components/UniverseJourneyCanvas"),
  { ssr: false, loading: () => null }
);

const PHRASES = ["AI Consulting.", "Web Development.", "Business Automation.", "Digital Transformation."];

function TypingHero() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  return (
    <span className="text-gold font-serif text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold block min-h-[3rem]">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}


const DIVISIONS = [
  { icon: "🤖", logo: "/assets/images/una-ai-logo.png", tag: "Active", tagClass: "bg-[rgba(212,175,55,0.15)] text-gold border-[rgba(212,175,55,0.3)]", title: "TechUnaVerse AI", body: "AI consulting, workflow automation, knowledge management systems, and digital transformation for growing businesses.", href: "/divisions#techunaverse-ai" },
  { icon: "🪵", logo: "/assets/images/unastudios-logo.png", tag: "Active", tagClass: "bg-[rgba(212,175,55,0.15)] text-gold border-[rgba(212,175,55,0.3)]", title: "UNA Studios", body: "Custom woodworking, Greek paddles, laser engraving, Cricut products, personalized gifts, and home décor.", href: "/divisions#una-studios" },
  { icon: "✨", logo: "/assets/images/una-apparel-logo.png", tag: "Coming Soon", tagClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]", title: "UNA", body: "A purpose-driven lifestyle brand for those who are Unbound, Noble, and Ambitious.", href: "/divisions#una" },
  { icon: "🏗️", logo: "/assets/images/builduna-logo.png", tag: "Coming Soon", tagClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]", title: "BuildUNA", body: "Real estate acquisition, multifamily housing, mixed-use development, and community investment.", href: "/divisions#builduna" },
  { icon: "🎓", logo: "/assets/images/makerslab-logo.png", tag: "Coming Soon", tagClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]", title: "UNA Makers Lab", body: "Nonprofit providing STEM, AI literacy, robotics, coding, and entrepreneurship for underserved youth.", href: "/divisions#una-makers-lab" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6 lg:px-10 text-center">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg" />
        {/* Radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(124,58,237,0.28)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(212,175,55,0.13)_0%,transparent_45%)]" />

        <div className="relative max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.3)] rounded-full px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-widest text-purple2 mb-8">
            <span className="pulse-dot" />
            Building Legacies Through Innovation
          </div>

          <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-black leading-[1.06] tracking-tight mb-3">
            A <span className="text-gold">Universe</span> of<br />
            <span className="text-purple2">Possibilities</span>
          </h1>

          <TypingHero />

          <p className="text-slate-400 text-[clamp(1rem,2vw,1.15rem)] max-w-[560px] mx-auto mt-5 mb-8 leading-[1.75]">
            AI automation, custom websites, and business systems built for small businesses, real estate teams,
            nonprofits, and local service providers — so you can stop doing everything manually.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              Book a Free AI Fit Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center px-7 py-3.5 border-[1.5px] border-[rgba(212,175,55,0.5)] text-gold rounded-[10px] font-semibold hover:bg-gold hover:text-navy transition-all duration-200 no-underline"
            >
              See Sample Work
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["✓ Virginia LLC", "✓ 24-Hour Response", "✓ No-Jargon Guarantee", "✓ 5 Divisions"].map((t) => (
              <span key={t} className="text-[0.82rem] text-slate-400 font-medium">
                <span className="text-gold2">{t.slice(0, 1)}</span>{t.slice(1)}
              </span>
            ))}
          </div>

          {/* Scroll-to-universe hint */}
          <div className="flex flex-col items-center gap-2 text-slate-500 text-[0.78rem] tracking-wide">
            <span>↓ Scroll to explore the universe</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── 3D UNIVERSE JOURNEY ── */}
      <UniverseJourneyCanvas />

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">Built For</span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-black leading-tight mt-2">
              Who This Is <span className="text-gold">For</span>
            </h2>
            <p className="text-slate-400 max-w-[480px] mx-auto mt-3 text-[0.95rem] leading-relaxed">
              If any of these sound like you, you&apos;re in the right place.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: "🏪", title: "Small Business Owners", desc: "Doing too much manually — scheduling, follow-ups, lead tracking. You need systems that work while you sleep." },
                { icon: "🏠", title: "Real Estate Teams", desc: "Need lead gen, automated follow-up, and a professional web presence that actually converts visitors into clients." },
                { icon: "🤝", title: "Nonprofits & Organizations", desc: "Ready for a professional online presence with donation flows, volunteer tools, and outreach automation." },
                { icon: "🎯", title: "Coaches & Creators", desc: "Building a personal brand or client business and need systems that scale without adding overhead." },
                { icon: "🔧", title: "Local Service Providers", desc: "Contractors, consultants, and service businesses that need more leads and less administrative work." },
                { icon: "🚀", title: "Founders & Startups", desc: "Moving fast and need AI-powered tools, automation, and a web presence that looks enterprise-grade from day one." },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="bg-glass border border-glass rounded-[16px] p-5 hover:border-[rgba(212,175,55,0.25)] hover:-translate-y-0.5 transition-all duration-200">
                  <span className="text-2xl block mb-3">{icon}</span>
                  <h3 className="font-bold text-[0.95rem] mb-2">{title}</h3>
                  <p className="text-slate-400 text-[0.83rem] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <div className="border-t border-gold-dim border-b border-b-gold-dim overflow-x-auto">
        <div className="flex max-w-5xl mx-auto">
          {[
            { value: "Virginia LLC", label: "Local & Accountable" },
            { value: "24 hrs", label: "Response Guarantee" },
            { value: "100%", label: "Founder-Led" },
            { value: "From $250", label: "Transparent Pricing" },
          ].map(({ value, label }, i, arr) => (
            <div key={label} className={`text-center flex-1 min-w-[130px] py-8 px-4 ${i < arr.length - 1 ? "border-r border-gold-dim" : ""}`}>
              <span className="font-serif text-[1.9rem] font-bold text-gold block leading-tight">{value}</span>
              <span className="text-slate-400 text-[0.8rem] mt-1.5 block">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">The Process</span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-black leading-tight mt-2 mb-4">
              How We <span className="text-gold">Work Together</span>
            </h2>
            <p className="text-slate-400 max-w-[520px] mx-auto leading-[1.8]">
              From first conversation to final launch — a simple, clear process that keeps you informed every step.
            </p>
          </ScrollReveal>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
            {/* Connecting line (desktop) */}
            <div className="hidden sm:block absolute top-[27px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-purple via-gold to-purple2 opacity-25" />

            {[
              { num: "1", title: "Discovery Call", desc: "We learn about your business, challenges, and goals in a free 30-minute conversation. No obligation, no jargon." },
              { num: "2", title: "Custom Strategy", desc: "We deliver a tailored roadmap — exactly what to build, timeline, and pricing — before any work begins." },
              { num: "3", title: "Build & Launch", desc: "We execute, keep you updated throughout, and train your team so you can confidently run everything yourself." },
            ].map(({ num, title, desc }, i) => (
              <ScrollReveal key={num} delay={(i + 1) as 1 | 2 | 3} className="text-center px-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple to-purple2 flex items-center justify-center font-serif text-xl font-black mx-auto mb-5 relative z-10 shadow-[0_4px_20px_rgba(124,58,237,0.4)]">
                  {num}
                </div>
                <h3 className="font-bold text-[1rem] mb-2">{title}</h3>
                <p className="text-slate-400 text-[0.86rem] leading-relaxed">{desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM QUICK LINKS ── */}
      <section className="py-10 pb-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-8">
            <p className="text-slate-400 text-sm">
              Explore all divisions in detail →
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {DIVISIONS.map(({ icon, title, href, tagClass, tag }) => (
                <Link
                  key={title}
                  href={href}
                  className="inline-flex items-center gap-2 bg-glass border border-glass rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:border-[rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-200 no-underline"
                >
                  <span>{icon}</span>
                  {title}
                  <span className={`text-[0.6rem] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full border ${tagClass}`}>
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOUNDER CREDIBILITY ── */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-[rgba(124,58,237,0.1)] to-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.18)] rounded-[24px] p-10 flex flex-col lg:flex-row items-center gap-8">
              <div
                className="w-24 h-24 lg:w-28 lg:h-28 rounded-full flex-shrink-0 flex items-center justify-center font-black text-3xl text-white shadow-[0_0_32px_rgba(212,175,55,0.3)]"
                style={{ background: "linear-gradient(135deg, #7C3AED, #D4AF37)" }}
              >
                B
              </div>
              <div>
                <span className="text-[0.72rem] font-bold uppercase tracking-widest text-purple2">Founder &amp; CEO</span>
                <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] font-black mt-1 mb-3">
                  Brionna Una Alexander
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5 max-w-[520px]">
                  A technologist, entrepreneur, and advocate based in Virginia. Brionna personally leads every AI
                  strategy session and consulting engagement — no junior handoffs, no generic playbooks.
                  Every client gets direct access to the expert.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Virginia-Based", "Technologist & Entrepreneur", "Direct Access — No Handoffs", "Plain-English Communication"].map((tag) => (
                    <span key={tag} className="bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] text-gold text-[0.75rem] font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="px-6 lg:px-10 pb-20">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[24px] border border-[rgba(212,175,55,0.2)] bg-gradient-to-br from-[rgba(124,58,237,0.18)] to-[rgba(212,175,55,0.08)] p-14 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(124,58,237,0.15),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(212,175,55,0.08),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-black mb-4">
                Ready to Build Something <span className="text-gold">Meaningful?</span>
              </h2>
              <p className="text-slate-400 max-w-[480px] mx-auto mb-8 leading-relaxed">
                Whether you need AI solutions, a custom creation, or a partner in your vision — TechUnaVerse is ready.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact" className="px-7 py-3.5 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all duration-200 no-underline">
                  Start the Conversation
                </Link>
                <Link href="/work" className="px-7 py-3.5 border-[1.5px] border-[rgba(212,175,55,0.5)] text-gold rounded-[10px] font-semibold hover:bg-gold hover:text-navy transition-all duration-200 no-underline">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
