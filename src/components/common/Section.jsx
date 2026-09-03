import useReveal from '../../hooks/useReveal';

const tones = {
  canvas: 'bg-canvas',
  surface: 'bg-surface',
};

const widths = {
  narrow: 'max-w-3xl',
  prose: 'max-w-4xl',
  wide: 'max-w-6xl',
  full: 'max-w-7xl',
};

/**
 * Shared section shell: consistent vertical rhythm, container width, and the
 * eyebrow / title / lede header used across every part of the site.
 */
const Section = ({
  id,
  eyebrow,
  title,
  lede,
  action,
  tone = 'canvas',
  width = 'full',
  align = 'split',
  bordered = false,
  children,
  className = '',
  headingLevel = 'h2',
}) => {
  const revealRef = useReveal();
  const Heading = headingLevel;
  const centered = align === 'center';

  return (
    <section
      id={id}
      className={`${tones[tone] ?? tones.canvas} ${
        bordered ? 'border-t border-line' : ''
      } py-16 sm:py-24 ${className}`}
    >
      <div className={`${widths[width] ?? widths.full} mx-auto px-5 sm:px-6 lg:px-8`}>
        {(eyebrow || title || lede) && (
          <div
            ref={revealRef}
            className={`reveal mb-10 sm:mb-14 ${
              centered
                ? 'text-center max-w-2xl mx-auto'
                : 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between'
            }`}
          >
            <div className={centered ? '' : 'max-w-2xl'}>
              {eyebrow && (
                <p className={`eyebrow mb-3 flex items-center gap-2.5 ${centered ? 'justify-center' : ''}`}>
                  <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
                  {eyebrow}
                </p>
              )}
              {title && (
                <Heading className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.1]">
                  {title}
                </Heading>
              )}
              {lede && (
                <p className={`mt-4 text-base sm:text-lg leading-relaxed text-muted ${centered ? 'mx-auto' : ''}`}>
                  {lede}
                </p>
              )}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
