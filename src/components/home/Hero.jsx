import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-4">COMPUTER ENGINEER</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              Hi, I'm Andrew Wan — I build things.
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              Computer Engineering student at UCLA, headed into a Master's in EECS at UC Irvine.
              I like projects where hardware and software meet — gesture-controlled interfaces,
              home servers, embedded games — and I usually end up documenting the build along the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#about">
                <Button variant="primary">About Me</Button>
              </Link>
              <Link to="/#projects">
                <Button variant="outline">Projects</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-gray-100 dark:border-gray-800 shadow-xl ring-1 ring-primary/20 dark:ring-primary/30">
                <img
                  src="/assets/Profile/GraduationPhoto.jpg"
                  alt="Andrew Wan"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 sm:mt-16">
          <Link
            to="/#about"
            aria-label="Scroll to About section"
            className="text-gray-400 dark:text-gray-500 hover:text-primary transition-colors animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
