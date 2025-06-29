
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scroll, Users, Gamepad2, Heart, MessageCircle, Info, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', name: "Home", path: "/", icon: Scroll },
    { id: 'about', name: "About", path: "/about", icon: Info },
    { id: 'features', name: "Features", path: "/features", icon: Zap },
    { id: 'characters', name: "Characters", path: "/characters", icon: Users },
    { id: 'demo', name: "Demo", path: "/demo", icon: Gamepad2 },
    { id: 'support', name: "Support", path: "/support", icon: Heart },
    { id: 'discord', name: "Discord", path: "https://discord.gg/knfKP9qxtM", icon: MessageCircle, external: true }
  ];

  const handleNavClick = (path: string, external?: boolean) => {
    try {
      if (external) {
        console.log('Opening external link:', path);
        window.open(path, '_blank', 'noopener,noreferrer');
      }
      setIsOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-mystic-blue/95 via-ancient-stone/90 to-mystic-blue/95 backdrop-blur-md border-b border-ethereal-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with solid ethereal-gold color */}
          <Link 
            to="/" 
            onClick={handleLogoClick} 
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50 rounded-lg p-1"
            aria-label="The Forgotten Trial - Go to homepage"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-ethereal-gold to-ember-flame rounded-lg flex items-center justify-center">
              <Scroll className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-cinzel text-xl font-bold text-ethereal-gold">The Forgotten Trial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              if (item.external) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.path, item.external)}
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium hover:text-ethereal-gold hover:bg-ethereal-gold/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50"
                    aria-label={`${item.name} - opens in new tab`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.name}</span>
                    <span className="text-xs" aria-hidden="true">↗</span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50 ${
                    isActive 
                      ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                      : 'text-gray-100 hover:text-ethereal-gold hover:bg-ethereal-gold/10'
                  }`}
                  aria-label={`Navigate to ${item.name} page`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-ethereal-gold hover:bg-ethereal-gold/10 focus:ring-2 focus:ring-ethereal-gold/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-navigation"
            className="md:hidden py-4 border-t border-ethereal-gold/20"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                if (item.external) {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.path, item.external)}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium text-left hover:text-ethereal-gold hover:bg-ethereal-gold/10 text-gray-100 focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50"
                      aria-label={`${item.name} - opens in new tab`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                      <span>{item.name}</span>
                      <span className="text-xs" aria-hidden="true">↗</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50 ${
                      isActive 
                        ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                        : 'text-gray-100 hover:text-ethereal-gold hover:bg-ethereal-gold/10'
                    }`}
                    aria-label={`Navigate to ${item.name} page`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{item.name}</span>
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
