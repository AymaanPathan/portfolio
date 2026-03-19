"use client";

const experiences = [
  {
    id: "frelit",
    company: "Frelit Energy Pvt. Limited",
    role: "Full Stack Developer",
    period: "2024 – Present",
    location: "On-site",
    status: "Working",
    logo: "FE",
    logoColor: "#16a34a",
    logoBg: "#052e16",
    bullets: [
      "Built production-grade CRM from scratch serving 7 departments — reduced operational costs by 74% and increased sales conversions by 65%.",
      "Developed React Native telecaller app with auto-dialing and WhatsApp automation reaching 1,000+ leads daily via cron-scheduled campaigns.",
      "Architected role-based access control with hierarchical permissions, real-time Kanban pipeline, and cross-team task assignment.",
      "Implemented warehouse module with barcode scanning, live inventory monitoring, PDF quotation generation, and S3-hosted document sharing.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="exp-section" id="work">
      <div className="exp-label">Featured</div>
      <h2 className="exp-heading">Experience</h2>

      <div className="exp-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="exp-card">
            {/* Top row */}
            <div className="exp-header">
              <div
                className="exp-logo"
                style={{
                  background: exp.logoBg,
                  color: exp.logoColor,
                  border: `1px solid ${exp.logoColor}22`,
                }}
              >
                {exp.logo}
              </div>

              <div className="exp-meta">
                <div className="exp-company-row">
                  <span className="exp-company">{exp.company}</span>
                  {exp.status === "Working" && (
                    <span className="exp-status-badge">
                      <span className="ldot" />
                      Working
                    </span>
                  )}
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
                  <span className="exp-bullet-dot" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
