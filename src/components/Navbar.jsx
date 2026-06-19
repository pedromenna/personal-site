import { useLanguage } from "../hooks/useLanguage";

export default function Navbar({ currentPage, setPage }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--bg-nav)",
        borderBottom: "1px solid var(--border)",
        height: "64px",
        display: "flex",
        alignItems: "center",
        padding: "0 4rem",
        justifyContent: "space-between",
      }}
      className="navbar"
    >
      {/* Logo — estilo prompt de terminal */}
      <button
        onClick={() => setPage("home")}
        style={{
          fontWeight: 600,
          fontSize: "1.05rem",
          letterSpacing: "-0.02em",
          cursor: "pointer",
          color: "var(--text)",
          background: "none",
          border: "none",
          fontFamily: "var(--font-mono)",
          transition: "color 0.2s",
          whiteSpace: "nowrap",
          padding: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
      >
        <span style={{ color: "var(--accent)" }}>~/</span>pedro-menna
        <span className="cursor" />
      </button>

      {/* Nav pill — direita */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "var(--nav-pill)",
          borderRadius: "999px",
          padding: "6px 8px 6px 18px",
          gap: "4px",
        }}
      >
        <NavLink label={t.nav.home} onClick={() => setPage("home")} active={currentPage === "home"} />
        <NavLink label={t.nav.projects} onClick={() => setPage("projects")} active={currentPage === "projects"} />
        <NavLink label={t.nav.contact} onClick={() => setPage("contact")} active={currentPage === "contact"} />

        <div style={{ width: "1px", height: "16px", background: "var(--border)", margin: "0 8px" }} />

        <div
          style={{
            display: "flex",
            gap: "2px",
            background: "var(--bg-skill)",
            borderRadius: "999px",
            padding: "3px",
            border: "1px solid var(--border)",
          }}
        >
          <LangButton label="PT" active={language === "pt"} onClick={() => setLanguage("pt")} />
          <LangButton label="EN" active={language === "en"} onClick={() => setLanguage("en")} />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, onClick, active }) {
  return (
    <button
      style={{
        color: active ? "var(--accent)" : "var(--text-muted)",
        fontSize: "0.9rem",
        fontWeight: 500,
        transition: "color 0.2s",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "Inter, sans-serif",
        padding: "6px 12px",
        textTransform: "lowercase",
      }}
      onClick={onClick}
      onMouseEnter={(e) => !active && (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => !active && (e.currentTarget.style.color = "var(--text-muted)")}
    >
      {label}
    </button>
  );
}

function LangButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? "var(--accent)" : "transparent",
        color: active ? "#06262b" : "var(--text-muted)",
        border: "none",
        borderRadius: "999px",
        padding: "4px 11px",
        fontSize: "0.74rem",
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        letterSpacing: "0.02em",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      {label}
    </button>
  );
}
