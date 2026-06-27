"use client";
import Image from "next/image";
import NextJs from "../icons/NextJs.svg";
import ReactIcon from "../icons/React.svg";
import AWS from "../icons/Aws.svg";
import NodeJs from "../icons/Nodejs.svg";
import MongoDB from "../icons/MongoDb.svg";
import GraphQL from "../icons/GraphQl.svg";
import Redis from "../icons/Redis.svg";
import TypeScript from "../icons/Typescript.svg";
import PostgreSQL from "../icons/Prisma.svg";
import Docker from "../icons/Docker.svg";

// ─── Types ────────────────────────────────────────────────────────────────────

type BulletLink = {
  href: string;
  label: string;
};

type Bullet = {
  text: string;
  gold?: boolean;
  link?: BulletLink;
};

type TechItem = {
  name: string;
  icon: string;
};

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: Bullet[];
  techStack: TechItem[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
  {
    id: "hyprforge",
    company: "HyprForge",
    role: "Full Stack Engineer",
    period: "Apr 2025 – Present",
    location: "Remote",
    current: true,
    bullets: [
      {
        text: "Building {link} a crypto payment platform with real-time settlement, secure flows, and scalable infrastructure built for high-throughput transactions",
        gold: true,
        link: { href: "https://payfunds.com/", label: "Payfunds ↗" },
      },
      {
        text: "Built real-time transaction tracking with sub-100ms latency using WebSockets and Redis pub/sub giving users live visibility into crypto payment states across chains",
      },
      {
        text: "Engineered secure payment flows with distributed transaction consistency, preventing double-spends and race conditions across concurrent settlement requests",
      },
      {
        text: "Designed scalable backend architecture capable of handling high-throughput crypto operations, with queue-based processing and graceful failure recovery",
      },
      {
        text: "Optimized end-to-end latency across payment pipelines through strategic caching, connection pooling, and async job offloading",
      },
    ],
    techStack: [
      { name: "Next.js", icon: NextJs },
      { name: "Node.js", icon: NodeJs },
      { name: "React", icon: ReactIcon },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Redis", icon: Redis },
      { name: "Docker", icon: Docker },
      { name: "TypeScript", icon: TypeScript },
    ],
  },
  {
    id: "frelit",
    company: "Frelit Energy Pvt. Limited",
    role: "Software Developer",
    period: "2024 – Apr 2025",
    location: "On-site · Vadodara, IN",
    bullets: [
      {
        text: "Architected a production CRM from scratch serving 7 departments drove 65% more conversions and 74% cost reduction. Redis-cached 20K+ Kanban records, deployed on AWS",
      },
      {
        text: "Built a WhatsApp-style chat system from scratch using WebSockets and WhatsApp Business API real-time messaging with RBAC ensuring managers get full visibility across sales reps",
      },
      {
        text: "Partnered with founders on system architecture and owned end-to-end delivery across the full product lifecycle",
      },
    ],
    techStack: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: ReactIcon },
      { name: "AWS", icon: AWS },
      { name: "Node.js", icon: NodeJs },
      { name: "MongoDB", icon: MongoDB },
      { name: "GraphQL", icon: GraphQL },
      { name: "Redis", icon: Redis },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Splits bullet text on "{link}" and injects the anchor at that position. */
function BulletText({ bullet }: { bullet: Bullet }) {
  const { text, link } = bullet;

  if (!link?.href || !link?.label || !text?.includes("{link}")) {
    return <span>{text ?? ""}</span>;
  }

  const [before = "", after = ""] = text.split("{link}");
  return (
    <span>
      {before}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="exp-saas-link"
      >
        {link.label}
      </a>
      {after}
    </span>
  );
}

function ExpCard({ exp }: { exp: Experience }) {
  // Guard: require at minimum a company name and id
  if (!exp?.id || !exp?.company) return null;

  const bullets = Array.isArray(exp.bullets) ? exp.bullets : [];
  const techStack = Array.isArray(exp.techStack) ? exp.techStack : [];

  return (
    <div className="exp-card">
      {/* Header */}
      <div className="exp-header">
        <div className="exp-meta">
          <div className="exp-company-row">
            <span className="exp-company">{exp.company}</span>
          </div>
          {exp.role && <div className="exp-role">{exp.role}</div>}
        </div>

        {(exp.period || exp.location) && (
          <div className="exp-period-col">
            {exp.period && <span className="exp-period">{exp.period}</span>}
            {exp.location && (
              <span className="exp-location">{exp.location}</span>
            )}
          </div>
        )}
      </div>

      {bullets.length > 0 && (
        <ul className="exp-bullets">
          {bullets.map((bullet, i) => {
            // Skip malformed bullet entries
            if (!bullet?.text) return null;
            return (
              <li key={i} className="exp-bullet">
                <span
                  className={`exp-bullet-dot${bullet.gold ? " exp-bullet-dot--gold" : ""}`}
                />
                <BulletText bullet={bullet} />
              </li>
            );
          })}
        </ul>
      )}

      {techStack.length > 0 && (
        <div className="exp-stack">
          <div className="exp-stack-chips">
            {techStack.map((tech, i) => {
              // Skip chips that are missing a name or icon
              if (!tech?.name || !tech?.icon) return null;
              return (
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
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ExperienceSection() {
  // Guard: if the experiences array is somehow empty or not an array, render nothing
  const validExperiences = Array.isArray(experiences)
    ? experiences.filter((exp) => exp?.id && exp?.company)
    : [];

  if (validExperiences.length === 0) return null;

  return (
    <section className="exp-section" id="work" data-reveal>
      <p className="exp-label">Career</p>
      <h2 className="exp-heading">Experience</h2>

      <div className="exp-list">
        {validExperiences.map((exp) => (
          <ExpCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}
