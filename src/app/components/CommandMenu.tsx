"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Copy,
  FolderGit2,
  Home,
  PenLine,
  Search,
  SunMoon,
  Trophy,
  Volume2,
} from "lucide-react";
import { socials } from "./Icons";
import { EMAIL } from "../data";
import { toggleTheme } from "../lib/theme";
import { playTick, setSoundEnabled, soundEnabled } from "../lib/sound";
import type { WithLenis } from "./SmoothScrollProvider";

type Item = {
  id: string;
  group: string;
  label: string;
  icon: React.ReactNode;
  run: () => void;
  external?: boolean;
};

function go(hash: string) {
  const lenis = (window as WithLenis).__lenis;
  const target = hash === "#top" ? 0 : document.querySelector<HTMLElement>(hash);
  if (target === null) return;
  if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.1 });
  else if (typeof target === "number") window.scrollTo({ top: 0, behavior: "smooth" });
  else target.scrollIntoView({ behavior: "smooth" });
}

export default function CommandMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = useMemo<Item[]>(
    () => [
      { id: "home", group: "Navigate", label: "Home", icon: <Home size={15} />, run: () => go("#top") },
      { id: "exp", group: "Navigate", label: "Experience", icon: <Briefcase size={15} />, run: () => go("#experience") },
      { id: "hack", group: "Navigate", label: "Hackathons", icon: <Trophy size={15} />, run: () => go("#hackathons") },
      { id: "proj", group: "Navigate", label: "Projects", icon: <FolderGit2 size={15} />, run: () => go("#projects") },
      { id: "blog", group: "Navigate", label: "Writing", icon: <PenLine size={15} />, run: () => go("#writing") },
      ...socials.map((s) => ({
        id: s.label,
        group: "Links",
        label: s.label,
        icon: <s.Icon size={14} />,
        external: true,
        run: () => window.open(s.href, "_blank", "noopener,noreferrer"),
      })),
      {
        id: "copy",
        group: "Actions",
        label: "Copy email",
        icon: <Copy size={15} />,
        run: () => {
          void navigator.clipboard.writeText(EMAIL);
          setToast("Email copied");
        },
      },
      { id: "theme", group: "Actions", label: "Toggle theme", icon: <SunMoon size={15} />, run: () => toggleTheme() },
      {
        id: "sound",
        group: "Actions",
        label: "Toggle sounds",
        icon: <Volume2 size={15} />,
        run: () => {
          const next = !soundEnabled();
          setSoundEnabled(next);
          if (next) playTick("toggle");
          setToast(next ? "Sounds on" : "Sounds off");
        },
      },
    ],
    [],
  );

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    if (!open) return;
    const lenis = (window as WithLenis).__lenis;
    lenis?.stop();
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => {
      clearTimeout(t);
      lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1400);
    return () => clearTimeout(t);
  }, [toast]);

  function close() {
    onClose();
    // reset after the close animation
    setTimeout(() => {
      setQuery("");
      setIndex(0);
    }, 250);
  }

  function select(item: Item | undefined) {
    if (!item) return;
    close();
    // let the dialog close before scrolling/opening
    setTimeout(item.run, 60);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      select(filtered[index]);
    } else if (e.key === "Escape") {
      close();
    }
  }

  let lastGroup = "";

  return (
    <>
      <div className={`cmd-backdrop${open ? " is-open" : ""}`} onClick={close} aria-hidden="true" />
      <div
        className={`cmd${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Command menu"
        aria-hidden={!open}
        onKeyDown={onKeyDown}
      >
        <div className="cmd-search">
          <Search size={16} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIndex(0);
            }}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            tabIndex={open ? 0 : -1}
          />
          <kbd>Esc</kbd>
        </div>
        <ul className="cmd-list" role="listbox">
          {filtered.length === 0 && <li className="cmd-empty">No results</li>}
          {filtered.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <li key={item.id}>
                {header && <p className="cmd-group">{header}</p>}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === index}
                  className={`cmd-item${i === index ? " is-active" : ""}`}
                  onMouseMove={() => setIndex(i)}
                  onClick={() => select(item)}
                  tabIndex={open ? 0 : -1}
                >
                  <span className="cmd-icon">{item.icon}</span>
                  {item.label}
                  {item.external && <ArrowUpRight size={14} className="cmd-ext" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`toast${toast ? " is-on" : ""}`} role="status">
        {toast}
      </div>
    </>
  );
}
