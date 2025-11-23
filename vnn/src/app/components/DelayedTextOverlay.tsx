"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DelayedTextOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 0 });

//       tl.fromTo(
//         ".line-top",    
//         { y: -130, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.3, ease: "sine" }
//       ).fromTo(
//         ".line-bottom",
//         { y: -130, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.3, ease: "sine" },
//         "-=0.6"
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

  return (
    <div
      aria-hidden="true"
      ref={containerRef}
      className="pointer-events-none font-bold fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center mix-blend-difference"
    >
      <span
        className="line-top text-[clamp(2.5rem,8vw,9rem)] font-serif uppercase tracking-[0.6em] text-white drop-shadow-lg text-center leading-tight"
      >
        VALENTINA
      </span>

      <span
        className="line-bottom text-[clamp(2.5rem,8vw,9rem)] font-serif uppercase tracking-[0.6em] text-white drop-shadow-lg text-center leading-tight"
      >
        NIKOLOVA
      </span>
    </div>
  );
}
