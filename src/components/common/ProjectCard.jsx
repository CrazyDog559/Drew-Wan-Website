import EntityCard from './EntityCard';

const ProjectCard = ({ project, index }) => (
  <EntityCard item={project} basePath="/projects" ctaLabel="Case study" index={index} />
);

export default ProjectCard;
