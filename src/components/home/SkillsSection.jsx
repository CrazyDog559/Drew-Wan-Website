import Section from '../common/Section';
import Icon from '../common/Icon';
import useReveal from '../../hooks/useReveal';
import { skills } from '../../data/skills';

const SkillGroup = ({ group, index }) => {
  const ref = useReveal({ delay: Math.min(index, 4) * 70 });

  return (
    <div
      ref={ref}
      className="reveal group rounded-card border border-line bg-raised p-6 shadow-card
                 transition-colors duration-300 hover:border-brand/40"
    >
      <h3 className="mb-5 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                     border border-line bg-surface text-brand transition-colors
                     group-hover:border-brand/40 group-hover:bg-brand/10"
        >
          <Icon name={group.icon} className="h-[1.15rem] w-[1.15rem]" />
        </span>
        <span className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink">
          {group.category}
        </span>
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[0.82rem]
                       font-medium text-muted transition-colors hover:border-brand/40 hover:text-ink"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => (
  <Section
    id="skills"
    width="wide"
    eyebrow="What I work with"
    title="Skills & toolkit"
    lede="The languages, frameworks, and hardware I reach for most — grouped by where they actually get used."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, index) => (
        <SkillGroup key={group.id} group={group} index={index} />
      ))}
    </div>
  </Section>
);

export default SkillsSection;
