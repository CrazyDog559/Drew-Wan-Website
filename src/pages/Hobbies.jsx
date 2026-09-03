import HobbyCard from '../components/common/HobbyCard';
import PageHeader from '../components/common/PageHeader';
import { hobbies, otherInterests } from '../data/hobbies';

const Hobbies = () => (
  <div className="bg-canvas">
    <PageHeader
      eyebrow="Beyond the code"
      title="Hobbies"
      lede="Rock climbing, snowboarding, a four-year milk-bottle carnival rivalry, and whatever else keeps things interesting outside of code."
    />

    <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16 lg:px-8">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby, index) => (
          <li key={hobby.id} className="flex">
            <HobbyCard hobby={hobby} index={index} />
          </li>
        ))}
      </ul>

      <section className="mt-16 border-t border-line pt-10 text-center">
        <h2 className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-faint">
          Also into
        </h2>
        <ul className="flex flex-wrap justify-center gap-2">
          {otherInterests.map((interest) => (
            <li key={interest} className="chip">{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  </div>
);

export default Hobbies;
