import { useEffect, useState } from 'react';
import { Moon, Sun, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark for mystical theme
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode for The Forgotten Trial
    const savedTheme = localStorage.getItem('forgotten-trial-theme');
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : true; // Default to dark
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('forgotten-trial-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('forgotten-trial-theme', 'light');
    }

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={`relative overflow-hidden group bg-ancient-stone/80 backdrop-blur-md border border-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-300 w-10 h-10 rounded-full ${
          isAnimating ? 'animate-pulse' : ''
        }`}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <div className="relative">
          {isDark ? (
            <Moon className="h-5 w-5 text-ethereal-gold transition-transform duration-300 group-hover:rotate-12" />
          ) : (
            <Sun className="h-5 w-5 text-ethereal-gold transition-transform duration-300 group-hover:rotate-180" />
          )}
          
          {/* Mystical sparkles */}
          <div className="absolute -top-1 -right-1">
            <Sparkles className="h-2 w-2 text-verdant-glyph animate-pulse" />
          </div>
          <div className="absolute -bottom-1 -left-1">
            <Zap className="h-2 w-2 text-ember-flame animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ethereal-gold/0 via-ethereal-gold/10 to-ethereal-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
      </Button>
    </div>
  );
};

export default ThemeToggle;