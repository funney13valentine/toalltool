"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollBrand() {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [coords, setCoords] = useState<{
    heroText: { left: number; top: number; width: number; height: number };
    headerText: { left: number; top: number; width: number; height: number };
  } | null>(null);

  const textRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsReady(false);
      return;
    }

    const measure = () => {
      const heroTextEl = document.getElementById("hero-text-slot");
      const headerTextEl = document.getElementById("header-text-slot");

      if (heroTextEl && headerTextEl) {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Temporarily show elements to measure their natural dimensions
        heroTextEl.style.opacity = "";
        heroTextEl.style.pointerEvents = "";
        headerTextEl.style.opacity = "";
        headerTextEl.style.pointerEvents = "";

        const rectHeroText = heroTextEl.getBoundingClientRect();
        const rectHeaderText = headerTextEl.getBoundingClientRect();

        // Hide them immediately after measuring
        heroTextEl.style.opacity = "0";
        heroTextEl.style.pointerEvents = "none";
        headerTextEl.style.opacity = "0";
        headerTextEl.style.pointerEvents = "none";

        setCoords({
          heroText: {
            left: rectHeroText.left + scrollX,
            top: rectHeroText.top + scrollY,
            width: rectHeroText.width,
            height: rectHeroText.height,
          },
          headerText: {
            left: rectHeaderText.left,
            top: rectHeaderText.top,
            width: rectHeaderText.width,
            height: rectHeaderText.height,
          },
        });

        setIsReady(true);
      }
    };

    // Delay measurement slightly to ensure fonts and layouts are ready
    const timer = setTimeout(measure, 150);

    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
      
      // Restore elements styling on unmount
      const heroTextEl = document.getElementById("hero-text-slot");
      const headerTextEl = document.getElementById("header-text-slot");
      if (heroTextEl) {
        heroTextEl.style.opacity = "";
        heroTextEl.style.pointerEvents = "";
      }
      if (headerTextEl) {
        headerTextEl.style.opacity = "";
        headerTextEl.style.pointerEvents = "";
      }
    };
  }, [isHome]);

  useEffect(() => {
    if (!isReady || !coords || !isHome) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollLimit = 350; // Distance over which transition happens
      const p = Math.min(Math.max(scrollY / scrollLimit, 0), 1);
      
      // Easing function: ease-out cubic
      const ease = 1 - Math.pow(1 - p, 2.5);

      if (textRef.current) {
        const textCoords = coords.heroText;
        const targetCoords = coords.headerText;

        // Viewport position of hero text
        const currentHeroX = textCoords.left - window.scrollX;
        const currentHeroY = textCoords.top - scrollY;

        // Interpolated viewport position
        const currentX = currentHeroX + (targetCoords.left - currentHeroX) * ease;
        const currentY = currentHeroY + (targetCoords.top - currentHeroY) * ease;

        const scale = 1 + ((targetCoords.width / textCoords.width) - 1) * ease;

        textRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
      }
    };

    // Run once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isReady, coords, isHome]);

  if (!isHome || !isReady || !coords) return null;

  return (
    <>
      {/* Floating Text */}
      <div
        ref={textRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] origin-top-left font-display flex items-center justify-center"
        style={{
          width: coords.heroText.width,
          height: coords.heroText.height,
        }}
      >
        <span className="whitespace-nowrap font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] select-none text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px] leading-none">
          ToAll<span className="text-[#dc2626] filter drop-shadow-[0_0_8px_#f87171]">Tool</span>
        </span>
      </div>
    </>
  );
}
