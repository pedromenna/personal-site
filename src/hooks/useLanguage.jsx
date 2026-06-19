import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "pt";
    return window.localStorage.getItem("portfolio-lang") || "pt";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-lang", language);
  }, [language]);

  const setLanguage = (lang) => setLanguageState(lang);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
