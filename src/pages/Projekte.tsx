import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Arrow = ({ stroke = "white" }: { stroke?: string }) => (
  <svg width="11" height="11" viewBox="0 0 11 11">
    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke={stroke} strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

const cases = [
  {
    to: "/case/mittelstand-erp",
    category: "Custom ERP · AI-Layer",
    title: "7M€ Umsatz. Prozesse liefen in Excel und Telefonanrufen.",
    sub: "Wie wir für ein 40-Personen-Unternehmen ein custom ERP mit aktiver AI-Schicht gebaut haben — Fehlerquote −80 % nach zwei Monaten.",
    tags: ["ERP", "AI-Layer", "Mittelstand"],
    gradient: "linear-gradient(145deg,#111827 0%,#1e3a5f 50%,#0f2a4a 100%)",
  },
  {
    to: "/case/chemievertrieb-crm",
    category: "Außendienst-CRM · AI-Layer",
    title: "Außendienst auf Zuruf. Pipeline unsichtbar.",
    sub: "Wie wir für einen Chemievertriebler ein custom Außendienst-CRM mit AI-Schicht gebaut haben — kein Lead versickert mehr.",
    tags: ["CRM", "Außendienst", "Chemie"],
    gradient: "linear-gradient(145deg,#0f2024 0%,#1a3a3f 50%,#0a1f24 100%)",
  },
];

const Projekte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 md:pt-40 pb-12 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground mb-5">
                Referenzen
              </p>
              <h1 className="hl-lg">
                Reale Projekte.{" "}
                <em className="not-italic" style={{ color: "hsl(var(--teal))" }}>Messbare Ergebnisse</em>.
              </h1>
            </div>
            <p className="bd pt-1.5">
              Ausgewählte Case Studies aus dem Mittelstand: individuelle Software-Systeme mit aktiver AI-Schicht,
              live im Betrieb. Keine Demos — sondern Systeme, die täglich Umsatz, Prozesse und Entscheidungen tragen.
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-24 md:pb-32 section-x container-shell">
          <div className="grid md:grid-cols-2 gap-3.5">
            {cases.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group relative overflow-hidden rounded-[18px] p-8 md:p-10 min-h-[420px] flex flex-col justify-between hover-lift"
                style={{ background: c.gradient }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/55">
                    {c.category}
                  </p>
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                    <Arrow />
                  </span>
                </div>

                <div>
                  <h2 className="display text-white text-[24px] md:text-[28px] leading-[1.15] font-semibold mb-4 max-w-[460px]">
                    {c.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-white/70 mb-6 max-w-[460px]">
                    {c.sub}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-white/70 border border-white/15 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Closing line */}
          <div className="hl-md text-center pt-20 mt-20 border-t border-border max-w-3xl mx-auto">
            Dein Projekt wird das nächste sein, das hier steht.
          </div>
          <div className="text-center mt-8">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-foreground text-background text-[13.5px] font-medium px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Projekt starten <Arrow stroke="currentColor" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projekte;
