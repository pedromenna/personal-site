import ProfileCard from "../components/ProfileCard";
import SkillsGrid from "../components/SkillsGrid";
import Certifications from "../components/Certifications";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer";
import { useLanguage } from "../hooks/useLanguage";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { typingWords, profile } from "../data/portfolio";

export default function Home({ setPage }) {
  const { t } = useLanguage();
  const typed = useTypingAnimation(typingWords, true);

  const openResume = () => {
    if (profile.resumeUrl) {
      window.open(profile.resumeUrl, "_blank");
    } else {
      alert(
        "Adicione o link do seu currículo em src/data/portfolio.js (campo resumeUrl)."
      );
    }
  };

  return (
    <div>
      {/* HERO */}
      <div
        className="hero-inner"
        style={{
          minHeight: "calc(100vh - 105px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            padding: "0 4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4rem",
          }}
          className="hero-row"
        >
          {/* Texto esquerda */}
          <div style={{ flex: "0 0 auto", maxWidth: "540px" }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 4.6rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "0.6rem",
              }}
            >
              Pedro Menna
            </h1>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent)",
                fontSize: "1rem",
                marginBottom: "1.6rem",
              }}
            >
              {t.hero.tagline}
            </div>

            {/* Terminal window — elemento de assinatura */}
            <div className="terminal-window" style={{ marginBottom: "1.8rem" }}>
              <div className="terminal-titlebar">
                <span className="terminal-dot" style={{ background: "#ff5f56" }} />
                <span className="terminal-dot" style={{ background: "#ffbd2e" }} />
                <span className="terminal-dot" style={{ background: "#27c93f" }} />
                <span className="terminal-path">pedro@devops:~</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span> {t.hero.whoamiLabel}
                </div>
                <div className="terminal-output">{t.hero.whoamiValue}</div>
                <div className="terminal-line" style={{ marginTop: "10px" }}>
                  <span className="terminal-prompt">$</span> {t.hero.provisioningLabel}
                </div>
                <div className="terminal-output">
                  {typed}
                  <span className="cursor" />
                </div>
              </div>
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.97rem",
                marginBottom: "2.2rem",
                lineHeight: 1.65,
              }}
            >
              {t.hero.description}
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Btn variant="primary" onClick={() => setPage("projects")}>
                {t.hero.ctaProjects}
              </Btn>
              <Btn variant="secondary" onClick={openResume}>
                {t.hero.ctaResume}
              </Btn>
              <Btn variant="secondary" onClick={() => setPage("contact")}>
                {t.hero.ctaContact}
              </Btn>
            </div>
          </div>

          {/* Card direita */}
          <ProfileCard />
        </div>
      </div>

      <Highlights />

      {/* ABOUT */}
      <section style={{ maxWidth: "700px", margin: "0 auto", padding: "1rem 4rem 5rem" }}>
        <div
          style={{
            background: "var(--bg-skill)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "2rem",
          }}
        >
          <h3 style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{t.about.greeting}</h3>
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            {t.about.eyebrow}
          </div>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
            {t.about.paragraph}
          </p>
        </div>
      </section>

      <SkillsGrid />
      <Certifications />

      {/* CTA para a página de projetos */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 4rem 5rem" }}>
        <div
          style={{
            background: "linear-gradient(135deg, var(--accent-dim), var(--bg-skill))",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.6rem" }}>
            {t.cta.title}
          </h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.6rem" }}>{t.cta.text}</p>
          <Btn variant="primary" onClick={() => setPage("projects")}>
            {t.cta.button}
          </Btn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Btn({ children, onClick, variant }) {
  const isPrimary = variant === "primary";

  const base = {
    padding: "13px 26px",
    borderRadius: "10px",
    fontSize: "0.95rem",
    fontWeight: 700,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    transition: "background 0.2s, transform 0.1s, border-color 0.2s",
  };

  const styles = isPrimary
    ? { ...base, background: "var(--accent)", color: "#06262b", border: "none" }
    : { ...base, background: "transparent", color: "var(--text)", border: "1.5px solid var(--border)" };

  return (
    <button
      style={styles}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        if (isPrimary) e.currentTarget.style.background = "var(--accent-light)";
        else e.currentTarget.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        if (isPrimary) e.currentTarget.style.background = "var(--accent)";
        else e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {children}
    </button>
  );
}
