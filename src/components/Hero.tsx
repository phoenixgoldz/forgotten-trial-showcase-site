
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-mystic-blue via-luminous-azure/30 to-ancient-stone overflow-hidden">
      {/* Improved Background Image Display */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png" 
          alt="The Forgotten Trial Banner"
          className="w-full h-full object-cover object-center opacity-80"
          style={{ 
            filter: 'brightness(0.7) contrast(1.1)',
            objectPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-blue/90 via-mystic-blue/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-mystic-blue/50 to-ancient-stone/30"></div>
        {/* Additional atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mystic-blue/60"></div>
      </div>
      
      {/* Enhanced Floating Particles with better distribution */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
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
        {Array.from({ length: 20 }).map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-verdant-glyph opacity-40 animate-pulse"
            size={8 + Math.random() * 8}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        {/* Add some larger glowing orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-20 blur-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'var(--ethereal-gold)' : 'var(--verdant-glyph)'}, transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center px-6 py-3 rounded-full bg-luminous-azure/20 border border-ethereal-gold/40 text-ethereal-gold text-sm font-medium backdrop-blur-md glass-effect hover:bg-luminous-azure/30 hover:border-ethereal-gold/60 transition-all duration-300 hover-scale">
            <Play className="w-4 h-4 mr-2 animate-pulse" />
            Now Live on Kickstarter
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
          The <span className="gradient-text animate-glow">Forgotten</span> Trial
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 mb-4 animate-fade-in font-light drop-shadow-lg" style={{ animationDelay: "0.2s" }}>
          A tactical fantasy RPG where every memory is a clue—and every playthrough is a new mystery.
        </p>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed drop-shadow-md" style={{ animationDelay: "0.4s" }}>
          Awaken in a cursed dungeon with no memory. Discover your identity through tactical combat, 
          procedural exploration, and hand-crafted storytelling that adapts to your choices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-8" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold px-12 py-5 text-lg rounded-full button-shine hover-scale shadow-xl hover:shadow-verdant-glyph/30 border border-verdant-glyph/20 hover:border-verdant-glyph/40 transition-all duration-300"
            onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
          >
            🎮 Back on Kickstarter
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-ember-flame to-ethereal-gold hover:from-ember-flame/90 hover:to-ethereal-gold/90 text-white font-semibold px-12 py-5 text-lg rounded-full button-shine hover-scale shadow-xl hover:shadow-ember-flame/30 border border-ember-flame/20 hover:border-ember-flame/40 transition-all duration-300"
            onClick={() => window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank')}
          >
            ☕ Support on Ko-fi
          </Button>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-ethereal-gold/60 text-ethereal-gold hover:bg-ethereal-gold/15 hover:border-ethereal-gold px-10 py-4 text-lg rounded-full backdrop-blur-md glass-effect hover-scale transition-all duration-300 shadow-lg hover:shadow-ethereal-gold/20"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover the Mystery <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="h-6 w-6 text-ethereal-gold/80 animate-pulse drop-shadow-md" />
          <div className="w-1 h-8 bg-gradient-to-b from-ethereal-gold/70 to-transparent rounded-full shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
