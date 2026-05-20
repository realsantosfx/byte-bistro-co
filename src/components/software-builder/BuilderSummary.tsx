import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Wallet, MessageSquare, Send, Sparkles, Download, RefreshCw } from "lucide-react";
import { ProjectData } from "@/pages/SoftwareBuilder";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BuilderSummaryProps {
  data: ProjectData;
  updateData: (updates: Partial<ProjectData>) => void;
  onBack: () => void;
  onRestart: () => void;
}

interface Feature {
  id: string;
  name: string;
  category: string;
  timeWeeks: number;
  costK: number;
}

const allFeatures: Feature[] = [
  { id: "auth-basic", name: "User-Authentifizierung", category: "Authentifizierung", timeWeeks: 1, costK: 2 },
  { id: "auth-social", name: "Social Login", category: "Authentifizierung", timeWeeks: 1, costK: 3 },
  { id: "auth-roles", name: "Rollen & Berechtigungen", category: "Authentifizierung", timeWeeks: 2, costK: 4 },
  { id: "data-crud", name: "Datenverwaltung", category: "Daten & Speicherung", timeWeeks: 2, costK: 3 },
  { id: "data-files", name: "Datei-Upload", category: "Daten & Speicherung", timeWeeks: 1, costK: 2 },
  { id: "data-search", name: "Suche & Filter", category: "Daten & Speicherung", timeWeeks: 2, costK: 4 },
  { id: "comm-email", name: "E-Mail-Benachrichtigungen", category: "Kommunikation", timeWeeks: 1, costK: 2 },
  { id: "comm-realtime", name: "Echtzeit-Updates", category: "Kommunikation", timeWeeks: 2, costK: 5 },
  { id: "comm-chat", name: "Chat / Messaging", category: "Kommunikation", timeWeeks: 3, costK: 8 },
  { id: "pay-checkout", name: "Checkout & Zahlung", category: "Zahlung & Commerce", timeWeeks: 2, costK: 4 },
  { id: "pay-subscription", name: "Abonnements", category: "Zahlung & Commerce", timeWeeks: 3, costK: 6 },
  { id: "pay-invoices", name: "Rechnungen", category: "Zahlung & Commerce", timeWeeks: 2, costK: 4 },
  { id: "admin-dashboard", name: "Admin-Dashboard", category: "Analytics & Admin", timeWeeks: 2, costK: 4 },
  { id: "admin-analytics", name: "Analytics & Reports", category: "Analytics & Admin", timeWeeks: 3, costK: 6 },
  { id: "int-api", name: "API / Schnittstellen", category: "Integration", timeWeeks: 2, costK: 5 },
  { id: "int-ai", name: "KI-Integration", category: "Integration", timeWeeks: 3, costK: 8 },
];

const BuilderSummary = ({ data, updateData, onBack, onRestart }: BuilderSummaryProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const selectedFeatureObjects = allFeatures.filter((f) => 
    data.selectedFeatures.includes(f.id)
  );
  
  const totalWeeksMin = selectedFeatureObjects.reduce((sum, f) => sum + f.timeWeeks, 0);
  const totalWeeksMax = Math.ceil(totalWeeksMin * 1.5);
  const totalCostMin = selectedFeatureObjects.reduce((sum, f) => sum + f.costK, 0);
  const totalCostMax = Math.ceil(totalCostMin * 1.3);

  // Group features by category
  const groupedFeatures = selectedFeatureObjects.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Prepare features data for storage
      const featuresData = selectedFeatureObjects.map(f => ({
        id: f.id,
        name: f.name,
        category: f.category,
        timeWeeks: f.timeWeeks,
        costK: f.costK,
      }));

      const { error } = await supabase
        .from("blueprints")
        .insert({
          project_name: data.projectName,
          problem_statement: data.problemStatement,
          target_audience: data.targetAudience,
          current_solution: data.currentSolution,
          success_metrics: data.successMetrics,
          selected_features: featuresData,
          time_weeks_min: totalWeeksMin,
          time_weeks_max: totalWeeksMax,
          cost_min: totalCostMin,
          cost_max: totalCostMax,
          additional_notes: data.additionalNotes || null,
          status: "new",
        });

      if (error) {
        console.error("Error saving blueprint:", error);
        toast({
          title: "Fehler beim Speichern",
          description: "Der Blueprint konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten.",
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-10 h-10 text-primary" />
            </motion.div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Blueprint erstellt
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wir haben Ihren Software-Blueprint erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="apple" onClick={onRestart} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Neuen Blueprint starten
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Zur Startseite</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-3">
            Ihr Software-Blueprint
          </h2>
          <p className="text-lg text-muted-foreground">
            Überprüfen Sie Ihre Angaben und senden Sie uns Ihren Blueprint.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Scope Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Geschätzter Scope
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">
                    {totalWeeksMin}–{totalWeeksMax} Wochen
                  </p>
                  <p className="text-sm text-muted-foreground">Entwicklungszeit</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-foreground">
                    {totalCostMin}–{totalCostMax}k €
                  </p>
                  <p className="text-sm text-muted-foreground">Projektbudget</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-muted/30 border border-border"
          >
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              Projektdetails
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Projektname</p>
                <p className="font-medium text-foreground">{data.projectName}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Problem</p>
                <p className="text-sm text-foreground line-clamp-2">{data.problemStatement}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Zielgruppe</p>
                <p className="text-sm text-foreground line-clamp-1">{data.targetAudience}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Selected Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-background border border-border mb-8"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-4">
            Ausgewählte Features ({data.selectedFeatures.length})
          </h3>
          <div className="space-y-6">
            {Object.entries(groupedFeatures).map(([category, features]) => (
              <div key={category}>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span 
                      key={feature.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-primary" />
                      {feature.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Notes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-background border border-border mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-muted-foreground">
              Zusätzliche Anmerkungen (optional)
            </h3>
          </div>
          <textarea
            value={data.additionalNotes}
            onChange={(e) => updateData({ additionalNotes: e.target.value })}
            placeholder="Gibt es noch etwas, das wir wissen sollten? Besondere Anforderungen, Deadlines, Integrationen..."
            rows={4}
            className="w-full bg-muted/50 border border-border focus:border-primary outline-none p-4 rounded-xl text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
          />
        </motion.div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Features bearbeiten
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Als PDF
            </Button>
            <Button
              variant="apple"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="gap-2"
            >
              {isSubmitting ? "Wird gesendet..." : "Blueprint absenden"}
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Mit dem Absenden stimmen Sie unserer{" "}
          <Link to="/datenschutz" className="underline hover:text-foreground">
            Datenschutzerklärung
          </Link>{" "}
          zu.
        </p>
      </div>
    </div>
  );
};

export default BuilderSummary;
