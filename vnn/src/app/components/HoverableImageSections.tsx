"use client";

import { useState } from "react";
import Image from "next/image";
import studioImage from "./studio.webp";

export default function HoverableImageSections() {
  const [hoveredSections, setHoveredSections] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setHoveredSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="snap-start snap-always min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={studioImage}
          alt="Blueprint sketch"
          className="w-full h-full object-cover"
          fill
        />
      </div>

      <div className="relative w-full h-screen flex z-0">
        <div
          className="relative w-1/3 h-full overflow-hidden"
          onMouseEnter={() => handleToggle(0)}
        >
          <div
            className={`absolute inset-0 bg-[#f7f6f4] transition-opacity duration-700 z-10 flex items-center justify-center ${
              hoveredSections.has(0) ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-center text-sm uppercase tracking-[0.7em] font-serif">
              Located in Sofia, Bulgaria
            </span>
          </div>
        </div>

        <div
          className="relative w-1/3 h-full overflow-hidden"
          onMouseEnter={() => handleToggle(1)}
        >
          <div
            className={`absolute inset-0 bg-[#f7f6f4] transition-opacity duration-700 z-10 flex items-center justify-center ${
              hoveredSections.has(1) ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-center text-sm uppercase tracking-[0.7em] font-serif">
              Founded in 1999
            </span>
          </div>
        </div>

        <div className="relative w-1/3 h-full overflow-hidden">
          {/* Third section always shows image - no hover effect */}
        </div>
      </div>
    </section>
  );
}

