
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Gamepad2, Users, Heart } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { 
      label: 'Home', 
      href: '/', 
      icon: Home,
      type: 'link' as const
    },
    { 
      label: 'About', 
      href: '/about', 
      icon: Info,
      type: 'link' as const
    },
    { 
      label: 'Features', 
      href: '/features', 
      icon: Gamepad2,
      type: 'link' as const
    },
    { 
      label: 'Characters', 
      href: '/characters', 
      icon: Users,
      type: 'link' as const
    },
    { 
      label: 'Support', 
      href: '/support', 
      icon: Heart,
      type: 'link' as const
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-mystic-blue/95 backdrop-blur-md border-b border-ethereal-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-ethereal-gold to-ember-flame rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg">⚔️</span>
            </div>
            <span className="text-ethereal-gold font-cinzel text-xl group-hover:text-ember-flame transition-colors">
              The Forgotten Trial
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-ethereal-gold transition-colors duration-200 group"
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-citizen">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ethereal-gold hover:text-ember-flame transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-mystic-blue/95 backdrop-blur-md border-t border-ethereal-gold/20 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-ethereal-gold transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-ethereal-gold/10"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-citizen">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
