import Section from '../common/Section';
import ProjectCard from '../common/ProjectCard';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { featuredProjects, projects } from '../../data/projects';

const ProjectsPreview = () => (
  <Section
    id="projects"
    eyebrow="Selected work"
    title="Projects"
    lede="A mix of hardware builds, research write-ups, full-stack apps, and things I made to solve my own problems."
    action={
      <Button
        to="/projects"
        variant="secondary"
        iconRight={<Icon name="arrowRight" className="h-4 w-4" />}
      >
        All {projects.length} projects
      </Button>
    }
  >
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((project, index) => (
        <li key={project.id} className="flex">
          <ProjectCard project={project} index={index} />
        </li>
      ))}
    </ul>
  </Section>
);

export default ProjectsPreview;
