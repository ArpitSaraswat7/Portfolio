import React from "react";
import { Hero } from "@/components/sections/hero";
import { AboutBento } from "@/components/sections/about-bento";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { SkillsSphere } from "@/components/sections/skills-sphere";
import { MoreToExplore } from "@/components/sections/more-to-explore";
import { Footer } from "@/components/ui/footer";
import { WavyBackgroundGlobal } from "@/components/ui/wavy-background-global";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <WavyBackgroundGlobal />

      <div className="relative z-10">
        {/* 1. Hero Section (#home) */}
        <Hero name={siteConfig.name} role={siteConfig.role} />

        {/* 2. About Bento Section (#about) */}
        <AboutBento />

        {/* 3. Featured Projects Section (#projects) */}
        <FeaturedProjects />

        {/* 4. Skills Section (#skills) */}
        <SkillsSphere />

        {/* 5. More to Explore Section (#other) */}
        <MoreToExplore />

        {/* Shared Footer */}
        <Footer />
      </div>
    </main>
  );
}
