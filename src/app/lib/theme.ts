import { playTick } from "./sound";

/** Toggles light/dark with a circular reveal from (x, y) when the browser supports View Transitions. */
export function toggleTheme(x = window.innerWidth - 40, y = 32) {
  const html = document.documentElement;
  const toLight = !html.classList.contains("light");
  const apply = () => {
    html.classList.toggle("light", toLight);
    try {
      localStorage.setItem("theme", toLight ? "light" : "dark");
    } catch {}
  };

  playTick("toggle");

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduced) {
    apply();
    return;
  }

  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const transition = document.startViewTransition(apply);
  transition.ready.then(() => {
    html.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 550, easing: "cubic-bezier(0.22, 1, 0.36, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
}
