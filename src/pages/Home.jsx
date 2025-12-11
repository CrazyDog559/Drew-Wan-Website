import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-4">COMPUTER ENGINEER</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Hello, my name is Andrew Wan
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                I am a computer engineering major and film minor at UCLA. 
                I'm passionate about building innovative solutions and exploring new technologies.
              </p>
              <div className="flex space-x-4">
                <Link to="/about">
                  <Button variant="primary">About Me</Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline">Projects</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-gray-100 shadow-xl">
                  <img 
                    src="/assets/Profile/me.jpeg" 
                    alt="Andrew Wan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
            <Link 
              to="/projects" 
              className="text-primary font-medium hover:text-primary-dark transition-colors"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
