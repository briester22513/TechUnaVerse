"use client";

import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICES = [
  {
    number: "01",
    title: "Brand Identity Design",
    description:
      "Logo suite, color system, typography, brand voice guidelines, and the visual language your label needs to stand out on shelves and screens. You walk away with a production-ready brand kit.",
    deliverables: ["Primary + secondary logos", "Color palette & usage rules", "Typography system", "Brand guidelines PDF", "Hang tag & label mockups"],
  },
  {
    number: "02",
    title: "Tech Pack Creation",
    description:
      "The exact technical specification documents manufacturers need to produce your garments correctly — the same format used by professional apparel brands. One bad spec sheet costs you thousands. We get it right.",
    deliverables: ["Flat technical sketches", "Measurement spec sheets", "Material & trim callouts", "Construction & stitch details", "Colorway breakdowns", "Label & packaging specs"],
  },
  {
    number: "03",
    title: "Full Brand Launch Package",
    description:
      "Everything in Brand Identity + Tech Pack, combined into a single production-ready deliverable. Built for founders who are serious about going from concept to manufacturer.",
    deliverables: ["Complete brand identity kit", "Tech packs for up to 3 styles", "Manufacturer-ready file package", "Revision rounds included", "Priority turnaround"],
    featured: true,
  },
];

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

      {/* Services */}
      <section className="px-6 lg:px-10 py-28 border-t border-[rgba(245,245,240,0.08)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-[#C9A84C]">Available Now</span>
            <h2 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-black leading-[1.1] tracking-[-0.01em] uppercase">
              Build Your Brand.<br />
              <span className="text-[#8A8A82]">Launch Your Line.</span>
            </h2>
            <p className="mt-6 max-w-[520px] text-[1rem] leading-[1.85] text-[#B8B8B0]">
              While UNA&apos;s own collection is on the way, we&apos;re opening our process to other founders.
              If you have an apparel concept, we&apos;ll give you the same brand design and manufacturer-ready
              tech packs we create for ourselves.
            </p>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-0">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.number} delay={(Math.min(i + 1, 3)) as 1 | 2 | 3}>
                <div className={`relative border-t border-[rgba(245,245,240,0.08)] p-10 flex flex-col lg:flex-row gap-10 ${svc.featured ? "bg-[rgba(201,168,76,0.04)]" : ""}`}>
                  {svc.featured && (
                    <div className="absolute top-5 right-6 text-[0.62rem] uppercase tracking-[0.25em] text-[#0A0A0A] bg-[#C9A84C] px-3 py-1 font-bold">
                      Most Popular
                    </div>
                  )}
                  {/* Number + Title */}
                  <div className="lg:w-72 flex-shrink-0">
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#4A4A42]">{svc.number}</span>
                    <h3 className="mt-2 text-[1.4rem] font-black uppercase tracking-tight leading-tight">{svc.title}</h3>
                  </div>
                  {/* Description + Deliverables */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.95rem] leading-[1.85] text-[#B8B8B0] mb-8">{svc.description}</p>
                    <ul className="flex flex-col gap-2">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-[0.88rem] text-[#8A8A82]">
                          <span className="text-[#C9A84C] mt-0.5 flex-shrink-0">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            {/* Border bottom */}
            <div className="border-t border-[rgba(245,245,240,0.08)]" />
          </div>

          <ScrollReveal>
            <div className="mt-14 flex flex-col sm:flex-row gap-4 items-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0A0A0A] uppercase tracking-wider text-[0.82rem] font-black px-10 py-4 hover:brightness-110 transition-all no-underline"
              >
                Start Your Brand →
              </Link>
              <p className="text-[0.8rem] text-[#6A6A62] self-center leading-relaxed max-w-[320px]">
                Every project starts with a free discovery call. Pricing is scoped per project.
              </p>
            </div>
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
