import FadeInSection from "@/components/ui/FadeInSection";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Webapps",
    description: "Vollständige Web-Anwendungen mit moderner Technologie.",
  },
  {
    title: "Landingpages",
    description: "Conversion-optimierte Seiten, die Besucher in Kunden verwandeln.",
  },
  {
    title: "Software",
    description: "Individuelle Lösungen für spezifische Geschäftsprozesse.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="section bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-wide mb-4">
              Leistungen
            </p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">
              Alles, was dein Unternehmen digital braucht.
            </h2>
          </div>
        </FadeInSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <FadeInSection key={service.title} delay={index * 100}>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="body-md">
                  {service.description}
                </p>
                <a 
                  href="#referenzen" 
                  className="inline-flex items-center gap-1 text-accent mt-6 hover:gap-2 transition-all duration-300"
                >
                  Projekte ansehen
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
