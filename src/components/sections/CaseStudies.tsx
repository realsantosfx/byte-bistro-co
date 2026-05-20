import MotionSection from "@/components/ui/MotionSection";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const CaseStudies = () => {
  const { t } = useLanguage();

  return (
    <section id="cases" className="section">
      <div className="container-narrow">
        <MotionSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{t.cases.label}</p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">{t.cases.title}</h2>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.cases.items.map((study, index) => (
            <MotionSection key={study.title} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <Link to={study.link}>
                <motion.div className="glass-card p-8 group cursor-pointer h-full" whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs text-accent tracking-widest uppercase">{study.category}</span>
                    <motion.div whileHover={{ x: 2, y: -2 }}>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.metrics.map((metric, i) => (
                      <motion.span key={metric} className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }} viewport={{ once: true }}>
                        {metric}
                      </motion.span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    {t.cases.cardCta}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </Link>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
