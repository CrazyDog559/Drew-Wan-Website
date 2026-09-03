import { useCallback, useEffect, useRef, useState } from 'react';
import Button from './Button';
import Icon from './Icon';

export const RESUME_HREF = '/assets/Resume/Andrew-Wan-Computer-Engineering.pdf';
const RESUME_FILENAME = 'Andrew-Wan-Computer-Engineering.pdf';

/**
 * Inline PDF viewers are unreliable on phones — they often render an empty box
 * instead of falling back — so narrow screens get the browser's own full-screen
 * PDF view in a new tab, which is the better preview there anyway.
 */
const useSupportsInlinePreview = () => {
  const [supported, setSupported] = useState(
    () => typeof window !== 'undefined' && window.matchMedia?.('(min-width: 768px)').matches
  );

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)');
    const onChange = (event) => setSupported(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return supported;
};

const ResumeDialog = ({ open, onClose }) => {
  const dialogRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      // showModal() doesn't lock the page behind it.
      document.documentElement.style.overflow = 'hidden';
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  // Escape fires `cancel`; the backdrop click is handled below.
  const handleClose = useCallback(() => {
    setLoaded(false);
    onClose();
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="resume-dialog-title"
      onClose={handleClose}
      onCancel={handleClose}
      onClick={(event) => {
        // Clicks that land on the dialog element itself are backdrop clicks.
        if (event.target === dialogRef.current) handleClose();
      }}
      className="w-[min(60rem,92vw)] max-w-none rounded-card border border-line bg-raised p-0
                 text-ink shadow-pop backdrop:bg-black/60 backdrop:backdrop-blur-sm
                 open:animate-fade-in"
    >
      {open && (
        <div className="flex h-[min(85vh,52rem)] flex-col">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface px-4 py-3 sm:px-5">
            <h2 id="resume-dialog-title" className="flex items-center gap-2.5 text-sm font-semibold">
              <Icon name="document" className="h-4 w-4 shrink-0 text-brand" />
              Résumé
              <span className="font-mono text-[0.68rem] font-normal uppercase tracking-wider text-faint">
                Andrew Wan
              </span>
            </h2>

            <div className="flex items-center gap-2">
              <Button
                href={RESUME_HREF}
                download={RESUME_FILENAME}
                variant="primary"
                size="sm"
                icon={<Icon name="download" className="h-4 w-4" />}
              >
                Download
              </Button>
              <Button
                href={RESUME_HREF}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={<Icon name="external" className="h-4 w-4" />}
              >
                <span className="hidden sm:inline">New tab</span>
                <span className="sm:hidden">Open</span>
              </Button>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close résumé preview"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line
                           text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </header>

          <div className="relative flex-1 bg-surface">
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-faint">
                <span
                  aria-hidden="true"
                  className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand"
                />
                <p className="font-mono text-xs uppercase tracking-wider">Loading résumé…</p>
              </div>
            )}
            <object
              data={`${RESUME_HREF}#view=FitH`}
              type="application/pdf"
              title="Résumé preview"
              onLoad={() => setLoaded(true)}
              className="h-full w-full"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <Icon name="document" className="h-8 w-8 text-faint" />
                <p className="max-w-sm text-sm text-muted">
                  Your browser can&apos;t display this PDF inline.
                </p>
                <a
                  href={RESUME_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm"
                >
                  Open the résumé in a new tab
                  <Icon name="external" className="h-4 w-4" />
                </a>
              </div>
            </object>
          </div>
        </div>
      )}
    </dialog>
  );
};

/**
 * Résumé call to action. Previews the PDF before committing the visitor to a
 * download: a modal preview on wide screens, the browser's own PDF view on
 * narrow ones. The download stays one click away in both cases.
 */
const ResumeButton = ({
  children = 'View résumé',
  variant = 'secondary',
  size = 'md',
  className = '',
  onActivate,
}) => {
  const canPreviewInline = useSupportsInlinePreview();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleClose = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  const icon = <Icon name="document" className="h-4 w-4" />;

  if (!canPreviewInline) {
    return (
      <Button
        href={RESUME_HREF}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        size={size}
        className={className}
        icon={icon}
        onClick={onActivate}
      >
        {children}
      </Button>
    );
  }

  return (
    <>
      <Button
        ref={triggerRef}
        variant={variant}
        size={size}
        className={className}
        icon={icon}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          onActivate?.();
          setOpen(true);
        }}
      >
        {children}
      </Button>
      <ResumeDialog open={open} onClose={handleClose} />
    </>
  );
};

export default ResumeButton;
