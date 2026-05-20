import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImg from "@/assets/site/humanoid-hero.jpg";
import workVideo from "@/assets/site/robot-humanoid-work.mp4.asset.json";
import detailImg from "@/assets/site/robot-humanoid-detail.jpg";

const Arrow = () => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="white" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const modules = [
  { tag: "Mobilität", title: "Zweibeinig — wo Räder scheitern", desc: "Treppen, enge Korridore, Stufen, unebene Böden. Humanoide kommen dorthin, wo bisher nur Menschen hingekommen sind — und übernehmen genau die Aufgaben, für die Räder zu starr sind." },
  { tag: "Greifen", title: "Hände, die Werkzeuge bedienen", desc: "Zweiarm-Setup mit feinen Greifern. Werkzeuge übergeben, Boxen heben, Maschinen befüllen — ohne Sondervorrichtungen für jeden einzelnen Handgriff." },
  { tag: "Aufträge", title: "Direkt aus deinem System", desc: "Der Humanoid bekommt Aufgaben aus der Operativen Software. Kein eigener Bediener, keine separate Konsole — derselbe Auftragspool wie für Menschen und Rover." },
  { tag: "Sicherheit", title: "Im Mischbetrieb mit Menschen", desc: "Sensorik im ganzen Körper, weiche Bewegungen, klare Audio- und Lichtsignale. Bleibt stehen, wenn jemand in den Weg läuft — und erklärt, was er gerade tut." },
];

const facts = [
  { n: "2", em: "Arme", l: "Für Greifen, Übergeben\nund Werkzeug-Handling" },
  { n: "≤", em: "30°", l: "Steigung & Stufen,\ndie er sicher bewältigt" },
  { n: "1", em: "Tag", l: "Einlernen einer\nersten Routine" },
  { n: "24", em: "/7", l: "Einsatzbereit —\nauch in der Nacht" },
];

const features = [
  "Geeignet für Schicht- und Nachtbetrieb ohne separate Aufsicht",
  "Direkte Anbindung an Operative Software & lokale KI",
  "Stufen, Treppen und enge Räume — ohne bauliche Umrüstung",
  "Werkzeugübergabe an Menschen und Maschinen",
  "Skalierbar: ein Pilot-Humanoid, später mehrere im selben System",
  "Wartung, Updates und Service aus Deutschland",
];

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* HERO with video */}
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
              Robotik — Humanoide Plattform
            </div>
            <h1 className="display text-white mb-6" style={{ fontSize: "clamp(44px, 6.5vw, 76px)", lineHeight: 1.04 }}>
              Aufrecht.<br />
              <span style={{ color: "hsl(var(--teal))" }}>Beweglich</span>.<br />
              Im Team.
            </h1>
            <p className="text-[17px] font-light text-white/65 leading-relaxed max-w-[520px]">
              Zweibeinige Roboter für Aufgaben, die bisher menschliche Beweglichkeit brauchten —
              Greifen, Übergeben, Treppen steigen. Direkt an deine Software gekoppelt.
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
              {["Treppen & Stufen", "Werkzeug-Übergabe", "Mischbetrieb mit Menschen", "Schicht & Nacht"].map((b) => (
                <span key={b} className="text-[12px] text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">{b}</span>
              ))}
            </div>
            <div className="text-[12.5px] text-white/45 md:text-right md:max-w-[260px] leading-snug">
              <span className="text-white/35">Typisch für:</span>{" "}
              Produktion, Werkzeug-Logistik, Inspektion in Mehrebenen-Gebäuden.
            </div>
          </div>
          <p className="mt-5 text-[13.5px] md:text-[14px] text-white/55 leading-relaxed max-w-3xl">
            <span className="text-white/75">Warum nur als Add-on?</span> Im Kern bauen wir Software für den Mittelstand.
            Humanoide kommen ins Spiel, wenn Aufgaben physisch werden und Räder oder fixe Greifer nicht ausreichen —
            angebunden an dieselbe Operative Software wie alle anderen Plattformen.
          </p>
        </section>

        {/* INTRO */}
        <section className="py-20 md:py-24 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <h2 className="hl-lg">
              Humanoide arbeiten dort, {" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>wo Räder aufgeben</em>.
            </h2>
            <div className="space-y-5">
              <p className="bd pt-1.5">
                Wir integrieren etablierte humanoide Plattformen — Unitree, Figure-class und ähnliche —
                und übernehmen die Aufgabensteuerung, das Logging und die Sicherheits-Logik im Mischbetrieb.
              </p>
              <p className="bd">
                Pilot-Setup: ein Humanoid mit klar definierter Routine, eingebunden in dein bestehendes System.
                Ausbauen, wenn der Case nachweislich trägt.
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO FEATURE */}
        <section className="pb-20 md:pb-24 section-x container-shell">
          <div className="relative overflow-hidden rounded-[18px] aspect-[16/9] bg-[#0a0f18]">
            <img
              src={detailImg}
              alt="Humanoider Roboter im Detail"
              loading="lazy"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(8,10,16,0) 50%,rgba(8,10,16,0.85) 100%)" }} />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[520px]">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-2">
                  Live — Humanoid im Mischbetrieb
                </div>
                <h3 className="display text-[22px] md:text-[28px] font-bold text-white leading-tight">
                  Übergabe & Werkzeug-Handling im Realbetrieb
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Greifen", "Treppen", "Übergabe", "Inspektion"].map((b) => (
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
              <div key={m.title} className="relative rounded-[14px] p-6 border border-border bg-card hover-lift">
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-[0.14em] mb-3">{m.tag}</div>
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
              Humanoid heißt nicht{" "}
              <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Showcase</em>
            </h2>
            <p className="bd pt-1.5">
              Kein Marketing-Roboter, der eine Choreografie tanzt. Wir setzen Humanoide nur ein,
              wenn die Aufgabe es rechtfertigt — und der Business Case sauber gerechnet ist.
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

        {/* CTA */}
        <div className="section-x pb-20 container-shell">
          <div className="relative rounded-[18px] overflow-hidden p-10 md:p-16" style={{ background: "linear-gradient(135deg,#060e1c 0%,#0a1e3a 45%,#06182e 100%)" }}>
            <div className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] pointer-events-none" style={{ background: "radial-gradient(circle,rgba(47,184,198,.22) 0%,transparent 65%)" }} />
            <div className="relative z-[2] max-w-[640px]">
              <h2 className="display text-white mb-5" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.1 }}>
                Starte mit einem Pilot-Humanoid.
              </h2>
              <p className="text-[15px] text-white/55 leading-[1.8] mb-9">
                Beschreib uns einen Prozess, der heute zwei Hände und zwei Beine braucht —
                wir sagen dir ehrlich, ob ein Humanoid dort wirklich Sinn macht.
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
