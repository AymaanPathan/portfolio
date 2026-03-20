import Navbar from "./components/Navbar";
import AchievementsSection from "./Sections/AchievementsSection";
import ExperienceSection from "./Sections/ExperienceSection";
import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectSection";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <HeroSection />
        <AchievementsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
