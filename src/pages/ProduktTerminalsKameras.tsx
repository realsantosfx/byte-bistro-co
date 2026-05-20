import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/page-terminals-hero.jpg";
import cardTerminals from "@/assets/site/card-terminals.jpg";
import reserveHardware from "@/assets/site/reserve-hardware.jpg";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const modules = [
  {
    tag: "Arbeitsplatz",
    title: "Touch-Terminals an jeder Station",
    desc: "Robuste Industrie-Displays am Lagerplatz, am Packtisch, in der Werkstatt. Eine Oberfläche, die zum Arbeiten gebaut ist — nicht zum Erklären.",
  },
  {
    tag: "Erfassung",
    title: "Scanner, Waagen & Sensoren",
    desc: "Barcode- und QR-Scanner, Industriewaagen, Temperatur- und Bewegungssensoren — direkt an die Operative Software angebunden, ohne Zwischenschritte.",
  },
  {
    tag: "Vision",
    title: "Kameras mit lokaler KI",
    desc: "Industrie-Kameras erfassen Wareneingang, prüfen Etiketten und Qualität. Die Auswertung läuft lokal — Bilder bleiben im Haus.",
  },
  {
    tag: "Anzeige",
    title: "Pick-by-Light & Großbild-Displays",
    desc: "Wege werden sichtbar, Aufträge laufen mit. Großbild-Displays zeigen Schichtstatus, Kommissionierlisten und Engpässe in Echtzeit.",
  },
];

const facts = [
  { n: "1", em: "×", l: "Anbindung —\ndann läuft es" },
  { n: "0", em: "", l: "Zettel- oder\nExcel-Umweg" },
  { n: "100", em: "%", l: "Daten landen direkt\nim System" },
  { n: "", em: "24/7", l: "Industrie-Hardware,\ndie das aushält" },
];

