"use client";
import Image from "next/image";
import NextJs from "../icons/NextJs.svg";
import ReactIcon from "../icons/React.svg";
import AWS from "../icons/Aws.svg";
import NodeJs from "../icons/Nodejs.svg";
import MongoDB from "../icons/MongoDb.svg";
import GraphQL from "../icons/GraphQl.svg";
import Redis from "../icons/Redis.svg";

const experiences = [
  {
    id: "frelit",
    company: "Frelit Energy Pvt. Limited",
    role: "Software Developer",
    period: "2024 – Present",
    location: "On-site · Vadodara, IN",
    status: "Working",
    bullets: [
      "_",
      "Architected a production CRM from scratch 7 departments, 65% more conversions, 74% cost reduction. Redis cached 20K+ Kanban Data, deployed on AWS",
      "Built a WhatsApp-style chat system from scratch using webSockets and WhatsApp Business Api Real-time messaging with RBAC ensuring managers get full visibility across sales reps   ",
      "Partnered with founders on system architecture and owned end-to-end delivery across the Full product lifecycle",
    ],
  },
];

const techStack = [
  { name: "Next.js", icon: NextJs },
  { name: "React", icon: ReactIcon },
  { name: "AWS", icon: AWS },
  { name: "Node.js", icon: NodeJs },
  { name: "MongoDB", icon: MongoDB },
  { name: "GraphQL", icon: GraphQL },
  { name: "Redis", icon: Redis },
];

export default function ExperienceSection() {
  return (
    <section className="exp-section" id="work" data-reveal>
      <p className="exp-label">Career</p>
      <h2 className="exp-heading">Experience</h2>

      <div className="exp-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-card">
            {/* Header */}
            <div className="exp-header">
              <div className="exp-meta">
                <div className="exp-company-row">
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-role">{exp.role}</div>
              </div>

              <div className="exp-period-col">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-location">{exp.location}</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="exp-bullets">
              {exp.bullets.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span
                    className={`exp-bullet-dot${i === 0 ? " exp-bullet-dot--gold" : ""}`}
                  />
                  {i === 0 ? (
                    <span>
                      Currently building{" "}
                      <a
                        href="https://solarchatpro.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-saas-link"
                      >
                        SolarChat Pro ↗
                      </a>{" "}
                      SaaS CRM replacing fragmented whatsApp ops with structured
                      pipelines, Kanban, quotations, and payments
                    </span>
                  ) : (
                    <span>{b}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Tech stack chips */}
            <div className="exp-stack">
              <div className="exp-stack-chips">
                {techStack.map((tech, i) => (
                  <div key={i} className="exp-tech-chip">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={15}
                      height={15}
                      className="exp-tech-chip-icon"
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
