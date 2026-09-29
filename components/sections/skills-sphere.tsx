"use client";

import React, { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "TypeScript",
    color: "#3178C6",
    svg: (
      <svg viewBox="0 0 24 24" fill="#3178C6" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    svg: (
      <svg viewBox="0 0 24 24" fill="#ffffff" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 24 24" fill="#3776AB" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 24 24" fill="#339933" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 24 24" fill="#2496ED" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 24 24" fill="#F05032" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    svg: (
      <svg viewBox="0 0 24 24" fill="#47A248" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    color: "#4169E1",
    svg: (
      <svg viewBox="0 0 24 24" fill="#4169E1" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.8h2.3c1.5 0 2.7-1.1 2.7-2.6s-1.2-2.6-2.7-2.6H10v9h3zm0-5.3h-1.5V9h1.5c.7 0 1.2.5 1.2 1.1 0 .6-.5 1.1-1.2 1.1z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    color: "#009688",
    svg: (
      <svg viewBox="0 0 24 24" fill="#009688" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.066 18.067L7.4 12.733l1.867-1.866 1.667 1.666 4.733-4.733 1.867 1.867-6.6 6.4z" />
      </svg>
    ),
  },
  {
    name: "PyTorch",
    color: "#EE4C2C",
    svg: (
      <svg viewBox="0 0 24 24" fill="#EE4C2C" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M12.72 0l-1.44 1.44a10.08 10.08 0 109.84 9.84l-2.04-.02a8.04 8.04 0 11-7.8-7.8l.02-2.04A10.1 10.1 0 0012.72 0zm3.84 3.84a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
      </svg>
    ),
  },
  {
    name: "YOLOv8",
    color: "#10B981",
    svg: (
      <svg viewBox="0 0 24 24" fill="#10B981" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
  },
  {
    name: "LangChain",
    color: "#A855F7",
    svg: (
      <svg viewBox="0 0 24 24" fill="#A855F7" className="w-10 h-10 sm:w-11 sm:h-11">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
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
            const segments = 48;

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
            const segments = 48;
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

          // Back icons blur & grayscale for strong depth perception
          if (z < -30) {
            const blurAmount = ((-z - 30) / (radius - 30)) * 1.5;
            const grayAmount = ((-z - 30) / (radius - 30)) * 80;
            el.style.filter = `grayscale(${grayAmount}%) blur(${blurAmount}px)`;
          } else {
            el.style.filter = `drop-shadow(0 4px 14px ${skills[i].color}40)`;
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
                <span className="mt-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-center whitespace-nowrap text-zinc-400 group-hover/skill:text-white transition-colors duration-200">
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
