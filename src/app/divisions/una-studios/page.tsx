import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "UNA Studios — Crafted With Intention",
  description:
    "Custom woodworking, Greek paddles, laser engraving, and personalized gifts — handcrafted small-batch pieces made with care.",
};

const CATEGORIES = [
  { icon: "🏛️", name: "Greek Paddles", body: "Custom-carved, hand-finished paddles for your line, your bigs, and your littles." },
  { icon: "🔥", name: "Laser Engraving", body: "Precision-engraved wood, slate, and acrylic for gifts that last a lifetime." },
  { icon: "🖼️", name: "Wooden Wall Art", body: "Statement pieces and layered designs that bring warmth to any space." },
  { icon: "🎁", name: "Custom Gifts", body: "One-of-a-kind keepsakes designed around the person who receives them." },
  { icon: "💍", name: "Wedding Products", body: "Signage, guest favors, and décor that make your day feel unmistakably yours." },
  { icon: "🏢", name: "Corporate Gifts", body: "Branded, thoughtful pieces that leave a lasting impression on clients and teams." },
];

const STEPS = [
  { n: "1", title: "Share your idea", body: "Tell us what you're imagining — a name, a vibe, a moment. We listen first." },
  { n: "2", title: "We design", body: "We sketch, refine, and confirm every detail with you before a single cut is made." },
  { n: "3", title: "You receive", body: "Your finished piece arrives, hand-finished and ready to be treasured." },
];

export default function UnaStudios() {
  return (
    <div
      className="-mt-20 pt-20"
      style={{ backgroundColor: "#FAF7F0", color: "#3D2B1F" }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 lg:px-10 pt-16 pb-24"
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, rgba(196,98,45,0.16), transparent 55%), radial-gradient(ellipse at 0% 90%, rgba(45,80,22,0.12), transparent 50%), #FAF7F0",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/divisions"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium no-underline mb-10 transition-colors"
            style={{ color: "#C4622D" }}
          >
            ← Back to Divisions
          </Link>

          <ScrollReveal>
            <img
              src="/assets/images/unastudios-logo.png"
              alt="UNA Studios"
              className="w-20 h-20 object-contain mb-8 drop-shadow-sm"
            />
            <span
              className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-5"
              style={{ color: "#2D5016" }}
            >
              Small-Batch · Handcrafted in Virginia
            </span>
            <h1
              className="font-serif text-[clamp(2.8rem,7vw,5rem)] font-black leading-[1.05]"
              style={{ color: "#3D2B1F" }}
            >
              Crafted With<br />
              <span style={{ color: "#C4622D" }}>Intention.</span>
            </h1>
            <p className="mt-7 max-w-[520px] text-[1.05rem] leading-[1.85]" style={{ color: "#5C4A3A" }}>
              In a world of mass production, we make things slowly and on purpose.
              Custom woodworking, Greek paddles, laser engraving, and personalized
              gifts — each piece shaped by hand and meant to be kept.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-9 font-semibold text-white px-7 py-3.5 rounded-full no-underline transition-transform hover:-translate-y-0.5 shadow-md"
              style={{ backgroundColor: "#C4622D" }}
            >
              Request a Custom Order →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-black mb-3" style={{ color: "#3D2B1F" }}>
              What we make.
            </h2>
            <p className="mb-12 max-w-md leading-[1.8]" style={{ color: "#7A6857" }}>
              Every category starts as a conversation and ends as something you can hold.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((c, i) => (
              <ScrollReveal key={c.name} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div
                  className="h-full rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(61,43,31,0.1)",
                    boxShadow: "0 8px 24px rgba(61,43,31,0.06)",
                  }}
                >
                  <div className="text-[2.2rem] mb-4">{c.icon}</div>
                  <h3 className="font-serif text-[1.3rem] font-bold mb-2" style={{ color: "#3D2B1F" }}>
                    {c.name}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.7]" style={{ color: "#7A6857" }}>
                    {c.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why handcrafted */}
      <section className="px-6 lg:px-10 py-20" style={{ backgroundColor: "#3D2B1F", color: "#FAF7F0" }}>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em]" style={{ color: "#E0A96D" }}>
              Why handcrafted matters
            </span>
            <p className="font-serif text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold leading-[1.5] mt-5">
              A handmade piece carries something a factory never can — the time,
              the attention, and the intention of the person who made it. That&apos;s the
              difference between an object and a keepsake.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How to order */}
      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-black mb-12 text-center" style={{ color: "#3D2B1F" }}>
              How to order.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <ScrollReveal key={s.n} delay={(i + 1) as 1 | 2 | 3}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-serif text-[1.5rem] font-black text-white mb-5"
                    style={{ backgroundColor: "#2D5016" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="font-serif text-[1.25rem] font-bold mb-2" style={{ color: "#3D2B1F" }}>
                    {s.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.75] max-w-[260px] mx-auto" style={{ color: "#7A6857" }}>
                    {s.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div
              className="rounded-[28px] px-8 py-16 text-center"
              style={{
                background: "linear-gradient(135deg, #C4622D, #A04D20)",
                color: "#FAF7F0",
              }}
            >
              <h2 className="font-serif text-[clamp(1.8rem,5vw,3rem)] font-black mb-4">
                Start your custom project.
              </h2>
              <p className="max-w-md mx-auto mb-8 opacity-90 leading-[1.7]">
                Tell us what you&apos;re dreaming up. We&apos;ll bring it to life in wood.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-full no-underline transition-transform hover:-translate-y-0.5 shadow-md"
                style={{ backgroundColor: "#FAF7F0", color: "#3D2B1F" }}
              >
                Request a Custom Order →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
