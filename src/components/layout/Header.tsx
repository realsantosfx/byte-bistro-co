import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/SantosLab_favi.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, t, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.cases, href: "/#cases" },
    { label: t.nav.approach, href: "/#approach" },
    { label: t.nav.about, href: "/#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`px-6 md:px-8 mx-auto max-w-7xl ${
          isMenuOpen
            ? "rounded-3xl bg-background/70 backdrop-blur-xl border border-border/50 shadow-lg"
            : `transition-all duration-500 ${isScrolled
              ? "rounded-full bg-background/70 backdrop-blur-xl border border-border/50 shadow-lg"
              : "rounded-full bg-background/40 backdrop-blur-md border border-transparent"}`
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-foreground tracking-tight">
            <img src={logo} alt="SantosLab Logo" className="h-6 w-6" />
            SantosLab
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 px-2 py-1 rounded-full border border-border hover:border-foreground/20"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>


            <Link to="/demo">
              <Button variant="apple" size="sm">
                {t.nav.cta}
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-up rounded-b-3xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => { setLang(lang === "en" ? "de" : "en"); setIsMenuOpen(false); }}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 text-left"
              >
                {lang === "en" ? "🇩🇪 Deutsch" : "🇬🇧 English"}
              </button>

              <div className="flex flex-col gap-3 mt-4">
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="apple" size="lg" className="w-full group">
                    {t.nav.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center mt-1">{t.nav.mobileMicrocopy}</p>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
