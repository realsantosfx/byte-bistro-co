import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ArrowUpRight } from "lucide-react";
import heroSoftware from "@/assets/site/hero-software.jpg";
import roverWarehouse from "@/assets/site/rover-warehouse.jpg";
import brHandel from "@/assets/site/branche-handel.jpg";
import brProduktion from "@/assets/site/branche-produktion.jpg";
import brLogistik from "@/assets/site/branche-logistik.jpg";
import brSanierung from "@/assets/site/branche-sanierung.jpg";
import caseBuero from "@/assets/site/case-buero.jpg";
import ctaControl from "@/assets/site/cta-control.jpg";
import cardSoftware from "@/assets/site/card-software.jpg";
import cardKi from "@/assets/site/card-ki.jpg";
import cardTerminals from "@/assets/site/card-terminals.jpg";
import cardRover from "@/assets/site/rover-hero-frame.jpg";

const Arrow = ({ stroke = "white" }: { stroke?: string }) => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke={stroke} strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const RobotSVG = () => (
  <svg viewBox="0 0 340 420" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <rect x="95" y="130" width="150" height="130" rx="20" fill="rgba(47,184,198,0.1)" stroke="rgba(47,184,198,0.45)" strokeWidth="1.5"/>
    <rect x="120" y="80" width="100" height="60" rx="16" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.4)" strokeWidth="1.5"/>
    <line x1="170" y1="80" x2="170" y2="50" stroke="rgba(47,184,198,0.5)" strokeWidth="1.5"/>
    <circle cx="170" cy="46" r="5" fill="rgba(47,184,198,0.9)">
      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="148" cy="108" r="9" fill="rgba(47,184,198,0.12)" stroke="rgba(47,184,198,0.5)" strokeWidth="1.5"/>
    <circle cx="148" cy="108" r="4" fill="rgba(47,184,198,1)">
      <animate attributeName="r" values="4;2.5;4" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="192" cy="108" r="9" fill="rgba(47,184,198,0.12)" stroke="rgba(47,184,198,0.5)" strokeWidth="1.5"/>
    <circle cx="192" cy="108" r="4" fill="rgba(47,184,198,1)">
      <animate attributeName="r" values="4;2.5;4" dur="3.5s" begin=".5s" repeatCount="indefinite"/>
    </circle>
    <rect x="115" y="150" width="110" height="80" rx="10" fill="rgba(47,184,198,0.06)" stroke="rgba(47,184,198,0.25)" strokeWidth="1"/>
    <rect x="125" y="162" width="90" height="5" rx="2.5" fill="rgba(47,184,198,0.12)"/>
    <rect x="125" y="162" width="70" height="5" rx="2.5" fill="rgba(47,184,198,0.7)"/>
    <rect x="125" y="174" width="90" height="5" rx="2.5" fill="rgba(47,184,198,0.12)"/>
    <rect x="125" y="174" width="45" height="5" rx="2.5" fill="rgba(47,184,198,0.5)"/>
    <rect x="125" y="186" width="90" height="5" rx="2.5" fill="rgba(47,184,198,0.12)"/>
    <rect x="125" y="186" width="82" height="5" rx="2.5" fill="rgba(47,184,198,0.6)"/>
    <rect x="125" y="200" width="48" height="18" rx="9" fill="rgba(47,184,198,0.2)" stroke="rgba(47,184,198,0.4)" strokeWidth="1"/>
    <circle cx="135" cy="209" r="3" fill="rgba(47,184,198,1)">
      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <path d="M95 165 Q60 180 50 210" stroke="rgba(47,184,198,0.4)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="48" cy="215" r="10" fill="rgba(47,184,198,0.1)" stroke="rgba(47,184,198,0.45)" strokeWidth="1.5"/>
    <path d="M245 165 Q280 180 290 210" stroke="rgba(47,184,198,0.4)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="292" cy="215" r="10" fill="rgba(47,184,198,0.1)" stroke="rgba(47,184,198,0.45)" strokeWidth="1.5"/>
    <rect x="125" y="260" width="35" height="70" rx="10" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.3)" strokeWidth="1.5"/>
    <rect x="180" y="260" width="35" height="70" rx="10" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.3)" strokeWidth="1.5"/>
    <ellipse cx="142" cy="336" rx="26" ry="12" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.35)" strokeWidth="1.5"/>
    <ellipse cx="198" cy="336" rx="26" ry="12" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.35)" strokeWidth="1.5"/>
    <ellipse cx="170" cy="352" rx="90" ry="7" fill="rgba(47,184,198,0.06)"/>
    <line x1="50" y1="200" x2="50" y2="140" stroke="rgba(47,184,198,0.12)" strokeWidth="1" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.2s" repeatCount="indefinite"/>
    </line>
    <line x1="290" y1="200" x2="290" y2="140" stroke="rgba(47,184,198,0.12)" strokeWidth="1" strokeDasharray="5 4">
      <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.2s" repeatCount="indefinite"/>
    </line>
  </svg>
);

