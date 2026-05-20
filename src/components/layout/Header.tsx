import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, setLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.services, href: "/#produkte" },
    { label: t.nav.cases, href: "/#anwendungen" },
    { label: t.nav.approach, href: "/#branchen" },
    { label: "Robotik", href: "/robotik" },
    { label: t.nav.about, href: "/#unternehmen" },
  ];

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-[1280px]">
      <div
        className={`glass-dark transition-all duration-300 ${
          isOpen ? "rounded-3xl" : "rounded-full"
        } ${scrolled ? "shadow-2xl" : ""}`}
      >
        <div className="flex items-center justify-between gap-4 md:gap-6 pl-5 md:pl-7 pr-3 py-2.5">
          <Link to="/" className="display text-[19px] font-bold text-white whitespace-nowrap">
            Santos<span style={{ color: "hsl(var(--teal))" }}>Lab</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13.5px] font-normal text-white/65 hover:text-white hover:bg-white/10 px-3.5 py-2 rounded-full transition-all whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="hidden md:block text-[13px] font-medium text-white/40 hover:text-white transition-colors"
            >
              <span className={lang === "de" ? "text-white" : ""}>DE</span>
              <span className="mx-1">/</span>
              <span className={lang === "en" ? "text-white" : ""}>EN</span>
            </button>

            <Link
              to="/kontakt"
              className="hidden sm:inline-flex bg-white text-[#0f0f0f] text-[13.5px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {t.nav.cta}
            </Link>

            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden px-6 pb-6 pt-2 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-base text-white/75 hover:text-white py-2.5"
                  onClick={() => setIsOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { setLang(lang === "en" ? "de" : "en"); setIsOpen(false); }}
                className="text-base text-white/60 py-2.5 text-left"
              >
                {lang === "en" ? "🇩🇪 Deutsch" : "🇬🇧 English"}
              </button>
              <Link
                to="/kontakt"
                onClick={() => setIsOpen(false)}
                className="mt-3 bg-white text-[#0f0f0f] text-center text-sm font-medium py-3 rounded-full"
              >
                {t.nav.cta}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
