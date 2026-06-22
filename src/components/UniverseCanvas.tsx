"use client";
import dynamic from "next/dynamic";

const Universe3D = dynamic(() => import("./Universe3D"), {
  ssr: false,
  loading: () => null,
});

export default function UniverseCanvas() {
  return <Universe3D />;
}
