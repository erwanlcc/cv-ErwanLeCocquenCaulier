import { Mail, Phone, Linkedin, Github, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-mono text-xl font-bold text-gradient mb-2">
              Erwan Le Cocquen-Caulier
            </h3>
            <p className="text-muted-foreground text-sm">
              Étudiant Ingénieur @ ISEN
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:erwan.lecocquen-caulier@isen-ouest.yncrea.fr"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:0624325422"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="Téléphone"
            >
              <Phone size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all duration-300"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Erwan Le Cocquen-Caulier. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
