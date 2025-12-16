import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FormationSection } from "@/components/FormationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { HobbiesSection } from "@/components/HobbiesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <FormationSection />
        <SkillsSection />
        <HobbiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
