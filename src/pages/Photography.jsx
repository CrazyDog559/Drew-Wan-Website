import { useState } from 'react';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeGallery, setActiveGallery] = useState('all');

  // Instagram embed for Joshua Tree
  const joshuaTreeInstagram = 'https://www.instagram.com/p/DSGn9XWDxYB/embed';

  // Instagram embeds for Seattle
  const seattleEmbeds = [
    'https://www.instagram.com/p/DSGp6Ydj2PX/embed',
    'https://www.instagram.com/p/DSGpUjyD4x0/embed',
  ];

  const allEmbeds = [joshuaTreeInstagram, ...seattleEmbeds];

  const getFilteredContent = () => {
    switch (activeGallery) {
      case 'seattle':
        return { type: 'embeds', content: seattleEmbeds };
      default:
        return { type: 'embeds', content: allEmbeds };
    }
  };

  const filteredContent = getFilteredContent();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Photography</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my photography work, from portrait sessions to landscape exploration.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveGallery('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeGallery === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveGallery('joshuatree')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeGallery === 'joshuatree'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Joshua Tree
          </button>
          <button
            onClick={() => setActiveGallery('seattle')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              activeGallery === 'seattle'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Seattle ({seattleEmbeds.length})
          </button>
        </div>

        {/* Content Display */}
        {activeGallery === 'joshuatree' ? (
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <iframe
                  src={joshuaTreeInstagram}
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
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredContent.content.map((embedUrl, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-full max-w-md">
                    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                      <iframe
                        src={embedUrl}
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
      </div>
    </div>
  );
};

export default Photography;
