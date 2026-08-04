import { experience, education } from '../../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 bg-gray-50 dark:bg-gray-800 py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">Experience</h2>

        <div className="space-y-8 mb-16">
          {experience.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{job.role}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{job.dates}</span>
              </div>
              <p className="text-primary font-medium text-sm mb-4">
                {job.org}{job.location ? ` — ${job.location}` : ''}
              </p>
              {job.bullets.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Education</h3>
        <div className="space-y-4">
          {education.map((school) => (
            <div
              key={school.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{school.school}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{school.degree}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{school.dates}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
