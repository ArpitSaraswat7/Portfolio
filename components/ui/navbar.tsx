"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Moon, Sun } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Other", href: "/#other", id: "other" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      if (pathname === "/") {
        const sections = ["home", "about", "projects", "skills", "other"];
        const scrollPosition = window.scrollY + 240;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (pathname === "/") {
      if (href === "/" || href === "/#home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      } else if (href.startsWith("/#")) {
        e.preventDefault();
        const targetEl = document.getElementById(id);
        if (targetEl) {
          const yOffset = id === "about" ? 0 : -80;
          const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          setActiveSection(id);
        }
      }
    }
    setMobileMenuOpen(false);
  };

  const isDedicatedPage =
    pathname === "/guestbook" ||
    pathname === "/achievements" ||
    pathname === "/links";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 pb-2">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12" aria-label="Main Navigation">
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="absolute left-0 z-10">
            <button
              onClick={toggleTheme}
              className="relative w-14 h-14 rounded-full glass-strong flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xl shadow-black/10"
              aria-label="Toggle theme"
            >
              <div
                className="absolute transition-all duration-300"
                style={{
                  opacity: isDark ? 1 : 0,
                  transform: isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
                }}
              >
                <Moon className="w-5 h-5 text-white" />
              </div>
              <div
                className="absolute transition-all duration-300"
                style={{
                  opacity: !isDark ? 1 : 0,
                  transform: !isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(180deg)",
                }}
              >
                <Sun className="w-5 h-5 text-amber-500" />
              </div>
            </button>
          </div>

          <div
            className="flex items-center gap-1 glass-strong rounded-full shadow-xl shadow-black/10 h-14 z-10"
            style={{ paddingLeft: "32px", paddingRight: "32px" }}
          >
            {navItems.map((item) => {
              const isActive =
                pathname === "/"
                  ? activeSection === item.id
                  : (item.id === "other" && isDedicatedPage) || pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className="relative text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer flex items-center"
                  style={{
                    padding: "10px 24px",
                    color: isActive ? "var(--foreground)" : "var(--muted)",
                  }}
                >
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full transition-all duration-300"
                      style={{
                        background: "var(--accent)",
                        border: "1px solid var(--accent)",
                        opacity: 0.15,
                      }}
                    />
                  )}
                  <span className="relative z-10 hover:text-[var(--foreground)] transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="absolute right-0 z-10">
            <a
              href={siteConfig.links.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong rounded-full shadow-xl shadow-black/10 flex items-center gap-2 text-sm font-semibold transition-transform duration-300 hover:scale-105 h-14"
              style={{
                paddingLeft: "24px",
                paddingRight: "24px",
                color: "var(--foreground)",
              }}
            >
              <Calendar className="w-4 h-4 text-violet-400" />
              <span>Book a Call</span>
            </a>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between relative w-full">
          <button
            onClick={toggleTheme}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-strong flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-xl shadow-black/10 shrink-0"
            aria-label="Toggle theme"
          >
            <div
              className="absolute transition-all duration-300"
              style={{
                opacity: isDark ? 1 : 0,
                transform: isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
              }}
            >
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div
              className="absolute transition-all duration-300"
              style={{
                opacity: !isDark ? 1 : 0,
                transform: !isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(180deg)",
              }}
            >
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass-strong rounded-full shadow-xl shadow-black/10 p-3.5 sm:p-4 cursor-pointer hover:scale-105 active:scale-95 transition-transform shrink-0"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                style={{ background: "var(--foreground)" }}
              />
              <span
                className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
                style={{ background: "var(--foreground)" }}
              />
              <span
                className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{ background: "var(--foreground)" }}
              />
            </div>
          </button>

          <a
            href={siteConfig.links.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-strong rounded-full shadow-xl shadow-black/10 flex items-center justify-center gap-2 text-sm font-semibold transition-transform duration-300 hover:scale-105 shrink-0 px-3.5 py-3 sm:px-4 sm:py-3.5"
            style={{
              color: "var(--foreground)",
            }}
          >
            <Calendar className="w-4 h-4 text-violet-400" />
            <span className="sr-only sm:not-sr-only">Book a Call</span>
          </a>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="glass-strong rounded-2xl shadow-xl shadow-black/10 mt-4 p-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive =
                      pathname === "/"
                        ? activeSection === item.id
                        : (item.id === "other" && isDedicatedPage) || pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, item.id)}
                        className="relative text-sm font-semibold rounded-full transition-colors duration-300 cursor-pointer text-center"
                        style={{
                          padding: "12px 24px",
                          color: isActive ? "var(--foreground)" : "var(--muted)",
                          background: isActive ? "var(--accent)" : "transparent",
                          opacity: isActive ? 1 : 0.85,
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}

                  <a
                    href={siteConfig.links.cal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold rounded-full transition-transform duration-300 mt-2 hover:scale-[1.02]"
                    style={{
                      padding: "12px 24px",
                      color: "var(--foreground)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span>Book a Call</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
