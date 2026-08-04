import Button from '../common/Button';
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
                className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <a href="/assets/Resume/Andrew-Wan-Computer-Engineering.pdf" download>
              <Button variant="primary">Download Resume</Button>
            </a>
          </div>

          <div className="flex space-x-6 mt-8">
            <a
              href="https://github.com/CrazyDog559"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/drew-wan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
            <a
              href="mailto:drewkeithwan@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
