import EntityCard from './EntityCard';

const HobbyCard = ({ hobby }) => (
  <EntityCard item={hobby} basePath="/hobbies" ctaLabel="View Hobby →" />
);

export default HobbyCard;
