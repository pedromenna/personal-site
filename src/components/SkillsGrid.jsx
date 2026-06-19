import { skills } from "../data/portfolio";
import { useLanguage } from "../hooks/useLanguage";

function SkillCard({ title, items }) {
  return (
    <div
      style={{
        background: "var(--bg-skill)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.5rem",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-dim)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>{title}</h3>
      {items.map((item) => (
        <div
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "7px 0",
            color: "var(--text-muted)",
            fontSize: "0.9rem",
          }}
        >
          <span
            style={{
              color: "var(--accent)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            &gt;_
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}

export default function SkillsGrid() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" style={{ padding: "1rem 4rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div
        style={{
          fontSize: "1.7rem",
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "2.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        <span style={{ width: 10, height: 10, background: "var(--accent)", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
        {t.skills.title}
      </div>
      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {skills.map((skill) => (
          <SkillCard key={skill.title.pt} title={skill.title[language]} items={skill.items} />
        ))}
      </div>
    </section>
  );
}
