import { profile } from "../data/portfolio";
import { useLanguage } from "../hooks/useLanguage";

export default function StatusBar() {
  const { t } = useLanguage();
  const available = profile.openToWork;

  return (
    <div
      className="status-bar"
      style={{
        background: "var(--bg-terminal)",
        borderBottom: "1px solid var(--border)",
        padding: "7px 4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        color: "var(--text-muted)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span
          className={available ? "pulse-dot" : ""}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: available ? "var(--status-green)" : "var(--text-muted)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span style={{ color: available ? "var(--status-green)" : "var(--text-muted)" }}>
          {available ? t.statusBar.available : t.statusBar.unavailable}
        </span>
      </div>
      <div style={{ opacity: 0.8 }}>{t.statusBar.region}</div>
    </div>
  );
}
