"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const PILLARS = [
  { letter: "U", word: "Unbound", line: "Creativity without ceilings. Identity without apology." },
  { letter: "N", word: "Noble", line: "Carry yourself with intention. Lead with integrity." },
  { letter: "A", word: "Ambitious", line: "Build relentlessly. Become who you were meant to be." },
];

export default function UnaApparel() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div className="-mt-20 pt-20 bg-[#0A0A0A] text-[#F5F5F0] font-sans selection:bg-[#C9A84C] selection:text-black">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-10 py-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.08), transparent 60%)" }}
        />
        <div className="relative max-w-5xl mx-auto w-full">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.2em] text-[#8A8A82] hover:text-[#F5F5F0] transition-colors no-underline mb-16"
          >
            ← Back to Divisions
          </Link>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-10">
              <img
                src="/assets/images/una-apparel-logo.png"
                alt="UNA"
                className="w-14 h-14 object-contain"
              />
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[#C9A84C] border border-[rgba(201,168,76,0.4)] rounded-full px-4 py-1.5">
                Coming Soon
              </span>
            </div>

            <h1 className="text-[clamp(3rem,12vw,8rem)] font-black leading-[0.88] tracking-[-0.02em] uppercase">
              <span className="block">Unbound.</span>
              <span className="block text-[#8A8A82]">Noble.</span>
              <span className="block">Ambitious.</span>
            </h1>

            <div className="w-24 h-[3px] bg-[#C9A84C] mt-10 mb-10" />

            <p className="max-w-[440px] text-[1.05rem] leading-[1.8] text-[#B8B8B0]">
              A purpose-driven lifestyle brand for those who refuse to be defined
              by anyone else&apos;s limits.
            </p>
          </ScrollReveal>

          {/* Email signup */}
          <ScrollReveal delay={2}>
            <div className="mt-12 max-w-md">
              {submitted ? (
                <p className="text-[#C9A84C] text-[0.95rem] tracking-wide">
                  You&apos;re on the list. We&apos;ll let you know when the first drop lands.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border border-[rgba(245,245,240,0.25)] rounded-none px-5 py-3.5 text-[0.95rem] placeholder:text-[#6A6A62] focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#F5F5F0] text-[#0A0A0A] font-bold uppercase tracking-wider text-[0.8rem] px-7 py-3.5 hover:bg-[#C9A84C] transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
              )}
              <p className="mt-3 text-[0.72rem] uppercase tracking-widest text-[#6A6A62]">
                Be first to know when we launch.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 lg:px-10 py-28 border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#C9A84C]">The Manifesto</span>
            <p className="mt-6 text-[clamp(1.5rem,4vw,2.6rem)] font-bold leading-[1.4] tracking-[-0.01em]">
              UNA is not just clothing.<br />
              <span className="text-[#8A8A82]">It is a declaration.</span>
            </p>
            <p className="mt-8 text-[1.05rem] leading-[1.9] text-[#B8B8B0]">
              What we wear should represent who we are, what we value, and what we
              aspire to become. UNA exists for the builders, the dreamers, and the
              quietly relentless — those who understand that identity is something you
              create, not something you inherit. Every piece is a reminder that
              ambition is not arrogance, and that staying true to yourself is the
              boldest statement of all.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="px-6 lg:px-10 py-24 border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(245,245,240,0.08)]">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.letter} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-[#0A0A0A] p-10 h-full">
                  <div className="text-[5rem] font-black leading-none text-[#C9A84C]">{p.letter}</div>
                  <h3 className="mt-4 text-[1.4rem] font-bold uppercase tracking-wide">{p.word}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.7] text-[#8A8A82]">{p.line}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preview teaser */}
      <section className="px-6 lg:px-10 py-28 border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="relative rounded-none border border-[rgba(245,245,240,0.12)] aspect-[21/9] flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1A1A1A, #0A0A0A)" }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.1), transparent 60%)" }}
              />
              <div className="relative text-center">
                <p className="text-[0.7rem] uppercase tracking-[0.4em] text-[#C9A84C] mb-4">First Drop</p>
                <p className="text-[clamp(1.8rem,5vw,3.5rem)] font-black uppercase tracking-tight">
                  Coming Soon.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 lg:px-10 pb-32 text-center">
        <ScrollReveal>
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-black uppercase tracking-tight">
            Join the movement.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 border border-[#C9A84C] text-[#C9A84C] uppercase tracking-wider text-[0.85rem] font-bold px-10 py-4 hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-colors no-underline"
          >
            Get in Touch →
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
