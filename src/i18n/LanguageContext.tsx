import { createContext, useContext, useState, ReactNode } from "react";
import { translations, type Language, type Translations } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("santoslab-lang");
    return (saved === "de" || saved === "en") ? saved : "en";
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("santoslab-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
