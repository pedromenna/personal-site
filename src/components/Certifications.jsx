import { certifications } from "../data/portfolio";
import { useLanguage } from "../hooks/useLanguage";

function CertItem({ cert }) {
  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "var(--bg-skill)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "18px",
        textDecoration: "none",
        color: "var(--text)",
        transition: "border-color 0.2s, transform 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      <img
        alt={cert.name}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "10px",
          flexShrink: 0,
          objectFit: "contain",
          background: "#fff",
          padding: "4px",
        }}
        onError={(e) => (e.target.style.display = "none")}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "4px" }}>{cert.name}</div>
        <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{cert.issuer}</div>
      </div>
      <span style={{ color: "var(--accent)", fontSize: "1.2rem", flexShrink: 0, opacity: 0.7 }}>↗</span>
    </a>
  );
}

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certs-section" style={{ padding: "1rem 4rem 5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div
        style={{
          fontSize: "1.7rem",
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "0.4rem",
          letterSpacing: "-0.02em",
        }}
      >
        <span style={{ width: 10, height: 10, background: "var(--accent)", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
        {t.certifications.title}
      </div>
      <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontFamily: "var(--font-mono)", marginBottom: "2rem" }}>
        {t.certifications.eyebrow}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {certifications.map((cert) => (
          <CertItem key={cert.name} cert={cert} />
        ))}
      </div>
    </section>
  );
}
