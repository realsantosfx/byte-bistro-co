import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Mail, Lock, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  password: z.string().min(6, "Das Passwort muss mindestens 6 Zeichen haben."),
});

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          navigate("/admin");
        }
        setCheckingAuth(false);
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/admin");
      }
      setCheckingAuth(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    const validation = authSchema.safeParse({ email, password });
    if (!validation.success) {
      toast({
        title: "Validierungsfehler",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        toast({ title: "Fehler", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Konto erstellt", description: "Sie sind jetzt angemeldet." });
        navigate("/admin");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        let errorMessage = "Anmeldung fehlgeschlagen.";
        if (error.message.includes("Invalid login credentials")) {
          errorMessage = "E-Mail oder Passwort ist falsch.";
        }
        toast({ title: "Fehler", description: errorMessage, variant: "destructive" });
      } else {
        toast({ title: "Erfolgreich angemeldet", description: "Willkommen zurück!" });
        navigate("/admin");
      }
    }

    setLoading(false);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Website
            </Button>
          </Link>
        </div>
      </header>

      {/* Auth Form */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-foreground">
                {isSignUp ? "Registrieren" : "Admin-Login"}
              </h1>
              <p className="text-muted-foreground mt-2">
                {isSignUp
                  ? "Erstellen Sie ein neues Admin-Konto."
                  : "Melden Sie sich an, um das Lead-Dashboard zu verwalten."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Passwort</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gap-2"
                disabled={loading}
              >
                {loading ? (
                  "Laden..."
                ) : isSignUp ? (
                  <>
                    <UserPlus className="w-4 h-4" />
                    Registrieren
                  </>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    Anmelden
                  </>
                )}
              </Button>

              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
              >
                {isSignUp
                  ? "Bereits ein Konto? Anmelden"
                  : "Kein Konto? Registrieren"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;