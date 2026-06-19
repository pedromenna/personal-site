import { useState } from "react";
import { profile } from "../data/portfolio";
import { useLanguage } from "../hooks/useLanguage";
import Footer from "../components/Footer";

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Contact() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState(null);

  const socials = [
    { href: `mailto:${profile.socials.email}`, icon: <EmailIcon />, title: "E-mail" },
    { href: profile.socials.github, icon: <GithubIcon />, title: "GitHub" },
    { href: profile.socials.linkedin, icon: <LinkedinIcon />, title: "LinkedIn" },
    { href: profile.socials.instagram, icon: <InstagramIcon />, title: "Instagram" },
  ];

  const handleSend = () => {
    if (!email || !email.includes("@")) {
      setFeedback({ type: "error", text: t.contact.errorEmail });
      return;
    }
    if (!message.trim()) {
      setFeedback({ type: "error", text: t.contact.errorMessage });
      return;
    }
    window.location.href = `mailto:${profile.socials.email}?subject=${encodeURIComponent(
      t.contact.subject
    )}&body=${encodeURIComponent(message)}%0A%0A${encodeURIComponent(email)}`;
    setFeedback({ type: "success", text: t.contact.success });
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-skill)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "12px 16px",
    color: "var(--text)",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div>
      <section style={{ maxWidth: "700px", margin: "0 auto", padding: "5rem 4rem" }}>
        <div style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", fontSize: "0.8rem", marginBottom: "0.8rem", textTransform: "lowercase" }}>
          {t.contact.eyebrow}
        </div>
        <h2 style={{ fontSize: "2.4rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.8rem" }}>
          {t.contact.title}
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.65, maxWidth: "560px", marginBottom: "2rem" }}>
          {t.contact.intro}
        </p>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "14px", marginBottom: "3rem", flexWrap: "wrap" }}>
          {socials.map(({ href, icon, title }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={title}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "var(--bg-skill)",
                border: "1px solid var(--border)",
                transition: "color 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.8rem" }}>
          {t.contact.talk}
        </h3>

        {/* Form */}
        <div style={{ marginBottom: "1.4rem" }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            {t.contact.emailLabel}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.contact.emailPlaceholder}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>

        <div style={{ marginBottom: "1.4rem" }}>
          <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 500, color: "var(--text-muted)", marginBottom: "0.5rem" }}>
            {t.contact.messageLabel}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.contact.messagePlaceholder}
            rows={5}
            style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>

        <button
          onClick={handleSend}
          style={{
            background: "var(--accent)",
            color: "#06262b",
            border: "none",
            cursor: "pointer",
            padding: "13px 28px",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
            transition: "background 0.2s, transform 0.1s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent-light)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {t.contact.send}
        </button>

        {feedback && (
          <div
            style={{
              marginTop: "1rem",
              fontSize: "0.9rem",
              color: feedback.type === "error" ? "#f87171" : "var(--status-green)",
            }}
          >
            {feedback.text}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
