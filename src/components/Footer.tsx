"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-navy2 border-t border-gold-dim pt-14 pb-8 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 no-underline mb-4">
            <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-purple to-gold flex items-center justify-center font-serif font-black text-lg">T</div>
            <span className="font-bold text-[1.05rem]">Tech<span className="text-gold">Una</span>Verse</span>
          </Link>
          <p className="text-slate-400 text-[0.86rem] leading-relaxed max-w-[260px]">
            An interconnected ecosystem of brands, tools, and experiences empowering creators, builders, and entrepreneurs.
          </p>
          <p className="text-gold text-[0.8rem] italic mt-3">Unbound. Noble. Ambitious.</p>
          {/* Social */}
          <div className="flex gap-3 mt-4">
            {[
              { label: "Instagram", icon: "📸", href: "https://instagram.com/techunaverse" },
              { label: "LinkedIn",  icon: "💼", href: "https://linkedin.com/company/techunaverse" },
              { label: "X",         icon: "✖️",  href: "https://x.com/techunaverse" },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-[8px] bg-glass border border-glass flex items-center justify-center text-[0.9rem] hover:bg-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.3)] transition-all duration-200 no-underline"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-[0.8rem] font-bold uppercase tracking-widest text-slate-300 mb-5">Navigate</h4>
          <ul className="flex flex-col gap-3 list-none">
            {["/", "/about", "/divisions", "/services", "/work", "/resources", "/contact"].map((href) => (
              <li key={href}>
                <Link href={href} className="text-slate-400 text-[0.86rem] hover:text-gold transition-colors duration-200 no-underline capitalize">
                  {href === "/" ? "Home" : href.replace("/", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions */}
        <div>
          <h4 className="text-[0.8rem] font-bold uppercase tracking-widest text-slate-300 mb-5">Divisions</h4>
          <ul className="flex flex-col gap-3 list-none">
            {[
              "TechUnaVerse AI",
              "UNA Studios",
              "UNA (Coming Soon)",
              "BuildUNA (Coming Soon)",
              "UNA Makers Lab (Coming Soon)",
            ].map((d) => (
              <li key={d}>
                <Link href="/divisions" className="text-slate-400 text-[0.86rem] hover:text-gold transition-colors duration-200 no-underline">
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-[0.8rem] font-bold uppercase tracking-widest text-slate-300 mb-5">Stay in the Loop</h4>
          <p className="text-slate-400 text-[0.84rem] mb-4 leading-relaxed">AI tips, new guides, and business insights — straight to your inbox.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("You're subscribed! Welcome to the TechUnaVerse community."); }} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="you@company.com"
              required
              className="bg-glass border border-glass rounded-[8px] px-4 py-2.5 text-white placeholder-slate-500 text-[0.87rem] outline-none focus:border-[rgba(124,58,237,0.5)] transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple to-purple2 text-white py-2.5 rounded-[8px] text-[0.87rem] font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer border-none"
            >
              Subscribe Free →
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-5 border-t border-gold-dim flex flex-wrap justify-between items-center gap-4 text-[0.78rem] text-slate-500">
        <span>© 2026 TechUnaVerse LLC. All rights reserved. Virginia Entity ID: 12031792</span>
        <span className="text-gold">Building Legacies Through Innovation.</span>
      </div>
    </footer>
  );
}
