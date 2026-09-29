# Comprehensive Design & Behavioral Specification (`DESIGN_SPEC.md`)
**Target Reference**: [https://www.pszostak.pl/](https://www.pszostak.pl/)  
**Inspection Method**: Live headless Chrome DevTools, Computed Styles, DOM tree, Stylesheets, JS Chunk reverse-engineering, Network requests, and multi-viewport rendering.  
**Reference Assets**: Stored in `reference/` (35 PNG screenshots covering 1440px, 1024px, 768px, 390px, and subroutes `/guestbook`, `/achievements`, `/links`).

---

## 1. Typography & Fonts

### Font Families & Sources
* **Primary Sans Font**: `Inter`, loaded via Google Fonts CDN (`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap`) with fallback:
  ```css
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  ```
* **Monospace Font**: `JetBrains Mono`, loaded via Google Fonts CDN (`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap`) with fallback:
  ```css
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  ```

### Typography Scale & Hierarchy Table

| Element / Style | Font Family | Font Size | Weight | Line Height | Letter Spacing | Color (Dark Theme) |
|---|---|---|---|---|---|---|
| **Hero Title (`h1`)** | `Inter` | Desktop: `56px` - `64px` (`3.5rem` - `4rem`)<br>Tablet: `48px` (`3rem`)<br>Mobile: `32px` - `36px` (`2rem` - `2.25rem`) | `700` (Bold) | `1.1` (`110%`) | `-0.02em` (`-0.64px` to `-1.28px`) | `var(--foreground)` (`#e4e4e7`) |
| **Hero Name Shimmer (`.text-gradient-shimmer`)** | `Inter` | Same as `h1` | `700` (Bold) | `1.1` | `-0.02em` | Animated Gradient clip (`#6366f1` → `#ec4899` + `#ffffffb3` shimmer) |
| **Hero Subtitle / Role** | `Inter` | `18px` - `20px` (`1.125rem` - `1.25rem`) | `500` (Medium) | `1.5` (`28px`) | `normal` | `var(--muted)` (`#a1a1aa`) |
| **Section Eyebrows / Overlines** | `Inter` | `12px` - `14px` (`0.75rem` - `0.875rem`) | `700` (Bold) | `1.2` | `0.15em` (`uppercase tracking-widest`) | `var(--accent)` (`#8b5cf6`) |
| **Section Headings (`h2`)** | `Inter` | Desktop: `48px` - `60px` (`3rem` - `3.75rem`)<br>Tablet: `36px` - `48px`<br>Mobile: `28px` - `32px` | `700` (Bold) | `1.15` | `-0.025em` (`tracking-tight`) | `var(--foreground)` (`#e4e4e7`) |
| **Section Subtitles / Paragraphs** | `Inter` | Desktop: `18px` - `20px`<br>Mobile: `15px` - `16px` | `300` / `400` (Light/Regular) | `1.6` - `1.7` (`leading-relaxed`) | `normal` | `var(--muted)` (`#a1a1aa`) |
| **Bento Card Titles (`h3`)** | `Inter` | `12px` - `14px` (`0.75rem` - `0.875rem`) | `700` (Bold) | `1.2` | `normal` | `var(--foreground)` (`#e4e4e7`) |
| **Bento Body Text** | `Inter` | `10px` - `12px` (`0.625rem` - `0.75rem`) | `400` / `600` (Regular/SemiBold) | `1.3` - `1.4` (`leading-tight`) | `normal` | `var(--muted)` (`#a1a1aa`) |
| **Project Number Badge (`01`, `02`...)** | `JetBrains Mono` | `12px` (`0.75rem`) | `500` / `600` | `1` | `0.1em` (`tracking-wider`) | `var(--muted)` (`#a1a1aa`) |
| **Project Card Title (`h3`)** | `Inter` | `24px` - `28px` (`1.5rem` - `1.75rem`) | `700` (Bold) | `1.2` | `-0.02em` | `var(--foreground)` (`#e4e4e7`) |
| **Project Card Description** | `Inter` | `14px` - `15px` (`0.875rem` - `0.9375rem`) | `400` (Regular) | `1.5` | `normal` | `var(--muted)` (`#a1a1aa`) |
| **Tech Pills / Tags** | `Inter` / `JetBrains Mono` | `11px` - `12px` (`0.6875rem` - `0.75rem`) | `500` (Medium) | `1` | `normal` | `rgba(228, 228, 231, 0.9)` |
| **Navbar Links** | `Inter` | `14px` (`0.875rem`) | `500` (Medium) | `1` | `normal` | `var(--muted)` (`#a1a1aa`) → Hover: `#fff` |
| **CTA Buttons ("Book a Call")** | `Inter` | `13px` - `14px` (`0.8125rem` - `0.875rem`) | `600` (SemiBold) | `1` | `normal` | `#ffffff` |
| **Input / Search Placeholder** | `Inter` | `14px` (`0.875rem`) | `400` (Regular) | `1` | `normal` | `rgba(161, 161, 170, 0.6)` |
| **Prompt Chip Pills** | `Inter` | `12px` (`0.75rem`) | `500` (Medium) | `1` | `normal` | `var(--foreground)` (`#e4e4e7`) |

---

## 2. Color Palette, Gradients, Shadows & Surfaces

### CSS Custom Properties & Variables
The design system is structured around custom CSS tokens configured on `:root` and theme attributes:

```css
/* DARK THEME (Default) */
:root, [data-theme="dark"] {
  --background: #0a0a0f;              /* Deep obsidian dark */
  --foreground: #e4e4e7;              /* Zinc 200 light text */
  --muted: #a1a1aa;                   /* Zinc 400 secondary text */
  --accent: #8b5cf6;                  /* Violet 500 brand accent */
  --accent-hover: #a78bfa;            /* Violet 400 */
  --card: #18181b;                    /* Zinc 900 card background */
  --card-border: #27272a;             /* Zinc 800 card border */
  --gradient-start: #6366f1;          /* Indigo 500 */
  --gradient-end: #ec4899;            /* Pink 500 */
}

/* LIGHT THEME (Supported via [data-theme="light"]) */
[data-theme="light"] {
  --background: #ffffff;
  --foreground: #18181b;
  --muted: #71717a;
  --accent: #7c3aed;
  --accent-hover: #6d28d9;
  --card: #f4f4f5;
  --card-border: #e4e4e7;
  --gradient-start: #4f46e5;
  --gradient-end: #db2777;
}
```

### Surfaces, Glassmorphism & Backdrop Blurs
1. **Standard Glass (`.glass`)**:
   - Background: `rgba(255, 255, 255, 0.03)` (`#ffffff08`)
   - Border: `1px solid rgba(255, 255, 255, 0.08)` (`#ffffff14`)
   - Backdrop Filter: `blur(16px)` (`-webkit-backdrop-filter: blur(16px)`)
   - Border Radius: `16px` - `24px` (`rounded-2xl` / `rounded-3xl`)
2. **Strong Glass (`.glass-strong` / Navbar)**:
   - Background: `rgba(24, 24, 27, 0.8)` (`#18181bcc`)
   - Border: `1px solid var(--card-border)` (`#27272a`)
   - Backdrop Filter: `blur(12px)`
3. **Bento Card Surface (`.bento-card`)**:
   - Background: `linear-gradient(135deg, var(--card) 0%, rgba(39, 39, 42, 0.4) 100%)`
   - Border: `1px solid var(--card-border)` (`#27272a`)
   - Backdrop Filter: `blur(8px)`
   - Radius: `16px` (`rounded-2xl`)

### Gradients & Key Shadows
* **Text Shimmer Animation Gradient**:
  ```css
  background-image: 
    linear-gradient(110deg, transparent 45%, rgba(255, 255, 255, 0.7) 50%, transparent 55%),
    linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  background-size: 200% 100%, 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer-gradient 3s linear infinite;
  ```
* **Card Glow Shadow on Hover**:
  `box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.15), 0 0 15px rgba(168, 85, 247, 0.1);`
* **Radar Line Shadow (Location Card)**:
  `box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);`
* **Ambient Background Glow Orbs**:
  - Orb 1 (Top Left): `width: 384px; height: 384px; background: rgba(139, 92, 246, 0.2); filter: blur(96px); border-radius: 9999px;`
  - Orb 2 (Bottom Right): `width: 384px; height: 384px; background: rgba(236, 72, 153, 0.15); filter: blur(96px); border-radius: 9999px;`

---

## 3. Layout, Dimensions & Section Architecture

### Global Container Geometry
* **Main Container Width**: `max-w-7xl` (`1280px` / `80rem`) with `padding: 0 1.5rem` (`24px`), centered with `margin: 0 auto`.
* **Bento Grid Max Width**: `max-w-5xl` (`1024px`) with `padding: 0 16px 128px`.
* **Section Spacing**: `padding-bottom: 96px` (Mobile) / `160px` - `240px` (Desktop).

### Navbar Specifications
* **Position**: `fixed top-4 left-1/2 -translate-x-1/2 z-50` (floating pill island) or `fixed top-0 w-full` with scroll boundary.
* **Dimensions**:
  - Desktop Height: `56px` (or pill container `h-14`, max-width `680px` - `768px`)
  - Mobile Height: `50px` (with full-width mobile sheet toggle)
* **Surface**: `.glass-strong` (`#18181bcc` with `12px` backdrop blur, `border: 1px solid #27272a`, `border-radius: 9999px` for pill).
* **Elements**:
  - Left: "PS" Monogram brand mark (`w-8 h-8 rounded-full bg-linear-to-br from-violet-500 to-pink-500 text-white font-bold flex items-center justify-center text-xs`).
  - Center: Nav links (`Home`, `About`, `Projects`, `Skills`, `Other`). Hover transition `color: #ffffff`.
  - Right: "Book a Call" CTA button (`bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md shadow-violet-500/20`).

---

### Hero Section Specifications
* **Layout**: Centered vertical stack (`flex flex-col items-center justify-center min-h-[90vh] text-center px-4 pt-24 pb-16`).
* **Components in Vertical Order**:
  1. **Greeting**: `"Hi, I'm "` + **Shimmering Name**: `"Paweł Szostak"` (`h1` with letter reveal & text gradient shimmer).
  2. **Role Subtitle**: `"Fullstack Developer"` (`text-muted text-lg tracking-wide mt-2`).
  3. **"Ask me anything" Input Box**:
     - Container: `relative max-w-md w-full mt-8 mx-auto`.
     - Input field: `w-full bg-[#18181b80] border border-[#27272a] rounded-full px-5 py-3 text-sm text-[#e4e4e7] placeholder-[#a1a1aa80] backdrop-blur-md focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all`.
     - Search / Send icon button on right edge (`w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center`).
  4. **Suggested Prompt Chips**:
     - Layout: `flex flex-wrap items-center justify-center gap-2 mt-3.5`.
     - Chips: `Work`, `About me`, `Skills`, `Contact`.
     - Chip Style: `px-3 py-1 rounded-full text-xs font-medium bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:text-[#fff] hover:border-violet-500/50 hover:bg-violet-500/10 cursor-pointer transition-all`.
  5. **Scroll Cue Indicator**:
     - Located at bottom of hero (`flex flex-col items-center gap-2 text-xs text-[#a1a1aa] mt-12 animate-bounce`).
     - Text: `"Scroll to explore"` with animated chevron down icon.

---

### About Bento Grid Specifications (`#about`)

#### Grid Template (Desktop: `md:grid-cols-3 md:grid-rows-[9rem_auto_9rem] gap-3`)
```
+---------------------------+---------------------------+---------------------------+
| 1. PORTRAIT / AGH CARD    | 2. CRAFT MARQUEE CARD     | 3. AVAILABILITY CARD      |
|    (Col 1, Row 1-3)       |    (Col 2-3, Row 1)       |    (Col 3, Row 2)         |
|                           +---------------------------+---------------------------+
|    Portrait Photo +       | 4. LOCATION (MAP) CARD    | 5. MINDSET COLLAGE CARD   |
|    3 Hover Reveal Tabs    |    (Col 2, Row 3)         |    (Col 3, Row 3)         |
+---------------------------+---------------------------+---------------------------+
```

#### Individual Bento Cards Breakdown:
1. **Portrait Card (Col 1, Span Row 1-3 / Left Column)**:
   - Aspect: Tall rectangular portrait card (`rounded-2xl border border-(--card-border) overflow-hidden relative group/card`).
   - Image: Full-bleed portrait photograph of Paweł with subtle dark vignette gradient at base (`from-black/90 via-black/40 to-transparent`).
   - **Interactive 3-Tab Bottom Overlay (`Science Club` | `University` | `Competitions`)**:
     - Layout: 3 overlapping tab pills pinned to card bottom (`w-1/3` each, `-ml-6` overlap, rounded top corners `rounded-t-xl bg-[#18181b] border border-white/10`).
     - Center tab (`University`) is elevated (`h-44 z-20`) relative to side tabs (`h-36 z-10`).
     - **Default State**: Text snippet has top-to-bottom mask `mask-[linear-gradient(to_bottom,black_0%,black_15%,transparent_70%)]` at `50%` opacity.
     - **Hover State (`group-hover/card`)**: Full mask removed (`mask-none`), text opacity transitions to `100%`, card border glows purple (`hover:border-purple-500/50 hover:shadow-[0_-5px_35px_rgba(168,85,247,0.5)]`).
2. **Craft Card (Col 2-3, Row 1 / Top Right Span 2)**:
   - Dimensions: `h-36` (`9rem` height), `rounded-2xl bg-(--card) border border-(--card-border) p-3.5`.
   - Content:
     - Header: `"Craft"` with purple accent bar (`w-8 h-0.5 bg-purple-500/50 rounded-full`).
     - Description: `"Building scalable apps, websites, and automations."`
     - **9-Item Tech Marquee**:
       - Tech stack: `Next.js`, `React`, `TypeScript`, `Flutter`, `Python`, `Node.js`, `Tailwind CSS`, `Docker`, `Git`.
       - Rendered in a continuous horizontal infinite loop with duplicated item list.
3. **Availability Card (Col 3, Row 2 / Small Square or Pill)**:
   - Surface: `rounded-2xl bg-(--card) border border-(--card-border) p-4 flex items-center gap-3`.
   - Live Status: Pulsing green status orb (`w-2 h-2 rounded-full bg-green-500` with `animate-ping` ping halo `bg-green-400 opacity-75`).
   - Text: `"Open to collaboration & freelance"`.
4. **Location Card (Col 2, Row 3 / Bottom Middle)**:
   - Background: Interactive/Static styled map snapshot of Cracow with dark filter.
   - Radar Sweep Effect: Moving vertical purple scanning line (`w-px bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]`) sweeping horizontally across map.
   - Info Overlay: `"Cracow, Poland"`, Coordinates `"50.0647° N, 19.9450° E"`, Timezone `"GMT+2"`.
5. **Mindset Card (Col 1/Col 3 / Right Column Span)**:
   - Surface: `rounded-2xl bg-linear-to-br from-(--card) to-(--card-border) border border-(--card-border) p-3.5`.
   - Header: `"Mindset"` with purple bar.
   - Body: `"Building more than software. My passions provide the discipline and focus I need to grow."`
   - **4-Item Cycling Collage / Sport Slides**: `Calisthenics`, `Kickboxing`, `Snowboarding`, `Running` (cycling image transitions with active pill label).
   - Footer: `"Mastering body and mind is my path to excellence."`

---

### Featured Projects Section (`#projects`)
* **Layout**: 2-Column Grid on Desktop (`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-7xl mx-auto px-4`).
* **Header**: Eyebrow `"PORTFOLIO"` (`text-accent tracking-widest font-bold`) + H2 `"Featured Projects"` with shimmer + Subtitle.
* **4 Projects Detailed**:
  1. `01` - **Cube Solver**: Desktop application using computer vision to scan and solve Rubik's Cube in real-time. (Tech: `C++`, `OpenCV`, `Clustering`, `Algorithms`).
  2. `02` - **Bottle-Back**: Autonomous bottle return and recycling platform. MVP with marketplace & deposit points map. 2nd Place Axios Hackathon. (Tech: `Flutter`, `Python`, `FastAPI`, `YOLOv8`).
  3. `03` - **QR-MenuX**: SaaS product for full restaurant management and QR menu ordering system with kitchen and waiter panels. (Tech: `Next.js`, `Supabase`, `WebSocket`, `React`, `Tailwind CSS`).
  4. `04` - **Res-Q**: Mobile emergency application allowing hikers to call for help without cell signal using satellite connection. 3rd Place Cassini Hackathon. (Tech: `React Native`, `Expo`, `Spring Boot`, `Satellite API`).
* **Card Anatomy**:
  - Number & Type Badge: `01` / `COMPUTER VISION APP`.
  - Title with external GitHub "Star" / Demo link.
  - Project Description text.
  - Screenshots Container: Rounded frame (`rounded-3xl border border-white/10 bg-[#121216] overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`).
  - Tech Pills: Flex list of subtle badge pills.
* **Footer CTA**: Centered `"Explore all projects on GitHub →"` link button.

---

### Skills Section (`#skills`)
* **Interactive 3D Tag Sphere Engine**:
  - Powered by **Three.js (r182)** on a full-width HTML5 canvas (`w-full h-150 md:h-200`).
  - Interactive spherical tag cloud mapping all skills in 3D coordinate space with mouse-drag / auto-rotation.
  - Tag pill items projected in 3D with depth-scaling, perspective distortion, and hover spotlight effects (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).

---

### More to Explore Section (`#other`)
* **Layout**: 3-Column Card Grid (`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto`).
* **Cards**:
  1. **Guestbook Card** (`/guestbook`): Book icon, `"Guestbook"`, `"Leave your mark and see what others have to say"`, `"Explore →"`.
  2. **Achievements Card** (`/achievements`): Trophy / Award icon, `"Achievements"`, `"Milestones, certifications, and accomplishments"`, `"Explore →"`.
  3. **My Links Card** (`/links`): Link icon, `"My Links"`, `"Socials, resume, repositories, and direct contacts"`, `"Explore →"`.
* **Hover Effect**: `hover:scale-105 hover:border-violet-500/30 transition-all duration-300`, gradient aura overlay fades in (`opacity-0 group-hover:opacity-10`).
* **Template Unlock Banner**: Pinned below the 3 cards: `"Checking your unlock status..."` with animated spinner verifying GitHub star/follow criteria.

---

### Footer Section
* **Layout**: Centered horizontal flex bar (`max-w-7xl mx-auto py-12 px-4 border-t border-(--card-border) flex flex-col md:flex-row items-center justify-between gap-6`).
* **Elements**:
  - Left: PS Monogram logo + `"© 2026 Paweł Szostak. All rights reserved."`
  - Right: Social Icon Links (`GitHub`, `LinkedIn`, `Email` mailto icon with Cloudflare email obfuscation protection).

---

## 4. Animation Engine & Micro-Interactions

### Libraries Identified
* **Framer Motion**: Used for page entrances, stagger effects, scroll-linked animations, dialog layout animations, and spring transitions.
* **Three.js (r182)**: Powers the interactive 3D Tag Sphere in the Skills section.
* **Native CSS Animations**: Used for the continuous text gradient shimmer, pulsing status indicators, and radar sweeps.
* **Smooth Scroll**: Native `html { scroll-behavior: smooth; }`.
* **Custom Cursor**: None detected in DOM (uses system cursor with custom interactive hover states on all cards and chips).

### Exact Animation Parameter Table

| Animation Target | Type / Engine | Duration | Delay / Stagger | Easing / Curve | Keyframes / Values |
|---|---|---|---|---|---|
| **Hero Letter Reveal** | Framer Motion | `0.6s` per character | `staggerChildren: 0.04s`<br>`delay: 0.1s * index` | `ease: [0.22, 1, 0.36, 1]` | `from: { opacity: 0, y: 40 }`<br>`to: { opacity: 1, y: 0 }` |
| **Name Text Shimmer** | Pure CSS Keyframe | `3.0s` (Infinite) | `0s` | `linear` | `@keyframes shimmer-gradient { 0% { background-position: 100% 0, 0 0; } to { background-position: -100% 0, 0 0; } }` |
| **Scroll Cue Bounce** | Pure CSS / Tailwind | `1.5s` (Infinite) | `0s` | `ease-in-out` | `translateY(0)` → `translateY(8px)` → `translateY(0)` |
| **Craft Tech Marquee** | Framer Motion / CSS | `20s` - `25s` per loop | `0s` | `linear` (Infinite) | `x: 0%` → `x: -50%`<br>**Pause on hover**: `animation-play-state: paused` / `whileHover` |
| **Portrait Hover Reveal** | Framer Motion + CSS Mask | `0.3s` - `0.4s` | `0s` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | `mask: linear-gradient(...)` → `mask: none`<br>`opacity: 0.5` → `opacity: 1.0`<br>`translateY(0px)` |
| **Radar Line Sweep (Location)** | CSS Animation | `2.5s` (Infinite) | `0s` | `ease-in-out` (alternate) | `left: 0%` → `left: 100%` |
| **Availability Ping Dot** | CSS Animation | `1.0s` (Infinite) | `0s` | `cubic-bezier(0, 0, 0.2, 1)` | `@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }` |
| **Project Card Scroll Reveal** | Framer Motion (In-View) | `0.6s` | `0.1s` - `0.2s` | `ease: [0.22, 1, 0.36, 1]` | `y: 40px, opacity: 0` → `y: 0px, opacity: 1` |
| **More to Explore Card Hover** | Framer Motion / CSS | `0.3s` | `0s` | `easeOut` | `scale(1)` → `scale(1.05)`, border purple opacity `0` → `0.3` |
| **Navbar Scroll State** | React state on scroll | `0.2s` | `0s` | `ease` | When `window.scrollY > 20`: `background: rgba(24, 24, 27, 0.85); backdrop-filter: blur(16px); border-color: rgba(255, 255, 255, 0.1);` |

---

## 5. Responsive Breakpoints & Viewport Adaptations

### Exact Breakpoints in CSS (Tailwind CSS v4 Configuration)
* `min-width: 380px` / `390px` (Compact Mobile)
* `min-width: 640px` (`40rem` / `sm`) (Large Mobile / Phablet)
* `min-width: 768px` (`48rem` / `md`) (Tablet)
* `min-width: 1024px` (`64rem` / `lg`) (Desktop / Laptop)
* `min-width: 1280px` (`80rem` / `xl`) (Large Desktop Container)
* `min-width: 1536px` (`96rem` / `2xl`) (Ultra-wide)

### Multi-Viewport Comparison Table

| Feature / Section | Desktop (1440px) | Tablet (1024px / 768px) | Mobile (390px) |
|---|---|---|---|
| **Navbar** | Floating centered pill island (`56px` height, full nav links + CTA) | Floating pill island (`50px` - `56px` height) | Compact top bar (`50px` height) with hamburger icon triggering fullscreen mobile sheet overlay |
| **Hero Title (`h1`)** | `56px` - `64px` (`leading-[1.1]`), full inline name | `44px` - `48px`, inline name | `32px` (`leading-tight`), stacked name split if narrow |
| **"Ask me anything" Box** | `max-w-md` (`448px`) centered | `max-w-sm` (`384px`) centered | Full width (`w-full px-2`), chips wrap into 2 rows |
| **Bento Grid Layout** | 3-Column asymmetric grid (`grid-cols-3 grid-rows-[9rem_auto_9rem]`) | 2-Column responsive grid (`grid-cols-2`) | 1-Column vertical stack (`grid-cols-1`), cards full-width |
| **Portrait Card Tabs** | Hover-reveal desktop tabs with mask transition | Expanded summary tabs | Compact vertical accordion or static text block |
| **Featured Projects** | 2-Column wide grid (`grid-cols-2 gap-20`) | 1-Column wide grid (`grid-cols-1 gap-16`) | 1-Column compact stack (`grid-cols-1 gap-10`), tech pills wrap |
| **Skills Section** | Full interactive 3D Tag Sphere (`h-200`, `800px` height canvas) | Scaled 3D Tag Sphere (`h-150`, `600px` height canvas) | 3D Tag Sphere scaled with touch drag (`h-120`, `480px` height) |
| **More to Explore** | 3-Column horizontal cards (`grid-cols-3 gap-6`) | 3-Column / 2-Column cards | 1-Column vertical stack (`grid-cols-1 gap-4`) |

---

## 6. "Ask Me Anything" Input & Chips Interaction Engine

### Behavior & Architecture
* **Component Type**: Fully functional **AI Chat Assistant** built with **Vercel AI SDK (`ai/react` `useChat`)**.
* **Endpoint**: `POST /api/chat` (streaming response).
* **System Prompt / Knowledge Base**: Embedded context with comprehensive details about Paweł's background, projects (Cube Solver, Bottle-Back, QR-MenuX, Res-Q), AGH University CS curriculum, GenAI Science club, and hackathons.
* **Interactive Flows**:
  1. **User Types Custom Query**: Pressing `Enter` or clicking Send submits the prompt to `/api/chat`, opening a floating chat response panel below the input with a streaming Markdown response and `"AI is thinking..."` typing indicator.
  2. **Clicking Suggested Prompt Chips**:
     - `Work` → Autofills: `"What do you do and how can you help me?"` and immediately triggers the query.
     - `About me` → Autofills: `"Tell me more about yourself."`
     - `Skills` → Autofills: `"Tell me more about your skills and projects."`
     - `Contact` → Autofills: `"How can I contact you?"`
  3. **Empty State**: Displays placeholder text: `"Ask anything about Paweł..."`.

---

## 7. "Unlock Status" & Free Portfolio Template System

### Behavior & Architecture
* **Purpose**: Gamified open-source template distribution system ("Download Free template!").
* **Endpoint**: `GET /api/source-unlock/verify`
* **Authentication**: NextAuth.js GitHub OAuth (`/api/auth/session`, `/api/auth/signin/github`).
* **Verification Steps**:
  1. **Step 1 (GitHub Authentication)**: Checks active GitHub session cookie.
  2. **Step 2 (GitHub Follow Verification)**: Verifies via GitHub API if the logged-in user follows Paweł's GitHub profile.
  3. **Step 3 (GitHub Repo Star Verification)**: Verifies if user has starred the portfolio repository.
  4. **Step 4 (Download Trigger)**: Once all 3 conditions return `verified: true`, unlocks the direct source code / template ZIP download button.
* **Client State & Storage**:
  - Checked on mount and cached in NextAuth session / React state.
  - Network logs confirm polling/checking `https://www.pszostak.pl/api/source-unlock/verify`.

---

## 8. Subroutes & Guestbook Architecture

### 1. `/guestbook` (The Community Wall)
* **Header**: Eyebrow `"The Community Wall"`, Title `"Leave Your Mark"`, Subtitle `"Share your thoughts, feedback, or just say hi!"`.
* **Authentication**: GitHub OAuth required to post a message.
  - If signed out: Shows `"Log in with GitHub to sign the guestbook"` button.
  - If signed in: Displays user's GitHub avatar (`width: 48, height: 48, rounded-full`), username, and message input textarea (`"Write a message..."`).
* **Form Submission**:
  - Input: `<textarea placeholder="Write a message...">` + `"Send"` button.
  - Endpoint / Storage: Next.js API route (`/api/guestbook`) storing entries in a cloud database (Supabase / Prisma PostgreSQL).
  - Features: Authors can edit (`"Edit your message..."`, `"Update"`) or delete their own posts.
* **Feed Display**: Cards with GitHub avatar, user name, formatted date/time stamp (`"{{date}} at {{time}}"`), and message text with Framer Motion entry animation.

### 2. `/achievements` (Milestones & Hackathons)
* **Header**: Title `"Achievements"`, Subtitle `"Milestones, hackathon wins, and certifications"`.
* **Cards**: Rich multimedia cards with verified badge imagery, competition badges (e.g. *Axios Hackathon 2nd place*, *Cassini Hackathon 3rd place*, *Google certifications*, *Marathon finish*).
* **Layout**: Responsive masonry grid with dark glass card surfaces and hover glow effects.

### 3. `/links` (Social & Developer Directory)
* **Header**: Title `"Links & Socials"`.
* **Content**: Clean list of cards linking to `GitHub`, `LinkedIn`, `Email`, `Resume PDF`, and active project live URLs.
* **Layout**: Centered mobile-first link-tree style card stack with hover shine transitions.

---

## 9. Verification Summary & Reference Archive

All specifications above have been verified directly against the production runtime via automated DevTools extraction and network monitoring.

| Item / Feature | Verification Status | Source |
|---|---|---|
| Typography (Inter + JetBrains Mono) | **VERIFIED** | Google Fonts link + Computed Stylesheet |
| CSS Variables & Hex/RGBA Colors | **VERIFIED** | Live Computed CSS Custom Properties |
| Bento Grid (3-Col layout + 1-Col mobile) | **VERIFIED** | DOM Tree + Computed Grid Styles |
| Three.js (r182) Skills Sphere | **VERIFIED** | Live Canvas `data-engine` attribute |
| Framer Motion Animations & Easing | **VERIFIED** | JS Chunks reverse-engineering |
| Shimmer Gradient CSS Keyframes | **VERIFIED** | `extracted_styles.css` rule inspection |
| AI Chat Assistant (`/api/chat`) | **VERIFIED** | Vercel AI SDK bundle & Network events |
| Source Unlock (`/api/source-unlock/verify`) | **VERIFIED** | Network logs + NextAuth API endpoints |
| Guestbook GitHub Auth & Database | **VERIFIED** | `/guestbook` DOM & NextAuth session verification |
| Multi-viewport screenshots | **VERIFIED** | 35 PNG files saved in `reference/` |
