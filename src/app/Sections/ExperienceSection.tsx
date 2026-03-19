"use client";

import { useState } from "react";

const experiences = [
  {
    id: "frelit",
    company: "Frelit Energy Pvt. Limited",
    role: "Full Stack Developer",
    period: "2024 – Present",
    location: "On-site",
    status: "Working",
    logo: "FE",
    logoColor: "#16a34a",
    logoBg: "#052e16",
    technologies: [
      { icon: "⚛️", label: "React" },
      { icon: "📱", label: "React Native" },
      { icon: "🟢", label: "Node.js" },
      { icon: "🐘", label: "PostgreSQL" },
      { icon: "🔴", label: "Redis" },
      { icon: "☁️", label: "AWS S3" },
    ],
    bullets: [
      "Built production-grade CRM from scratch serving 7 departments (Sales, Marketing, Telecaller, HR, Accounting, Warehouse) — reduced operational costs by 74% (₹24→₹7 per interaction) and increased sales conversions by 65%.",
      "Developed React Native telecaller application with auto-dialing, call analytics, and performance tracking integrated with automated WhatsApp marketing engine reaching 1000+ leads daily via cron-scheduled campaigns.",
      "Architected role-based access control system with hierarchical permissions (7 user roles), real-time Kanban pipeline management, cross-team task assignment, and internal chat monitoring.",
      "Implemented warehouse management module with barcode scanning for dispatch tracking, live inventory monitoring, automated PDF quotation/invoice generation, and S3-hosted document sharing.",
    ],
  },
];

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState<string | null>("frelit");

  return (
    <section className="exp-section" id="work">
      {/* Section label */}
      <div className="exp-label">Featured</div>
      <h2 className="exp-heading">Experience</h2>

      <div className="exp-list">
        {experiences.map((exp) => {
          const isOpen = expanded === exp.id;

          return (
            <div
              key={exp.id}
              className={`exp-card ${isOpen ? "exp-card--open" : ""}`}
            >
              {/* Card header — always visible */}
              <div
                className="exp-header"
                onClick={() => setExpanded(isOpen ? null : exp.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && setExpanded(isOpen ? null : exp.id)
                }
              >
                {/* Logo */}
                <div
                  className="exp-logo"
                  style={{
                    background: exp.logoBg,
                    color: exp.logoColor,
                    border: `1px solid ${exp.logoColor}22`,
                  }}
                >
                  {exp.logo}
                </div>

                {/* Company + role */}
                <div className="exp-meta">
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    {exp.status === "Working" && (
                      <span className="exp-status-badge">
                        <span className="ldot" />
                        Working
                      </span>
                    )}
                  </div>
                  <div className="exp-role">{exp.role}</div>
                </div>

                {/* Right side — period + chevron */}
                <div className="exp-right">
                  <div className="exp-period-col">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                  <svg
                    className={`exp-chevron ${isOpen ? "exp-chevron--open" : ""}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </div>
              </div>

              {/* Expandable body */}
              {isOpen && (
                <div className="exp-body">
                  {/* Tech stack */}
                  <div className="exp-tech-label">Technologies</div>
                  <div className="exp-tech-row">
                    {exp.technologies.map((t) => (
                      <span key={t.label} className="inline-badge">
                        <span className="inline-badge-icon">{t.icon}</span>
                        {t.label}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="exp-bullet">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Scoped styles ── */}
      <style>{`
        .exp-section {
          padding-bottom: 16px;
        }

        .exp-label {
          font-family: var(--font-body);
          font-size: var(--fs-12);
          font-weight: var(--fw-medium);
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .exp-heading {
          font-family: var(--font-body);
          font-size: 28px;
          font-weight: var(--fw-extrabold);
          color: var(--text-white);
          letter-spacing: -0.03em;
          margin-bottom: 28px;
        }

        .exp-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-radius: var(--r-xl);
          overflow: hidden;
          border: 1px solid var(--border-1);
        }

        .exp-card {
          background: var(--bg-1);
          border-bottom: 1px solid var(--border-1);
          transition: background 0.15s ease;
        }
        .exp-card:last-child {
          border-bottom: none;
        }
        .exp-card--open {
          background: var(--bg-2);
        }

        .exp-header {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          cursor: pointer;
          user-select: none;
          outline: none;
        }
        .exp-header:hover {
          background: rgba(255,255,255,0.015);
        }
        .exp-header:focus-visible {
          outline: 2px solid var(--accent-green-border);
        }

        .exp-logo {
          width: 44px;
          height: 44px;
          border-radius: var(--r-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: var(--fs-13);
          font-weight: var(--fw-bold);
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }

        .exp-meta {
          flex: 1;
          min-width: 0;
        }

        .exp-company-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .exp-company {
          font-family: var(--font-body);
          font-size: var(--fs-15);
          font-weight: var(--fw-bold);
          color: var(--text-white);
          letter-spacing: -0.01em;
        }

        .exp-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          border-radius: var(--r-pill);
          background: var(--accent-green-bg);
          border: 1px solid var(--accent-green-border);
          font-family: var(--font-body);
          font-size: var(--fs-11);
          font-weight: var(--fw-semibold);
          color: var(--accent-green);
          letter-spacing: 0.01em;
        }

        .exp-role {
          font-family: var(--font-body);
          font-size: var(--fs-13);
          font-weight: var(--fw-regular);
          color: var(--text-muted);
          margin-top: 2px;
        }

        .exp-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .exp-period-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .exp-period {
          font-family: var(--font-body);
          font-size: var(--fs-13);
          font-weight: var(--fw-medium);
          color: var(--text-dim);
          white-space: nowrap;
        }

        .exp-location {
          font-family: var(--font-body);
          font-size: var(--fs-12);
          color: var(--text-dark);
          white-space: nowrap;
        }

        .exp-chevron {
          color: var(--text-dark);
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), color 0.15s;
          flex-shrink: 0;
        }
        .exp-chevron--open {
          transform: rotate(180deg);
          color: var(--text-muted);
        }

        /* Body */
        .exp-body {
          padding: 0 20px 20px 20px;
          padding-left: 78px; /* align with text (logo 44 + gap 14 + padding 20) */
        }

        .exp-tech-label {
          font-family: var(--font-body);
          font-size: var(--fs-12);
          font-weight: var(--fw-semibold);
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 10px;
        }

        .exp-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .exp-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .exp-bullet {
          font-family: var(--font-body);
          font-size: var(--fs-14);
          font-weight: var(--fw-regular);
          color: var(--text-muted);
          line-height: 1.75;
          padding-left: 14px;
          position: relative;
        }
        .exp-bullet::before {
          content: "▪";
          position: absolute;
          left: 0;
          color: var(--text-darker);
          font-size: 10px;
          top: 4px;
        }

        @media (max-width: 540px) {
          .exp-body {
            padding-left: 20px;
          }
          .exp-period-col {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
