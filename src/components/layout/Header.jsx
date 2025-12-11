import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/assets/Logo/logo.png" 
              alt="Drew Wan Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-gray-900">Andrew Wan</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/projects') || location.pathname.startsWith('/projects/') 
                  ? 'text-primary' 
                  : 'text-gray-600'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/photography" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/photography') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Photography
            </Link>
            <Link 
              to="/hobbies" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/hobbies') ? 'text-primary' : 'text-gray-600'
              }`}
            >
              Hobbies
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
