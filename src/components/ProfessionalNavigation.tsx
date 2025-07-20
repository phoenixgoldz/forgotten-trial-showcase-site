import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { GAME_ASSETS } from "@/utils/assetPaths";

const ProfessionalNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Characters', path: '/characters' },
    { name: 'Features', path: '/features' },
    { name: 'Demo', path: '/demo', badge: 'Try Now' },
    { name: 'About', path: '/about' }
  ];

  const handleExternalLink = (url: string, platform: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-mystic-blue/95 backdrop-blur-md border-b border-ethereal-gold/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Studio Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src={GAME_ASSETS.images.companyLogo} 
              alt="Phoenix Gold Studios" 
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <span className="studio-branding text-ethereal-gold text-lg font-bold">
                Phoenix Gold Studios
              </span>
              <span className="text-xs text-slate-400 leading-tight">
                The Forgotten Trial
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 relative group ${
                  isActive(item.path)
                    ? 'text-ethereal-gold bg-ethereal-gold/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10 font-medium">{item.name}</span>
                {item.badge && (
                  <Badge 
                    variant="secondary" 
                    className="ml-2 bg-verdant-glyph/20 text-verdant-glyph text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-ethereal-gold/10 rounded-lg"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleExternalLink('https://ko-fi.com/phoenixgoldzstudios', 'Ko-fi')}
              className="bg-ember-flame/10 border-ember-flame/30 text-ember-flame hover:bg-ember-flame hover:text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ko-fi
            </Button>
            
            <Button
              size="sm"
              onClick={() => handleExternalLink('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', 'Kickstarter')}
              className="bg-ethereal-gold hover:bg-ethereal-gold/90 text-mystic-blue font-bold"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Kickstarter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-ethereal-gold hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-ethereal-gold/20 bg-mystic-blue/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-ethereal-gold bg-ethereal-gold/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge 
                        variant="secondary" 
                        className="bg-verdant-glyph/20 text-verdant-glyph text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-ethereal-gold/20 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    handleExternalLink('https://ko-fi.com/phoenixgoldzstudios', 'Ko-fi');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-ember-flame/10 border-ember-flame/30 text-ember-flame hover:bg-ember-flame hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Support on Ko-fi
                </Button>
                
                <Button
                  size="sm"
                  onClick={() => {
                    handleExternalLink('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', 'Kickstarter');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-ethereal-gold hover:bg-ethereal-gold/90 text-mystic-blue font-bold"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join Kickstarter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ProfessionalNavigation;