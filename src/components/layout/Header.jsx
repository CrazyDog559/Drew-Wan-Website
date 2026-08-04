import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../common/ThemeToggle';
import useScrollSpy from '../../hooks/useScrollSpy';

const navItems = [
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'projects', label: 'Projects', to: '/#projects', routeMatch: '/projects' },
  { id: 'hobbies', label: 'Hobbies', to: '/#hobbies', routeMatch: '/hobbies' },
  { id: 'skills', label: 'Skills', to: '/#skills' },
  { id: 'experience', label: 'Experience', to: '/#experience' },
];

const contactItem = { id: 'contact', label: 'Contact', to: '#contact' };

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const activeId = useScrollSpy(
    [...navItems.map((item) => item.id), contactItem.id],
    { enabled: isHome }
  );

  const isActive = (item) => {
    if (item.routeMatch && location.pathname.startsWith(item.routeMatch)) return true;
    if (isHome) return activeId === item.id;
    return false;
  };

  const closeMenu = () => setMenuOpen(false);

  const allItems = [...navItems, contactItem];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-none dark:border-b dark:border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3" onClick={closeMenu}>
            <img
              src="/assets/Logo/logo-256.png"
              alt="Drew Wan Logo"
              width="256"
              height="256"
              loading="eager"
              decoding="async"
              className="h-10 sm:h-12 w-auto"
            />
            <span className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">Andrew Wan</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {allItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item) ? 'text-primary' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/assets/Resume/Andrew-Wan-Computer-Engineering.pdf"
              download
              className="inline-flex items-center rounded-lg border border-primary text-primary px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 p-2 shadow-sm">
            {allItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                onClick={closeMenu}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(item)
                    ? 'bg-white dark:bg-gray-700 text-primary shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/assets/Resume/Andrew-Wan-Computer-Engineering.pdf"
              download
              onClick={closeMenu}
              className="block mt-1 rounded-xl px-4 py-3 text-sm font-medium text-center border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
