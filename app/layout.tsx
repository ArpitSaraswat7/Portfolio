import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Arpit | Fullstack Developer & AI Engineer",
  description: "Portfolio of Arpit — MCA in Generative AI @ SRM, Fullstack Developer building scalable AI systems, web apps, and autonomous agents.",
  keywords: ["Arpit", "Fullstack Developer", "Generative AI", "React", "Next.js", "TypeScript", "Python", "FastAPI", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className="font-sans antialiased bg-[#0a0a0f] text-[#e4e4e7] min-h-screen relative selection:bg-violet-500/30 selection:text-violet-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
