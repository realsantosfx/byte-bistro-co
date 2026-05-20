import MotionSection from "@/components/ui/MotionSection";
import { Code2, TrendingUp, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Code2, TrendingUp, Lightbulb];

const WhatWeBuild = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container-narrow">
        <MotionSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{t.services.label}</p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">{t.services.title}</h2>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <MotionSection key={service.title} delay={index * 120} direction={index === 0 ? "left" : index === 2 ? "right" : "up"}>
                <motion.div className="glass-card p-8 h-full" whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.list.map((item, i) => (
                      <motion.li key={item} className="text-sm text-muted-foreground flex items-center gap-2" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }} viewport={{ once: true }}>
                        <div className="w-1 h-1 rounded-full bg-accent/50" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection delay={400}>
          <div className="text-center mt-16">
            <Link to="/demo" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
              {t.services.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default WhatWeBuild;
