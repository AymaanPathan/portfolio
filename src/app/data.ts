import type { StaticImageData } from "next/image";
import Pathway from "./images/pathway.png";
import Oggy from "./images/oggy.png";
import SolarchatPro from "./images/solarchatpro.png";
import ClauseAi from "./images/clause-ai.png";
import Orchestrix from "./images/Orchestrix.png";
import InfraPilot from "./images/infrapilot.png";
import AgileMorphLogo from "./logos/agilemorph.png";
import HyprForgeLogo from "./logos/hyprforge.png";
import FrelitLogo from "./logos/frelit.png";
import TypeScript from "./icons/Typescript.svg";
import ReactIcon from "./icons/React.svg";
import NextJs from "./icons/NextJs.svg";
import NodeJs from "./icons/Nodejs.svg";
import GraphQL from "./icons/GraphQl.svg";
import Prisma from "./icons/Prisma.svg";
import MongoDB from "./icons/MongoDb.svg";
import Redis from "./icons/Redis.svg";
import Docker from "./icons/Docker.svg";
import AWS from "./icons/Aws.svg";
import Tailwind from "./icons/Tailwind.svg";
import Postman from "./icons/Postman.svg";

export type Link = { label: string; href: string };

export const EMAIL = "aymaanpathan5@gmail.com";
export const MEDIUM = "https://medium.com/@aymaanpathan5";

// ── Proof (hero numbers) ─────────────────────────────────────
export const proof = [
  { value: "2×", label: "Global hackathon wins" },
  { value: "₹1.34L", label: "Prize money, solo" },
  { value: "+65%", label: "CRM conversion lift" },
  { value: "1.5+ yrs", label: "In production" },
];

// ── Experience ───────────────────────────────────────────────
export type Experience = {
  id: string;
  company: string;
  url: string;
  logo: StaticImageData;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  headline: string;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    id: "agilemorph",
    company: "AgileMorph",
    url: "https://theagilemorph.com/",
    logo: AgileMorphLogo,
    role: "Software Engineer",
    period: "Oct 2026 — Present",
    location: "Remote",
    current: true,
    headline: "Building AI automation that gives growing businesses their hours back.",
    bullets: [
      "Engineering done-for-you AI automation at a Claude Service Partner agency whose systems have saved client teams 500K+ hours.",
    ],
    stack: ["TypeScript", "Node.js", "Claude", "AI agents"],
  },
  {
    id: "hyprforge",
    company: "HyprForge",
    url: "https://www.hyprforge.com/",
    logo: HyprForgeLogo,
    role: "Full Stack Engineer",
    period: "Apr — Jul 2026",
    location: "Remote · Dubai-based studio",
    headline: "Made real-time systems fast, and kept them standing under load.",
    bullets: [
      "Shipped full-stack products in TypeScript, Node.js, React, and PostgreSQL, built for reliability first.",
      "Designed live event pipelines on WebSockets and Redis pub/sub so live updates land with low latency.",
      "Built backend services that survive the messy parts: concurrency-safe processing, async jobs, caching, and automatic failure recovery.",
    ],
    stack: ["Next.js", "Node.js", "React", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "frelit",
    company: "Frelit Energy",
    url: "https://frelitenergy.com/",
    logo: FrelitLogo,
    role: "Full Stack Software Developer",
    period: "Dec 2024 — Apr 2026",
    location: "Vadodara, India",
    headline: "Built the CRM the whole company runs on, from an empty repo.",
    bullets: [
      "Architected a production CRM used by 7 departments. Result: 65% more conversions and 74% lower costs.",
      "Kept 20K+ Kanban records instant with Redis caching, deployed on AWS.",
      "Built a WhatsApp-style chat on the WhatsApp Business API with role-based access, so managers see every sales conversation live.",
      "Worked directly with the founders on architecture and owned delivery end to end.",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "GraphQL", "Redis", "AWS"],
  },
];

// ── Hackathons ───────────────────────────────────────────────
export type Hackathon = {
  id: string;
  title: string;
  result: string;
  winner?: boolean;
  headline: string;
  side: string;
  meta: string;
  description?: string;
  links?: Link[];
};

