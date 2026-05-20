import MotionSection from "@/components/ui/MotionSection";
import { Search, Hammer, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Search, Hammer, Rocket];

const Approach = () => {
  const { t } = useLanguage();

  return (
    <section id="approach" className="section bg-secondary">
      <div className="container-narrow">
        <MotionSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{t.approach.label}</p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">{t.approach.title}</h2>
          </div>
        </MotionSection>

        <div className="relative">
          <motion.div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 origin-left" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {t.approach.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <MotionSection key={step.number} delay={index * 200}>
                  <div className="text-center relative">
                    <motion.div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mx-auto mb-6 relative z-10 bg-secondary" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Icon className="w-7 h-7 text-accent" />
                    </motion.div>
                    <span className="text-xs font-medium text-accent tracking-widest mb-3 block">STEP {step.number}</span>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
                  </div>
                </MotionSection>
              );
            })}
          </div>
        </div>

        <MotionSection delay={700}>
          <div className="text-center mt-16">
            <Link to="/demo" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
              {t.approach.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default Approach;
