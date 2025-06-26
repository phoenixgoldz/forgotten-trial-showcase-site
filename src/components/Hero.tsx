
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";

const Hero = () => {
  const handleKickstarterClick = () => {
    console.log('Redirecting to Kickstarter');
    window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank', 'noopener,noreferrer');
  };

  const handleKofiClick = () => {
    console.log('Redirecting to Ko-fi');
    window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank', 'noopener,noreferrer');
  };

  const handleScrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Features section not found, scrolling to mystery quotes instead');
      const mysteryElement = document.querySelector('[data-section="mystery"]');
      if (mysteryElement) {
        mysteryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue overflow-hidden">
      {/* Background Image Display with proper loading */}
      <div className="absolute inset-0">
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src="/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png" 
            alt="The Forgotten Trial - Mystical dungeon entrance with ancient stone archways and ethereal lighting, setting the atmospheric tone for a fantasy RPG adventure"
            className="max-w-[50%] h-auto object-contain opacity-70"
            style={{ 
              filter: 'brightness(0.7) contrast(1.3) saturate(1.2)',
            }}
            loading="eager"
            onError={(e) => {
              console.warn('Hero background image failed to load');
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-blue/95 via-mystic-blue/60 to-mystic-blue/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-blue/70 via-transparent to-ancient-stone/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mystic-blue/30 to-mystic-blue/80"></div>
      </div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`hero-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold rounded-full animate-float opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <Star
            key={`hero-star-${i}`}
            className="absolute text-verdant-glyph opacity-50 animate-pulse"
            size={6 + Math.random() * 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`hero-orb-${i}`}
            className="absolute rounded-full opacity-25 blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgb(212, 181, 106)' : 
                i % 3 === 1 ? 'rgb(126, 200, 80)' : 
                'rgb(233, 127, 60)'
              }, transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-black/50 border border-ethereal-gold/70 text-ethereal-gold text-sm font-medium backdrop-blur-md glass-effect hover:bg-black/60 hover:border-ethereal-gold/90 transition-all duration-300 font-citizen">
            <Play className="w-4 h-4 mr-2 animate-pulse" aria-hidden="true" />
            Now Live on Kickstarter
          </span>
        </div>

        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in leading-tight text-center drop-shadow-2xl" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9)' }}>
          The <span className="gradient-text">Forgotten</span> Trial
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white mb-6 animate-fade-in font-light leading-tight max-w-5xl mx-auto text-center font-citizen" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', animationDelay: "0.2s" }}>
          A tactical fantasy RPG where every memory is a clue—and every playthrough is a new mystery.
        </p>
        
        <p className="text-lg md:text-xl text-gray-100 mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed text-center font-citizen" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)', animationDelay: "0.4s" }}>
          Awaken in a cursed dungeon with no memory. Discover your identity through tactical combat, 
          procedural exploration, and hand-crafted storytelling that adapts to your choices.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-12" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="hero" 
            variant="verdant"
            onClick={handleKickstarterClick}
            className="font-citizen min-w-[250px]"
            aria-label="Support The Forgotten Trial on Kickstarter - opens in new tab"
          >
            🎮 Back on Kickstarter
          </Button>
          
          <Button 
            size="hero" 
            variant="ember"
            onClick={handleKofiClick}
            className="font-citizen min-w-[200px]"
            aria-label="Support development on Ko-fi - opens in new tab"
          >
            ☕ Support on Ko-fi
          </Button>
        </div>

        <div className="animate-fade-in text-center" style={{ animationDelay: "0.8s" }}>
          <Button 
            variant="ethereal" 
            size="story" 
            onClick={handleScrollToFeatures}
            className="font-citizen"
            aria-label="Scroll down to discover more about the game"
          >
            Discover the Mystery <ArrowDown className="ml-2 h-6 w-6 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="h-6 w-6 text-ethereal-gold/80 animate-pulse drop-shadow-md" />
          <div className="w-1 h-6 bg-gradient-to-b from-ethereal-gold/70 to-transparent rounded-full shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
