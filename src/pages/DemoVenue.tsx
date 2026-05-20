import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2, Zap, Eye } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const DemoVenue = () => {
  const { t } = useLanguage();
  const v = t.venueDetail;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
          </div>
          <div className="container-narrow text-center relative z-10">
            <MotionSection>
              <Link to="/demo" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">{v.backLabel}</span>
              </Link>
            </MotionSection>
            <MotionSection delay={100}>
              <h1 className="headline-xl text-foreground mb-8 max-w-4xl mx-auto">
                {v.heroHeadline}
              </h1>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-lg max-w-2xl mx-auto mb-12">{v.heroSub}</p>
            </MotionSection>
            <MotionSection delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/demo/venue/live">
                  <Button variant="apple" size="lg" className="group">
                    Live Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link to="/kontakt">
                  <Button variant="appleOutline" size="lg">
                    {v.heroCta}
                  </Button>
                </Link>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{v.problemLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-6">{v.problemTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-md max-w-2xl mb-8">{v.problemBody}</p>
            </MotionSection>
            <MotionSection delay={300}>
              <div className="glass-card p-8 max-w-2xl">
                <ul className="space-y-4">
                  {v.problems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{v.solutionLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-6">{v.solutionTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-md max-w-2xl mb-2">{v.solutionBody1}</p>
              <p className="body-md max-w-2xl">{v.solutionBody2}</p>
            </MotionSection>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{v.processLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-10">{v.processTitle}</h2>
            </MotionSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {v.steps.map((step, i) => (
                <MotionSection key={i} delay={200 + i * 100}>
                  <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-accent">{i + 1}</span>
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Backend */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <Eye className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{v.backendLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-8">{v.backendTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <div className="glass-card p-8 max-w-2xl">
                <ul className="space-y-4">
                  {v.backendItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Result */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{v.resultLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-8">{v.resultTitle}</h2>
            </MotionSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {v.results.map((item, i) => (
                <MotionSection key={i} delay={200 + i * 100}>
                  <div className="glass-card p-6 text-center">
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                </MotionSection>
              ))}
            </div>
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
                  <h2 className="headline-lg text-foreground mb-6 max-w-2xl mx-auto">{v.ctaTitle}</h2>
                  <p className="body-md max-w-lg mx-auto mb-10">{v.ctaBody}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/demo/venue/live">
                      <Button variant="apple" size="lg" className="group">
                        Live Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/kontakt">
                      <Button variant="appleOutline" size="lg">
                        {v.ctaButton}
                      </Button>
                    </Link>
                  </div>
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

export default DemoVenue;
