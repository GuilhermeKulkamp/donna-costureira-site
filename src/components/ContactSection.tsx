import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const ContactSection = () => {
  const whatsappNumber = "5522997699958";
  const address = "Av. Nossa Senhora da Assunção, 706, sala 2 — São Bento, Cabo Frio/RJ, CEP 28906-200";
  const mapUrl = "https://storage.googleapis.com/maps-solutions-grwhv3repo/locator-plus/sijr/locator-plus.html";
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar um atendimento.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const handleCallClick = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };
  return <section id="contact" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Vamos conversar?
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para atender você. Visite o ateliê ou entre em contato.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground leading-relaxed">{address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">Segunda a Quinta-feira</p>
                    <p className="text-muted-foreground">das 10:00 às 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Contato</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button onClick={handleWhatsAppClick} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                      
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <div className="rounded-2xl overflow-hidden shadow-elevated h-full min-h-[400px]">
              <iframe src={mapUrl} width="100%" height="100%" style={{
              border: 0,
              minHeight: "400px"
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização do Ateliê Donna Costureira" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;