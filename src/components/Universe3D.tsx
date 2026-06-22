"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars as DreiStars } from "@react-three/drei";
import * as THREE from "three";

// ── Spiral Galaxy ────────────────────────────────────────────────────────────
function GalaxyParticles() {
  const ref = useRef<THREE.Points>(null);

  const { geometry, material } = useMemo(() => {
    const count = 10000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const inside = new THREE.Color("#D4AF37");   // gold core
    const outside = new THREE.Color("#7C3AED");  // purple edge
    const accent = new THREE.Color("#06B6D4");   // teal arm tips

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 9 + 0.5;
      const arm = i % 3;
      const spin = radius * 4.5;
      const armAngle = (arm / 3) * Math.PI * 2;
      const spread = Math.pow(Math.random(), 2);

      positions[i3]     = Math.cos(armAngle + spin) * radius + (Math.random() - 0.5) * spread * radius * 0.4;
      positions[i3 + 1] = (Math.random() - 0.5) * spread * 0.7;
      positions[i3 + 2] = Math.sin(armAngle + spin) * radius + (Math.random() - 0.5) * spread * radius * 0.4;

      const t = radius / 9.5;
      const c = new THREE.Color();
      if (arm === 2 && t > 0.7) {
        c.lerpColors(outside, accent, (t - 0.7) / 0.3);
      } else {
        c.lerpColors(inside, outside, t);
      }
      colors[i3]     = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.026,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
    });

    return { geometry: geo, material: mat };
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.04;
  });

  return <points ref={ref} geometry={geometry} material={material} />;
}

// ── Galaxy Core / TechUnaVerse Sun ───────────────────────────────────────────
function GalaxyCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const mat = meshRef.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 1.6 + Math.sin(clock.getElapsedTime() * 2.2) * 0.5;
    const pulse = 1 + Math.sin(clock.getElapsedTime() * 1.5) * 0.04;
    meshRef.current.scale.setScalar(pulse);
  });

  return (
    <group>
      {/* core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color="#F0CC5A" emissive="#D4AF37" emissiveIntensity={2} />
      </mesh>
      {/* soft corona */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.04} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.4, 12, 12]} />
        <meshBasicMaterial color="#D4AF37" transparent opacity={0.015} depthWrite={false} />
      </mesh>
    </group>
  );
}

// ── Division Planets ─────────────────────────────────────────────────────────
const PLANETS = [
  { label: "AI",         color: "#06B6D4", emissive: "#0284C7", orbit: 3.5,  speed: 0.18, r: 0.34, tilt:  0.18, start: 0.0 },
  { label: "Studios",   color: "#D4AF37", emissive: "#B7941F", orbit: 5.4,  speed: 0.12, r: 0.27, tilt:  0.45, start: 1.3 },
  { label: "UNA",        color: "#9D6DF5", emissive: "#7C3AED", orbit: 7.2,  speed: 0.09, r: 0.31, tilt: -0.28, start: 2.6 },
  { label: "BuildUNA",  color: "#10B981", emissive: "#059669", orbit: 4.7,  speed: 0.14, r: 0.22, tilt:  0.55, start: 4.1 },
  { label: "MakersLab", color: "#F59E0B", emissive: "#D97706", orbit: 6.3,  speed: 0.10, r: 0.25, tilt: -0.50, start: 5.3 },
] as const;

function Planet({
  planet,
  index,
}: {
  planet: (typeof PLANETS)[number];
  index: number;
}) {
  const orbitGroup = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = planet.start + t * planet.speed;
    if (orbitGroup.current) {
      orbitGroup.current.position.x = Math.cos(angle) * planet.orbit;
      orbitGroup.current.position.z = Math.sin(angle) * planet.orbit;
      orbitGroup.current.position.y = Math.sin(t * 0.35 + index * 1.2) * 0.45;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
    }
  });

  return (
    <>
      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2 + planet.tilt, 0, 0]}>
        <torusGeometry args={[planet.orbit, 0.007, 2, 128]} />
        <meshBasicMaterial color={planet.color} transparent opacity={0.14} depthWrite={false} />
      </mesh>

      {/* Orbiting planet */}
      <group ref={orbitGroup}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[planet.r, 32, 32]} />
          <meshStandardMaterial
            color={planet.color}
            emissive={planet.emissive}
            emissiveIntensity={0.5}
            roughness={0.35}
            metalness={0.65}
          />
        </mesh>
        {/* Atmosphere halo */}
        <mesh>
          <sphereGeometry args={[planet.r * 1.35, 16, 16]} />
          <meshBasicMaterial
            color={planet.color}
            transparent
            opacity={0.07}
            depthWrite={false}
          />
        </mesh>
      </group>
    </>
  );
}

