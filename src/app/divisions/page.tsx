import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const DIVISIONS = [
  {
    slug: "techunaverse-ai",
    icon: "🤖", logo: "/assets/images/una-ai-logo.png", status: "Active · AI & Technology",
    statusClass: "bg-[rgba(212,175,55,0.15)] text-gold border-[rgba(212,175,55,0.3)]",
    title: "TechUnaVerse AI",
    body: "We help businesses leverage artificial intelligence and automation to reduce manual work, improve efficiency, and scale operations. Our solutions are intuitive, accessible, and built for real people — not just technologists. Services include AI chatbot development, workflow automation, knowledge base systems, website development, and AI strategy consulting.",
    href: "/services",
    cta: { label: "View Services & Pricing →", href: "/services" },
  },
  {
    slug: "una-studios",
    icon: "🪵", logo: "/assets/images/unastudios-logo.png", status: "Active · Creative Products",
    statusClass: "bg-[rgba(212,175,55,0.15)] text-gold border-[rgba(212,175,55,0.3)]",
    title: "UNA Studios",
    body: "The creative workshop of the TechUnaVerse ecosystem. UNA Studios transforms ideas into physical experiences through craftsmanship, design, and personalization. In a world driven by automation and mass production, there remains tremendous value in products created with intention and attention to detail. Products include custom Greek paddles, wooden wall art, home décor, laser engraved gifts, wedding and event products, and corporate gifts.",
    href: "/contact",
    cta: null,
  },
  {
    slug: "una",
    icon: "✨", logo: "/assets/images/una-apparel-logo.png", status: "Coming Soon · Lifestyle",
    statusClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]",
    title: "UNA",
    body: "A purpose-driven lifestyle brand built on the belief that what we wear should represent who we are, what we value, and what we aspire to become. Unbound. Noble. Ambitious. UNA is not merely apparel — it is a reflection of identity and a reminder that creativity should remain limitless.",
    href: null,
    cta: null,
  },
  {
    slug: "builduna",
    icon: "🏗️", logo: "/assets/images/builduna-logo.png", status: "Coming Soon · Real Estate",
    statusClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]",
    title: "BuildUNA Legacy Development",
    body: "Real estate is one of the most powerful tools for creating generational wealth and strengthening communities. BuildUNA exists not simply to acquire property, but to create opportunities — through responsible investment, community-centered planning, residential development, multifamily housing, mixed-use projects, and long-term investment strategies.",
    href: null,
    cta: null,
  },
  {
    slug: "una-makers-lab",
    icon: "🎓", logo: "/assets/images/makerslab-logo.png", status: "Coming Soon · Nonprofit",
    statusClass: "bg-[rgba(124,58,237,0.15)] text-purple2 border-[rgba(124,58,237,0.3)]",
    title: "UNA Makers Lab Foundation",
    body: "Talent is universal, but opportunity is not. The Foundation provides educational experiences in coding, robotics, AI, electronics, woodworking, entrepreneurship, and financial literacy for students in underserved communities. The goal is not simply to teach technical skills — it is to build confidence and help the next generation believe they are capable of creating solutions and launching businesses.",
    href: null,
    cta: null,
  },
];

export default function Divisions() {
  return (
    <div className="pt-20 pb-20 px-6 lg:px-10 max-w-5xl mx-auto">
      <ScrollReveal>
        <span className="text-[0.75rem] font-bold uppercase tracking-widest text-purple2">The Ecosystem</span>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-tight mt-2 mb-3">
          Every Division Exists to<br />Help People <span className="text-gold">Build.</span>
        </h1>
        <p className="text-slate-400 max-w-[580px] leading-[1.8] mb-12">
          Technology, creativity, development, education, and entrepreneurship are not separate pursuits — they are connected pathways to impact.
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        {DIVISIONS.map(({ slug, icon, logo, status, statusClass, title, body, href, cta }, i) => {
          const cardClass = "bg-glass border border-glass rounded-[20px] p-6 sm:p-8 flex gap-4 sm:gap-6 items-start transition-all duration-300 hover:border-[rgba(212,175,55,0.25)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] no-underline scroll-mt-24";
          const inner = (
            <>
              <div className="w-[4.5rem] h-[4.5rem] min-w-[4.5rem] rounded-[16px] bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center text-3xl">
                {logo ? (
                  <img src={logo} alt={`${title} logo`} className="w-14 h-14 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]" />
                ) : (
                  icon
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-[0.68rem] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border mb-3 ${statusClass}`}>{status}</span>
                <h2 className="font-bold text-[1.1rem] sm:text-[1.3rem] mb-2">{title}</h2>
                <p className="text-slate-400 text-[0.87rem] sm:text-[0.9rem] leading-[1.75]">{body}</p>
                {cta && (
                  <span className="inline-flex items-center mt-4 text-gold text-[0.88rem] font-semibold border border-[rgba(212,175,55,0.4)] rounded-[8px] px-4 py-2 hover:bg-gold hover:text-navy transition-all duration-200">
                    {cta.label}
                  </span>
                )}
                {href && !cta && (
                  <span className="inline-flex items-center gap-1 text-gold text-[0.82rem] font-semibold mt-3 opacity-60">
                    Learn more →
                  </span>
                )}
              </div>
            </>
          );
          return (
            <ScrollReveal key={title} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
              {href ? (
                <Link id={slug} href={href} className={cardClass}>{inner}</Link>
              ) : (
                <div id={slug} className={cardClass}>{inner}</div>
              )}
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
