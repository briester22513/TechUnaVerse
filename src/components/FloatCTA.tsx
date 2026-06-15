"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-7 right-7 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple to-purple2 text-white text-[0.87rem] font-bold shadow-[0_8px_30px_rgba(124,58,237,0.55)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.7)] hover:-translate-y-1 hover:scale-105 transition-all duration-200 no-underline"
    >
      <span>📅</span> Book a Call
    </Link>
  );
}
