"use client";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <div className="w-20 h-20 rounded-full bg-[rgba(212,175,55,0.12)] border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-4xl mx-auto mb-8">
          ✦
        </div>
        <h1 className="font-serif text-[2.2rem] font-black mb-4">
          You&apos;re all set!
        </h1>
        <p className="text-slate-400 leading-relaxed mb-3">
          Check your inbox — your download link is on its way. If you don&apos;t see it in a few minutes, check your spam folder.
        </p>
        <p className="text-slate-500 text-[0.87rem] mb-10">
          Questions? Email <a href="mailto:admin@techunaverse.com" className="text-gold hover:underline">admin@techunaverse.com</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/resources" className="px-6 py-3 border border-[rgba(212,175,55,0.3)] text-gold rounded-[10px] font-semibold hover:bg-[rgba(212,175,55,0.08)] transition-all no-underline text-[0.9rem]">
            Back to Resources
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple to-purple2 text-white rounded-[10px] font-semibold shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 transition-all no-underline text-[0.9rem]">
            Book a Free Call →
          </Link>
        </div>
      </div>
    </div>
  );
}
