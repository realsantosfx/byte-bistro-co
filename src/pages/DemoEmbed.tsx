import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_URLS, DEMO_LABELS } from "@/data/demoUrls";

const DemoEmbed = () => {
  const { system } = useParams<{ system: string }>();
  const url = system ? DEMO_URLS[system] : undefined;
  const label = system ? DEMO_LABELS[system] : undefined;

  if (!url || !label) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground mb-4">Demo nicht gefunden</h1>
          <Link to="/demo">
            <Button variant="apple">Zurück zur Übersicht</Button>
          </Link>
        </div>
      </div>
    );
  }

  const backPath = system === "dealflow" ? "/enterprise/dealflow" : `/demo/${system}`;

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Branding bar */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border/50 bg-background/80 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <Link to={backPath}>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Zurück</span>
            </Button>
          </Link>
          <div className="h-5 w-px bg-border/50" />
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">— Live Demo by SantosLab</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={`${url}/demo`} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground">
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Extern öffnen</span>
            </Button>
          </a>
          <Link to="/kontakt">
            <Button variant="apple" size="sm">
              System aufsetzen
            </Button>
          </Link>
        </div>
      </div>

      {/* Demo iframe */}
      <iframe
        src={`${url}/demo`}
        className="flex-1 w-full border-0"
        title={`${label} Live Demo`}
        allow="clipboard-write; clipboard-read"
      />
    </div>
  );
};

export default DemoEmbed;
