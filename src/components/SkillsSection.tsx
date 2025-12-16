import { useState, useEffect, useRef } from "react";
import { Code2, Database, Globe, Server, Terminal, Settings } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "C / C++", level: 75, category: "Programmation", icon: <Terminal size={18} /> },
  { name: "SQL", level: 70, category: "Base de données", icon: <Database size={18} /> },
  { name: "HTML", level: 85, category: "Web", icon: <Code2 size={18} /> },
  { name: "CSS", level: 80, category: "Web", icon: <Code2 size={18} /> },
  { name: "JavaScript", level: 65, category: "Web", icon: <Globe size={18} /> },
  { name: "Apache (Serveur Web)", level: 60, category: "DevOps", icon: <Server size={18} /> },
  { name: "Git", level: 70, category: "Outils", icon: <Settings size={18} /> },
  { name: "Python", level: 55, category: "Programmation", icon: <Terminal size={18} /> },
];

const categories = ["Tous", "Programmation", "Web", "Base de données", "DevOps", "Outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeCategory === "Tous"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="competences" className="py-24 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-muted-foreground">Technologies et outils maîtrisés</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Travail d'équipe", "Communication", "Curiosité", "Rigueur", "Autonomie", "Adaptabilité"].map(
              (skill, index) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 text-accent font-medium hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  delay: number;
}

const SkillBar = ({ skill, isVisible, delay }: SkillBarProps) => (
  <div
    className="card-glass rounded-xl p-5 hover-lift animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">{skill.icon}</div>
        <span className="font-medium text-foreground">{skill.name}</span>
      </div>
      <span className="text-sm font-mono text-primary">{skill.level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{
          width: isVisible ? `${skill.level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
    <p className="text-xs text-muted-foreground mt-2">{skill.category}</p>
  </div>
);
