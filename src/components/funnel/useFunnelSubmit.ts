import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FunnelData {
  situation: string;
  businessType: string;
  companySize: string;
  goal: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  message: string;
}

const situationLabels: Record<string, string> = {
  "digital-aufbau": "Geschäft digital aufbauen",
  "mehr-kunden": "Mehr Kunden / Umsatz",
  "chaos": "Chaos in den Abläufen",
  "system": "System für Unternehmen",
};

const businessTypeLabels: Record<string, string> = {
  restaurant: "Restaurant / Food",
  salon: "Friseur / Studio",
  dienstleistung: "Dienstleistung",
  unternehmen: "Unternehmen / Organisation",
};

const goalLabels: Record<string, string> = {
  "mehr-umsatz": "Mehr Umsatz",
  "weniger-chaos": "Weniger Chaos",
  automatisierung: "Automatisierung",
  skalierung: "Skalierung",
};

const budgetLabels: Record<string, string> = {
  "under-5k": "Unter 5.000 €",
  "5k-10k": "5.000 – 10.000 €",
  "10k-25k": "10.000 – 25.000 €",
  "25k+": "25.000+ €",
  unsure: "Noch unklar",
};

const companySizeLabels: Record<string, string> = {
  solo: "Solo / Freelancer",
  startup: "Startup (2-10)",
  sme: "KMU (11-50)",
  midmarket: "Mittelstand (51-250)",
  enterprise: "Enterprise (250+)",
};

const timelineLabels: Record<string, string> = {
  asap: "So schnell wie möglich",
  "1-2months": "1-2 Monate",
  "3-6months": "3-6 Monate",
  flexible: "Flexibel",
};

export const useFunnelSubmit = () => {
  const { toast } = useToast();

  const submitFunnel = async (data: FunnelData): Promise<boolean> => {
    const formattedMessage = `
=== LEAD BERATUNG ===

🎯 Situation: ${situationLabels[data.situation] || data.situation}
🏪 Branche: ${businessTypeLabels[data.businessType] || data.businessType}
🏢 Unternehmensgröße: ${companySizeLabels[data.companySize] || data.companySize}
🚀 Ziel: ${goalLabels[data.goal] || data.goal}
💰 Budget: ${budgetLabels[data.budget] || data.budget}
⏰ Zeitrahmen: ${timelineLabels[data.timeline] || data.timeline}

${data.message ? `📝 Nachricht:\n${data.message}` : "Keine zusätzliche Nachricht."}
    `.trim();

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: data.name,
          email: data.email,
          message: formattedMessage,
          // Map new fields to existing DB schema
          projectType: `${data.situation} | ${data.businessType} | ${data.goal}`,
          budget: data.budget,
          companySize: data.companySize,
          timeline: data.timeline,
        },
      });

      if (error) {
        console.error("Error sending lead:", error);
        toast({
          title: "Fehler beim Senden",
          description: "Bitte versuche es später erneut.",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Anfrage erfolgreich gesendet! 🎉",
        description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
      });
      return true;
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuche es später erneut.",
        variant: "destructive",
      });
      return false;
    }
  };

  return { submitFunnel };
};
