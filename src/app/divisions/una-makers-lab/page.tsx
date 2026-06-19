import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "UNA Makers Lab Foundation — Building Tomorrow's Innovators",
  description:
    "A nonprofit bringing STEM, AI literacy, robotics, coding, and entrepreneurship to underserved youth. Talent is universal. Opportunity is not.",
};

const PROGRAMS = [
  { icon: "💻", name: "Coding & Software", color: "#0DBFBF", body: "From first lines of code to building real apps." },
  { icon: "🤖", name: "Robotics", color: "#FF6B35", body: "Hands-on building, wiring, and programming machines." },
  { icon: "🧠", name: "AI Literacy", color: "#FFD166", body: "Understanding and creating with the tools shaping the future." },
  { icon: "🪚", name: "Woodworking & Fabrication", color: "#0DBFBF", body: "Making physical things with skill and pride." },
  { icon: "🚀", name: "Entrepreneurship", color: "#FF6B35", body: "Turning ideas into ventures and confidence into action." },
  { icon: "💰", name: "Financial Literacy", color: "#FFD166", body: "The money skills schools too often leave out." },
];

const STATS = [
  { value: "0+", label: "Students Served", note: "Just getting started" },
  { value: "6", label: "Programs", note: "Across STEM & beyond" },
  { value: "Growing", label: "Communities", note: "Expanding our reach" },
];

const HELP = [
  { icon: "🙌", title: "Volunteer", body: "Share your skills as a mentor, instructor, or workshop lead." },
  { icon: "❤️", title: "Donate", body: "Fund equipment, materials, and program access for a student." },
  { icon: "🤝", title: "Partner", body: "Bring the Lab to your school, community center, or organization." },
  { icon: "📣", title: "Spread the Word", body: "Help us reach the families and youth who need us most." },
];

export default function UnaMakersLab() {
  return (
    <div className="-mt-20 pt-20 bg-[#0A1628] text-white font-sans selection:bg-[#0DBFBF] selection:text-[#0A1628]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 lg:px-10 pt-16 pb-24">
        <div
          aria-hidden
          className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(13,191,191,0.25), transparent 65%)" }}
        />
        <div
          aria-hidden
          className="absolute top-10 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.22), transparent 65%)" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-[#0DBFBF] hover:text-white transition-colors no-underline mb-12"
          >
            ← Back to Divisions
          </Link>

          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="/assets/images/makerslab-logo.png"
                alt="UNA Makers Lab Foundation"
                className="w-16 h-16 object-contain"
              />
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#FFD166] bg-[rgba(255,209,102,0.12)] rounded-full px-4 py-1.5">
                501(c)(3) in formation · Nonprofit
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[1.04] tracking-tight">
              Building Tomorrow&apos;s{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, #0DBFBF, #FF6B35)" }}
              >
                Innovators
              </span>{" "}
              — Today.
            </h1>

            <p className="mt-7 max-w-[560px] text-[1.1rem] leading-[1.8] text-slate-300">
              We bring coding, robotics, AI literacy, and entrepreneurship to young
              people in underserved communities — and help them believe they&apos;re
              capable of building the future.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 font-bold text-[#0A1628] px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5 no-underline shadow-[0_8px_30px_rgba(13,191,191,0.35)]"
              style={{ background: "linear-gradient(120deg, #0DBFBF, #FFD166)" }}
            >
              Support the Mission →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#0DBFBF]">Our Programs</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mt-3 mb-12">
              Six ways to spark a future.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((p, i) => (
              <ScrollReveal key={p.name} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div
                  className="h-full rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1.5 bg-[#0F1F38]"
                  style={{ border: `1px solid ${p.color}33` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-[1.8rem] mb-5"
                    style={{ backgroundColor: `${p.color}22` }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-[1.25rem] font-bold mb-2" style={{ color: p.color }}>
                    {p.name}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.7] text-slate-400">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 lg:px-10 py-24" style={{ background: "linear-gradient(135deg, #0F1F38, #0A1628)" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-center text-[clamp(1.6rem,4vw,2.6rem)] font-black leading-[1.3] max-w-2xl mx-auto">
              Talent is universal.<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, #FF6B35, #FFD166)" }}
              >
                Opportunity is not.
              </span>
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} delay={(i + 1) as 1 | 2 | 3}>
                <div className="text-center rounded-[20px] bg-[rgba(13,191,191,0.06)] border border-[rgba(13,191,191,0.18)] p-8">
                  <div className="text-[2.6rem] font-black text-[#0DBFBF]">{s.value}</div>
                  <div className="text-[0.95rem] font-bold mt-1">{s.label}</div>
                  <div className="text-[0.78rem] text-slate-400 mt-1">{s.note}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to help */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#FF6B35]">Get Involved</span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mt-3 mb-12">
              How you can help.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HELP.map((h, i) => (
              <ScrollReveal key={h.title} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className="h-full rounded-[20px] bg-[#0F1F38] border border-[rgba(255,255,255,0.08)] p-7 transition-all duration-300 hover:border-[#FF6B35]">
                  <div className="text-[2rem] mb-4">{h.icon}</div>
                  <h3 className="text-[1.15rem] font-bold mb-2">{h.title}</h3>
                  <p className="text-[0.86rem] leading-[1.65] text-slate-400">{h.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The vision */}
      <section className="px-6 lg:px-10 py-20" style={{ background: "linear-gradient(135deg, #0F1F38, #0A1628)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#FFD166]">The Vision</span>
            <p className="text-[clamp(1.3rem,3vw,2rem)] font-bold leading-[1.5] mt-5">
              We&apos;re building a place where every young person — no matter their zip
              code — can discover what they&apos;re capable of, gain real skills, and walk
              away knowing they can build solutions and launch businesses of their own.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-[28px] px-8 py-16 text-center text-[#0A1628]"
              style={{ background: "linear-gradient(120deg, #0DBFBF, #FFD166)" }}
            >
              <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-black mb-4">Get Involved.</h2>
              <p className="max-w-md mx-auto mb-8 font-medium opacity-80">
                Every mentor, dollar, and partnership puts another young innovator on the path.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-bold px-8 py-4 rounded-full hover:bg-[#162a45] transition-colors no-underline"
              >
                Get Involved →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
