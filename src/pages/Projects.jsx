import { useMemo, useState } from 'react';
import ProjectCard from '../components/common/ProjectCard';
import PageHeader from '../components/common/PageHeader';
import { projects } from '../data/projects';

const ALL = 'All';

const Projects = () => {
  const [filter, setFilter] = useState(ALL);

  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))).sort()],
    []
  );

  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-canvas">
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        lede="A mix of hardware builds, research write-ups, full-stack apps, and things I made to solve my own problems. Most come with a video, paper, or source code."
      />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-2 sm:mb-10">
          <h2 className="sr-only">Filter projects by category</h2>
          {categories.map((category) => {
            const isActive = filter === category;
            const count =
              category === ALL
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(category)}
                className={`rounded-pill border px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'border-brand bg-brand text-brand-ink'
                    : 'border-line bg-raised text-muted hover:border-brand/50 hover:text-brand'
                }`}
              >
                {category} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <p className="rounded-card border border-dashed border-line px-6 py-16 text-center text-sm text-faint">
            No projects in this category yet.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, index) => (
              <li key={project.id} className="flex">
                <ProjectCard project={project} index={index} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Projects;
