import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/page-rover-hero.jpg";
import cardRover from "@/assets/site/rover-hero-frame.jpg";
import reserveRover from "@/assets/site/reserve-rover.jpg";
import workVideo from "@/assets/site/robot-rover-work.mp4.asset.json";
import corridorImg from "@/assets/site/robot-rover-corridor.jpg";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const modules = [
  {
    tag: "Navigation",
    title: "Fährt selbst — ohne Schienen, ohne Marker",
    desc: "LiDAR, Tiefenkameras und Sensorfusion. Der Roboter kartiert dein Lager beim ersten Einlernen und navigiert danach autonom zwischen Regalen, Menschen und Maschinen.",
  },
  {
    tag: "Aufträge",
    title: "Holt sich Jobs direkt aus dem System",
    desc: "Kein Bediener, kein Zuruf. Die Operative Software gibt den Auftrag — der Roboter fährt zur Station, übernimmt die Ware und bringt sie ans Ziel.",
  },
  {
    tag: "Handling",
    title: "Kommissionieren, Transportieren, Übergeben",
    desc: "Pickt aus Regalen, fährt Paletten, dockt an Förderstrecken an. Modular erweiterbar — vom kleinen AMR bis zum schweren Transporter.",
  },
  {
    tag: "Sicherheit",
    title: "Arbeitet zwischen Menschen, nicht statt ihnen",
    desc: "Mehrschichtige Hindernis-Erkennung, sanftes Bremsen, klare Signale. Der Roboter weicht aus, wartet ab und meldet sich, wenn er Hilfe braucht.",
  },
];

const facts = [
  { n: "0", em: "", l: "Bauliche Umbauten\nnötig im Lager" },
  { n: "1", em: "Tag", l: "Einlernen der\nersten Route" },
  { n: "24", em: "/7", l: "Einsatzbereit —\nauch in der Nacht" },
  { n: "~", em: "500€", l: "Hardware-Einstieg\nfür einen Pilot-Roboter" },
];

