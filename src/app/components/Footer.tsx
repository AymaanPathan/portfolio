import Image from "next/image";
import { Mail } from "lucide-react";
import { socials } from "./Icons";
import { EMAIL, stack } from "../data";
import SectionTitle from "./SectionTitle";

const nav = [
  { href: "#top", label: "Home" },
  { href: "#experience", label: "Work" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Blog" },
];

export default function Footer() {
  return (
    <>
      <section className="sec wrap" id="stack">
        <SectionTitle>Stack</SectionTitle>
        <ul className="stack">
          {stack.map((s) => (
            <li key={s.name}>
              <Image src={s.icon} alt="" width={15} height={15} className={"invert" in s ? "invert-icon" : undefined} />
              {s.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="cta">
        <p className="cta-title">Building something ambitious?</p>
        <p className="cta-sub">I&apos;m always up for a hard problem. Tell me what you&apos;re working on.</p>
        <a href={`mailto:${EMAIL}`} className="pill-btn pill-btn--solid">
          <Mail size={15} /> Say hello
        </a>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className="footer-label">Navigate</p>
            <ul className="footer-nav">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-label">Connect</p>
            <ul className="footer-icons">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon size={16} />
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} aria-label="Email" title="Email">
                  <Mail size={16} strokeWidth={1.8} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aymaan Pathan</span>
          <span>
            Press <kbd>Ctrl</kbd> <kbd>K</kbd> to get around
          </span>
        </div>
      </footer>
    </>
  );
}
