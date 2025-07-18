
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star, Heart, Users, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GAME_ASSETS } from "@/utils/assetPaths";

const Hero = () => {
  const navigate = useNavigate();

  const handleKickstarterClick = () => {
    // Analytics tracking in production would go here
    window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank', 'noopener,noreferrer');
  };

  const handleKofiClick = () => {
    // Analytics tracking in production would go here
    window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = () => {
    // Navigation tracking in production would go here
    navigate('/demo');
  };

  const handleScrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Features section not found, scrolling to about section instead');
      const aboutElement = document.querySelector('[data-section="about"]');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-mystic-blue overflow-hidden">
      {/* Clean gradient background without image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-blue/90 via-mystic-blue/50 to-mystic-blue/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-blue/60 via-transparent to-ancient-stone/40"></div>
      </div>
      
      {/* Atmospheric particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`hero-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold rounded-full animate-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Streamlined Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Live status badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-black/60 to-black/50 border-2 border-ethereal-gold/70 text-ethereal-gold font-bold backdrop-blur-md hover:bg-gradient-to-r hover:from-black/70 hover:to-black/60 hover:border-ethereal-gold transition-all duration-300 font-citizen shadow-lg">
                <div className="w-2 h-2 bg-ember-flame rounded-full animate-pulse mr-2"></div>
                <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                Live on Kickstarter
              </span>
            </div>

            {/* Title section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-3">
                <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                  The <span className="text-transparent bg-gradient-to-r from-ethereal-gold via-ember-flame to-ethereal-gold bg-clip-text">Forgotten</span> Trial
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-ethereal-gold/80">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-citizen font-medium">A Tactical Fantasy RPG</span>
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl font-citizen font-medium">
                Where every <span className="text-ethereal-gold font-bold">memory is a clue</span>—and every playthrough is a <span className="text-verdant-glyph font-bold">new mystery</span>.
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="hero" 
                variant="primary"
                onClick={handleKickstarterClick}
                className="font-citizen min-w-[260px] py-5 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 border-2 border-ethereal-gold hover:border-ethereal-gold/90 shadow-xl shadow-ethereal-gold/40 hover:shadow-ethereal-gold/60 transform hover:scale-105 transition-all duration-300"
                aria-label="Support The Forgotten Trial on Kickstarter"
              >
                <Heart className="w-5 h-5 mr-2" />
                🎮 Back on Kickstarter
              </Button>
              
              <Button 
                size="hero" 
                variant="secondary_trial"
                onClick={handleKofiClick}
                className="font-citizen min-w-[220px] py-5 bg-gradient-to-r from-ember-flame to-ember-flame/80 text-white hover:from-ember-flame/90 hover:to-ember-flame/70 border-2 border-ember-flame hover:border-ember-flame/90 shadow-xl shadow-ember-flame/40 hover:shadow-ember-flame/60 transform hover:scale-105 transition-all duration-300"
                aria-label="Support development on Ko-fi"
              >
                <Users className="w-5 h-5 mr-2" />
                ☕ Support on Ko-fi
              </Button>
            </div>

            {/* Discovery and Demo buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                variant="outline" 
                size="story" 
                onClick={handleScrollToFeatures}
                className="font-citizen bg-transparent border-2 border-ethereal-gold text-ethereal-gold hover:bg-ethereal-gold hover:text-mystic-blue transition-all duration-300 shadow-lg shadow-ethereal-gold/20 hover:shadow-ethereal-gold/40 px-6 py-3"
                aria-label="Discover more about the game"
              >
                <Star className="mr-2 h-5 w-5" />
                Discover the Mystery 
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>

              <Button 
                variant="outline" 
                size="story" 
                onClick={handleDemoClick}
                className="font-citizen bg-transparent border-2 border-verdant-glyph text-verdant-glyph hover:bg-verdant-glyph hover:text-white transition-all duration-300 shadow-lg shadow-verdant-glyph/20 hover:shadow-verdant-glyph/40 px-6 py-3"
                aria-label="Try the interactive demo"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Try the Demo
              </Button>
            </div>
          </div>

          {/* Right side - Game Poster with Phoenix Gold Studios logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-ethereal-gold/20 via-luminous-azure/20 to-verdant-glyph/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-ancient-stone/20 to-mystic-blue/20 rounded-2xl p-2 backdrop-blur-sm border border-ethereal-gold/30 shadow-xl group-hover:border-ethereal-gold/50 transition-all duration-300">
                <img
                  src={GAME_ASSETS.images.titlePoster}
                  alt="The Forgotten Trial - Featuring the four main characters: Solari the Sunweaver, Tarrin the Stormblade, Wisp the Chronobard, and Kael the Runic Warden"
                  className="w-full max-w-lg h-auto rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                
                <div className="absolute bottom-3 left-3">
                  <img
                    src={GAME_ASSETS.images.companyLogo}
                    alt="Phoenix Gold Studios"
                    className="w-16 h-16 opacity-90 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-luminous-azure rounded-full animate-pulse shadow-lg border border-white/20"></div>
                  <div className="w-3 h-3 bg-ember-flame rounded-full animate-pulse shadow-lg border border-white/20" style={{ animationDelay: "0.5s" }}></div>
                  <div className="w-3 h-3 bg-ethereal-gold rounded-full animate-pulse shadow-lg border border-white/20" style={{ animationDelay: "1s" }}></div>
                  <div className="w-3 h-3 bg-verdant-glyph rounded-full animate-pulse shadow-lg border border-white/20" style={{ animationDelay: "1.5s" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-ethereal-gold font-citizen text-xs font-medium">Scroll to explore</p>
          <ArrowDown className="h-6 w-6 text-ethereal-gold/80 animate-pulse" />
          <div className="w-px h-6 bg-gradient-to-b from-ethereal-gold/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
