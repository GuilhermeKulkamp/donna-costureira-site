const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            Donna Costureira
          </h3>
          <p className="text-sm text-muted-foreground">
            Ateliê de Costura • Cabo Frio/RJ
          </p>
          <p className="text-xs text-muted-foreground">
            © {currentYear} Donna Costureira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
