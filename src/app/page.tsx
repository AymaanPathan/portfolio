import Navbar from "./components/Navbar";
import ExperienceSection from "./Sections/ExperienceSection";
import HeroSection from "./Sections/HeroSection";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
