import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}>
              GISI
            </div>
            <div className={`hidden sm:block text-sm transition-colors duration-300 ${
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
            }`}>
              Iniziativa Digitale
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("cosa-include")}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Cosa include
            </button>
            <button
              onClick={() => scrollToSection("cta-section")}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              FAQ
            </button>
            <Button
              variant={isScrolled ? "cta" : "hero"}
              size="default"
              onClick={() => scrollToSection("cta-section")}
            >
              Prenota ora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
            <nav className="flex flex-col p-6 gap-4">
              <button
                onClick={() => scrollToSection("cosa-include")}
                className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
              >
                Cosa include
              </button>
              <button
                onClick={() => scrollToSection("cta-section")}
                className="text-foreground font-medium py-2 text-left hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <Button
                variant="cta"
                size="lg"
                onClick={() => scrollToSection("cta-section")}
                className="mt-2"
              >
                Prenota ora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
