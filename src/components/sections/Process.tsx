import FadeInSection from "@/components/ui/FadeInSection";

const steps = [
  {
    number: "01",
    title: "Verstehen",
    description: "Wir analysieren dein Problem und definieren die Lösung.",
  },
  {
    number: "02",
    title: "Gestalten",
    description: "Klares Konzept und Design, das funktioniert.",
  },
  {
    number: "03",
    title: "Entwickeln",
    description: "Schnelle, iterative Umsetzung mit kontinuierlichem Feedback.",
  },
  {
    number: "04",
    title: "Launchen",
    description: "Dein Produkt geht live. Performant und skalierbar.",
  },
];

const Process = () => {
  return (
    <section id="arbeitsweise" className="section bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-sm tracking-wide mb-4">
              Prozess
            </p>
            <h2 className="headline-lg text-foreground max-w-3xl mx-auto">
              Von der Idee zur Lösung.
            </h2>
          </div>
        </FadeInSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <FadeInSection key={step.number} delay={index * 100}>
              <div className="text-center md:text-left">
                <span className="text-sm font-medium text-muted-foreground mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
