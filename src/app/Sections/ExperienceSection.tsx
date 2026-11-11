"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { experiences } from "../data";
import SectionTitle from "../components/SectionTitle";

export default function ExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="sec" id="experience">
      <SectionTitle>Experience</SectionTitle>
      <ul className="exp-list">
        {experiences.map((e) => {
          const open = openId === e.id;
          return (
            <li key={e.id} className={`exp${open ? " is-open" : ""}`}>
              <button
                type="button"
                className="exp-row"
                aria-expanded={open}
                aria-controls={`exp-${e.id}`}
                onClick={() => setOpenId(open ? null : e.id)}
              >
                <span className="exp-left">
                  <span className="exp-company">
                    <Image src={e.logo} alt="" width={20} height={20} className="exp-logo" />
                    {e.company}
                    {e.current && (
                      <span className="badge-live">
                        <span className="dot" /> Working
                      </span>
                    )}
                  </span>
                  <span className="exp-role">{e.role}</span>
                </span>
                <span className="exp-right">
                  <span>{e.period}</span>
                  <span>{e.location}</span>
                </span>
                <ChevronDown size={16} className="exp-chevron" aria-hidden="true" />
              </button>

              <div className="exp-panel" id={`exp-${e.id}`} role="region">
                <div className="exp-panel-inner">
                  <p className="exp-hook">{e.headline}</p>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <ul className="tags">
                    {e.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="more-link">
                    Visit {e.company} →
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
