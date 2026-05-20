import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Cpu, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import MotionSection from "@/components/ui/MotionSection";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-[18%] right-[4%] lg:right-[8%] glass-card p-3 lg:p-4 w-36 lg:w-48 opacity-60 lg:opacity-100" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center"><BarChart3 className="w-4 h-4 text-accent" /></div>
            <span className="text-xs text-muted-foreground">{t.hero.statCard1Label}</span>
          </div>
          <p className="text-lg font-semibold text-foreground">+127%</p>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div className="h-full bg-accent/40 rounded-full" initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 2, delay: 1, ease: "easeOut" }} />
          </div>
        </motion.div>
        <motion.div className="absolute bottom-[22%] left-[2%] lg:left-[6%] glass-card p-3 lg:p-4 w-40 lg:w-52 opacity-60 lg:opacity-100" animate={{ y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center"><Cpu className="w-4 h-4 text-accent" /></div>
            <span className="text-xs text-muted-foreground">{t.hero.statCard2Label}</span>
          </div>
          <p className="text-sm text-foreground font-medium">{t.hero.statCard2Value}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.hero.statCard2Sub}</p>
        </motion.div>
        <motion.div className="absolute top-[35%] left-[3%] lg:left-[10%] glass-card p-3 lg:p-4 w-36 lg:w-44 opacity-60 lg:opacity-100" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center"><Globe className="w-4 h-4 text-accent" /></div>
            <span className="text-xs text-muted-foreground">{t.hero.statCard3Label}</span>
          </div>
          <p className="text-lg font-semibold text-foreground">0</p>
          <p className="text-xs text-muted-foreground mt-1">{t.hero.statCard3Sub}</p>
        </motion.div>
      </div>

      <motion.div className="container-narrow text-center relative z-10" style={{ y: textY, opacity }}>
        <MotionSection>
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">{t.hero.badge}</span>
          </div>
        </MotionSection>
        <MotionSection delay={100}>
          <h1 className="headline-xl text-foreground mb-8 max-w-4xl mx-auto">
            {t.hero.headline1}<br /><span className="gradient-text">{t.hero.headline2}</span>
          </h1>
        </MotionSection>
        <MotionSection delay={200}>
          <p className="body-lg max-w-2xl mx-auto mb-4">{t.hero.sub}</p>
        </MotionSection>
        <MotionSection delay={250}>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-12 font-light">{t.hero.body}</p>
        </MotionSection>
        <MotionSection delay={350}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/demo">
              <Button variant="apple" size="lg" className="group">
                {t.hero.cta1}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
                {t.hero.cta2}
              </Button>
            </Link>
          </div>
        </MotionSection>
      </motion.div>
    </section>
  );
};

export default Hero;
