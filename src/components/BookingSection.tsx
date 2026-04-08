import { useState } from "react";
import { Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bodyAreas = ["Braço", "Perna", "Costas", "Peito", "Outro"];

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const BookingSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !area) return;

    const message = encodeURIComponent(
      `Olá Deyvison! Meu nome é ${name.trim()}. Quero tatuar meu ${area}. Podemos agendar?`
    );
    window.open(`https://api.whatsapp.com/send?phone=5521999999999&text=${message}`, "_blank");
  };

  return (
    <section id="agendamento" className="py-24 px-6" ref={ref}>
      <div className="container max-w-xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-xs tracking-[0.3em] uppercase font-body font-medium">
            Agendamento
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mt-3 text-gold-gradient">
            Agende sua Consulta de Arte
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`glass rounded-lg p-8 md:p-10 space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground tracking-wide">
              Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground tracking-wide">
              WhatsApp
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              placeholder="(00) 00000-0000"
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground tracking-wide">
              Área do Corpo
            </label>
            <select
              required
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm appearance-none"
            >
              <option value="" disabled>
                Selecione a área
              </option>
              {bodyAreas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 gold-glow gold-glow-hover hover:brightness-110"
          >
            <Send className="w-4 h-4" />
            Avançar para Agendamento
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
