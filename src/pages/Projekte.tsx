import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeInSection from "@/components/ui/FadeInSection";
import ParallaxImage from "@/components/ui/ParallaxImage";

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


            <div className="space-y-24">
              {projects.map((project, index) => (
                <FadeInSection key={project.id} delay={index * 50}>
                  <Link
                    to={`/projekt/${project.id}`}
                    className="group block"
                  >
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                      <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <ParallaxImage
                          src={project.image}
                          alt={project.title}
                          className="aspect-[16/10] rounded-2xl bg-secondary"
                          speed={0.2}
                          contain
                        />
                      </div>

                      <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                        <p className="text-muted-foreground text-sm tracking-wide mb-3">
                          {project.category}
                        </p>
                        <h2 className="headline-md text-foreground mb-4 group-hover:text-muted-foreground transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="body-md mb-4">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 text-accent group-hover:gap-2 transition-all duration-300">
                          Case Study ansehen
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projekte;
