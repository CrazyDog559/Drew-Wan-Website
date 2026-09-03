import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import Icon from '../common/Icon';
import useScrollSpy from '../../hooks/useScrollSpy';

const navItems = [
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'projects', label: 'Projects', to: '/#projects', routeMatch: '/projects' },
  { id: 'hobbies', label: 'Hobbies', to: '/#hobbies', routeMatch: '/hobbies' },
  { id: 'fiji', label: 'Fiji', to: '/fiji', routeMatch: '/fiji', isRoute: true },
  { id: 'skills', label: 'Skills', to: '/#skills' },
  { id: 'experience', label: 'Experience', to: '/#experience' },
  { id: 'contact', label: 'Contact', to: '/#contact' },
];

const RESUME_HREF = '/assets/Resume/Andrew-Wan-Computer-Engineering.pdf';

// Hoisted so the scroll-spy observer isn't rebuilt on every render.
const scrollSpyIds = navItems.filter((item) => !item.isRoute).map((item) => item.id);

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const isHome = location.pathname === '/';

  const activeId = useScrollSpy(scrollSpyIds, { enabled: isHome });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Escape closes the mobile menu and returns focus to the toggle.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const isActive = (item) => {
    if (item.routeMatch && location.pathname.startsWith(item.routeMatch)) return true;
    if (item.isRoute) return false;
    return isHome && activeId === item.id;
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? 'border-line bg-canvas/85 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70'
          : 'border-transparent bg-canvas'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50
                   focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm
                   focus:font-medium focus:text-brand-ink"
      >
        Skip to content
      </a>

      <nav aria-label="Primary" className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 rounded-lg"
            aria-label="Andrew Wan — home"
          >
            <img
              src="/assets/Logo/logo-256.png"
              alt=""
              width="256"
              height="256"
              loading="eager"
              decoding="async"
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-10"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[0.95rem] font-semibold tracking-tight sm:text-base">Andrew Wan</span>
              <span className="mt-0.5 hidden font-mono text-[0.65rem] uppercase tracking-[0.16em] text-faint sm:block">
                Computer Engineer
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                aria-current={isActive(item) ? 'page' : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item) ? 'text-brand' : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand transition-transform duration-300 ${
                    isActive(item) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={RESUME_HREF}
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-3.5 py-2
                         text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Icon name="download" className="h-4 w-4" />
              Résumé
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line
                         text-ink transition-colors hover:border-brand hover:text-brand"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    menuOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    menuOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="animate-fade-in pb-4 lg:hidden"
        >
          <ul className="grid gap-1 rounded-card border border-line bg-raised p-2 shadow-card">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={closeMenu}
                  aria-current={isActive(item) ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item)
                      ? 'bg-brand/10 text-brand'
                      : 'text-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {item.label}
                  <Icon name="arrowRight" className="h-3.5 w-3.5 opacity-50" />
                </Link>
              </li>
            ))}
            <li>
              <a
                href={RESUME_HREF}
                download
                onClick={closeMenu}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg border border-brand/50
                           px-4 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-brand-ink"
              >
                <Icon name="download" className="h-4 w-4" />
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
