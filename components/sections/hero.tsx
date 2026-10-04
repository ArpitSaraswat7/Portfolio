"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Send, Bot, Sparkles, FileText, Download, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { CanvasText } from "@/components/ui/canvas-text";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
}

const promptChips = [
  { label: "Resume", prompt: "Can I view your resume or CV?" },
  { label: "Work", prompt: "Tell me about your work and projects" },
  { label: "About me", prompt: "Who are you and what is your background?" },
  { label: "Skills", prompt: "What technologies and skills do you specialize in?" },
  { label: "Contact", prompt: "How can I contact or hire you?" },
];

function getBotResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("resume") || /\bcv\b/i.test(q)) {
    return "You can view my complete resume by clicking 'View Resume' right above this chat, or download the PDF directly! It covers my education in Generative AI at SRM University, full-stack projects, and technical skills.";
  }
  if (
    q.includes("work") ||
    q.includes("project") ||
    q.includes("build") ||
    q.includes("orbital") ||
    q.includes("job genie") ||
    q.includes("skint help") ||
    q.includes("cleansight") ||
    q.includes("clean sight")
  ) {
    return "I build full-stack products and AI solutions. Some of my featured projects include OrbitalVision (computer vision for space-station environment analysis using YOLOv8 & DeepSORT), Skint Help (food rescue web platform to reduce food waste), Job Genie (AI-powered career assistant), and CleanSight (computer vision & object detection solution). Check out the Featured Projects section below!";
  }
  if (
    q.includes("about") ||
    q.includes("who") ||
    q.includes("education") ||
    q.includes("university") ||
    q.includes("srm") ||
    q.includes("gla") ||
    q.includes("degree")
  ) {
    return "I'm Arpit Saraswat, a BCA graduate currently pursuing MCA with a specialization in Generative AI at SRM University, Delhi NCR. I'm interested in MERN Stack Development, AI/ML, GenAI, IoT and robotics, with hands-on experience building web and AI-powered projects.";
  }
  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("python") ||
    q.includes("react") ||
    q.includes("node") ||
    q.includes("yolo")
  ) {
    return "My core technologies include HTML5, CSS3, JavaScript, React.js, Vite, Tailwind CSS, shadcn/ui, Node.js, Express.js, REST APIs, MongoDB, Supabase, Python, YOLOv8, OpenCV, PyTorch, DeepSORT, Streamlit, Git, GitHub, and Vercel.";
  }
  if (
    q.includes("contact") ||
    q.includes("hire") ||
    q.includes("call") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("linkedin") ||
    q.includes("instagram") ||
    q.includes("github")
  ) {
    return `You can reach me directly via email at ${siteConfig.links.email}, connect with me on LinkedIn (${siteConfig.links.linkedin}), GitHub (${siteConfig.links.github}), or Instagram (${siteConfig.links.instagram})!`;
  }
  return `Thanks for asking! I'm Arpit Saraswat, Full Stack Developer & AI/ML Enthusiast. Feel free to explore my featured projects, interactive 3D skills sphere, and achievements below, or drop me a line at ${siteConfig.links.email}.`;
}

