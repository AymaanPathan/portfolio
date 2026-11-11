"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Moon, Search, Sun } from "lucide-react";
import CommandMenu from "./CommandMenu";
import { toggleTheme } from "../lib/theme";
import { playTick } from "../lib/sound";

const links = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);
  const [scrolled, setScrolled] = useState(false);
  const mac = useSyncExternalStore(
    () => () => {},
    () => /Mac|iPhone|iPad/.test(navigator.platform),
    () => false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!openRef.current) playTick("open");
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav-inner">
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button type="button" className="nav-search" onClick={() => {
                playTick("open");
                setOpen(true);
              }}
              data-silent
              aria-label="Open command menu">
              <Search size={15} />
              <kbd>{mac ? "⌘" : "Ctrl"}</kbd>
              <kbd>K</kbd>
            </button>
            <button
              type="button"
              className="nav-theme"
              aria-label="Toggle theme"
              data-silent
              onClick={(e) => toggleTheme(e.clientX, e.clientY)}
            >
              <Sun size={16} className="icon-sun" />
              <Moon size={16} className="icon-moon" />
            </button>
          </div>
        </div>
      </header>
      <CommandMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
