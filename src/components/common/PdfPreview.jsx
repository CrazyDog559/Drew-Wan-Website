import { useState } from 'react';
import Icon from './Icon';

/**
 * Inline PDF preview with an explicit fallback: browsers (and most mobile
 * devices) that refuse to render an embedded PDF still get a labelled link.
 */
const PdfPreview = ({ href, label, description, height = 640 }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <figure className="overflow-hidden rounded-card border border-line bg-raised shadow-card">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface px-4 py-3 sm:px-5">
        <span className="flex min-w-0 items-center gap-2.5">
          <Icon name="document" className="h-4 w-4 shrink-0 text-brand" />
          <span className="truncate text-sm font-medium text-ink">{label}</span>
          {description && (
            <span className="hidden truncate font-mono text-[0.68rem] uppercase tracking-wider text-faint sm:inline">
              {description}
            </span>
          )}
        </span>
        <span className="flex items-center gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs sm:text-sm"
          >
            Open
            <Icon name="external" className="h-3.5 w-3.5" />
          </a>
          <a href={href} download className="link-underline text-xs sm:text-sm">
            Download
            <Icon name="download" className="h-3.5 w-3.5" />
          </a>
        </span>
      </figcaption>

      <div className="relative bg-surface" style={{ height }}>
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-faint">
            <span
              aria-hidden="true"
              className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand"
            />
            <p className="font-mono text-xs uppercase tracking-wider">Loading preview…</p>
          </div>
        )}
        <object
          data={`${href}#view=FitH`}
          type="application/pdf"
          title={`${label} preview`}
          onLoad={() => setLoaded(true)}
          className="h-full w-full"
        >
          {/* Rendered when the browser cannot display PDFs inline. */}
          <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <Icon name="document" className="h-8 w-8 text-faint" />
            <p className="max-w-sm text-sm text-muted">
              Your browser can&apos;t display this PDF inline.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm"
            >
              Open {label} in a new tab
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
        </object>
      </div>
    </figure>
  );
};

export default PdfPreview;
