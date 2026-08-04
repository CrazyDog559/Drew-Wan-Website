import HobbyCard from '../components/common/HobbyCard';
import { hobbies, otherInterests } from '../data/hobbies';

const Hobbies = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hobbies</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            When I'm not coding, you'll find me exploring the outdoors and pushing my limits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hobbies.map(hobby => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">
            Also into
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {otherInterests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
