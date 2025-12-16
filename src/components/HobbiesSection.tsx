import { useState } from "react";
import { Gamepad2, Dumbbell, Plane, X, ChevronLeft, ChevronRight, Mountain, PersonStanding } from "lucide-react";
import gamingImg from "@/assets/gaming.jpg";
import gamingSetupImg from "@/assets/gaming-setup.jpg";
import gamingControllerImg from "@/assets/gaming-controller.jpg";
import skiingImg from "@/assets/skiing.jpg";
import skiPistesImg from "@/assets/ski-pistes.jpg";
import runningImg from "@/assets/running.jpg";
import runningNatureImg from "@/assets/running-nature.jpg";
import travelImg from "@/assets/travel.jpg";
import travelPlaneImg from "@/assets/travel-plane.jpg";

interface Hobby {
  id: number;
  title: string;
  icon: React.ReactNode;
  coverImage: string;
}

interface Country {
  name: string;
  flag: string;
}

const hobbies: Hobby[] = [
  {
    id: 1,
    title: "Jeux Vidéo",
    icon: <Gamepad2 size={28} />,
    coverImage: gamingImg,
  },
  {
    id: 2,
    title: "Sport",
    icon: <Dumbbell size={28} />,
    coverImage: skiingImg,
  },
  {
    id: 3,
    title: "Voyages",
    icon: <Plane size={28} />,
    coverImage: travelImg,
  },
];

const gamingImages = [gamingImg, gamingSetupImg, gamingControllerImg];
const skiImages = [skiingImg, skiPistesImg];
const runningImages = [runningImg, runningNatureImg];
const travelImages = [travelImg, travelPlaneImg];

const visitedCountries: Country[] = [
  { name: "Angleterre", flag: "🇬🇧" },
  { name: "Espagne", flag: "🇪🇸" },
  { name: "Italie", flag: "🇮🇹" },
  { name: "Grèce", flag: "🇬🇷" },
  { name: "Belgique", flag: "🇧🇪" },
  { name: "Tunisie", flag: "🇹🇳" },
  { name: "Cap-Vert", flag: "🇨🇻" },
  { name: "Portugal", flag: "🇵🇹" },
];

export const HobbiesSection = () => {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);

  const closeModal = () => setActiveHobby(null);

  return (
    <section id="hobbies" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Hobbies</span>
          </h2>
          <p className="text-muted-foreground">Ce qui me passionne en dehors du code</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <HobbyCard hobby={hobby} onClick={() => setActiveHobby(hobby.id)} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeHobby !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* Modal Content */}
          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto card-glass rounded-2xl p-6 md:p-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors z-10"
            >
              <X size={20} />
            </button>

            {activeHobby === 1 && <GamingContent />}
            {activeHobby === 2 && <SportContent />}
            {activeHobby === 3 && <TravelContent />}
          </div>
        </div>
      )}
    </section>
  );
};

interface HobbyCardProps {
  hobby: Hobby;
  onClick: () => void;
}

const HobbyCard = ({ hobby, onClick }: HobbyCardProps) => (
  <div
    className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 group hover:scale-105 hover:glow-accent"
    onClick={onClick}
  >
    {/* Image */}
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={hobby.coverImage}
        alt={hobby.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-5">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-primary/20 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
          {hobby.icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{hobby.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Cliquez pour en savoir plus
      </p>
    </div>
  </div>
);

// Image Carousel Component
interface CarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative rounded-xl overflow-hidden group">
      <img
        src={images[currentIndex]}
        alt={`${alt} ${currentIndex + 1}`}
        className="w-full h-64 md:h-80 object-cover transition-all duration-500"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-4" : "bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Content Components for each hobby
const GamingContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-primary/20 text-primary">
        <Gamepad2 size={32} />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gradient">Jeux Vidéo</h3>
    </div>

    <ImageCarousel images={gamingImages} alt="Gaming" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      Passionné de jeux vidéo, j'apprécie autant l'aspect compétitif que l'immersion qu'ils offrent. 
      C'est un loisir qui stimule ma réflexion et ma créativité.
    </p>
  </div>
);

const SportContent = () => (
  <div className="space-y-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-primary/20 text-primary">
        <Dumbbell size={32} />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gradient">Sport</h3>
    </div>

    {/* Ski Section */}
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Mountain className="text-accent" size={24} />
        <h4 className="text-xl font-semibold text-foreground">Ski</h4>
      </div>
      <ImageCarousel images={skiImages} alt="Ski" />
      <p className="text-muted-foreground leading-relaxed">
        Amateur de sports d'hiver, j'aime dévaler les pistes et profiter des paysages montagneux.
      </p>
    </div>

    {/* Running Section */}
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <PersonStanding className="text-accent" size={24} />
        <h4 className="text-xl font-semibold text-foreground">Course à pied</h4>
      </div>
      <ImageCarousel images={runningImages} alt="Course à pied" />
      <p className="text-muted-foreground leading-relaxed">
        La course à pied me permet de me dépasser et de garder une bonne condition physique tout en me vidant l'esprit.
      </p>
    </div>
  </div>
);

const TravelContent = () => (
  <div className="space-y-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-primary/20 text-primary">
        <Plane size={32} />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-gradient">Voyages</h3>
    </div>

    <ImageCarousel images={travelImages} alt="Voyage" />

    <p className="text-muted-foreground leading-relaxed text-lg">
      Découvrir de nouvelles cultures et de nouveaux horizons est une source d'inspiration et d'ouverture d'esprit.
    </p>

    {/* Visited Countries */}
    <div className="mt-8">
      <h4 className="text-lg font-semibold text-foreground mb-4">Pays visités</h4>
      <div className="flex flex-wrap gap-3">
        {visitedCountries.map((country) => (
          <span
            key={country.name}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-foreground font-medium hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
          >
            <span className="text-xl">{country.flag}</span>
            {country.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);
