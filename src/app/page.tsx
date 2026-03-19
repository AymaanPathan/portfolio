"use client";

import { useEffect, useRef, useState } from "react";

// ─── Lenis Smooth Scroll — npm install lenis ──────────────────────────────────
function useLenis() {
  useEffect(() => {
    let lenis: any;
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });
    return () => lenis?.destroy();
  }, []);
}

// ─── Scroll reveal ────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            setTimeout(
              () => el.classList.add("is-visible"),
              Number(el.dataset.delay ?? 0),
            );
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.07 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = () => {
          start += to / 40;
          setVal(Math.min(Math.round(start), to));
          if (start < to) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// ─── Components ───────────────────────────────────────────────────────────────
function Chip({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function ProjectCard({
  n,
  title,
  url,
  desc,
  tags,
  badge,
  live,
}: {
  n: string;
  title: string;
  url?: string;
  desc: string;
  tags: string[];
  badge?: string;
  live?: boolean;
}) {
  return (
    <div data-reveal className="project-card">
      {/* image slot */}
      <div className="project-img">
        <span className="project-img-label">Image placeholder</span>
        {/* Replace with: <Image src="/projects/name.png" fill className="object-cover" alt={title} /> */}
      </div>
      <div className="project-body">
        <div className="project-header">
          <span className="project-num">{n}</span>
          <h3 className="project-title">{title}</h3>
          <div className="project-badges">
            {live && (
              <span className="badge-live">
                <span className="live-dot" />
                Live
              </span>
            )}
            {badge && <span className="badge-warn">{badge}</span>}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="ext-link"
                title="Open"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="project-desc">{desc}</p>
        <div className="tag-row">
          {tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

function HackRow({
  emoji,
  title,
  sub,
}: {
  emoji: string;
  title: string;
  sub?: string;
}) {
  return (
    <div data-reveal className="hack-row">
      <span className="hack-emoji">{emoji}</span>
      <div>
        <p className="hack-title">{title}</p>
        {sub && <p className="hack-sub">{sub}</p>}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useLenis();
  useReveal();

  const stack = [
    "MERN",
    "TypeScript",
    "Next.js",
    "React Native",
    "Redis",
    "BullMQ",
    "GraphQL",
    "WebSockets",
    "LangChain",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Docker",
    "AWS",
    "Clarity",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500&display=swap');

        /* ── RESET + BASE ─────────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { background: #000; scroll-behavior: auto; }
        body {
          background: #000;
          color: #ededed;
          font-family: 'Geist', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          line-height: 1.6;
        }

        /* ── GRAIN ────────────────────────────────────────────────────── */
        body::before {
          content: '';
          position: fixed; inset: 0; z-index: 9999; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          opacity: 0.15;
        }

        /* ── REVEAL SYSTEM ────────────────────────────────────────────── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        [data-reveal].is-visible { opacity: 1; transform: none; }

        /* ── NAV ──────────────────────────────────────────────────────── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: center;
          height: 60px;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-inner {
          width: 100%; max-width: 900px;
          padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo { display: flex; align-items: center; gap: 10px; }
        .nav-logo-avatar {
          width: 32px; height: 32px; border-radius: 8px;
          background: #111; border: 1px solid #2a2a2a;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; overflow: hidden;
        }
        .nav-logo-name { font-size: 14px; font-weight: 600; color: #fff; letter-spacing: -0.02em; }
        .nav-links { display: flex; align-items: center; gap: 6px; }
        .nav-link {
          font-size: 13px; font-weight: 500; color: #888;
          padding: 5px 12px; border-radius: 6px;
          transition: color 0.15s, background 0.15s;
          text-decoration: none;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.07); }
        .nav-cta {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; font-weight: 500; color: #fff;
          background: #fff; color: #000;
          padding: 6px 14px; border-radius: 8px;
          transition: background 0.15s, opacity 0.15s;
          text-decoration: none;
        }
        .nav-cta:hover { background: #e8e8e8; }

        /* ── MAIN CONTAINER ───────────────────────────────────────────── */
        .main { max-width: 900px; margin: 0 auto; padding: 0 24px 120px; }

        /* ── HERO ─────────────────────────────────────────────────────── */
        .hero {
          padding-top: 140px;
          padding-bottom: 100px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center; position: relative;
        }

        /* Big background text glow */
        .hero::before {
          content: '';
          position: absolute; top: 80px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-family: 'Geist Mono', monospace;
          color: #666; letter-spacing: 0.08em; text-transform: uppercase;
          border: 1px solid #222; padding: 5px 14px; border-radius: 100px;
          margin-bottom: 32px; background: #0a0a0a;
        }
        .hero-eyebrow .live-dot { background: #22c55e; }

        .hero-name {
          font-size: clamp(52px, 8vw, 88px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #fff;
          margin-bottom: 6px;
        }
        .hero-role {
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #3a3a3a;
          margin-bottom: 28px;
        }
        .hero-desc {
          max-width: 560px;
          font-size: 17px;
          color: #999;
          line-height: 1.75;
          margin-bottom: 10px;
        }
        .hero-desc strong { color: #fff; font-weight: 600; }
        .hero-subdesc {
          font-size: 14px; color: #444;
          max-width: 420px; margin-bottom: 40px;
        }

        .hero-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .btn-primary {
          display: inline-flex; align-items: center; gap-8px;
          padding: 10px 22px; border-radius: 10px;
          background: #fff; color: #000;
          font-size: 14px; font-weight: 600;
          text-decoration: none;
          transition: background 0.15s, transform 0.15s;
          gap: 8px;
        }
        .btn-primary:hover { background: #e5e5e5; transform: translateY(-1px); }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px; border-radius: 10px;
          border: 1px solid #222; color: #bbb;
          font-size: 14px; font-weight: 500;
          text-decoration: none;
          background: #0a0a0a;
          transition: border-color 0.15s, color 0.15s, transform 0.15s;
        }
        .btn-secondary:hover { border-color: #444; color: #fff; transform: translateY(-1px); }

        .hero-socials { display: flex; gap: 20px; margin-top: 36px; }
        .social-link { color: #3a3a3a; transition: color 0.15s; }
        .social-link:hover { color: #fff; }

        /* ── DIVIDER ──────────────────────────────────────────────────── */
        .divider { width: 100%; height: 1px; background: #141414; margin: 80px 0; }

        /* ── SECTION HEADER ───────────────────────────────────────────── */
        .section-label {
          font-size: 11px; font-family: 'Geist Mono', monospace;
          color: #444; letter-spacing: 0.15em; text-transform: uppercase;
          margin-bottom: 8px; display: block; text-align: center;
        }
        .section-title {
          font-size: 38px; font-weight: 800; letter-spacing: -0.03em;
          color: #fff; text-align: center; margin-bottom: 56px; line-height: 1.1;
        }

        /* ── STATS ────────────────────────────────────────────────────── */
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #141414; border-radius: 16px; overflow: hidden; border: 1px solid #141414; }
        @media (max-width: 640px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
        .stat-card { background: #080808; padding: 28px 24px; text-align: center; transition: background 0.2s; }
        .stat-card:hover { background: #0d0d0d; }
        .stat-val { font-size: 40px; font-weight: 800; color: #fff; letter-spacing: -0.04em; line-height: 1; margin-bottom: 8px; }
        .stat-label { font-size: 12px; color: #555; line-height: 1.5; }

        /* ── WORK TIMELINE ────────────────────────────────────────────── */
        .timeline { position: relative; padding-left: 0; }
        .tl-item {
          position: relative;
          background: #080808; border: 1px solid #1a1a1a;
          border-radius: 16px; padding: 28px 32px;
          margin-bottom: 16px;
          transition: border-color 0.2s, background 0.2s;
        }
        .tl-item:hover { border-color: #2a2a2a; background: #0d0d0d; }
        .tl-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; margin-bottom: 20px; }
        .tl-company { font-size: 17px; font-weight: 700; color: #fff; letter-spacing: -0.02em; }
        .tl-role { font-size: 13px; color: #555; margin-top: 3px; }
        .tl-meta { text-align: right; }
        .tl-period { font-size: 12px; font-family: 'Geist Mono', monospace; color: #444; }
        .tl-bullets { list-style: none; space-y: 10px; }
        .tl-bullet { display: flex; gap: 12px; font-size: 14px; color: #888; line-height: 1.65; margin-bottom: 10px; }
        .tl-bullet::before { content: '—'; color: #2a2a2a; flex-shrink: 0; font-family: 'Geist Mono', monospace; }
        .tl-bullet strong { color: #ccc; font-weight: 600; }

        /* ── CHIP / PILL ──────────────────────────────────────────────── */
        .chip {
          display: inline-block;
          font-size: 11px; font-family: 'Geist Mono', monospace;
          color: #666; background: #0d0d0d;
          border: 1px solid #1f1f1f; border-radius: 6px;
          padding: 4px 10px;
          transition: border-color 0.15s, color 0.15s;
        }
        .chip:hover { border-color: #333; color: #bbb; }
        .tag-row { display: flex; flex-wrap: wrap; gap: 6px; }

        /* ── PROJECT GRID ─────────────────────────────────────────────── */
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr; } }

        .project-card {
          background: #080808; border: 1px solid #1a1a1a; border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, background 0.25s;
        }
        .project-card:hover { border-color: #2d2d2d; transform: translateY(-3px); background: #0c0c0c; }

        .project-img {
          height: 180px; width: 100%;
          background: #0a0a0a;
          border-bottom: 1px solid #161616;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .project-img-label {
          font-size: 10px; font-family: 'Geist Mono', monospace;
          color: #252525; letter-spacing: 0.12em; text-transform: uppercase;
        }
        /* checkerboard subtle bg on image slot */
        .project-img::before {
          content: '';
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, #161616 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.5;
        }

        .project-body { padding: 20px 22px; }
        .project-header { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
        .project-num { font-size: 11px; font-family: 'Geist Mono', monospace; color: #333; margin-top: 2px; flex-shrink: 0; }
        .project-title { font-size: 15px; font-weight: 700; color: #fff; letter-spacing: -0.02em; flex: 1; line-height: 1.3; }
        .project-badges { display: flex; align-items: center; gap: 6px; flex-shrink: 0; margin-top: 2px; }
        .project-desc { font-size: 13px; color: #666; line-height: 1.65; margin-bottom: 14px; }

        .badge-live {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10px; font-family: 'Geist Mono', monospace;
          color: #4ade80; background: rgba(74,222,128,0.08);
          border: 1px solid rgba(74,222,128,0.2); border-radius: 100px;
          padding: 2px 8px;
        }
        .badge-warn {
          font-size: 10px; font-family: 'Geist Mono', monospace;
          color: #fbbf24; background: rgba(251,191,36,0.08);
          border: 1px solid rgba(251,191,36,0.2); border-radius: 100px;
          padding: 2px 8px;
        }
        .ext-link { color: #333; transition: color 0.15s; }
        .ext-link:hover { color: #fff; }

        /* ── LIVE DOT ─────────────────────────────────────────────────── */
        @keyframes pulse-glow { 0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 50% { opacity:0.8; box-shadow: 0 0 0 4px rgba(34,197,94,0); } }
        .live-dot {
          display: inline-block; width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e; flex-shrink: 0;
          animation: pulse-glow 2s ease infinite;
        }

        /* ── HACKATHONS ───────────────────────────────────────────────── */
        .hack-list {
          background: #080808; border: 1px solid #1a1a1a; border-radius: 16px;
          overflow: hidden;
        }
        .hack-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 18px 24px;
          border-bottom: 1px solid #111;
          transition: background 0.15s;
        }
        .hack-row:last-child { border-bottom: none; }
        .hack-row:hover { background: #0c0c0c; }
        .hack-emoji { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
        .hack-title { font-size: 14px; font-weight: 600; color: #e0e0e0; line-height: 1.4; }
        .hack-sub { font-size: 12px; color: #444; margin-top: 2px; font-family: 'Geist Mono', monospace; }

        /* ── STACK MARQUEE ────────────────────────────────────────────── */
        @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track {
          display: flex; gap: 0;
          animation: slide 24s linear infinite;
          white-space: nowrap;
        }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-item {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 13px; font-family: 'Geist Mono', monospace;
          color: #444; padding: 0 28px;
          transition: color 0.2s;
        }
        .marquee-item:hover { color: #aaa; }
        .marquee-sep { color: #1e1e1e; }

        /* ── CONTACT ──────────────────────────────────────────────────── */
        .contact-section { text-align: center; padding: 60px 0; }
        .contact-title {
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 800; letter-spacing: -0.04em; color: #fff;
          line-height: 1; margin-bottom: 20px;
        }
        .contact-sub { font-size: 16px; color: #555; max-width: 380px; margin: 0 auto 44px; line-height: 1.7; }
        .contact-email {
          display: inline-block;
          font-size: clamp(22px, 4vw, 36px); font-weight: 700;
          letter-spacing: -0.03em; color: #fff;
          text-decoration: none;
          border-bottom: 2px solid #1f1f1f;
          padding-bottom: 4px;
          transition: border-color 0.2s;
        }
        .contact-email:hover { border-color: #fff; }
        .contact-links { display: flex; justify-content: center; gap: 24px; margin-top: 48px; }
        .contact-link { font-size: 13px; color: #333; transition: color 0.15s; text-decoration: none; }
        .contact-link:hover { color: #fff; }

        /* ── FOOTER ───────────────────────────────────────────────────── */
        .footer {
          border-top: 1px solid #111; padding: 24px;
          display: flex; justify-content: center;
        }
        .footer-inner {
          width: 100%; max-width: 900px;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 11px; font-family: 'Geist Mono', monospace; color: #333;
        }

        /* ── OPEN TO WORK BADGE (nav) ─────────────────────────────────── */
        .otw-badge {
          display: none;
        }
        @media (min-width: 768px) {
          .otw-badge {
            display: inline-flex; align-items: center; gap: 7px;
            font-size: 12px; font-weight: 500; color: #bbb;
            border: 1px solid #1f1f1f; padding: 5px 12px; border-radius: 8px;
            background: #090909;
            text-decoration: none;
            transition: border-color 0.15s, color 0.15s;
          }
          .otw-badge:hover { border-color: #333; color: #fff; }
        }

        /* ── FEATURED TAG on first project ───────────────────────────── */
        .project-card:first-child .project-img {
          background: linear-gradient(135deg, #0d0d0d 0%, #111 100%);
        }

        /* scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #1f1f1f; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #333; }
      `}</style>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <div className="nav-logo-avatar">🧑‍💻</div>
            <span className="nav-logo-name">Aymaan</span>
          </div>

          <div className="nav-links">
            {[
              ["#work", "Work"],
              ["#projects", "Projects"],
              ["#hackathons", "Hackathons"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <a key={h} href={h} className="nav-link">
                {l}
              </a>
            ))}
          </div>

          <a href="mailto:your@email.com" className="otw-badge">
            <span className="live-dot" />
            Open to work
          </a>
        </div>
      </nav>

      {/* ── MAIN ────────────────────────────────────────────────────────────── */}
      <div className="main">
        {/* HERO */}
        <section className="hero">
          <div data-reveal className="hero-eyebrow">
            <span className="live-dot" />
            Vadodara, India · 22 y/o · Available for hire
          </div>

          <h1 data-reveal data-delay="60" className="hero-name">
            Aymaan.
          </h1>
          <p data-reveal data-delay="100" className="hero-role">
            Full Stack Developer
          </p>

          <p data-reveal data-delay="150" className="hero-desc">
            I work at a non-IT company but my entire role is building{" "}
            <strong>production systems from scratch</strong> — no assigned
            tickets, no hand-holding. Just real problems and complete solutions.
          </p>
          <p data-reveal data-delay="180" className="hero-subdesc">
            1.5 years · CRMs, SaaS, AI pipelines, blockchain protocols — all
            shipped solo.
          </p>

          <div data-reveal data-delay="220" className="hero-actions">
            <a href="/resume.pdf" className="btn-primary">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Resume / CV
            </a>
            <a
              href="https://solarchatpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span className="live-dot" />
              solarchatpro.com
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <div data-reveal data-delay="270" className="hero-socials">
            {[
              {
                href: "#",
                label: "X",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "GitHub",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                ),
              },
              {
                href: "#",
                label: "LinkedIn",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                href: "mailto:your@email.com",
                label: "Email",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="social-link"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </section>

        <div className="divider" style={{ margin: "0 0 80px" }} />

        {/* STATS */}
        <section style={{ marginBottom: 80 }}>
          <div data-reveal className="stats-grid">
            <div className="stat-card">
              <div className="stat-val">
                <Counter to={74} suffix="%" />
              </div>
              <div className="stat-label">
                Operational cost reduction shipped in production
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-val">
                <Counter to={65} suffix="%" />
              </div>
              <div className="stat-label">
                Sales conversion increase via internal CRM
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-val">
                <Counter to={1000} suffix="+" />
              </div>
              <div className="stat-label">
                Leads processed daily by automation
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-val">
                <Counter to={7} />
              </div>
              <div className="stat-label">
                Departments served by production CRM
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* WORK */}
        <section id="work" style={{ marginBottom: 80 }}>
          <span data-reveal className="section-label">
            Experience
          </span>
          <h2 data-reveal data-delay="60" className="section-title">
            Work
          </h2>

          <div className="timeline">
            <div data-reveal className="tl-item">
              <div className="tl-header">
                <div>
                  <div className="tl-company">Non-IT Company, Vadodara</div>
                  <div className="tl-role">
                    Full Stack Developer · Sole Developer
                  </div>
                </div>
                <div className="tl-meta">
                  <div className="tl-period">2023 – Present</div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      justifyContent: "flex-end",
                      marginTop: 6,
                    }}
                  >
                    <span className="live-dot" />
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "'Geist Mono', monospace",
                        color: "#4ade80",
                      }}
                    >
                      Current
                    </span>
                  </div>
                </div>
              </div>
              <ul className="tl-bullets">
                {[
                  <>
                    Production CRM serving <strong>7 departments</strong> — cut
                    operational costs by <strong>74%</strong> and increased
                    sales conversions by <strong>65%</strong>.
                  </>,
                  <>
                    React Native telecaller app with auto-dialing and WhatsApp
                    automation processing <strong>1,000+ leads daily</strong>.
                  </>,
                  <>
                    No-code API builder enabling non-technical teams to create
                    and manage APIs without writing code.
                  </>,
                  <>
                    SRE/DevOps monitoring and automation system handling alerts,
                    triggers, and infrastructure workflows.
                  </>,
                  <>
                    SolarChat Pro — live WhatsApp-powered CRM SaaS for solar
                    businesses with channel partner networks.
                  </>,
                  <>
                    Web automation & scraping system using Puppeteer with
                    anti-bot detection and session management at scale.
                  </>,
                ].map((b, i) => (
                  <li key={i} className="tl-bullet">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="tag-row" style={{ marginTop: 20 }}>
                {[
                  "MERN",
                  "TypeScript",
                  "React Native",
                  "Redis",
                  "BullMQ",
                  "WebSockets",
                  "Puppeteer",
                  "Docker",
                  "AWS",
                ].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PROJECTS */}
        <section id="projects" style={{ marginBottom: 80 }}>
          <span data-reveal className="section-label">
            Featured
          </span>
          <h2 data-reveal data-delay="60" className="section-title">
            Projects
          </h2>

          <div className="projects-grid">
            <ProjectCard
              n="01"
              title="SolarChat Pro"
              url="https://solarchatpro.com"
              live
              desc="WhatsApp-powered CRM SaaS for solar businesses with channel partner networks. Connects WhatsApp conversations to a structured CRM backend. Built solo, live in production."
              tags={[
                "Next.js",
                "TypeScript",
                "WebSockets",
                "WhatsApp API",
                "Redis",
                "BullMQ",
              ]}
            />
            <ProjectCard
              n="02"
              title="ClauseAI"
              badge="$20K Hackathon"
              desc="Bitcoin smart contract protocol converting plain English agreements into blockchain-enforced contracts with AI arbitration. Built on Stacks with Groq + LLaMA 3.3 70B."
              tags={[
                "Clarity",
                "Stacks",
                "LangChain",
                "Groq",
                "LLaMA 3.3",
                "Next.js",
              ]}
            />
            <ProjectCard
              n="03"
              title="Medic-AI"
              desc="Full-stack medical RAG assistant with symptom-based conversations and diagnosis reports. Multi-agent LangGraph pipeline with context-aware clinical conversations."
              tags={["LangGraph", "Groq", "FAISS", "FastAPI", "RAG", "Next.js"]}
            />
            <ProjectCard
              n="04"
              title="Internal CRM"
              desc="Complete production CRM serving 7 departments. Cut operational costs by 74% and increased sales conversions by 65%. Sole developer, fully in production."
              tags={[
                "MERN",
                "TypeScript",
                "Redis",
                "BullMQ",
                "GraphQL",
                "Docker",
              ]}
            />
            <ProjectCard
              n="05"
              title="No-Code API Builder"
              desc="Enables non-technical teams to create, configure, and manage APIs without code. Visual editor, auth management, and live testing environment."
              tags={["Node.js", "TypeScript", "React", "Express", "MongoDB"]}
            />
            <ProjectCard
              n="06"
              title="SRE / DevOps Monitoring"
              desc="Automation system for alerts, triggers, and infrastructure workflows. Handles monitoring, incident response, and automation across production systems."
              tags={["Docker", "AWS", "Node.js", "TypeScript", "BullMQ"]}
            />
          </div>
        </section>

        <div className="divider" />

        {/* HACKATHONS */}
        <section id="hackathons" style={{ marginBottom: 80 }}>
          <span data-reveal className="section-label">
            Competitions
          </span>
          <h2 data-reveal data-delay="60" className="section-title">
            Hackathons
          </h2>
          <div data-reveal className="hack-list">
            <HackRow
              emoji="🥇"
              title="Backend Reloaded — 1st Place"
              sub="₹1,34,000 prize"
            />
            <HackRow
              emoji="🏆"
              title="Odoo International Hackathon — Top Finalist"
              sub="2,000+ global participants"
            />
            <HackRow emoji="🏆" title="The Multilingual Hackathon — Top 10" />
            <HackRow emoji="🏆" title="The UI Strikes Back — 4th Rank" />
            <HackRow
              emoji="🔴"
              title="BUIDL Battle #2 — Submitted, awaiting results"
              sub="$20,000 pool · 317 competitors · Results March 31"
            />
          </div>
        </section>

        <div className="divider" />

        {/* STACK MARQUEE */}
        <section style={{ marginBottom: 80, overflow: "hidden" }}>
          <span
            data-reveal
            className="section-label"
            style={{ marginBottom: 24, display: "block" }}
          >
            Tech Stack
          </span>
          <div
            style={{
              overflow: "hidden",
              borderTop: "1px solid #111",
              borderBottom: "1px solid #111",
              padding: "16px 0",
            }}
          >
            <div className="marquee-track">
              {[...stack, ...stack].map((s, i) => (
                <span key={i} className="marquee-item">
                  {s}
                  <span className="marquee-sep">·</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <span data-reveal className="section-label">
            Let's build something
          </span>
          <h2 data-reveal data-delay="80" className="contact-title">
            Get in touch.
          </h2>
          <p data-reveal data-delay="140" className="contact-sub">
            Open to new opportunities, freelance, collabs — or just a good
            conversation about systems and products.
          </p>
          <div data-reveal data-delay="190">
            <a href="mailto:your@email.com" className="contact-email">
              your@email.com
            </a>
          </div>
          <div data-reveal data-delay="250" className="contact-links">
            {[
              ["#", "X"],
              ["#", "GitHub"],
              ["#", "LinkedIn"],
              ["https://solarchatpro.com", "SolarChat Pro"],
            ].map(([h, l]) => (
              <a
                key={l}
                href={h}
                className="contact-link"
                target={h.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {l}
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© 2025 Aymaan</span>
          <span>Next.js · TypeScript · Tailwind · Lenis</span>
        </div>
      </footer>
    </>
  );
}
