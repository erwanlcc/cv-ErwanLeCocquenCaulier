import { Mail, Phone, MapPin, Calendar, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="font-mono text-primary text-sm tracking-wider uppercase">
                Étudiant Ingénieur
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Erwan</span>
                <br />
                <span className="text-gradient">Le Cocquen-Caulier</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Passionné par la technologie et le développement, je suis actuellement en école d'ingénieur à l'ISEN.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:erwan.lecocquen-caulier@isen-ouest.yncrea.fr"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:glow-primary transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={18} />
                Me contacter
              </a>
              <a
                href="#competences"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <Code2 size={18} />
                Voir mes compétences
              </a>
            </div>
          </div>

          {/* Right Side - Info Card */}
          <div className="animate-fade-in-right animation-delay-300">
            <div className="card-glass rounded-2xl p-8 space-y-6 hover-lift">
              <h2 className="text-xl font-semibold text-gradient">Informations</h2>
              
              <div className="space-y-4">
                <InfoItem
                  icon={<Calendar className="text-primary" size={20} />}
                  label="Date de naissance"
                  value="21 novembre 2006"
                />
                <InfoItem
                  icon={<MapPin className="text-primary" size={20} />}
                  label="Localisation"
                  value="91420"
                />
                <InfoItem
                  icon={<Mail className="text-primary" size={20} />}
                  label="Email"
                  value="erwan.lecocquen-caulier@isen-ouest.yncrea.fr"
                  isEmail
                />
                <InfoItem
                  icon={<Phone className="text-primary" size={20} />}
                  label="Téléphone"
                  value="06 24 32 54 22"
                />
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Disponible pour un stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isEmail?: boolean;
}

const InfoItem = ({ icon, label, value, isEmail }: InfoItemProps) => (
  <div className="flex items-start gap-4">
    <div className="mt-0.5">{icon}</div>
    <div className="flex-1 min-w-0">
      <p className="text-sm text-muted-foreground">{label}</p>
      {isEmail ? (
        <a href={`mailto:${value}`} className="text-foreground hover:text-primary transition-colors break-all">
          {value}
        </a>
      ) : (
        <p className="text-foreground">{value}</p>
      )}
    </div>
  </div>
);