export function Hero({
  name = "Arpit",
}: {
  name?: string;
  role?: string;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 0 || isThinking) {
      scrollToBottom();
    }
  }, [messages, isThinking]);

  const handleSend = React.useCallback((textToSend?: string) => {
    const query = (textToSend !== undefined ? textToSend : input).trim();
    if (!query || isThinking) return;

    setHasStarted(true);
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsThinking(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    // Visible deterministic delay (950ms) matching reference interaction model
    setTimeout(() => {
      const responseText = getBotResponse(query);
      const botMsg: Message = {
        id: `assistant-${Date.now()}`,
        sender: "assistant",
        text: responseText,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsThinking(false);
    }, 950);
  }, [input, isThinking]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 80)}px`;
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center px-4 pt-20 sm:pt-24 pb-8 sm:pb-12"
      style={{ scrollMarginTop: "100px" }}
    >
      {/* Background Central Atmospheric Purple Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] bg-gradient-to-b from-violet-600/20 via-purple-600/10 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* ================= 1. Avatar ================= */}
        <div className="text-center mb-1 sm:mb-2">
          <div className="flex justify-center mb-1">
            <div className="relative flex items-center justify-center">
              {/* Soft purple aura behind avatar */}
              <div
                className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-violet-600/20 blur-[28px] -z-10"
                style={{ transform: "scale(0.85)" }}
              />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-violet-500/50 bg-violet-950/40 backdrop-blur-md flex items-center justify-center shadow-lg shadow-violet-500/20 overflow-hidden relative">
                <Image
                  src="/Arpit.jpeg"
                  alt="Arpit Saraswat"
                  fill
                  sizes="(max-width: 640px) 80px, 100px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ================= 2. Hero Title (Exact Reference Scale) ================= */}
          <h1 className="text-3xl sm:text-4xl md:text-[40px] font-bold mb-1 tracking-tight text-[var(--foreground)] leading-tight">
            Hi, I&apos;m{" "}
            <CanvasText
              text={name || "Arpit"}
              backgroundClassName="bg-transparent"
              colors={[
                "#A855F7",
                "#A855F7",
                "#C084FC",
                "#D946EF",
                "#A855F7",
                "#7C3AED",
                "#C084FC",
                "#A855F7",
              ]}
              lineGap={4}
              lineWidth={1.8}
              curveIntensity={28}
              animationDuration={8}
              className="font-black tracking-tight align-baseline"
            />
          </h1>

          {/* ================= Recruiter Resume Action CTAs ================= */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-2.5 mb-1.5 flex-wrap">
            <a
              href={siteConfig.links.resume || "/Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/25 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] border border-violet-400/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="View Arpit Saraswat's Resume in a new tab"
            >
              <FileText className="w-4 h-4 text-violet-200" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-violet-200/80" />
            </a>

            <a
              href={siteConfig.links.resume || "/Resume.pdf"}
              download="Arpit-Saraswat-Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[var(--glass-bg)] hover:bg-[var(--card)] text-[var(--foreground)] border border-[var(--card-border)] hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Download Arpit Saraswat's Resume as PDF"
            >
              <Download className="w-3.5 h-3.5 text-violet-400" />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* ================= 3. Large Glass Chat Panel ================= */}
        <div className="w-full bg-[var(--glass-bg)] backdrop-blur-xl rounded-3xl border border-[var(--card-border)] shadow-2xl overflow-hidden transition-all duration-300 mt-2">
          {/* Conversation Area */}
          <div
            className={`flex flex-col gap-2 overflow-y-auto scrollbar-hide p-3.5 sm:p-4 transition-all duration-300 ${
              hasStarted ? "h-72 sm:h-80" : "h-60 sm:h-64"
            }`}
          >
            {!hasStarted && messages.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xs text-center text-[var(--muted)] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400/70" />
                  Ask me anything about {name}...
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 animate-in fade-in duration-200 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-violet-600/25 border border-violet-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-4 h-4 text-violet-300" />
                      </div>
                    )}
                    <div
                      className={`text-xs sm:text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25 rounded-2xl rounded-tr-xs px-4 py-2.5 max-w-[85%] sm:max-w-[75%]"
                          : "bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] backdrop-blur-md rounded-2xl rounded-tl-xs p-3.5 sm:p-4 max-w-[90%] sm:max-w-[85%] shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* AI Thinking Indicator with 3 animated dots */}
                {isThinking && (
                  <div className="flex items-center gap-2.5 justify-start animate-in fade-in duration-150">
                    <div className="w-7 h-7 rounded-full bg-violet-600/25 border border-violet-500/40 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-violet-300" />
                    </div>
                    <div className="bg-[var(--card)] border border-[var(--card-border)] text-[var(--foreground)] rounded-2xl rounded-tl-xs px-4 py-2.5 flex items-center gap-2 text-xs backdrop-blur-md shadow-sm">
                      <span className="text-[var(--muted)]">AI is thinking</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Thin Divider */}
          <div className="h-px w-full bg-[var(--card-border)]" />

          {/* Bottom Interactive Form & Quick Chips */}
          <div className="p-3 sm:p-4">
            <div className="flex flex-col">
              {/* Quick Prompt Chips (Fades out when conversation begins) */}
              {!hasStarted && (
                <div className="flex flex-wrap gap-1.5 justify-center mb-3 transition-opacity duration-300">
                  {promptChips.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => handleSend(chip.prompt)}
                      disabled={isThinking}
                      className="text-xs rounded-full border border-[var(--card-border)] bg-[var(--card)] hover:bg-violet-600/20 hover:border-violet-500/50 text-[var(--muted)] hover:text-[var(--foreground)] px-3 py-1 transition-all duration-200 disabled:opacity-50 active:scale-95 cursor-pointer"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Form Input Capsule */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <div className="flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 transition-all focus-within:border-violet-500/60 focus-within:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <textarea
                    ref={textareaRef}
                    rows={1}
                    value={input}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    placeholder={`Ask anything about ${name}...`}
                    className="flex-1 bg-transparent text-xs sm:text-sm outline-none resize-none overflow-hidden py-2 leading-tight text-[var(--foreground)] placeholder:text-[var(--muted)] caret-violet-400"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isThinking}
                    className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-violet-600 text-white transition-all duration-200 disabled:opacity-0 disabled:scale-90 hover:bg-violet-500 hover:scale-105 active:scale-95 cursor-pointer shadow-md shadow-violet-600/30"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ================= 4. Scroll To Explore Cue ================= */}
        <div className="flex justify-center mt-5 sm:mt-6">
          <button
            type="button"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer group"
            aria-label="Scroll to explore"
          >
            <span className="text-xs tracking-wider">Scroll to explore</span>
            <svg
              className="w-4 h-4 animate-bounce group-hover:text-violet-400 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
