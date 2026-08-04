import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/photography', label: 'Photography' },
    { to: '/hobbies', label: 'Hobbies' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
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
            <span className="text-lg sm:text-xl font-semibold text-gray-900 whitespace-nowrap">Andrew Wan</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.to) || (item.to === '/projects' && location.pathname.startsWith('/projects/'))
                    ? 'text-primary'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700"
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

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-2 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(item.to) || (item.to === '/projects' && location.pathname.startsWith('/projects/'))
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-700 hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
