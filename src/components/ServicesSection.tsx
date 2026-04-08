import { Brush, Layers, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Brush,
    title: "Tatuagens Autorais",
    description:
      "Criações exclusivas desenvolvidas sob medida para cada cliente, com traços únicos que traduzem sua essência em arte permanente.",
  },
  {
    icon: Layers,
    title: "Coberturas (Cover-up)",
    description:
      "Transformação completa de tatuagens antigas em novas obras de arte, com técnicas avançadas de cobertura e redesenho.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description:
      "Consultoria individual para definir o projeto ideal, desde o conceito até a execução final, com total atenção aos detalhes.",
  },
];

const ServicesSection = () => {
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
            Especialidades
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mt-3 text-gold-gradient">
            Serviços
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass rounded-lg p-8 text-center group hover:gold-glow transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
