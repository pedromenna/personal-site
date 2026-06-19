import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      style={{
        textAlign: "center",
        padding: "2rem",
        color: "var(--text-muted)",
        fontSize: "0.78rem",
        fontFamily: "var(--font-mono)",
        borderTop: "1px solid var(--border)",
        marginTop: "3rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {t.footer} · {new Date().getFullYear()}
    </footer>
  );
}
