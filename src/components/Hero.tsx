
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Forgotten</span> Trial
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A mysterious fantasy RPG where every playthrough is a unique adventure
        </p>
        
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Awaken in a cursed dungeon with no memory. Discover your identity through tactical combat, 
          procedural exploration, and hand-crafted storytelling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-black font-semibold px-8 py-3 text-lg hover-scale"
            onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
          >
            Back on Kickstarter 🚀
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-400 text-purple-300 hover:bg-purple-900/50 px-8 py-3 text-lg hover-scale"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
