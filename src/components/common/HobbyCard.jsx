import EntityCard from './EntityCard';

const HobbyCard = ({ hobby, index }) => (
  <EntityCard item={hobby} basePath="/hobbies" ctaLabel="Take a look" index={index} />
);

export default HobbyCard;
