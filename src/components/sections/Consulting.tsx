import FadeInSection from "@/components/ui/FadeInSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Consulting = () => {
  const capabilities = [
    "KI-gestützte Prozessautomatisierung",
    "Individuelle AI-Tools für interne Abläufe",
    "Entscheidungsunterstützung durch Daten & Modelle",
  ];

  return (
    <section className="py-32 md:py-40 bg-[#f5f5f7]">
      <div className="container-narrow px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
              Mehr als Entwicklung.
            </h2>
          </FadeInSection>

          {/* Subheadline */}
          <FadeInSection delay={100}>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-normal">
              Strategie, Prozesse und intelligente Systeme.
            </p>
          </FadeInSection>

          {/* Body Text */}
          <FadeInSection delay={200}>
            <div className="mt-16 md:mt-20 space-y-1">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Gute Software entsteht nicht nur durch Code.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sie entsteht durch klare Entscheidungen,
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                saubere Prozesse
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                und den sinnvollen Einsatz von KI.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed pt-4">
                Genau hier ergänzt KS Consulting die Arbeit von Santoslab.
              </p>
            </div>
          </FadeInSection>

          {/* AI & Consulting Capabilities */}
          <FadeInSection delay={300}>
            <div className="mt-20 md:mt-24">
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li 
                    key={index}
                    className="text-base md:text-lg text-muted-foreground"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-base text-foreground/80">
                Immer maßgeschneidert. Immer sinnvoll.
              </p>
            </div>
          </FadeInSection>

          {/* Link to Detail Page */}
          <FadeInSection delay={350}>
            <Link 
              to="/ki-beratung"
              className="inline-flex items-center gap-2 mt-12 text-sm text-foreground hover:opacity-70 transition-opacity duration-300 group"
            >
              Mehr erfahren
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeInSection>

          {/* Subtle Partnership Note */}
          <FadeInSection delay={400}>
            <p className="mt-16 text-sm text-muted-foreground/60">
              In Zusammenarbeit mit KS Consulting
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
