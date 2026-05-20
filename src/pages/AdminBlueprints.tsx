import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Search, Filter, Clock, Wallet, Calendar, LogOut, Eye, Layers, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { User, Session } from "@supabase/supabase-js";
import BlueprintDetailDialog from "@/components/admin/BlueprintDetailDialog";

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

const statusLabels: Record<string, string> = {
  new: "Neu",
  reviewing: "In Prüfung",
  contacted: "Kontaktiert",
  proposal: "Angebot",
  accepted: "Angenommen",
  rejected: "Abgelehnt",
};

const AdminBlueprints = () => {
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedBlueprint, setSelectedBlueprint] = useState<Blueprint | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        if (!session?.user) {
          navigate("/auth");
        }
        setCheckingAuth(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate("/auth");
      }
      setCheckingAuth(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchBlueprints();
    }
  }, [user]);

  const fetchBlueprints = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("blueprints")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching blueprints:", error);
      toast({
        title: "Fehler beim Laden",
        description: "Blueprints konnten nicht geladen werden.",
        variant: "destructive",
      });
    } else {
      // Parse the JSONB selected_features field with proper typing
      const parsedData = (data || []).map(bp => ({
        ...bp,
        selected_features: (Array.isArray(bp.selected_features) 
          ? bp.selected_features as unknown as Feature[] 
          : []) 
      }));
      setBlueprints(parsedData);
    }
    setLoading(false);
  };

  const updateBlueprintStatus = async (blueprintId: string, newStatus: string) => {
    const { error } = await supabase
      .from("blueprints")
      .update({ status: newStatus })
      .eq("id", blueprintId);

    if (error) {
      console.error("Error updating blueprint:", error);
      toast({
        title: "Fehler",
        description: "Status konnte nicht aktualisiert werden.",
        variant: "destructive",
      });
    } else {
      setBlueprints(blueprints.map(bp => 
        bp.id === blueprintId ? { ...bp, status: newStatus } : bp
      ));
      toast({
        title: "Status aktualisiert",
        description: `Blueprint wurde auf "${statusLabels[newStatus]}" gesetzt.`,
      });
    }
  };

  const filteredBlueprints = blueprints.filter(bp => {
    const matchesSearch = bp.project_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || bp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      new: "bg-purple-100 text-purple-700 border-purple-200",
      reviewing: "bg-blue-100 text-blue-700 border-blue-200",
      contacted: "bg-yellow-100 text-yellow-700 border-yellow-200",
      proposal: "bg-orange-100 text-orange-700 border-orange-200",
      accepted: "bg-green-100 text-green-700 border-green-200",
      rejected: "bg-red-100 text-red-700 border-red-200",
    };
    return styles[status] || styles.new;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const stats = {
    total: blueprints.length,
    new: blueprints.filter(bp => bp.status === "new").length,
    reviewing: blueprints.filter(bp => bp.status === "reviewing").length,
    proposal: blueprints.filter(bp => bp.status === "proposal").length,
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Zurück
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-foreground">Blueprint Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/admin">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Leads
                </Button>
              </Link>
              <Button onClick={fetchBlueprints} variant="outline" size="sm">
                Aktualisieren
              </Button>
              <Button onClick={handleLogout} variant="ghost" size="sm" className="gap-2">
                <LogOut className="w-4 h-4" />
                Abmelden
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground">Gesamt</p>
            <p className="text-2xl font-semibold text-foreground">{stats.total}</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-sm text-purple-600">Neue</p>
            <p className="text-2xl font-semibold text-purple-700">{stats.new}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-600">In Prüfung</p>
            <p className="text-2xl font-semibold text-blue-700">{stats.reviewing}</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-sm text-orange-600">Angebot</p>
            <p className="text-2xl font-semibold text-orange-700">{stats.proposal}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Suche nach Projektname..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border">
              <SelectItem value="all">Alle Status</SelectItem>
              {Object.entries(statusLabels).map(([key, label]) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Blueprints List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Blueprints werden geladen...</p>
          </div>
        ) : filteredBlueprints.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <Layers className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Keine Blueprints gefunden.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Blueprints werden erstellt, wenn Kunden den Software Builder nutzen.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBlueprints.map((blueprint) => (
              <div
                key={blueprint.id}
                className={cn(
                  "bg-card border rounded-xl p-6 transition-all hover:shadow-md",
                  blueprint.status === "new" && "border-purple-200 bg-purple-50/30"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Blueprint Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold text-foreground">{blueprint.project_name}</h3>
                      <div className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", getStatusBadge(blueprint.status))}>
                        {statusLabels[blueprint.status] || blueprint.status}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {blueprint.problem_statement}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(blueprint.created_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Layers className="w-4 h-4" />
                        {blueprint.selected_features.length} Features
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {blueprint.time_weeks_min}–{blueprint.time_weeks_max} Wochen
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg">
                        <Wallet className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {blueprint.cost_min}–{blueprint.cost_max}k €
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedBlueprint(blueprint);
                        setDetailOpen(true);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                    <Select 
                      value={blueprint.status} 
                      onValueChange={(value) => updateBlueprintStatus(blueprint.id, value)}
                    >
                      <SelectTrigger className="w-[140px] bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border">
                        {Object.entries(statusLabels).map(([key, label]) => (
                          <SelectItem key={key} value={key}>{label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blueprint Detail Dialog */}
        <BlueprintDetailDialog
          blueprint={selectedBlueprint}
          open={detailOpen}
          onOpenChange={setDetailOpen}
          statusLabels={statusLabels}
        />
      </main>
    </div>
  );
};

export default AdminBlueprints;
