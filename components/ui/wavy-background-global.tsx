"use client";

import { WavyBackground } from "@/components/ui/wavy-background";

export default function WavyBackgroundGlobal() {
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
        backgroundFill="#0A0810"
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

export { WavyBackgroundGlobal };
