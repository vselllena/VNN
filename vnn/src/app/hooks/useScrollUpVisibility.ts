"use client";

import { RefObject, useEffect, useRef, useState } from "react";

const DEFAULT_MOVEMENT_THRESHOLD = 2;
const DEFAULT_TOP_OFFSET = 32;
const DEFAULT_HIDE_OFFSET = 120;
const DEFAULT_MIN_VISIBLE_DURATION = 600;

type ScrollVisibilityOptions = {
  movementThreshold?: number;
  topOffset?: number;
  hideOffset?: number;
  minVisibleDuration?: number;
};

const getScrollableAncestor = (
  element: HTMLElement | null
): HTMLElement | Window => {
  let current: HTMLElement | null = element?.parentElement ?? null;

  while (current && current !== document.body) {
    const { overflowY } = window.getComputedStyle(current);
    const canScroll =
      (overflowY === "auto" || overflowY === "scroll") &&
      current.scrollHeight > current.clientHeight;

    if (canScroll) {
      return current;
    }

    current = current.parentElement;
  }

  return window;
};

export const useScrollUpVisibility = (
  targetRef: RefObject<HTMLElement>,
  options: ScrollVisibilityOptions = {}
) => {
  const movementThreshold =
    options.movementThreshold ?? DEFAULT_MOVEMENT_THRESHOLD;
  const topOffset = options.topOffset ?? DEFAULT_TOP_OFFSET;
  const hideOffset = options.hideOffset ?? DEFAULT_HIDE_OFFSET;
  const minVisibleDuration =
    options.minVisibleDuration ?? DEFAULT_MIN_VISIBLE_DURATION;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollRef = useRef(0);
  const visibleUntilRef = useRef(0);

  useEffect(() => {
    const target = targetRef.current;
    if (typeof window === "undefined" || !target) {
      return;
    }

    const scrollSource = getScrollableAncestor(target);
    const isWindowSource = scrollSource === window;
    let rafId = 0;

    const getScrollPosition = () =>
      isWindowSource
        ? window.scrollY
        : (scrollSource as HTMLElement).scrollTop;

    const requestShow = () => {
      visibleUntilRef.current = Date.now() + minVisibleDuration;
      setIsVisible(true);
    };

    const requestHide = () => {
      if (Date.now() < visibleUntilRef.current) {
        return;
      }
      setIsVisible(false);
    };

    const updateVisibility = () => {
      const current = getScrollPosition();
      const previous = lastScrollRef.current;

      if (current <= topOffset) {
        requestShow();
        lastScrollRef.current = current;
        return;
      }

      if (Math.abs(current - previous) < movementThreshold) {
        return;
      }

      if (current < previous) {
        requestShow();
      } else if (current > topOffset + hideOffset) {
        requestHide();
      }

      lastScrollRef.current = current;
    };

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    scrollSource.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollSource.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [
    targetRef,
    movementThreshold,
    topOffset,
    hideOffset,
    minVisibleDuration,
  ]);

  return isVisible;
};