const RoverSVG = () => (
  <svg viewBox="0 0 600 280" fill="none" className="w-full max-w-[700px] opacity-90" xmlns="http://www.w3.org/2000/svg">
    <rect x="200" y="60" width="200" height="140" rx="24" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.35)" strokeWidth="1.5"/>
    <rect x="230" y="80" width="140" height="90" rx="12" fill="rgba(47,184,198,0.05)" stroke="rgba(47,184,198,0.2)" strokeWidth="1"/>
    <circle cx="263" cy="118" r="16" fill="rgba(47,184,198,0.15)" stroke="rgba(47,184,198,0.5)" strokeWidth="1.5"/>
    <circle cx="263" cy="118" r="6" fill="rgba(47,184,198,0.9)"><animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/></circle>
    <circle cx="337" cy="118" r="16" fill="rgba(47,184,198,0.15)" stroke="rgba(47,184,198,0.5)" strokeWidth="1.5"/>
    <circle cx="337" cy="118" r="6" fill="rgba(47,184,198,0.9)"><animate attributeName="opacity" values="1;0.3;1" dur="2.5s" begin=".4s" repeatCount="indefinite"/></circle>
    <rect x="240" y="146" width="120" height="12" rx="6" fill="rgba(47,184,198,0.12)"/>
    <rect x="240" y="146" width="85" height="12" rx="6" fill="rgba(47,184,198,0.6)"/>
    <ellipse cx="230" cy="218" rx="34" ry="18" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.35)" strokeWidth="1.5"/>
    <ellipse cx="300" cy="222" rx="34" ry="18" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.35)" strokeWidth="1.5"/>
    <ellipse cx="370" cy="218" rx="34" ry="18" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.35)" strokeWidth="1.5"/>
    <path d="M200 110 Q140 130 110 170" stroke="rgba(47,184,198,0.35)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="104" cy="176" r="14" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.4)" strokeWidth="1.5"/>
    <path d="M400 110 Q460 130 490 170" stroke="rgba(47,184,198,0.35)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <circle cx="496" cy="176" r="14" fill="rgba(47,184,198,0.08)" stroke="rgba(47,184,198,0.4)" strokeWidth="1.5"/>
    <ellipse cx="300" cy="240" rx="160" ry="10" fill="rgba(47,184,198,0.05)"/>
    <circle cx="300" cy="30" r="20" stroke="rgba(47,184,198,0.2)" strokeWidth="1" fill="none">
      <animate attributeName="r" values="20;35;20" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="300" cy="30" r="10" fill="rgba(47,184,198,0.3)" stroke="rgba(47,184,198,0.6)" strokeWidth="1.5"/>
    <line x1="300" y1="38" x2="300" y2="60" stroke="rgba(47,184,198,0.3)" strokeWidth="1.5"/>
  </svg>
);

const productCards = [
  { tag: "KI Schicht", title: "Lokale KI", desc: "Intelligenz ohne Cloud", bg: "linear-gradient(145deg,#0a1520 0%,#0f3040 50%,#083050 100%)", glow: "rgba(80,160,255,.22)", glowPos: "bottom-[20%] right-[20%]", img: cardKi, href: "/produkte/lokale-ki" },
  { tag: "Physical Layer", title: "Terminals & Kameras", desc: "Hardware direkt verbunden", bg: "linear-gradient(145deg,#0d1f0d 0%,#0f3520 50%,#0a2818 100%)", glow: "rgba(80,200,100,.2)", glowPos: "top-[25%] left-[20%]", img: cardTerminals, href: "/produkte/terminals-kameras" },
  { tag: "Add-on", title: "Autonomer Roboter", desc: "Optionale Hardware-Erweiterung", bg: "linear-gradient(145deg,#18181f 0%,#252538 50%,#14142a 100%)", glow: "rgba(200,160,60,.2)", glowPos: "top-[20%] right-[20%]", img: cardRover, href: "/produkte/autonomer-roboter" },
];

