import { createContext, useContext, useState, ReactNode } from "react";
import { translations, type Language, type Translations } from "@/i18n/translations";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Toggle is hidden until the full site is bilingual — force DE for all visitors.
  const [lang, setLang] = useState<Language>("de");

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
