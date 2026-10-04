"use client";

import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "HTML5",
    color: "#E34F26",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="HTML5">
        <path fill="#E34F26" d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0z" />
        <path fill="#EF652A" d="M12 22.2l7.1-2 1.6-18.2H12v20.2z" />
        <path fill="#EBEBEB" d="M12 5.1H6.7l.4 4.5H12V5.1zm0 6.6H9.4l.3 3.3L12 15.6V11.7z" />
        <path fill="#FFFFFF" d="M12 5.1v4.5h4.9l-.5 5.5-4.4 1.2v2.2l7.1-2 .9-10.4H12z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="CSS3">
        <path fill="#1572B6" d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0z" />
        <path fill="#33A9DC" d="M12 22.2l7.1-2 1.6-18.2H12v20.2z" />
        <path fill="#EBEBEB" d="M12 9.6H8.5l-.3-3.6H12V2.4H4.7l.9 10.8H12V9.6zm0 7.2l-3.6-1-.2-2.6H4.6l.4 5 7 1.9v-3.3z" />
        <path fill="#FFFFFF" d="M12 9.6v3.6h3.4l-.3 3.6-3.1.9v3.3l6.7-1.9.9-9.5H12zm0-7.2v3.6h6.8l.3-3.6H12z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="JavaScript">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path fill="#000000" d="M6.5 17.8c.8.5 1.7.8 2.6.8 1.5 0 2.4-.7 2.4-1.8 0-1.1-.7-1.6-2-2.1-1.7-.6-2.8-1.5-2.8-3.1 0-1.8 1.4-3.1 3.5-3.1 1 0 1.8.3 2.5.7l-.7 1.7c-.6-.4-1.2-.6-1.8-.6-1 0-1.6.6-1.6 1.3 0 .8.6 1.2 1.8 1.7 1.8.7 3 1.6 3 3.3 0 2-1.5 3.3-3.8 3.3-1.2 0-2.3-.4-3.1-.9l.6-1.9zm8.5-7.4h2.1v6.7c0 1.4-.7 2.1-2.1 2.1-.7 0-1.3-.2-1.8-.5l.5-1.7c.3.2.7.4 1.1.4.6 0 .9-.3.9-.9v-6.1z" />
      </svg>
    ),
  },
  {
    name: "React.js",
    color: "#61DAFB",
    svg: (
      <svg viewBox="-11.5 -10.23 23 20.46" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="React.js">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Vite",
    color: "#646CFF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Vite">
        <defs>
          <linearGradient id="vite-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="vite-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEA83" />
            <stop offset="100%" stopColor="#FFDD35" />
          </linearGradient>
        </defs>
        <path fill="url(#vite-grad-a)" d="M23.018 3.746L12.57 23.28a.86.86 0 0 1-1.506.012L.977 3.754a.86.86 0 0 1 .747-1.272h4.596a.86.86 0 0 1 .765.468L12 12.87l4.915-9.92a.86.86 0 0 1 .765-.468h4.591a.86.86 0 0 1 .747 1.265z" />
        <path fill="url(#vite-grad-b)" d="M16.5 1.5L8.2 12.8l4.1.2L9.8 19.5 18 8.8l-4.2-.2L16.5 1.5z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Tailwind CSS">
        <path fill="#06B6D4" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "shadcn/ui",
    color: "var(--foreground)",
    svg: (
      <svg viewBox="0 0 256 256" className="w-10 h-10 sm:w-11 sm:h-11 text-neutral-900 dark:text-white" aria-label="shadcn/ui">
        <line x1="208" y1="128" x2="128" y2="208" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="192" y1="40" x2="40" y2="192" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#5FA04E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Node.js">
        <path fill="#5FA04E" d="M12 1.2a1.8 1.8 0 0 0-.9.25L2.8 6.4a1.8 1.8 0 0 0-.9 1.55v9.9c0 .65.35 1.25.9 1.55l8.3 4.95c.55.35 1.25.35 1.8 0l8.3-4.95c.55-.3.9-.9.9-1.55V7.95c0-.65-.35-1.25-.9-1.55l-8.3-4.95A1.8 1.8 0 0 0 12 1.2z" />
        <path fill="#FFFFFF" d="M12 6.5c-3 0-4.8 1.6-4.8 3.9 0 3.2 4.1 2.8 4.1 4.5 0 .6-.5.9-1.3.9-.9 0-1.8-.4-2.5-.9l-1 1.6c1 .8 2.2 1.2 3.5 1.2 3 0 5-1.6 5-4 0-3.3-4.1-2.9-4.1-4.6 0-.5.4-.8 1.1-.8.8 0 1.6.3 2.2.7l1-1.5c-.9-.7-2-1-3.2-1z" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    color: "var(--foreground)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11 text-neutral-900 dark:text-white" aria-label="Express.js">
        <path fill="currentColor" d="M4.5 7.5L7.2 12l-2.7 4.5h2.4l1.5-2.7 1.5 2.7h2.4L9.6 12l2.7-4.5H9.9L8.4 7.2 6.9 4.5H4.5zm8.1 0v9h2.2v-3.7h2.8c1.9 0 3.4-1.2 3.4-2.6 0-1.5-1.5-2.7-3.4-2.7h-5zm2.2 1.8h2.6c.8 0 1.4.4 1.4 1s-.6 1-1.4 1h-2.6v-2z" />
      </svg>
    ),
  },
  {
    name: "REST APIs",
    color: "#00B4D8",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="REST APIs" fill="none" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M7 8h2m4 0h4M7 12h10" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#00ED64",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="MongoDB">
        <path fill="#00ED64" d="M12.4 23.9c-.3.1-.7 0-.9-.2-2.1-1.6-7.3-6.1-7.3-12.8 0-4.9 3.5-9.1 7.6-10.7.3-.1.7-.1.9 0 4.1 1.6 7.6 5.8 7.6 10.7 0 6.7-5.2 11.2-7.3 12.8-.2.1-.4.2-.6.2z" />
        <path fill="#001E2B" d="M12 1.3v21.5c1.8-1.5 6.1-5.4 6.1-11.9 0-4.2-2.9-7.9-6.1-9.6z" opacity="0.25" />
        <path fill="#FFFFFF" d="M11.5 23.5c-.1-.7-.1-1.4-.1-2.1 0-4.2.3-8.3.9-12.4.1-.7.2-1.3.3-2 0-.2.2-.4.4-.4s.4.2.4.4c.1.7.2 1.3.3 2 .6 4.1.9 8.2.9 12.4 0 .7 0 1.4-.1 2.1h-2.6z" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Supabase">
        <defs>
          <linearGradient id="supabase-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ECF8E" />
            <stop offset="100%" stopColor="#249361" />
          </linearGradient>
        </defs>
        <path fill="url(#supabase-grad)" d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.32 14.242a.396.396 0 0 0 .316.635H12v8.725a.396.396 0 0 0 .716.233L23.68 9.989a.396.396 0 0 0-.318-.635z" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Python">
        <path fill="#3776AB" d="M11.927 0C6.275 0 6.626 2.457 6.626 2.457l.006 2.545h5.39v.764H4.376S0 5.27 0 10.927c0 5.658 3.824 5.452 3.824 5.452h2.282v-3.213s-.123-3.824 3.754-3.824h5.452V6.626s.51-6.626-3.385-6.626zm-2.02 1.34a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02z" />
        <path fill="#FFD438" d="M12.073 24c5.652 0 5.301-2.457 5.301-2.457l-.006-2.545h-5.39v-.764h7.646s4.376.496 4.376-5.161c0-5.658-3.824-5.452-3.824-5.452h-2.282v3.213s.123 3.824-3.754 3.824H8.688v2.719s-.51 6.626 3.385 6.626zm2.02-1.34a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02z" />
      </svg>
    ),
  },
  {
    name: "YOLOv8",
    color: "#10B981",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="YOLOv8" fill="none">
        <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#10B981" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" fill="#10B981" />
        <path d="M7 12h2.5M14.5 12H17M12 7v2.5M12 14.5V17" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5.5 8V5.5H8M16 5.5h2.5V8M18.5 16v2.5H16M8 18.5H5.5V16" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "OpenCV",
    color: "#5C3EE8",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="OpenCV">
        <circle cx="12" cy="6.5" r="4.2" fill="#EE2C2C" />
        <circle cx="12" cy="6.5" r="1.8" fill="#0a0a0f" />
        <circle cx="7" cy="16" r="4.2" fill="#00AA00" />
        <circle cx="7" cy="16" r="1.8" fill="#0a0a0f" />
        <circle cx="17" cy="16" r="4.2" fill="#1E56EE" />
        <circle cx="17" cy="16" r="1.8" fill="#0a0a0f" />
      </svg>
    ),
  },
  {
    name: "PyTorch",
    color: "#EE4C2C",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="PyTorch">
        <path fill="#EE4C2C" d="M13.2 1.1a9.9 9.9 0 1 0 8 9.8l-2-.1a7.9 7.9 0 1 1-7.4-7.7v-2z" />
        <circle cx="17.5" cy="4.2" r="1.5" fill="#EE4C2C" />
      </svg>
    ),
  },
  {
    name: "DeepSORT",
    color: "#A855F7",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="DeepSORT" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#A855F7" strokeWidth="1.8" strokeDasharray="3 2" />
        <rect x="7" y="7" width="10" height="10" rx="2" fill="#A855F7" fillOpacity="0.2" stroke="#C084FC" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2" fill="#C084FC" />
        <path d="M4 20L10 14" stroke="#E879F9" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Streamlit",
    color: "#FF4B4B",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Streamlit">
        <defs>
          <linearGradient id="st-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4B4B" />
            <stop offset="100%" stopColor="#FF7A7A" />
          </linearGradient>
        </defs>
        <path fill="url(#st-grad-a)" d="M12 2L4 16h6l-2 6 12-14h-6l2-6z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11" aria-label="Git">
        <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "var(--foreground)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11 text-neutral-900 dark:text-white" aria-label="GitHub">
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "var(--foreground)",
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11 text-neutral-900 dark:text-white" aria-label="Vercel">
        <path fill="currentColor" d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
];

