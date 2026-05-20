-- Create leads table for storing funnel submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  budget TEXT NOT NULL,
  company_size TEXT NOT NULL,
  timeline TEXT NOT NULL,
  message TEXT,
  lead_score INTEGER NOT NULL DEFAULT 0,
  priority TEXT NOT NULL DEFAULT 'medium',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for service role only (edge function uses service role)
CREATE POLICY "Service role can insert leads"
ON public.leads
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can select leads"
ON public.leads
FOR SELECT
TO service_role
USING (true);

-- Create function to calculate lead score
CREATE OR REPLACE FUNCTION public.calculate_lead_score(
  p_budget TEXT,
  p_timeline TEXT,
  p_company_size TEXT
)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  score INTEGER := 0;
BEGIN
  -- Budget scoring (max 40 points)
  CASE p_budget
    WHEN '50k+' THEN score := score + 40;
    WHEN '25k-50k' THEN score := score + 30;
    WHEN '10k-25k' THEN score := score + 20;
    WHEN '5k-10k' THEN score := score + 10;
    WHEN 'unsure' THEN score := score + 5;
    ELSE score := score + 0;
  END CASE;

  -- Timeline scoring (max 30 points)
  CASE p_timeline
    WHEN 'asap' THEN score := score + 30;
    WHEN '1-2months' THEN score := score + 25;
    WHEN '3-6months' THEN score := score + 15;
    WHEN 'flexible' THEN score := score + 10;
    ELSE score := score + 0;
  END CASE;

  -- Company size scoring (max 30 points)
  CASE p_company_size
    WHEN 'enterprise' THEN score := score + 30;
    WHEN 'midmarket' THEN score := score + 25;
    WHEN 'sme' THEN score := score + 20;
    WHEN 'startup' THEN score := score + 15;
    WHEN 'solo' THEN score := score + 10;
    ELSE score := score + 0;
  END CASE;

  RETURN score;
END;
$$;

-- Create function to determine priority based on score
CREATE OR REPLACE FUNCTION public.get_lead_priority(score INTEGER)
RETURNS TEXT
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  IF score >= 70 THEN
    RETURN 'hot';
  ELSIF score >= 50 THEN
    RETURN 'warm';
  ELSE
    RETURN 'cold';
  END IF;
END;
$$;

-- Create trigger to auto-calculate score on insert
CREATE OR REPLACE FUNCTION public.set_lead_score()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.lead_score := public.calculate_lead_score(NEW.budget, NEW.timeline, NEW.company_size);
  NEW.priority := public.get_lead_priority(NEW.lead_score);
  RETURN NEW;
END;
$$;

CREATE TRIGGER calculate_lead_score_trigger
BEFORE INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.set_lead_score();