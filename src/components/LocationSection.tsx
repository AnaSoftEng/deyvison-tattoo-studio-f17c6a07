import { Star, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container max-w-4xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-body font-medium">
            Localização
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mt-3 text-gold-gradient">
            Onde Estamos
          </h2>
        </div>

        <div
          className={`glass rounded-lg p-8 md:p-10 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-heading text-lg">5.0 Estrelas</p>
              <p className="text-muted-foreground text-sm">Avaliação dos clientes</p>
            </div>

            <div className="space-y-3">
              <MapPin className="w-6 h-6 text-primary mx-auto" />
              <p className="text-foreground text-sm leading-relaxed">
                Rua dos Corações, 209
                <br />
                Engenho Grande, Araruama - RJ
              </p>
            </div>

            <div className="space-y-3">
              <Clock className="w-6 h-6 text-primary mx-auto" />
              <p className="text-foreground text-sm">Aberto até 04:00</p>
              <p className="text-muted-foreground text-sm">Horário flexível</p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm italic">
              "Diferencial de localização ideal para atender clientes de Araruama e Saquarema"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
