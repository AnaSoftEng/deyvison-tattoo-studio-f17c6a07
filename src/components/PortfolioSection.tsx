import { Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-body font-medium">
            Trabalhos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mt-3 text-gold-gradient">
            Portfólio
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm bg-secondary flex items-center justify-center border border-border/50 group cursor-pointer overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:scale-105 transition-transform">
                <Palette className="w-6 h-6 opacity-30 group-hover:opacity-70 transition-opacity" />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <p
          className={`text-center text-muted-foreground text-sm mt-8 italic transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          (Área Reservada para o Portfólio Oficial — Imagens serão inseridas após aprovação)
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
