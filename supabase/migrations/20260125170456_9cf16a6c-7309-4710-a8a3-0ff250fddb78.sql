-- Create blueprints table
CREATE TABLE public.blueprints (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Project Details
  project_name TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  target_audience TEXT NOT NULL,
  current_solution TEXT NOT NULL,
  success_metrics TEXT NOT NULL,
  
  -- Features (stored as JSON array)
  selected_features JSONB NOT NULL DEFAULT '[]',
  
  -- Scope estimates
  time_weeks_min INTEGER NOT NULL DEFAULT 0,
  time_weeks_max INTEGER NOT NULL DEFAULT 0,
  cost_min INTEGER NOT NULL DEFAULT 0,
  cost_max INTEGER NOT NULL DEFAULT 0,
  
  -- Additional info
  additional_notes TEXT,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'new',
  
  -- Contact info (optional - can be linked to leads later)
  contact_email TEXT,
  contact_name TEXT
);

-- Enable RLS
ALTER TABLE public.blueprints ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can insert blueprints (from edge function or public submission)
CREATE POLICY "Anyone can insert blueprints"
ON public.blueprints
FOR INSERT
WITH CHECK (true);

-- Policy: Only authenticated users (admins) can view blueprints
CREATE POLICY "Authenticated users can view blueprints"
ON public.blueprints
FOR SELECT
TO authenticated
USING (true);

-- Policy: Authenticated users can update blueprint status
CREATE POLICY "Authenticated users can update blueprints"
ON public.blueprints
FOR UPDATE
TO authenticated
USING (true);

-- Create index for faster queries
CREATE INDEX idx_blueprints_created_at ON public.blueprints(created_at DESC);
CREATE INDEX idx_blueprints_status ON public.blueprints(status);