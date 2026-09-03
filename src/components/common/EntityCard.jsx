import { Link } from 'react-router-dom';
import Icon from './Icon';
import useReveal from '../../hooks/useReveal';

/** Derives the "what's inside" badges shown at the foot of a card. */
const availabilityBadges = (item) => {
  const badges = [];
  if (item.githubUrl) badges.push({ icon: 'github', label: 'Source' });
  if (item.liveUrl) badges.push({ icon: 'external', label: 'Live site' });
  if (item.youtubeId || item.youtubeVideoId || item.youtubeVideos?.length || item.shortsVideos?.length || item.youtubeChannel) {
    badges.push({ icon: 'play', label: 'Video' });
  }
  if (item.resourceLinks?.length) badges.push({ icon: 'document', label: 'Write-up' });
  if (item.photoGallery?.length || item.galleryImages?.length) badges.push({ icon: 'image', label: 'Gallery' });
  return badges;
};

const EntityCard = ({ item, basePath, ctaLabel, index = 0 }) => {
  const revealRef = useReveal({ delay: Math.min(index, 5) * 60 });
  const tech = item.techStack ?? [];
  const visibleTech = tech.slice(0, 3);
  const overflowTech = tech.length - visibleTech.length;
  // Cap at three so the footer stays on one line across the grid.
  const badges = availabilityBadges(item).slice(0, 3);

  return (
    <article ref={revealRef} className="reveal group relative flex h-full flex-col">
      <div
        className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-raised shadow-card
                   transition-[transform,box-shadow,border-color] duration-300
                   group-hover:-translate-y-1 group-hover:border-brand/40 group-hover:shadow-card-hover
                   group-focus-within:-translate-y-1 group-focus-within:border-brand/40"
      >
        {/* Media */}
        <div className="relative aspect-video overflow-hidden bg-surface">
          <img
            src={item.thumbnail}
            alt={item.thumbnailAlt ?? `${item.title} project thumbnail`}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80"
          />
          {item.category && (
            <span className="absolute left-3 top-3 rounded-pill bg-black/60 px-2.5 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
              {item.category}
            </span>
          )}
          {item.date && (
            <span className="absolute right-3 top-3 rounded-pill bg-black/45 px-2.5 py-1 font-mono text-[0.65rem] text-white/90 backdrop-blur-sm">
              {item.date}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-semibold leading-snug sm:text-xl">
            <Link
              to={`${basePath}/${item.slug}`}
              className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none
                         focus-visible:after:outline focus-visible:after:outline-2
                         focus-visible:after:outline-offset-2 focus-visible:after:outline-brand
                         transition-colors group-hover:text-brand"
            >
              {item.title}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{item.excerpt}</p>

          {visibleTech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {visibleTech.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
              {overflowTech > 0 && (
                <li className="chip border-dashed">+{overflowTech}</li>
              )}
            </ul>
          )}

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <ul className="flex flex-wrap items-center gap-2.5 text-faint">
              {badges.map((badge) => (
                <li key={badge.label} className="flex items-center gap-1" title={badge.label}>
                  <Icon name={badge.icon} className="h-3.5 w-3.5" />
                  <span className="sr-only">{badge.label} available</span>
                  <span aria-hidden="true" className="font-mono text-[0.65rem] uppercase tracking-wide">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>
            <span
              aria-hidden="true"
              className="flex shrink-0 items-center gap-1 font-mono text-[0.7rem] uppercase tracking-wider text-brand
                         transition-transform duration-300 group-hover:translate-x-0.5"
            >
              {ctaLabel}
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EntityCard;
