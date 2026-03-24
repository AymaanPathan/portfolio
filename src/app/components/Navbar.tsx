"use client";
import { useRef, useEffect } from "react";
import Lenis from "lenis";

export default function Navbar() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const rippleSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest(
        "a[href^='#']",
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const lenis = (window as typeof window & { __lenis?: Lenis }).__lenis;
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, {
          offset: -80,
          duration: 1.4,
          easing: (t: number) => 1 - Math.pow(2, -10 * t),
        });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const goingLight = !html.classList.contains("light");
    const btn = btnRef.current;
    const svg = rippleSvgRef.current;
    if (!btn || !svg) return;

    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const rippleColor = goingLight ? "#f4f1ec" : "#050505";

    const NS = "http://www.w3.org/2000/svg";
    const circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", String(cx));
    circle.setAttribute("cy", String(cy));
    circle.setAttribute("fill", rippleColor);
    circle.setAttribute("r", "0");
    svg.appendChild(circle);

    const maxR =
      Math.ceil(
        Math.hypot(
          Math.max(cx, window.innerWidth - cx),
          Math.max(cy, window.innerHeight - cy),
        ),
      ) + 50;

    const anim = circle.animate(
      [
        { r: "0px", opacity: "1" },
        { r: `${maxR}px`, opacity: "1" },
      ],
      {
        duration: 600,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "forwards",
      },
    );

    setTimeout(() => {
      html.classList.toggle("light", goingLight);
    }, 300);

    anim.onfinish = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          circle.remove();
        });
      });
    };
  }

  return (
    <>
      <svg
        ref={rippleSvgRef}
        className="theme-ripple-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      />

      <nav className="nav-bar">
        <div className="nav-inner">
          <div className="nav-links">
            <a href="#work" className="nav-a">
              Work
            </a>
            <a href="#projects" className="nav-a">
              Projects
            </a>
            <a href="#achievements" className="nav-a">
              Achievements
            </a>
          </div>

          <button
            ref={btnRef}
            className="nav-theme-btn"
            onClick={toggleTheme}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <span className="theme-icon theme-icon--moon" aria-hidden="true">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>

            <span className="theme-icon theme-icon--sun" aria-hidden="true">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
