import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "BuildUNA Legacy Development — Building Wealth. Building Legacy.",
  description:
    "Responsible real estate development focused on generational wealth and community impact — residential, multifamily, and mixed-use projects.",
};

const FOCUS = [
  { icon: "🏠", name: "Residential Development", body: "Quality homes designed for the families and neighborhoods that anchor communities." },
  { icon: "🏢", name: "Multifamily Housing", body: "Thoughtful, livable density that expands access to dignified, well-built housing." },
  { icon: "🏙️", name: "Mixed-Use Projects", body: "Spaces where people live, work, and gather — built to energize local economies." },
  { icon: "🤝", name: "Community Investment", body: "Capital and care directed toward the long-term health of the places we build." },
];

const PILLARS = [
  { title: "Community First", body: "We build with neighborhoods, not just on them." },
  { title: "Long-Term Vision", body: "We measure success in decades, not quarters." },
  { title: "Responsible Growth", body: "We grow in ways that strengthen, never strain." },
  { title: "Generational Impact", body: "We create assets meant to outlast us." },
];

export default function BuildUna() {
  return (
    <div className="-mt-20 pt-20 bg-[#1C1C1E] text-[#F8F4EE] font-sans selection:bg-[#C8A951] selection:text-[#1C1C1E]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-10 pt-16 pb-28">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{ background: "linear-gradient(160deg, #1C1C1E 40%, #26262a 100%)" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-[#8E9196] hover:text-[#C8A951] transition-colors no-underline mb-12"
          >
            ← Back to Divisions
          </Link>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/assets/images/builduna-logo.png"
                alt="BuildUNA"
                className="w-16 h-16 object-contain"
              />
              <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#8E9196] border-l border-[rgba(200,169,81,0.4)] pl-4">
                BuildUNA Legacy Development
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.6rem,7vw,5.2rem)] font-black leading-[1.02]">
              Building Wealth.<br />
              Building Legacy.
            </h1>
            <div className="w-28 h-[3px] bg-[#C8A951] mt-7" />

            <p className="mt-8 max-w-[540px] text-[1.05rem] leading-[1.85] text-[#C4C0BA]">
              Real estate is one of the most powerful tools for creating generational
              wealth and strengthening communities. BuildUNA exists not simply to
              acquire property — but to create opportunity through responsible,
              community-centered development.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-[#C8A951] text-[#1C1C1E] font-bold px-8 py-4 rounded-sm hover:bg-[#d8bb6a] transition-colors no-underline"
            >
              Explore Opportunities →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="px-6 lg:px-10 py-24 border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[#C8A951]">Focus Areas</span>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-black mt-3 mb-12">
              Where we build.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOCUS.map((f, i) => (
              <ScrollReveal key={f.name} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#232326] p-8 transition-all duration-300 hover:border-[#C8A951]">
                  <div className="text-[2rem] mb-4">{f.icon}</div>
                  <h3 className="font-serif text-[1.4rem] font-bold mb-2">{f.name}</h3>
                  <p className="text-[0.92rem] leading-[1.75] text-[#A8A4A0]">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 lg:px-10 py-24" style={{ background: "linear-gradient(135deg, #232326, #1C1C1E)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-[#C8A951]">Our Mission</span>
            <p className="font-serif text-[clamp(1.5rem,3.5vw,2.3rem)] font-bold leading-[1.5] mt-6">
              We believe the right development can do more than generate returns — it
              can build generational wealth, expand access to opportunity, and leave
              communities stronger than we found them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why BuildUNA */}
      <section className="px-6 lg:px-10 py-24 border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-12 text-center">
              Why BuildUNA.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.title} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className="h-full border-t-2 border-[#C8A951] pt-5">
                  <h3 className="font-serif text-[1.2rem] font-bold mb-2">{p.title}</h3>
                  <p className="text-[0.88rem] leading-[1.7] text-[#A8A4A0]">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current projects placeholder */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="relative rounded-xl border border-[rgba(200,169,81,0.25)] overflow-hidden aspect-[16/7] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2a2a2e, #1C1C1E)" }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(200,169,81,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,81,0.12) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative text-center px-6">
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#C8A951]">Current Projects</span>
                <p className="font-serif text-[clamp(1.6rem,4vw,2.6rem)] font-black mt-3">Coming Soon</p>
                <p className="text-[#8E9196] text-[0.9rem] mt-3 max-w-md mx-auto">
                  Our first developments are taking shape. Partner with us early to be
                  part of what comes next.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-xl border border-[rgba(200,169,81,0.3)] px-8 py-16 text-center" style={{ background: "linear-gradient(135deg, #232326, #1C1C1E)" }}>
              <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-black mb-4">
                Partner with BuildUNA.
              </h2>
              <p className="text-[#A8A4A0] max-w-md mx-auto mb-8 leading-[1.7]">
                Whether you&apos;re an investor, a landowner, or a community partner — let&apos;s
                build something that lasts.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C8A951] text-[#1C1C1E] font-bold px-8 py-4 rounded-sm hover:bg-[#d8bb6a] transition-colors no-underline"
              >
                Get in Touch →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
