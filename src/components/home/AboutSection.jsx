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
              I'm a Computer Engineering student at UCLA (Film & TV minor), currently finishing a Master's
              in Electrical Engineering and Computer Science at UC Irvine. I like projects that sit at the
              intersection of hardware and software — the kind where you can point at something and say,
              "I built that."
            </p>

            <p>
              That shows up in things like AirWave, a gesture- and voice-controlled interface built around
              a Raspberry Pi and IMU sensors, and a home NAS I put together from spare parts and set up with
              RAID 5 for redundancy. I've also spent time on the data side — writing automation scripts and
              LLM-assisted workflows for qualitative research, and building out AV tooling for UCLA's
              BruinCast operation.
            </p>

            <p>
              Outside of engineering, I teach programming fundamentals to kids at Code Ninjas, and I'm usually
              somewhere outdoors — rock climbing, snowboarding, or trying whatever sport I haven't attempted
              yet. I've also been on a handful of medical mission trips, most recently to Fiji.
            </p>

            <p>
              Most of the projects on this site come with the write-up, video, or code behind them, since I
              like documenting the process as much as the result. Take a look around, and feel free to reach
              out if you want to talk shop.
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
