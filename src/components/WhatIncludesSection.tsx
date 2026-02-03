import { Search, TrendingUp, Layout, Target, Users, Clock, Video, Gift } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Analisi SEO",
    description: "Visibilità online del sito sui motori di ricerca tramite strumenti professionali come SEOZoom",
  },
  {
    icon: TrendingUp,
    title: "Opportunità di Traffico",
    description: "Principali opportunità di traffico e visibilità non intercettate dal tuo sito attuale",
  },
  {
    icon: Layout,
    title: "Struttura Tecnica",
    description: "Valutazione della struttura tecnica del sito e chiarezza dei contenuti",
  },
  {
    icon: Target,
    title: "Allineamento Obiettivi",
    description: "Verifica dell'allineamento tra sito web e obiettivi commerciali dell'azienda",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Capacità del sito di supportare la generazione di contatti qualificati",
  },
];

const WhatIncludesSection = () => {
  return (
    <section id="cosa-include" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6">
            Servizi inclusi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cosa include la call
          </h2>
          <p className="text-lg text-muted-foreground">
            Un'analisi completa e professionale della tua presenza digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent group-hover:bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/50 rounded-2xl p-8 border border-border/50">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Durata</h4>
                <p className="text-muted-foreground">Circa 30 minuti</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Video className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Modalità</h4>
                <p className="text-muted-foreground">Call online</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Gift className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Costo</h4>
                <p className="text-muted-foreground">Gratuito per associati GISI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIncludesSection;
