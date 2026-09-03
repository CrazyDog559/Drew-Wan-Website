import { Link } from 'react-router-dom';
import Icon from '../common/Icon';
import Button from '../common/Button';
import ResumeButton from '../common/ResumeButton';

const socials = [
  { href: 'https://github.com/CrazyDog559', label: 'GitHub', icon: 'github' },
  { href: 'https://www.linkedin.com/in/drew-wan/', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'mailto:drewkeithwan@gmail.com', label: 'Email', icon: 'mail' },
];

const siteLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/projects/fiji', label: 'Fiji Mission Trip' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#experience', label: 'Experience' },
];

const Footer = () => (
  <footer className="mt-auto border-t border-line bg-surface">
    {/* Contact call-to-action */}
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="blueprint-grid mask-radial pointer-events-none absolute inset-0"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-24">
        <p className="eyebrow mb-4 flex items-center justify-center gap-2.5">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-brand/60" />
          Say hello
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Open to internship and full-time opportunities. The fastest way to reach me is email —
          I read everything.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href="mailto:drewkeithwan@gmail.com"
            variant="primary"
            size="lg"
            icon={<Icon name="mail" className="h-4 w-4" />}
          >
            drewkeithwan@gmail.com
          </Button>
          <ResumeButton variant="secondary" size="lg">
            View résumé
          </ResumeButton>
        </div>
      </div>
    </section>

    {/* Footer meta */}
    <div className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-xs">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/assets/Logo/logo-256.png"
              alt=""
              width="256"
              height="256"
              loading="lazy"
              decoding="async"
              className="h-9 w-auto"
            />
            <span className="text-sm font-semibold tracking-tight">Andrew Wan</span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Computer engineering, hardware-meets-software projects, and the write-ups that go with them.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 lg:grid-cols-2">
            {siteLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-muted transition-colors hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">Elsewhere</h2>
          <ul className="flex gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line
                             text-muted transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon name={social.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
          <p className="font-mono text-xs text-faint">© {new Date().getFullYear()} Andrew Wan</p>
          <p className="font-mono text-xs text-faint">Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
