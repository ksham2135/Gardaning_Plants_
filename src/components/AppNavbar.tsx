import { Link, useLocation } from 'react-router-dom';
import { Leaf, Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import SunlightToggle from './SunlightToggle';

const AppNavbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-card/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold font-display">Urban Greenery</span>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                location.pathname === '/favorites' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className="w-4 h-4" />
              Favorites
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <SunlightToggle />
            <button className="sm:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="sm:hidden pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/favorites"
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/favorites' ? 'bg-primary/10 text-primary' : 'text-muted-foreground'
              }`}
            >
              <Heart className="w-4 h-4" />
              Favorites
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
