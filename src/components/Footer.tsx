
import { Heart, ExternalLink, Coffee, Zap, Sparkles, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-ancient-stone/20 to-mystic-blue relative overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Mystical grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(212, 181, 106, 0.4) 1px, transparent 0),
              linear-gradient(45deg, transparent 25%, rgba(212, 181, 106, 0.1) 25%, rgba(212, 181, 106, 0.1) 50%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Studio Logo Section */}
          <div className="mb-12 flex flex-col items-center">
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-ethereal-gold/30 to-ember-flame/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/965e98d3-fb85-40c6-9263-e357de40fd59.png" 
                alt="PhoenixGold Game Studios Logo"
                className="w-40 h-40 mx-auto animate-float relative z-10 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full border-2 border-ethereal-gold/20 animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-2 relative" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}>
                <Sparkles className="w-8 h-8 inline-block mr-3 text-ethereal-gold animate-pulse" />
                <span className="text-ethereal-gold">PhoenixGold Game Studios</span>
                <Sparkles className="w-8 h-8 inline-block ml-3 text-ethereal-gold animate-pulse" />
              </h3>
              
              <h4 className="font-cinzel text-2xl md:text-3xl font-semibold text-ethereal-gold mb-6 relative" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                The Forgotten Trial
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-ethereal-gold/10 to-transparent animate-pulse"></div>
              </h4>
              
              <p className="text-gray-100 text-xl leading-relaxed max-w-3xl mx-auto relative font-citizen" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                A mysterious fantasy RPG crafted with passion and innovation. 
                Follow our journey as we bring this unique adventure to life, one memory at a time.
                <br />
                <span className="text-ethereal-gold font-medium mt-2 block">
                  🎮 Where every choice echoes through eternity 🎮
                </span>
              </p>
            </div>
          </div>
          
          {/* Enhanced Action Links */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
            <a 
              href="https://ko-fi.com/phoenixgoldzstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-gradient-to-r from-ember-flame/20 to-ethereal-gold/20 hover:from-ember-flame/40 hover:to-ethereal-gold/40 px-8 py-4 rounded-2xl border border-ember-flame/30 hover:border-ember-flame/60 transition-all duration-300 hover:scale-110 backdrop-blur-sm font-citizen"
            >
              <Coffee className="w-6 h-6 mr-3 text-ember-flame group-hover:animate-bounce" />
              <span className="text-white text-lg font-semibold">Ko-fi Dev Blog</span>
              <ExternalLink className="w-4 h-4 ml-2 text-ember-flame/60 group-hover:text-ember-flame" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
            
            <div className="hidden lg:block w-2 h-2 bg-gradient-to-r from-ethereal-gold to-verdant-glyph rounded-full animate-pulse"></div>
            
            <a 
              href="https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-gradient-to-r from-verdant-glyph/20 to-luminous-azure/20 hover:from-verdant-glyph/40 hover:to-luminous-azure/40 px-8 py-4 rounded-2xl border border-verdant-glyph/30 hover:border-verdant-glyph/60 transition-all duration-300 hover:scale-110 backdrop-blur-sm relative overflow-hidden font-citizen"
            >
              <Zap className="w-6 h-6 mr-3 text-verdant-glyph group-hover:animate-pulse" />
              <span className="text-white text-lg font-semibold">Kickstarter Campaign</span>
              <ExternalLink className="w-4 h-4 ml-2 text-verdant-glyph/60 group-hover:text-verdant-glyph" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </a>
          </div>

          {/* Enhanced Platform Info */}
          <div className="bg-black/70 rounded-3xl p-10 border border-ancient-stone/40 glass-effect backdrop-blur-md mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center justify-center font-cinzel" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                <Star className="w-6 h-6 mr-3 text-ethereal-gold animate-pulse" />
                <span className="text-ethereal-gold">Designed For Everyone</span>
                <Star className="w-6 h-6 ml-3 text-ethereal-gold animate-pulse" />
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "🖥️", title: "PC Gaming", desc: "Unreal Engine 5.5" },
                  { icon: "🎮", title: "Full Gamepad", desc: "Complete Controller Support" },
                  { icon: "♿", title: "Accessible", desc: "Inclusive Design Options" },
                  { icon: "👨‍👩‍👧‍👦", title: "Family Friendly", desc: "Kid-Safe Content" }
                ].map((item, index) => (
                  <div key={index} className="group bg-ancient-stone/30 hover:bg-ancient-stone/50 px-6 py-4 rounded-xl border border-ancient-stone/40 hover:border-ethereal-gold/50 transition-all duration-300 hover:scale-105 cursor-default">
                    <div className="text-3xl mb-3 group-hover:animate-bounce">{item.icon}</div>
                    <div className="text-white font-semibold mb-1 font-citizen">{item.title}</div>
                    <div className="text-gray-300 text-sm font-citizen">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Copyright Section with 2025 */}
          <div className="pt-8 border-t border-ancient-stone/30 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ethereal-gold/5 to-transparent"></div>
            <p className="text-gray-300 text-lg flex items-center justify-center flex-wrap gap-2 relative z-10 font-citizen" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              <span className="flex items-center">
                © 2025 PhoenixGold Game Studios. All rights reserved.
              </span>
              <span className="text-ethereal-gold">•</span>
              <span className="flex items-center">
                Built with 
                <Heart className="w-5 h-5 mx-2 text-ember-flame animate-pulse" />
                for RPG lovers everywhere
              </span>
            </p>
            
            <div className="mt-6 flex justify-center space-x-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-ethereal-gold/60 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
