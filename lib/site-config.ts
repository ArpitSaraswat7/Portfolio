export interface GuestbookMessage {
  id: string;
  name: string;
  avatar: string | null;
  date: string;
  relativeTime: string;
  message: string;
  edited?: boolean;
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  image: string;
}

export interface SocialLinkItem {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "instagram" | "globe";
  accent: "purple" | "blue" | "cyan" | "pink" | "emerald";
}

export const siteConfig = {
  name: "Arpit",
  title: "Arpit | Fullstack Developer & AI Engineer",
  role: "Fullstack Developer",
  tagline: "MCA in Generative AI @ SRM | Building Scalable AI Systems & Web Apps",
  bio: "Master of Computer Applications student specializing in Generative AI, Large Language Models, and fullstack MERN systems.",
  location: {
    city: "Chennai",
    country: "India",
    full: "Chennai, India",
    coordinates: "12.8230° N, 80.0450° E",
    timezone: "GMT+5:30",
  },
  links: {
    github: "https://github.com/arpit-dev",
    githubProjects: "https://github.com/arpit-dev?tab=repositories",
    linkedin: "https://linkedin.com/in/arpit-dev",
    email: "contact@arpit.dev",
    emailMailto: "mailto:contact@arpit.dev",
    cal: "https://cal.com/arpit-dev",
  },
  education: {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Generative AI & LLMs",
    university: "SRM Institute of Science and Technology",
    status: "Active Post-Graduate Researcher",
  },
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git",
    "YOLOv8",
    "PyTorch",
    "LangChain",
    "OpenCV",
  ],
  projects: [
    {
      id: "01",
      number: "01",
      type: "AI / Computer Vision App",
      title: "Clean Sight",
      description:
        "Real-time waste detection and cleanliness monitoring platform powered by custom-trained YOLOv8 models and edge computer vision inference pipelines.",
      gradient: "from-orange-500/90 to-yellow-500/90",
      deviceType: "desktop" as const,
      image: "/projects/clean-sight-1.svg",
      githubUrl: "https://github.com/arpit-dev/clean-sight",
      liveUrl: "https://github.com/arpit-dev/clean-sight",
      tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React", "Docker"],
    },
    {
      id: "02",
      number: "02",
      type: "AI Platform & Web App",
      title: "Job Genie",
      description:
        "Intelligent job recommendation and resume parsing engine matching candidate qualifications with real-time vacancies through AI semantic vector embeddings.",
      gradient: "from-green-500/90 to-emerald-500/90",
      deviceType: "mobile" as const,
      image: "/projects/job-genie-1.svg",
      githubUrl: "https://github.com/arpit-dev/job-genie",
      liveUrl: "https://github.com/arpit-dev/job-genie",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
    },
    {
      id: "03",
      number: "03",
      type: "Healthcare AI Portal",
      title: "Skint Help",
      description:
        "Dermatology screening and healthcare assistance portal providing AI skin lesion diagnosis, medical report generation, and specialist appointment bookings.",
      gradient: "from-purple-500/90 to-pink-500/90",
      deviceType: "desktop" as const,
      image: "/projects/skint-help-1.svg",
      githubUrl: "https://github.com/arpit-dev/skint-help",
      liveUrl: "https://github.com/arpit-dev/skint-help",
      tech: ["React", "Express", "Python", "TensorFlow", "Tailwind CSS", "MongoDB"],
    },
    {
      id: "04",
      number: "04",
      type: "Multi-Agent Workflow Engine",
      title: "Agentic AI Studio",
      description:
        "Autonomous multi-agent orchestration workspace enabling complex workflow automation, dynamic tool routing, code execution, and structured reasoning.",
      gradient: "from-blue-500/90 to-cyan-500/90",
      deviceType: "mobile" as const,
      image: "/projects/agentic-studio-1.svg",
      githubUrl: "https://github.com/arpit-dev/agentic-ai-studio",
      liveUrl: "https://github.com/arpit-dev/agentic-ai-studio",
      tech: ["Python", "LangChain", "FastAPI", "Next.js", "Docker", "PostgreSQL"],
    },
  ],
};

export const guestbookMessages: GuestbookMessage[] = [
  {
    id: "1",
    name: "Alex Morgan",
    avatar: null,
    date: "Aug 23",
    relativeTime: "1 mo ago",
    message: "Great portfolio! The design and 3D skill visualization are incredible.",
    edited: false,
  },
  {
    id: "2",
    name: "Sam Rivera",
    avatar: null,
    date: "Sep 02",
    relativeTime: "3 wks ago",
    message: "Really clean work. Loving the attention to detail across the whole site.",
    edited: true,
  },
  {
    id: "3",
    name: "Jordan Lee",
    avatar: null,
    date: "Sep 14",
    relativeTime: "2 wks ago",
    message: "Love the design and smooth page transitions! Super inspiring aesthetic.",
    edited: false,
  },
  {
    id: "4",
    name: "Taylor Chen",
    avatar: null,
    date: "Sep 20",
    relativeTime: "1 wk ago",
    message: "Great projects! The computer vision and AI agent workflows look solid.",
    edited: false,
  },
  {
    id: "5",
    name: "Chris Patel",
    avatar: null,
    date: "Sep 25",
    relativeTime: "4 days ago",
    message: "This looks awesome! Wishing you continued success with the generative AI research.",
    edited: false,
  },
  {
    id: "6",
    name: "Morgan Blake",
    avatar: null,
    date: "Sep 28",
    relativeTime: "1 day ago",
    message: "Impressive milestone showcase and fullstack architecture. Keep it up!",
    edited: false,
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "1",
    number: "Achievement 01",
    title: "Your Achievement",
    issuer: "Your Organization",
    date: "2026",
    category: "Certification",
    description: "Your achievement description goes here. This placeholder can be easily updated with your personal certificates, awards, or milestone details.",
    image: "/achievements/srm-genai.svg",
  },
  {
    id: "2",
    number: "Achievement 02",
    title: "Your Achievement",
    issuer: "Your Organization",
    date: "2025",
    category: "Hackathon Award",
    description: "Your achievement description goes here. This placeholder can be easily updated with your personal certificates, awards, or milestone details.",
    image: "/achievements/clean-sight.svg",
  },
  {
    id: "3",
    number: "Achievement 03",
    title: "Your Achievement",
    issuer: "Your Organization",
    date: "2025",
    category: "Research & Development",
    description: "Your achievement description goes here. This placeholder can be easily updated with your personal certificates, awards, or milestone details.",
    image: "/achievements/job-genie.svg",
  },
];

export const socialLinks: SocialLinkItem[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "@arpit-dev",
    url: siteConfig.links.github,
    icon: "github",
    accent: "purple",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "in/arpit-dev",
    url: siteConfig.links.linkedin,
    icon: "linkedin",
    accent: "blue",
  },
  {
    id: "email",
    name: "Email",
    handle: siteConfig.links.email,
    url: siteConfig.links.emailMailto,
    icon: "email",
    accent: "cyan",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@arpit.dev",
    url: "https://instagram.com",
    icon: "instagram",
    accent: "pink",
  },
  {
    id: "website",
    name: "Website",
    handle: "arpit.dev",
    url: "/",
    icon: "globe",
    accent: "emerald",
  },
];
