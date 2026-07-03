import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cog, Users, BarChart3, Layers, Database, Factory, Building2, Network, TrendingUp, AlertTriangle, CheckCircle2, Truck, Target } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Layers, Users, Cog, Database, BarChart3];
const useCaseIcons = [Factory, Building2, Network, TrendingUp];
const showcaseIcons = [Truck, Target];

const Enterprise = () => {
  const { t } = useLanguage();
  const e = t.enterprise;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          </div>
          <div className="container-narrow text-center relative z-10">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{e.badge}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h1 className="headline-xl text-foreground mb-8 max-w-4xl mx-auto">
                {e.heroHeadline1}<br /><span className="gradient-text">{e.heroHeadline2}</span>
              </h1>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-lg max-w-2xl mx-auto mb-12">{e.heroSub}</p>
            </MotionSection>
            <MotionSection delay={350}>
              <Link to="/kontakt">
                <Button variant="apple" size="lg" className="group">
                  {e.heroCta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </MotionSection>
          </div>
        </section>

        {/* Problem */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto text-center">
              <MotionSection>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.problemLabel}</p>
                <h2 className="headline-lg text-foreground mb-8">{e.problemTitle}</h2>
              </MotionSection>
              <MotionSection delay={100}>
                <p className="body-md mb-12">{e.problemBody}</p>
              </MotionSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {e.problems.map((problem, index) => (
                <MotionSection key={problem} delay={index * 100}>
                  <motion.div className="glass-card p-5 flex items-center gap-4" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-foreground font-medium">{problem}</span>
                  </motion.div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Lösung */}
        <section className="section">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto text-center">
              <MotionSection>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.solutionLabel}</p>
                <h2 className="headline-lg text-foreground mb-8">{e.solutionTitle}</h2>
              </MotionSection>
              <MotionSection delay={100}>
                <div className="space-y-6">
                  <p className="body-md">{e.solutionBody}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">{e.solutionSub}</p>
                </div>
              </MotionSection>
            </div>
          </div>
        </section>

        {/* Was wir bauen */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <MotionSection>
              <div className="text-center mb-20">
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.buildLabel}</p>
                <h2 className="headline-lg text-foreground max-w-3xl mx-auto">{e.buildTitle}</h2>
              </div>
            </MotionSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {e.buildItems.map((item, index) => {
                const Icon = icons[index];
                return (
                  <MotionSection key={item.label} delay={index * 100}>
                    <motion.div className="glass-card p-8 h-full flex flex-col gap-3" whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-foreground font-medium text-lg">{item.label}</span>
                      {item.desc && <span className="text-muted-foreground text-sm">{item.desc}</span>}
                    </motion.div>
                  </MotionSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Einsatzbereiche */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="text-center mb-8">
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.useCaseLabel}</p>
                <h2 className="headline-lg text-foreground max-w-3xl mx-auto mb-6">{e.useCaseTitle}</h2>
              </div>
            </MotionSection>
            <MotionSection delay={50}>
              <p className="body-md text-center max-w-2xl mx-auto mb-16">{e.useCaseBody}</p>
            </MotionSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {e.useCases.map((label, index) => {
                const Icon = useCaseIcons[index];
                return (
                  <MotionSection key={label} delay={index * 100}>
                    <motion.div className="glass-card p-8 h-full flex items-center gap-4" whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-foreground font-medium text-lg">{label}</span>
                    </motion.div>
                  </MotionSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <MotionSection>
              <div className="text-center mb-8">
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.showcaseLabel}</p>
                <h2 className="headline-lg text-foreground max-w-3xl mx-auto mb-6">{e.showcaseTitle}</h2>
              </div>
            </MotionSection>
            <MotionSection delay={50}>
              <p className="body-md text-center max-w-2xl mx-auto mb-16">{e.showcaseSub}</p>
            </MotionSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {e.showcaseCards.map((card, index) => {
                const Icon = showcaseIcons[index];
                const linkTo = card.slug === "delivery" ? "/demo/delivery" : `/enterprise/${card.slug}`;
                return (
                  <MotionSection key={card.slug} delay={index * 100}>
                    <motion.div className="glass-card p-8 h-full flex flex-col gap-4" whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-foreground font-semibold text-xl">{card.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                      <Link to={linkTo}>
                        <Button variant="appleOutline" size="default" className="group mt-2 w-full">
                          {card.cta}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                  </MotionSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ergebnis */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <MotionSection>
              <div className="text-center mb-20">
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.resultLabel}</p>
                <h2 className="headline-lg text-foreground max-w-3xl mx-auto">{e.resultTitle}</h2>
              </div>
            </MotionSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {e.results.map((result, index) => (
                <MotionSection key={result} delay={index * 80}>
                  <motion.div className="glass-card p-5 flex items-center gap-4" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{result}</span>
                  </motion.div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Arbeitsweise */}
        <section className="section">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto text-center">
              <MotionSection>
                <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{e.workLabel}</p>
                <h2 className="headline-lg text-foreground mb-8">{e.workTitle}</h2>
              </MotionSection>
              <MotionSection delay={100}>
                <div className="space-y-6">
                  <p className="body-md">{e.workBody}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg">{e.workSub}</p>
                </div>
              </MotionSection>
            </div>
          </div>
        </section>

        {/* Authority Line */}
        <section className="section bg-secondary">
          <div className="container-narrow">
            <MotionSection>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground leading-relaxed text-lg italic">{e.authority}</p>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <motion.div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
                <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
                </motion.div>
                <div className="relative z-10">
                  <h2 className="headline-lg text-foreground mb-6 max-w-2xl mx-auto">{e.ctaTitle}</h2>
                  <p className="body-md max-w-lg mx-auto mb-4">{e.ctaBody}</p>
                  <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-10">
                    Enterprise-Software von SantosLab ist{" "}
                    <Link to="/cra" className="text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:opacity-80 transition-opacity">
                      Cyber Resilience Act–konform
                    </Link>{" "}— Secure by Design, SBOM und Meldepflichten inklusive.
                  </p>
                  <Link to="/kontakt">
                    <Button variant="apple" size="lg" className="group">
                      {e.ctaButton}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </MotionSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
