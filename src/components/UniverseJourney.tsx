"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars as DreiStars } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";

// ─── Division data ────────────────────────────────────────────────────────────
const DIVS = [
  {
    name: "TechUnaVerse AI",
    tagline: "AI Consulting & Automation",
    body: "Workflow automation, knowledge management systems, and digital transformation for growing businesses.",
    color: "#06B6D4",
    emissive: "#0284C7",
    href: "/divisions/techunaverse-ai",
    tag: "Active",
    planet: [3.5, 0.5, 5] as [number, number, number],
    camPos: [4.8, 1.5, 8] as [number, number, number],
    r: 0.55,
    icon: "🤖",
  },
  {
    name: "UNA Studios",
    tagline: "Custom Woodworking & Crafts",
    body: "Greek paddles, laser engraving, Cricut products, personalized gifts and home décor.",
    color: "#D4AF37",
    emissive: "#B7941F",
    href: "/divisions/una-studios",
    tag: "Active",
    planet: [-3.5, -0.5, 3] as [number, number, number],
    camPos: [-4.8, 0.3, 5.5] as [number, number, number],
    r: 0.46,
    icon: "🪵",
  },
  {
    name: "UNA",
    tagline: "Purpose-Driven Lifestyle",
    body: "A lifestyle brand for those who are Unbound, Noble, and Ambitious — built for the bold.",
    color: "#9D6DF5",
    emissive: "#7C3AED",
    href: "/divisions/una",
    tag: "Coming Soon",
    planet: [4, 1.5, 1] as [number, number, number],
    camPos: [5.5, 2.5, 3.5] as [number, number, number],
    r: 0.48,
    icon: "✨",
  },
  {
    name: "BuildUNA",
    tagline: "Real Estate & Development",
    body: "Multifamily housing, mixed-use development, and community investment.",
    color: "#10B981",
    emissive: "#059669",
    href: "/divisions/builduna",
    tag: "Coming Soon",
    planet: [-2.5, 1, -1] as [number, number, number],
    camPos: [-3.8, 2, 1.5] as [number, number, number],
    r: 0.38,
    icon: "🏗️",
  },
  {
    name: "UNA Makers Lab",
    tagline: "STEM for the Next Generation",
    body: "AI literacy, robotics, coding, and entrepreneurship for underserved youth.",
    color: "#F59E0B",
    emissive: "#D97706",
    href: "/divisions/una-makers-lab",
    tag: "Coming Soon",
    planet: [0.5, -1.5, -3] as [number, number, number],
    camPos: [1.8, -0.5, -0.5] as [number, number, number],
    r: 0.36,
    icon: "🎓",
  },
] as const;

type Div = (typeof DIVS)[number];

// Camera path: intro → AI → Studios → UNA → BuildUNA → Makers → outro
const CURVE = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 2, 16),
    new THREE.Vector3(4.8, 1.5, 8),
    new THREE.Vector3(-4.8, 0.3, 5.5),
    new THREE.Vector3(5.5, 2.5, 3.5),
    new THREE.Vector3(-3.8, 2, 1.5),
    new THREE.Vector3(1.8, -0.5, -0.5),
    new THREE.Vector3(0, 0, 14),
  ],
  false,
  "catmullrom",
  0.5
);

// Scroll-progress thresholds [start, peak, end] for each division
// Aligned with curve's parametric distribution (7 points → peaks at 1/6, 2/6, 3/6, 4/6, 5/6)
const THRESHOLDS = [
  [0.04, 0.167, 0.28],
  [0.28, 0.333, 0.42],
  [0.42, 0.50,  0.58],
  [0.58, 0.667, 0.75],
  [0.75, 0.833, 0.97],
] as const;

function smoothstep(a: number, b: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function getDivOpacity(i: number, p: number) {
  const [s, peak, e] = THRESHOLDS[i];
  if (p <= s || p >= e) return 0;
  return p <= peak ? smoothstep(s, peak, p) : 1 - smoothstep(peak, e, p);
}

// ─── Galaxy particles ─────────────────────────────────────────────────────────
function Galaxy() {
  const ref = useRef<THREE.Points>(null);
  const { geo, mat } = useMemo(() => {
    const count = 7000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cA = new THREE.Color("#D4AF37");
    const cB = new THREE.Color("#7C3AED");
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = Math.random() * 8 + 1;
      const arm = i % 3;
      const a = (arm / 3) * Math.PI * 2 + r * 4;
      const sp = Math.pow(Math.random(), 2);
      pos[i3]     = Math.cos(a) * r + (Math.random() - 0.5) * sp * r * 0.4;
      pos[i3 + 1] = (Math.random() - 0.5) * sp * 0.65;
      pos[i3 + 2] = Math.sin(a) * r + (Math.random() - 0.5) * sp * r * 0.4;
      const c = new THREE.Color().lerpColors(cA, cB, r / 9);
      col[i3] = c.r; col[i3 + 1] = c.g; col[i3 + 2] = c.b;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const m = new THREE.PointsMaterial({
      size: 0.024, sizeAttenuation: true, vertexColors: true,
      transparent: true, opacity: 0.85, depthWrite: false,
    });
    return { geo: g, mat: m };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.03;
  });
  return <points ref={ref} geometry={geo} material={mat} />;
}

// ─── Central core ─────────────────────────────────────────────────────────────
function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
      1.5 + Math.sin(t * 2) * 0.5;
    ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.04);
  });
  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial color="#F0CC5A" emissive="#D4AF37" emissiveIntensity={2} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.65, 16, 16]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.04} depthWrite={false} />
      </mesh>
    </group>
  );
}