export function SkillsSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const total = skills.length;
    // Precompute Fibonacci sphere coordinates
    const basePoints = skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      return {
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      };
    });

    const rot = { x: 0.15, y: 0.25 };
    const speed = { x: 0.0014, y: 0.0022 };
    let isDragging = false;
    let lastPos = { x: 0, y: 0 };
    let animId: number;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // IntersectionObserver to avoid rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "120px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const updateFrame = () => {
      if (isVisible) {
        if (!isDragging && !prefersReducedMotion) {
          rot.x += speed.x;
          rot.y += speed.y;
        }

        const isMobile = window.innerWidth < 640;
        const radius = isMobile ? 150 : 220;
        const perspective = 400;

        const cosX = Math.cos(rot.x);
        const sinX = Math.sin(rot.x);
        const cosY = Math.cos(rot.y);
        const sinY = Math.sin(rot.y);

        // ================= Draw 3D Spherical Wireframe on Canvas =================
        if (canvas && ctx) {
          const w = canvas.width;
          const h = canvas.height;
          ctx.clearRect(0, 0, w, h);
          const cx = w / 2;
          const cy = h / 2;

          ctx.lineWidth = 1;
          ctx.strokeStyle = "rgba(168, 85, 247, 0.16)";

          // Draw Latitude Parallel Rings
          const latAngles = [-0.6, -0.2, 0.2, 0.6];
          latAngles.forEach((lat) => {
            ctx.beginPath();
            const ringRadius = radius * Math.cos(Math.asin(lat));
            const ringY = radius * lat;
            const segments = isMobile ? 32 : 48;

            for (let s = 0; s <= segments; s++) {
              const theta = (s / segments) * Math.PI * 2;
              const px = Math.cos(theta) * ringRadius;
              const py = ringY;
              const pz = Math.sin(theta) * ringRadius;

              // Rotate Y
              const x1 = px * cosY - pz * sinY;
              const z1 = pz * cosY + px * sinY;
              // Rotate X
              const y2 = py * cosX - z1 * sinX;
              const z2 = z1 * cosX + py * sinX;

              const scale = perspective / (perspective - z2);
              const screenX = cx + x1 * scale;
              const screenY = cy + y2 * scale;

              if (s === 0) ctx.moveTo(screenX, screenY);
              else ctx.lineTo(screenX, screenY);
            }
            ctx.stroke();
          });

          // Draw Longitude Meridian Rings
          const lonAngles = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4];
          lonAngles.forEach((lon) => {
            ctx.beginPath();
            const segments = isMobile ? 32 : 48;
            for (let s = 0; s <= segments; s++) {
              const theta = (s / segments) * Math.PI * 2;
              const px = Math.cos(theta) * radius * Math.cos(lon);
              const py = Math.sin(theta) * radius;
              const pz = Math.cos(theta) * radius * Math.sin(lon);

              // Rotate Y
              const x1 = px * cosY - pz * sinY;
              const z1 = pz * cosY + px * sinY;
              // Rotate X
              const y2 = py * cosX - z1 * sinX;
              const z2 = z1 * cosX + py * sinX;

              const scale = perspective / (perspective - z2);
              const screenX = cx + x1 * scale;
              const screenY = cy + y2 * scale;

              if (s === 0) ctx.moveTo(screenX, screenY);
              else ctx.lineTo(screenX, screenY);
            }
            ctx.stroke();
          });
        }

        // ================= Update Floating Skill Icons with True Depth =================
        for (let i = 0; i < total; i++) {
          const el = itemsRef.current[i];
          if (!el) continue;

          const pt = basePoints[i];
          // Rotate around Y
          const x1 = pt.x * cosY - pt.z * sinY;
          const z1 = pt.z * cosY + pt.x * sinY;
          // Rotate around X
          const y2 = pt.y * cosX - z1 * sinX;
          const z2 = z1 * cosX + pt.y * sinX;

          const x = x1 * radius;
          const y = y2 * radius;
          const z = z2 * radius;

          // Depth mapping: front = bigger & brighter, back = smaller & dimmer
          const normalizedZ = (z + radius) / (2 * radius); // 0 (back) to 1 (front)
          const scale = 0.65 + normalizedZ * 0.55; // 0.65 to 1.20
          const opacity = 0.25 + normalizedZ * 0.75; // 0.25 to 1.0
          const zIndex = Math.floor(z + radius);

          // Direct DOM transform (zero React state updates)
          el.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          el.style.opacity = `${opacity}`;
          el.style.zIndex = `${zIndex}`;

          // Back icons blur & grayscale on desktop; on mobile use GPU composited opacity & scale
          if (!isMobile) {
            if (z < -30) {
              const blurAmount = ((-z - 30) / (radius - 30)) * 1.5;
              const grayAmount = ((-z - 30) / (radius - 30)) * 80;
              el.style.filter = `grayscale(${grayAmount}%) blur(${blurAmount}px)`;
            } else {
              el.style.filter = `drop-shadow(0 4px 14px ${skills[i].color}40)`;
            }
          }
        }
      }

      animId = requestAnimationFrame(updateFrame);
    };

    animId = requestAnimationFrame(updateFrame);

    // Pointer handlers for touch & mouse drag
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;
      lastPos = { x: cx, y: cy };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;

      const dx = cx - lastPos.x;
      const dy = cy - lastPos.y;

      rot.y += dx * 0.004;
      rot.x -= dy * 0.004;

      speed.x = -dy * 0.0006;
      speed.y = dx * 0.0006;
      lastPos = { x: cx, y: cy };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousedown", handlePointerDown);
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("mouseup", handlePointerUp);

      container.addEventListener("touchstart", handlePointerDown, {
        passive: true,
      });
      window.addEventListener("touchmove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("touchend", handlePointerUp);
    }

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (container) {
        container.removeEventListener("mousedown", handlePointerDown);
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("mouseup", handlePointerUp);

        container.removeEventListener("touchstart", handlePointerDown);
        window.removeEventListener("touchmove", handlePointerMove);
        window.removeEventListener("touchend", handlePointerUp);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="pt-6 pb-28 sm:pb-36 relative overflow-hidden"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        {/* Section Header */}
        <div className="text-center relative z-10">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-violet-400 uppercase font-semibold">
            Tech Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
            My <span className="text-gradient-shimmer">Skills</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] max-w-md mx-auto">
            Interactive 3D tag sphere. Drag to rotate and explore my core technologies.
          </p>
        </div>

        {/* 3D Sphere Interactive Area */}
        <div
          ref={containerRef}
          style={{ touchAction: "pan-y" }}
          className="relative w-full h-[480px] sm:h-[580px] md:h-[650px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none -mt-2 sm:-mt-6"
        >
          {/* Subtle Central Purple Atmosphere Glow */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />

          {/* Wireframe Orbital Canvas Background */}
          <canvas
            ref={canvasRef}
            width={700}
            height={650}
            className="absolute inset-0 m-auto pointer-events-none w-full h-full max-w-[700px] max-h-[650px]"
          />

          {/* Floating Skill Icons (Without heavy box cards) */}
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="absolute pointer-events-auto cursor-pointer transition-filter duration-300"
              style={{
                willChange: "transform, opacity",
              }}
            >
              <div className="relative flex flex-col items-center justify-center group/skill">
                {/* Floating Clean Icon directly in space */}
                <div className="relative z-10 transition-transform duration-300 group-hover/skill:scale-125">
                  {skill.svg}
                </div>

                {/* Clean Floating Technology Label */}
                <span className="mt-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-center whitespace-nowrap text-[var(--muted)] group-hover/skill:text-[var(--foreground)] transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSphere;
