import { ArrowUpRight } from "lucide-react";
import { hackathons } from "../data";
import SectionTitle from "../components/SectionTitle";

export default function HackathonSection() {
  return (
    <section className="sec" id="hackathons">
      <SectionTitle>Hackathons</SectionTitle>
      <ul className="list">
        {hackathons.map((h) => {
          const href = h.links?.[0]?.href;
          const inner = (
            <>
              <span className="list-main">
                <span className="list-title">
                  {h.title}
                  <span className={`badge${h.winner ? " badge--win" : ""}`}>{h.result}</span>
                </span>
                <span className="list-desc">{h.headline}</span>
              </span>
              <span className="list-side">
                {h.side}
                {href && <ArrowUpRight size={14} className="list-arrow" />}
              </span>
            </>
          );
          return (
            <li key={h.id}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="list-row">
                  {inner}
                </a>
              ) : (
                <div className="list-row">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
