import Section from '../common/Section';
import HobbyCard from '../common/HobbyCard';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { hobbies } from '../../data/hobbies';

const HobbiesPreview = () => (
  <Section
    id="hobbies"
    tone="surface"
    bordered
    eyebrow="Beyond the code"
    title="Hobbies"
    lede="Rock climbing, snowboarding, a four-year milk-bottle carnival rivalry, and whatever else keeps things interesting outside of code."
    action={
      <Button
        to="/hobbies"
        variant="secondary"
        iconRight={<Icon name="arrowRight" className="h-4 w-4" />}
      >
        All hobbies
      </Button>
    }
  >
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {hobbies.map((hobby, index) => (
        <li key={hobby.id} className="flex">
          <HobbyCard hobby={hobby} index={index} />
        </li>
      ))}
    </ul>
  </Section>
);

export default HobbiesPreview;
