import { GraduationCap, Award, BookOpen } from "lucide-react";

interface Formation {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const formations: Formation[] = [
  {
    id: 1,
    title: "Cycle Ingénieur",
    institution: "ISEN - Institut Supérieur de l'Électronique et du Numérique",
    period: "2024 - 2026",
    description: "Formation d'ingénieur spécialisée en électronique et numérique. Apprentissage du développement logiciel, des systèmes embarqués et des nouvelles technologies.",
    icon: <GraduationCap className="text-primary" size={24} />,
  },
  {
    id: 2,
    title: "Baccalauréat Général",
    institution: "Lycée",
    period: "2024",
    description: "Baccalauréat général avec spécialités scientifiques. Obtention du diplôme avec mention.",
    icon: <Award className="text-primary" size={24} />,
  },
];

export const FormationSection = () => {
  return (
    <section id="formation" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-muted-foreground">Mon parcours académique</p>
        </div>

        <div className="grid gap-8">
          {formations.map((formation, index) => (
            <div
              key={formation.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FormationCard formation={formation} />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <div className="card-glass rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <BookOpen className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Certification TOEIC</h3>
                <p className="text-muted-foreground text-sm">Niveau B2</p>
              </div>
            </div>
            <p className="text-foreground/80">
              Certification attestant d'un niveau d'anglais intermédiaire-avancé, permettant une communication efficace en milieu professionnel international.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FormationCardProps {
  formation: Formation;
}

const FormationCard = ({ formation }: FormationCardProps) => (
  <div className="card-glass rounded-xl p-6 hover-lift group">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {formation.icon}
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground">{formation.title}</h3>
          <span className="text-sm font-mono text-primary">{formation.period}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-3">{formation.institution}</p>
        <p className="text-foreground/80">{formation.description}</p>
      </div>
    </div>
  </div>
);
