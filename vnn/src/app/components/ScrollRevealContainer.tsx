"use client";

import { PropsWithChildren, useRef } from "react";
import { useScrollUpVisibility } from "../hooks/useScrollUpVisibility";

type ScrollRevealContainerProps = {
  className?: string;
  visibleClassName?: string;
  hiddenClassName?: string;
  movementThreshold?: number;
  topOffset?: number;
  hideOffset?: number;
  minVisibleDuration?: number;
};

export default function ScrollRevealContainer({
  children,
  className = "",
  visibleClassName = "translate-y-0",
  hiddenClassName = "-translate-y-full",
  movementThreshold,
  topOffset,
  hideOffset,
  minVisibleDuration,
}: PropsWithChildren<ScrollRevealContainerProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useScrollUpVisibility(containerRef, {
    movementThreshold,
    topOffset,
    hideOffset,
    minVisibleDuration,
  });

  const visibilityClass = isVisible ? visibleClassName : hiddenClassName;

  return (
    <div
      ref={containerRef}
      className={`${className} transition-transform duration-300 ${visibilityClass}`}
    >
      {children}
    </div>
  );
}


