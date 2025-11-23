"use client";

import { useState, useEffect } from "react";

export default function DelayedTextOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none font-bold fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center mix-blend-difference"
    >
      <span
        className={`text-[clamp(2.5rem,8vw,9rem)] font-serif uppercase tracking-[0.6em] text-white drop-shadow-lg text-center leading-tight transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        VALENTINA NIKOLOVA
      </span>
    </div>
  );
}

