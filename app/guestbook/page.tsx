"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { guestbookMessages, GuestbookMessage } from "@/lib/site-config";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const avatarColorPalette = [
  "from-purple-600/30 to-violet-600/30 text-purple-200 border-purple-500/30",
  "from-pink-600/30 to-rose-600/30 text-pink-200 border-pink-500/30",
  "from-blue-600/30 to-indigo-600/30 text-blue-200 border-blue-500/30",
  "from-teal-600/30 to-emerald-600/30 text-teal-200 border-teal-500/30",
  "from-amber-600/30 to-orange-600/30 text-amber-200 border-amber-500/30",
  "from-cyan-600/30 to-sky-600/30 text-cyan-200 border-cyan-500/30",
];

export default function GuestbookPage() {
  const [messages] = useState<GuestbookMessage[]>(guestbookMessages);

  const handleAuthPlaceholder = (_provider: string) => {};

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0a0a0f] text-[#e4e4e7] bg-dot-pattern">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px]" />
      </div>

      <main className="w-full max-w-3xl mx-auto pt-32 pb-24 px-4 sm:px-6">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to home</span>
          </Link>
        </div>

        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-purple-400 uppercase font-semibold">
            THE COMMUNITY WALL
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Leave Your <span className="text-gradient-shimmer">Mark</span>
          </h1>
          <p className="mt-3.5 text-sm sm:text-base text-zinc-400 max-w-md mx-auto leading-relaxed">
            Share your thoughts, feedback, or just say hi!
          </p>
        </div>

        <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.08)] mb-12 overflow-hidden text-center">
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />

          <p className="relative z-10 text-sm sm:text-base font-medium text-zinc-200 mb-6">
            Sign in to pin your message to this board forever.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => handleAuthPlaceholder("GitHub")}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Sign in with GitHub</span>
            </button>

            <button
              onClick={() => handleAuthPlaceholder("Google")}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/40 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] cursor-pointer"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {messages.map((item, idx) => {
            const colorClass = avatarColorPalette[idx % avatarColorPalette.length];
            return (
              <div
                key={item.id}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-lg hover:border-purple-500/30 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br border flex items-center justify-center font-bold text-xs shrink-0 shadow-inner ${colorClass}`}
                  >
                    {getInitials(item.name)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {item.name}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {item.date} • {item.relativeTime}
                      </span>
                      {item.edited && (
                        <span className="text-[11px] text-purple-400 font-medium">
                          • edited
                        </span>
                      )}
                    </div>

                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
