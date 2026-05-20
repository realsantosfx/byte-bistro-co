import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Target, Truck, ConciergeBell, MapPin, UtensilsCrossed, Scissors, Palette } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  business: Building2,
  salesystem: Target,
  delivery: Truck,
  "guest-service": ConciergeBell,
  venue: MapPin,
  restaurant: UtensilsCrossed,
  barber: Scissors,
  studio: Palette,
};

const ENTERPRISE_SLUGS = ["business", "salesystem", "delivery"];

const Demo = () => {
  const { t, lang } = useLanguage();
  const d = t.demo;

  const enterpriseCards = d.cards.filter((c) => ENTERPRISE_SLUGS.includes(c.slug));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          </div>
          <div className="container-narrow text-center relative z-10">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{d.badge}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h1 className="headline-xl text-foreground mb-8 max-w-4xl mx-auto">
                {d.heroHeadline1}
                <br />
                <span className="gradient-text">{d.heroHeadline2}</span>
              </h1>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-lg max-w-2xl mx-auto mb-12 whitespace-pre-line">{d.heroSub}</p>
            </MotionSection>
          </div>
        </section>

        {/* Enterprise Systems */}
        <section className="section">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enterpriseCards.map((card, index) => {
                const Icon = iconMap[card.slug] || Building2;
                return (
                  <MotionSection key={card.slug} delay={index * 100}>
                    <motion.div
                      className="glass-card p-8 h-full flex flex-col gap-4"
                      whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-foreground font-semibold text-xl">{card.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                      <Link to={`/demo/${card.slug}`}>
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

      </main>
      <Footer />
    </div>
  );
};

export default Demo;
