import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, Check, Send, Calendar, Mail, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface LeadFunnelProps {
  onComplete: (data: FunnelData) => Promise<boolean>;
  onClose: () => void;
}

const situations = [
  { id: "digital-aufbau", label: "Ich will mein Geschäft digital aufbauen", description: "Vom Offline- zum Online-Business" },
  { id: "mehr-kunden", label: "Ich will mehr Kunden / Umsatz", description: "Wachstum durch bessere Systeme" },
  { id: "chaos", label: "Ich habe Chaos in meinen Abläufen", description: "Prozesse strukturieren und automatisieren" },
  { id: "system", label: "Ich brauche ein System für mein Unternehmen", description: "Individuelle Softwarelösung" },
];

const businessTypes = [
  { id: "restaurant", label: "Restaurant / Food", description: "Gastronomie, Lieferdienste, Catering" },
  { id: "salon", label: "Friseur / Studio", description: "Barbershop, Salon, Kosmetik, Fitness" },
  { id: "dienstleistung", label: "Dienstleistung", description: "Handwerk, Beratung, Agentur, Freelancer" },
  { id: "unternehmen", label: "Unternehmen / Organisation", description: "Mittelstand, Startup, Enterprise" },
];

const companySizes = [
  { id: "solo", label: "Solo / Freelancer", description: "1 Person" },
  { id: "startup", label: "Startup", description: "2-10 Mitarbeiter" },
  { id: "sme", label: "KMU", description: "11-50 Mitarbeiter" },
  { id: "midmarket", label: "Mittelstand", description: "51-250 Mitarbeiter" },
  { id: "enterprise", label: "Enterprise", description: "250+ Mitarbeiter" },
];

const goals = [
  { id: "mehr-umsatz", label: "Mehr Umsatz", description: "Neue Kunden gewinnen und Einnahmen steigern" },
  { id: "weniger-chaos", label: "Weniger Chaos", description: "Abläufe ordnen und Überblick gewinnen" },
  { id: "automatisierung", label: "Automatisierung", description: "Manuelle Aufgaben eliminieren" },
  { id: "skalierung", label: "Skalierung", description: "Wachstum ohne Mehraufwand ermöglichen" },
];

const budgetRanges = [
  { id: "under-5k", label: "Unter 5.000 €", description: "Kleine Projekte & Einstiegslösungen" },
  { id: "5k-10k", label: "5.000 – 10.000 €", description: "Standardprojekte" },
  { id: "10k-25k", label: "10.000 – 25.000 €", description: "Umfangreichere Systeme" },
  { id: "25k+", label: "25.000+ €", description: "Enterprise & Individuallösungen" },
  { id: "unsure", label: "Noch unklar", description: "Wir finden gemeinsam das passende Budget" },
];

const timelines = [
  { id: "asap", label: "So schnell wie möglich", description: "Start innerhalb 2 Wochen" },
  { id: "1-2months", label: "1-2 Monate", description: "Zeitnah starten" },
  { id: "3-6months", label: "3-6 Monate", description: "In Planung" },
  { id: "flexible", label: "Flexibel", description: "Kein fester Zeitrahmen" },
];

const steps = [
  { id: 1, title: "Situation", subtitle: "Was beschreibt deine Situation am besten?" },
  { id: 2, title: "Branche", subtitle: "Was trifft auf dein Geschäft zu?" },
  { id: 3, title: "Unternehmen", subtitle: "Wie groß ist dein Unternehmen?" },
  { id: 4, title: "Ziel", subtitle: "Was ist dein Ziel?" },
  { id: 5, title: "Budget", subtitle: "Welches Budget hast du eingeplant?" },
  { id: 6, title: "Zeitrahmen", subtitle: "Wann soll es losgehen?" },
  { id: 7, title: "Kontakt", subtitle: "Wie können wir dich erreichen?" },
];

const nextSteps = [
  {
    icon: Mail,
    title: "Bestätigung per E-Mail",
    description: "Du erhältst in wenigen Minuten eine Bestätigung deiner Anfrage.",
  },
  {
    icon: Clock,
    title: "Rückmeldung in 24h",
    description: "Wir prüfen deine Anfrage und melden uns innerhalb eines Werktages.",
  },
  {
    icon: Calendar,
    title: "Kostenlose Erstberatung",
    description: "Wir vereinbaren einen Termin für ein unverbindliches Beratungsgespräch.",
  },
];

