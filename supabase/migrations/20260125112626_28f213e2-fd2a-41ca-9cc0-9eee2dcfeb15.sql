-- Create lead_notes table for notes functionality
CREATE TABLE public.lead_notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by TEXT DEFAULT 'Admin'
);

-- Enable RLS
ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;

-- Service role policies for lead_notes
CREATE POLICY "Service role can insert lead notes"
  ON public.lead_notes FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can select lead notes"
  ON public.lead_notes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Service role can delete lead notes"
  ON public.lead_notes FOR DELETE
  TO authenticated
  USING (true);

-- Add index for faster queries
CREATE INDEX idx_lead_notes_lead_id ON public.lead_notes(lead_id);
CREATE INDEX idx_lead_notes_created_at ON public.lead_notes(created_at DESC);