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
    <CaseStudyLayout
      r={r}
      heroGradient="linear-gradient(145deg,#0f2024 0%,#1a3a3f 50%,#0a1f24 100%)"
    />
  );
};

export default CaseStudyChemievertrieb;

