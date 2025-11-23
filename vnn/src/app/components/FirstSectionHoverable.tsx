"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import machineImage from "../machine.jpg";

export default function FirstSectionHoverable() {
  const [hoveredSections, setHoveredSections] = useState<Set<number>>(
    new Set()
  );
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoadComplete(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

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
    <section className="snap-start snap-always min-h-screen flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={machineImage}
          alt="Tailoring machine"
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>

      <div className="relative w-full h-screen flex z-0">
        <div
          className="relative w-1/3 h-full overflow-hidden cursor-pointer"
          onMouseEnter={() => handleToggle(0)}
        >
          <div
            className={`absolute inset-0 bg-[#f7f6f4] transition-opacity duration-700 z-10 flex items-center justify-center ${
              !initialLoadComplete || hoveredSections.has(0) ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-center text-sm uppercase tracking-[0.7em] font-serif">
              Located in Sofia, Bulgaria
            </span>
          </div>
        </div>

        <div className="relative w-1/3 h-full overflow-hidden"></div>

        <div
          className="relative w-1/3 h-full overflow-hidden cursor-pointer"
          onMouseEnter={() => handleToggle(2)}
        >
          <div
            className={`absolute inset-0 bg-[#f7f6f4] transition-opacity duration-700 z-10 flex items-center justify-center ${
              !initialLoadComplete || hoveredSections.has(2) ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-center text-sm uppercase tracking-[0.7em] font-serif">
              Founded in 1999
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
