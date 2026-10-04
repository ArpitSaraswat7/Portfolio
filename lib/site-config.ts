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

export interface ProjectItem {
  id: string;
  number: string;
  type: string;
  title: string;
  description: string;
  gradient: string;
  deviceType: "desktop" | "mobile";
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tech: string[];
}

export const siteConfig = {
  name: "Arpit Saraswat",
  preferredName: "Arpit",
  monogram: "AS",
  title: "Arpit Saraswat | Full Stack Developer & AI/ML Enthusiast",
  role: "Full Stack Developer & AI/ML Enthusiast",
  tagline: "Building full-stack products with AI, GenAI and modern web technologies",
  bio: "BCA graduate currently pursuing MCA with a specialization in Generative AI. Interested in MERN Stack Development, AI/ML, GenAI, IoT and robotics, with hands-on experience building web and AI-powered projects.",
  location: {
    city: "Mathura",
    country: "India",
    full: "Mathura, India",
    coordinates: "27.4924° N, 77.6737° E",
    timezone: "GMT+5:30",
  },
  links: {
    github: "https://github.com/ArpitSaraswat7",
    githubProjects: "https://github.com/ArpitSaraswat7?tab=repositories",
    linkedin: "https://www.linkedin.com/in/arpit-saraswat-a12730288",
    instagram: "https://www.instagram.com/arpit_saraswat7",
    email: "arpitsaraswat80@gmail.com",
    emailMailto: "mailto:arpitsaraswat80@gmail.com",
    resume: "/Resume.pdf",
  },
  education: {
    current: {
      degree: "MCA",
      specialization: "Generative AI",
      university: "SRM University, Delhi NCR",
      status: "Active Student",
      focus: ["MERN Stack Development", "AI/ML", "Generative AI", "IoT", "Robotics"],
    },
    previous: {
      degree: "BCA",
      university: "GLA University, Mathura",
      status: "Completed",
      completionDate: "May 18, 2026",
    },
  },
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "Supabase",
    "FastAPI",
    "Python",
    "YOLOv8",
    "OpenCV",
    "PyTorch",
    "DeepSORT",
    "Streamlit",
    "Framer Motion",
    "Git",
    "GitHub",
    "Vercel",
  ],
  projects: [
    {
      id: "01",
      number: "01",
      type: "AI / Computer Vision / Hackathon Project",
      title: "OrbitalVision",
      description:
        "Computer vision project for space-station environment analysis using object detection and multi-object tracking.",
      gradient: "from-blue-600/90 to-indigo-700/90",
      deviceType: "desktop" as const,
      image: "/projects/clean-sight-1.svg",
      githubUrl: "https://github.com/ArpitSaraswat7/orbital.vision",
      liveUrl: "",
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Ultralytics", "DeepSORT", "Streamlit"],
    },
    {
      id: "02",
      number: "02",
      type: "Full Stack Web Application / Food Rescue Platform",
      title: "Skint Help",
      description:
        "A platform focused on helping reduce food waste by connecting surplus food with people or organizations that can use it.",
      gradient: "from-purple-500/90 to-pink-500/90",
      deviceType: "desktop" as const,
      image: "/Skint Help.png",
      githubUrl: "https://github.com/ArpitSaraswat7/Skint-Help-Updated",
      liveUrl: "https://skint-help.vercel.app/",
      tech: ["React", "Vite", "Supabase", "JavaScript", "Tailwind CSS"],
    },
    {
      id: "03",
      number: "03",
      type: "AI / Career Platform / Full Stack Application",
      title: "Job Genie",
      description:
        "AI-powered career assistant designed to help users with career-related guidance and job preparation.",
      gradient: "from-emerald-500/90 to-teal-600/90",
      deviceType: "desktop" as const,
      image: "/Job genie.png",
      githubUrl: "https://github.com/ArpitSaraswat7/Job-Genie",
      liveUrl: "https://job-genie-dklt0z564-arpit-saraswats-projects-b9a70590.vercel.app/",
      tech: ["React", "Node.js", "Generative AI", "Express", "Tailwind CSS"],
    },
    {
      id: "04",
      number: "04",
      type: "Full Stack AI / Object Detection System",
      title: "CleanSight",
      description:
        "Full-stack AI image detection & environmental analysis platform built with React 19, FastAPI, YOLOv8, OpenCV, Supabase, and Leaflet maps.",
      gradient: "from-teal-600/90 to-cyan-700/90",
      deviceType: "desktop" as const,
      image: "/Clean sight.png",
      githubUrl: "https://github.com/ArpitSaraswat7/CleanSight",
      liveUrl: "",
      tech: [
        "React 19",
        "FastAPI",
        "YOLOv8",
        "OpenCV",
        "Supabase",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
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
];

export const achievementsData: AchievementItem[] = [
  {
    id: "1",
    number: "Achievement 01",
    title: "Top 10",
    issuer: "Microsoft / Hack with India",
    date: "2025",
    category: "Hackathon",
    description: "Achieved a Top 10 position at Microsoft Hack with India in 2025.",
    image: "/Microsoft.jpg",
  },
  {
    id: "2",
    number: "Achievement 02",
    title: "Top 5",
    issuer: "Chandigarh University",
    date: "2025",
    category: "Hackathon",
    description: "Achieved a Top 5 position at a Chandigarh University hackathon in 2025.",
    image: "/Chandigarh.jpg",
  },
  {
    id: "3",
    number: "Achievement 03",
    title: "Finalist",
    issuer: "Manipal University",
    date: "2024",
    category: "Hackathon",
    description: "Reached finalist status at a Manipal University hackathon in 2024.",
    image: "/Manipal.png",
  },
];

export const socialLinks: SocialLinkItem[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "@ArpitSaraswat7",
    url: siteConfig.links.github,
    icon: "github",
    accent: "purple",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "in/arpit-saraswat-a12730288",
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
    handle: "@arpit_saraswat7",
    url: siteConfig.links.instagram,
    icon: "instagram",
    accent: "pink",
  },
];
