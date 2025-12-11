const Hobbies = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Hobbies</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            When I'm not coding, you'll find me exploring the outdoors and pushing my limits.
          </p>
        </div>

        <div className="space-y-16">
          {/* Rock Climbing Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rock Climbing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rock climbing combines physical strength with mental problem-solving. Whether it's 
                bouldering indoors or tackling outdoor routes, each climb presents a unique challenge 
                that requires focus, technique, and determination.
              </p>
              
              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/xfAplNI6zos"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                
                {/* Placeholder for additional videos */}
                <div className="rounded-lg bg-gray-100 flex items-center justify-center h-[480px]">
                  <p className="text-gray-500">Add more climbing videos here</p>
                </div>
              </div>
            </div>
          </section>

          {/* Snowboarding Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Snowboarding</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                There's nothing quite like carving down a mountain with fresh powder beneath your board. 
                Is what I would say if I were good at snowboarding. I'm still learning, but the thrill and 
                learning to learn from falls keeps me coming back for more.
              </p>
              
              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/xf1Xttl--OA"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg bg-gray-100 flex items-center justify-center h-[480px]">
                  <p className="text-gray-500">Add more snowboarding videos here</p>
                </div>
              </div>
            </div>
          </section>

          {/* Carnival Milk Game Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Carnival Milk Game</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For the past four years, I've made it a tradition with my friends to compete in the carnival 
                milk bottle game. With over 6 prizes won, this annual challenge has become a test of skill, 
                consistency, and a little bit of luck. Each year brings new attempts, improvements, and 
                sometimes setbacks but that's what makes it fun! Watch my progress (and occasional regression) 
                through the years.
              </p>
              
              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/s_p3khK6yIU"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/PVEAzXFdVGA"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/mng0JPXv2M8"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* AACF Section */}
          <section className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AACF - Asian American Christian Fellowship</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am so thankful for the community at college, and this group has helped me grow in my faith 
                so much. AACF has been a place of spiritual growth, authentic friendships, and unforgettable 
                memories. Here are some fun videos I'm proud of and like to remember as cherished moments 
                from my college experience.
              </p>
              
              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/OP0SXRTHJQ4"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/JvjKuA9Qp3U"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/D3GOukCyPFM"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/tOaKcFWSaTk"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/ohFlXLW1Rwg"
                    width="100%"
                    height="480"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
