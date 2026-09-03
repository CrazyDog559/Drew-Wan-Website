import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Icon from './Icon';
import PdfPreview from './PdfPreview';
import useReveal from '../../hooks/useReveal';

const Block = ({ title, children, className = '' }) => (
  <section className={`mt-14 sm:mt-20 ${className}`}>
    {title && (
      <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold sm:text-2xl">
        <span aria-hidden="true" className="h-4 w-1 rounded-full bg-brand" />
        {title}
      </h2>
    )}
    {children}
  </section>
);

const VideoFrame = ({ id, title, className = 'aspect-video' }) => (
  <div className={`overflow-hidden rounded-card border border-line bg-black shadow-card ${className}`}>
    <iframe
      src={`https://www.youtube.com/embed/${id}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      className="h-full w-full"
      frameBorder="0"
    />
  </div>
);

const EntityDetail = ({ item, backLink }) => {
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('all');
  const headerRef = useReveal();

  const galleryImages =
    item.photoGallery && activeGalleryCategory !== 'all'
      ? item.photoGallery.find((g) => g.category === activeGalleryCategory)?.images ?? []
      : item.photoGallery?.flatMap((g) => g.images) ?? [];

  const heroVideoId = item.youtubeId ?? item.youtubeVideoId;

  return (
    <article className="bg-canvas">
      {/* ---------------------------------------------------------------- */}
      {/* Header                                                            */}
      {/* ---------------------------------------------------------------- */}
      <header className="relative overflow-hidden border-b border-line bg-surface">
        <div
          aria-hidden="true"
          className="blueprint-grid mask-fade-b pointer-events-none absolute inset-0"
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
          <Link
            to={backLink.to}
            className="link-underline mb-8 font-mono text-xs uppercase tracking-wider"
          >
            <Icon name="arrowLeft" className="h-3.5 w-3.5" />
            {backLink.label}
          </Link>

          <div ref={headerRef} className="reveal">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              {item.category && <span className="eyebrow">{item.category}</span>}
              {item.date && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
                  <span className="font-mono text-xs uppercase tracking-wider text-faint">{item.date}</span>
                </>
              )}
              {item.context && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
                  <span className="font-mono text-xs uppercase tracking-wider text-faint">{item.context}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              {item.title}
            </h1>

            {item.excerpt && (
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">{item.excerpt}</p>
            )}

            {item.collaborators?.length > 0 && (
              <p className="mt-4 text-sm text-faint">
                <span className="font-mono text-xs uppercase tracking-wider">With</span>{' '}
                {item.collaborators.join(', ')}
              </p>
            )}

            {/* Primary actions */}
            {(item.liveUrl || item.githubUrl || item.resourceLinks?.length > 0) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {item.liveUrl && (
                  <Button
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    iconRight={<Icon name="external" className="h-4 w-4" />}
                  >
                    Visit site
                  </Button>
                )}
                {item.githubUrl && (
                  <Button
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    icon={<Icon name="github" className="h-4 w-4" />}
                  >
                    View source
                  </Button>
                )}
                {item.resourceLinks?.map((resource) => (
                  <Button
                    key={resource.href}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    icon={<Icon name="document" className="h-4 w-4" />}
                  >
                    {resource.label}
                  </Button>
                ))}
              </div>
            )}

            {/* Tech stack */}
            {item.techStack?.length > 0 && (
              <div className="mt-8 border-t border-line pt-6">
                <h2 className="sr-only">Technologies used</h2>
                <ul className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <li key={tech} className="chip chip-brand">{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-6 sm:pb-28">
        {/* Key outcomes */}
        {item.highlights?.length > 0 && (
          <Block title="Key outcomes" className="mt-12 sm:mt-16">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-card border border-line bg-raised p-5 shadow-card transition-colors hover:border-brand/40"
                >
                  <dt className="font-mono text-[0.68rem] uppercase tracking-wider text-faint">{h.label}</dt>
                  <dd className="mt-2 text-2xl font-bold leading-none text-brand sm:text-[1.75rem]">{h.value}</dd>
                  {h.detail && <p className="mt-2 text-sm leading-snug text-muted">{h.detail}</p>}
                </div>
              ))}
            </dl>
          </Block>
        )}

        {/* Hero video */}
        {heroVideoId && (
          <Block title="Demo" className="mt-12 sm:mt-16">
            <VideoFrame id={heroVideoId} title={`${item.title} demo video`} />
          </Block>
        )}

        {!heroVideoId && item.demoVideo && (
          <Block title="Demo" className="mt-12 sm:mt-16">
            <div className="overflow-hidden rounded-card border border-line bg-black shadow-card">
              <video controls className="h-auto w-full" poster={item.thumbnail} preload="metadata">
                <source src={item.demoVideo} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Block>
        )}

        {/* Description */}
        {item.description && (
          <div
            className="prose prose-base sm:prose-lg mt-14 max-w-none sm:mt-20
                       prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:tracking-tight
                       prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-3
                       prose-p:leading-relaxed prose-li:leading-relaxed
                       prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5
                       prose-code:font-mono prose-code:text-[0.85em] prose-code:before:content-none prose-code:after:content-none"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        )}

        {/* Embedded documents */}
        {item.pdfEmbeds?.length > 0 && (
          <Block title={item.pdfEmbeds.length > 1 ? 'The papers' : 'The paper'}>
            <div className="space-y-6">
              {item.pdfEmbeds.map((pdf) => (
                <PdfPreview
                  key={pdf.href}
                  href={pdf.href}
                  label={pdf.label}
                  description={pdf.description}
                />
              ))}
            </div>
          </Block>
        )}

        {/* Multiple 16:9 videos */}
        {item.youtubeVideos?.length > 0 && (
          <Block title="Videos">
            <div className="grid gap-5 sm:grid-cols-2">
              {item.youtubeVideos.map((videoId, index) => (
                <VideoFrame key={videoId} id={videoId} title={`${item.title} — video ${index + 1}`} />
              ))}
            </div>
          </Block>
        )}

        {/* Vertical shorts */}
        {item.shortsVideos?.length > 0 && (
          <Block title="Clips">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.shortsVideos.map((videoId, index) => (
                <VideoFrame
                  key={videoId}
                  id={videoId}
                  title={`${item.title} — clip ${index + 1}`}
                  className="aspect-[9/16]"
                />
              ))}
            </div>
          </Block>
        )}

        {/* Flat image gallery */}
        {item.galleryImages?.length > 0 && (
          <Block title="Results & figures">
            <div className="grid gap-5 sm:grid-cols-2">
              {item.galleryImages.map((imageSrc, index) => (
                <figure
                  key={imageSrc}
                  className="overflow-hidden rounded-card border border-line bg-raised shadow-card"
                >
                  <img
                    src={imageSrc}
                    alt={item.galleryAlts?.[index] ?? `${item.title} figure ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full object-contain"
                  />
                </figure>
              ))}
            </div>
          </Block>
        )}

        {/* Filterable photo gallery */}
        {item.photoGallery?.length > 0 && (
          <Block title="Gallery">
            <div
              role="tablist"
              aria-label="Filter gallery by collection"
              className="mb-6 flex flex-wrap gap-2"
            >
              {[{ category: 'all', images: galleryImages }, ...item.photoGallery].map((group) => {
                const isActive = activeGalleryCategory === group.category;
                const label = group.category === 'all' ? 'All' : group.category;
                const count =
                  group.category === 'all'
                    ? item.photoGallery.reduce((sum, g) => sum + g.images.length, 0)
                    : group.images.length;
                return (
                  <button
                    key={group.category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveGalleryCategory(group.category)}
                    className={`rounded-pill border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'border-brand bg-brand text-brand-ink'
                        : 'border-line bg-raised text-muted hover:border-brand/50 hover:text-brand'
                    }`}
                  >
                    {label} <span className="opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            {galleryImages.length === 0 ? (
              <p className="rounded-card border border-dashed border-line px-6 py-12 text-center text-sm text-faint">
                No photos in this collection yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
                {galleryImages.map((imageSrc, index) => (
                  <div
                    key={imageSrc}
                    className="aspect-square overflow-hidden rounded-lg border border-line bg-surface"
                  >
                    <img
                      src={imageSrc}
                      alt={`${item.title} — ${
                        activeGalleryCategory === 'all' ? 'collection' : activeGalleryCategory
                      } photo ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </Block>
        )}

        {/* Instagram embeds */}
        {item.instagramPosts?.length > 0 && (
          <Block title={item.photoGallery ? 'On Instagram' : 'Project updates'}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.instagramPosts.map((postId) => (
                <div
                  key={postId}
                  className="overflow-hidden rounded-card border border-line bg-white shadow-card"
                >
                  <iframe
                    src={`https://www.instagram.com/p/${postId}/embed`}
                    title={`Instagram post ${postId}`}
                    width="100%"
                    height="640"
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </Block>
        )}

        {/* YouTube channel callout */}
        {item.youtubeChannel && (
          <Block title="YouTube channel">
            <div className="overflow-hidden rounded-card border border-line bg-raised shadow-card">
              {item.youtubeChannelBanner && (
                <img
                  src={item.youtubeChannelBanner}
                  alt={`${item.title} YouTube channel banner`}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
              )}
              <div className="flex flex-col items-center gap-4 border-t border-line bg-surface p-8 text-center">
                <p className="max-w-md text-muted">
                  Build videos, tutorials, and stories from the project live on YouTube.
                </p>
                <Button
                  href={`https://www.youtube.com/@${item.youtubeChannel}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<Icon name="youtube" className="h-4 w-4" />}
                >
                  Visit the channel
                </Button>
              </div>
            </div>
          </Block>
        )}

        {/* Footer nav */}
        <nav className="mt-16 border-t border-line pt-8 sm:mt-24">
          <Link to={backLink.to} className="link-underline">
            <Icon name="arrowLeft" className="h-4 w-4" />
            {backLink.label}
          </Link>
        </nav>
      </div>
    </article>
  );
};

export default EntityDetail;
