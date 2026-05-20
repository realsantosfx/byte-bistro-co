import FadeInSection from "@/components/ui/FadeInSection";
import { Rocket, Building2, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "MVP & Skalierung",
    description: "Von der ersten Idee zum marktreifen Produkt. Schnell, iterativ und skalierbar gebaut.",
    projectLink: "/projekt/foodloop",
    projectLabel: "Siehe FoodLoop",
  },
  {
    icon: Building2,
    title: "Mittelstand",
    subtitle: "Prozesse & Automatisierung",
    description: "Digitale Lösungen, die manuelle Arbeit reduzieren und Effizienz steigern.",
    projectLink: "/projekt/delivereen",
    projectLabel: "Siehe Delivereen",
  },
  {
    icon: Lightbulb,
    title: "Gründer",
    subtitle: "Interne Tools statt Excel",
    description: "Maßgeschneiderte Software statt Workarounds mit Notion, Sheets oder E-Mails.",
    projectLink: "/projekt/ks-command",
    projectLabel: "Siehe KS Command",
  },
  {
    icon: Users,
    title: "Agenturen",
    subtitle: "White-Label & Entwicklung",
    description: "Technische Umsetzung für eure Kundenprojekte. Zuverlässig, termingerecht, skalierbar.",
    projectLink: "/projekt/schulungssoftware",
    projectLabel: "Siehe Schulungssoftware",
  },
];

const cardVariants: Variants = {
  initial: { 
    y: 0,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
};

const arrowVariants: Variants = {
  initial: { x: 0, opacity: 0.7 },
  hover: { 
    x: 4, 
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 15
    }
  }
};

const Audience = () => {
  return (
    <section id="zielgruppen" className="section bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-wide mb-4">
              Für wen wir bauen
            </p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">
              Erkennst du dich wieder?
            </h2>
          </div>
        </FadeInSection>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <FadeInSection key={audience.title} delay={index * 100}>
              <motion.div
                className="group p-8 rounded-2xl bg-secondary h-full flex flex-col cursor-pointer"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6"
                  variants={iconVariants}
                >
                  <audience.icon className="w-6 h-6 text-foreground" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-4">
                  {audience.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {audience.description}
                </p>
                
                <Link 
                  to={audience.projectLink}
                  className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground mt-6 transition-colors"
                >
                  <span>{audience.projectLabel}</span>
                  <motion.span variants={arrowVariants}>→</motion.span>
                </Link>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <FadeInSection delay={500}>
          <p className="text-center text-muted-foreground mt-16 text-lg">
            Egal wo du stehst – wir bauen, was du brauchst.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Audience;
