-- Add status column to leads table
ALTER TABLE public.leads 
ADD COLUMN status TEXT NOT NULL DEFAULT 'new';

-- Add index for faster filtering
CREATE INDEX idx_leads_priority ON public.leads(priority);
CREATE INDEX idx_leads_status ON public.leads(status);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);