"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // 0.06 = dreamier, 0.12 = snappier
      wheelMultiplier: 0.9,
      touchMultiplier: 1.0,
      smoothWheel: true,
    });

    // Expose so Navbar anchor clicks can call lenis.scrollTo()
    (window as typeof window & { __lenis?: Lenis }).__lenis = lenis;

    let raf: number;
    function tick(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
