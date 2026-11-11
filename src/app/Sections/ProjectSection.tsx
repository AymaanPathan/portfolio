import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import SectionTitle from "../components/SectionTitle";

export default function ProjectsSection() {
  return (
    <section className="sec" id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ul className="proj-grid">
        {projects.map((p) => {
          const href = p.href ?? p.links[0]?.href;
          const body = (
            <>
              <span className="proj-shot">
                <Image src={p.image} alt="" sizes="(max-width: 640px) 100vw, 330px" />
              </span>
              <span className="proj-body">
                <span className="proj-title">
                  {p.title}
                  {href && <ArrowUpRight size={14} className="list-arrow" />}
                </span>
                <span className="proj-hook">{p.hook}</span>
                <span className="proj-tags">
                  {p.badge && <span className="badge badge--win">{p.badge}</span>}
                  {p.tags.slice(0, p.badge ? 2 : 3).map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </span>
              </span>
            </>
          );
          return (
            <li key={p.id}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="proj" aria-label={`${p.title}: ${p.hook}`}>
                  {body}
                </a>
              ) : (
                <div className="proj">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
