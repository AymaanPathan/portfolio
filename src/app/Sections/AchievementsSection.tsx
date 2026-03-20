"use client";

const achievements = [
  {
    id: "backend-reloaded",
    rank: "01",
    rankFirst: true,
    title: "Backend Reloaded Hackathon",
    prize: "Won ₹1.34L · 4,000+ participants",
    event: "1st Place",
    description:
      "Built Orchestrix — a visual backend builder that converts plain English into production-ready APIs using node-based workflows.",
  },
  {
    id: "odoo",
    rank: "02",
    rankFirst: false,
    title: "Odoo International Hackathon",
    prize: null,
    event: "Top Finalist · 2,000+ participants",
    description:
      "Built a student marketplace for buying and selling books — connecting campus communities through peer-to-peer listings.",
  },
  {
    id: "multilingual",
    rank: "03",
    rankFirst: false,
    title: "The Multilingual Hackathon",
    prize: null,
    event: "7th Place · 1,000+ participants",
    description:
      "Built DevBuddy — breaking language barriers in software development with live comment translation across collaborators.",
  },
  {
    id: "ui-strikes",
    rank: "04",
    rankFirst: false,
    title: "The UI Strikes Back",
    prize: null,
    event: "4th Rank · 5,000+ participants",
    description:
      "Built InfraPilot — an AI-powered Kubernetes dashboard that generates real-time UI from natural language using Generative UI.",
  },
];

export default function AchievementsSection() {
  return (
    <section className="ach-section" id="achievements" data-reveal>
      <p className="exp-label">Recognition</p>
      <h2 className="exp-heading">Achievements</h2>
      <div className="ach-list">
        {achievements.map((a) => (
          <div key={a.id} className="ach-row">
            <span
              className={`ach-rank${a.rankFirst ? " ach-rank--first" : ""}`}
            >
              {a.rank}
            </span>
            <div className="ach-divider" />
            <div className="ach-body">
              <span className="ach-title">{a.title}</span>
              {a.prize && <span className="ach-prize">{a.prize}</span>}
              <span className="ach-event">{a.event}</span>
              <p className="ach-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
