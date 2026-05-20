import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Wallet } from "lucide-react";
import { ProjectData } from "@/pages/SoftwareBuilder";
import { cn } from "@/lib/utils";

interface FeatureBuilderProps {
  data: ProjectData;
  updateData: (updates: Partial<ProjectData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface Feature {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: "low" | "medium" | "high";
  timeWeeks: number;
  costK: number;
}

const features: Feature[] = [
  // Authentifizierung
  {
    id: "auth-basic",
    name: "User-Authentifizierung",
    description: "Login, Registrierung, Passwort-Reset",
    category: "Authentifizierung",
    complexity: "low",
    timeWeeks: 1,
    costK: 2,
  },
  {
    id: "auth-social",
    name: "Social Login",
    description: "Anmeldung via Google, Apple, GitHub",
    category: "Authentifizierung",
    complexity: "medium",
    timeWeeks: 1,
    costK: 3,
  },
  {
    id: "auth-roles",
    name: "Rollen & Berechtigungen",
    description: "Unterschiedliche Zugriffsrechte für Nutzergruppen",
    category: "Authentifizierung",
    complexity: "medium",
    timeWeeks: 2,
    costK: 4,
  },
  // Daten & Speicherung
  {
    id: "data-crud",
    name: "Datenverwaltung",
    description: "Erstellen, Lesen, Bearbeiten, Löschen von Einträgen",
    category: "Daten & Speicherung",
    complexity: "low",
    timeWeeks: 2,
    costK: 3,
  },
  {
    id: "data-files",
    name: "Datei-Upload",
    description: "Bilder, Dokumente und andere Dateien hochladen",
    category: "Daten & Speicherung",
    complexity: "medium",
    timeWeeks: 1,
    costK: 2,
  },
  {
    id: "data-search",
    name: "Suche & Filter",
    description: "Volltextsuche und erweiterte Filteroptionen",
    category: "Daten & Speicherung",
    complexity: "medium",
    timeWeeks: 2,
    costK: 4,
  },
  // Kommunikation
  {
    id: "comm-email",
    name: "E-Mail-Benachrichtigungen",
    description: "Automatische E-Mails bei wichtigen Events",
    category: "Kommunikation",
    complexity: "low",
    timeWeeks: 1,
    costK: 2,
  },
  {
    id: "comm-realtime",
    name: "Echtzeit-Updates",
    description: "Live-Aktualisierungen ohne Seiten-Reload",
    category: "Kommunikation",
    complexity: "high",
    timeWeeks: 2,
    costK: 5,
  },
  {
    id: "comm-chat",
    name: "Chat / Messaging",
    description: "Integriertes Nachrichtensystem zwischen Nutzern",
    category: "Kommunikation",
    complexity: "high",
    timeWeeks: 3,
    costK: 8,
  },
  // Zahlung & Commerce
  {
    id: "pay-checkout",
    name: "Checkout & Zahlung",
    description: "Sichere Zahlungsabwicklung via Stripe",
    category: "Zahlung & Commerce",
    complexity: "medium",
    timeWeeks: 2,
    costK: 4,
  },
  {
    id: "pay-subscription",
    name: "Abonnements",
    description: "Wiederkehrende Zahlungen und Plan-Management",
    category: "Zahlung & Commerce",
    complexity: "high",
    timeWeeks: 3,
    costK: 6,
  },
  {
    id: "pay-invoices",
    name: "Rechnungen",
    description: "Automatische Rechnungserstellung und -versand",
    category: "Zahlung & Commerce",
    complexity: "medium",
    timeWeeks: 2,
    costK: 4,
  },
  // Analytics & Admin
  {
    id: "admin-dashboard",
    name: "Admin-Dashboard",
    description: "Übersicht und Verwaltung aller Daten",
    category: "Analytics & Admin",
    complexity: "medium",
    timeWeeks: 2,
    costK: 4,
  },
  {
    id: "admin-analytics",
    name: "Analytics & Reports",
    description: "Statistiken, Diagramme und Export-Funktionen",
    category: "Analytics & Admin",
    complexity: "high",
    timeWeeks: 3,
    costK: 6,
  },
  // Integration
  {
    id: "int-api",
    name: "API / Schnittstellen",
    description: "REST oder GraphQL API für externe Anbindungen",
    category: "Integration",
    complexity: "medium",
    timeWeeks: 2,
    costK: 5,
  },
  {
    id: "int-ai",
    name: "KI-Integration",
    description: "ChatGPT, Bildgenerierung oder andere KI-Features",
    category: "Integration",
    complexity: "high",
    timeWeeks: 3,
    costK: 8,
  },
];

const categories = [...new Set(features.map((f) => f.category))];

const FeatureBuilder = ({ data, updateData, onNext, onBack }: FeatureBuilderProps) => {
  const selectedFeatures = data.selectedFeatures;
  
  const toggleFeature = (featureId: string) => {
    const isSelected = selectedFeatures.includes(featureId);
    const newSelection = isSelected
      ? selectedFeatures.filter((id) => id !== featureId)
      : [...selectedFeatures, featureId];
    updateData({ selectedFeatures: newSelection });
  };
  
  // Calculate scope
  const selectedFeatureObjects = features.filter((f) => 
    selectedFeatures.includes(f.id)
  );
  
  const totalWeeksMin = selectedFeatureObjects.reduce((sum, f) => sum + f.timeWeeks, 0);
  const totalWeeksMax = Math.ceil(totalWeeksMin * 1.5);
  const totalCostMin = selectedFeatureObjects.reduce((sum, f) => sum + f.costK, 0);
  const totalCostMax = Math.ceil(totalCostMin * 1.3);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-3">
              Welche Features benötigen Sie?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Wählen Sie die Funktionen aus, die Ihre Software haben soll. 
              Wir passen den Scope entsprechend an.
            </p>
          </div>

          {/* Scope Display - Sticky */}
          <motion.div 
            className="sticky top-20 z-40 bg-background/95 backdrop-blur-lg rounded-2xl border border-border p-6 mb-8 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {selectedFeatures.length} Features ausgewählt
                </span>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Zeitrahmen</p>
                    <p className="text-lg font-semibold text-foreground">
                      {totalWeeksMin > 0 ? `${totalWeeksMin}–${totalWeeksMax} Wochen` : "–"}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Budget</p>
                    <p className="text-lg font-semibold text-foreground">
                      {totalCostMin > 0 ? `${totalCostMin}–${totalCostMax}k €` : "–"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-lg font-medium text-foreground mb-4">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {features
                    .filter((f) => f.category === category)
                    .map((feature) => {
                      const isSelected = selectedFeatures.includes(feature.id);
                      return (
                        <motion.button
                          key={feature.id}
                          onClick={() => toggleFeature(feature.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={cn(
                            "text-left p-5 rounded-xl border-2 transition-all",
                            isSelected
                              ? "border-primary bg-primary/5"
                              : "border-border bg-background hover:border-primary/30"
                          )}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-foreground">
                              {feature.name}
                            </h4>
                            <div className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                              isSelected
                                ? "bg-primary border-primary"
                                : "border-muted-foreground/30"
                            )}>
                              {isSelected && (
                                <motion.svg
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-3 h-3 text-primary-foreground"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </motion.svg>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {feature.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>~{feature.timeWeeks} Wo.</span>
                            <span>•</span>
                            <span>~{feature.costK}k €</span>
                            <span>•</span>
                            <span className={cn(
                              "px-2 py-0.5 rounded-full",
                              feature.complexity === "low" && "bg-green-500/10 text-green-600",
                              feature.complexity === "medium" && "bg-yellow-500/10 text-yellow-600",
                              feature.complexity === "high" && "bg-red-500/10 text-red-600"
                            )}>
                              {feature.complexity === "low" && "Einfach"}
                              {feature.complexity === "medium" && "Mittel"}
                              {feature.complexity === "high" && "Komplex"}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
            <Button
              variant="ghost"
              onClick={onBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Button>
            
            <Button
              variant="apple"
              onClick={onNext}
              disabled={selectedFeatures.length === 0}
              className="gap-2"
            >
              Zur Zusammenfassung
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeatureBuilder;
