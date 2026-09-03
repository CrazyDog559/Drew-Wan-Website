import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Icon from '../common/Icon';

const focusAreas = ['Embedded systems', 'Machine learning', 'Full-stack web'];

const Hero = () => (
  <section className="relative overflow-hidden border-b border-line bg-canvas">
    <div aria-hidden="true" className="blueprint-grid mask-radial pointer-events-none absolute inset-0" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-28 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-3xl"
    />

    <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        {/* Copy */}
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-pill border border-line bg-raised px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted shadow-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-brand" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Open to 2026 opportunities
          </p>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Andrew Wan
            <span className="mt-2 block text-brand">— I build things.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Computer Engineering graduate from UCLA, now finishing a Master&apos;s in EECS at UC Irvine.
            I like projects where hardware and software meet — gesture-controlled interfaces, home servers,
            neural decoders — and I document the build along the way.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li key={area} className="chip">{area}</li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              to="/#projects"
              variant="primary"
              size="lg"
              iconRight={<Icon name="arrowRight" className="h-4 w-4" />}
            >
              See my projects
            </Button>
            <Button
              href="/assets/Resume/Andrew-Wan-Computer-Engineering.pdf"
              download
              variant="secondary"
              size="lg"
              icon={<Icon name="download" className="h-4 w-4" />}
            >
              Download résumé
            </Button>
          </div>

          <p className="mt-6 text-sm text-faint">
            Or{' '}
            <a href="mailto:drewkeithwan@gmail.com" className="link-underline text-sm">
              email me directly
            </a>
            .
          </p>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[1.75rem] border border-line-strong/60"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-brand/25 via-transparent to-transparent blur-xl"
            />
            <figure className="relative m-0 overflow-hidden rounded-[1.4rem] border border-line bg-surface shadow-card">
              <img
                src="/assets/Profile/graduation-960.jpg"
                alt="Andrew Wan in graduation regalia at UCLA"
                width="960"
                height="1200"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4">
                <span className="rounded-pill bg-black/55 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur-sm">
                  B.S. Computer Engineering
                </span>
                <span className="rounded-pill bg-black/55 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur-sm">
                  UCLA
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-14 flex justify-center sm:mt-20">
        <Link
          to="/#about"
          className="group inline-flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-faint transition-colors hover:text-brand"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">More below</span>
          <Icon
            name="arrowDown"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
          />
          <span className="sr-only">Scroll to the About section</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
