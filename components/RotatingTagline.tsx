"use client";

import { useEffect, useState } from "react";
import { HEADER_TAGLINES } from "@/lib/playful";

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % HEADER_TAGLINES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span key={index} className="animate-slide-up text-xs font-medium text-slate-400 sm:text-sm">
      {HEADER_TAGLINES[index]}
    </span>
  );
}
