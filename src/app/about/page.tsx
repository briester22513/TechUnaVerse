import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const VALUES = [
  { icon: "🎨", title: "Creativity Without Limits", desc: "Innovation occurs when people are free to explore ideas beyond traditional boundaries." },
  { icon: "⚡", title: "Innovation Through Action", desc: "Ideas become meaningful only when executed. We value action, experimentation, and improvement." },
  { icon: "🤝", title: "Accessibility For All", desc: "High-quality products, services, and opportunities should not be reserved for the privileged few." },
  { icon: "🏛️", title: "Legacy Over Popularity", desc: "We are not building for attention. We are building for impact that outlasts trends." },
  { icon: "🌍", title: "Community Empowerment", desc: "Strong communities create strong futures. Success becomes more meaningful when it lifts others." },
  { icon: "👨‍👩‍👧", title: "Family & Generational Impact", desc: "True success is measured by the opportunities we create for future generations." },
];

export default function About() {
  return (
    <div className="pt-20 pb-20">

      {/* Intro */}
      <section className="px-6 lg:px-10 py-14 max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">Our Story</span>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-tight mt-2 mb-10">
            Built for the <span className="text-gold">Multidimensional</span> Creator
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Visual card */}
          <ScrollReveal>
            <div className="bg-gradient-to-br from-navy3 to-navy2 border border-gold-dim rounded-[24px] p-10 text-center">
              {/* Founder avatar */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple to-gold flex items-center justify-center font-serif text-4xl font-black mx-auto mb-4 shadow-[0_8px_30px_rgba(124,58,237,0.45)]">
                B
              </div>
              <p className="font-bold text-lg">Brionna Una Alexander</p>
              <p className="text-gold text-[0.82rem] mb-8">Founder & CEO, TechUnaVerse LLC</p>

              {/* UNA pillars */}
              <div className="flex flex-col gap-3">
                {[
                  { letter: "U", word: "UNBOUND", desc: "Creativity Without Limits — freedom from expectations, labels, and restrictions" },
                  { letter: "N", word: "NOBLE",   desc: "Purpose, Integrity, Legacy — building with honesty, discipline, and generational intent" },
                  { letter: "A", word: "AMBITIOUS", desc: "Growth, Innovation, Vision — pursuing meaningful goals and celebrating achievement" },
                ].map(({ letter, word, desc }) => (
                  <div key={letter} className="bg-[rgba(255,255,255,0.03)] border border-glass rounded-[12px] px-4 py-3 text-left hover:border-[rgba(212,175,55,0.3)] transition-colors duration-200">
                    <p className="text-gold text-[0.72rem] font-black tracking-widest uppercase">{letter} — {word}</p>
                    <p className="text-slate-400 text-[0.8rem] mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Story text */}
          <ScrollReveal delay={2}>
            <div className="space-y-5 text-[0.95rem] text-slate-400 leading-[1.85]">
              <p>TechUnaVerse was not created from a single business idea. <strong className="text-white">It was created from a realization.</strong></p>
              <p>For years, our founder Brionna Una Alexander struggled with the idea that she needed to choose one path, one interest, one skillset, or one identity. Technology fascinated her. Creativity inspired her. Education motivated her. Real estate represented opportunity. Craftsmanship represented expression.</p>
              <p>The world often teaches people to specialize so deeply that they ignore the other parts of themselves. <strong className="text-white">TechUnaVerse was created to challenge that idea.</strong></p>
              <p>The name UNA carries deep personal significance — representing a legacy passed through generations and transformed into a symbol of purpose-driven ambition. It is a reminder that creativity should remain unbound, purpose should remain noble, and ambition should always be celebrated.</p>
              <p><strong className="text-white">TechUnaVerse exists because creativity should not have limits, innovation should not have boundaries, and every idea deserves the opportunity to become reality.</strong></p>

              <div className="pt-4 flex gap-4 flex-wrap">
                <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold no-underline hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_20px_rgba(124,58,237,0.35)]">
                  Explore Services
                </Link>
                <Link href="/contact" className="px-6 py-3 border-[1.5px] border-[rgba(212,175,55,0.5)] text-gold rounded-[10px] font-semibold no-underline hover:bg-gold hover:text-navy transition-all duration-200">
                  Work With Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-10 py-14 max-w-6xl mx-auto">
        <ScrollReveal>
          <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">What We Believe</span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,2.8rem)] font-black leading-tight mt-2 mb-10">
            Our Core <span className="text-gold">Values</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map(({ icon, title, desc }, i) => (
            <ScrollReveal key={title} delay={(Math.min(i % 3 + 1, 4)) as 1 | 2 | 3 | 4}>
              <div className="bg-glass border border-glass rounded-[16px] p-6 hover:border-[rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-0.5">
                <p className="text-2xl mb-3">{icon}</p>
                <h3 className="text-gold2 font-bold text-[0.92rem] mb-2">{title}</h3>
                <p className="text-slate-400 text-[0.82rem] leading-relaxed">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
