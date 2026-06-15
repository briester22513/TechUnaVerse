"use client";
import { useEffect, useRef } from "react";

export default function Stars() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    for (let i = 0; i < 90; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2 + 1;
      star.style.cssText = `
        position:absolute;border-radius:50%;
        background:rgba(255,255,255,0.6);
        width:${size}px;height:${size}px;
        top:${Math.random() * 100}%;left:${Math.random() * 100}%;
        animation:twinkle ${Math.random() * 4 + 2}s linear infinite;
        animation-delay:${Math.random() * 3}s;
      `;
      container.appendChild(star);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
