import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-atelier.jpg";

const HeroSection = () => {
  const whatsappNumber = "5522997699958";
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre o ateliê Donna Costureira.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ateliê Donna Costureira"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight">
          Vista-se de{" "}
          <span className="italic text-primary">quem você é</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
          Cada ponto reflete sua essência. Cada ajuste valoriza sua autoestima.
          <br />
          Porque a roupa certa transforma o dia.
        </p>

        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-base px-8 py-6 shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Fale comigo no WhatsApp
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
