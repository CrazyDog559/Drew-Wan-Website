import Button from '../components/common/Button';
import Icon from '../components/common/Icon';

const NotFound = () => (
  <div className="relative flex min-h-[60vh] items-center overflow-hidden bg-canvas">
    <div aria-hidden="true" className="blueprint-grid mask-radial pointer-events-none absolute inset-0" />
    <div className="relative mx-auto max-w-xl px-5 py-20 text-center sm:px-6">
      <p className="eyebrow mb-4 flex items-center justify-center gap-2.5">
        <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
        Error 404
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
        The link may be out of date, or the page may have moved. Everything else is still where you
        left it.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button to="/" variant="primary" icon={<Icon name="arrowLeft" className="h-4 w-4" />}>
          Back home
        </Button>
        <Button
          to="/projects"
          variant="secondary"
          iconRight={<Icon name="arrowRight" className="h-4 w-4" />}
        >
          Browse projects
        </Button>
      </div>
    </div>
  </div>
);

export default NotFound;
