import { ArrowRight, CalendarDays } from "lucide-react";
import { MEDIUM } from "../data";
import SectionTitle from "../components/SectionTitle";

// Real posts from medium.com/@aymaanpathan5 (titles and dates from the Medium feed).
const posts = [
  {
    title: "I Stopped Asking AI to Write Code. I Gave It a Team Instead.",
    desc: "How I built Oggy: one sentence, and a team of AI agents takes a bug from report to production.",
    date: "November 7, 2026",
    href: "https://medium.com/@aymaanpathan5/i-stopped-asking-ai-to-write-code-i-gave-it-a-team-instead-2527d1edd56f",
  },
  {
    title: "Pathway: I Turned GitHub History into a Knowledge Graph",
    desc: "The FalkorDB-winning agent that assigns you your next coding mission.",
    date: "October 18, 2026",
    href: "https://medium.com/@aymaanpathan5/pathway-we-turned-github-history-into-a-knowledge-graph-that-assigns-you-your-next-coding-mission-2c240a2bf45e",
  },
  {
    title: "I Built a Backend That Optimizes Itself",
    desc: "Give it a scenario, it finds the real bottleneck, tests several fixes under load, and proves which one works.",
    date: "July 25, 2026",
    href: "https://medium.com/@aymaanpathan5/i-built-a-backend-that-optimizes-itself-based-on-whatever-scenario-you-give-it-998c036914a0",
  },
];

export default function WritingSection() {
  return (
    <section className="sec" id="writing">
      <SectionTitle>Blog</SectionTitle>
      <ul className="list">
        {posts.map((p) => (
          <li key={p.href}>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="list-row">
              <span className="list-main">
                <span className="list-title">{p.title}</span>
                <span className="list-desc">{p.desc}</span>
                <span className="list-date">
                  <CalendarDays size={13} /> {p.date}
                </span>
              </span>
              <span className="list-side read">
                Read more <ArrowRight size={14} className="list-arrow" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="center">
        <a href={MEDIUM} target="_blank" rel="noopener noreferrer" className="pill-btn">
          All posts on Medium
        </a>
      </div>
    </section>
  );
}
