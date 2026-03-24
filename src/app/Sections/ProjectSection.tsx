"use client";
import Image from "next/image";
import NextJs from "../icons/NextJs.svg";
import Typescript from "../icons/Typescript.svg";
import React from "../icons/React.svg";
import MongoDB from "../icons/MongoDb.svg";
import NodeJs from "../icons/Nodejs.svg";
import AWS from "../icons/Aws.svg";
import SolarchatPro from "../images/solarchatpro.png";
import ClauseAi from "../images/clause-ai.png";
import Orchestrix from "../images/Orchestrix.png";
import InfraPilot from "../images/infrapilot.png";

const projects = [
  {
    id: "solarchat",
    title: "SolarChat Pro",
    description:
      "WhatsApp-powered CRM for solar businesses — connects partner conversations with a structured backend, giving teams full visibility without disrupting how partners already work.",
    url: "https://solarchatpro.com",

    status: "Live",
    image: SolarchatPro,
    tech: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: React },
      { name: "Node.js", icon: NodeJs },
      { name: "MongoDB", icon: MongoDB },
      { name: "AWS", icon: AWS },
      { name: "TypeScript", icon: Typescript },
    ],
  },
  {
    id: "clause-ai",
    title: "Clause AI",
    description:
      "Turns plain English agreements into Bitcoin-enforced smart contracts on Stacks — AI parses milestones, sBTC locks funds, and disputes resolve on-chain. No lawyers, no trust required.",
    url: "https://clauseai.com",
    github: "https://github.com/AymaanPathan/ClauseAI",
    status: "Live",
    image: ClauseAi,
    tech: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: React },
      { name: "Node.js", icon: NodeJs },
      { name: "MongoDB", icon: MongoDB },

      { name: "TypeScript", icon: Typescript },
    ],
  },
  {
    id: "orchestrix",
    title: "Orchestrix",
    description:
      "Visual backend builder that converts plain English into production-ready APIs — type what you want, AI generates Motia workflow nodes, connects them, and deploys instantly. No backend code required.",
    url: null,
    github: "https://github.com/AymaanPathan/Orchestrix",
    status: "Live",
    image: Orchestrix,
    tech: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: React },
      { name: "Node.js", icon: NodeJs },
      { name: "MongoDB", icon: MongoDB },
      { name: "TypeScript", icon: Typescript },
    ],
  },
  {
    id: "infrapilot",
    title: "InfraPilot",
    description:
      "AI-powered Kubernetes dashboard that generates real-time UI from natural language using Generative UI and live cluster data.",
    url: null,
    github: "https://github.com/AymaanPathan/InfraPilot",
    status: "Live",
    image: InfraPilot,
    tech: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: React },
      { name: "Node.js", icon: NodeJs },
      { name: "MongoDB", icon: MongoDB },
      { name: "TypeScript", icon: Typescript },
    ],
  },
];
export default function ProjectsSection() {
  return (
    <section className="proj-section" id="projects" data-reveal>
      <p className="exp-label">Work</p>
      <h2 className="exp-heading">Projects</h2>

      <div className="proj-grid">
        {projects.map((p) => (
          <div key={p.id} className="proj-card">
            {/* Image / Preview area */}
            <div className="proj-img-wrap">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={450}
                  className="proj-img"
                />
              ) : (
                <div className="proj-img-placeholder" />
              )}
            </div>

            {/* Body */}
            <div className="proj-body">
              {/* Title row */}
              <div className="proj-title-row">
                <h3 className="proj-title">{p.title}</h3>
                <div className="proj-links">
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link-btn"
                      title="Visit site"
                    >
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
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-link-btn"
                      title="GitHub"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="proj-desc">{p.description}</p>

              {/* Tech */}
              <div className="proj-tech-wrap">
                <p className="proj-tech-label">Technologies</p>
                <div className="proj-tech-icons">
                  {p.tech.map((t, i) => (
                    <div key={i} className="proj-tech-icon" title={t.name}>
                      <Image
                        src={t.icon}
                        alt={t.name}
                        width={22}
                        height={22}
                        className="proj-tech-icon-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
