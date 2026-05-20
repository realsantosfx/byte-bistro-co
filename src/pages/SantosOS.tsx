import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/page-santosos-hero.jpg";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const layers = [
  {
    tag: "01 — Software Core",
    title: "Operative Software",
    desc: "Das Gehirn von SantosOS. Aufträge, Bestände, Aufgaben und Workflows laufen in einem System — als gemeinsame Wahrheit für jeden Bereich.",
    to: "/produkte/operative-software",
  },
  {
    tag: "02 — KI Schicht",
    title: "Lokale KI",
    desc: "Modelle, die auf eigener Hardware laufen. Sie sehen, lesen, entscheiden und schlagen vor — ohne dass ein Byte den Betrieb verlässt.",
    to: "/produkte/lokale-ki",
  },
  {
    tag: "03 — Physical Layer",
    title: "Terminals & Kameras",
    desc: "Touch-Terminals, Scanner, Sensoren und Industriekameras. Die Schnittstelle zwischen Menschen, Maschinen und dem System.",
    to: "/produkte/terminals-kameras",
  },
  {
    tag: "04 — Motion Layer",
    title: "Autonomer Roboter",
    desc: "Roboter, die Aufträge direkt aus der Software übernehmen, autonom navigieren und Ware bewegen — koordiniert mit Mensch und Maschine.",
    to: "/produkte/autonomer-roboter",
  },
];

const principles = [
  { n: "01", t: "Ein System statt vieler Tools", d: "Software, KI und Hardware unter einer Logik — keine Brücken, keine Sync-Probleme, keine Insel-Lösungen." },
  { n: "02", t: "Lokal vor Cloud", d: "Daten und Modelle laufen im Betrieb. DSGVO-konform per Architektur, nicht per Klausel." },
  { n: "03", t: "Modular & skalierbar", d: "Starte mit einer Schicht. Erweitere, wenn der Case sitzt. SantosOS wächst mit dem Betrieb." },
  { n: "04", t: "Gebaut für Mittelstand", d: "Kein Enterprise-Overhead. Kein Consumer-Spielzeug. Industrie-tauglich, aber bedienbar." },
  { n: "05", t: "Echtzeit, nicht Reporting", d: "Was passiert, ist sofort sichtbar — auf Terminal, in der Software, im Dashboard, im Roboter." },
  { n: "06", t: "Souverän & wartbar", d: "Updates, Ersatzteile, Erweiterungen aus Deutschland. Kein Lock-in, keine Black Box." },
];

