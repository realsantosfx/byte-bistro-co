-- Fix search_path for get_lead_priority function
CREATE OR REPLACE FUNCTION public.get_lead_priority(score INTEGER)
RETURNS TEXT
LANGUAGE plpgsql
IMMUTABLE
SET search_path = public
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