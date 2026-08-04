import { otherInterests } from '../../data/hobbies';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 bg-white dark:bg-gray-900 py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary font-medium mb-4">ANDREW WAN</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">About me</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-8 border-gray-100 dark:border-gray-800 shadow-lg mb-8">
            <img
              src="/assets/Profile/LeverPhoto.jpg"
              alt="Andrew Wan"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-base sm:prose-lg dark:prose-invert max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 px-1 sm:px-0">
            <p>
              I'm Andrew Wan, a Computer Engineering major with a deep passion for technology and innovation.
              I'm currently studying at UCLA where I focus on data systems development and building practical
              solutions to real-world problems.
            </p>

            <p>
              My interests span across various domains including software development, hardware projects,
              and system architecture. I love taking on challenging projects that push me to learn and grow,
              whether it's building a custom NAS system, developing web applications, or exploring new frameworks
              and technologies.
            </p>

            <p>
              Outside of work, I'm passionate about photography and video editing, capturing memorable moments in my life. I also enjoy outdoor activities like rock climbing
              and snowboarding, which help me stay active and push my limits in different ways.
            </p>

            <p>
              I believe in continuous learning and sharing knowledge with the community. Through my projects,
              I aim to document my journey and help others who are interested in similar pursuits. Feel free
              to explore my work and reach out if you'd like to collaborate or just chat about technology
              and innovation.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-xl">
            {otherInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
