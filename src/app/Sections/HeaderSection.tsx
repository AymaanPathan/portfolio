import Image from "next/image";
import { Mail, Trophy } from "lucide-react";
import CopyEmail from "../components/CopyEmail";
import { socials } from "../components/Icons";
import { EMAIL } from "../data";
import Avatar from "../images/avatar.jpg";
import AgileMorphLogo from "../logos/agilemorph.png";

export default function HeaderSection() {
  return (
    <section className="intro" id="top">
      <div className="intro-id">
        <Image src={Avatar} alt="Aymaan Pathan" width={84} height={84} className="avatar" priority />
        <div>
          <h1 className="intro-name">Aymaan Pathan</h1>
          <p className="intro-sub">
            Software Engineer
          </p>
          <CopyEmail email={EMAIL} />
        </div>
      </div>

      <p className="intro-bio">
        I build AI products and the systems behind them, from architecture to the last pixel,
        and ship them to production.{" "}
        <strong className="highlight">
          <Trophy size={15} strokeWidth={1.6} aria-hidden="true" />
          2× global hackathon winner
        </strong>
      </p>

      <ul className="intro-status">
        <li>
          <span className="pulse" aria-hidden="true" />
          <span className="label">Currently</span>
          <span className="sep">—</span>
          <a href="https://theagilemorph.com/" target="_blank" rel="noopener noreferrer">
            <Image src={AgileMorphLogo} alt="" width={14} height={14} className="inline-logo" />
            Software Engineer at AgileMorph
          </a>
        </li>
        <li>
          <Trophy size={14} className="trophy" aria-hidden="true" />
          <span className="label">Latest win</span>
          <span className="sep">—</span>
          <a href="https://www.wemakedevs.org/hackathons/falkordb/projects" target="_blank" rel="noopener noreferrer">
            FalkorDB Graph Hacks · Track 02
          </a>
        </li>
      </ul>

      <ul className="intro-socials">
        {socials.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <Icon size={17} />
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${EMAIL}`} aria-label="Email" title="Email">
            <Mail size={17} strokeWidth={1.8} />
          </a>
        </li>
      </ul>
    </section>
  );
}