export const hackathons: Hackathon[] = [
  {
    id: "falkordb",
    title: "FalkorDB Graph Hacks",
    result: "Winner",
    winner: true,
    headline: "Won the Agent Memory & Coordination track with Pathway.",
    side: "7,500+ devs",
    meta: "FalkorDB × WeMakeDevs · Oct 2026 · $20K prize pool",
    description:
      "An agent that reads your GitHub, maps what you actually know into a knowledge graph, and tells you the one thing to learn next.",
    links: [
      { label: "Results", href: "https://www.wemakedevs.org/hackathons/falkordb/projects" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=Pc49zZzByUw" },
      { label: "Code", href: "https://github.com/AymaanPathan/pathway.io" },
    ],
  },
  {
    id: "backend-reloaded",
    title: "Backend Reloaded",
    result: "1st place",
    winner: true,
    headline: "Beat 4,000+ developers, solo, and took home ₹1.34L.",
    side: "4,000+ devs",
    meta: "Built Orchestrix",
    description: "Describe a backend in plain English, get production-ready APIs as visual workflows.",
    links: [{ label: "Code", href: "https://github.com/AymaanPathan/Orchestrix" }],
  },
  {
    id: "ui-strikes",
    title: "The UI Strikes Back",
    result: "4th",
    headline: "Placed 4th out of 5,000+ with a dashboard that designs itself.",
    side: "5,000+ devs",
    meta: "Built InfraPilot",
    links: [{ label: "Code", href: "https://github.com/AymaanPathan/InfraPilot" }],
  },
  {
    id: "multilingual",
    title: "The Multilingual Hackathon",
    result: "7th",
    headline: "7th of 1,000+ with dev-buddy: live coding in your own language.",
    side: "1,000+ devs",
    meta: "Built dev-buddy",
    links: [{ label: "Code", href: "https://github.com/AymaanPathan/dev-buddy" }],
  },
  {
    id: "odoo",
    title: "Odoo National Hackathon",
    result: "Top 10",
    headline: "Top 10 of 2,000+ with a campus marketplace for books.",
    side: "2,000+ devs",
    meta: "Peer-to-peer, built for students",
  },
];

// ── Projects ─────────────────────────────────────────────────
export type Project = {
  id: string;
  title: string;
  hook: string;
  description: string;
  image: StaticImageData;
  href?: string;
  links: Link[];
  tags: string[];
  badge?: string;
};

export const projects: Project[] = [
  {
    id: "pathway",
    title: "Pathway",
    badge: "Winner · FalkorDB",
    hook: "Reads your GitHub code, works out what you already know, and tells you which skill to learn next.",
    description:
      "Reads your commits, maps what you know into a knowledge graph, and hands you one verified coding mission.",
    image: Pathway,
    href: "https://github.com/AymaanPathan/pathway.io",
    links: [
      { label: "Demo", href: "https://www.youtube.com/watch?v=Pc49zZzByUw" },
      {
        label: "Write-up",
        href: "https://medium.com/@aymaanpathan5/pathway-we-turned-github-history-into-a-knowledge-graph-that-assigns-you-your-next-coding-mission-2c240a2bf45e",
      },
    ],
    tags: ["FalkorDB", "AI agents", "MCP"],
  },
  {
    id: "orchestrix",
    title: "Orchestrix",
    badge: "1st · Backend Reloaded",
    hook: "Describe the backend you want in plain English, and it builds and deploys a working API for you.",
    description: "AI generates the workflow nodes, wires them together, and ships a production-ready API.",
    image: Orchestrix,
    href: "https://github.com/AymaanPathan/Orchestrix",
    links: [],
    tags: ["Node.js", "Motia", "AI"],
  },
  {
    id: "oggy",
    title: "Oggy",
    hook: "A voice assistant for your PC: say a task and it does it, or hands coding work to a team of AI agents.",
    description:
      "A voice-first AI companion for your PC. Everyday tasks run instantly; coding tasks go to a team of 7 AI agents that report back in Discord.",
    image: Oggy,
    href: "https://oggy-landing.vercel.app",
    links: [{ label: "Code", href: "https://github.com/AymaanPathan/oggy" }],
    tags: ["TypeScript", "AI agents", "Voice"],
  },
  {
    id: "clause-ai",
    title: "Clause AI",
    hook: "Turns a written agreement into a Bitcoin smart contract that holds the money and pays out when work is done.",
    description: "Plain-English agreements become milestones, sBTC locks the funds, and disputes resolve on-chain.",
    image: ClauseAi,
    href: "https://clause-ai-bfno.vercel.app",
    links: [{ label: "Code", href: "https://github.com/AymaanPathan/ClauseAI" }],
    tags: ["Next.js", "Stacks", "Bitcoin"],
  },
  {
    id: "infrapilot",
    title: "InfraPilot",
    badge: "4th · UI Strikes Back",
    hook: "Ask a question about your Kubernetes cluster in plain English and get a live dashboard as the answer.",
    description: "Generative UI on real Kubernetes data. Type what you want to see and the interface builds itself.",
    image: InfraPilot,
    href: "https://github.com/AymaanPathan/InfraPilot",
    links: [],
    tags: ["Kubernetes", "Generative UI"],
  },
  {
    id: "solarchat",
    title: "SolarChat Pro",
    badge: "In production",
    hook: "A CRM for solar companies that works through WhatsApp, so every partner conversation is tracked in one place.",
    description: "Partner conversations flow into a structured backend, so solar teams see everything without changing how anyone works.",
    image: SolarchatPro,
    links: [],
    tags: ["GraphQL", "Redis", "AWS"],
  },
];

// ── Stack ────────────────────────────────────────────────────
export const stack = [
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJs, invert: true },
  { name: "Node.js", icon: NodeJs },
  { name: "GraphQL", icon: GraphQL },
  { name: "Prisma", icon: Prisma },
  { name: "MongoDB", icon: MongoDB },
  { name: "Redis", icon: Redis },
  { name: "Docker", icon: Docker },
  { name: "AWS", icon: AWS },
  { name: "Tailwind", icon: Tailwind },
  { name: "Postman", icon: Postman },
];
