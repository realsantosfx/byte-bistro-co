import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2, Zap, Eye, TrendingUp } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const copy = {
  de: {
    backLabel: "Zurück zur Startseite",
    eyebrow: "Fallstudie · Mittelstand · Produzierendes Gewerbe",
    heroHeadline: "7M€ Umsatz. Prozesse liefen in Excel und Telefonanrufen.",
    heroSub: "Wie wir für ein 40-Personen-Unternehmen ein custom ERP mit aktiver AI-Schicht gebaut haben und warum die Fehlerquote nach zwei Monaten um 80% fiel.",
    heroCta: "Erstgespräch vereinbaren",
    contextLabel: "Ausgangslage",
    contextTitle: "Wachstum ohne Struktur.",
    contextBody1: "Ein mittelständisches Unternehmen mit 40 Mitarbeitern wuchs schneller als seine internen Strukturen. Aufträge, Lagerbestände und Kapazitäten wurden manuell koordiniert, über Excel-Tabellen, Telefonanrufe und Bauchgefühl.",
    contextBody2: "Die Fehlerquote stieg mit dem Umsatz mit. Entscheidungen über Priorisierung, Kapazität und Liefertermine basierten auf dem, was gerade jemand im Kopf hatte. Es gab keine zentrale operative Datenbasis.",
    problemLabel: "Das Problem",
    problemTitle: "Wachstum scheiterte nicht am Markt, sondern an interner Komplexität.",
    problems: [
      "Auftragsdaten verteilt über Excel, E-Mails und Notizen",
      "Lagerbestand nicht in Echtzeit sichtbar",
      "Kapazitätsplanung manuell, oft inkonsistent",
      "Entscheidungen über Priorisierung auf Bauchgefühl",
      "Wachsende Fehlerquote bei steigendem Umsatz",
    ],
    solutionLabel: "Die Lösung",
    solutionTitle: "Custom ERP mit AI als operativer Schicht.",
    solutionBody1: "Wir haben ein maßgeschneidertes ERP-System entwickelt, das Aufträge, Lager, Kapazitäten und Liefertermine in einer zentralen Datenbasis zusammenführt – ohne Standard-Module, ohne Workarounds.",
    solutionBody2: "Darüber liegt eine AI-Schicht, die Betriebsmuster analysiert und proaktiv vorschlägt, wo Kapazitäten ineffizient genutzt werden und welche Aufträge zu priorisieren sind. Die AI ersetzt keine Entscheidungen – sie bereitet sie vor.",
    processLabel: "Vorgehen",
    processTitle: "Vier Phasen bis zum aktiven AI-Layer.",
    steps: [
      "Analyse der Ist-Prozesse und Datenflüsse über 4 Wochen",
      "Architektur des custom ERP, abgestimmt mit dem Operations-Team",
      "Schrittweiser Rollout über 3 Monate, parallel zum laufenden Betrieb",
      "Aktivierung der AI-Schicht nach 2 Monaten Datenbasis",
    ],
    backendLabel: "Was im System steckt",
    backendTitle: "Die operative Schicht im Detail.",
    backendItems: [
      "Zentrale Auftrags- und Kundendatenbank",
      "Echtzeit-Lagerbestände mit automatischer Nachbestellung",
      "Kapazitätsplanung über alle Fertigungslinien",
      "AI-Mustererkennung auf 2 Monate Betriebsdaten",
      "Proaktive Empfehlungen zu Priorisierung und Kapazität",
      "Dashboards für Geschäftsführung und Operations",
    ],
    resultLabel: "Ergebnis",
    resultTitle: "Klare Zahlen nach 3 Monaten.",
    metrics: [
      { value: "−80%", label: "Manueller Koordinationsaufwand" },
      { value: "+127%", label: "Prozesseffizienz in 3 Monaten" },
      { value: "45.000€", label: "Projektvolumen" },
      { value: "2 Mo.", label: "Bis erste AI-Empfehlungen aktiv" },
    ],
    quoteLabel: "Stimme aus dem Projekt",
    quote: "Wir brauchten kein weiteres Tool, sondern ein operatives Gehirn für unser Unternehmen. Genau das hat SantosLab geliefert.",
    quoteAuthor: "Geschäftsführer · Mittelstand, Produzierendes Gewerbe",
    ctaTitle: "Dein Unternehmen ist das nächste.",
    ctaBody: "Wir nehmen uns 45 Minuten. Du erklärst deine Prozesse. Wir zeigen dir, was möglich ist.",
    ctaButton: "Erstgespräch vereinbaren",
  },
  en: {
    backLabel: "Back to homepage",
    eyebrow: "Case Study · Mid-market · Manufacturing",
    heroHeadline: "€7M revenue. Processes ran on Excel and phone calls.",
    heroSub: "How we built a custom ERP with an active AI layer for a 40-person company – and why the error rate dropped by 80% after three months.",
    heroCta: "Book intro call",
    contextLabel: "Starting Point",
    contextTitle: "Growth without structure.",
    contextBody1: "A mid-sized company with 40 employees grew faster than its internal structures. Orders, inventory and capacity were coordinated manually – through Excel sheets, phone calls and gut feeling.",
    contextBody2: "The error rate scaled with revenue. Decisions about prioritization, capacity and delivery dates were based on whatever someone happened to remember. There was no central operational source of truth.",
    problemLabel: "The Problem",
    problemTitle: "Growth wasn't blocked by the market – it was blocked by internal complexity.",
    problems: [
      "Order data spread across Excel, emails and notes",
      "Inventory not visible in real time",
      "Capacity planning manual and often inconsistent",
      "Prioritization decisions made on gut feeling",
      "Error rate growing alongside revenue",
    ],
    solutionLabel: "The Solution",
    solutionTitle: "Custom ERP with AI as the operational layer.",
    solutionBody1: "We built a tailored ERP system that brings orders, inventory, capacity and delivery dates into a single source of truth – no standard modules, no workarounds.",
    solutionBody2: "On top sits an AI layer that analyzes operational patterns and proactively suggests where capacity is wasted and which orders to prioritize. The AI doesn't replace decisions – it prepares them.",
    processLabel: "Approach",
    processTitle: "Four phases to an active AI layer.",
    steps: [
      "Analysis of current processes and data flows over 4 weeks",
      "Architecture of the custom ERP, aligned with the operations team",
      "Step-by-step rollout over 3 months, parallel to live operations",
      "Activation of the AI layer after 6 months of data baseline",
    ],
    backendLabel: "What's in the system",
    backendTitle: "The operational layer in detail.",
    backendItems: [
      "Central order and customer database",
      "Real-time inventory with automatic reordering",
      "Capacity planning across all production lines",
      "AI pattern recognition on 6 months of operational data",
      "Proactive recommendations on prioritization and capacity",
      "Dashboards for leadership and operations",
    ],
    resultLabel: "Result",
    resultTitle: "Clear numbers after 3 months.",
    metrics: [
      { value: "−80%", label: "Manual coordination effort" },
      { value: "+127%", label: "Process efficiency in 3 months" },
      { value: "€45,000", label: "Project volume" },
      { value: "6 mo.", label: "Until first AI recommendations active" },
    ],
    quoteLabel: "Voice from the project",
    quote: "We didn't need another tool, we needed an operational brain for our company. That's exactly what SantosLab delivered.",
    quoteAuthor: "CEO · Mid-market, Manufacturing",
    ctaTitle: "Your company is next.",
    ctaBody: "We take 45 minutes. You explain your processes. We show you what's possible.",
    ctaButton: "Book intro call",
  },
};

