"use client";

import { useEffect } from "react";

/**
 * Observes all [data-reveal] elements and adds `.in` when they enter
 * the viewport. The CSS transition is already defined in globals.css.
 *
 * Optional: data-reveal-delay="150"  → delays the .in class by 150ms
 *
 * Usage in any component:
 *   <div data-reveal>fades + slides up</div>
 *   <div data-reveal data-reveal-delay="100">slightly delayed</div>
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          setTimeout(() => el.classList.add("in"), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
