
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star, Heart, Users } from "lucide-react";

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
      {/* Enhanced background with atmospheric effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-blue/95 via-mystic-blue/60 to-mystic-blue/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-blue/70 via-transparent to-ancient-stone/50"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(212, 181, 106, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(126, 200, 80, 0.2) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Enhanced atmospheric particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => (
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
        {Array.from({ length: 12 }, (_, i) => (
          <Star
            key={`hero-star-${i}`}
            className="absolute text-verdant-glyph opacity-50 animate-pulse"
            size={8 + Math.random() * 16}
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Content */}
          <div className="text-center lg:text-left space-y-10">
            {/* Live status badge with pulsing effect */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-black/70 to-black/60 border-2 border-ethereal-gold/80 text-ethereal-gold text-base font-bold backdrop-blur-md glass-effect hover:bg-gradient-to-r hover:from-black/80 hover:to-black/70 hover:border-ethereal-gold transition-all duration-300 font-citizen shadow-lg shadow-ethereal-gold/20">
                <div className="w-3 h-3 bg-ember-flame rounded-full animate-pulse mr-3"></div>
                <Play className="w-5 h-5 mr-3 animate-pulse" aria-hidden="true" />
                Live on Kickstarter - Join Us!
              </span>
            </div>

            {/* Enhanced title section */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-4">
                <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-2xl" style={{ textShadow: '4px 4px 16px rgba(0,0,0,0.9), 2px 2px 8px rgba(212,181,106,0.3)' }}>
                  The <span className="text-transparent bg-gradient-to-r from-ethereal-gold via-ember-flame to-ethereal-gold bg-clip-text animate-pulse">Forgotten</span> Trial
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-ethereal-gold/80">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-citizen text-lg font-medium">A Tactical Fantasy RPG</span>
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              
              <p className="text-2xl md:text-3xl text-white leading-relaxed max-w-2xl font-citizen font-medium" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                Where every <span className="text-ethereal-gold font-bold">memory is a clue</span>—and every playthrough is a <span className="text-verdant-glyph font-bold">new mystery</span>.
              </p>
              
              <p className="text-xl text-gray-100 leading-relaxed max-w-2xl font-citizen" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                ✨ Awaken in a cursed dungeon with no memory<br/>
                ⚔️ Master tactical combat with unique abilities<br/>
                📜 Discover your identity through hand-crafted stories<br/>
                🎭 Every choice shapes your party's trust in you
              </p>
            </div>

            {/* Enhanced call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="hero" 
                variant="primary"
                onClick={handleKickstarterClick}
                className="font-citizen min-w-[280px] text-xl py-6 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 border-3 border-ethereal-gold hover:border-ethereal-gold/90 shadow-2xl shadow-ethereal-gold/40 hover:shadow-ethereal-gold/60 transform hover:scale-105 transition-all duration-300"
                aria-label="Support The Forgotten Trial on Kickstarter - opens in new tab"
              >
                <Heart className="w-6 h-6 mr-3" />
                🎮 Back on Kickstarter
              </Button>
              
              <Button 
                size="hero" 
                variant="secondary_trial"
                onClick={handleKofiClick}
                className="font-citizen min-w-[240px] text-xl py-6 bg-gradient-to-r from-ember-flame to-ember-flame/80 text-white hover:from-ember-flame/90 hover:to-ember-flame/70 border-3 border-ember-flame hover:border-ember-flame/90 shadow-2xl shadow-ember-flame/40 hover:shadow-ember-flame/60 transform hover:scale-105 transition-all duration-300"
                aria-label="Support development on Ko-fi - opens in new tab"
              >
                <Users className="w-6 h-6 mr-3" />
                ☕ Support on Ko-fi
              </Button>
            </div>

            {/* Enhanced discovery button */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                variant="outline" 
                size="story" 
                onClick={handleScrollToFeatures}
                className="font-citizen text-lg bg-transparent border-3 border-ethereal-gold text-ethereal-gold hover:bg-ethereal-gold hover:text-mystic-blue transition-all duration-300 shadow-lg shadow-ethereal-gold/20 hover:shadow-ethereal-gold/40 px-8 py-4"
                aria-label="Scroll down to discover more about the game"
              >
                <Star className="mr-3 h-6 w-6 animate-pulse" />
                Discover the Mystery 
                <ArrowDown className="ml-3 h-6 w-6 animate-bounce" />
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced Game Poster */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              {/* Enhanced poster glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-ethereal-gold/30 via-luminous-azure/30 to-verdant-glyph/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              {/* Main poster container with enhanced styling */}
              <div className="relative bg-gradient-to-br from-ancient-stone/30 to-mystic-blue/30 rounded-3xl p-3 backdrop-blur-sm border-2 border-ethereal-gold/40 shadow-2xl group-hover:border-ethereal-gold/60 transition-all duration-500">
                <img
                  src="/lovable-uploads/6a99999e-936c-4735-97d7-d896ed4d0f24.png"
                  alt="The Forgotten Trial - Featuring the four main characters: a hooded figure with glowing blue eyes, a majestic lion with an electric blue mane, a serene woman with golden details, and a stone guardian with runic inscriptions"
                  className="w-full max-w-lg h-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Character highlight dots with enhanced animations */}
                <div className="absolute top-6 right-6 flex space-x-3">
                  <div className="w-4 h-4 bg-luminous-azure rounded-full animate-pulse shadow-lg border border-white/30" style={{ animationDuration: "2s" }}></div>
                  <div className="w-4 h-4 bg-ember-flame rounded-full animate-pulse shadow-lg border border-white/30" style={{ animationDelay: "0.5s", animationDuration: "2s" }}></div>
                  <div className="w-4 h-4 bg-ethereal-gold rounded-full animate-pulse shadow-lg border border-white/30" style={{ animationDelay: "1s", animationDuration: "2s" }}></div>
                  <div className="w-4 h-4 bg-verdant-glyph rounded-full animate-pulse shadow-lg border border-white/30" style={{ animationDelay: "1.5s", animationDuration: "2s" }}></div>
                </div>
                
                {/* Game title overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-black/80 to-black/60 rounded-xl p-4 backdrop-blur-sm border border-ethereal-gold/30">
                  <h3 className="font-cinzel text-ethereal-gold font-bold text-lg mb-2">Four Heroes. One Mystery.</h3>
                  <p className="font-citizen text-white text-sm">Discover their secrets in tactical RPG combat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="flex flex-col items-center space-y-3">
          <div className="text-center">
            <p className="text-ethereal-gold font-citizen text-sm font-medium mb-2">Scroll to explore</p>
            <ArrowDown className="h-8 w-8 text-ethereal-gold/90 animate-pulse drop-shadow-lg mx-auto" />
          </div>
          <div className="w-1 h-8 bg-gradient-to-b from-ethereal-gold/80 to-transparent rounded-full shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
