"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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

function StatCounter({ target, suffix = "", label }: { target: number | string; suffix?: string; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (typeof target !== "number") return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          setVal(start);
          if (start >= target) clearInterval(timer);
        }, 25);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center flex-1 min-w-[130px] py-8 px-4 border-r border-gold-dim last:border-r-0">
      <span className="font-serif text-[2.4rem] font-bold text-gold block">
        {typeof target === "number" ? val + suffix : target}
      </span>
      <span className="text-slate-400 text-[0.8rem] mt-1 block">{label}</span>
    </div>
  );
}

const DIVISIONS = [
  { icon: "🤖", logo: "/assets/images/una-ai-logo.png", tag: "Active", tagClass: "bg-[rgba(212,175,55,0.15)] text-gold border-[rgba(212,175,55,0.3)]", title: "TechUnaVerse AI", body: "AI consulting, workflow automation, knowledge management systems, and digital transformation for growing businesses.", href: "/divisions" },
  { icon: "🪵", logo: "/assets/images/unastudios-logo.png", tag: "Active", tagClass: "bg-[rgba(212,175,55,0.15)] text-gold border-[rgba(212,175,55,0.3)]", title: "UNA Studios", body: "Custom woodworking, Greek paddles, laser engraving, Cricut products, personalized gifts, and home décor.", href: "/divisions" },
  { icon: "✨", logo: "/assets/images/una-apparel-logo.png", tag: "Coming Soon", tagClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]", title: "UNA", body: "A purpose-driven lifestyle brand for those who are Unbound, Noble, and Ambitious.", href: "/divisions" },
  { icon: "🏗️", logo: "/assets/images/builduna-logo.png", tag: "Coming Soon", tagClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]", title: "BuildUNA", body: "Real estate acquisition, multifamily housing, mixed-use development, and community investment.", href: "/divisions" },
  { icon: "🎓", logo: "/assets/images/makerslab-logo.png", tag: "Coming Soon", tagClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]", title: "UNA Makers Lab", body: "Nonprofit providing STEM, AI literacy, robotics, coding, and entrepreneurship for underserved youth.", href: "/divisions" },
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
            TechUnaVerse is an ecosystem of brands, tools, and experiences designed to empower
            creators, builders, and entrepreneurs to shape their futures.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              href="/services"
              className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              Explore Services
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3.5 border-[1.5px] border-[rgba(212,175,55,0.5)] text-gold rounded-[10px] font-semibold hover:bg-gold hover:text-navy transition-all duration-200 no-underline"
            >
              Our Story
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-6">
            {["✓ Virginia LLC", "✓ 24-Hour Response", "✓ No-Jargon Guarantee", "✓ 5 Divisions"].map((t) => (
              <span key={t} className="text-[0.82rem] text-slate-400 font-medium">
                <span className="text-gold2">{t.slice(0, 1)}</span>{t.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="border-t border-gold-dim border-b border-b-gold-dim overflow-x-auto">
        <div className="flex max-w-5xl mx-auto">
          <StatCounter target={5}    suffix="+"  label="Active Divisions" />
          <StatCounter target={"$1M+"}           label="Year 5 Revenue Goal" />
          <StatCounter target={100}  suffix="K+" label="Lives to Impact" />
          <StatCounter target={4}                label="Service Packages" />
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

      {/* ── DIVISIONS PREVIEW ── */}
      <section className="py-4 pb-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">Our Ecosystem</span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-black leading-tight mt-2 mb-3">
              One Mission. <span className="text-gold">Many Vehicles.</span>
            </h2>
            <p className="text-slate-400 max-w-[580px] leading-[1.8] mb-10">
              From AI consulting to custom woodworking, real estate to education — every division of TechUnaVerse exists to help people build.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map(({ icon, logo, tag, tagClass, title, body, href }, i) => (
              <ScrollReveal key={title} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <Link
                  href={href}
                  className="group block bg-glass border border-glass rounded-[20px] p-8 hover:border-[rgba(212,175,55,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 no-underline h-full"
                >
                  <div className="w-14 h-14 rounded-[14px] bg-[rgba(124,58,237,0.12)] flex items-center justify-center text-2xl mb-5">
                    {logo ? (
                      <img src={logo} alt={`${title} logo`} className="w-10 h-10 object-contain" />
                    ) : (
                      icon
                    )}
                  </div>
                  <span className={`inline-block text-[0.68rem] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border mb-3 ${tagClass}`}>{tag}</span>
                  <h3 className="font-bold text-[1.1rem] mb-2 text-white">{title}</h3>
                  <p className="text-slate-400 text-[0.87rem] leading-relaxed">{body}</p>
                  <span className="inline-flex items-center gap-1 text-gold text-[0.82rem] font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
