
import { Heart, ExternalLink, Coffee, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black to-ancient-stone py-16 border-t border-ancient-stone/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 181, 106, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex flex-col items-center">
            {/* PhoenixGold Game Studios Logo */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/965e98d3-fb85-40c6-9263-e357de40fd59.png" 
                alt="PhoenixGold Game Studios Logo"
                className="w-32 h-32 mx-auto animate-float"
              />
            </div>
            
            <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-2 gradient-text text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              PhoenixGold Game Studios
            </h3>
            <h4 className="font-cinzel text-xl md:text-2xl font-semibold text-ethereal-gold mb-4 text-center" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              The Forgotten Trial
            </h4>
            <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto text-center" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              A mysterious fantasy RPG crafted with passion by PhoenixGold Game Studios. 
              Follow our journey as we bring this unique adventure to life, one memory at a time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="https://ko-fi.com/phoenixgoldzstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-ember-flame hover:text-ethereal-gold transition-colors story-link text-lg group"
            >
              <Coffee className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Ko-fi Dev Blog
              <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
            </a>
            <div className="hidden sm:block w-1 h-1 bg-ancient-stone rounded-full"></div>
            <a 
              href="https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-verdant-glyph hover:text-luminous-azure transition-colors story-link text-lg group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Kickstarter Campaign
              <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
            </a>
          </div>

          <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center justify-center" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="mr-2">🎮</span>
              Designed For Everyone
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-gray-200">
              <span className="bg-ancient-stone/50 px-4 py-2 rounded-full text-sm border border-ancient-stone/50 hover:border-ethereal-gold/50 transition-colors">
                PC (Unreal Engine 5.5)
              </span>
              <span className="bg-ancient-stone/50 px-4 py-2 rounded-full text-sm border border-ancient-stone/50 hover:border-ethereal-gold/50 transition-colors">
                Full Gamepad Support
              </span>
              <span className="bg-ancient-stone/50 px-4 py-2 rounded-full text-sm border border-ancient-stone/50 hover:border-ethereal-gold/50 transition-colors">
                Accessibility Options
              </span>
              <span className="bg-ancient-stone/50 px-4 py-2 rounded-full text-sm border border-ancient-stone/50 hover:border-ethereal-gold/50 transition-colors">
                Kid-Friendly Content
              </span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-ancient-stone/50">
            <p className="text-gray-400 text-sm flex items-center justify-center text-center">
              © 2024 PhoenixGold Game Studios. All rights reserved. 
              <span className="mx-2">•</span>
              Built with 
              <Heart className="w-4 h-4 mx-1 text-ember-flame animate-pulse" />
              for RPG lovers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
