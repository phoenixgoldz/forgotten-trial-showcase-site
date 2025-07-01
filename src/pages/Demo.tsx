
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2, Play, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleKickstarterClick = () => {
    console.log('Redirecting to Kickstarter from Demo');
    window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/85 via-ancient-stone/75 to-mystic-blue/85"></div>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-ethereal-gold hover:text-ethereal-gold/80 transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </div>
              
              <div className="text-6xl mb-6">🎮</div>
              <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-ethereal-gold">Demo</span> Coming Soon
              </h1>
              
              <p className="text-xl text-gray-100 leading-relaxed font-citizen max-w-3xl mx-auto mb-8">
                We're putting the finishing touches on an interactive demo that will let you experience 
                the tactical combat and mysterious storytelling of The Forgotten Trial firsthand.
              </p>

              <div className="bg-black/80 rounded-2xl p-8 backdrop-blur-sm border border-ethereal-gold/40 mb-8">
                <h2 className="font-cinzel text-2xl font-bold text-ethereal-gold mb-4">What to Expect</h2>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <Star className="w-5 h-5 text-ethereal-gold mr-3" />
                      <span className="font-citizen">Tactical combat preview</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Star className="w-5 h-5 text-ethereal-gold mr-3" />
                      <span className="font-citizen">Character interaction system</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <Star className="w-5 h-5 text-ethereal-gold mr-3" />
                      <span className="font-citizen">Memory fragment discovery</span>
                    </div>
                    <div className="flex items-center text-white">
                      <Star className="w-5 h-5 text-ethereal-gold mr-3" />
                      <span className="font-citizen">Dungeon exploration mechanics</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleKickstarterClick}
                  className="font-citizen py-4 px-6 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 shadow-lg shadow-ethereal-gold/30 hover:shadow-ethereal-gold/50 transform hover:scale-105 transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support on Kickstarter
                  <Play className="w-5 h-5 ml-2" />
                </Button>
                
                <Button 
                  variant="outline"
                  asChild
                  className="font-citizen py-4 px-6 border-2 border-verdant-glyph text-verdant-glyph hover:bg-verdant-glyph hover:text-white transition-all duration-300"
                >
                  <Link to="/characters">
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    Meet the Characters
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Demo;
