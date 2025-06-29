
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
      {/* Enhanced background with subtle overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-blue/90 via-mystic-blue/50 to-mystic-blue/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-blue/60 via-transparent to-ancient-stone/40"></div>
      </div>
      
      {/* Atmospheric particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`hero-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              transform: `scale(${0.5 + Math.random() * 1.5})`
            }}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <Star
            key={`hero-star-${i}`}
            className="absolute text-verdant-glyph opacity-40 animate-pulse"
            size={8 + Math.random() * 12}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-black/60 border border-ethereal-gold/70 text-ethereal-gold text-sm font-medium backdrop-blur-md glass-effect hover:bg-black/70 hover:border-ethereal-gold/90 transition-all duration-300 font-citizen">
                <Play className="w-4 h-4 mr-2 animate-pulse" aria-hidden="true" />
                Now Live on Kickstarter
              </span>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl" style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.9)' }}>
                The <span className="text-ethereal-gold">Forgotten</span> Trial
              </h1>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-citizen" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                A tactical fantasy RPG where every memory is a clue—and every playthrough is a new mystery.
              </p>
              
              <p className="text-lg text-gray-100 leading-relaxed max-w-2xl font-citizen" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                Awaken in a cursed dungeon with no memory. Discover your identity through tactical combat, 
                procedural exploration, and hand-crafted storytelling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="hero" 
                variant="primary"
                onClick={handleKickstarterClick}
                className="font-citizen min-w-[250px] bg-ethereal-gold text-mystic-blue hover:bg-ethereal-gold/90 border-2 border-ethereal-gold hover:border-ethereal-gold/90 shadow-xl"
                aria-label="Support The Forgotten Trial on Kickstarter - opens in new tab"
              >
                🎮 Back on Kickstarter
              </Button>
              
              <Button 
                size="hero" 
                variant="secondary"
                onClick={handleKofiClick}
                className="font-citizen min-w-[200px] bg-ember-flame text-white hover:bg-ember-flame/90 border-2 border-ember-flame hover:border-ember-flame/90 shadow-xl"
                aria-label="Support development on Ko-fi - opens in new tab"
              >
                ☕ Support on Ko-fi
              </Button>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                variant="outline" 
                size="story" 
                onClick={handleScrollToFeatures}
                className="font-citizen bg-transparent border-2 border-ethereal-gold text-ethereal-gold hover:bg-ethereal-gold hover:text-mystic-blue transition-all duration-300"
                aria-label="Scroll down to discover more about the game"
              >
                Discover the Mystery <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>

          {/* Right side - Game Poster */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              {/* Poster glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-ethereal-gold/20 via-luminous-azure/20 to-verdant-glyph/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main poster image */}
              <div className="relative bg-gradient-to-br from-ancient-stone/20 to-mystic-blue/20 rounded-2xl p-2 backdrop-blur-sm border border-ethereal-gold/30 shadow-2xl">
                <img
                  src="/lovable-uploads/6a99999e-936c-4735-97d7-d896ed4d0f24.png"
                  alt="The Forgotten Trial - Featuring the four main characters: a hooded figure with glowing blue eyes, a majestic lion with an electric blue mane, a serene woman with golden details, and a stone guardian with runic inscriptions"
                  className="w-full max-w-md h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              
              {/* Character highlight dots */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-luminous-azure rounded-full animate-pulse shadow-lg"></div>
                <div className="w-3 h-3 bg-ember-flame rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.5s" }}></div>
                <div className="w-3 h-3 bg-ethereal-gold rounded-full animate-pulse shadow-lg" style={{ animationDelay: "1s" }}></div>
                <div className="w-3 h-3 bg-verdant-glyph rounded-full animate-pulse shadow-lg" style={{ animationDelay: "1.5s" }}></div>
              </div>
            </div>
          </div>
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
