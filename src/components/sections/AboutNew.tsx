import MotionSection from "@/components/ui/MotionSection";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutNew = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          <MotionSection>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">{t.about.label}</p>
            <h2 className="headline-lg text-foreground mb-8">{t.about.title}</h2>
          </MotionSection>

          <ParallaxWrapper speed={0.15}>
            <MotionSection delay={100}>
              <div className="space-y-6">
                <p className="body-md">{t.about.p1}</p>
                <p className="text-muted-foreground leading-relaxed text-lg">{t.about.p2}</p>
                <p className="text-muted-foreground leading-relaxed text-lg">{t.about.p3}</p>
              </div>
            </MotionSection>
          </ParallaxWrapper>

          <MotionSection delay={200}>
            <div className="mt-12">
              <Link to="/demo" className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300">
                {t.about.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
