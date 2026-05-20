import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface BuilderWelcomeProps {
  onStart: () => void;
}

const features = [
  {
    icon: Target,
    title: "Problem definieren",
    description: "Strukturiert erfassen, was Sie lösen möchten.",
  },
  {
    icon: Layers,
    title: "Features auswählen",
    description: "Modularer Baukasten für Ihre Anforderungen.",
  },
  {
    icon: Sparkles,
    title: "Scope verstehen",
    description: "Transparente Zeit- und Budget-Einschätzung.",
  },
];

const BuilderWelcome = ({ onStart }: BuilderWelcomeProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-6 px-6 md:px-12">
        <Link to="/" className="text-lg font-semibold text-foreground hover:opacity-70 transition-opacity">
          SantosLab
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Software Builder
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight leading-[1.1] mb-6"
          >
            Ihre Software.
            <br />
            <span className="text-muted-foreground">Gemeinsam geplant.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12"
          >
            Definieren Sie Ihr Projekt Schritt für Schritt. 
            Wir zeigen Ihnen den Weg zur Umsetzung.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={onStart} 
              variant="apple" 
              size="xl"
              className="gap-3 group"
            >
              Software-Blueprint starten
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mt-24"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-left p-6 rounded-2xl bg-muted/30 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center">
        <p className="text-sm text-muted-foreground">
          Unverbindlich · Kostenlos · In 5 Minuten erledigt
        </p>
      </footer>
    </div>
  );
};

export default BuilderWelcome;
