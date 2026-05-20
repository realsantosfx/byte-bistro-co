import CaseStudyLayout from "@/components/case/CaseStudyLayout";
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
      "Aktivierung der AI-Schicht nach 2 Wochen Datenbasis",
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
    heroSub: "How we built a custom ERP with an active AI layer for a 40-person company – and why the error rate dropped by 80% after two months.",
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
      "Activation of the AI layer after 2 months of data baseline",
    ],
    backendLabel: "What's in the system",
    backendTitle: "The operational layer in detail.",
    backendItems: [
      "Central order and customer database",
      "Real-time inventory with automatic reordering",
      "Capacity planning across all production lines",
      "AI pattern recognition on 2 months of operational data",
      "Proactive recommendations on prioritization and capacity",
      "Dashboards for leadership and operations",
    ],
    resultLabel: "Result",
    resultTitle: "Clear numbers after 3 months.",
    metrics: [
      { value: "−80%", label: "Manual coordination effort" },
      { value: "+127%", label: "Process efficiency in 3 months" },
      { value: "2 mo.", label: "Until first AI recommendations active" },
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
    <CaseStudyLayout
      r={r}
      heroGradient="linear-gradient(145deg,#111827 0%,#1e3a5f 50%,#0f2a4a 100%)"
    />
  );
};

export default CaseStudyMittelstand;

