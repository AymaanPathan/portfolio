import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeaderSection from "./Sections/HeaderSection";
import ExperienceSection from "./Sections/ExperienceSection";
import HackathonSection from "./Sections/HackathonSection";
import ProjectsSection from "./Sections/ProjectSection";
import WritingSection from "./Sections/WritingSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="wrap">
        <HeaderSection />
        <ExperienceSection />
        <HackathonSection />
        <ProjectsSection />
        <WritingSection />
      </main>
      <Footer />
    </>
  );
}
