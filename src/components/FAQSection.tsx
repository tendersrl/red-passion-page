import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "La call verrà registrata?",
    answer: "No. La call non viene registrata. L'incontro è pensato come un confronto diretto e riservato tra l'azienda associata e il consulente.",
  },
  {
    question: "La call avviene con un referente GISI?",
    answer: "La call viene svolta da un consulente tecnico selezionato da GISI per supportare gli associati nelle attività di analisi e orientamento digitale.",
  },
  {
    question: "Sono previste attività a pagamento?",
    answer: "No. La call e l'analisi preliminare sono completamente gratuite per gli associati GISI. Eventuali attività successive verranno eventualmente proposte solo su richiesta dell'azienda, senza alcun obbligo.",
  },
  {
    question: "Qual è lo scopo della call?",
    answer: "L'obiettivo della call è aiutare l'azienda a prendere consapevolezza dello stato dei propri strumenti digitali (sito web e presenza online) e individuare possibili aree di miglioramento.",
  },
  {
    question: "La call è adatta anche se non vogliamo investire subito nel digitale?",
    answer: "Sì. La call ha un taglio informativo e consulenziale ed è utile anche a chi desidera semplicemente fare chiarezza prima di pianificare eventuali investimenti futuri.",
  },
  {
    question: "È necessario avere competenze tecniche per partecipare?",
    answer: "No. L'analisi viene spiegata in modo chiaro e comprensibile, anche per chi non ha competenze tecniche o di marketing digitale.",
  },
  {
    question: "Quanto tempo richiede la call?",
    answer: "La durata prevista è di circa 30 minuti, nel rispetto degli impegni delle aziende partecipanti.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Domande frequenti
            </h2>
            <p className="text-lg text-muted-foreground">
              Tutto quello che devi sapere sull'iniziativa
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
