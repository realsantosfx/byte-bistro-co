import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";

import roverWorkVideo from "@/assets/site/robot-rover-work.mp4.asset.json";
import roverFeatureVideo from "@/assets/site/rover-feature-warehouse.mp4.asset.json";
import roverFeaturePoster from "@/assets/site/rover-feature-warehouse.jpg";
import humanoidWorkVideo from "@/assets/site/robot-humanoid-work.mp4.asset.json";
import quadrupedWorkVideo from "@/assets/site/robot-quadruped-work.mp4.asset.json";
import armWorkVideo from "@/assets/site/robot-arm-work.mp4.asset.json";

import humanoidHero from "@/assets/site/humanoid-hero.jpg";
import quadrupedImg from "@/assets/site/quadruped-robot.jpg";
import robotArmImg from "@/assets/site/robot-arm.jpg";
import roverWarehouse from "@/assets/site/rover-warehouse.jpg";
import roverProduct from "@/assets/site/rover-product.jpg";

const heroReel = [
  { url: roverWorkVideo.url, label: "Autonomer Rover", task: "Kommissionierung im Lager" },
  { url: humanoidWorkVideo.url, label: "Humanoide Plattform", task: "Übergabe & Werkzeug-Handling" },
  { url: quadrupedWorkVideo.url, label: "Quadruped", task: "Inspektion auf Treppen & Schächten" },
  { url: armWorkVideo.url, label: "Robotik-Arm", task: "Pick-and-Place an der Linie" },
];

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const platforms = [
  {
    tag: "AMR",
    title: "Autonomer Lager-Roboter",
    desc: "Fährt selbst, ohne Schienen oder Marker. Kommissioniert, transportiert und übergibt Ware direkt aus deiner Operativen Software.",
    img: roverWarehouse,
    href: "/produkte/autonomer-roboter",
  },
  {
    tag: "Humanoid",
    title: "Humanoide Roboter",
    desc: "Zweibeinige Plattformen für Aufgaben, die bisher menschliche Beweglichkeit verlangen — Kommissionierung, Übergabe, Inspektion.",
    img: humanoidHero,
    href: "/robotik/humanoid",
  },
  {
    tag: "Quadruped",
    title: "Vierbein-Roboter",
    desc: "Treppen, Schächte, Außenbereich. Inspektion, Sicherheit und Datenerfassung dort, wo Räder nicht hinkommen.",
    img: quadrupedImg,
    href: "/robotik/quadruped",
  },
  {
    tag: "Manipulator",
    title: "Robotik-Arme",
    desc: "Stationäre 6-Achs-Arme für Pick-and-Place, Verpackung und Qualitätskontrolle — direkt an deine ERP- oder MES-Logik angebunden.",
    img: robotArmImg,
    href: "/robotik/arme",
  },
];

const capabilities = [
  { n: "01", t: "Autonome Navigation", d: "LiDAR, Tiefenkameras, Sensorfusion. Kartiert dein Lager einmal — fährt dann selbst." },
  { n: "02", t: "Direkte System-Anbindung", d: "Aufträge kommen aus deiner Operativen Software. Kein Bediener, kein Zuruf, keine Insel." },
  { n: "03", t: "Sicherheit im Mischbetrieb", d: "Mehrschichtige Hindernis-Erkennung. Arbeitet zwischen Menschen, nicht statt ihnen." },
  { n: "04", t: "Flottensteuerung", d: "Mehrere Roboter koordinieren sich selbst. Aufgabenverteilung, Lade-Management, Übergabepunkte." },
  { n: "05", t: "Lokale KI an Bord", d: "Erkennung, Klassifikation, Sprache — direkt auf dem Roboter. Keine Cloud-Abhängigkeit." },
  { n: "06", t: "Wartung aus Deutschland", d: "Updates, Ersatzteile und Service-Verträge — nicht aus einem überseeischen Support-Forum." },
];

const useCases = [
  { sector: "Lager & Intralogistik", task: "Kommissionierung, innerbetrieblicher Transport, Nachtschicht-Inventur" },
  { sector: "Produktion", task: "Materialzuführung, Werkzeug-Logistik, Übergabe an Maschinen" },
  { sector: "Handel & Filialbetrieb", task: "Nachfüllen aus dem Lager, Inventur außerhalb der Öffnungszeiten" },
  { sector: "Inspektion & Sicherheit", task: "Routinegänge, Wärmebild-Checks, Anomalie-Erkennung mit Vier- oder Zweibeinern" },
  { sector: "Produktionsumgebung", task: "Stationäre Robotik-Arme für Pick-and-Place, Sortierung, Qualitätskontrolle" },
];

