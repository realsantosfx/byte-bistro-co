import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Search, Code2, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Search, Code2, Handshake];

const WaysToWork = () => {
  const { t } = useLanguage();

  return (
    <section id="work-with-us" className="section bg-secondary">
      <div className="container-narrow">
        <MotionSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{t.ways.label}</p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">{t.ways.title}</h2>
          </div>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.ways.items.map((entry, index) => {
            const Icon = icons[index];
            return (
              <MotionSection key={entry.title} delay={index * 120}>
                <motion.div className="glass-card p-8 h-full flex flex-col" whileHover={{ y: -4, transition: { duration: 0.3 } }}>
                  <motion.div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{entry.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{entry.description}</p>
                  {entry.link?.startsWith("http") ? (
                    <a href={entry.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
                      {entry.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link to={entry.link || "/kontakt"} className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
                      {entry.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaysToWork;
