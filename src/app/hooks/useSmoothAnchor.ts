"use client";

import { useEffect } from "react";

export function useSmoothAnchor() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      // Use Lenis if available, otherwise fallback to native smooth scroll
      const lenis = (
        window as typeof window & {
          __lenis?: { scrollTo: (target: Element, opts?: object) => void };
        }
      ).__lenis;
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -80,
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
