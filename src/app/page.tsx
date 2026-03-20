import Navbar from "./components/Navbar";
import ExperienceSection from "./Sections/ExperienceSection";
import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectSection";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
