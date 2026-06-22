"use client";
import dynamic from "next/dynamic";

const UniverseJourney = dynamic(() => import("./UniverseJourney"), {
  ssr: false,
  loading: () => (
    <div
      style={{ height: "580vh", background: "#080C22" }}
      className="relative"
    />
  ),
});

export default function UniverseJourneyCanvas() {
  return <UniverseJourney />;
}
