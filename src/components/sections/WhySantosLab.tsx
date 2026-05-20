import MotionSection from "@/components/ui/MotionSection";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const WhySantosLab = () => {
  const { t } = useLanguage();

  return (
    <section id="why" className="section bg-secondary">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionSection direction="left">
            <div>
              <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{t.why.label}</p>
              <h2 className="headline-lg text-foreground mb-6">{t.why.title}</h2>
              <p className="body-md mb-8">{t.why.body}</p>
              <Link to="/demo" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
                {t.why.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionSection>

          <MotionSection delay={150} direction="right">
            <div className="space-y-4">
              {t.why.reasons.map((reason, index) => (
                <motion.div key={reason} className="glass-card p-5 flex items-center gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.5 }} viewport={{ once: true }} whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
};

export default WhySantosLab;
