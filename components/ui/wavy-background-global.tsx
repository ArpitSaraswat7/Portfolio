"use client";

import dynamic from "next/dynamic";

const WavyBackground = dynamic(
  () => import("@/components/ui/wavy-background").then((mod) => mod.WavyBackground || mod.default),
  { ssr: false }
);

export function WavyBackgroundGlobal() {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <WavyBackground
        colors={[
          "#6D4BC3",
          "#896ABD",
          "#A855F7",
          "#C084FC",
          "#7C3AED",
        ]}
        backgroundFill="transparent"
        blur={8}
        speed="slow"
        waveWidth={32}
        waveOpacity={0.22}
        containerClassName="!h-full !w-full"
        className="hidden"
      />
    </div>
  );
}

export default WavyBackgroundGlobal;
