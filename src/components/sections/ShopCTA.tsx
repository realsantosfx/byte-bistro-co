import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";

const ShopCTA = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container-narrow">
        <FadeInSection>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Plug & Play
            </div>
            <h2 className="headline-lg text-foreground mb-4 max-w-2xl mx-auto">
              Ready-Made Software für dein Business
            </h2>
            <p className="body-lg mb-10 max-w-xl mx-auto">
              Sofort einsetzbare SaaS-Lösungen – von KI-Agenten bis Projektmanagement. Alles in einem Abo.
            </p>
            <a href="https://shop.santoslab.de" target="_blank" rel="noopener noreferrer">
              <Button variant="apple" size="lg">
                Zum Software-Shop
                <ChevronRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ShopCTA;
