
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Zap, Coffee } from "lucide-react";

const Support = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-verdant-glyph/20 to-luminous-azure/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-verdant-glyph/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-ember-flame/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-verdant-glyph/20 to-luminous-azure/20 rounded-full text-verdant-glyph text-sm font-medium border border-verdant-glyph/30">
              Support Our Dream
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Help Us <span className="gradient-text">Create Magic</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're a passionate indie team crafting something truly unique. Every contribution brings us closer to our vision!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-verdant-glyph/20 to-luminous-azure/20 border-verdant-glyph/50 hover:border-verdant-glyph transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-verdant-glyph/5 to-luminous-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-verdant-glyph to-luminous-azure mb-4 mx-auto shadow-lg group-hover:shadow-verdant-glyph/25 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white group-hover:text-verdant-glyph transition-colors duration-300">
                Kickstarter Campaign
              </CardTitle>
              <CardDescription className="text-verdant-glyph text-lg">
                Back our main funding journey
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-slate-300 mb-6 leading-relaxed">
                Help us reach our funding goal and unlock exciting stretch goals including additional characters, 
                expanded storylines, and enhanced gameplay features that will make the experience even more magical.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold px-8 py-4 w-full rounded-xl button-shine hover-scale shadow-lg hover:shadow-verdant-glyph/25 transition-all duration-300"
                onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
              >
                <Zap className="w-5 h-5 mr-2" />
                Back on Kickstarter
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ember-flame/20 to-ethereal-gold/20 border-ember-flame/50 hover:border-ember-flame transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ember-flame/5 to-ethereal-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-ember-flame to-ethereal-gold mb-4 mx-auto shadow-lg group-hover:shadow-ember-flame/25 transition-all duration-300">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ember-flame transition-colors duration-300">
                Ko-fi Support
              </CardTitle>
              <CardDescription className="text-ember-flame text-lg">
                Ongoing development fuel
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative z-10">
              <p className="text-slate-300 mb-6 leading-relaxed">
                Support our daily development with coffee and encouragement. Follow our dev blog for behind-the-scenes 
                updates, concept art, development insights, and exclusive sneak peeks at upcoming features.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-ember-flame to-ethereal-gold hover:from-ember-flame/90 hover:to-ethereal-gold/90 text-white font-semibold px-8 py-4 w-full rounded-xl button-shine hover-scale shadow-lg hover:shadow-ember-flame/25 transition-all duration-300"
                onClick={() => window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank')}
              >
                <Coffee className="w-5 h-5 mr-2" />
                Support on Ko-fi
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-ancient-stone/60 to-mystic-blue/60 rounded-2xl p-8 max-w-4xl mx-auto border border-ancient-stone/50 glass-effect backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-ember-flame mr-3 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">Every Contribution Helps Us:</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-xl hover:bg-ancient-stone/50 transition-colors duration-300">
                <div className="text-3xl mb-3">📝</div>
                <h4 className="font-semibold text-white mb-2">Craft Stories</h4>
                <p className="text-sm text-center">Write more compelling narratives and character development</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-xl hover:bg-ancient-stone/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🗺️</div>
                <h4 className="font-semibold text-white mb-2">Build Worlds</h4>
                <p className="text-sm text-center">Create more diverse maps and atmospheric environments</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-xl hover:bg-ancient-stone/50 transition-colors duration-300">
                <div className="text-3xl mb-3">✨</div>
                <h4 className="font-semibold text-white mb-2">Polish Magic</h4>
                <p className="text-sm text-center">Add those special touches that make games unforgettable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
