import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const DemoDetail = () => {
  const { system } = useParams<{ system: string }>();
  const { t } = useLanguage();
  const d = t.demo;

  const card = d.cards.find((c) => c.slug === system);

  if (!card) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section flex items-center justify-center">
          <div className="text-center">
            <h1 className="headline-lg text-foreground mb-6">System nicht gefunden</h1>
            <Link to="/demo">
              <Button variant="apple" size="lg">
                <ArrowLeft className="w-4 h-4 mr-1" />
                {d.backLabel}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                <span className="text-sm">{d.backLabel}</span>
              </Link>
            </MotionSection>
            <MotionSection delay={100}>
              <h1 className="headline-xl text-foreground mb-8 max-w-4xl mx-auto">
                {d.detailHeadline} <span className="gradient-text">{card.title}</span>
              </h1>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-lg max-w-2xl mx-auto mb-6">{card.detailDescription}</p>
            </MotionSection>
            <MotionSection delay={300}>
              <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto mb-12">
                <ul className="space-y-4 text-left">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>
            <MotionSection delay={400}>
              <Link to="/kontakt">
                <Button variant="apple" size="lg" className="group">
                  {d.detailCta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
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
                  <h2 className="headline-lg text-foreground mb-6 max-w-2xl mx-auto">{d.ctaTitle}</h2>
                  <p className="body-md max-w-lg mx-auto mb-10">{d.ctaBody}</p>
                  <Link to="/kontakt">
                    <Button variant="apple" size="lg" className="group">
                      {d.ctaButton}
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

export default DemoDetail;
