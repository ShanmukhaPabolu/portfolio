import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectArchive from "@/components/ProjectArchive";
import AchievementTimeline from "@/components/AchievementTimeline";
import CodingProfiles from "@/components/CodingProfiles";
import SkillsTable from "@/components/SkillsTable";
import ResumeCenter from "@/components/ResumeCenter";
import GithubDashboard from "@/components/GithubDashboard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EasterEggTerminal from "@/components/EasterEggTerminal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <ProjectArchive />
        <AchievementTimeline />
        <CodingProfiles />
        <SkillsTable />
        <ResumeCenter />
        <GithubDashboard />
        <Contact />
      </main>
      <Footer />
      <EasterEggTerminal />
    </>
  );
}