const LeadFunnel = ({ onComplete, onClose }: LeadFunnelProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState<FunnelData>({
    situation: "",
    businessType: "",
    companySize: "",
    goal: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = (currentStep / steps.length) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return data.situation !== "";
      case 2:
        return data.businessType !== "";
      case 3:
        return data.companySize !== "";
      case 4:
        return data.goal !== "";
      case 5:
        return data.budget !== "";
      case 6:
        return data.timeline !== "";
      case 7:
        return data.name.trim() !== "" && data.email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setIsSubmitting(true);
    const success = await onComplete(data);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
    }
  };

  const SelectionCard = ({
    id,
    label,
    description,
    selected,
    onClick,
  }: {
    id: string;
    label: string;
    description: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
        "hover:border-primary/50 hover:bg-muted/50",
        selected
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border bg-background"
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-foreground">{label}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {selected && (
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </div>
    </button>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid gap-3">
            {situations.map((item) => (
              <SelectionCard
                key={item.id}
                {...item}
                selected={data.situation === item.id}
                onClick={() => setData({ ...data, situation: item.id })}
              />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid gap-3">
            {businessTypes.map((item) => (
              <SelectionCard
                key={item.id}
                {...item}
                selected={data.businessType === item.id}
                onClick={() => setData({ ...data, businessType: item.id })}
              />
            ))}
          </div>
        );
      case 3:
        return (
          <div className="grid gap-3">
            {companySizes.map((size) => (
              <SelectionCard
                key={size.id}
                {...size}
                selected={data.companySize === size.id}
                onClick={() => setData({ ...data, companySize: size.id })}
              />
            ))}
          </div>
        );
      case 4:
        return (
          <div className="grid gap-3">
            {goals.map((item) => (
              <SelectionCard
                key={item.id}
                {...item}
                selected={data.goal === item.id}
                onClick={() => setData({ ...data, goal: item.id })}
              />
            ))}
          </div>
        );
      case 5:
        return (
          <div className="grid gap-3">
            {budgetRanges.map((range) => (
              <SelectionCard
                key={range.id}
                {...range}
                selected={data.budget === range.id}
                onClick={() => setData({ ...data, budget: range.id })}
              />
            ))}
          </div>
        );
      case 6:
        return (
          <div className="grid gap-3">
            {timelines.map((tl) => (
              <SelectionCard
                key={tl.id}
                {...tl}
                selected={data.timeline === tl.id}
                onClick={() => setData({ ...data, timeline: tl.id })}
              />
            ))}
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Dein Name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="deine@email.de"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nachricht (optional)
              </label>
              <textarea
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="Beschreib kurz deine aktuelle Situation..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSuccessScreen = () => (
    <div className="text-center py-6">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center animate-scale-in">
          <Sparkles className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-foreground mb-2">
        Vielen Dank, {data.name.split(" ")[0]}! 🎉
      </h2>
      <p className="text-muted-foreground mb-8">
        Deine Anfrage ist bei uns eingegangen.
      </p>

      <div className="text-left space-y-4 mb-8">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          So geht's weiter
        </h3>
        {nextSteps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">{step.title}</p>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Button variant="apple" onClick={onClose} className="w-full">
        Schließen
      </Button>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
        <div className="w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          <div className="p-6">
            {renderSuccessScreen()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentStep >= step.id ? "bg-primary" : "bg-muted"
                  )}
                />
              ))}
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
          <Progress value={progress} className="h-1 mb-4" />
          <h2 className="text-xl font-semibold text-foreground">
            {steps[currentStep - 1].title}
          </h2>
          <p className="text-muted-foreground">
            {steps[currentStep - 1].subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[50vh] overflow-y-auto">{renderStep()}</div>

        {/* Footer */}
        <div className="p-6 border-t border-border flex justify-between">
          <Button
            variant="ghost"
            onClick={currentStep === 1 ? onClose : handleBack}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {currentStep === 1 ? "Abbrechen" : "Zurück"}
          </Button>
          {currentStep < steps.length ? (
            <Button
              variant="apple"
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2"
            >
              Weiter
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              variant="apple"
              onClick={handleSubmit}
              disabled={!canProceed() || isSubmitting}
              className="gap-2"
            >
              {isSubmitting ? "Wird gesendet..." : "Absenden"}
              <Send className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadFunnel;
