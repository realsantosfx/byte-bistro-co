import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/page-software-hero.jpg";
import cardSoftware from "@/assets/site/card-software.jpg";
import reserveSoftware from "@/assets/site/reserve-software.jpg";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const modules = [
  {
    tag: "Auftragszentrale",
    title: "Aufträge & Workflow",
    desc: "Von Eingang bis Auslieferung. Aufträge, Status, Verantwortlichkeiten — alles in einem Strom statt verteilt über Excel, Mail und Whiteboard.",
  },
  {
    tag: "Lager Core",
    title: "Bestand & Lagerführung",
    desc: "Echtzeit-Bestand, Wareneingang per Scan oder Kamera, Inventur ohne Schichtbetrieb. Jeder Stellplatz ist bekannt.",
  },
  {
    tag: "Vertrieb",
    title: "Angebote, Kunden & Pipeline",
    desc: "CRM, Angebotsschreiber und Auftragserfassung wachsen aus einem Datenmodell. Keine doppelten Kundenkarten mehr.",
  },
  {
    tag: "Management",
    title: "KPIs & Auswertungen",
    desc: "Dashboards, die wirklich gelesen werden. Live-Zahlen für Geschäftsleitung, Schichtleiter und Vertrieb — auf jedem Terminal.",
  },
];

const facts = [
  { n: "1", em: "×", l: "Quelle der Wahrheit\nstatt sieben Systeme" },
  { n: "100", em: "%", l: "On-Premise möglich\n— Daten bleiben bei dir" },
  { n: "0", em: "", l: "Doppelte Eingaben\nim Standardprozess" },
  { n: "", em: "API", l: "Direkt verbunden mit\nKI, Hardware & Rover" },
];

const features = [
  "Rollen & Rechte pro Standort, Abteilung und Person",
  "Audit-Trail — jede Bestandsbewegung ist nachvollziehbar",
  "Terminal-, Tablet- und Desktop-Oberflächen aus einem Code",
  "Schnittstellen zu DATEV, Lexware, SAP und gängigen Shop-Systemen",
  "Offlinetauglich — kritische Prozesse laufen ohne Internet weiter",
  "Maßgeschneidert pro Betrieb statt Konfigurationsdschungel",
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
            alt="Operative Software Leitstand mit Dashboards"
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
              Produkt — Software Core
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              Operative<br />
              <span style={{ color: "hsl(var(--teal))" }}>Software</span><br />
              für den Betrieb
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[520px]">
              Das Gehirn deines Unternehmens. Lager, Vertrieb, Aufträge und Management
              — verbunden in einem einzigen System, das mit deinem Betrieb wächst.
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
              Ein System, das den{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>gesamten Tagesablauf</em>
              {" "}trägt
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Operative Software ist keine Sammlung von Tools. Sie ist das Fundament,
                auf dem Lagerarbeit, Vertrieb, Buchhaltung und Geschäftsleitung dieselbe
                Sprache sprechen — in Echtzeit, mit denselben Zahlen, denselben Aufträgen
                und denselben Verantwortlichkeiten.
              </p>
              <p className="bd">
                Wir bauen sie maßgeschneidert auf deinen Betrieb. Keine Software, in die
                du dich hineinquetschen musst — Software, die deinen Prozessen folgt.
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
                style={{ background: "linear-gradient(145deg,#111827 0%,#1e3a5f 50%,#0f2a4a 100%)" }}
              >
                <img src={cardSoftware} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-45" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.45) 0%,rgba(8,10,16,0.45) 40%,rgba(8,10,16,0.92) 100%)" }} />
                <div
                  className="absolute w-[220px] h-[220px] rounded-full blur-[70px] pointer-events-none top-[15%] right-[5%]"
                  style={{ background: "rgba(47,184,198,.28)" }}
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
              Gebaut für den{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>echten Betrieb</em>
            </h2>
            <p className="bd pt-1.5">
              Wir wissen, wie der Tag im Lager, am Telefon und in der Buchhaltung aussieht.
              Diese Funktionen entstehen aus echten Anforderungen, nicht aus Feature-Listen.
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
            style={{ background: "linear-gradient(135deg,#0c1726 0%,#0d2540 45%,#0a1a30 100%)" }}
          >
            <img src={reserveSoftware} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(8,12,22,0.92) 35%,rgba(8,12,22,0.4) 100%)" }} />
            <div className="relative z-[2] p-10 md:p-14">
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em] mb-5">
                Im System
              </div>
              <h3 className="display text-white text-[28px] md:text-[34px] font-bold leading-tight mb-4">
                Operative Software ist kein Insel-Produkt.
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                Sie ist die Schicht, auf der lokale KI, Terminals, Kameras und der
                autonome Rover laufen. Was deine Mitarbeiter erfassen, sieht die KI —
                was der Rover bewegt, steht sofort im Bestand.
              </p>
            </div>
            <div className="relative z-[2] p-10 md:p-14 flex flex-col justify-center gap-3">
              {[
                { l: "Lokale KI", d: "Vorschläge, Erkennung, Automatisierung", to: "/produkte/lokale-ki" },
                { l: "Terminals & Kameras", d: "Hardware direkt an der Software", to: "/produkte/terminals-kameras" },
                { l: "Autonomer Roboter", d: "Aufträge direkt im Lagergang", to: "/produkte/autonomer-roboter" },
                { l: "SantosOS", d: "Das Ökosystem hinter allem", to: "/santosos" },
              ].map((x) => (
                <Link key={x.l} to={x.to} className="flex items-center justify-between border-t border-white/10 pt-3 group">
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
                Beginne mit einem ehrlichen Blick auf deinen Betrieb.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-4">
                Wir analysieren deinen Prozess, zeigen dir genau, was Operative Software
                bei dir verändert — und welche Module wirklich Hebel haben.
              </p>
              <p className="text-[13px] text-white/45 leading-relaxed mb-9">
                Jede Auslieferung erfolgt nach unseren{" "}
                <Link to="/cra" className="text-white/80 underline decoration-[hsl(var(--teal))] decoration-2 underline-offset-4 hover:text-white transition-colors">
                  CRA-ready Standards
                </Link>{" "}
                (Cyber Resilience Act) — inklusive SBOM, Vulnerability Management und dokumentierter Meldeketten. Referenzen findest du unter{" "}
                <Link to="/projekte" className="text-white/80 underline underline-offset-4 hover:text-white transition-colors">
                  Projekte
                </Link>.
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
