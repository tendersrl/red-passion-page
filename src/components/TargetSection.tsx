import { Building2, Globe, BarChart3, Factory, CheckCircle, XCircle } from "lucide-react";

const targetAudience = [
  {
    icon: Building2,
    text: "Aziende associate GISI con sito web datato o poco performante",
  },
  {
    icon: Globe,
    text: "Imprese che vogliono capire se il proprio sito genera opportunità concrete",
  },
  {
    icon: BarChart3,
    text: "Aziende che stanno valutando investimenti digitali",
  },
  {
    icon: Factory,
    text: "Realtà B2B del settore tecnico e industriale",
  },
];

const TargetSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-gradient">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Target Audience */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6">
              Destinatari
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              A chi è rivolta
            </h2>
            <div className="space-y-6">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground font-medium leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - What It's Not */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Importante
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Cosa non è
            </h2>
            <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    Questa call <strong className="text-foreground">non è una demo commerciale</strong> e 
                    non comporta alcun obbligo di acquisto.
                  </p>
                </div>
                <div className="border-t border-border/50 pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      È un <strong className="text-foreground">momento di confronto tecnico e strategico</strong>, 
                      pensato per fornire indicazioni chiare e pratiche sullo stato attuale della 
                      presenza digitale dell'azienda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
