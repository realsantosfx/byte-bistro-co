import CaseStudyLayout from "@/components/case/CaseStudyLayout";
import { useLanguage } from "@/i18n/LanguageContext";


const copy = {
  de: {
    backLabel: "Zurück zur Startseite",
    eyebrow: "Fallstudie · Mittelstand · Chemievertrieb",
    heroHeadline: "Außendienst auf Zuruf. Pipeline unsichtbar.",
    heroSub: "Wie wir für einen Chemievertriebler ein custom Außendienst-CRM mit AI-Schicht gebaut haben und warum kein Lead mehr versickert.",
    heroCta: "Erstgespräch vereinbaren",
    contextLabel: "Ausgangslage",
    contextTitle: "Wachstum ohne Sichtbarkeit.",
    contextBody1: "Ein mittelständischer Chemievertriebler mit eigenem Lager und aktivem Außendienst koordinierte Kundenbesuche, Absprachen und Angebote vollständig auf Zuruf. Was beim Kunden besprochen wurde, blieb im Kopf des Außendienstlers. Kein Kollege wusste den aktuellen Stand. Lieferzusagen wurden gemacht ohne den Lagerbestand zu kennen.",
    contextBody2: "Umsatz wurde nicht durch fehlende Kunden blockiert, sondern durch fehlende Struktur.",
    problemLabel: "Das Problem",
    problemTitle: "Kein System. Kein Überblick. Kein Follow-up.",
    problems: [
      "Besuchsberichte per Telefon, Notizzettel oder gar nicht",
      "Lagerbestand für Außendienst nicht in Echtzeit sichtbar",
      "Abspringende Kunden wurden zu spät erkannt",
      "Offene Angebote ohne systematisches Nachfassen",
      "Pipeline existierte nur im Kopf einzelner Mitarbeiter",
    ],
    solutionLabel: "Die Lösung",
    solutionTitle: "Custom Außendienst-CRM mit AI als operativer Schicht.",
    solutionBody1: "Wir haben ein maßgeschneidertes CRM entwickelt, das den Außendienst wirklich abbildet, von der Besuchserfassung bis zur automatischen Churn-Erkennung.",
    solutionBody2: "Darüber liegt eine AI-Schicht, die Verhaltensmuster analysiert und proaktiv warnt, bevor ein Kunde abspringt.",
    processLabel: "Vorgehen",
    processTitle: "Drei Phasen bis zum aktiven AI-Layer.",
    steps: [
      "Analyse der Außendienst-Prozesse und Kundenstruktur über 3 Wochen",
      "Entwicklung des custom CRM mit Lager-Integration und mobiler App",
      "Aktivierung der AI-Schicht nach 3 Monaten Datenbasis",
    ],
    backendLabel: "Was im System steckt",
    backendTitle: "Die operative Schicht im Detail.",
    backendItems: [
      "Mobile Besuchserfassung per Sprache, AI transkribiert und strukturiert automatisch",
      "Echtzeit-Lagerbestand direkt im Außendienst-Tool",
      "Automatische Churn-Erkennung: AI erkennt inaktive Kunden vor dem Absprung",
      "Pipeline-Übersicht für alle offenen Angebote mit Status und Zuständigkeit",
      "Dashboard für Vertriebsleitung mit Aktivitäts- und Umsatzprognose",
    ],
    resultLabel: "Ergebnis",
    resultTitle: "Klare Struktur nach 6 Wochen.",
    metrics: [
      { value: "−100%", label: "Verlorene Besuchsberichte" },
      { value: "1", label: "Zentrale Pipeline für alle" },
      { value: "20.000€", label: "Projektvolumen" },
      { value: "6 Wo.", label: "Bis erstes AI-Alert aktiv" },
    ],
    quoteLabel: "Stimme aus dem Projekt",
    quote: "Unser Außendienst hat jahrelang auf Zuruf und Bauchgefühl gearbeitet. SantosLab hat ein System gebaut das unseren Außendienst wirklich abbildet, nach jedem Besuch wird automatisch erfasst was besprochen wurde, jeder im Team sieht den aktuellen Stand, und wir erkennen jetzt frühzeitig wenn ein Kunde abzuspringen droht. Zum ersten Mal haben wir einen echten Überblick über unsere Pipeline.",
    quoteAuthor: "Uwe Keyser · Geschäftsführer, HVK Keyser",
    ctaTitle: "Dein Unternehmen ist das nächste.",
    ctaBody: "Wir nehmen uns 45 Minuten. Du erklärst deine Prozesse. Wir zeigen dir, was möglich ist.",
    ctaButton: "Erstgespräch vereinbaren",
  },
  en: {
    backLabel: "Back to homepage",
    eyebrow: "Case Study · Mid-market · Chemical Distribution",
    heroHeadline: "Field sales on word of mouth. Pipeline invisible.",
    heroSub: "How we built a custom field sales CRM with an AI layer for a chemical distributor – and why no lead slips through anymore.",
    heroCta: "Book intro call",
    contextLabel: "Starting Point",
    contextTitle: "Growth without visibility.",
    contextBody1: "A mid-sized chemical distributor with its own warehouse and active field sales team coordinated customer visits, agreements and quotes entirely by word of mouth. What was discussed at the customer stayed in the head of the field rep. No colleague knew the current status. Delivery promises were made without knowing inventory levels.",
    contextBody2: "Revenue wasn't blocked by missing customers – it was blocked by missing structure.",
    problemLabel: "The Problem",
    problemTitle: "No system. No overview. No follow-up.",
    problems: [
      "Visit reports via phone, notes or not at all",
      "Inventory not visible to field sales in real time",
      "Churning customers detected too late",
      "Open quotes without systematic follow-up",
      "Pipeline existed only in the heads of individual employees",
    ],
    solutionLabel: "The Solution",
    solutionTitle: "Custom field sales CRM with AI as the operational layer.",
    solutionBody1: "We built a tailored CRM that truly maps field sales – from visit capture to automated churn detection.",
    solutionBody2: "On top sits an AI layer that analyzes behavioral patterns and proactively warns before a customer churns.",
    processLabel: "Approach",
    processTitle: "Three phases to an active AI layer.",
    steps: [
      "Analysis of field sales processes and customer structure over 3 weeks",
      "Development of the custom CRM with warehouse integration and mobile app",
      "Activation of the AI layer after 3 months of data baseline",
    ],
    backendLabel: "What's in the system",
    backendTitle: "The operational layer in detail.",
    backendItems: [
      "Mobile voice-based visit capture, AI transcribes and structures automatically",
      "Real-time inventory directly in the field sales tool",
      "Automated churn detection: AI flags inactive customers before they leave",
      "Pipeline overview of all open quotes with status and ownership",
      "Sales leadership dashboard with activity and revenue forecasting",
    ],
    resultLabel: "Result",
    resultTitle: "Clear structure after 6 weeks.",
    metrics: [
      { value: "−100%", label: "Lost visit reports" },
      { value: "1", label: "Central pipeline for everyone" },
      { value: "€20,000", label: "Project volume" },
      { value: "6 wks", label: "Until first AI alert active" },
    ],
    quoteLabel: "Voice from the project",
    quote: "Our field sales worked on word of mouth and gut feeling for years. SantosLab built a system that truly maps our field sales: after every visit, what was discussed is captured automatically, everyone on the team sees the current status, and we now spot early when a customer is about to churn. For the first time we have a real overview of our pipeline.",
    quoteAuthor: "Uwe Keyser · Managing Director, HVK Keyser",
    ctaTitle: "Your company is next.",
    ctaBody: "We take 45 minutes. You explain your processes. We show you what's possible.",
    ctaButton: "Book intro call",
  },
};

const CaseStudyChemievertrieb = () => {
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

export default CaseStudyChemievertrieb;
