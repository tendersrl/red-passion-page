import { Rocket, Target, Users } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6">
            L'iniziativa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perché questa iniziativa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            In occasione del lancio del nuovo sito GISI, l'Associazione ha attivato un'iniziativa riservata 
            agli associati per supportare la crescita digitale delle imprese del settore tecnico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Analisi e Confronto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Offrire un primo momento di analisi e confronto, utile per capire se il sito web e 
              la presenza online dell'azienda sono oggi adeguati agli obiettivi commerciali.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Opportunità di Mercato</h3>
            <p className="text-muted-foreground leading-relaxed">
              Valutare le opportunità del mercato e individuare le aree di miglioramento 
              per intercettare nuove possibilità di crescita digitale.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 border border-border/50">
            <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Partner Tecnico</h3>
            <p className="text-muted-foreground leading-relaxed">
              L'attività è svolta da un partner tecnico selezionato da GISI, 
              con un approccio consulenziale e non commerciale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
