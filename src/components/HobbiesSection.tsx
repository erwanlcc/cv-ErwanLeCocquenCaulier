import { useState } from "react";
import { Gamepad2, Mountain, PersonStanding, Plane } from "lucide-react";
import gamingImg from "@/assets/gaming.jpg";
import skiingImg from "@/assets/skiing.jpg";
import runningImg from "@/assets/running.jpg";
import travelImg from "@/assets/travel.jpg";

interface Hobby {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Jeux Vidéo",
    description: "Passionné par les jeux de stratégie et les RPG. Le gaming développe la réflexion stratégique et la coordination.",
    image: gamingImg,
    icon: <Gamepad2 size={24} />,
  },
  {
    id: 2,
    title: "Ski",
    description: "Amateur de sports d'hiver, j'aime dévaler les pistes et profiter des paysages montagneux.",
    image: skiingImg,
    icon: <Mountain size={24} />,
  },
  {
    id: 3,
    title: "Course à pied",
    description: "La course me permet de me dépasser et de garder une bonne condition physique tout en me vidant l'esprit.",
    image: runningImg,
    icon: <PersonStanding size={24} />,
  },
  {
    id: 4,
    title: "Voyages",
    description: "Découvrir de nouvelles cultures et de nouveaux horizons est une source d'inspiration et d'ouverture d'esprit.",
    image: travelImg,
    icon: <Plane size={24} />,
  },
];

export const HobbiesSection = () => {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  return (
    <section id="hobbies" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Hobbies</span>
          </h2>
          <p className="text-muted-foreground">Ce qui me passionne en dehors du code</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <HobbyCard
                hobby={hobby}
                isActive={activeHobby === hobby.id}
                onHover={() => setActiveHobby(hobby.id)}
                onLeave={() => setActiveHobby(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface HobbyCardProps {
  hobby: Hobby;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const HobbyCard = ({ hobby, isActive, onHover, onLeave }: HobbyCardProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 group ${
      isActive ? "glow-accent scale-105" : ""
    }`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    {/* Image */}
    <div className="aspect-square overflow-hidden">
      <img
        src={hobby.image}
        alt={hobby.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent transition-opacity duration-300 ${
        isActive ? "opacity-95" : "opacity-70"
      }`}
    />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-5">
      <div className="flex items-center gap-3 mb-2">
        <div
          className={`p-2 rounded-lg transition-all duration-300 ${
            isActive ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"
          }`}
        >
          {hobby.icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground">{hobby.title}</h3>
      </div>

      <p
        className={`text-sm text-muted-foreground transition-all duration-300 overflow-hidden ${
          isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {hobby.description}
      </p>
    </div>
  </div>
);
