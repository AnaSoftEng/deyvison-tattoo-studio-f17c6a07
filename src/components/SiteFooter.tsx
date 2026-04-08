import { Instagram, MessageCircle } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/30 py-16 px-6">
      <div className="container max-w-4xl">
        {/* Fake map */}
        <div className="w-full h-48 rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center mb-12">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <p className="text-muted-foreground text-xs tracking-wider uppercase">
              Araruama — RJ
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h3 className="font-heading text-xl text-gold-gradient">Deyvison Tatto</h3>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>

          <p className="text-muted-foreground text-xs tracking-wider">
            © {new Date().getFullYear()} Deyvison Tatto — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
