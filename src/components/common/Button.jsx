import { Link } from 'react-router-dom';

const base =
  'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium ' +
  'transition-[background-color,border-color,color,box-shadow,transform] duration-200 ' +
  'active:translate-y-px disabled:pointer-events-none disabled:opacity-50 ' +
  'disabled:active:translate-y-0 select-none';

const variants = {
  primary:
    'bg-brand text-brand-ink shadow-sm hover:bg-brand-strong hover:shadow-pop',
  secondary:
    'border border-line-strong bg-raised text-ink hover:border-brand hover:text-brand',
  ghost:
    'text-muted hover:bg-surface hover:text-ink',
  outline:
    'border border-brand/50 text-brand hover:bg-brand hover:text-brand-ink hover:border-brand',
};

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-6 py-3 text-base',
};

const Spinner = () => (
  <svg
    className="h-4 w-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    <path className="opacity-90" fill="currentColor" d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2Z" />
  </svg>
);

/**
 * Polymorphic button. Renders a router <Link> when `to` is set, an <a> when
 * `href` is set, and a native <button> otherwise.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  loading = false,
  disabled = false,
  icon = null,
  iconRight = null,
  ...props
}) => {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;

  const content = (
    <>
      {loading ? <Spinner /> : icon}
      <span>{children}</span>
      {!loading && iconRight}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
