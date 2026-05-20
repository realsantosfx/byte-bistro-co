import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f0f] text-white px-6 md:px-14 pt-16 pb-8">
      <div className="container-shell">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="display text-[20px] font-bold">
              Santos<span style={{ color: "hsl(var(--teal))" }}>Lab</span>
            </Link>
          </div>

          <div>
            <h4 className="display text-sm font-semibold mb-4">Produkte</h4>
            <ul className="space-y-3">
              {["Operative Software", "Lokale KI", "Hardware", "Autonomer Roboter", "SantosOS"].map((i) => (
                <li key={i}><a href="#produkte" className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="display text-sm font-semibold mb-4">Anwendungen</h4>
            <ul className="space-y-3">
              {[
                { l: "Pick & Pack", to: "/anwendung/pick-and-pack" },
                { l: "Wareneingang", to: "/anwendung/wareneingang" },
                { l: "Qualitätskontrolle", to: "/anwendung/qualitaetskontrolle" },
                { l: "Inventur", to: "/anwendung/inventur" },
                { l: "Versandkontrolle", to: "/anwendung/versandkontrolle" },
              ].map((i) => (
                <li key={i.l}><a href={i.to} className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">{i.l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="display text-sm font-semibold mb-4">Branchen</h4>
            <ul className="space-y-3">
              {[
                { l: "Handel & Distribution", to: "/branche/handel-distribution" },
                { l: "Produktion", to: "/branche/produktion" },
                { l: "Logistik", to: "/branche/logistik" },
                { l: "Sanierung", to: "/branche/sanierung" },
              ].map((i) => (
                <li key={i.l}><Link to={i.to} className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="display text-sm font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              <li><Link to="/enterprise" className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">Enterprise</Link></li>
              <li><Link to="/projekte" className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">Referenzen</Link></li>
              <li><Link to="/ki-beratung" className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">KI Beratung</Link></li>
              <li><Link to="/kontakt" className="text-[13.5px] text-white/40 hover:text-white/80 transition-colors">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} SantosLab — Johannes Santos. Dietmannsried, Germany.
          </p>
          <ul className="flex gap-5">
            <li><Link to="/impressum" className="text-xs text-white/30 hover:text-white/60 transition-colors">Impressum</Link></li>
            <li><Link to="/datenschutz" className="text-xs text-white/30 hover:text-white/60 transition-colors">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
