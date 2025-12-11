import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link 
      to={`/projects/${project.slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.excerpt}
        </p>
        <button className="text-primary font-medium text-sm hover:text-primary-dark transition-colors">
          View Project →
        </button>
      </div>
    </Link>
  );
};

export default ProjectCard;
