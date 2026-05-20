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
        className={`transition-all duration-300 ${
          isOpen
            ? "rounded-[28px] bg-[#0a0f18] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            : `rounded-full glass-dark ${scrolled ? "shadow-2xl" : ""}`
        }`}
      >
        <div className="flex items-center justify-between gap-4 md:gap-6 pl-5 md:pl-7 pr-3 py-2.5">
          <Link to="/" className="display text-[19px] font-bold text-white whitespace-nowrap" onClick={() => setIsOpen(false)}>
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

            {!isOpen && (
              <Link
                to="/kontakt"
                className="hidden sm:inline-flex bg-white text-[#0f0f0f] text-[13.5px] font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {t.nav.cta}
              </Link>
            )}

            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden px-6 pb-6 pt-2 animate-fade-up">
            <div className="text-[10.5px] font-medium text-white/35 uppercase tracking-[0.18em] py-3 border-t border-white/10">
              Navigation
            </div>
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center justify-between text-[17px] font-medium text-white/85 hover:text-white py-4 border-b border-white/[0.06] group"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{l.label}</span>
                  <span className="text-white/25 group-hover:text-white/60 transition-colors text-[18px] leading-none">→</span>
                </a>
              ))}
            </nav>


            <Link
              to="/kontakt"
              onClick={() => setIsOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 bg-white text-[#0f0f0f] text-center text-[14px] font-medium py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              {t.nav.cta}
              <span className="text-[16px] leading-none">→</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
