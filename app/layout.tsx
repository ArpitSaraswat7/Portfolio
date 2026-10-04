import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Arpit Saraswat | Full Stack Developer & AI/ML Enthusiast",
  description: "Portfolio of Arpit Saraswat — Full Stack Developer & AI/ML Enthusiast. Building full-stack products with AI, GenAI and modern web technologies.",
  keywords: ["Arpit Saraswat", "Full Stack Developer", "AI/ML", "Generative AI", "React", "Python", "MERN Stack", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = null;
                try { saved = localStorage.getItem('theme'); } catch (e) {}
                var prefDark = false;
                try { prefDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) {}
                var theme = saved ? saved : (prefDark ? 'dark' : 'light');
                try {
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen relative selection:bg-violet-500/30 selection:text-violet-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
