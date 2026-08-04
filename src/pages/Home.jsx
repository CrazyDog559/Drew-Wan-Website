import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/home/StatsSection';
import ProjectsPreview from '../components/home/ProjectsPreview';
import HobbiesPreview from '../components/home/HobbiesPreview';
import SkillsSection from '../components/home/SkillsSection';
import ExperienceSection from '../components/home/ExperienceSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ProjectsPreview />
      <HobbiesPreview />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
};

export default Home;
