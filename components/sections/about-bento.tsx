"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const marqueeTechs = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Node.js", color: "#339933" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
];

const mindsetCards = [
  { id: "calisthenics", title: "Calisthenics", src: "/about/calisthenics.svg" },
  { id: "running", title: "Running", src: "/about/running.svg" },
  { id: "gym", title: "Discipline", src: "/about/gym.svg" },
];

const centerImages: Record<string, { src: string; alt: string }> = {
  default: { src: "/Arpit.jpeg", alt: "Arpit Saraswat Portrait" },
  science: { src: "/about/coding.svg", alt: "GenAI & AI/ML Projects" },
  university: { src: "/Arpit.jpeg", alt: "Arpit Saraswat - SRM University" },
  competitions: { src: "/Chandigarh.jpg", alt: "Chandigarh University Hackathon Top 5 Certificate" },
};

export function AboutBento() {
  const [activeHoverCard, setActiveHoverCard] = useState<string>("default");
  const [activeMindsetIndex, setActiveMindsetIndex] = useState(0);

  const currentCenterImage = centerImages[activeHoverCard] || centerImages.default;

  return (
    <section id="about" className="pb-28 sm:pb-32 pt-0 px-4 max-w-5xl mx-auto scroll-mt-0">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:grid-rows-[9rem_auto_9rem]">
        {/* =========================================================================
            CARD 1: NAME CARD (Mobile: Col 1, Row 1)
           ========================================================================= */}
        <div className="md:hidden col-span-1 row-span-1 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] rounded-2xl relative overflow-hidden group w-full h-full p-5 flex flex-col justify-center items-center text-center shadow-sm">
          <div className="flex flex-col items-center w-full pb-1">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[var(--foreground)]">
              ARPIT
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 mt-0.5">
            <div className="h-px w-10 bg-[var(--foreground)]/20" />
            <span className="text-[9px] font-mono text-[var(--muted)] uppercase tracking-[0.2em] opacity-80">
              Fullstack Developer
            </span>
          </div>
        </div>

        {/* =========================================================================
            CARD 1: NAME CARD (Desktop: Col 1, Row 1)
           ========================================================================= */}
        <div className="hidden md:flex col-span-1 row-span-1 md:col-start-1 md:row-start-1 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md rounded-2xl relative overflow-hidden group w-full h-full p-7">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-full h-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] mix-blend-overlay" />
          </div>
          <div className="flex flex-col justify-center items-center text-center h-full relative z-10 w-full gap-1">
            <div className="flex flex-col items-center w-full pb-2">
              <span className="text-4xl font-black tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                ARPIT
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 -mt-1">
              <div className="h-px w-12 bg-[var(--foreground)]/20" />
              <span className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-[0.2em] opacity-80">
                Fullstack Developer
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE PORTRAIT CARD (Mobile: Col 2, Row 1)
           ========================================================================= */}
        <div className="md:hidden aspect-square col-span-1 row-span-1 rounded-2xl overflow-hidden border border-[var(--card-border)] relative w-full bg-[#18181b]">
          <Image
            src="/Arpit.jpeg"
            alt="Arpit Saraswat Portrait"
            fill
            className="object-cover"
          />
        </div>

        {/* =========================================================================
            CARD 2: TOP 3 FANNED HOVER CARDS (Desktop: Col 2-3, Row 1)
           ========================================================================= */}
        <div className="col-span-2 row-span-1 md:col-start-2 md:col-span-2 md:row-start-1 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md rounded-2xl relative overflow-hidden group w-full h-36 md:h-full">
          {/* Top Pill Cue */}
          <div className="hidden md:flex absolute top-3.5 left-0 right-0 justify-center z-30 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
            <span className="text-[8px] uppercase tracking-[0.2em] text-purple-400/70 font-medium bg-[var(--card)]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/20 shadow-sm">
              Hover to read more
            </span>
          </div>

          {/* Background Dot Field */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-dot-pattern" />

          {/* Three Layered / Fanned Overlapping Cards */}
          <div className="w-full h-full flex justify-center items-end px-2 relative z-10 overflow-hidden rounded-2xl">
            {/* Card A: GenAI Research */}
            <div
              onMouseEnter={() => setActiveHoverCard("science")}
              onMouseLeave={() => setActiveHoverCard("default")}
              className={`w-1/3 h-48 -mr-5 md:-mr-6 z-10 bg-[var(--card)] border border-[var(--foreground)]/10 border-b-0 rounded-t-xl p-3 pr-6 md:p-4 flex flex-col justify-start shadow-[0_-5px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative group/card cursor-pointer overflow-hidden ${
                activeHoverCard === "science"
                  ? "translate-y-0 z-30 shadow-[0_-5px_35px_rgba(168,85,247,0.55)] border-purple-500/60"
                  : "translate-y-[60px] md:translate-y-[82px] hover:translate-y-0 hover:z-30 hover:shadow-[0_-5px_35px_rgba(168,85,247,0.5)] hover:border-purple-500/50"
              }`}
            >
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
              <div className="mt-1 relative z-10">
                <span className="block text-[10px] font-bold text-[var(--foreground)] leading-tight uppercase opacity-90">
                  GenAI Research
                </span>
                <span className="block md:hidden text-[8px] sm:text-[9px] text-[var(--muted)] leading-tight mt-1.5 opacity-70">
                  Active member of GenAI Research Club. Training CV &amp; LLM models.
                </span>
                <span className="hidden md:block text-[10px] text-[var(--muted)] leading-snug mt-2 opacity-60 group-hover/card:opacity-100 transition-opacity duration-300">
                  Active member of the GenAI Research Club at SRM. Training computer vision models for automated defect detection and multimodal AI agents.
                </span>
              </div>
            </div>

            {/* Card B: University / SRM Education */}
            <div
              onMouseEnter={() => setActiveHoverCard("university")}
              onMouseLeave={() => setActiveHoverCard("default")}
              className={`w-2/5 h-52 z-20 bg-[var(--card)] border border-[var(--foreground)]/10 border-b-0 rounded-t-xl p-3 md:p-5 flex flex-col justify-start shadow-[0_-5px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative group/card cursor-pointer overflow-hidden ${
                activeHoverCard === "university"
                  ? "translate-y-0 z-30 shadow-[0_-5px_35px_rgba(168,85,247,0.55)] border-purple-500/60"
                  : "translate-y-[68px] md:translate-y-[88px] hover:translate-y-0 hover:z-30 hover:shadow-[0_-5px_35px_rgba(168,85,247,0.5)] hover:border-purple-500/50"
              }`}
            >
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
              <div className="mt-2 relative z-10 text-center">
                <span className="block text-[12px] font-black text-[var(--foreground)] leading-none mb-1 uppercase tracking-tight">
                  University
                </span>
                <span className="block md:hidden text-[8px] sm:text-[9px] text-[var(--muted)] leading-tight mt-1.5 opacity-70">
                  MCA in Generative AI @ SRM Institute of Science &amp; Technology.
                </span>
                <span className="hidden md:block text-[10px] text-[var(--muted)] leading-snug mt-2 opacity-60 group-hover/card:opacity-100 transition-opacity duration-300">
                  Pursuing Master of Computer Applications (MCA) in Generative AI at SRM Institute of Science and Technology. Specializing in neural architectures and AI systems.
                </span>
              </div>
            </div>

            {/* Card C: Competitions & Hackathons */}
            <div
              onMouseEnter={() => setActiveHoverCard("competitions")}
              onMouseLeave={() => setActiveHoverCard("default")}
              className={`w-1/3 h-48 -ml-5 md:-ml-6 z-10 bg-[var(--card)] border border-[var(--foreground)]/10 border-b-0 rounded-t-xl p-3 pl-6 md:p-4 flex flex-col justify-start text-right shadow-[0_-5px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative group/card cursor-pointer overflow-hidden ${
                activeHoverCard === "competitions"
                  ? "translate-y-0 z-30 shadow-[0_-5px_35px_rgba(168,85,247,0.55)] border-purple-500/60"
                  : "translate-y-[60px] md:translate-y-[82px] hover:translate-y-0 hover:z-30 hover:shadow-[0_-5px_35px_rgba(168,85,247,0.5)] hover:border-purple-500/50"
              }`}
            >
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
              <div className="mt-1 relative z-10">
                <span className="block text-[10px] font-bold text-[var(--foreground)] leading-tight uppercase opacity-90">
                  Competitions
                </span>
                <span className="block md:hidden text-[8px] sm:text-[9px] text-[var(--muted)] leading-tight mt-1.5 opacity-70">
                  Microsoft Top 10 • Chandigarh Univ Top 5 • Manipal Finalist.
                </span>
                <span className="hidden md:block text-[10px] text-[var(--muted)] leading-snug mt-2 opacity-60 group-hover/card:opacity-100 transition-opacity duration-300">
                  Top 10 at Microsoft Hack with India (2025), Top 5 at Chandigarh University (2025), and Finalist at Manipal University (2024).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 3: MINDSET CARD (FANNED / STACKED COLLAGE) (Desktop: Col 1, Rows 2-3)
           ========================================================================= */}
        <div className="col-span-1 row-span-2 md:col-start-1 md:row-start-2 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-sm rounded-2xl flex flex-col h-full w-full overflow-hidden relative group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200">
          {/* Header Typography */}
          <div className="p-3.5 md:p-4 pb-2 md:pb-1 flex flex-col gap-1.5 z-20 shrink-0">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] mb-1 tracking-tight">
                Mindset
              </h3>
              <div className="h-0.5 w-8 bg-purple-500/60 rounded-full" />
            </div>
            <p className="text-[10px] sm:text-[11px] text-[var(--muted)] leading-tight">
              <strong>Building more than software.</strong> My passions provide the{" "}
              <strong>discipline and focus</strong> I need to grow.
            </p>
          </div>

          {/* 3D Fanned / Stacked Collage of Cards */}
          <div className="flex-1 relative flex items-center justify-center px-2 py-1 overflow-hidden min-h-[170px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left Back Card */}
              <div
                onClick={() => setActiveMindsetIndex((prev) => (prev + 1) % mindsetCards.length)}
                className="absolute w-[46%] md:w-[44%] aspect-[3/4] rounded-xl overflow-hidden border border-[var(--card-border)]/60 shadow-lg cursor-pointer transition-all duration-500 select-none"
                style={{
                  opacity: 0.55,
                  zIndex: 1,
                  filter: "blur(0.8px) grayscale(25%)",
                  transform: "translateX(-48%) scale(0.72) rotate(-5deg)",
                }}
              >
                <Image
                  src={mindsetCards[(activeMindsetIndex + 1) % mindsetCards.length].src}
                  alt="Mindset side"
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>

              {/* Center / Front Active Card (Dominant) */}
              <div
                onClick={() => setActiveMindsetIndex((prev) => (prev + 1) % mindsetCards.length)}
                className="relative w-[56%] md:w-[52%] aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl cursor-pointer transition-all duration-500 z-10 group/center select-none"
                style={{
                  filter: "blur(0px) grayscale(0%)",
                  transform: "translateX(0) scale(1) rotate(0deg)",
                }}
              >
                <Image
                  src={mindsetCards[activeMindsetIndex].src}
                  alt={mindsetCards[activeMindsetIndex].title}
                  fill
                  className="object-cover pointer-events-none transition-transform duration-500 group-hover/center:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2 md:p-3 pt-6 md:pt-8">
                  <span className="text-[9px] md:text-xs font-bold text-white uppercase tracking-wider block">
                    {mindsetCards[activeMindsetIndex].title}
                  </span>
                </div>
              </div>

              {/* Right Back Card */}
              <div
                onClick={() => setActiveMindsetIndex((prev) => (prev + 2) % mindsetCards.length)}
                className="absolute w-[46%] md:w-[44%] aspect-[3/4] rounded-xl overflow-hidden border border-[var(--card-border)]/60 shadow-lg cursor-pointer transition-all duration-500 select-none"
                style={{
                  opacity: 0.55,
                  zIndex: 1,
                  filter: "blur(0.8px) grayscale(25%)",
                  transform: "translateX(48%) scale(0.72) rotate(5deg)",
                }}
              >
                <Image
                  src={mindsetCards[(activeMindsetIndex + 2) % mindsetCards.length].src}
                  alt="Mindset right"
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Bottom Editorial Caption */}
          <div className="hidden md:block p-3.5 pt-0 z-20 shrink-0 border-t border-[var(--card-border)]/30">
            <p className="text-[10px] text-[var(--muted)] leading-tight">
              <strong>Mastering body and mind</strong> is my path to <strong>excellence</strong>.
            </p>
          </div>
        </div>

        {/* =========================================================================
            CARD 4: CRAFT CARD (Desktop: Col 3, Rows 2-3)
           ========================================================================= */}
        <div className="col-span-1 row-span-2 md:col-start-3 md:row-start-2 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-sm rounded-2xl flex flex-col justify-between group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 h-full w-full overflow-hidden">
          <div className="p-3.5 md:p-4 pb-0 flex flex-col gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] mb-1 tracking-tight">
                Craft
              </h3>
              <div className="h-0.5 w-8 bg-purple-500/60 rounded-full" />
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] text-[var(--muted)] leading-tight">
                Building scalable <strong>apps, websites, and automations</strong>.
              </p>
              <p className="hidden md:block text-[10px] text-[var(--muted)] leading-tight">
                I understand what advantages modern tech and Generative AI can provide, helping me deliver the solutions a business actually needs.
              </p>
            </div>
          </div>

          {/* Continuous Seamless Tech Marquee */}
          <div className="relative w-full py-2 bg-[var(--card-border)]/30 border-y border-[var(--card-border)]/50 my-auto overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--card)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--card)] to-transparent z-10" />

            <div className="flex overflow-hidden select-none">
              <div className="flex gap-5 whitespace-nowrap pr-5 items-center animate-[marquee_18s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...marqueeTechs, ...marqueeTechs].map((tech, idx) => (
                  <div key={`${tech.name}-${idx}`} className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                    <span className="text-[9px] font-mono font-medium text-[var(--muted)] uppercase tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Availability Footer integrated into Craft */}
          <div className="p-3.5 md:p-4 pt-0">
            <p className="md:hidden text-[8px] sm:text-[9px] text-[var(--muted)] leading-tight">
              I deliver the best tech solution for your business.
            </p>
            <p className="hidden md:block text-[10px] text-[var(--muted)] leading-tight">
              Active Hackathon competitor &amp; GenAI developer. Feel free to invite me to collaborate.
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[8px] sm:text-[9px] font-medium text-[var(--foreground)] opacity-90 leading-tight">
                Open to collaboration &amp; freelance
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 5: CENTER DYNAMIC IMAGE CARD (Desktop: Col 2, Row 2)
           ========================================================================= */}
        <div className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl overflow-hidden border border-[var(--card-border)] relative w-full h-full bg-black">
          <div
            key={currentCenterImage.src}
            className="absolute inset-0 z-0 animate-in fade-in duration-500"
          >
            <Image
              src={currentCenterImage.src}
              alt={currentCenterImage.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
        </div>

        {/* =========================================================================
            CARD 6: LOCATION MAP CARD (Desktop: Col 2, Row 3 / Mobile: Col 1, Row 4)
           ========================================================================= */}
        <div className="aspect-square col-span-1 row-span-1 md:col-start-2 md:row-start-3 bg-[var(--card)] border border-[var(--card-border)] backdrop-blur-sm rounded-2xl overflow-hidden relative group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 h-full w-full">
          {/* Map background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/map.svg"
              alt="Map Background"
              fill
              className="object-cover grayscale opacity-50 mix-blend-luminosity scale-125 translate-y-4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/70 to-transparent" />
          </div>

          {/* Radar Scanning Line Animation */}
          <div
            className="absolute top-0 bottom-0 w-px bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)] z-10 animate-[radar-sweep_4s_ease-in-out_infinite]"
          />

          {/* Location Content */}
          <div className="absolute bottom-0 left-0 w-full p-3.5 z-20 flex flex-col justify-end">
            <span className="text-[20px] sm:text-[24px] md:text-[28px] font-bold font-sans text-[var(--foreground)] uppercase tracking-tighter leading-[0.95] mb-1 block">
              {siteConfig.location.city}, <br className="md:hidden" /> {siteConfig.location.country}
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[13px] sm:text-[14px] font-mono text-[var(--muted)] opacity-80 leading-none tracking-tight">
                {siteConfig.location.coordinates}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-purple-500 font-bold text-[13px] leading-none">-</span>
                <span className="text-[13px] font-mono text-purple-400 opacity-90 uppercase tracking-tight leading-none">
                  {siteConfig.location.timezone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARD 7: MOBILE SECONDARY HOBBY CARD (Mobile: Col 2, Row 4)
           ========================================================================= */}
        <div className="md:hidden aspect-square col-span-1 row-span-1 rounded-2xl overflow-hidden border border-[var(--card-border)] relative w-full bg-[#18181b]">
          <Image
            src="/about/gym.svg"
            alt="Gym & Discipline"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
