import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">{project.category}</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-gray-500">{project.date}</p>
        </div>

        {/* YouTube Video Embed */}
        {project.youtubeId && (
          <div className="mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Multiple YouTube Videos */}
        {project.youtubeVideos && project.youtubeVideos.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Project Videos</h3>
            <div className="space-y-6">
              {project.youtubeVideos.map((videoId, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${project.title} - Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Link */}
        {project.githubUrl && (
          <div className="mb-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        )}

        {/* Project Description */}
        <div 
          className="prose prose-lg max-w-none text-gray-700 mb-12"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        {/* Instagram Posts Gallery */}
        {project.instagramPosts && project.instagramPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.instagramPosts.map((postId, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full max-w-md">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                      <iframe
                        src={`https://www.instagram.com/p/${postId}/embed`}
                        width="100%"
                        height="700"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        className="w-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* YouTube Channel Link */}
        {project.youtubeChannel && (
          <div className="mb-12">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/assets/Projects/ProjectRender/PR banner Blue.png" 
                alt="ProjectRender Banner"
                className="w-full h-auto"
              />
              <div className="bg-gray-50 p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Channel</h3>
                <p className="text-gray-600 mb-6">
                  Follow the project journey and watch build videos on YouTube
                </p>
                <a
                  href={`https://www.youtube.com/@${project.youtubeChannel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors text-lg"
                >
                  Visit YouTube Channel
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link 
            to="/projects"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