// ─── Division planet ──────────────────────────────────────────────────────────
function DivisionPlanet({
  div,
  idx,
  pRef,
}: {
  div: Div;
  idx: number;
  pRef: React.MutableRefObject<number>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const atmRef  = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const op = getDivOpacity(idx, pRef.current);

    if (meshRef.current) {
      meshRef.current.rotation.y = t * (0.15 + op * 0.4);
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.3 + op * 1.6;
    }
    if (ringRef.current) {
      const pulse = 1 + Math.sin(t * 3) * 0.07 * op;
      ringRef.current.scale.setScalar(pulse);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = op * 0.7;
    }
    if (atmRef.current) {
      (atmRef.current.material as THREE.MeshBasicMaterial).opacity = 0.05 + op * 0.12;
    }
  });

  const [px, py, pz] = div.planet;
  return (
    <group position={[px, py, pz]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[div.r, 32, 32]} />
        <meshStandardMaterial
          color={div.color}
          emissive={div.emissive}
          emissiveIntensity={0.3}
          roughness={0.35}
          metalness={0.65}
        />
      </mesh>
      <mesh ref={atmRef}>
        <sphereGeometry args={[div.r * 1.38, 16, 16]} />
        <meshBasicMaterial color={div.color} transparent opacity={0.05} depthWrite={false} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[div.r * 2.4, 0.014, 2, 80]} />
        <meshBasicMaterial color={div.color} transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
}

// ─── Camera controller ────────────────────────────────────────────────────────
function CameraController({ pRef }: { pRef: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const camPos  = useRef(new THREE.Vector3(0, 2, 16));
  const lookTgt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const p = pRef.current;

    // Position along spline
    const curveT = Math.min(Math.max(p, 0.0001), 0.9999);
    const tgtPos = CURVE.getPointAt(curveT);
    camPos.current.lerp(tgtPos, 0.05);
    camera.position.copy(camPos.current);

    // Look-at: weighted average of active planet positions
    let totalOp = 0;
    const rawLook = new THREE.Vector3();
    DIVS.forEach((d, i) => {
      const op = getDivOpacity(i, p);
      if (op > 0) {
        rawLook.addScaledVector(new THREE.Vector3(...d.planet), op);
        totalOp += op;
      }
    });
    if (totalOp > 0.001) {
      rawLook.divideScalar(totalOp);
    } else {
      rawLook.set(0, 0, 0);
    }
    lookTgt.current.lerp(rawLook, 0.04);
    camera.lookAt(lookTgt.current);
  });

  return null;
}

// ─── Full 3D scene ────────────────────────────────────────────────────────────
function JourneyScene({ pRef }: { pRef: React.MutableRefObject<number> }) {
  return (
    <>
      <ambientLight intensity={0.06} />
      <pointLight position={[0, 0, 0]}    intensity={2.5} color="#D4AF37" distance={26} decay={2} />
      <pointLight position={[-10, 5, -5]} intensity={0.9} color="#7C3AED" distance={36} decay={2} />
      <pointLight position={[10, -5, 5]}  intensity={0.6} color="#06B6D4" distance={30} decay={2} />

      <DreiStars radius={80} depth={50} count={3500} factor={3} saturation={0.15} fade speed={0.4} />
      <Galaxy />
      <Core />

      {DIVS.map((d, i) => (
        <DivisionPlanet key={d.name} div={d} idx={i} pRef={pRef} />
      ))}

      <CameraController pRef={pRef} />
    </>
  );
}

