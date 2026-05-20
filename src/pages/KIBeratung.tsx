import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeInSection from "@/components/ui/FadeInSection";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const KIBeratung = () => {
  const services = [
    {
      title: "Prozessautomatisierung",
      description: "Wiederkehrende Abläufe erkennen, analysieren und durch intelligente Systeme automatisieren. Weniger manuelle Arbeit, mehr Fokus auf das Wesentliche.",
      details: [
        "Analyse bestehender Workflows",
        "Identifikation von Automatisierungspotenzial",
        "Implementierung maßgeschneiderter Lösungen",
        "Kontinuierliche Optimierung",
      ],
    },
    {
      title: "Individuelle AI-Tools",
      description: "Maßgeschneiderte KI-Anwendungen für interne Abläufe. Keine Standardlösungen, sondern Werkzeuge, die exakt zu Ihren Anforderungen passen.",
      details: [
        "Dokumentenanalyse & -verarbeitung",
        "Intelligente Assistenzsysteme",
        "Automatisierte Berichterstattung",
        "Interne Chatbots & Wissensdatenbanken",
      ],
    },
    {
      title: "Datengestützte Entscheidungen",
      description: "Aus Daten werden Erkenntnisse. Modelle, die nicht nur analysieren, sondern konkrete Handlungsempfehlungen liefern.",
      details: [
        "Datenaufbereitung & Strukturierung",
        "Predictive Analytics",
        "Dashboard-Entwicklung",
        "Entscheidungsmodelle",
      ],
    },
    {
      title: "KI-Strategie & Beratung",
      description: "Der sinnvolle Einsatz von KI beginnt mit den richtigen Fragen. Gemeinsam identifizieren wir, wo Technologie echten Mehrwert schafft.",
      details: [
        "Potenzialanalyse für Ihr Unternehmen",
        "Technologie-Auswahl & Bewertung",
        "Roadmap-Entwicklung",
        "Change Management",
      ],
    },
  ];

  const useCases = [
    {
      industry: "Handwerksbetrieb",
      challenge: "Zeitaufwändige Angebotserstellung mit vielen wiederkehrenden Textbausteinen und manueller Kalkulation.",
      solution: "KI-gestütztes System, das aus Kundenanfragen automatisch strukturierte Angebote generiert – inklusive Preiskalkulation basierend auf historischen Daten.",
      result: "70% weniger Zeitaufwand pro Angebot",
    },
    {
      industry: "Steuerkanzlei",
      challenge: "Mitarbeiter verbringen Stunden mit der Suche nach relevanten Informationen in Mandantenakten und Gesetzestexten.",
      solution: "Interne Wissensdatenbank mit KI-Suchfunktion, die natürliche Fragen versteht und präzise Antworten mit Quellenangabe liefert.",
      result: "Recherchezeit um 60% reduziert",
    },
    {
      industry: "E-Commerce",
      challenge: "Kundenanfragen per E-Mail werden manuell kategorisiert und an die richtigen Abteilungen weitergeleitet.",
      solution: "Automatische Klassifizierung eingehender Nachrichten mit intelligenter Priorisierung und Vorschlägen für Standardantworten.",
      result: "Reaktionszeit von 24h auf 2h verkürzt",
    },
    {
      industry: "Produktionsunternehmen",
      challenge: "Wartungsintervalle werden nach starren Zeitplänen durchgeführt – oft zu früh oder zu spät.",
      solution: "Predictive-Maintenance-System, das Maschinendaten analysiert und Wartungsbedarf vorhersagt, bevor Ausfälle entstehen.",
      result: "30% weniger ungeplante Stillstände",
    },
  ];

  const testimonials = [
    {
      quote: "Wir hatten keine Ahnung, wo wir mit KI anfangen sollten. Nach dem ersten Workshop war plötzlich alles klar – und umsetzbar.",
      author: "Geschäftsführer",
      company: "Mittelständisches Produktionsunternehmen",
    },
    {
      quote: "Endlich jemand, der nicht mit Buzzwords um sich wirft, sondern konkret fragt: Was ist euer Problem? Das war erfrischend.",
      author: "Teamleiterin Digitalisierung",
      company: "Steuerberatungsgesellschaft",
    },
    {
      quote: "Das Tool läuft jetzt seit 8 Monaten – ohne Ausfälle, ohne Nachbesserungen. Genau so hatten wir uns das vorgestellt.",
      author: "COO",
      company: "E-Commerce Unternehmen",
    },
  ];

  const principles = [
    {
      title: "Sinnvoll statt spektakulär",
      text: "Wir setzen KI dort ein, wo sie echten Mehrwert schafft – nicht, weil es modern klingt.",
    },
    {
      title: "Verständlich statt komplex",
      text: "Jede Lösung wird so erklärt, dass Sie Entscheidungen selbst treffen können.",
    },
    {
      title: "Integriert statt isoliert",
      text: "Neue Systeme fügen sich nahtlos in bestehende Prozesse ein.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Back Link */}
        <div className="container-narrow px-6 md:px-8 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container-narrow px-6 md:px-8">
          <div className="max-w-3xl">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight">
                KI-Beratung
              </h1>
            </FadeInSection>
            
            <FadeInSection delay={100}>
              <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Intelligente Systeme, die Arbeit erleichtern.<br />
                Keine Spielereien. Echte Lösungen.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Intro Text */}
        <section className="container-narrow px-6 md:px-8 mt-20 md:mt-28">
          <FadeInSection delay={150}>
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Künstliche Intelligenz verändert, wie Unternehmen arbeiten. 
                Aber nicht jede KI-Lösung passt zu jedem Problem. 
                Wir helfen Ihnen, die richtigen Werkzeuge zu finden – 
                und sie so einzusetzen, dass sie tatsächlich Entlastung bringen.
              </p>
            </div>
          </FadeInSection>
        </section>

        {/* Services Grid */}
        <section className="container-narrow px-6 md:px-8 mt-24 md:mt-32">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-16">
              Leistungen
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {service.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="text-sm text-muted-foreground/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-muted-foreground/30 before:rounded-full"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="container-narrow px-6 md:px-8 mt-32 md:mt-40">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Aus der Praxis
            </h2>
            <p className="text-muted-foreground mb-16 max-w-2xl">
              Konkrete Beispiele, wie KI in verschiedenen Branchen eingesetzt wird – 
              anonymisiert, aber real.
            </p>
          </FadeInSection>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="border-l-2 border-border pl-8 md:pl-12">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/60 font-medium">
                    {useCase.industry}
                  </span>
                  <h3 className="text-lg font-medium text-foreground mt-3 mb-4">
                    Herausforderung
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.challenge}
                  </p>
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Lösung
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.solution}
                  </p>
                  <div className="inline-flex items-center gap-3 bg-[#f5f5f7] px-4 py-2 rounded-full">
                    <span className="text-sm text-foreground font-medium">
                      {useCase.result}
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-32 md:mt-40 py-24 bg-[#f5f5f7]">
          <div className="container-narrow px-6 md:px-8">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-16 text-center">
                Was Kunden sagen
              </h2>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {testimonials.map((testimonial, index) => (
                <FadeInSection key={index} delay={index * 100}>
                  <div className="bg-background rounded-2xl p-8 h-full flex flex-col">
                    <blockquote className="text-foreground leading-relaxed flex-1 mb-6">
                      „{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="container-narrow px-6 md:px-8 mt-32 md:mt-40">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-16 text-center">
              Wie wir arbeiten
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.text}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-narrow px-6 md:px-8 mt-32 md:mt-40">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Lassen Sie uns sprechen.
              </h2>
              <p className="text-muted-foreground mb-8">
                Ein unverbindliches Gespräch, um herauszufinden, ob und wie KI Ihrem Unternehmen helfen kann.
              </p>
              <Link 
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </FadeInSection>
        </section>

        {/* Partnership Note */}
        <section className="container-narrow px-6 md:px-8 mt-24">
          <FadeInSection>
            <p className="text-center text-sm text-muted-foreground/60">
              In Zusammenarbeit mit KS Consulting
            </p>
          </FadeInSection>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KIBeratung;
