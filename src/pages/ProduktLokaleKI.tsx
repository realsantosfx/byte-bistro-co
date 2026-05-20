import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/page-ki-hero.jpg";
import cardKi from "@/assets/site/card-ki.jpg";
import reserveKi from "@/assets/site/reserve-ki.jpg";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const modules = [
  {
    tag: "Vision",
    title: "Bilderkennung am Wareneingang",
    desc: "Kameras zählen, prüfen und kategorisieren — Paletten, Etiketten, Schäden. Ohne dass ein Bild jemals den Betrieb verlässt.",
  },
  {
    tag: "Sprache",
    title: "Sprach- & Textverarbeitung",
    desc: "Anfragen, Mails und Telefonate werden klassifiziert, zusammengefasst und vorbereitet. Auf deiner eigenen Hardware.",
  },
  {
    tag: "Vorhersage",
    title: "Bedarf, Routen & Engpässe",
    desc: "Modelle lernen aus deinem Betrieb — was bestellt wird, was knapp wird, welche Strecke effizient ist. Mit echten Daten, nicht Hochrechnungen.",
  },
  {
    tag: "Assistenz",
    title: "Operativer KI-Assistent",
    desc: "Mitarbeiter fragen in natürlicher Sprache nach Beständen, Aufträgen oder Auswertungen. Antworten kommen aus deinem System.",
  },
];

const facts = [
  { n: "0", em: "", l: "Daten verlassen\ndeinen Betrieb" },
  { n: "100", em: "%", l: "Modelle laufen\non-premise" },
  { n: "~", em: "ms", l: "Antwortzeiten\nim Millisekundenbereich" },
  { n: "", em: "DSGVO", l: "konform per Architektur,\nnicht per Vertrag" },
];

const features = [
  "Keine Cloud, keine Drittanbieter — alles bleibt im Haus",
  "Modelle werden für deinen Use Case feinjustiert, nicht generisch eingesetzt",
  "Updates und Modellwechsel ohne Vendor-Lock-in",
  "Voll integriert in Operative Software, Terminals und Roboter",
  "Energieeffiziente Hardware ab Mini-Server bis Edge-Box",
  "Transparente Entscheidungen — was die KI sagt, ist nachvollziehbar",
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
            alt="Lokaler KI-Server mit Neural-Network-Visualisierung"
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
            style={{ background: "radial-gradient(circle,rgba(47,184,198,0.32) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pb-16 md:pb-20 max-w-[760px] container-shell w-full">
            <div className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em] mb-6">
              Produkt — KI Schicht
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              Lokale<br />
              <span style={{ color: "hsl(var(--teal))" }}>KI</span><br />
              ohne Cloud
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[520px]">
              Intelligenz, die in deinem Betrieb läuft — nicht auf fremden Servern.
              Sehen, lesen, vorhersagen und entscheiden, ohne dass ein Bit das Haus verlässt.
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
                Module ansehen
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              KI, die deinen{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Betrieb versteht</em>
              {" "}— nicht den Markt
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Cloud-KI macht aus deinen Daten Trainingsmaterial für andere. Lokale KI
                dreht das um: Deine Daten bleiben bei dir, das Modell lernt deinen Betrieb
                und antwortet aus deinem Kontext — nicht aus dem allgemeinen Internet.
              </p>
              <p className="bd">
                Wir wählen Modelle aus, betreiben sie auf passender Hardware und integrieren
                sie direkt in die Operative Software. Das Ergebnis ist KI, die so selbstverständlich
                im Tagesgeschäft mitläuft wie ein zusätzliches Teammitglied.
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
                style={{ background: "linear-gradient(145deg,#0a1520 0%,#0f3040 50%,#083050 100%)" }}
              >
                <img src={cardKi} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-45" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.45) 0%,rgba(8,10,16,0.45) 40%,rgba(8,10,16,0.92) 100%)" }} />
                <div
                  className="absolute w-[220px] h-[220px] rounded-full blur-[70px] pointer-events-none bottom-[20%] right-[20%]"
                  style={{ background: "rgba(80,160,255,.24)" }}
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
              KI mit{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Hausverstand</em>
            </h2>
            <p className="bd pt-1.5">
              Wir setzen KI dort ein, wo sie echten Hebel hat — und lassen sie weg,
              wo sie nur Buzzword ist. Das macht den Unterschied zwischen einem Hype-Tool
              und einem operativen Produktionsfaktor.
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
            style={{ background: "linear-gradient(135deg,#0a1428 0%,#0c2a4a 45%,#06182e 100%)" }}
          >
            <img src={reserveKi} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(8,12,22,0.92) 35%,rgba(8,12,22,0.4) 100%)" }} />
            <div className="relative z-[2] p-10 md:p-14">
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em] mb-5">
                Im System
              </div>
              <h3 className="display text-white text-[28px] md:text-[34px] font-bold leading-tight mb-4">
                Lokale KI verbindet sich mit allem.
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                Sie liest, was Kameras sehen, bewertet, was Terminals erfassen, und
                steuert, was der Rover als Nächstes tut. Eine Intelligenzschicht über
                deinem gesamten Betrieb.
              </p>
            </div>
            <div className="relative z-[2] p-10 md:p-14 flex flex-col justify-center gap-3">
              {[
                { l: "Operative Software", d: "Daten- & Prozesskontext für die KI", to: "/produkte/operative-software" },
                { l: "Terminals & Kameras", d: "Live-Input aus dem Betrieb", to: "/produkte/terminals-kameras" },
                { l: "Autonomer Roboter", d: "KI entscheidet, der Rover bewegt", to: "/produkte/autonomer-roboter" },
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
                Finde heraus, wo KI in deinem Betrieb echten Hebel hat.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-9">
                Wir prüfen deine Prozesse, zeigen dir, was lokal sinnvoll automatisierbar ist,
                und schlagen einen ehrlichen Pilot-Use-Case vor — kein KI-Theater.
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
