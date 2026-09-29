"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, Trophy, Link2, ArrowRight } from "lucide-react";

export function MoreToExplore() {
  return (
    <section
      id="other"
      className="pt-0 pb-20 sm:pb-28 md:pb-32 relative overflow-hidden"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-violet-400 uppercase font-semibold">
            Discover
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            More to <span className="text-gradient-shimmer">Explore</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[var(--muted)] max-w-md mx-auto">
            Check out these additional pages to connect, view achievements, or sign the guestbook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <Link
            href="/guestbook"
            className="group relative p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-purple-300 transition-colors">
                  Guestbook
                </h3>
                <p className="text-[var(--muted)] text-xs sm:text-sm mt-1 leading-relaxed">
                  Leave your mark on the community wall and share a quick note.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/achievements"
            className="group relative p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300 shadow-sm">
                <Trophy className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-amber-300 transition-colors">
                  Achievements
                </h3>
                <p className="text-[var(--muted)] text-xs sm:text-sm mt-1 leading-relaxed">
                  Milestones, hackathon wins, research awards, and certifications.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/links"
            className="group relative p-5 sm:p-6 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-sm">
                <Link2 className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-cyan-300 transition-colors">
                  My Links
                </h3>
                <p className="text-[var(--muted)] text-xs sm:text-sm mt-1 leading-relaxed">
                  Find me across GitHub, LinkedIn, email, and social channels.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