const facts = [
  { n: "1", em: "OS", l: "Software, KI & Hardware\nin einem System" },
  { n: "4", em: "", l: "Verbundene Schichten —\nmodular einsetzbar" },
  { n: "100", em: "%", l: "Lokale Verarbeitung\nmöglich" },
  { n: "0", em: "", l: "Cloud-Pflicht,\nkein Vendor-Lock-in" },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden min-h-[680px] flex items-end">
          <img
            src={heroImg}
            alt="SantosOS — vernetztes Betriebs-Ökosystem"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,rgba(6,14,28,0.95) 0%,rgba(6,14,28,0.7) 45%,rgba(6,14,28,0.3) 100%), linear-gradient(to top,rgba(6,14,28,0.95) 0%,rgba(6,14,28,0.2) 60%,rgba(6,14,28,0.5) 100%)",
            }}
          />
          <div
            className="hidden md:block absolute right-[8%] bottom-[20%] w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(47,184,198,0.32) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pb-20 md:pb-24 max-w-[820px] container-shell w-full">
            <div className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em] mb-6">
              Das Betriebs-Ökosystem
            </div>
            <h1 className="display text-white mb-7" style={{ fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 1.02 }}>
              <span style={{ color: "hsl(var(--teal))" }}>SantosOS.</span><br />
              Ein System für<br />
              den ganzen Betrieb
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[560px]">
              Software, KI und Hardware — verbunden in einer Architektur.
              SantosOS ist kein Produkt. Es ist die Grundlage, auf der dein
              Unternehmen läuft.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Erstgespräch anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#schichten"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors"
              >
                Die 4 Schichten
              </a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              Nicht ein weiteres Tool.{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>
                Das Fundament.
              </em>
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Die meisten Betriebe haben heute ein ERP, ein CRM, ein Lagertool,
                ein paar Excel-Dateien — und ein Team, das alles zusammenhält.
                SantosOS ersetzt diesen Flickenteppich durch eine gemeinsame Architektur:
                Software, lokale KI und Hardware unter einer Logik.
              </p>
              <p className="bd">
                Was am Terminal passiert, sieht die Software. Was die Kamera erkennt,
                versteht die KI. Was die KI entscheidet, fährt der Roboter. Alles in Echtzeit,
                alles lokal, alles aus einem Guss.
              </p>
            </div>
          </div>
        </section>

        {/* LAYERS */}
        <section id="schichten" className="pb-24 section-x container-shell">
          <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-[0.18em] mb-3">
                Die 4 Schichten
              </div>
              <h2 className="display text-[32px] md:text-[44px] font-bold leading-tight max-w-[640px]">
                Vier Schichten. Eine Architektur.
              </h2>
            </div>
            <p className="bd max-w-[420px]">
              Jede Schicht funktioniert für sich. Zusammen ergeben sie ein System,
              das mehr ist als die Summe seiner Teile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3.5">
            {layers.map((l) => (
              <Link
                key={l.title}
                to={l.to}
                className="group relative rounded-[18px] p-8 md:p-10 border border-border bg-card hover-lift flex flex-col"
              >
                <div className="text-[10.5px] font-medium text-muted-foreground uppercase tracking-[0.16em] mb-6">
                  {l.tag}
                </div>
                <h3 className="display text-[24px] md:text-[28px] font-bold leading-tight mb-3">
                  {l.title}
                </h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-8">
                  {l.desc}
                </p>
                <div className="mt-auto flex items-center gap-2.5 text-[13px] font-medium">
                  Mehr erfahren
                  <span className="w-[28px] h-[28px] rounded-full bg-foreground group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Arrow />
                  </span>
                </div>
              </Link>
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

        {/* PRINCIPLES */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Sechs Prinzipien.{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Eine Haltung.</em>
            </h2>
            <p className="bd pt-1.5">
              SantosOS ist die Antwort auf eine einfache Frage: Wie würde Betriebs-Software
              aussehen, wenn man sie heute neu bauen würde — für den deutschen Mittelstand,
              ohne Altlasten, ohne Cloud-Zwang, ohne Lock-in?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {principles.map((p) => (
              <div key={p.n} className="rounded-[14px] p-6 border border-border bg-card">
                <div className="display text-[20px] font-bold text-muted-foreground/50 mb-3">{p.n}</div>
                <h3 className="display text-[17px] font-bold leading-snug mb-2">{p.t}</h3>
                <p className="text-[13px] text-muted-foreground leading-snug">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEEP STRIP */}
        <section className="pb-24 section-x container-shell">
          <div
            className="relative rounded-[18px] overflow-hidden p-10 md:p-16"
            style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}
          >
            <div
              className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }}
            />
            <div className="relative z-[2] grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16">
              <div>
                <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em] mb-5">
                  Warum ein OS und kein Tool?
                </div>
                <h3 className="display text-white text-[28px] md:text-[38px] font-bold leading-tight mb-5">
                  Weil dein Betrieb kein Tool-Problem hat.
                </h3>
                <p className="text-[15px] text-white/60 leading-[1.8]">
                  Tools lösen Symptome. Ein OS löst die Architektur dahinter.
                  SantosOS gibt deinem Betrieb eine Grundlage, auf der jede neue
                  Anforderung — ein Workflow, ein Modell, ein Roboter — einfach
                  andockt, statt neu integriert werden zu müssen.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3">
                {[
                  { l: "Eine gemeinsame Wahrheit", d: "Statt fünf Wahrheiten in fünf Systemen" },
                  { l: "Lokale Daten, lokale KI", d: "Souveränität per Architektur" },
                  { l: "Hardware spricht mit allem", d: "Terminals, Kameras, Roboter im selben Netz" },
                  { l: "Wächst mit dem Betrieb", d: "Eine Schicht heute, vier morgen" },
                ].map((x) => (
                  <div key={x.l} className="flex items-center justify-between border-t border-white/10 pt-3">
                    <div>
                      <div className="text-white text-[15px] font-medium">{x.l}</div>
                      <div className="text-white/45 text-[12.5px]">{x.d}</div>
                    </div>
                    <span className="w-[30px] h-[30px] bg-white/10 rounded-full flex items-center justify-center">
                      <Arrow />
                    </span>
                  </div>
                ))}
              </div>
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
                SantosOS ist kein Produkt von der Stange.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-9">
                Wir bauen es passend zum Betrieb. Sag uns, wie heute gearbeitet wird —
                wir zeigen, welche Schichten zuerst Sinn machen und wie der Weg dahin aussieht.
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
