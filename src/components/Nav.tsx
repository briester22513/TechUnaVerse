"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Sample Solutions" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-gold-dim transition-all duration-300 ${
          scrolled ? "py-3 bg-[rgba(8,12,34,0.97)]" : "py-4 bg-[rgba(8,12,34,0.92)]"
        } backdrop-blur-xl px-6 lg:px-10`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/assets/images/main-techunaverse-logo.png"
            alt="TechUnaVerse logo"
            className="h-10 w-auto object-contain drop-shadow-[0_0_14px_rgba(124,58,237,0.45)]"
          />
          <span className="font-bold text-[1.05rem] tracking-tight">
            Tech<span className="text-gold">Una</span>Verse
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-7 list-none">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-[0.87rem] font-medium transition-colors duration-200 no-underline
                    after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300
                    ${active ? "text-gold after:w-full" : "text-slate-300 hover:text-gold after:w-0 hover:after:w-full"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-[8px] bg-gradient-to-r from-purple to-purple2 text-white text-[0.87rem] font-semibold shadow-[0_4px_15px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_24px_rgba(124,58,237,0.5)] hover:-translate-y-px transition-all duration-200 no-underline"
        >
          Book a Free Call
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-white rounded transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[65px] left-0 right-0 z-40 bg-[rgba(8,12,34,0.98)] backdrop-blur-2xl border-b border-gold-dim flex flex-col gap-1 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`py-3 border-b border-glass text-[0.95rem] font-medium transition-colors duration-200 no-underline ${
              pathname === href ? "text-gold" : "text-slate-300 hover:text-gold"
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-3 text-center py-3 rounded-[8px] bg-gradient-to-r from-purple to-purple2 text-white font-semibold no-underline"
        >
          Book a Free Call
        </Link>
      </div>
    </>
  );
}
