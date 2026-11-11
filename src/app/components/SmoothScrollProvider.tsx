"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { playTick } from "../lib/sound";

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export type WithLenis = Window & { __lenis?: Lenis };

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced ? null : new Lenis({ lerp: 0.1, wheelMultiplier: 0.9, smoothWheel: true });
    (window as WithLenis).__lenis = lenis ?? undefined;

    let raf = 0;
    if (lenis) {
      const tick = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    // In-page anchors scroll smoothly.
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
      const hash = anchor?.getAttribute("href");
      if (!hash) return;
      const target = hash === "#top" ? document.body : document.querySelector<HTMLElement>(hash);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(hash === "#top" ? 0 : target, { offset: -80, duration: 1.1, easing: easeOutExpo });
      else target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      history.replaceState(null, "", hash === "#top" ? location.pathname : hash);
    }

    // One mouse-click sound per press on anything clickable.
    function onPointerDown(e: PointerEvent) {
      if (e.button !== 0) return;
      const el = (e.target as HTMLElement).closest("a, button, [role='button'], summary");
      if (el && !el.hasAttribute("data-silent")) playTick("press");
    }

    document.addEventListener("click", onClick);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("pointerdown", onPointerDown);
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
