import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  ExternalLink, 
  Sparkles, 
  Castle, 
  Sword, 
  Users, 
  Gamepad2, 
  Scroll,
  Home,
  Shield,
  Zap
} from 'lucide-react';
import { GAME_ASSETS } from "@/utils/assetPaths";

const EnhancedNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: Home,
      description: 'Return to the realm' 
    },
    { 
      name: 'Characters', 
      path: '/characters', 
      icon: Users,
      description: 'Meet the heroes' 
    },
    { 
      name: 'Features', 
      path: '/features', 
      icon: Sword,
      description: 'Discover abilities' 
    },
    { 
      name: 'Demo', 
      path: '/demo', 
      icon: Gamepad2,
      badge: 'Try Now',
      description: 'Enter the trial' 
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: Scroll,
      description: 'Learn the lore' 
    }
  ];

  const handleExternalLink = (url: string, platform: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Mystical background effects */}
      <div className="fixed top-0 left-0 right-0 h-20 pointer-events-none z-40">
        <div 
          className="absolute w-2 h-2 bg-ethereal-gold/30 rounded-full animate-pulse transition-all duration-1000"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 40 + 10}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-verdant-glyph/40 rounded-full animate-float"
          style={{
            left: `${mousePosition.x / 30 + 50}px`,
            top: `${mousePosition.y / 50 + 15}px`,
            animationDelay: '0.5s',
          }}
        />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-mystic-blue/95 backdrop-blur-xl border-b border-ethereal-gold/30 shadow-2xl shadow-ethereal-gold/10' 
          : 'bg-gradient-to-b from-mystic-blue/80 via-mystic-blue/60 to-transparent backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Enhanced Studio Logo & Brand */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group relative"
            >
              <div className="relative">
                <img 
                  src={GAME_ASSETS.images.companyLogo} 
                  alt="Phoenix Gold Studios" 
                  className="w-12 h-12 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-ethereal-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="studio-branding text-ethereal-gold text-xl font-bold tracking-wide group-hover:text-glow transition-all duration-300">
                  Phoenix Gold Studios
                </span>
                <span className="text-sm text-slate-300 leading-tight font-cinzel italic group-hover:text-ethereal-gold/80 transition-colors duration-300">
                  The Forgotten Trial
                </span>
              </div>
              {/* Mystical glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ethereal-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`px-5 py-3 rounded-xl transition-all duration-300 relative group flex items-center space-x-2 ${
                        isActive(item.path)
                          ? 'text-ethereal-gold bg-ethereal-gold/15 shadow-lg shadow-ethereal-gold/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive(item.path) ? 'text-ethereal-gold' : 'text-current'} transition-colors duration-300`} />
                      <span className="relative z-10 font-medium font-citizen">{item.name}</span>
                      {item.badge && (
                        <Badge 
                          variant="secondary" 
                          className="ml-2 bg-verdant-glyph/20 text-verdant-glyph text-xs animate-pulse border border-verdant-glyph/30"
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          {item.badge}
                        </Badge>
                      )}
                      
                      {/* Enhanced active indicator */}
                      {isActive(item.path) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-ethereal-gold/20 via-ethereal-gold/10 to-ethereal-gold/20 rounded-xl border border-ethereal-gold/30"></div>
                      )}
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </Link>
                    
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-mystic-blue/95 border border-ethereal-gold/30 rounded-lg text-sm text-ethereal-gold font-citizen opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none backdrop-blur-sm shadow-xl whitespace-nowrap z-50">
                      {item.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-mystic-blue/95 border-l border-t border-ethereal-gold/30 rotate-45"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleExternalLink('https://ko-fi.com/phoenixgoldzstudios', 'Ko-fi')}
                className="bg-ember-flame/10 border-ember-flame/40 text-ember-flame hover:bg-ember-flame hover:text-white hover:shadow-lg hover:shadow-ember-flame/30 transition-all duration-300 font-citizen relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Ko-fi</span>
              </Button>
              
              <Button
                size="sm"
                onClick={() => handleExternalLink('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', 'Kickstarter')}
                className="bg-gradient-to-r from-ethereal-gold to-ethereal-gold/90 hover:from-ethereal-gold/90 hover:to-ethereal-gold text-mystic-blue font-bold hover:shadow-xl hover:shadow-ethereal-gold/40 transition-all duration-300 font-citizen relative overflow-hidden group hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Sparkles className="w-4 h-4 mr-2 relative z-10 group-hover:animate-spin" />
                <span className="relative z-10">Kickstarter</span>
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-ethereal-gold hover:text-white transition-all duration-300 relative group rounded-xl hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-ethereal-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen ? (
                <X className="w-6 h-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-ethereal-gold/30 bg-mystic-blue/98 backdrop-blur-xl rounded-b-2xl shadow-2xl shadow-ethereal-gold/10 animate-fade-in overflow-hidden">
              <div className="py-6 space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center px-6 py-4 rounded-xl mx-4 transition-all duration-300 group ${
                        isActive(item.path)
                          ? 'text-ethereal-gold bg-ethereal-gold/15 shadow-lg shadow-ethereal-gold/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mr-4 ${isActive(item.path) ? 'text-ethereal-gold' : 'text-current'} transition-colors duration-300`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium font-citizen text-lg">{item.name}</span>
                          {item.badge && (
                            <Badge 
                              variant="secondary" 
                              className="bg-verdant-glyph/20 text-verdant-glyph text-xs animate-pulse border border-verdant-glyph/30"
                            >
                              <Zap className="w-3 h-3 mr-1" />
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-400 mt-1 font-citizen">{item.description}</p>
                      </div>
                    </Link>
                  );
                })}
                
                {/* Enhanced Mobile CTA Buttons */}
                <div className="pt-6 mx-4 border-t border-ethereal-gold/30 space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleExternalLink('https://ko-fi.com/phoenixgoldzstudios', 'Ko-fi');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-ember-flame/10 border-ember-flame/40 text-ember-flame hover:bg-ember-flame hover:text-white font-citizen relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                    <span className="relative z-10">Support on Ko-fi</span>
                  </Button>
                  
                  <Button
                    size="sm"
                    onClick={() => {
                      handleExternalLink('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', 'Kickstarter');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-ethereal-gold to-ethereal-gold/90 hover:from-ethereal-gold/90 hover:to-ethereal-gold text-mystic-blue font-bold font-citizen relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Sparkles className="w-4 h-4 mr-2 relative z-10 group-hover:animate-spin" />
                    <span className="relative z-10">Join Kickstarter</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default EnhancedNavigation;