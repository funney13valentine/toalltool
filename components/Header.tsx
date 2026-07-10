"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollBrand from "@/components/ScrollBrand";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!isHome) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Hide nav completely during scroll zoom transition, and fade header bg in
  const showHeaderElements = !isHome || scrollY >= 300;
  const navOpacity = showHeaderElements ? 1 : 0;
  const headerBgOpacity = isHome ? Math.min(scrollY / 200, 0.8) : 0.8;
  const headerBorderOpacity = isHome ? Math.min(scrollY / 250, 0.6) : 0.6;

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(9, 7, 15, ${headerBgOpacity})`,
        borderColor: `rgba(45, 34, 77, ${headerBorderOpacity})`,
        borderBottomWidth: "1px",
        backdropFilter: isHome && scrollY < 50 ? "none" : "blur(12px)",
        boxShadow: isHome && scrollY < 150 ? "none" : "0 10px 30px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-5 px-5 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
          <div
            id="header-logo-slot"
            className="relative h-10 w-10 transition-transform group-hover:rotate-6 group-hover:scale-110"
            aria-hidden="true"
          >
            <Image
              src="/logo.png"
              alt="ToAllTool Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            id="header-text-slot"
            className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl"
          >
            ToAll<span className="text-gothic-purple">Tool</span>
          </span>
        </Link>
        <nav 
          className="flex items-center gap-2 text-sm font-bold sm:gap-4 sm:text-base"
          style={{ 
            opacity: navOpacity,
            visibility: navOpacity === 0 ? "hidden" : "visible",
            transition: "opacity 0.2s ease, visibility 0.2s"
          }}
        >
          <Link
            href="/"
            className="group relative rounded-full px-3 py-2 text-slate-300 transition hover:text-gothic-purple hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] sm:px-4"
          >
            Home
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gothic-purple transition-all group-hover:w-3/4 shadow-[0_0_8px_#8b5cf6]" />
          </Link>
          <a
            href="#about"
            className="group relative rounded-full px-3 py-2 text-slate-300 transition hover:text-gothic-purple hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] sm:px-4"
          >
            About
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gothic-purple transition-all group-hover:w-3/4 shadow-[0_0_8px_#8b5cf6]" />
          </a>
        </nav>
      </div>
      <ScrollBrand />
    </header>
  );
}
