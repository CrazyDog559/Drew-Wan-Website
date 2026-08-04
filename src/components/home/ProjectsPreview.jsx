import { Link } from 'react-router-dom';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsPreview = () => {
  return (
    <section id="projects" className="scroll-mt-24 bg-white dark:bg-gray-900 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary font-medium mb-3">SELECTED WORK</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              A mix of hardware builds, full-stack apps, and things I made to solve my own problems.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-primary font-medium hover:text-primary-dark transition-colors whitespace-nowrap"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
