import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "santoslab_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: "all" | "essential") => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ type, date: new Date().toISOString() }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-5">
              <Cookie className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wir verwenden Cookies, um die Funktionalität unserer Website zu gewährleisten. 
                  Mehr Informationen findest du in unserer{" "}
                  <Link to="/datenschutz" className="text-foreground underline underline-offset-2 hover:text-accent transition-colors">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => accept("essential")}
                className="text-xs"
              >
                Nur essenzielle
              </Button>
              <Button
                size="sm"
                onClick={() => accept("all")}
                className="text-xs"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
