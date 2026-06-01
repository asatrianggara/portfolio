import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ProjectListSection from "@/components/ProjectListSection";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/personalInfo";
import { workExperiences } from "@/data/workExperiences";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main role="main">
        <HeroSection data={personalInfo} />
        <WorkExperienceSection experiences={workExperiences} />
        <ProjectListSection projects={projects} />
      </main>
      <Footer data={personalInfo} />
    </>
  );
}
