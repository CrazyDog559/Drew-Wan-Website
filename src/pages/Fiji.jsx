import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import Icon from '../components/common/Icon';
import useReveal from '../hooks/useReveal';

/**
 * Placeholder scaffolding for the Fiji write-up. Each entry becomes a real
 * section once the content exists — drop the copy (and any media) in here and
 * flip `status` to 'ready'.
 */
const plannedSections = [
  {
    id: 'photos',
    icon: 'image',
    title: 'Photos',
    description: 'A gallery from the trip, in the same style as the photography collections elsewhere on this site.',
  },
  {
    id: 'reflections',
    icon: 'document',
    title: 'Reflections',
    description: 'A written account of the experience — what the days looked like and what stuck with me afterwards.',
  },
  {
    id: 'details',
    icon: 'compass',
    title: 'Trip details',
    description: 'The practical side: where the team went, what the work involved, and who made it happen.',
  },
];

const PlannedCard = ({ section, index }) => {
  const ref = useReveal({ delay: index * 80 });

  return (
    <li ref={ref} className="reveal">
      <article className="flex h-full flex-col rounded-card border border-dashed border-line-strong bg-raised p-6 shadow-card">
        <span
          aria-hidden="true"
          className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-brand"
        >
          <Icon name={section.icon} className="h-5 w-5" />
        </span>
        <h3 className="text-base font-semibold sm:text-lg">{section.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{section.description}</p>
        <p className="mt-5 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-faint">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          Not published yet
        </p>
      </article>
    </li>
  );
};

const Fiji = () => {
  const noteRef = useReveal();

  return (
    <div className="bg-canvas">
      <PageHeader
        backLink={{ to: '/projects', label: 'Back to Projects' }}
        eyebrow="Fiji mission trip"
        title="Fiji"
        lede="I joined a medical mission trip to Fiji — the most recent of several I've been part of. I'm still putting the write-up together."
      >
        <p className="mx-auto mt-7 inline-flex items-center gap-2.5 rounded-pill border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Still in progress
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What&apos;s coming</h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Rather than post a half-finished page, I&apos;d rather do this one properly. Here&apos;s the
            shape it will take once the photos are sorted and the write-up is done.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {plannedSections.map((section, index) => (
            <PlannedCard key={section.id} section={section} index={index} />
          ))}
        </ul>

        {/* Closing note */}
        <section
          ref={noteRef}
          className="reveal relative mt-14 overflow-hidden rounded-card border border-line bg-surface p-8 text-center sm:mt-20 sm:p-12"
        >
          <div
            aria-hidden="true"
            className="blueprint-grid mask-radial pointer-events-none absolute inset-0"
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-xl font-semibold sm:text-2xl">Check back soon</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              This page will fill out as I sort through everything from the trip. If you&apos;d like to
              hear about it before then, send me a note.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="mailto:drewkeithwan@gmail.com?subject=Fiji%20mission%20trip"
                variant="primary"
                icon={<Icon name="mail" className="h-4 w-4" />}
              >
                Ask me about it
              </Button>
              <Button
                to="/projects"
                variant="secondary"
                iconRight={<Icon name="arrowRight" className="h-4 w-4" />}
              >
                Browse projects instead
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fiji;