const features = [
  "Plug-and-play in bestehende Lager — ohne Bodenmarkierungen oder Schienen",
  "Direkte Anbindung an Operative Software & lokale KI",
  "Mehrere Roboter koordinieren sich selbst über die Flottensteuerung",
  "Wartung, Updates und Ersatzteile aus Deutschland",
  "Skalierbar von einem Pilot-Roboter bis zur kompletten Flotte",
  "Einsatz in Lager, Produktion, Intralogistik und Outdoor-Bereichen",
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
            alt="Autonomer Lager-Roboter zwischen Regalreihen mit Teal-LEDs"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,rgba(8,10,18,0.95) 0%,rgba(8,10,18,0.7) 45%,rgba(8,10,18,0.35) 100%), linear-gradient(to top,rgba(8,10,18,0.92) 0%,rgba(8,10,18,0.2) 60%,rgba(8,10,18,0.5) 100%)",
            }}
          />
          <div
            className="hidden md:block absolute right-[8%] bottom-[20%] w-[320px] h-[320px] rounded-full blur-[90px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(47,184,198,0.28) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pb-16 md:pb-20 max-w-[760px] container-shell w-full">
            <div className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em] mb-6">
              Produkt — Autonomer Roboter
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              Dein Lager<br />
              <span style={{ color: "hsl(var(--teal))" }}>bewegt sich</span><br />
              selbst
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[520px]">
              Autonome Roboter, die Aufträge direkt aus deinem System übernehmen.
              Kommissionieren, transportieren, übergeben — ohne Schienen, ohne Eingriff.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Pilot-Roboter anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#module"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors"
              >
                Was er kann
              </a>
            </div>
          </div>
        </section>

        {/* NUTZENZEILE */}
        <section className="pt-10 md:pt-14 section-x container-shell">
          <div className="rounded-[18px] border border-border bg-[#0f1722] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-[15px]">◐</div>
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.12em] whitespace-nowrap">
                Roboter — Add-on
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:flex-1">
              {[
                "24/7 Kommissionierung",
                "Spart 1–2 Vollzeitkräfte",
                "ROI in 12–18 Monaten",
                "Kollisionsfrei mit Menschen",
              ].map((b) => (
                <span key={b} className="text-[12px] text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  {b}
                </span>
              ))}
            </div>

            <div className="text-[12.5px] text-white/45 md:text-right md:max-w-[260px] leading-snug">
              <span className="text-white/35">Typisch für:</span>{" "}
              Lager-Kommissionierung, innerbetrieblicher Transport, Nachtschicht-Inventur.
            </div>
          </div>

          <p className="mt-5 text-[13.5px] md:text-[14px] text-white/55 leading-relaxed max-w-3xl">
            <span className="text-white/75">Warum nur als Add-on?</span> Im Kern bauen wir Software für den Mittelstand — ERP, CRM, Branchenlösungen, KI.
            Der autonome Roboter ist eine optionale Hardware-Erweiterung für Kunden, deren Prozesse physisch werden:
            wenn Software allein nicht mehr reicht und tatsächlich etwas bewegt, kommissioniert oder transportiert werden muss.
            Er wird direkt an deine bestehende Software angebunden — nicht als Standalone-Produkt verkauft.
          </p>
        </section>


        {/* INTRO */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              Roboter, die nicht in der Demo bleiben{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>— sondern arbeiten.</em>
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Wir bauen keine Showcase-Roboter. Unsere Systeme fahren nach einem Tag
                Einlernen die ersten echten Aufträge — koordiniert über die Operative
                Software, mit lokaler KI für Erkennung und Entscheidungen direkt am Gerät.
              </p>
              <p className="bd">
                Ein Pilot-Roboter ist kein Großprojekt. Du startest klein, lernst, was
                wirklich Wert bringt — und skalierst zur Flotte, wenn der Case sitzt.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO FEATURE */}
        <section className="pb-20 md:pb-24 section-x container-shell">
          <div className="relative overflow-hidden rounded-[18px] aspect-[16/9] bg-[#0a0f18]">
            <img src={corridorImg} alt="Autonomer Rover im Korridor" loading="lazy" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0) 50%,rgba(8,10,16,0.85) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[520px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-2">Live — Kommissionierung im Lager</div>
                <h3 className="display text-[22px] md:text-[28px] font-bold text-white leading-tight">Autonomer Rover im Realbetrieb</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Navigation", "Transport", "Übergabe", "Flotte"].map((b) => (
                  <span key={b} className="text-[11.5px] text-white/80 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur">{b}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section id="module" className="pb-24 section-x container-shell">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {modules.map((m) => (
              <div
                key={m.title}
                className="relative rounded-[14px] p-6 border border-border bg-card hover-lift"
              >
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.14em] mb-3">
                  {m.tag}
                </div>
                <h3 className="display text-[18px] font-bold leading-snug mb-2">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-snug">{m.desc}</p>
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
              Ein Roboter, der in deinen{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Betrieb passt</em>
              {" "}— nicht umgekehrt
            </h2>
            <p className="bd pt-1.5">
              Kein Lager-Umbau, keine teure Infrastruktur, keine Lock-in-Verträge.
              Wir bringen den Roboter, lernen die Routen ein und integrieren ihn in
              das System, das du sowieso schon hast.
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
            style={{ background: "linear-gradient(135deg,#18181f 0%,#252538 45%,#14142a 100%)" }}
          >
            <img src={reserveRover} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(8,12,22,0.92) 35%,rgba(8,12,22,0.4) 100%)" }} />
            <div className="relative z-[2] p-10 md:p-14">
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.18em] mb-5">
                Im System
              </div>
              <h3 className="display text-white text-[28px] md:text-[34px] font-bold leading-tight mb-4">
                Der Roboter ist kein Insel-Projekt.
              </h3>
              <p className="text-[15px] text-white/60 leading-[1.8]">
                Er bekommt Aufträge aus der Operativen Software, nutzt lokale KI für
                Bild- und Umgebungserkennung und meldet seinen Status an die Terminals
                in Echtzeit. Alles im selben System.
              </p>
            </div>
            <div className="relative z-[2] p-10 md:p-14 flex flex-col justify-center gap-3">
              {[
                { l: "Operative Software", d: "Gibt Aufträge & koordiniert die Flotte", to: "/produkte/operative-software" },
                { l: "Lokale KI", d: "Erkennt Ware, Hindernisse & Situationen", to: "/produkte/lokale-ki" },
                { l: "Terminals & Kameras", d: "Status und Übergabe an jeder Station", to: "/produkte/terminals-kameras" },
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
                Starte mit einem Pilot-Roboter.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-9">
                Sag uns, wie deine Wege heute aussehen — wir zeigen, wo ein autonomer
                Roboter sofort Stunden spart, ohne dass du dein Lager umbauen musst.
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
