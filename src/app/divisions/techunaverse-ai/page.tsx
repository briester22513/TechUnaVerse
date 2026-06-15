import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "TechUnaVerse AI — Automate. Elevate. Dominate.",
  description:
    "AI consulting, workflow automation, knowledge base systems, and website development for businesses ready to scale with intelligence.",
};

const SERVICES = [
  {
    name: "KnowledgeBot Launch",
    price: "$1,500",
    tag: "MOST POPULAR",
    points: [
      "Custom AI chatbot trained on your business",
      "Knowledge base ingestion & setup",
      "Embedded on your existing website",
      "Multi-turn conversation handling",
    ],
  },
  {
    name: "Business Automation",
    price: "$3,000",
    tag: null,
    points: [
      "Workflow automation (Zapier / Make / n8n)",
      "Web & app integrations",
      "Lead capture & CRM pipelines",
      "Repetitive task elimination",
    ],
  },
  {
    name: "Digital Transformation",
    price: "$5,000+",
    tag: null,
    points: [
      "Full custom website build",
      "AI features + automation suite",
      "End-to-end systems integration",
      "Ongoing optimization roadmap",
    ],
  },
  {
    name: "AI Strategy Session",
    price: "$250",
    tag: "90 MIN",
    points: [
      "Live audit of your operations",
      "Actionable automation opportunities",
      "Tooling & stack recommendations",
      "Clear next-step roadmap",
    ],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "We map your workflows, data, and bottlenecks to find the highest-leverage places AI can save you time and money.",
  },
  {
    n: "02",
    title: "Build",
    body: "We design and engineer your solution — chatbots, automations, or full platforms — using a production-grade, secure stack.",
  },
  {
    n: "03",
    title: "Launch",
    body: "We deploy, test edge cases, and hand off with documentation so your team can run and update everything with confidence.",
  },
];

const STATS = [
  { value: "4+", label: "Service Tiers" },
  { value: "24hr", label: "Response Time" },
  { value: "VA", label: "Virginia-Based" },
  { value: "AI-Native", label: "By Design" },
];

export default function TechUnaVerseAI() {
  return (
    <div className="bg-[#050810] text-white -mt-20 pt-20 font-sans selection:bg-[#0EA5E9] selection:text-black">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-10 pt-16 pb-24">
        {/* grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 0%, black 10%, transparent 70%)",
          }}
        />
        {/* cyan glow */}
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.18), transparent 65%)" }}
        />

        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 text-[0.8rem] font-mono text-[#0EA5E9] hover:text-white transition-colors no-underline mb-10"
          >
            ← Back to Divisions
          </Link>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/assets/images/una-ai-logo.png"
                alt="TechUnaVerse AI"
                className="w-16 h-16 object-contain drop-shadow-[0_0_24px_rgba(14,165,233,0.5)]"
              />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-[#0EA5E9] border border-[rgba(14,165,233,0.3)] rounded px-3 py-1">
                TechUnaVerse AI
              </span>
            </div>

            <h1 className="text-[clamp(2.6rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, #0EA5E9, #67E8F9, #0EA5E9)" }}
              >
                Automate. Elevate.<br />Dominate.
              </span>
            </h1>

            <p className="mt-8 max-w-[560px] text-[1.05rem] leading-[1.8] text-slate-400">
              We build AI systems that do the work your business shouldn&apos;t have to.
              Chatbots, automations, and intelligent platforms — engineered for real
              operations, not demos.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0EA5E9] text-black font-bold text-[0.95rem] px-7 py-3.5 rounded-md hover:bg-[#67E8F9] transition-colors no-underline shadow-[0_0_30px_rgba(14,165,233,0.4)]"
              >
                Book a Strategy Call →
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 font-mono text-[0.85rem] text-slate-300 border border-[rgba(255,255,255,0.15)] px-7 py-3.5 rounded-md hover:border-[#0EA5E9] hover:text-white transition-colors no-underline"
              >
                $ view --services
              </a>
            </div>
          </ScrollReveal>

          {/* terminal flourish */}
          <ScrollReveal delay={2}>
            <div className="mt-16 max-w-xl rounded-lg border border-[rgba(14,165,233,0.2)] bg-[#0A0F1C] overflow-hidden font-mono text-[0.82rem]">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[rgba(255,255,255,0.06)]">
                <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F56" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
                <span className="ml-2 text-slate-500 text-[0.72rem]">techunaverse — bash</span>
              </div>
              <div className="p-4 leading-[1.9]">
                <p className="text-slate-500">$ techunaverse deploy --client</p>
                <p className="text-[#0EA5E9]">→ analyzing workflows...</p>
                <p className="text-[#0EA5E9]">→ building automation pipeline...</p>
                <p className="text-[#27C93F]">✓ deployed. you just got hours back.</p>
                <p className="text-slate-300">
                  $ <span className="typing-cursor" style={{ background: "#0EA5E9" }} />
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[#080D18]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[1.8rem] font-black text-[#0EA5E9] font-mono">{s.value}</div>
              <div className="text-[0.72rem] uppercase tracking-widest text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 lg:px-10 py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-[#0EA5E9]">// services</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mt-3 mb-12">
              Pick your level of leverage.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.name} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className="group h-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0A0F1C] p-7 transition-all duration-300 hover:border-[#0EA5E9] hover:shadow-[0_0_40px_rgba(14,165,233,0.12)]">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h3 className="text-[1.25rem] font-bold">{s.name}</h3>
                    {s.tag && (
                      <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wider text-[#0EA5E9] border border-[rgba(14,165,233,0.4)] rounded px-2 py-0.5">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-[2rem] font-black font-mono text-white mb-6">
                    {s.price}
                  </div>
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[0.9rem] text-slate-400 leading-snug">
                        <span className="text-[#0EA5E9] mt-0.5">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 lg:px-10 py-24 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-[#0EA5E9]">// process</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mt-3 mb-12">
              Three steps. Zero guesswork.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((st, i) => (
              <ScrollReveal key={st.n} delay={(i + 1) as 1 | 2 | 3}>
                <div className="h-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0A0F1C] p-7">
                  <div className="font-mono text-[3rem] font-black leading-none text-[rgba(14,165,233,0.25)] mb-4">
                    {st.n}
                  </div>
                  <h3 className="text-[1.3rem] font-bold mb-3">{st.title}</h3>
                  <p className="text-slate-400 text-[0.92rem] leading-[1.75]">{st.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div
              className="relative overflow-hidden rounded-2xl border border-[rgba(14,165,233,0.3)] px-8 py-16 text-center"
              style={{ background: "linear-gradient(135deg, #0A0F1C, #08263a)" }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 120%, rgba(14,165,233,0.35), transparent 60%)" }}
              />
              <h2 className="relative text-[clamp(1.8rem,5vw,3rem)] font-black mb-4">
                Ready to let AI work for you?
              </h2>
              <p className="relative text-slate-400 max-w-md mx-auto mb-8">
                Book a free 90-minute strategy session and walk away with a real plan.
              </p>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-[#0EA5E9] text-black font-bold px-8 py-4 rounded-md hover:bg-[#67E8F9] transition-colors no-underline shadow-[0_0_30px_rgba(14,165,233,0.4)]"
              >
                Book a Strategy Call →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
