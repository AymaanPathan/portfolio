"use client";
import Image from "next/image";
import NextJs from "../icons/NextJs.svg";
import Javascript from "../icons/JavaScript.svg";
import Typescript from "../icons/Typescript.svg";
import Tailwind from "../icons/Tailwind.svg";
import Redis from "../icons/Redis.svg";
import React from "../icons/React.svg";
import Redux from "../icons/Redux.svg";
import GraphQL from "../icons/GraphQl.svg";
import NodeJs from "../icons/Nodejs.svg";
import Firebase from "../icons/Firebase.svg";
import MongoDB from "../icons/MongoDb.svg";
import Postman from "../icons/Postman.svg";
import Docker from "../icons/Docker.svg";
import AWS from "../icons/Aws.svg";
import Prisma from "../icons/Prisma.svg";
import MySQL from "../icons/MySql.svg";

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
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--accent-gold)",
              flexShrink: 0,
              marginTop: "9px",
            }}
          />
          <span>
            Hackathon winner —{" "}
            <strong
              style={{
                color: "var(--accent-gold)",
                fontWeight: "var(--fw-bold)",
              }}
            >
              ₹1.34 Lakhs prize Solo
            </strong>
            , Top 10 finishes across national &amp; international competitions
          </span>
        </li>
        <li style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--accent-gold)",
              flexShrink: 0,
              marginTop: "9px",
            }}
          />
          <span>
            Building and shipping SaaS products — from idea to production
          </span>
        </li>
      </ul>

      {/* Socials */}
      <div className="hero-socials" data-reveal data-reveal-delay="240">
        <a
          href="https://twitter.com/Aymaan_2003"
          title="X / Twitter"
          className="hero-social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/pathan-aymaan"
          title="LinkedIn"
          className="hero-social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://github.com/AymaanPathan"
          title="GitHub"
          className="hero-social"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a
          href="mailto:aymaanpathan5@gmail.com"
          title="Email"
          className="hero-social"
        >
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

      {/* Tech Stack Icons */}
      <p className="stack-label" data-reveal data-reveal-delay="280">
        Tech Stack I Work With
      </p>
      <div className="hero-stack-wrap" data-reveal data-reveal-delay="300">
        {[
          {
            name: "Next.js",
            href: "https://nextjs.org/docs",
            icon: <Image src={NextJs} alt="Next.js" width={32} height={32} />,
          },
          {
            name: "JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            icon: (
              <Image src={Javascript} alt="JavaScript" width={32} height={32} />
            ),
          },
          {
            name: "TypeScript",
            href: "https://www.typescriptlang.org/docs/",
            icon: (
              <Image src={Typescript} alt="TypeScript" width={32} height={32} />
            ),
          },
          {
            name: "Tailwind CSS",
            href: "https://tailwindcss.com/docs",
            icon: (
              <Image src={Tailwind} alt="Tailwind CSS" width={32} height={32} />
            ),
          },
          {
            name: "Redis",
            href: "https://redis.io/docs/latest/",
            icon: <Image src={Redis} alt="Redis" width={32} height={32} />,
          },
          {
            name: "React",
            href: "https://reactjs.org/docs/getting-started.html",
            icon: <Image src={React} alt="React" width={32} height={32} />,
          },
          {
            name: "Redux",
            href: "https://redux.js.org/introduction/getting-started",
            icon: <Image src={Redux} alt="Redux" width={32} height={32} />,
          },
          {
            name: "GraphQL",
            href: "https://graphql.org/learn/",
            icon: <Image src={GraphQL} alt="GraphQL" width={32} height={32} />,
          },
          {
            name: "NodeJs",
            href: "https://nodejs.org/en/docs/",
            icon: <Image src={NodeJs} alt="Node.js" width={32} height={32} />,
          },
          {
            name: "Firebase",
            href: "https://firebase.google.com/docs",
            icon: (
              <Image src={Firebase} alt="Firebase" width={32} height={32} />
            ),
          },
          {
            name: "MongoDB",
            href: "https://www.mongodb.com/docs/",
            icon: <Image src={MongoDB} alt="MongoDB" width={32} height={32} />,
          },
          {
            name: "Postman",
            href: "https://learning.postman.com/docs/getting-started/introduction/",
            icon: <Image src={Postman} alt="Postman" width={32} height={32} />,
          },
          {
            name: "Docker",
            href: "https://docs.docker.com/",
            icon: <Image src={Docker} alt="Docker" width={32} height={32} />,
          },
          {
            name: "AWS",
            href: "https://docs.aws.amazon.com/",
            icon: <Image src={AWS} alt="AWS" width={32} height={32} />,
          },
          {
            name: "Prisma",
            href: "https://www.prisma.io/docs",
            icon: <Image src={Prisma} alt="Prisma" width={32} height={32} />,
          },
          {
            name: "MySQL",
            href: "https://dev.mysql.com/doc/",
            icon: <Image src={MySQL} alt="MySQL" width={32} height={32} />,
          },
        ].map((tech, i) => (
          <a
            key={i}
            href={tech.href}
            className="stack-icon"
            target="_blank"
            rel="noopener noreferrer"
            title={tech.name}
          >
            {tech.icon}
            <span className="stack-tooltip">{tech.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
