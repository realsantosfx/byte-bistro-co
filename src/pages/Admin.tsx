import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { ArrowLeft, Search, Filter, Mail, Clock, Building2, Calendar, Euro, Flame, Thermometer, Snowflake, Download, FileSpreadsheet, LogOut, Eye, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import * as XLSX from "xlsx";
import { LeadChart } from "@/components/admin/LeadChart";
import { LeadDetailDialog } from "@/components/admin/LeadDetailDialog";
import type { User, Session } from "@supabase/supabase-js";

interface Lead {
  id: string;
  name: string;
  email: string;
  project_type: string;
  budget: string;
  company_size: string;
  timeline: string;
  message: string | null;
  lead_score: number;
  priority: string;
  status: string;
  created_at: string;
}

const situationLabels: Record<string, string> = {
  "digital-aufbau": "Digital aufbauen",
  "mehr-kunden": "Mehr Kunden / Umsatz",
  "chaos": "Chaos in Abläufen",
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

const statusLabels: Record<string, string> = {
  new: "Neu",
  contacted: "Kontaktiert",
  qualified: "Qualifiziert",
  proposal: "Angebot",
  won: "Gewonnen",
  lost: "Verloren",
};

const parseProjectType = (projectType: string, index: number, labels: Record<string, string>): string => {
  const parts = projectType.split(" | ");
  const key = parts[index]?.trim();
  if (!key) return projectType;
  return labels[key] || key;
};

const Admin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
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

    // Then check for existing session
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
      fetchLeads();
    }
  }, [user]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching leads:", error);
      toast({
        title: "Fehler beim Laden",
        description: "Leads konnten nicht geladen werden.",
        variant: "destructive",
      });
    } else {
      setLeads((data as Lead[]) || []);
    }
    setLoading(false);
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    const { error } = await supabase
      .from("leads")
      .update({ status: newStatus })
      .eq("id", leadId);

    if (error) {
      console.error("Error updating lead:", error);
      toast({
        title: "Fehler",
        description: "Status konnte nicht aktualisiert werden.",
        variant: "destructive",
      });
    } else {
      setLeads(leads.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      ));
      toast({
        title: "Status aktualisiert",
        description: `Lead wurde auf "${statusLabels[newStatus]}" gesetzt.`,
      });
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === "all" || lead.priority === priorityFilter;
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesPriority && matchesStatus;
  });

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "hot": return <Flame className="w-4 h-4 text-orange-500" />;
      case "warm": return <Thermometer className="w-4 h-4 text-yellow-500" />;
      default: return <Snowflake className="w-4 h-4 text-blue-400" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const styles = {
      hot: "bg-orange-100 text-orange-700 border-orange-200",
      warm: "bg-yellow-100 text-yellow-700 border-yellow-200",
      cold: "bg-blue-100 text-blue-700 border-blue-200",
    };
    return styles[priority as keyof typeof styles] || styles.cold;
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      new: "bg-purple-100 text-purple-700 border-purple-200",
      contacted: "bg-blue-100 text-blue-700 border-blue-200",
      qualified: "bg-green-100 text-green-700 border-green-200",
      proposal: "bg-yellow-100 text-yellow-700 border-yellow-200",
      won: "bg-emerald-100 text-emerald-700 border-emerald-200",
      lost: "bg-red-100 text-red-700 border-red-200",
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
    total: leads.length,
    hot: leads.filter(l => l.priority === "hot").length,
    warm: leads.filter(l => l.priority === "warm").length,
    cold: leads.filter(l => l.priority === "cold").length,
    new: leads.filter(l => l.status === "new").length,
  };

  const prepareExportData = (leadsToExport: Lead[]) => {
    return leadsToExport.map(lead => ({
      Name: lead.name,
      "E-Mail": lead.email,
      Situation: parseProjectType(lead.project_type, 0, situationLabels),
      Branche: parseProjectType(lead.project_type, 1, businessTypeLabels),
      Ziel: parseProjectType(lead.project_type, 2, goalLabels),
      Budget: budgetLabels[lead.budget] || lead.budget,
      Unternehmensgröße: companySizeLabels[lead.company_size] || lead.company_size,
      Zeitrahmen: timelineLabels[lead.timeline] || lead.timeline,
      Nachricht: lead.message || "",
      "Lead Score": lead.lead_score,
      Priorität: lead.priority.toUpperCase(),
      Status: statusLabels[lead.status] || lead.status,
      Erstellt: formatDate(lead.created_at),
    }));
  };

  const exportToCSV = () => {
    const data = prepareExportData(filteredLeads);
    const headers = Object.keys(data[0] || {});
    const csvContent = [
      headers.join(";"),
      ...data.map(row => headers.map(h => `"${String(row[h as keyof typeof row]).replace(/"/g, '""')}"`).join(";"))
    ].join("\n");
    
    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `leads_export_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    
    toast({
      title: "Export erfolgreich",
      description: `${filteredLeads.length} Leads als CSV exportiert.`,
    });
  };

  const exportToExcel = () => {
    const data = prepareExportData(filteredLeads);
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    
    // Auto-size columns
    const colWidths = Object.keys(data[0] || {}).map(key => ({
      wch: Math.max(key.length, ...data.map(row => String(row[key as keyof typeof row]).length))
    }));
    worksheet["!cols"] = colWidths;
    
    XLSX.writeFile(workbook, `leads_export_${new Date().toISOString().split("T")[0]}.xlsx`);
    
    toast({
      title: "Export erfolgreich",
      description: `${filteredLeads.length} Leads als Excel exportiert.`,
    });
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
            <div className="flex items-center gap-2">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Zurück
                </Button>
              </Link>
              <h1 className="text-xl font-semibold text-foreground">Lead Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/admin/blueprints">
                <Button variant="outline" size="sm" className="gap-2">
                  <Layers className="w-4 h-4" />
                  Blueprints
                </Button>
              </Link>
              <Button 
                onClick={exportToCSV} 
                variant="outline" 
                size="sm" 
                className="gap-2"
                disabled={filteredLeads.length === 0}
              >
                <Download className="w-4 h-4" />
                CSV
              </Button>
              <Button 
                onClick={exportToExcel} 
                variant="outline" 
                size="sm" 
                className="gap-2"
                disabled={filteredLeads.length === 0}
              >
                <FileSpreadsheet className="w-4 h-4" />
                Excel
              </Button>
              <Button onClick={fetchLeads} variant="outline" size="sm">
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground">Gesamt</p>
            <p className="text-2xl font-semibold text-foreground">{stats.total}</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-sm text-orange-600">Hot Leads</p>
            <p className="text-2xl font-semibold text-orange-700">{stats.hot}</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-sm text-yellow-600">Warm Leads</p>
            <p className="text-2xl font-semibold text-yellow-700">{stats.warm}</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-600">Cold Leads</p>
            <p className="text-2xl font-semibold text-blue-700">{stats.cold}</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-sm text-purple-600">Neue</p>
            <p className="text-2xl font-semibold text-purple-700">{stats.new}</p>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-8">
          <LeadChart leads={leads} />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Suche nach Name oder E-Mail..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-full sm:w-[180px] bg-background">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Priorität" />
            </SelectTrigger>
            <SelectContent className="bg-background border border-border">
              <SelectItem value="all">Alle Prioritäten</SelectItem>
              <SelectItem value="hot">🔥 Hot</SelectItem>
              <SelectItem value="warm">🌡️ Warm</SelectItem>
              <SelectItem value="cold">❄️ Cold</SelectItem>
            </SelectContent>
          </Select>
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

        {/* Leads List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Leads werden geladen...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <p className="text-muted-foreground">Keine Leads gefunden.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className={cn(
                  "bg-card border rounded-xl p-6 transition-all hover:shadow-md",
                  lead.priority === "hot" && "border-orange-200 bg-orange-50/30"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Lead Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold text-foreground">{lead.name}</h3>
                      <div className={cn("px-2 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1", getPriorityBadge(lead.priority))}>
                        {getPriorityIcon(lead.priority)}
                        {lead.priority.toUpperCase()} • {lead.lead_score}/100
                      </div>
                      <div className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", getStatusBadge(lead.status))}>
                        {statusLabels[lead.status] || lead.status}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </a>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(lead.created_at)}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {parseProjectType(lead.project_type, 0, situationLabels)}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {parseProjectType(lead.project_type, 1, businessTypeLabels)}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground flex items-center gap-1">
                        🎯
                        {parseProjectType(lead.project_type, 2, goalLabels)}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground flex items-center gap-1">
                        <Euro className="w-3 h-3" />
                        {budgetLabels[lead.budget] || lead.budget}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                        {companySizeLabels[lead.company_size] || lead.company_size}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {timelineLabels[lead.timeline] || lead.timeline}
                      </span>
                    </div>

                    {lead.message && (
                      <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        "{lead.message}"
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedLead(lead);
                        setDetailOpen(true);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                    <Select 
                      value={lead.status} 
                      onValueChange={(value) => updateLeadStatus(lead.id, value)}
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

        {/* Lead Detail Dialog */}
        <LeadDetailDialog
          lead={selectedLead}
          open={detailOpen}
          onOpenChange={setDetailOpen}
          situationLabels={situationLabels}
          businessTypeLabels={businessTypeLabels}
          goalLabels={goalLabels}
          budgetLabels={budgetLabels}
          companySizeLabels={companySizeLabels}
          timelineLabels={timelineLabels}
          statusLabels={statusLabels}
        />
      </main>
    </div>
  );
};

export default Admin;
