import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-narrow">
        <MotionSection>
          <motion.div className="glass-card p-12 md:p-20 text-center relative overflow-hidden" whileHover={{ scale: 1.005, transition: { duration: 0.5 } }}>
            <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
            </motion.div>
            <div className="relative z-10">
              <h2 className="headline-lg text-foreground mb-6 max-w-2xl mx-auto">{t.finalCta.title}</h2>
              <p className="body-md max-w-lg mx-auto mb-4">{t.finalCta.body1}</p>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto">{t.finalCta.body2}</p>
              <Link to="/kontakt">
                <Button variant="apple" size="lg" className="group">
                  {t.finalCta.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
};

export default FinalCTA;
