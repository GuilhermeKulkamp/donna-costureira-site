import aboutImage from "@/assets/about-detail.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Detalhe do trabalho artesanal"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6 animate-slide-up">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Sobre o Ateliê
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full" />
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou apaixonada por transformar tecidos em expressão. Cada peça que passa pelas minhas mãos 
              recebe atenção especial, porque acredito que o cuidado com os detalhes faz toda a diferença.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              No meu ateliê, localizado em Cabo Frio, trabalho com dedicação para que suas roupas 
              reflitam exatamente quem você é. Seja um ajuste delicado, um conserto criterioso ou uma 
              peça sob medida, meu compromisso é com a qualidade e com a sua satisfação.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mais do que costura, ofereço um atendimento acolhedor e profissional, valorizando 
              cada cliente e cada história que chega até aqui.
            </p>

            <div className="pt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Qualidade</p>
                  <p className="text-sm text-muted-foreground">Acabamento impecável</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Cuidado</p>
                  <p className="text-sm text-muted-foreground">Atenção aos detalhes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
