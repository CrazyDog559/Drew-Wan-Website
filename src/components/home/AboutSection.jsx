import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import useReveal from '../../hooks/useReveal';
import { otherInterests } from '../../data/hobbies';

const quickFacts = [
  { label: 'Based in', value: 'Southern California' },
  { label: 'Studying', value: 'M.Eng. EECS, UC Irvine' },
  { label: 'Graduated', value: 'B.S. CompE, UCLA' },
  { label: 'Teaching', value: 'Code Ninjas' },
];

const AboutSection = () => {
  const bodyRef = useReveal();
  const asideRef = useReveal({ delay: 80 });

  return (
    <section id="about" className="border-b border-line bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="eyebrow mb-3 flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
            Andrew Wan
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            About me
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          {/* Portrait + facts */}
          <aside ref={asideRef} className="reveal lg:sticky lg:top-28 lg:self-start">
            <figure className="m-0 overflow-hidden rounded-card border border-line bg-raised shadow-card">
              <img
                src="/assets/Profile/lever-960.jpg"
                alt="Andrew Wan working on a piece of hardware"
                width="960"
                height="960"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </figure>

            <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-raised p-4">
                  <dt className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          {/* Bio */}
          <div ref={bodyRef} className="reveal">
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.0625rem] sm:leading-[1.75]">
              <p>
                I&apos;m a Computer Engineering graduate from UCLA with a minor in Film and Television,
                and I&apos;m currently finishing my Master&apos;s in Electrical Engineering and Computer
                Science at UC Irvine. I enjoy building projects that combine hardware and software,
                especially when the result is something tangible I can point to and say, &ldquo;I built
                that.&rdquo;
              </p>
              <p>
                Some of those projects include AirWave, a gesture and voice-controlled interface built
                with a Raspberry Pi and IMU sensors, and a home NAS assembled from spare parts with RAID
                5 for redundancy. I&apos;ve also worked with data and automation, creating scripts and
                LLM-assisted workflows for qualitative research and developing AV tools for UCLA&apos;s
                BruinCast operation.
              </p>
              <p>
                I teach programming fundamentals to kids at Code Ninjas. When I&apos;m away from a
                computer, you&apos;ll usually find me rock climbing, snowboarding, or trying a new sport.
                I&apos;ve also joined several medical mission trips, most recently in Fiji.
              </p>
              <p>
                Most projects on this site include a write-up, video, or source code. I enjoy documenting
                how things come together and sharing what I learn along the way. Take a look around, and
                feel free to reach out if you&apos;d like to talk shop.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects/fiji" className="link-underline text-sm">
                Read about the Fiji mission trip
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <h3 className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">
                Also into
              </h3>
              <ul className="flex flex-wrap gap-2">
                {otherInterests.map((interest) => (
                  <li key={interest} className="chip">{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
