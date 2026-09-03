import { Link } from 'react-router-dom';
import Icon from './Icon';

/** Shared masthead for the standalone list/detail pages. */
const PageHeader = ({ eyebrow, title, lede, backLink, children }) => (
  <header className="relative overflow-hidden border-b border-line bg-surface">
    <div aria-hidden="true" className="blueprint-grid mask-fade-b pointer-events-none absolute inset-0" />
    <div className="relative mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-20">
      {backLink && (
        <Link
          to={backLink.to}
          className="link-underline mb-8 font-mono text-xs uppercase tracking-wider"
        >
          <Icon name="arrowLeft" className="h-3.5 w-3.5" />
          {backLink.label}
        </Link>
      )}
      <div className="text-center">
        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        {lede && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
        )}
        {children}
      </div>
    </div>
  </header>
);

export default PageHeader;