const buildTypes = [
  { tag: "01", title: "ERP-Systeme", desc: "Auftrag, Lager, Einkauf, Finanzen — in einem System statt fünf.", href: "/produkte/operative-software" },
  { tag: "02", title: "CRM-Lösungen", desc: "Pipeline, Angebot, Kunde — exakt wie dein Vertrieb arbeitet.", href: "/produkte/operative-software" },
  { tag: "03", title: "Branchensoftware", desc: "Maßgeschneidert für deinen Prozess, nicht für 1.000 andere.", href: "/produkte/operative-software" },
  { tag: "04", title: "KI-Integration", desc: "Lokale Modelle für Vision, Klassifikation, Automatisierung.", href: "/produkte/lokale-ki" },
];

const branchen = [
  { title: "Handel &\nDistribution", to: "/branche/handel-distribution", bg: "linear-gradient(160deg,#14202e 0%,#1e3550 40%,#142a44 100%)", glow: "rgba(47,184,198,.22)", img: brHandel },
  { title: "Produktion", to: "/branche/produktion", bg: "linear-gradient(160deg,#101a10 0%,#1a3020 40%,#122218 100%)", glow: "rgba(80,200,80,.18)", img: brProduktion },
  { title: "Logistik", to: "/branche/logistik", bg: "linear-gradient(160deg,#0a1828 0%,#16304a 40%,#0c2038 100%)", glow: "rgba(80,140,220,.2)", img: brLogistik },
  { title: "Sanierung", to: "/branche/sanierung", bg: "linear-gradient(160deg,#1e1410 0%,#3a2418 40%,#241612 100%)", glow: "rgba(220,140,60,.18)", img: brSanierung },
  { title: "Gastronomie", to: "/#kontakt", bg: "linear-gradient(160deg,#1e1020 0%,#341a40 40%,#281430 100%)", glow: "rgba(160,80,255,.18)", img: caseBuero },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden h-screen min-h-[680px] flex items-end">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 65% 35%,rgba(40,55,80,.55) 0%,transparent 60%), radial-gradient(ellipse 100% 100% at 50% 0%,rgba(15,18,28,1) 0%,rgba(30,40,55,.9) 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 70% 60%,rgba(60,80,60,.18) 0%,transparent 60%), radial-gradient(ellipse 50% 50% at 30% 70%,rgba(80,60,40,.15) 0%,transparent 50%), linear-gradient(180deg,rgba(10,12,18,0.7) 0%,rgba(18,24,36,0.6) 40%,rgba(8,10,14,0.85) 100%)",
            }}
          />

          {/* Software hero background */}
          <div className="absolute inset-0 z-[2]">
            <img
              src={heroSoftware}
              alt="Maßgeschneiderte Software für den Mittelstand"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-center"
              style={{ filter: "saturate(0.95) contrast(1.05)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right,rgba(10,12,18,0.92) 0%,rgba(10,12,18,0.75) 30%,rgba(10,12,18,0.35) 60%,rgba(10,12,18,0.55) 100%), linear-gradient(to top,rgba(10,12,18,0.85) 0%,rgba(10,12,18,0.2) 45%,rgba(10,12,18,0.5) 100%)",
              }}
            />
          </div>
          <div className="hidden md:block absolute right-[8%] bottom-[20%] w-[320px] h-[320px] rounded-full blur-[90px] z-[3] pointer-events-none"
               style={{ background: "radial-gradient(circle,rgba(47,184,198,0.35) 0%,transparent 70%)" }} />


          <div className="relative z-[4] px-6 md:px-14 pb-16 md:pb-20 max-w-[720px] container-shell w-full">
            <h1 className="display text-white mb-6 break-words hyphens-auto" lang="de" style={{ fontSize: "clamp(38px, 9vw, 88px)", lineHeight: 1.04 }}>
              Maßgeschneiderte<br />
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Software</em><br />
              für den<br />Mittelstand
            </h1>
            <p className="text-[17px] font-light text-white/60 leading-relaxed max-w-[460px]">
              ERP, CRM, Branchensoftware und KI —<br />gebaut für deinen Betrieb, nicht für 1.000 andere.
            </p>
          </div>
        </section>

        {/* INTRO + PRODUCT CARDS */}
        <section id="produkte" className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
            <h2 className="hl-lg">
              Software als{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Kern</em>.
              Hardware als{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Option</em>.
            </h2>
            <p className="bd pt-1.5">
              SantosLab baut maßgeschneiderte Software für den Mittelstand — ERP, CRM, Branchenlösungen und KI-Integrationen.
              Wenn Hardware sinnvoll ist, ergänzen wir Terminals, Kameras oder Roboter. Aber nur dann.
              Software ist der Kern. Alles andere ist optional.
            </p>
          </div>

          {/* Dominant card — Operative Software */}
          <Link
            to="/produkte/operative-software"
            className="relative overflow-hidden rounded-[18px] min-h-[560px] md:min-h-0 md:aspect-[21/9] cursor-pointer hover-lift group block mb-3.5"
            style={{ background: "linear-gradient(145deg,#111827 0%,#1e3a5f 50%,#0f2a4a 100%)" }}
          >
            <img
              src={cardSoftware}
              alt=""
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-55 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.55) 0%,rgba(8,10,16,0.55) 30%,rgba(8,10,16,0.97) 75%,rgba(8,10,16,1) 100%)" }} />
            <div
              className="absolute w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none top-[10%] right-[5%]"
              style={{ background: "rgba(47,184,198,.28)" }}
            />
            <div className="absolute top-5 left-5 md:top-6 md:left-7 flex flex-wrap items-center gap-2 pr-16">
              <span
                className="text-[10.5px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                style={{ background: "hsl(var(--teal) / 0.18)", color: "hsl(var(--teal))", border: "1px solid hsl(var(--teal) / 0.35)" }}
              >
                Hauptprodukt
              </span>
              <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.1em]">
                Software Core
              </span>
            </div>
            <div className="absolute top-5 right-5 md:top-6 md:right-6 w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-white/15 group-hover:bg-white/25 rounded-full flex items-center justify-center transition-colors">
              <Arrow />
            </div>
            <div className="absolute bottom-6 left-5 right-5 md:bottom-8 md:left-7 md:right-7 max-w-[720px]">
              <h3 className="display text-[28px] md:text-[56px] font-bold text-white leading-[1.05] md:leading-[1.0] mb-2.5 md:mb-3.5">Operative Software</h3>
              <p className="text-[13.5px] md:text-[16px] text-white/75 leading-relaxed mb-3.5 md:mb-4 max-w-[600px]">
                ERP, CRM, Branchensoftware — exakt auf deinen Betrieb zugeschnitten. Eine Codebase, eine Wahrheit.
                Das ist, was wir tun. Alles andere ist Ergänzung.
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {["ERP", "CRM", "Branchensoftware", "KI-Integration"].map((t) => (
                  <span key={t} className="text-[11px] md:text-[11.5px] text-white/85 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Secondary row — KI, Terminals, Roboter (Add-on) */}
          <div className="flex items-center gap-3 mt-7 mb-3.5">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10.5px] font-medium text-white/40 uppercase tracking-[0.16em]">
              Optionale Ergänzungen
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid md:grid-cols-3 gap-3.5">
            {productCards.map((c, i) => {
              const Cmp: any = c.href ? Link : "div";
              const cmpProps: any = c.href ? { to: c.href } : {};
              return (
                <Cmp
                  key={c.title}
                  {...cmpProps}
                  className="relative overflow-hidden rounded-[18px] aspect-[4/3] cursor-pointer hover-lift group block"
                  style={{ background: c.bg, animationDelay: `${i * 80}ms` }}
                >
                  <img
                    src={c.img}
                    alt=""
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0.45) 0%,rgba(8,10,16,0.35) 40%,rgba(8,10,16,0.85) 100%)" }} />
                  <div
                    className={`absolute w-[220px] h-[220px] rounded-full blur-[70px] pointer-events-none ${c.glowPos}`}
                    style={{ background: c.glow }}
                  />
                  <div className="absolute top-5 left-6 text-[11px] font-medium text-white/45 uppercase tracking-[0.1em]">
                    {c.tag}
                  </div>
                  <div className="absolute top-5 right-5 w-[34px] h-[34px] bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                    <Arrow />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="display text-[24px] md:text-[26px] font-bold text-white leading-none">{c.title}</h3>
                    <p className="text-[12.5px] text-white/50 mt-1.5">{c.desc}</p>
                  </div>
                </Cmp>
              );
            })}
          </div>
        </section>

        {/* FEATURE: ROVER (Add-on) */}
        <section id="anwendungen" className="pb-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Wenn Software allein nicht reicht —{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Hardware als Add-on</em>
            </h2>
            <p className="bd pt-1.5">
              Manche Betriebe brauchen mehr als Pixel. Wenn dein Prozess Hände, Augen oder Räder benötigt,
              ergänzen wir das System um Terminals, Vision-Kameras oder autonome Roboter — direkt angebunden
              an die Software, die wir für dich gebaut haben. Optional. Auf Wunsch. Nie als Standard.
            </p>
          </div>

          <div
            className="relative rounded-[18px] overflow-hidden min-h-[420px] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#10181a 0%,#1a3035 40%,#0d2028 100%)" }}
          >
            <img
              src={roverWarehouse}
              alt="Autonomer Lager-Roboter zwischen Regalreihen mit Teal-LEDs"
              width={1600}
              height={900}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg,rgba(10,20,25,0.45) 0%,rgba(10,20,25,0.7) 100%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[40px]"
              style={{ background: "radial-gradient(ellipse,rgba(47,184,198,.18) 0%,transparent 70%)" }}
            />
          </div>
        </section>

        {/* WAS WIR BAUEN */}
        <section id="bauen" className="pb-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Was wir{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>bauen</em>
            </h2>
            <p className="bd pt-1.5">
              Vier Disziplinen, ein Ziel: dein Betrieb läuft auf Systemen, die zu dir passen — nicht umgekehrt.
              Keine Lizenz-Akrobatik, keine endlosen Customizing-Projekte. Eine Codebase, gebaut für deine Realität.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {buildTypes.map((b, i) => (
              <Link
                key={b.title}
                to={b.href}
                className="relative overflow-hidden rounded-[18px] aspect-[4/5] hover-lift group p-7 flex flex-col justify-between block"
                style={{
                  background: "linear-gradient(155deg,#0f1722 0%,#152538 50%,#0c1828 100%)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="absolute w-[260px] h-[260px] rounded-full blur-[80px] -top-12 -right-12 pointer-events-none"
                  style={{ background: "rgba(47,184,198,.18)" }}
                />
                <div className="absolute top-5 right-5 w-[34px] h-[34px] bg-white/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-[2]">
                  <Arrow />
                </div>
                <div className="relative z-[2] text-[11px] font-medium text-white/40 uppercase tracking-[0.12em]">
                  {b.tag}
                </div>
                <div className="relative z-[2]">
                  <h3 className="display text-[22px] md:text-[24px] font-bold text-white leading-tight mb-3">
                    {b.title}
                  </h3>
                  <p className="text-[13px] text-white/55 leading-relaxed">{b.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BRANCHEN */}
        <section id="branchen" className="pb-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Software für{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>jede Branche</em>
            </h2>
            <p className="bd pt-1.5">
              Jede Branche hat ihre eigenen Prozesse, Regeln und Engpässe. Wir haben für jede die Vorlagen —
              und passen sie an deinen Betrieb an. Vom Wareneingang bis zur Versandkontrolle, vom Tresen bis zur Halle.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {branchen.map((u) => (
              <Link
                key={u.title}
                to={u.to}
                className="relative overflow-hidden rounded-[18px] aspect-[2/3] cursor-pointer hover-lift group block"
                style={{ background: u.bg }}
              >
                <img
                  src={u.img}
                  alt={u.title.replace("\n", " ")}
                  width={768}
                  height={1152}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg,rgba(8,12,20,0.25) 0%,rgba(8,12,20,0.85) 100%)" }}
                />
                <div
                  className="absolute w-[260px] h-[260px] rounded-full blur-[80px] top-[25%] left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ background: u.glow }}
                />
                <div className="absolute bottom-6 left-6 right-6 z-[2]">
                  <h3 className="display text-[20px] md:text-[22px] font-bold text-white leading-tight whitespace-pre-line">{u.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* NUMBERS STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-border container-shell">
          {[
            { n: "100", em: "%", l: "Projekte die\nlive gehen" },
            { n: "4", em: "", l: "Wochen bis\nzum Prototyp" },
            { n: "5", em: "+", l: "Branchen\nim Einsatz" },
            { n: "10", em: "+", l: "Jahre\nErfahrung" },
          ].map((x, i) => (
            <div key={i} className={`px-8 md:px-12 py-10 ${i < 3 ? "md:border-r border-border" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""}`}>
              <div className="display text-[44px] md:text-[52px] font-bold leading-none mb-1.5">
                {x.n}<em className="not-italic" style={{ color: "hsl(var(--teal))" }}>{x.em}</em>
              </div>
              <div className="text-[13.5px] text-muted-foreground whitespace-pre-line leading-snug">{x.l}</div>
            </div>
          ))}
        </div>

        {/* SANTOSOS ECOSYSTEM */}
        <section id="santosos" className="py-20 md:py-24 section-x container-shell">
          <div
            className="relative rounded-[18px] overflow-hidden p-10 md:p-20"
            style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 40%,#06182e 70%,#030c18 100%)" }}
          >
            <div
              className="absolute -right-20 -top-20 w-[480px] h-[480px] rounded-full blur-[60px] pointer-events-none animate-orb"
              style={{ background: "radial-gradient(circle,rgba(47,184,198,.18) 0%,transparent 65%)" }}
            />
            <div
              className="absolute left-[35%] -bottom-16 w-[320px] h-[320px] rounded-full blur-[60px] pointer-events-none animate-orb"
              style={{ background: "radial-gradient(circle,rgba(80,120,255,.12) 0%,transparent 65%)", animationDirection: "reverse" }}
            />
            <div className="relative z-[2] max-w-[580px]">
              <h2 className="display text-white mb-6" style={{ fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1.04 }}>
                <span style={{ color: "hsl(var(--teal))" }}>SantosOS.</span><br />
                Das Betriebssystem hinter jedem Projekt
              </h2>
              <p className="text-[15.5px] text-white/55 leading-[1.8] mb-10">
                SantosOS ist das Fundament, auf dem wir bauen — wiederverwendbare Module für Auth, Daten, Rollen,
                Workflows und KI. So entstehen deine Systeme schneller, sicherer und ohne Vendor-Lock-in.
              </p>
              <Link to="/santosos" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-3 py-3 rounded-full transition-colors">
                SantosOS entdecken
                <span className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <Arrow stroke="#111" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* HALTUNG */}
        <section id="unternehmen" className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-0">
            <h2 className="hl-lg max-w-[540px]">
              Kein <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Template</em>.<br />
              Kein <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Kompromiss</em>.
            </h2>
            <p className="bd pt-2 max-w-[480px]">
              Wir bauen, was du brauchst — und nichts, was du nicht brauchst.
              Keine aufgeblasenen Standardlösungen, keine Lizenz-Akrobatik, keine Module für die du extra zahlst und nie nutzt.
              Dein Betrieb bekommt ein System, das genau eure Realität abbildet. Sonst nichts.
            </p>
          </div>
          <div className="hl-md text-center pt-16 mt-16 border-t border-border">
            Wir bauen für den Mittelstand.
          </div>
        </section>


        {/* FAQ — Software vs. Robotics */}
        <section id="faq" className="section-x pb-20 container-shell">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
            <div>
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.14em] mb-4">
                FAQ
              </div>
              <h2 className="hl-lg">
                Software{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>oder</em>{" "}
                Roboter?
              </h2>
              <p className="bd pt-4 max-w-md">
                Die häufigsten Fragen dazu, wie Software-Kern und Hardware-Add-on bei uns zusammenspielen.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                {
                  q: "Baut ihr primär Software oder Roboter?",
                  a: "Software. SantosLab ist ein Softwarestudio für den Mittelstand — ERP, CRM, Branchenlösungen und KI-Integrationen. Der autonome Roboter ist eine optionale Hardware-Erweiterung für Kunden, deren Prozesse über reine Software hinausgehen.",
                },
                {
                  q: "Muss ich den Roboter mitbestellen?",
                  a: "Nein. Die Software steht für sich. Der Roboter wird nur eingesetzt, wenn ein physischer Prozess (Kommissionierung, innerbetrieblicher Transport, Nachtschicht-Inventur) ihn rechtfertigt — und immer angebunden an die Software, die wir für dich gebaut haben.",
                },
                {
                  q: "Kann ich den Roboter ohne eure Software einsetzen?",
                  a: "Nein. Der Roboter ist kein Standalone-Produkt. Er funktioniert als Teil eines Systems, das wir gemeinsam aufsetzen — über die Software erhält er Aufträge, Routen und Übergabepunkte.",
                },
                {
                  q: "Wann macht der Roboter wirtschaftlich Sinn?",
                  a: "Typischerweise dort, wo 1–2 Vollzeitkräfte für wiederholbare Transport- oder Kommissionieraufgaben gebunden sind. ROI liegt erfahrungsgemäß bei 12–18 Monaten — abhängig von Schichten, Wegelängen und Volumen.",
                },
                {
                  q: "Was kostet ein Software-Projekt im Vergleich zum Roboter-Add-on?",
                  a: "Software-Projekte starten je nach Umfang im niedrigen fünfstelligen Bereich; Enterprise-Systeme deutlich darüber. Der Roboter ist eine zusätzliche Hardware-Investition, die separat kalkuliert wird — sinnvoll, wenn die operative Software bereits steht.",
                },
                {
                  q: "Wie lange dauert es bis zum ersten Ergebnis?",
                  a: "Erste Prototypen der Software stehen meist innerhalb weniger Wochen. Roboter-Integration wird erst danach geplant — wenn Datenflüsse, Prozesse und Übergaben sauber digital abgebildet sind.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group rounded-[14px] border border-border bg-[#0f1722] open:bg-[#121b2a] transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 md:p-6">
                    <span className="text-[15px] md:text-[16px] font-medium text-white pr-4">
                      {item.q}
                    </span>
                    <span className="w-[28px] h-[28px] shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-[16px] leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-[14px] text-white/60 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  ["Baut ihr primär Software oder Roboter?", "Software. SantosLab ist ein Softwarestudio für den Mittelstand — ERP, CRM, Branchenlösungen und KI-Integrationen. Der autonome Roboter ist eine optionale Hardware-Erweiterung."],
                  ["Muss ich den Roboter mitbestellen?", "Nein. Die Software steht für sich. Der Roboter wird nur eingesetzt, wenn ein physischer Prozess ihn rechtfertigt."],
                  ["Kann ich den Roboter ohne eure Software einsetzen?", "Nein. Der Roboter ist kein Standalone-Produkt, sondern Teil eines Systems, das über unsere Software gesteuert wird."],
                  ["Wann macht der Roboter wirtschaftlich Sinn?", "Wenn 1–2 Vollzeitkräfte für wiederholbare Transport- oder Kommissionieraufgaben gebunden sind. ROI typisch in 12–18 Monaten."],
                  ["Was kostet ein Software-Projekt im Vergleich zum Roboter-Add-on?", "Software-Projekte starten im niedrigen fünfstelligen Bereich. Der Roboter ist eine zusätzliche, separat kalkulierte Hardware-Investition."],
                  ["Wie lange dauert es bis zum ersten Ergebnis?", "Erste Software-Prototypen entstehen in wenigen Wochen. Roboter-Integration folgt erst, wenn Prozesse digital sauber abgebildet sind."],
                ].map(([q, a]) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              }),
            }}
          />
        </section>

        {/* CTA DARK */}
        <div className="section-x pb-14 container-shell">
          <div
            id="contact"
            className="relative rounded-[18px] overflow-hidden min-h-[460px] flex items-end"
          >
            <img
              src={ctaControl}
              alt="Dunkler Leitstand mit teal Datenvisualisierung"
              width={1600}
              height={900}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right,rgba(10,15,25,0.96) 35%,rgba(10,15,25,0.55) 75%,rgba(10,15,25,0.35) 100%)" }}
            />
            <div className="relative z-[2] p-10 md:p-16 max-w-[55%]">
              <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 46px)", lineHeight: 1.1 }}>
                Mach einen Schritt in Richtung smarter Automatisierung
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.75] mb-9">
                Arbeite mit uns zusammen, um das richtige System für deine größten Herausforderungen zu finden.
                Wir helfen dir bei der Auswahl aus unserem umfassenden Angebot, damit du direkt loslegen kannst.
              </p>
              <Link to="/kontakt" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full transition-colors">
                Kontakt aufnehmen
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

export default Index;
