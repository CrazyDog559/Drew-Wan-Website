import { useParams, Navigate } from 'react-router-dom';
import { hobbies } from '../data/hobbies';
import EntityDetail from '../components/common/EntityDetail';

const HobbyDetail = () => {
  const { slug } = useParams();
  const hobby = hobbies.find((h) => h.slug === slug);

  if (!hobby) {
    return <Navigate to="/hobbies" replace />;
  }

  return <EntityDetail item={hobby} backLink={{ to: '/hobbies', label: 'Back to Hobbies' }} />;
};

export default HobbyDetail;
