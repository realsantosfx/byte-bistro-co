import barberdigitalImg from "@/assets/projects/barberdigital-new.png";
import barberdigitalAktionenImg from "@/assets/projects/barberdigital-aktionen.png";
import barberdigitalStempelkarteImg from "@/assets/projects/barberdigital-stempelkarte.png";
import barberdigitalWartezeitImg from "@/assets/projects/barberdigital-wartezeit.png";
import ksCommandImg from "@/assets/projects/ks-command-new.png";
import foodloopImg from "@/assets/projects/foodloop-new.png";
import foodloopMapImg from "@/assets/projects/foodloop-map.png";
import foodloopBoxesImg from "@/assets/projects/foodloop-boxes.png";
import foodloopOffersImg from "@/assets/projects/foodloop-offers.png";
import foodloopProfileImg from "@/assets/projects/foodloop-profile.png";
import ksCommerceAgentImg from "@/assets/projects/ks-commerce-agent.png";
import workspaceHubImg from "@/assets/projects/workspace-hub.png";
import spawnSocialImg from "@/assets/projects/spawn-social.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  techStack: {
    name: string;
    description: string;
  }[];
  features: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "ks-commerce-agent",
    title: "KS Commerce Agent",
    category: "AI SaaS Plattform",
    shortDescription: "KI-gestützter Commerce Agent, der Online-Shops mit intelligenter Produktberatung und automatisiertem Kundensupport ausstattet.",
    fullDescription: "Eine vollständige AI-SaaS-Plattform, die E-Commerce-Händlern einen KI-Agenten bereitstellt. Der Agent berät Kunden direkt im Shop, beantwortet Produktfragen und unterstützt beim Kaufprozess – rund um die Uhr, ohne menschliches Eingreifen.",
    challenge: "Online-Shops verlieren Kunden durch fehlende persönliche Beratung. Support-Teams sind überlastet, und generische Chatbots bieten keine echte Kaufberatung.",
    solution: "Ein trainierbarer KI-Agent, der Produktdaten versteht, Kundenanfragen intelligent beantwortet und als Widget in jeden Shop integriert werden kann. Inklusive Merchant-Dashboard, Produktverwaltung und Chat-Analytics.",
    result: "Signifikante Steigerung der Conversion-Rate bei Pilotshops. Reduktion der Support-Anfragen um 45%. Durchschnittliche Antwortzeit unter 2 Sekunden.",
    tags: ["AI / LLM", "SaaS", "E-Commerce"],
    techStack: [
      { name: "React", description: "Frontend-Framework für Dashboard und Widget" },
      { name: "Supabase", description: "Backend, Auth und Echtzeit-Datenbank" },
      { name: "Google Gemini", description: "LLM für intelligente Produktberatung" },
      { name: "Edge Functions", description: "Serverless AI-Verarbeitung" },
      { name: "Stripe", description: "Subscription-basierte Abrechnung" },
    ],
    features: [
      "KI-gestützte Produktberatung",
      "Embeddable Chat-Widget",
      "Merchant-Dashboard mit Analytics",
      "Produktdaten-Import & Training",
      "Multi-Shop-Verwaltung",
      "Echtzeit-Streaming-Antworten",
    ],
    image: ksCommerceAgentImg,
  },
  {
    id: "workspace-hub",
    title: "Workspace Hub",
    category: "Kollaborationsplattform",
    shortDescription: "Zentrale Arbeitsplattform für Teams mit Projekt-, Aufgaben- und Ressourcenverwaltung.",
    fullDescription: "Eine modulare Workspace-Plattform, die Teams eine zentrale Anlaufstelle für alle Arbeitsprozesse bietet. Von Projektmanagement über Aufgabenverteilung bis hin zu Team-Kommunikation – alles in einer durchdachten Oberfläche.",
    challenge: "Teams arbeiten mit fragmentierten Tools und verlieren den Überblick. Informationen sind verstreut, Abstimmungen ineffizient und der Onboarding-Aufwand für neue Mitarbeiter hoch.",
    solution: "Eine zentrale Plattform mit rollenbasiertem Zugang, die Projekte, Aufgaben und Kommunikation vereint. Workspace-basierte Architektur ermöglicht klare Trennung zwischen Teams und Mandanten.",
    result: "Reduktion der Tool-Fragmentierung. Schnelleres Onboarding neuer Teammitglieder. Volle Transparenz über Projektfortschritte und Ressourcenauslastung.",
    tags: ["React", "Supabase", "Multi-Tenant"],
    techStack: [
      { name: "React", description: "Modernes Frontend-Framework" },
      { name: "Supabase", description: "Auth, Database und Row-Level Security" },
      { name: "TypeScript", description: "Typsicheres JavaScript" },
      { name: "Tailwind CSS", description: "Utility-First CSS Framework" },
      { name: "PWA", description: "Progressive Web App für Mobile-Nutzung" },
    ],
    features: [
      "Workspace-basierte Architektur",
      "Rollenbasiertes Zugriffsmanagement",
      "Projekt- & Aufgabenverwaltung",
      "Team-Kommunikation",
      "Aktivitäts-Feed",
      "Multi-Tenant-Fähigkeit",
    ],
    image: workspaceHubImg,
  },
  {
    id: "spawn-social",
    title: "Spawn Social",
    category: "Social App",
    shortDescription: "Event-basierte Social-App mit nativer iOS-Ästhetik, Karten-Integration und Gruppen-Features.",
    fullDescription: "Eine Social-Plattform, die Menschen über gemeinsame Aktivitäten zusammenbringt. Nutzer können Events erstellen, Freunde einladen und spontane Treffen in ihrer Umgebung entdecken – alles in einem Design, das sich wie eine native Apple-App anfühlt.",
    challenge: "Bestehende Social-Apps fokussieren auf Content statt auf echte Begegnungen. Es fehlt eine Plattform, die spontane Aktivitäten und lokale Events einfach und einladend gestaltet.",
    solution: "Eine Event-zentrierte Social-App mit Geo-Lokalisierung, Audience-Management und einem Chat-System. Das Design folgt Apple Human Interface Guidelines für ein natives Erlebnis.",
    result: "Aktive Community mit regelmäßigen Events. Hohe Nutzer-Retention durch Push-Benachrichtigungen und soziale Features. 4.7 Sterne durchschnittliche Bewertung.",
    tags: ["React", "PWA", "Real-time"],
    techStack: [
      { name: "React", description: "UI-Framework mit iOS-nativer Ästhetik" },
      { name: "Supabase", description: "Echtzeit-Backend und Auth" },
      { name: "Leaflet", description: "Interaktive Kartenintegration" },
      { name: "Framer Motion", description: "Native-feeling Animationen" },
      { name: "PWA", description: "App-Erlebnis ohne App Store" },
    ],
    features: [
      "Event-Erstellung & -Entdeckung",
      "Karten-basierte Umgebungssuche",
      "Audience & Gruppen-Management",
      "Echtzeit-Chat pro Event",
      "Push-Benachrichtigungen",
      "Apple iOS Design Language",
    ],
    image: spawnSocialImg,
  },
  {
    id: "ks-command",
    title: "KS Command Center",
    category: "Management System",
    shortDescription: "Executive Control Center mit AI Co-Founder Agent, Business Intelligence und automatisierter Entscheidungsunterstützung.",
    fullDescription: "Ein internes Steuerungssystem, das über klassisches Projektmanagement hinausgeht. Mit dem AI Co-Founder Agent 'Atlas' werden Geschäftsentscheidungen datenbasiert vorbereitet und priorisiert. Das System analysiert die aktuelle Business-Phase und liefert klare, handlungsrelevante Empfehlungen.",
    challenge: "Unternehmer verlieren sich in operativen Details und verlieren den strategischen Fokus. Wichtige Entscheidungen werden aufgeschoben, weil der Überblick fehlt.",
    solution: "Ein Executive Dashboard mit AI-gestützter Analysefunktion. Der Atlas-Agent identifiziert Engpässe, bewertet Risiken und liefert priorisierte Handlungsempfehlungen – basierend auf der aktuellen Geschäftsphase.",
    result: "Klare Fokussierung auf geschäftskritische Aufgaben. Reduktion von Entscheidungslatenz. Strategische Ausrichtung statt operativem Chaos.",
    tags: ["React", "AI Agent", "Business Intelligence"],
    techStack: [
      { name: "React", description: "Modernes Frontend für Executive UI" },
      { name: "Supabase", description: "Datenbank und Echtzeit-Funktionen" },
      { name: "Google Gemini", description: "AI-Engine für Business-Analysen" },
      { name: "Edge Functions", description: "Serverless Verarbeitung" },
      { name: "Recharts", description: "Datenvisualisierung und KPIs" },
    ],
    features: [
      "AI Co-Founder Agent (Atlas)",
      "Executive Snapshot Dashboard",
      "Business-Phasen-Erkennung",
      "Priorisierte Handlungsempfehlungen",
      "AI Workforce Management",
      "Impact-basierte Insights",
    ],
    image: ksCommandImg,
  },
  {
    id: "barberdigital",
    title: "BarberDigital",
    category: "Multi-Tenant SaaS",
    shortDescription: "White-Label SaaS-Plattform für Barbershops mit Terminbuchung, Stempelkarten und Echtzeit-Wartezeiten.",
    fullDescription: "Eine vollständige Multi-Tenant-Plattform, die Barbershops ihre eigene digitale Präsenz gibt. Jeder Shop erhält eine individuelle App mit eigenem Branding, Terminbuchung, digitalen Stempelkarten und Echtzeit-Wartezeit-Anzeige – alles über eine zentrale Plattform verwaltet.",
    challenge: "Barbershops haben keine digitale Präsenz und verlieren Kunden durch lange Wartezeiten, fehlende Terminmöglichkeiten und keine Kundenbindungsinstrumente.",
    solution: "Eine White-Label-SaaS-Lösung mit Custom Domains pro Shop. Kunden buchen Termine, sehen Wartezeiten in Echtzeit und sammeln digitale Stempel. Shop-Owner verwalten alles über ein Admin-Dashboard.",
    result: "Mehrere Barbershops aktiv onboarded. Signifikante Reduktion von No-Shows. Kundenbindung durch digitale Stempelkarten deutlich gesteigert.",
    tags: ["Multi-Tenant", "SaaS", "Custom Domains"],
    techStack: [
      { name: "React", description: "PWA-fähiges Frontend" },
      { name: "Supabase", description: "Multi-Tenant Backend mit RLS" },
      { name: "Custom Domains", description: "Eigene Domain pro Barbershop" },
      { name: "PWA", description: "Native App-Erlebnis im Browser" },
      { name: "Stripe", description: "Subscription-Management für Shops" },
    ],
    features: [
      "White-Label mit Custom Domains",
      "Online-Terminbuchung",
      "Echtzeit-Wartezeit-Anzeige",
      "Digitale Stempelkarten",
      "Aktionen & Angebote",
      "Shop-Admin-Dashboard",
    ],
    image: barberdigitalImg,
    gallery: [barberdigitalImg, barberdigitalAktionenImg, barberdigitalStempelkarteImg, barberdigitalWartezeitImg],
  },
  {
    id: "foodloop",
    title: "FoodLoop",
    category: "Nachhaltigkeits-Plattform",
    shortDescription: "Plattform zur Reduzierung von Lebensmittelverschwendung mit Marketplace, Karten-Integration und Abhol-System.",
    fullDescription: "Eine ganzheitliche Lösung gegen Lebensmittelverschwendung, bestehend aus einer Landingpage zur Nutzergewinnung und einer operativen Plattform. Händler stellen überschüssige Lebensmittel in 'Offene Boxen' ein, Nutzer reservieren und holen diese ab - verifiziert durch ein digitales Code-System.",
    challenge: "Tonnen von Lebensmitteln werden täglich weggeworfen, während viele Menschen nach günstigen, nachhaltigen Alternativen suchen. Es fehlte ein einfaches System, das Anbieter und Abnehmer lokal vernetzt.",
    solution: "Ein zweistufiges System: Eine überzeugende Landingpage für Nutzerakquise und eine operative Plattform mit Karten-Integration, Boxen-Management, Reservierungssystem und Händler-Verifikation per Abholcode.",
    result: "Über 5.000 kg Lebensmittel im ersten Jahr gerettet. 50+ Partner-Händler. Aktive Community mit wachsender Nutzerbasis.",
    tags: ["TypeScript", "Maps API", "Sustainability"],
    techStack: [
      { name: "React", description: "Frontend für Landingpage und Plattform" },
      { name: "Supabase", description: "Backend, Auth und Echtzeit-Datenbank" },
      { name: "Leaflet", description: "Interaktive Karten mit Box-Standorten" },
      { name: "TypeScript", description: "Typsicheres Development" },
      { name: "PWA", description: "Mobile-First Nutzererlebnis" },
    ],
    features: [
      "Geo-basierte Box-Suche auf Karte",
      "Reservierungssystem mit Abholcodes",
      "Händler-Dashboard & Verifikation",
      "Offene Boxen Management",
      "Impact-Tracking & Statistiken",
      "Landingpage für Nutzerakquise",
    ],
    image: foodloopImg,
    gallery: [foodloopImg, foodloopMapImg, foodloopBoxesImg, foodloopOffersImg, foodloopProfileImg],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
