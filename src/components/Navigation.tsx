
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scroll, Users, Gamepad2, Heart, MessageCircle, Info, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Scroll },
    { name: "About", path: "/about", icon: Info },
    { name: "Features", path: "/features", icon: Zap },
    { name: "Characters", path: "/characters", icon: Users },
    { name: "Demo", path: "/demo", icon: Gamepad2 },
    { name: "Support", path: "/support", icon: Heart },
    { name: "Discord", path: "https://discord.gg/knfKP9qxtM", icon: MessageCircle, external: true }
  ];

  const handleNavClick = (path: string, external?: boolean) => {
    if (external) {
      window.open(path, '_blank', 'noopener,noreferrer');
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-mystic-blue/95 via-ancient-stone/90 to-mystic-blue/95 backdrop-blur-md border-b border-ethereal-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-ethereal-gold to-ember-flame rounded-lg flex items-center justify-center">
              <Scroll className="w-5 h-5 text-white" />
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
                    key={item.name}
                    onClick={() => handleNavClick(item.path, item.external)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium ${
                      isActive 
                        ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                        : 'text-gray-100 hover:text-ethereal-gold hover:bg-ethereal-gold/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <span className="text-xs">↗</span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium ${
                    isActive 
                      ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                      : 'text-gray-100 hover:text-ethereal-gold hover:bg-ethereal-gold/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden text-ethereal-gold hover:bg-ethereal-gold/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-ethereal-gold/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                if (item.external) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.path, item.external)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium text-left ${
                        isActive 
                          ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                          : 'text-gray-100 hover:text-ethereal-gold hover:bg-ethereal-gold/10'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <span className="text-xs">↗</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 font-citizen text-sm font-medium ${
                      isActive 
                        ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                        : 'text-gray-100 hover:text-ethereal-gold hover:bg-ethereal-gold/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
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
