const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(42,45%,57%,0.06)_0%,_transparent_70%)]" />

      <div className="relative text-center max-w-3xl mx-auto space-y-8 animate-fade-up">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4">
          <span className="block w-12 h-px bg-primary/40" />
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-body font-medium">
            Estúdio Premium
          </span>
          <span className="block w-12 h-px bg-primary/40" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          <span className="text-gold-gradient">Deyvison Tatto:</span>
          <br />
          <span className="text-foreground">Arte Exclusiva e Eternizada</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
          Atendimento especializado nas regiões de Araruama e Saquarema.
        </p>

        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-10 py-4 rounded-sm transition-all duration-300 gold-glow gold-glow-hover hover:brightness-110"
        >
          Iniciar Meu Projeto de Tatuagem
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
