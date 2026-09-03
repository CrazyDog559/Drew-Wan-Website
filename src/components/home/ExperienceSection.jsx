import Section from '../common/Section';
import useReveal from '../../hooks/useReveal';
import { experience, education } from '../../data/experience';

const TimelineItem = ({ job, index }) => {
  const ref = useReveal({ delay: Math.min(index, 4) * 60 });

  return (
    <li ref={ref} className="reveal group relative pl-8 sm:pl-10">
      {/* Timeline rail node + connector */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-7 h-px w-6 bg-line-strong sm:w-8"
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-[1.4rem] flex h-3 w-3 -translate-x-1/2 items-center justify-center
                   rounded-full border-2 border-brand bg-surface transition-colors group-hover:bg-brand"
      />
      <div className="rounded-card border border-line bg-raised p-5 shadow-card transition-colors duration-300 hover:border-brand/40 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 className="text-base font-semibold leading-snug sm:text-lg">{job.role}</h3>
          <span className="shrink-0 font-mono text-[0.7rem] uppercase tracking-wider text-faint">
            {job.dates}
          </span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-brand">
          {job.org}
          {job.location ? <span className="text-faint"> · {job.location}</span> : null}
        </p>
        {job.bullets.length > 0 && (
          <ul className="mt-4 space-y-2.5">
            {job.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand/60" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const ExperienceSection = () => {
  const eduRef = useReveal();

  return (
    <Section
      id="experience"
      tone="surface"
      bordered
      width="prose"
      align="center"
      eyebrow="Background"
      title="Experience"
      lede="Where I've worked, what I built there, and what I studied along the way."
    >
      <ol className="relative space-y-5 border-l-2 border-line-strong pl-0 sm:space-y-6">
        {experience.map((job, index) => (
          <TimelineItem key={job.id} job={job} index={index} />
        ))}
      </ol>

      <div ref={eduRef} className="reveal mt-16">
        <h3 className="mb-6 flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-faint">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
          Education
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2">
          {education.map((school) => (
            <li
              key={school.id}
              className="rounded-card border border-line bg-raised p-5 shadow-card transition-colors hover:border-brand/40 sm:p-6"
            >
              <p className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">{school.dates}</p>
              <h4 className="mt-2 text-base font-semibold leading-snug">{school.school}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{school.degree}</p>
              {school.location && <p className="mt-2 text-xs text-faint">{school.location}</p>}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ExperienceSection;
