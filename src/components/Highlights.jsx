import { useLanguage } from "../hooks/useLanguage";

const items = [
  { icon: "☁️", key: "cloud", chips: ["#FF9900", "#0078D4", "#C74634"] },
  { icon: "🎓", key: "certs" },
  { icon: "⚙️", key: "iac" },
  { icon: "🚀", key: "cicd" },
];

export default function Highlights() {
  const { t } = useLanguage();

  return (
    <div
      className="highlights-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 4rem 4rem",
      }}
    >
      {items.map(({ icon, key, chips }) => (
        <div
          key={key}
          style={{
            background: "var(--bg-skill)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "1.3rem 1rem",
            textAlign: "center",
            transition: "border-color 0.2s, transform 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent-dim)";
            e.currentTarget.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{icon}</div>
          <div style={{ fontWeight: 700, fontSize: "0.84rem", marginBottom: "0.25rem" }}>
            {t.highlights[key]}
          </div>
          <div style={{ color: "var(--text-muted)", fontSize: "0.76rem", fontFamily: "var(--font-mono)" }}>
            {t.highlights[key + "Value"]}
          </div>
          {chips && (
            <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginTop: "8px" }}>
              {chips.map((c) => (
                <span key={c} style={{ width: "14px", height: "3px", borderRadius: "2px", background: c, display: "inline-block" }} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
