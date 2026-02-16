import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Valuta il potenziale digitale della tua azienda associata GISI",
    subtitle: "Richiedi una call gratuita con analisi preliminare del tuo sito web e della tua visibilità online, realizzata con strumenti professionali e commentata da un consulente dedicato.",
  },
  {
    image: heroSlide2,
    title: "Strumenti professionali per l'analisi digitale",
    subtitle: "Analisi SEO, visibilità online e opportunità di crescita per le aziende del settore tecnico e industriale.",
  },
  {
    image: heroSlide3,
    title: "Crescita digitale per gli associati GISI",
    subtitle: "Un partner tecnico selezionato per supportare la trasformazione digitale delle imprese associate.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToForm = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium border border-primary-foreground/20">
                Iniziativa riservata agli associati GISI
              </span>
            </div>
            <h1
              key={currentSlide}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide"
            >
              {slides[currentSlide].title}
            </h1>
            <p
              key={`sub-${currentSlide}`}
              className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToForm}
                className="animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                Prenota la call gratuita
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="animate-fade-up"
                style={{ animationDelay: "0.5s" }}
                onClick={() => document.getElementById("cosa-include")?.scrollIntoView({ behavior: "smooth" })}
              >
                Scopri di più
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-30 bottom-1/2 translate-y-1/2 left-4 lg:left-8">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute z-30 bottom-1/2 translate-y-1/2 right-4 lg:right-8">
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
