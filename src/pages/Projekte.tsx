import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeInSection from "@/components/ui/FadeInSection";


const Projekte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-14">
        <section className="section">
          <div className="container-narrow">
            <FadeInSection>
              <div className="text-center mb-20">
                <p className="text-muted-foreground text-sm tracking-wide mb-4">
                  Portfolio
                </p>
                <h1 className="headline-xl text-foreground max-w-3xl mx-auto">
                  Alle Projekte.
                </h1>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="mb-24">
                <p className="text-muted-foreground text-sm tracking-wide mb-6 text-center">Case Studies</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      to: "/case/mittelstand-erp",
                      category: "Custom ERP · AI-Layer",
                      title: "7M€ Umsatz. Prozesse liefen in Excel und Telefonanrufen.",
                      sub: "Wie wir für ein 40-Personen-Unternehmen ein custom ERP mit aktiver AI-Schicht gebaut haben — Fehlerquote −80% nach zwei Monaten.",
                      gradient: "linear-gradient(145deg,#111827 0%,#1e3a5f 50%,#0f2a4a 100%)",
                    },
                    {
                      to: "/case/chemievertrieb-crm",
                      category: "Außendienst-CRM · AI-Layer",
                      title: "Außendienst auf Zuruf. Pipeline unsichtbar.",
                      sub: "Wie wir für einen Chemievertriebler ein custom Außendienst-CRM mit AI-Schicht gebaut haben — kein Lead versickert mehr.",
                      gradient: "linear-gradient(145deg,#0f2024 0%,#1a3a3f 50%,#0a1f24 100%)",
                    },
                  ].map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      className="group relative overflow-hidden rounded-[18px] p-8 md:p-10 min-h-[320px] flex flex-col justify-between hover-lift"
                      style={{ background: c.gradient }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">{c.category}</p>
                      <div>
                        <h3 className="display text-white text-[22px] md:text-[26px] leading-tight font-semibold mb-3">{c.title}</h3>
                        <p className="text-[14px] text-white/70 mb-5 max-w-[440px]">{c.sub}</p>
                        <span className="inline-flex items-center gap-1.5 text-[13.5px] text-white group-hover:gap-2.5 transition-all">
                          Case Study lesen <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projekte;
