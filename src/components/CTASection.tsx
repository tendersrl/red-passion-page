import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-section" className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium border border-primary-foreground/20 mb-6">
            Inizia ora
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prenota la tua call gratuita
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            I posti sono limitati per garantire un'analisi personalizzata a ogni azienda associata.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => window.open('#', '_blank')}
            >
              <Calendar className="w-5 h-5" />
              Prenota la call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Nessun obbligo</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-primary-foreground/40 rounded-full" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">30 minuti</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-primary-foreground/40 rounded-full" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🎁</span>
              <span className="text-sm">Gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
