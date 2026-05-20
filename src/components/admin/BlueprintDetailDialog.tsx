import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock, Wallet, Layers, Target, Users, Lightbulb, BarChart3, MessageSquare, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  id: string;
  name: string;
  category: string;
  timeWeeks: number;
  costK: number;
}

interface Blueprint {
  id: string;
  created_at: string;
  project_name: string;
  problem_statement: string;
  target_audience: string;
  current_solution: string;
  success_metrics: string;
  selected_features: Feature[];
  time_weeks_min: number;
  time_weeks_max: number;
  cost_min: number;
  cost_max: number;
  additional_notes: string | null;
  status: string;
  contact_email: string | null;
  contact_name: string | null;
}

interface BlueprintDetailDialogProps {
  blueprint: Blueprint | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  statusLabels: Record<string, string>;
}

const BlueprintDetailDialog = ({
  blueprint,
  open,
  onOpenChange,
  statusLabels,
}: BlueprintDetailDialogProps) => {
  if (!blueprint) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Group features by category
  const groupedFeatures = blueprint.selected_features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, Feature[]>);

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      new: "bg-purple-100 text-purple-700",
      reviewing: "bg-blue-100 text-blue-700",
      contacted: "bg-yellow-100 text-yellow-700",
      proposal: "bg-orange-100 text-orange-700",
      accepted: "bg-green-100 text-green-700",
      rejected: "bg-red-100 text-red-700",
    };
    return styles[status] || styles.new;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <DialogTitle className="text-xl">{blueprint.project_name}</DialogTitle>
            <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", getStatusBadge(blueprint.status))}>
              {statusLabels[blueprint.status]}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Erstellt am {formatDate(blueprint.created_at)}
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Scope Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Zeitrahmen</span>
              </div>
              <p className="text-xl font-semibold text-foreground">
                {blueprint.time_weeks_min}–{blueprint.time_weeks_max} Wochen
              </p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Wallet className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Budget</span>
              </div>
              <p className="text-xl font-semibold text-foreground">
                {blueprint.cost_min}–{blueprint.cost_max}k €
              </p>
            </div>
          </div>

          {/* Problem & Context */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Problem</span>
              </div>
              <p className="text-sm text-muted-foreground">{blueprint.problem_statement}</p>
            </div>

            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Zielgruppe</span>
              </div>
              <p className="text-sm text-muted-foreground">{blueprint.target_audience}</p>
            </div>

            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Aktuelle Lösung</span>
              </div>
              <p className="text-sm text-muted-foreground">{blueprint.current_solution}</p>
            </div>

            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Erfolgskriterien</span>
              </div>
              <p className="text-sm text-muted-foreground">{blueprint.success_metrics}</p>
            </div>
          </div>

          {/* Selected Features */}
          <div className="p-4 rounded-xl bg-background border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">
                Ausgewählte Features ({blueprint.selected_features.length})
              </span>
            </div>
            <div className="space-y-4">
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
                        <span className="text-xs text-muted-foreground">
                          ({feature.timeWeeks}W / {feature.costK}k)
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          {blueprint.additional_notes && (
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Zusätzliche Anmerkungen</span>
              </div>
              <p className="text-sm text-muted-foreground">{blueprint.additional_notes}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlueprintDetailDialog;
