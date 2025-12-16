import { Briefcase, Users, Lightbulb, Code, Building2 } from "lucide-react";
import { useState } from "react";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Assistant Animation",
    company: "Emeis - EHPAD",
    period: "Été 2025",
    description: "Animation d'activités ludiques et créatives auprès des résidents. Développement de compétences en communication, empathie et organisation d'événements.",
    skills: ["Communication", "Organisation", "Travail d'équipe", "Créativité"],
    icon: <Users className="text-primary" size={24} />,
  },
  {
    id: 2,
    title: "Projet Académique - Développement Web",
    company: "ISEN",
    period: "2024 - 2025",
    description: "Création d'applications web full-stack dans le cadre de projets scolaires. Utilisation de HTML, CSS, JavaScript et bases de données SQL.",
    skills: ["HTML/CSS", "JavaScript", "SQL", "Git"],
    icon: <Code className="text-primary" size={24} />,
  },
  {
    id: 3,
    title: "Projet Robotique",
    company: "ISEN",
    period: "2024",
    description: "Conception et programmation d'un robot autonome en équipe. Apprentissage de la programmation embarquée en C/C++.",
    skills: ["C/C++", "Électronique", "Travail d'équipe", "Résolution de problèmes"],
    icon: <Lightbulb className="text-primary" size={24} />,
  },
  {
    id: 4,
    title: "Stage d'observation",
    company: "Entreprise locale",
    period: "2023",
    description: "Découverte du monde professionnel et des métiers de l'informatique. Observation des processus de développement logiciel.",
    skills: ["Découverte métier", "Observation", "Curiosité"],
    icon: <Building2 className="text-primary" size={24} />,
  },
];

export const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Expériences</span>
          </h2>
          <p className="text-muted-foreground">Mon parcours professionnel et projets</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ExperienceCard
                  experience={exp}
                  isExpanded={expandedId === exp.id}
                  onToggle={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExperienceCard = ({ experience, isExpanded, onToggle }: ExperienceCardProps) => (
  <div
    className={`relative md:ml-12 card-glass rounded-xl p-6 cursor-pointer transition-all duration-300 ${
      isExpanded ? "glow-primary" : "hover:border-primary/50"
    }`}
    onClick={onToggle}
  >
    {/* Timeline Dot */}
    <div className="timeline-dot hidden md:block animate-glow-pulse" />

    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/10">{experience.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
          <span className="text-sm font-mono text-primary">{experience.period}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-3">{experience.company}</p>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-foreground/80 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {!isExpanded && (
          <p className="text-sm text-muted-foreground mt-2">
            Cliquer pour plus de détails...
          </p>
        )}
      </div>
    </div>
  </div>
);
