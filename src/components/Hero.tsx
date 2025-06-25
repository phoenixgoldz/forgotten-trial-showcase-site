
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Background Image with improved overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/6f040610-e708-4437-889b-206c9c9c9d50.png" 
          alt="The Forgotten Trial Banner"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-purple-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-pink-900/30"></div>
      </div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-yellow-300 opacity-60 animate-pulse"
            size={12}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium backdrop-blur-sm">
            <Play className="w-4 h-4 mr-2" />
            Now Live on Kickstarter
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in leading-tight">
          The <span className="gradient-text animate-glow">Forgotten</span> Trial
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-200 mb-4 animate-fade-in font-light" style={{ animationDelay: "0.2s" }}>
          A tactical fantasy RPG where every memory is a clue—and every playthrough is a new mystery.
        </p>
        
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.4s" }}>
          Awaken in a cursed dungeon with no memory. Discover your identity through tactical combat, 
          procedural exploration, and hand-crafted storytelling that adapts to your choices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-8" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-10 py-4 text-lg rounded-full button-shine hover-scale shadow-lg hover:shadow-emerald-500/25"
            onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
          >
            🎮 Back on Kickstarter
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold px-10 py-4 text-lg rounded-full button-shine hover-scale shadow-lg hover:shadow-orange-500/25"
            onClick={() => window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank')}
          >
            ☕ Support on Ko-fi
          </Button>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-amber-400/50 text-amber-300 hover:bg-amber-400/10 hover:border-amber-400 px-8 py-3 text-lg rounded-full backdrop-blur-sm glass-effect hover-scale transition-all duration-300"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover the Mystery <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ArrowDown className="h-6 w-6 text-amber-300/80 animate-pulse" />
          <div className="w-1 h-8 bg-gradient-to-b from-amber-300/60 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
