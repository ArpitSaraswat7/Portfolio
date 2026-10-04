# 🚀 Arpit Saraswat — Modern 3D Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)

A high-performance, visually immersive 3D personal portfolio built with **Next.js 16 (App Router)**, **React 19**, **Three.js**, **Framer Motion**, and **Tailwind CSS v4**. Featuring interactive WebGL glass shard shaders, a 3D interactive skills sphere, bento grid showcases, an interactive guestbook, achievements timeline, and social hubs.

---

## ✨ Features & Highlights

- 💎 **3D Aero Shards Background**: Custom WebGL 3D glass shard shaders and particle interactions built with Three.js.
- 🌐 **Interactive 3D Skills Sphere**: Dynamic interactive 3D tag cloud showcasing full-stack tech stacks and tools.
- 🍱 **Bento Grid About Section**: Modular glassmorphic card layout displaying personal story, experience, metrics, and core values.
- 💼 **Featured Projects Showcase**: Rich visual project cards with live demos, tech stack tags, and repository links.
- 📖 **Interactive Guestbook (`/guestbook`)**: Real-time signature wall allowing visitors to leave messages and support.
- 🏆 **Achievements & Milestones (`/achievements`)**: Timeline detailing certifications, hackathons, and key milestones.
- 🔗 **Developer Links Hub (`/links`)**: Link-in-bio hub consolidating developer profiles, social channels, and contact touchpoints.
- ⚡ **Ultra-Responsive & Fast**: Fully optimized Next.js App Router setup with dynamic imports, SSR/SSG capabilities, and smooth micro-animations.

---

## 🛠️ Tech Stack

### Frontend & Core Framework
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), Custom Glassmorphism CSS

### 3D, Graphics & Animations
- **3D Graphics**: [Three.js](https://threejs.org/), VGPU WebGL framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
.
├── app/
│   ├── achievements/    # Achievements timeline page
│   ├── api/             # API routes (Guestbook, etc.)
│   ├── guestbook/       # Interactive public guestbook page
│   ├── links/           # Developer social link-tree page
│   ├── globals.css      # Custom styling & Tailwind configuration
│   ├── layout.tsx       # Root layout with global Aero background
│   └── page.tsx         # Main portfolio home page
├── components/
│   ├── sections/        # Main home sections (Hero, About Bento, Projects, Skills Sphere)
│   └── ui/              # Reusable UI components (Navbar, Footer, Aero Shards, Wavy BG)
├── lib/                 # Core utilities & database helper APIs
└── public/              # Static assets (images, icons, models)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArpitSaraswat7/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view your portfolio live!

---

## 📜 Available Scripts

- `npm run dev` — Starts the local Next.js development server with hot reloading.
- `npm run build` — Builds the optimized production build of the application.
- `npm run start` — Starts the production server.
- `npm run lint` — Runs ESLint to check for code quality and syntax issues.

---

## 🤝 Contact & Connect

- **Author**: Arpit Saraswat
- **GitHub**: [@ArpitSaraswat7](https://github.com/ArpitSaraswat7)
- **Repository**: [ArpitSaraswat7/Portfolio](https://github.com/ArpitSaraswat7/Portfolio)

---

⭐ **If you like this project, please consider giving it a star on GitHub!**
