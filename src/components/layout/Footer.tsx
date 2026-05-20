import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container-narrow px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-lg font-semibold text-foreground tracking-tight">
              SantosLab
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-xs text-muted-foreground tracking-widest uppercase mb-4">{t.footer.navigate}</h4>
            <div className="flex flex-col gap-3">
              <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.services}
              </a>
              <a href="/#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.cases}
              </a>
              <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.about}
              </a>
              <Link to="/demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.footer.contactLabel}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-muted-foreground tracking-widest uppercase mb-4">{t.footer.connect}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/enterprise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Enterprise Systeme
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs text-muted-foreground tracking-widest uppercase mb-4">{t.footer.legal}</h4>
            <div className="flex flex-col gap-3">
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {currentYear} SantosLab. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
