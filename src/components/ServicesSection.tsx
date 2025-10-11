import { Scissors, Wrench, Sparkles, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Ajustes",
      description: "Bainhas, cinturas, mangas e muito mais. Suas roupas com o caimento perfeito.",
    },
    {
      icon: Wrench,
      title: "Consertos",
      description: "Reparos delicados e invisíveis. Devolvemos a vida às suas peças favoritas.",
    },
    {
      icon: Sparkles,
      title: "Customizações",
      description: "Transforme suas roupas com bordados, aplicações e detalhes exclusivos.",
    },
    {
      icon: Shirt,
      title: "Sob Medida",
      description: "Peças únicas, criadas especialmente para você. Do rascunho à realidade.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Serviços
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do mais simples ao mais elaborado, cada serviço é realizado com carinho e profissionalismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