// ── Nebula blobs ─────────────────────────────────────────────────────────────
function Nebulae() {
  const blobs = useMemo(
    () => [
      { pos: [-6,  1, -4] as [number, number, number], color: "#7C3AED", s: 7 },
      { pos: [ 7, -1, -3] as [number, number, number], color: "#D4AF37", s: 6 },
      { pos: [-4,  3,  5] as [number, number, number], color: "#06B6D4", s: 5 },
      { pos: [ 5, -3,  4] as [number, number, number], color: "#9D6DF5", s: 8 },
      { pos: [ 0,  5, -6] as [number, number, number], color: "#F59E0B", s: 5 },
    ],
    []
  );

  return (
    <>
      {blobs.map((b, i) => (
        <mesh key={i} position={b.pos} scale={b.s}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color={b.color} transparent opacity={0.028} depthWrite={false} />
        </mesh>
      ))}
    </>
  );
}

// ── Shooting Stars ───────────────────────────────────────────────────────────
function ShootingStars() {
  const count = 6;
  const ref = useRef<THREE.Points>(null);

  const { geometry, material, meta } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const meta = Array.from({ length: count }, (_, i) => ({
      delay: Math.random() * 12,
      speed: 8 + Math.random() * 6,
      dir: new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        -(0.2 + Math.random() * 0.4),
        (Math.random() - 0.5) * 0.3
      ).normalize(),
    }));

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({ color: "#ffffff", size: 0.12, transparent: true, opacity: 0.9 });

    return { geometry: geo, material: mat, meta };
  }, []);

  const pos = useRef<number[]>(Array.from({ length: count }, () => 0));

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const arr = (ref.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const { delay, speed, dir } = meta[i];
      const local = (t + delay) % 14;

      if (local < 1.2) {
        const start = new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          6 + Math.random() * 4,
          (Math.random() - 0.5) * 10
        );
        pos.current[i3]     = start.x;
        pos.current[i3 + 1] = start.y;
        pos.current[i3 + 2] = start.z;
      }

      pos.current[i3]     += dir.x * speed * 0.016;
      pos.current[i3 + 1] += dir.y * speed * 0.016;
      pos.current[i3 + 2] += dir.z * speed * 0.016;

      if (local < 1.0) {
        arr[i3]     = pos.current[i3];
        arr[i3 + 1] = pos.current[i3 + 1];
        arr[i3 + 2] = pos.current[i3 + 2];
      } else {
        arr[i3]     = 9999;
        arr[i3 + 1] = 9999;
        arr[i3 + 2] = 9999;
      }
    }

    (ref.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
  });

  return <points ref={ref} geometry={geometry} material={material} />;
}

// ── Mouse-responsive camera ──────────────────────────────────────────────────
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      scroll.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame(() => {
    const tx = mouse.current.x * 2.0;
    const ty = mouse.current.y * 1.2;
    const tz = 15 - scroll.current * 7;
    camera.position.x += (tx - camera.position.x) * 0.03;
    camera.position.y += (ty - camera.position.y) * 0.03;
    camera.position.z += (tz - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── Full scene ───────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={0.06} />
      <pointLight position={[0, 0, 0]}    intensity={2.0} color="#D4AF37" distance={25} decay={2} />
      <pointLight position={[-12, 6, -8]} intensity={0.8} color="#7C3AED" distance={40} decay={2} />
      <pointLight position={[12, -6, 8]}  intensity={0.6} color="#06B6D4" distance={35} decay={2} />

      <DreiStars radius={90} depth={50} count={4500} factor={3} saturation={0.15} fade speed={0.5} />

      <GalaxyParticles />
      <GalaxyCore />
      <Nebulae />
      <ShootingStars />

      {PLANETS.map((p, i) => (
        <Planet key={p.label} planet={p} index={i} />
      ))}

      <CameraRig />
    </>
  );
}

// ── Canvas export (always client-only) ──────────────────────────────────────
export default function Universe3D() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