// ─── Overlay: info card ───────────────────────────────────────────────────────
function InfoCard({ div, opacity }: { div: Div; opacity: number }) {
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 18}px)`,
        transition: "opacity 0.45s ease, transform 0.45s ease",
        pointerEvents: opacity > 0.5 ? "auto" : "none",
      }}
    >
      <div
        className="rounded-2xl p-7 md:p-8"
        style={{
          background: "rgba(8,12,34,0.78)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: `1px solid ${div.color}40`,
          boxShadow: `0 0 50px ${div.color}1a, inset 0 1px 0 ${div.color}20`,
        }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-3xl">{div.icon}</span>
          <span
            className="text-[0.68rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{
              color: div.color,
              background: `${div.color}20`,
              border: `1px solid ${div.color}40`,
            }}
          >
            {div.tag}
          </span>
        </div>

        <h3
          className="font-serif font-black leading-tight mb-2"
          style={{ fontSize: "clamp(1.5rem,2.8vw,2.2rem)", color: "#fff" }}
        >
          {div.name}
        </h3>

        <p className="font-semibold text-sm mb-4" style={{ color: div.color }}>
          {div.tagline}
        </p>

        <p className="text-slate-300 text-sm leading-relaxed mb-7">{div.body}</p>

        <Link
          href={div.href}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
          style={{ background: `linear-gradient(135deg, ${div.color}, ${div.emissive})` }}
        >
          Explore Division <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

// ─── Overlay: intro screen ────────────────────────────────────────────────────
function IntroOverlay({ progress }: { progress: number }) {
  const op = 1 - smoothstep(0, 0.06, progress);
  if (op < 0.01) return null;
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      style={{ opacity: op }}
    >
      <div className="inline-flex items-center gap-2 bg-[rgba(124,58,237,0.14)] border border-[rgba(124,58,237,0.35)] rounded-full px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-widest text-purple2 mb-6">
        <span className="pulse-dot" />
        5 Divisions · 1 Universe
      </div>
      <h2 className="font-serif font-black text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.4rem,6vw,4.8rem)" }}>
        Navigate the{" "}
        <span className="text-gradient-gold">Universe</span>
      </h2>
      <p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed">
        Each division is a world of its own. Scroll to fly through them all.
      </p>
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <span className="text-sm tracking-wide">↓ Scroll to travel</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </div>
  );
}

// ─── Overlay: progress dots ───────────────────────────────────────────────────
function NavDots({ opacities }: { opacities: number[] }) {
  const maxOp = Math.max(...opacities);
  const activeIdx = maxOp > 0.1 ? opacities.indexOf(maxOp) : -1;
  return (
    <div className="flex items-end gap-4 md:gap-6">
      {DIVS.map((div, i) => {
        const isActive = i === activeIdx && maxOp > 0.15;
        return (
          <div key={div.name} className="flex flex-col items-center gap-2">
            <div
              style={{
                width: isActive ? 12 : 8,
                height: isActive ? 12 : 8,
                borderRadius: "50%",
                backgroundColor: isActive ? div.color : "rgba(255,255,255,0.22)",
                boxShadow: isActive ? `0 0 14px 4px ${div.color}88` : "none",
                transition: "all 0.5s ease",
              }}
            />
            <span
              className="text-[10px] hidden md:block transition-colors duration-500"
              style={{ color: isActive ? div.color : "rgba(255,255,255,0.3)" }}
            >
              {div.name.split(" ")[0]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Outro teaser ─────────────────────────────────────────────────────────────
function OutroOverlay({ progress }: { progress: number }) {
  const op = smoothstep(0.97, 1, progress);
  if (op < 0.01) return null;
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      style={{ opacity: op }}
    >
      <h3 className="font-serif text-3xl font-black text-white mb-3">
        The Universe Is <span className="text-gradient-gold">Yours</span>
      </h3>
      <p className="text-slate-400 mb-6 max-w-sm">All 5 divisions, one connected ecosystem.</p>
      <Link
        href="/divisions"
        className="pointer-events-auto px-6 py-3 rounded-full text-sm font-bold text-white"
        style={{ background: "linear-gradient(135deg,#D4AF37,#F0CC5A)", color: "#080C22" }}
      >
        View All Divisions →
      </Link>
    </div>
  );
}

// ─── Main exported component ──────────────────────────────────────────────────
export default function UniverseJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrolled = -el.getBoundingClientRect().top;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.max(0, Math.min(1, scrolled / total));
      progressRef.current = p;
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacities = DIVS.map((_, i) => getDivOpacity(i, progress));
  const maxOp = Math.max(...opacities);
  const activeIdx = maxOp > 0.01 ? opacities.indexOf(maxOp) : -1;
  const introOp = 1 - smoothstep(0, 0.06, progress);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "580vh" }}>
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: "100vh", background: "#080C22" }}
      >
        {/* 3D canvas */}
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 2, 16], fov: 60 }}
            gl={{ antialias: true, alpha: false }}
            style={{ background: "#080C22" }}
            dpr={[1, 1.5]}
          >
            <JourneyScene pRef={progressRef} />
          </Canvas>
        </div>

        {/* Left-side gradient for card legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(8,12,34,0.82) 0%, rgba(8,12,34,0.3) 52%, transparent 80%)",
          }}
        />

        {/* Intro overlay */}
        <IntroOverlay progress={progress} />

        {/* Division info card — desktop: left-center / mobile: bottom */}
        {activeIdx >= 0 && (
          <div
            className={[
              "absolute z-10",
              // mobile
              "bottom-24 left-4 right-4",
              // desktop
              "md:bottom-auto md:right-auto md:left-[5%] md:top-1/2 md:-translate-y-1/2",
              "md:w-[min(440px,44%)]",
            ].join(" ")}
          >
            <InfoCard div={DIVS[activeIdx]} opacity={maxOp} />
          </div>
        )}

        {/* Outro overlay */}
        <OutroOverlay progress={progress} />

        {/* Progress dots — hidden during intro & outro */}
        {introOp < 0.6 && progress < 0.96 && (
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10">
            <NavDots opacities={opacities} />
          </div>
        )}
      </div>
    </div>
  );
}
