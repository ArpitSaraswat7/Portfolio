"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, Calendar, Building2, Tag } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { achievementsData } from "@/lib/site-config";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--background)] text-[var(--foreground)] bg-dot-pattern">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <main className="w-full max-w-5xl mx-auto pt-32 pb-24 px-4 sm:px-6">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] px-4 py-2 rounded-full bg-[var(--card)] border border-[var(--card-border)] hover:border-orange-500/40 hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            ← Back to home
          </Link>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-orange-500 uppercase font-semibold">
            MILESTONES &amp; VICTORIES
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">
            My <span className="text-orange-500">Achievements</span>
          </h1>
          <p className="mt-3.5 text-sm sm:text-base text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            From code to peaks, every achievement tells a story of dedication.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[var(--card)] border border-[var(--card-border)] backdrop-blur-xl shadow-lg hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="md:col-span-5 relative rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--surface-soft)] aspect-[16/10] sm:aspect-[4/3] group-hover:border-orange-500/30 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={idx === 0}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-orange-300 border border-orange-500/20 flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-orange-400" />
                    <span>{item.number}</span>
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--foreground)] group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--surface-soft)] border border-[var(--card-border)] text-[var(--muted)]">
                      <Building2 className="w-3.5 h-3.5 text-orange-500" />
                      <span>{item.issuer}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--surface-soft)] border border-[var(--card-border)] text-[var(--muted)]">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      <span>{item.date}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--surface-soft)] border border-[var(--card-border)] text-[var(--muted)]">
                      <Tag className="w-3.5 h-3.5 text-orange-500" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
