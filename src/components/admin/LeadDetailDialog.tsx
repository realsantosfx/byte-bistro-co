import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, Building2, Euro, Clock, Calendar, User, MessageSquare, Plus, Trash2, Target, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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

interface Note {
  id: string;
  content: string;
  created_at: string;
  created_by: string;
}

interface LeadDetailDialogProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  situationLabels: Record<string, string>;
  businessTypeLabels: Record<string, string>;
  goalLabels: Record<string, string>;
  budgetLabels: Record<string, string>;
  companySizeLabels: Record<string, string>;
  timelineLabels: Record<string, string>;
  statusLabels: Record<string, string>;
}

const parseProjectType = (projectType: string, index: number, labels: Record<string, string>): string => {
  const parts = projectType.split(" | ");
  const key = parts[index]?.trim();
  if (!key) return projectType;
  return labels[key] || key;
};

export const LeadDetailDialog = ({
  lead,
  open,
  onOpenChange,
  situationLabels,
  businessTypeLabels,
  goalLabels,
  budgetLabels,
  companySizeLabels,
  timelineLabels,
  statusLabels,
}: LeadDetailDialogProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (lead && open) {
      fetchNotes();
    }
  }, [lead, open]);

  const fetchNotes = async () => {
    if (!lead) return;
    
    const { data, error } = await supabase
      .from("lead_notes")
      .select("*")
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching notes:", error);
    } else {
      setNotes(data || []);
    }
  };

  const addNote = async () => {
    if (!lead || !newNote.trim()) return;
    
    setLoading(true);
    const { error } = await supabase
      .from("lead_notes")
      .insert({
        lead_id: lead.id,
        content: newNote.trim(),
      });

    if (error) {
      console.error("Error adding note:", error);
      toast({
        title: "Fehler",
        description: "Notiz konnte nicht gespeichert werden.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Notiz gespeichert",
        description: "Die Notiz wurde hinzugefügt.",
      });
      setNewNote("");
      fetchNotes();
    }
    setLoading(false);
  };

  const deleteNote = async (noteId: string) => {
    const { error } = await supabase
      .from("lead_notes")
      .delete()
      .eq("id", noteId);

    if (error) {
      console.error("Error deleting note:", error);
      toast({
        title: "Fehler",
        description: "Notiz konnte nicht gelöscht werden.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Notiz gelöscht",
      });
      fetchNotes();
    }
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

  const getPriorityBadge = (priority: string) => {
    const styles = {
      hot: "bg-orange-100 text-orange-700 border-orange-200",
      warm: "bg-yellow-100 text-yellow-700 border-yellow-200",
      cold: "bg-blue-100 text-blue-700 border-blue-200",
    };
    return styles[priority as keyof typeof styles] || styles.cold;
  };

  if (!lead) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <User className="w-5 h-5" />
            {lead.name}
            <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", getPriorityBadge(lead.priority))}>
              {lead.priority.toUpperCase()} • {lead.lead_score}/100
            </span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6">
            {/* Lead Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href={`mailto:${lead.email}`} className="text-primary hover:underline">
                    {lead.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                  <span>{parseProjectType(lead.project_type, 0, situationLabels)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span>{parseProjectType(lead.project_type, 1, businessTypeLabels)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <span>{parseProjectType(lead.project_type, 2, goalLabels)}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>{formatDate(lead.created_at)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Euro className="w-4 h-4 text-muted-foreground" />
                  <span>{budgetLabels[lead.budget] || lead.budget}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{timelineLabels[lead.timeline] || lead.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span>{companySizeLabels[lead.company_size] || lead.company_size}</span>
                </div>
              </div>
            </div>

            {/* Original Message */}
            {lead.message && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Ursprüngliche Nachricht
                </h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{lead.message}</p>
              </div>
            )}

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Status:</span>
              <span className="px-2 py-1 bg-muted rounded-md text-sm">
                {statusLabels[lead.status] || lead.status}
              </span>
            </div>

            {/* Notes Section */}
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-medium mb-3">Notizen</h4>
              
              {/* Add Note */}
              <div className="flex gap-2 mb-4">
                <Textarea
                  placeholder="Neue Notiz hinzufügen..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button 
                  onClick={addNote} 
                  disabled={loading || !newNote.trim()}
                  size="sm"
                  className="self-end"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Hinzufügen
                </Button>
              </div>

              {/* Notes List */}
              <div className="space-y-3">
                {notes.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Noch keine Notizen vorhanden.
                  </p>
                ) : (
                  notes.map((note) => (
                    <div key={note.id} className="bg-muted/30 p-3 rounded-lg group relative">
                      <p className="text-sm pr-8">{note.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">
                          {note.created_by} • {formatDate(note.created_at)}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2"
                          onClick={() => deleteNote(note.id)}
                        >
                          <Trash2 className="w-3 h-3 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
