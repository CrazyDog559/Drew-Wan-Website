import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import EntityDetail from '../components/common/EntityDetail';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <EntityDetail item={project} backLink={{ to: '/projects', label: 'Back to Projects' }} />;
};

export default ProjectDetail;
