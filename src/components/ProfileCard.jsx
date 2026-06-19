import { profile } from "../data/portfolio";
import { useLanguage } from "../hooks/useLanguage";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SocialIcon = ({ href, title, children }) => (
  <a
    href={href}
    target={href.startsWith("mailto") ? undefined : "_blank"}
    rel="noopener noreferrer"
    title={title}
    style={{
      color: "var(--text-muted)",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      transition: "color 0.2s, transform 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = "var(--accent)";
      e.currentTarget.style.transform = "scale(1.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "var(--text-muted)";
      e.currentTarget.style.transform = "scale(1)";
    }}
  >
    {children}
  </a>
);

export default function ProfileCard() {
  const { t } = useLanguage();

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "2.4rem 2rem",
        minWidth: "250px",
        textAlign: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "78px",
          height: "78px",
          borderRadius: "18px",
          background: "linear-gradient(135deg, var(--accent), var(--accent-dim))",
          margin: "0 auto 1.1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#06262b",
          fontFamily: "var(--font-mono)",
        }}
      >
        PM
      </div>

      {profile.openToWork && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(74, 222, 128, 0.1)",
            color: "var(--status-green)",
            fontSize: "0.68rem",
            fontWeight: 600,
            fontFamily: "var(--font-mono)",
            padding: "4px 10px",
            borderRadius: "999px",
            marginBottom: "0.9rem",
          }}
        >
          <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--status-green)", display: "inline-block" }} />
          {t.statusBar.available}
        </div>
      )}

      <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" }}>{profile.handle}</div>
      <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
        📍 {profile.location}
      </div>
      <div style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "1.5rem", fontFamily: "var(--font-mono)" }}>
        {t.hero.tagline}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        <SocialIcon href={`mailto:${profile.socials.email}`} title="E-mail">
          <EmailIcon />
        </SocialIcon>
        <SocialIcon href={profile.socials.github} title="GitHub">
          <GithubIcon />
        </SocialIcon>
        <SocialIcon href={profile.socials.linkedin} title="LinkedIn">
          <LinkedinIcon />
        </SocialIcon>
        <SocialIcon href={profile.socials.instagram} title="Instagram">
          <InstagramIcon />
        </SocialIcon>
      </div>
    </div>
  );
}
