"use client";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* H1 — first reveal, no delay */}
      <h1 className="hero-h1" data-reveal>
        Hi, I&apos;m Aymaan —{" "}
        <span className="hero-h1-muted">I build things.</span>
      </h1>
      <ul
        className="hero-desc"
        data-reveal
        data-reveal-delay="120"
        style={{
          paddingLeft: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <span style={{ color: "var(--accent-gold)", flexShrink: 0 }}>→</span>
          <span>
            Hackathon winner — <strong>₹1.34L prize</strong>, Top 10 finishes
            across national &amp; international competitions
          </span>
        </li>
        <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <span style={{ color: "var(--accent-gold)", flexShrink: 0 }}>→</span>
          <span>
            Building and shipping SaaS products — from idea to production
          </span>
        </li>
      </ul>
      {/* Buttons */}
      <div className="hero-btns" data-reveal data-reveal-delay="160">
        <a href="/resume.pdf" className="btn-dark">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Resume / CV
        </a>
        <a href="#contact" className="btn-ghost">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          Get in touch
        </a>
      </div>

      {/* Socials */}
      <div className="hero-socials" data-reveal data-reveal-delay="240">
        <a href="#" title="X / Twitter" className="hero-social">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a href="#" title="LinkedIn" className="hero-social">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a href="#" title="GitHub" className="hero-social">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a href="mailto:your@email.com" title="Email" className="hero-social">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