const CaseStudyMittelstand = () => {
  const { lang } = useLanguage();
  const r = copy[lang as "de" | "en"] ?? copy.de;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-glow" />
          </div>
          <div className="container-narrow text-center relative z-10">
            <MotionSection>
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">{r.backLabel}</span>
              </Link>
            </MotionSection>
            <MotionSection delay={50}>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.eyebrow}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h1 className="headline-xl text-foreground mb-8 max-w-4xl mx-auto">{r.heroHeadline}</h1>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-lg max-w-2xl mx-auto mb-12">{r.heroSub}</p>
            </MotionSection>
            <MotionSection delay={300}>
              <Link to="/kontakt">
                <Button variant="apple" size="lg" className="group">
                  {r.heroCta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </Link>
            </MotionSection>
          </div>
        </section>

        {/* Context */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <Eye className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.contextLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-6 max-w-3xl">{r.contextTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-md max-w-2xl mb-4">{r.contextBody1}</p>
              <p className="body-md max-w-2xl">{r.contextBody2}</p>
            </MotionSection>
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.problemLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-8 max-w-3xl">{r.problemTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <div className="glass-card p-8 max-w-2xl">
                <ul className="space-y-4">
                  {r.problems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Solution */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.solutionLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-6 max-w-3xl">{r.solutionTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <p className="body-md max-w-2xl mb-4">{r.solutionBody1}</p>
              <p className="body-md max-w-2xl">{r.solutionBody2}</p>
            </MotionSection>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.processLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-10 max-w-3xl">{r.processTitle}</h2>
            </MotionSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {r.steps.map((step, i) => (
                <MotionSection key={i} delay={200 + i * 100}>
                  <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-accent">{i + 1}</span>
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Backend */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <Eye className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.backendLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-8 max-w-3xl">{r.backendTitle}</h2>
            </MotionSection>
            <MotionSection delay={200}>
              <div className="glass-card p-8 max-w-2xl">
                <ul className="space-y-4">
                  {r.backendItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Result / Metrics */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{r.resultLabel}</span>
              </div>
            </MotionSection>
            <MotionSection delay={100}>
              <h2 className="headline-lg text-foreground mb-10 max-w-3xl">{r.resultTitle}</h2>
            </MotionSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {r.metrics.map((m, i) => (
                <MotionSection key={i} delay={200 + i * 100}>
                  <div className="glass-card p-6 text-center h-full flex flex-col justify-center">
                    <p className="text-2xl md:text-3xl font-semibold text-foreground mb-2">{m.value}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{m.label}</p>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <div className="glass-card p-10 md:p-14 max-w-3xl mx-auto">
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">{r.quoteLabel}</p>
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">„{r.quote}"</p>
                <p className="text-sm text-muted-foreground">{r.quoteAuthor}</p>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-narrow">
            <MotionSection>
              <motion.div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
                <motion.div className="absolute inset-0 pointer-events-none" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
                </motion.div>
                <div className="relative z-10">
                  <h2 className="headline-lg text-foreground mb-6 max-w-2xl mx-auto">{r.ctaTitle}</h2>
                  <p className="body-md max-w-lg mx-auto mb-10">{r.ctaBody}</p>
                  <Link to="/kontakt">
                    <Button variant="apple" size="lg" className="group">
                      {r.ctaButton}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </MotionSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyMittelstand;
