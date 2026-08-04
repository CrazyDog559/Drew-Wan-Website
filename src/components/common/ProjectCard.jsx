import EntityCard from './EntityCard';

const ProjectCard = ({ project }) => (
  <EntityCard item={project} basePath="/projects" ctaLabel="View Project →" />
);

export default ProjectCard;
