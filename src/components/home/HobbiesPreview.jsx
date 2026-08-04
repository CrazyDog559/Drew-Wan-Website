import { Link } from 'react-router-dom';
import HobbyCard from '../common/HobbyCard';
import { hobbies } from '../../data/hobbies';

const HobbiesPreview = () => {
  return (
    <section id="hobbies" className="scroll-mt-24 bg-gray-50 dark:bg-gray-800 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Hobbies</h2>
          <Link
            to="/hobbies"
            className="text-primary font-medium hover:text-primary-dark transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map(hobby => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesPreview;
