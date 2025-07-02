
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Scroll, Heart } from "lucide-react";

const About = () => {
  return (
    <section 
      id="about" 
      data-section="about" 
      className="py-24 bg-gradient-to-br from-ancient-stone via-mystic-blue to-ancient-stone relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`about-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-ethereal-gold animate-pulse" />
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white">
                What is <span className="text-transparent bg-gradient-to-r from-ethereal-gold to-ember-flame bg-clip-text">The Forgotten Trial</span>?
              </h2>
              <Sparkles className="w-8 h-8 text-ethereal-gold animate-pulse" />
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-gradient-to-br from-ancient-stone/60 to-mystic-blue/40 border-ethereal-gold/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-ethereal-gold/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Scroll className="w-6 h-6 text-ethereal-gold" />
                      <h3 className="font-cinzel text-2xl font-bold text-white">The Story Begins</h3>
                    </div>
                    
                    <p className="text-lg text-white/90 leading-relaxed font-citizen">
                      Step into a cursed dungeon where you awaken with <span className="text-ethereal-gold font-semibold">no memory</span>—and only the echoing whispers of the past to guide you.
                    </p>
                    
                    <p className="text-lg text-white/90 leading-relaxed font-citizen">
                      Lead a party of mysterious heroes through <span className="text-verdant-glyph font-semibold">tactical battles</span> and <span className="text-luminous-azure font-semibold">narrative choices</span>. Each dungeon run is unique, shaped by handcrafted story fragments and a procedurally rebuilt world.
                    </p>
                    
                    <div className="bg-gradient-to-r from-ethereal-gold/10 to-ember-flame/10 p-6 rounded-xl border border-ethereal-gold/20 mt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart className="w-5 h-5 text-ember-flame" />
                        <h4 className="font-cinzel text-lg font-bold text-white">Crafted with Care</h4>
                      </div>
                      <p className="text-white/90 font-citizen leading-relaxed">
                        <span className="text-ethereal-gold font-semibold">No AI-generated content here.</span> Every word, character, and line of dialogue is crafted by our writing team to deliver a heartfelt, meaningful experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Image with atmospheric styling */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-ethereal-gold/20 via-luminous-azure/20 to-verdant-glyph/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-ancient-stone/30 to-mystic-blue/30 rounded-2xl p-3 backdrop-blur-sm border border-ethereal-gold/30 shadow-xl group-hover:border-ethereal-gold/50 transition-all duration-300">
                  <img
                    src="/lovable-uploads/KickstarterBannerImage.png"
                    alt="Mystical dungeon scene with glowing ethereal atmosphere"
                    className="w-full max-w-lg h-auto rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Failed to load about section image');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Atmospheric overlay effects */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="w-2 h-2 bg-ethereal-gold rounded-full animate-pulse shadow-lg"></div>
                    <div className="w-2 h-2 bg-luminous-azure rounded-full animate-pulse shadow-lg" style={{ animationDelay: "0.5s" }}></div>
                    <div className="w-2 h-2 bg-verdant-glyph rounded-full animate-pulse shadow-lg" style={{ animationDelay: "1s" }}></div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2 text-xs text-ethereal-gold/80 font-citizen">
                      <Sparkles className="w-3 h-3" />
                      <span>Cursed Dungeon Depths</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
