import FadeInSection from "@/components/ui/FadeInSection";
import portraitImg from "@/assets/portrait.png";

const About = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Portrait */}
          <FadeInSection>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <img 
                  src={portraitImg} 
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeInSection>

          {/* Content */}
          <div>
            <FadeInSection delay={100}>
              <p className="text-muted-foreground text-sm tracking-wide mb-4">
                Über mich
              </p>
            </FadeInSection>

            <FadeInSection delay={150}>
              <h2 className="headline-md text-foreground mb-8">
                Hallo, ich bin Santos.
              </h2>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ich entwickle digitale Produkte für Unternehmen, die mehr wollen als eine Standard-Website. Mein Fokus liegt auf maßgeschneiderten Lösungen, die echte Probleme lösen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mit über 5 Jahren Erfahrung in der Softwareentwicklung habe ich gelernt, dass die besten Produkte durch enge Zusammenarbeit entstehen. Ich höre zu, verstehe deine Anforderungen und setze sie in performante, skalierbare Software um.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Keine Buzzwords. Keine unnötige Komplexität. Nur Lösungen, die funktionieren.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={250}>
              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-3xl font-semibold text-foreground">5+</p>
                    <p className="text-sm text-muted-foreground mt-1">Jahre Erfahrung</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-foreground">30+</p>
                    <p className="text-sm text-muted-foreground mt-1">Projekte</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground mt-1">Zufriedenheit</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
