import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/robot-arm.jpg";
import workVideo from "@/assets/site/robot-arm-work.mp4.asset.json";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const modules = [
  { tag: "Achsen", title: "6 Achsen, präzise gesteuert", desc: "Stationäre Industrie-Arme mit voller 6-DOF-Beweglichkeit. Wiederholgenauigkeit im Zehntel-Millimeter-Bereich für Pick-and-Place und Montage." },
  { tag: "Vision", title: "Sehen, bevor sie greifen", desc: "Vision-Modul aus unserer lokalen KI klassifiziert Teile in Echtzeit. Greifer wählt selbst die richtige Anflug-Pose — auch bei wechselnden Teilen." },
  { tag: "Aufträge", title: "Direkt aus ERP & MES", desc: "Auftragsdaten kommen aus deinem System — Stückzahlen, Varianten, Priorität. Kein extra Steuerungs-Layer, keine getrennte Logik." },
  { tag: "Qualität", title: "Prüfung im selben Takt", desc: "Inline-Qualitätskontrolle mit Vision und Kraftsensorik. Schlechte Teile werden sofort aussortiert — bevor sie weiterlaufen." },
];

const facts = [
  { n: "6", em: " Achsen", l: "Volle DOF\nfür komplexe Posen" },
  { n: "±", em: "0.1mm", l: "Wiederholgenauigkeit\nim Pick-and-Place" },
  { n: "1", em: "Linie", l: "Pro Pilot — später\nmehrere Stationen" },
  { n: "24", em: "/7", l: "Einsatzbereit —\nim Schichtbetrieb" },
];

const features = [
  "Pick-and-Place, Verpackung, Sortierung, Qualitätskontrolle in einem Arm",
  "Direkte Anbindung an ERP, MES und Operative Software",
  "Vision-Modul für variantenreiche Teile ohne harte Programmierung",
  "Inline-Qualitätskontrolle — keine separate Prüfstation nötig",
  "Skalierbar von einer Station bis zur kompletten Linie",
  "Wartung, Updates und Service aus Deutschland",
];

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative overflow-hidden min-h-[640px] flex items-end">
          <video
            src={workVideo.url}
            autoPlay
            muted
            loop
            playsInline
            poster={heroImg}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(8,10,18,0.95) 0%,rgba(8,10,18,0.7) 45%,rgba(8,10,18,0.35) 100%), linear-gradient(to top,rgba(8,10,18,0.92) 0%,rgba(8,10,18,0.2) 60%,rgba(8,10,18,0.5) 100%)" }} />
          <div className="hidden md:block absolute right-[8%] bottom-[20%] w-[320px] h-[320px] rounded-full blur-[90px] pointer-events-none" style={{ background: "radial-gradient(circle,rgba(47,184,198,0.28) 0%,transparent 70%)" }} />
          <div className="relative z-[2] px-6 md:px-14 pb-16 md:pb-20 max-w-[760px] container-shell w-full">
            <div className="text-[11px] font-medium text-white/55 uppercase tracking-[0.18em] mb-6">
              Robotik — Manipulator
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              6 Achsen.<br />
              <span style={{ color: "hsl(var(--teal))" }}>Eine Logik</span>.
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[520px]">
              Stationäre Industrie-Arme für Pick-and-Place, Verpackung und Qualitätskontrolle —
              direkt aus deiner ERP- oder MES-Logik gesteuert.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link to="/kontakt" className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors">
                Pilot anfragen
                <span className="w-[32px] h-[32px] bg-[#0d0d0d] rounded-full flex items-center justify-center">
                  <Arrow />
                </span>
              </Link>
              <a href="#module" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium pl-6 pr-6 py-3.5 rounded-full transition-colors">
                Was er kann
              </a>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 section-x container-shell">
          <div className="rounded-[18px] border border-border bg-[#0f1722] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-[15px]">◐</div>
              <div className="text-[11px] font-medium text-white/45 uppercase tracking-[0.12em] whitespace-nowrap">Roboter — Add-on</div>
            </div>
            <div className="flex flex-wrap gap-2 md:flex-1">
              {["Pick-and-Place", "Verpackung", "Qualitätskontrolle", "ERP/MES-Anbindung"].map((b) => (
                <span key={b} className="text-[12px] text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">{b}</span>
              ))}
            </div>
            <div className="text-[12.5px] text-white/45 md:text-right md:max-w-[260px] leading-snug">
              <span className="text-white/35">Typisch für:</span>{" "}
              Produktionslinien, Verpackungsstationen, Endkontrolle, Sortierung.
            </div>
          </div>
          <p className="mt-5 text-[13.5px] md:text-[14px] text-white/55 leading-relaxed max-w-3xl">
            <span className="text-white/75">Warum nur als Add-on?</span> Roboter-Arme sind keine Standalone-Produkte
            bei uns — sie hängen an der gleichen Software, die deinen Rest steuert. Aufträge, Varianten und Prüfresultate
            laufen über ein System.
          </p>
        </section>

        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              Arme, die in deine{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Logik passen</em>.
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Wir integrieren marktreife Industrie-Arme — UR, KUKA, Fanuc, Doosan-class —
                und stellen die Logik bereit, die zwischen ERP-Auftrag und physischer Bewegung übersetzt.
              </p>
              <p className="bd">
                Pilot-Station: ein Arm, ein definierter Prozess, klare KPIs. Skalieren, wenn die
                Stückzahl es trägt.
              </p>
            </div>
          </div>
        </section>

        <section id="module" className="pb-24 section-x container-shell">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {modules.map((m) => (
              <div key={m.title} className="relative rounded-[14px] p-6 border border-border bg-card hover-lift">
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.14em] mb-3">{m.tag}</div>
                <h3 className="display text-[18px] font-bold leading-snug mb-2">{m.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <h2 className="hl-lg">
              Roboterarm heißt nicht{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Großprojekt</em>
            </h2>
            <p className="bd pt-1.5">
              Eine Station, ein klarer Prozess, ein gemessener Effekt. Ausbau erst, wenn
              der Pilot trägt — keine Lock-in-Verträge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-border pb-5">
                <span className="display text-[18px] font-bold text-muted-foreground/60 mt-0.5 min-w-[28px]">0{i + 1}</span>
                <span className="text-[15.5px] leading-relaxed">{f}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="section-x pb-20 container-shell">
          <div className="relative rounded-[18px] overflow-hidden p-10 md:p-16" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
            <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none" style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }} />
            <div className="relative z-[2] max-w-[640px]">
              <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.1 }}>
                Starte mit einer Pilot-Station.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-9">
                Zeig uns einen Handgriff, der täglich tausendfach passiert — wir rechnen
                ehrlich durch, ob ein Arm dort Sinn macht.
              </p>
              <Link to="/kontakt" className="inline-flex items-center gap-3 bg-white text-[#0d0d0d] text-sm font-medium pl-6 pr-3.5 py-3.5 rounded-full hover:bg-white/90 transition-colors">
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
