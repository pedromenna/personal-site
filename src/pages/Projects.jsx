import { projects, profile } from "../data/portfolio";
import { useLanguage } from "../hooks/useLanguage";
import Footer from "../components/Footer";

function ProjectCard({ project, language }) {
  return (
    <a
      href={project.link || project.repo || "#"}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        background: "var(--bg-skill)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "1.6rem",
        textDecoration: "none",
        color: "var(--text)",
        transition: "border-color 0.2s, transform 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{project.title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.1rem" }}>
        {project.description?.[language] ?? project.description}
      </p>
      {project.tags && (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                background: "rgba(34, 211, 238, 0.1)",
                padding: "3px 10px",
                borderRadius: "999px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

function PlaceholderCard({ label }) {
  return (
    <div
      style={{
        border: "1.5px dashed var(--border)",
        borderRadius: "14px",
        padding: "1.6rem",
        minHeight: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-muted)",
        fontSize: "0.8rem",
        fontWeight: 600,
        fontFamily: "var(--font-mono)",
        textTransform: "lowercase",
      }}
    >
      {label}
    </div>
  );
}

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <div>
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "5rem 4rem" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            fontSize: "0.8rem",
            marginBottom: "0.8rem",
            textTransform: "lowercase",
          }}
        >
          {t.projects.eyebrow}
        </div>
        <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.8rem" }}>
          {t.projects.title}
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65, maxWidth: "640px", marginBottom: "3rem" }}>
          {t.projects.subtitle}
        </p>

        {projects.length > 0 ? (
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} language={language} />
            ))}
          </div>
        ) : (
          <div>
            <div
              style={{
                background: "var(--bg-skill)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "3rem 2rem",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.6rem" }}>
                {t.projects.emptyTitle}
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.6rem" }}>{t.projects.emptyText}</p>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "var(--accent)",
                  color: "#06262b",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                {t.projects.viewGithub}
              </a>
            </div>
            <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
              <PlaceholderCard label={t.projects.comingSoon} />
              <PlaceholderCard label={t.projects.comingSoon} />
              <PlaceholderCard label={t.projects.comingSoon} />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