const Page = () => {
  const [reelIdx, setReelIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setReelIdx((i) => (i + 1) % heroReel.length);
    }, 10000);
    return () => window.clearInterval(id);
  }, []);

  const current = heroReel[reelIdx];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO — Cycling Robot Reel */}
        <section className="relative overflow-hidden min-h-[720px] md:min-h-[820px] flex items-end">
          {heroReel.map((clip, i) => (
            <video
              key={clip.url}
              src={clip.url}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === reelIdx ? 1 : 0 }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right,rgba(8,10,18,0.92) 0%,rgba(8,10,18,0.6) 45%,rgba(8,10,18,0.25) 100%), linear-gradient(to top,rgba(8,10,18,0.95) 0%,rgba(8,10,18,0.15) 55%,rgba(8,10,18,0.55) 100%)",
            }}
          />
          <div
            className="hidden md:block absolute right-[8%] bottom-[22%] w-[360px] h-[360px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(47,184,198,0.35) 0%,transparent 70%)" }}
          />

          <div className="relative z-[2] px-6 md:px-14 pb-16 md:pb-24 max-w-[820px] container-shell w-full">
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="text-[10.5px] font-semibold uppercase tracking-[0.16em] px-3 py-1.5 rounded-full"
                style={{ background: "hsl(var(--teal) / 0.15)", color: "hsl(var(--teal))", border: "1px solid hsl(var(--teal) / 0.35)" }}
              >
                Robotik
              </span>
              <span className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em]">
                Hardware-Erweiterung zur Software
              </span>
            </div>
            <h1 className="display text-white mb-6 break-words hyphens-auto" lang="de" style={{ fontSize: "clamp(40px, 8vw, 92px)", lineHeight: 1.04 }}>
              Wenn Software<br />
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Räder, Beine</em><br />
              und Hände bekommt
            </h1>
            <p className="text-[16px] md:text-[18px] font-light text-white/70 leading-relaxed max-w-[560px] mb-9">
              Autonome Roboter, humanoide Plattformen und Robotik-Arme — angebunden an die Operative Software,
              die wir für deinen Betrieb gebaut haben. Kein Standalone-Spielzeug. Echte Prozesse.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors"
              >
                Pilot-Projekt anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a
                href="#plattformen"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors"
              >
                Plattformen ansehen
              </a>
            </div>
          </div>

          {/* Reel indicator */}
          <div className="absolute z-[3] bottom-6 right-6 md:bottom-8 md:right-10 hidden sm:flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full pl-5 pr-2 py-2">
            <div className="text-right">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: "hsl(var(--teal))" }}>
                {current.label}
              </div>
              <div className="text-[11px] text-white/55 leading-none mt-0.5">{current.task}</div>
            </div>
            <div className="flex items-center gap-1.5 pl-3 border-l border-white/10">
              {heroReel.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReelIdx(i)}
                  aria-label={`Clip ${i + 1}`}
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{
                    background: i === reelIdx ? "hsl(var(--teal))" : "rgba(255,255,255,0.25)",
                    width: i === reelIdx ? 18 : 6,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* INTRO — Positioning */}
        <section className="section-x container-shell pt-20 md:pt-28">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              Roboter sind kein{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Produkt</em>.
              Sie sind ein{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Werkzeug</em>.
            </h2>
            <div className="space-y-5">
              <p className="bd">
                SantosLab ist ein Softwarestudio. Wir bauen ERP, CRM, Branchenlösungen und KI für den Mittelstand.
                Robotik kommt erst dazu, wenn dein Prozess physisch wird — wenn etwas tatsächlich bewegt,
                gegriffen oder transportiert werden muss.
              </p>
              <p className="bd">
                Wir verkaufen keine Roboter von der Stange. Wir wählen die richtige Plattform für deinen Fall,
                integrieren sie in dein System und sorgen dafür, dass sie Aufträge aus deiner Software bekommt —
                nicht aus einem fremden Bediener-Terminal.
              </p>
            </div>
          </div>
        </section>

        {/* PLATTFORMEN GRID */}
        <section id="plattformen" className="section-x container-shell py-20 md:py-24">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
                Plattformen
              </div>
              <h2 className="hl-lg">Vier Bauformen.<br />Ein System dahinter.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-3.5">
            {platforms.map((p, i) => (
              <a
                key={p.title}
                href={p.href}
                className="relative overflow-hidden rounded-[18px] aspect-[4/3] cursor-pointer hover-lift group block bg-[#0f1722]"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 transition-opacity"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.5) 0%,rgba(8,10,16,0.35) 40%,rgba(8,10,16,0.95) 100%)" }} />
                <div className="absolute top-5 left-6 text-[11px] font-medium text-white/50 uppercase tracking-[0.12em]">
                  {p.tag}
                </div>
                <div className="absolute top-5 right-5 w-[34px] h-[34px] bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Arrow />
                </div>
                <div className="absolute bottom-6 left-6 right-6 max-w-[440px]">
                  <h3 className="display text-[24px] md:text-[28px] font-bold text-white leading-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[13px] md:text-[13.5px] text-white/65 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* AMR / ROVER — Video Feature */}
        <section id="rover" className="section-x container-shell pb-20 md:pb-24">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start mb-10">
            <div>
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
                AMR — Autonomer Rover
              </div>
              <h2 className="hl-lg">
                Fährt selbst.{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Ohne Schienen</em>.
                Ohne Bediener.
              </h2>
            </div>
            <p className="bd pt-2">
              Der Rover bekommt seine Aufträge direkt aus deiner Operativen Software — kommissioniert, transportiert
              und übergibt Ware zwischen Lager, Produktion und Übergabepunkt. Kartiert dein Umfeld einmal, fährt
              dann selbst und meldet jeden Status zurück ins zentrale Dashboard.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[18px] aspect-[16/9] bg-[#0a0f18]">
            <img
              src={roverFeatureImg}
              alt="Autonomer Rover im Lager"
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0) 50%,rgba(8,10,16,0.85) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[520px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-2">
                  Live — Kommissionierung im Lager
                </div>
                <h3 className="display text-[22px] md:text-[28px] font-bold text-white leading-tight">
                  Autonomer Rover im Realbetrieb
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Navigation", "Transport", "Übergabe", "Flotte"].map((b) => (
                  <span key={b} className="text-[11.5px] text-white/80 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HUMANOID — Video Feature */}
        <section id="humanoid" className="section-x container-shell pb-20 md:pb-24">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start mb-10">
            <div>
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
                Humanoide Plattformen
              </div>
              <h2 className="hl-lg">
                Aufrecht.{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Beweglich</em>.
                Im Mischbetrieb.
              </h2>
            </div>
            <p className="bd pt-2">
              Zweibeinige Roboter sind nicht überall sinnvoll — aber dort, wo Menschen heute Treppen steigen, Türen
              öffnen oder Werkzeuge greifen müssen, sind sie überlegen. Wir integrieren bestehende humanoide Plattformen
              in deine Operative Software und stellen die Aufgabensteuerung, das Logging und die Sicherheits-Logik bereit.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[18px] aspect-[16/9] bg-[#0a0f18]">
            <video
              src={humanoidWorkVideo.url}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={humanoidHero}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0) 50%,rgba(8,10,16,0.85) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[520px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-2">
                  Live — Bewegung im Mischbetrieb
                </div>
                <h3 className="display text-[22px] md:text-[28px] font-bold text-white leading-tight">
                  Humanoide Plattform im Test-Setup
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Greifen", "Treppen", "Übergabe", "Inspektion"].map((b) => (
                  <span key={b} className="text-[11.5px] text-white/80 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="section-x container-shell pb-20 md:pb-24">
          <div className="mb-10">
            <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
              Was alle Plattformen können
            </div>
            <h2 className="hl-lg">Sechs Fähigkeiten,<br />die wir mitliefern.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {capabilities.map((c) => (
              <div key={c.n} className="rounded-[18px] border border-border bg-[#0f1722] p-6 md:p-7 hover-lift">
                <div className="text-[11px] font-medium tracking-[0.16em]" style={{ color: "hsl(var(--teal))" }}>
                  {c.n}
                </div>
                <h3 className="display text-[20px] md:text-[22px] font-bold text-white mt-3 mb-3 leading-tight">
                  {c.t}
                </h3>
                <p className="text-[13.5px] text-white/55 leading-relaxed">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* QUADRUPED + ROBOT ARM split */}
        <section id="quadruped" className="section-x container-shell pb-20 md:pb-24">
          <div className="grid md:grid-cols-2 gap-3.5">
            <div className="relative overflow-hidden rounded-[18px] min-h-[420px] flex items-end bg-[#0a141a]">
              <img
                src={quadrupedImg}
                alt="Vierbein-Roboter im Korridor"
                loading="lazy"
                width={1600}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover opacity-65"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.35) 30%,rgba(8,10,16,0.95) 100%)" }} />
              <div className="relative z-[2] p-7 md:p-9 max-w-[460px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/45 mb-3">
                  Vierbein — Inspektion & Outdoor
                </div>
                <h3 className="display text-[26px] md:text-[30px] font-bold text-white leading-tight mb-3">
                  Da, wo Räder aufgeben.
                </h3>
                <p className="text-[13.5px] text-white/65 leading-relaxed">
                  Treppen, Kanten, Schotter, Schächte. Mit Wärmebild- und Vision-Modulen für
                  Routine-Inspektion, Sicherheitsrundgänge und Anomalie-Erkennung — direkt an
                  dein Monitoring angebunden.
                </p>
              </div>
            </div>

            <div id="arme" className="relative overflow-hidden rounded-[18px] min-h-[420px] flex items-end bg-[#0a141a]">
              <img
                src={robotArmImg}
                alt="Robotik-Arm beim Greifen einer Box"
                loading="lazy"
                width={1600}
                height={1200}
                className="absolute inset-0 w-full h-full object-cover opacity-65"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.35) 30%,rgba(8,10,16,0.95) 100%)" }} />
              <div className="relative z-[2] p-7 md:p-9 max-w-[460px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/45 mb-3">
                  Manipulator — Stationär & präzise
                </div>
                <h3 className="display text-[26px] md:text-[30px] font-bold text-white leading-tight mb-3">
                  6 Achsen, eine Logik.
                </h3>
                <p className="text-[13.5px] text-white/65 leading-relaxed">
                  Pick-and-Place, Verpackung, Sortierung, Qualitätskontrolle. Direkt aus deiner
                  ERP- oder MES-Logik gesteuert — mit Vision-Modul aus unserer lokalen KI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES TABLE */}
        <section className="section-x container-shell pb-20 md:pb-24">
          <div className="mb-10">
            <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
              Einsatzfelder
            </div>
            <h2 className="hl-lg">Wo Roboter heute<br />wirklich Sinn machen.</h2>
          </div>

          <div className="rounded-[18px] border border-border bg-[#0f1722] overflow-hidden">
            {useCases.map((u, i) => (
              <div
                key={u.sector}
                className={`flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-5 md:p-6 ${
                  i !== useCases.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="md:w-[260px] shrink-0">
                  <div className="text-[10.5px] font-medium text-white/35 uppercase tracking-[0.14em] mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[15px] md:text-[16px] font-semibold text-white">
                    {u.sector}
                  </div>
                </div>
                <div className="flex-1 text-[13.5px] md:text-[14px] text-white/60 leading-relaxed">
                  {u.task}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATION STRIP */}
        <section className="section-x container-shell pb-20 md:pb-24">
          <div className="rounded-[18px] border border-border bg-[#0f1722] p-7 md:p-10">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
              <div>
                <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-3">
                  Software-Kopplung
                </div>
                <h3 className="display text-[26px] md:text-[34px] font-bold text-white leading-tight">
                  Roboter ohne unsere Software?{" "}
                  <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Geht nicht.</em>
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed">
                  Wir verkaufen keine Roboter als Standalone-Produkt. Jede Plattform wird in das System integriert,
                  das wir für deinen Betrieb gebaut haben — Aufträge, Status, Übergabepunkte und Eskalationen
                  laufen über eine Codebase.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Aufträge aus ERP/CRM direkt in die Roboter-Warteschlange",
                    "Status- und Telemetrie-Daten zurück ins zentrale Dashboard",
                    "Lokale KI für Bild, Klassifikation und Sprache — ohne Cloud",
                    "Eskalation an Menschen, wenn der Roboter nicht weiterkommt",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 text-[13.5px] text-white/70">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "hsl(var(--teal))" }} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA DARK */}
        <div className="section-x pb-14 container-shell">
          <div
            className="relative rounded-[18px] overflow-hidden min-h-[460px] flex items-end"
          >
            <img
              src={roverProduct}
              alt="Roboter im Einsatz"
              width={1600}
              height={900}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right,rgba(10,15,25,0.96) 35%,rgba(10,15,25,0.55) 75%,rgba(10,15,25,0.35) 100%)" }}
            />
            <div className="relative z-[2] p-10 md:p-16 max-w-[60%]">
              <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 46px)", lineHeight: 1.1 }}>
                Roboter sind nicht der Anfang.<br />Sondern die Verlängerung.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.75] mb-9 max-w-[520px]">
                Erst die Software, dann die Hardware. Wenn du wissen willst, ob ein Roboter in deinem Prozess
                Sinn macht, schauen wir uns das gemeinsam an — ehrlich und ohne Buzzwords.
              </p>
              <Link to="/kontakt" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full transition-colors">
                Robotik-Gespräch anfragen
                <span className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[#111]" />
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
