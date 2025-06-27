
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('About page image loaded successfully');
  };

  const handleImageError = () => {
    setImageError(true);
    console.warn('About page image failed to load');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 rounded-full text-ethereal-gold text-sm font-medium border border-ethereal-gold/30 font-citizen">
                About The Game
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-cinzel">
              What is <span className="gradient-text">The Forgotten Trial</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-citizen">
                Step into a cursed dungeon where you awaken with no memory—and only the echoing whispers of the past to guide you. In <em>The Forgotten Trial</em>, you lead a party of mysterious heroes through tactical battles and narrative choices.
              </p>
              
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-citizen">
                Each dungeon run is unique, shaped by handcrafted story fragments and a procedurally rebuilt world. Every playthrough offers new mysteries to uncover and different paths to explore.
              </p>

              <div className="bg-gradient-to-r from-verdant-glyph/20 to-luminous-azure/20 rounded-2xl p-6 border border-verdant-glyph/30">
                <h3 className="text-xl font-bold text-verdant-glyph mb-3 font-cinzel">No AI-Generated Content</h3>
                <p className="text-slate-200 font-citizen">
                  Every word, character, and line of dialogue is crafted by our writing team to deliver a heartfelt, meaningful experience. We believe in the power of human creativity.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-ancient-stone/80 to-mystic-blue/80 border-ancient-stone/50 glass-effect backdrop-blur-sm">
                <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-ancient-stone/30 to-mystic-blue/30 rounded-lg overflow-hidden">
                  {!imageError ? (
                    <>
                      {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-ancient-stone/50">
                          <div className="w-8 h-8 border-2 border-ethereal-gold/30 border-t-ethereal-gold rounded-full animate-spin"></div>
                        </div>
                      )}
                      <img 
                        src="/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png" 
                        alt="The Forgotten Trial - A mystical dungeon scene showing the atmospheric game world"
                        className={`w-full h-full object-contain rounded-lg transition-opacity duration-300 ${
                          imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <div className="text-center p-8">
                      <div className="text-4xl mb-4">🏰</div>
                      <p className="text-ethereal-gold font-cinzel">Game Artwork</p>
                      <p className="text-slate-400 text-sm mt-2">Visual preview coming soon</p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-ember-flame/20 to-ethereal-gold/20 border-ember-flame/30 glass-effect backdrop-blur-sm hover-scale">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-ember-flame to-ethereal-gold rounded-xl flex items-center justify-center">
                  <span className="text-2xl" role="img" aria-label="Puzzle piece">🧩</span>
                </div>
                <CardTitle className="text-white font-cinzel">Procedural Mystery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 font-citizen">
                  Every run reveals different memories, encounters, and story fragments that piece together your forgotten past.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-luminous-azure/20 to-verdant-glyph/20 border-luminous-azure/30 glass-effect backdrop-blur-sm hover-scale">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-luminous-azure to-verdant-glyph rounded-xl flex items-center justify-center">
                  <span className="text-2xl" role="img" aria-label="Crossed swords">⚔️</span>
                </div>
                <CardTitle className="text-white font-cinzel">Tactical Combat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 font-citizen">
                  Command your party on a grid in rich, strategic battles with unique abilities and meaningful positioning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-verdant-glyph/20 to-ethereal-gold/20 border-verdant-glyph/30 glass-effect backdrop-blur-sm hover-scale">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-verdant-glyph to-ethereal-gold rounded-xl flex items-center justify-center">
                  <span className="text-2xl" role="img" aria-label="Gift with ribbon">💝</span>
                </div>
                <CardTitle className="text-white font-cinzel">Character Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 font-citizen">
                  Your actions shape your party's trust in you. Lead with kindness, neutrality, or ruthlessness—each path matters.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