const features = [
  "Hardware-Auswahl passend zum Betrieb — kein One-Size-Fits-All",
  "Robuste Industrie-Geräte für Lager, Produktion und Außeneinsatz",
  "Vorinstalliert, vorkonfiguriert, fertig zum Einsatz",
  "Wartung & Ersatzteile aus Deutschland — kein Reseller-Pingpong",
  "Volle Integration in Operative Software und lokale KI",
  "Skalierbar von einer Station bis zum kompletten Standort",
];

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[640px] flex items-end">
          <img
            src={heroImg}
            alt="Terminal, Kamera und Scanner in einer Lagerumgebung"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,rgba(8,10,18,0.95) 0%,rgba(8,10,18,0.75) 45%,rgba(8,10,18,0.4) 100%), linear-gradient(to top,rgba(8,10,18,0.92) 0%,rgba(8,10,18,0.2) 60%,rgba(8,10,18,0.5) 100%)",
            }}
          />
          <div
            className="hidden md:block absolute right-[8%] bottom-[20%] w-[320px] h-[320px] rounded-full blur-[90px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(80,200,100,0.25) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pb-16 md:pb-20 max-w-[760px] container-shell w-full">
            <div className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em] mb-6">
              Produkt — Physical Layer
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              Terminals &<br />
              <span style={{ color: "hsl(var(--teal))" }}>Kameras</span><br />
              direkt verbunden
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[520px]">
              Hardware, die deine Software in die echte Welt bringt. Touch-Terminals,
              Scanner, Sensoren und Kameras — vorkonfiguriert und integriert in einem System.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Demo anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#module"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors"
              >
                Komponenten
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              Software ist nichts wert, wenn{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>niemand sie benutzt</em>
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Genau deshalb gehört Hardware bei uns dazu. Ein Terminal an jeder
                Arbeitsstation, Scanner in jeder Hand, Kameras, die mitsehen — damit
                Daten dort entstehen, wo gearbeitet wird, und nicht erst hinterher im Büro.
              </p>
              <p className="bd">
                Wir wählen die Geräte aus, konfigurieren sie und installieren sie vor Ort.
                Was bei dir ankommt, läuft sofort — angebunden an die Operative Software
                und lokale KI.
              </p>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section id="module" className="pb-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-3.5">
            {modules.map((m) => (
              <div
                key={m.title}
                className="relative overflow-hidden rounded-[18px] aspect-[4/3] hover-lift"
                style={{ background: "linear-gradient(145deg,#0d1f0d 0%,#0f3520 50%,#0a2818 100%)" }}
              >
                <img src={cardTerminals} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-45" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.45) 0%,rgba(8,10,16,0.45) 40%,rgba(8,10,16,0.92) 100%)" }} />
                <div
                  className="absolute w-[220px] h-[220px] rounded-full blur-[70px] pointer-events-none top-[25%] left-[20%]"
                  style={{ background: "rgba(80,200,100,.22)" }}
                />
                <div className="absolute top-5 left-6 text-[11px] font-medium text-white/45 uppercase tracking-[0.1em]">
                  {m.tag}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="display text-[26px] md:text-[28px] font-bold text-white leading-tight mb-2">{m.title}</h3>
                  <p className="text-[13.5px] text-white/60 leading-snug">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NUMBERS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border container-shell">
          {facts.map((x, i) => (
            <div key={i} className={`px-8 md:px-12 py-10 ${i < 3 ? "md:border-r border-border" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""}`}>
              <div className="display text-[44px] md:text-[52px] font-bold leading-none mb-1.5">
                {x.n}<em className="not-italic" style={{ color: "hsl(var(--teal))" }}>{x.em}</em>
              </div>
              <div className="text-[13.5px] text-muted-foreground whitespace-pre-line leading-snug">{x.l}</div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Hardware, die für{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>echte Arbeit</em>
              {" "}gebaut ist
            </h2>
            <p className="bd pt-1.5">
              Kein Büro-Equipment im Lager. Kein Consumer-Tablet an der Maschine.
              Wir bringen Geräte mit, die mit Staub, Stoß und Schicht umgehen können —
              und die deine Software endlich nahtlos mit der Realität verbinden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-border pb-5">
                <span className="display text-[18px] font-bold text-muted-foreground/60 mt-0.5 min-w-[28px]">
                  0{i + 1}
                </span>
                <span className="text-[15.5px] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATION STRIP */}
        <section className="pb-24 section-x container-shell">
          <div
            className="relative rounded-[18px] overflow-hidden min-h-[360px] grid md:grid-cols-2 gap-0"
            style={{ background: "linear-gradient(135deg,#0d1f0d 0%,#0f3520 45%,#0a2818 100%)" }}
          >
            <img src={reserveHardware} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(8,12,22,0.92) 35%,rgba(8,12,22,0.4) 100%)" }} />
            <div className="relative z-[2] p-10 md:p-14">
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em] mb-5">
                Im System
              </div>
              <h3 className="display text-white text-[28px] md:text-[34px] font-bold leading-tight mb-4">
                Terminals & Kameras sind nicht nur Geräte.
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                Sie sind die Schnittstelle zwischen Menschen, Software und Maschinen.
                Was dein Team scannt, was Kameras erkennen und was Sensoren messen —
                alles fließt in dasselbe System, in Echtzeit.
              </p>
            </div>
            <div className="relative z-[2] p-10 md:p-14 flex flex-col justify-center gap-3">
              {[
                { l: "Operative Software", d: "Das System hinter jedem Terminal", to: "/produkte/operative-software" },
                { l: "Lokale KI", d: "Verarbeitet, was Kameras sehen", to: "/produkte/lokale-ki" },
                { l: "Autonomer Roboter", d: "Bekommt Aufträge direkt von den Stationen", to: "/produkte/autonomer-roboter" },
                { l: "SantosOS", d: "Das Ökosystem hinter allem", to: "/santosos" },
              ].map((x) => (
                <Link
                  key={x.l}
                  to={x.to}
                  className="flex items-center justify-between border-t border-white/10 pt-3 group hover:text-white"
                >
                  <div>
                    <div className="text-white text-[15px] font-medium">{x.l}</div>
                    <div className="text-white/45 text-[12.5px]">{x.d}</div>
                  </div>
                  <span className="w-[30px] h-[30px] bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="section-x pb-20 container-shell">
          <div className="relative rounded-[18px] overflow-hidden p-10 md:p-16" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
            <div
              className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }}
            />
            <div className="relative z-[2] max-w-[640px]">
              <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.1 }}>
                Wir bringen die richtige Hardware in deinen Betrieb.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-9">
                Sag uns, wie deine Stationen heute aussehen — wir schlagen vor, welche
                Terminals, Scanner und Kameras dort wirklich Sinn machen.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Kostenloses Erstgespräch
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Page;
