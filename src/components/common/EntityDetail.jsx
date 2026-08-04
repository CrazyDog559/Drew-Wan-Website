import { useState } from 'react';
import { Link } from 'react-router-dom';

const EntityDetail = ({ item, backLink }) => {
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('all');

  const galleryImages =
    item.photoGallery && activeGalleryCategory !== 'all'
      ? item.photoGallery.find((g) => g.category === activeGalleryCategory)?.images ?? []
      : item.photoGallery?.flatMap((g) => g.images) ?? [];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary font-medium mb-2">{item.category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">{item.title}</h1>
          {item.date && <p className="text-gray-500 dark:text-gray-400">{item.date}</p>}
        </div>

        {/* YouTube Video Embed */}
        {item.youtubeId && (
          <div className="mb-10 sm:mb-12">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Multiple YouTube Videos */}
        {item.youtubeVideos && item.youtubeVideos.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {item.youtubeVideos.map((videoId, index) => (
                <div key={videoId} className="aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${item.title} - Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shorts Videos (9:16) */}
        {item.shortsVideos && item.shortsVideos.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {item.shortsVideos.map((videoId) => (
                <div key={videoId} className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${item.title} short ${videoId}`}
                    width="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full aspect-[9/16]"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demo Video */}
        {item.youtubeVideoId ? (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Demo Video</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.youtubeVideoId}`}
                title={`${item.title} demo video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ) : item.demoVideo && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Demo Video</h3>
            <div className="rounded-lg overflow-hidden shadow-lg bg-black">
              <video controls className="w-full h-auto" poster={item.thumbnail}>
                <source src={item.demoVideo} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {item.techStack && item.techStack.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Live Site + GitHub Links */}
        {(item.liveUrl || item.githubUrl) && (
          <div className="mb-10 sm:mb-12 flex flex-wrap gap-3">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                Visit Site
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        )}

        {/* Supporting Materials */}
        {item.resourceLinks && item.resourceLinks.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Supporting Materials</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              {item.resourceLinks.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {resource.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {item.description && (
          <div
            className="prose prose-base sm:prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 mb-10 sm:mb-12"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        )}

        {/* Photo Gallery (with category filter) */}
        {item.photoGallery && item.photoGallery.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Gallery</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => setActiveGalleryCategory('all')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                  activeGalleryCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {item.photoGallery.map((group) => (
                <button
                  key={group.category}
                  onClick={() => setActiveGalleryCategory(group.category)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-colors ${
                    activeGalleryCategory === group.category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {group.category} ({group.images.length})
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {galleryImages.map((imageSrc, index) => (
                <div key={imageSrc} className="aspect-square rounded-lg overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-800">
                  <img
                    src={imageSrc}
                    alt={`${item.title} gallery ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Images (flat list) */}
        {item.galleryImages && item.galleryImages.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.galleryImages.map((imageSrc, index) => (
                <div key={imageSrc} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                  <img
                    src={imageSrc}
                    alt={`${item.title} gallery ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instagram Posts Gallery */}
        {item.instagramPosts && item.instagramPosts.length > 0 && (
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              {item.photoGallery ? 'Follow Along on Instagram' : 'Project Gallery'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.instagramPosts.map((postId, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full max-w-md">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                      <iframe
                        src={`https://www.instagram.com/p/${postId}/embed`}
                        width="100%"
                        height="700"
                        frameBorder="0"
                        scrolling="no"
                        allowtransparency="true"
                        loading="lazy"
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
        {item.youtubeChannel && (
          <div className="mb-10 sm:mb-12">
            <div className="rounded-lg shadow-lg overflow-hidden">
              {item.youtubeChannelBanner && (
                <img
                  src={item.youtubeChannelBanner}
                  alt={`${item.title} banner`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
              )}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">YouTube Channel</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Follow the project journey and watch build videos on YouTube
                </p>
                <a
                  href={`https://www.youtube.com/@${item.youtubeChannel}`}
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
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            to={backLink.to}
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {backLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntityDetail;
