
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Coffee, TrendingUp } from "lucide-react";

const FundingProgress = () => {
  // Current realistic funding status - starting from zero
  const kickstarterProgress = 0; // Current percentage funded
  const kickstarterGoal = "$50,000";
  const kickstarterRaised = "$0"; // Current amount raised
  
  const kofiSupporters = 0; // Current number of supporters
  const kofiGoal = 200; // Target number of supporters
  const kofiProgress = Math.round((kofiSupporters / kofiGoal) * 100);

  return (
    <section className="py-16 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Mystical Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-ember-flame/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-luminous-azure/8 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        {/* Floating rune-like particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-ethereal-gold rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              boxShadow: '0 0 8px rgba(212, 181, 106, 0.5)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-verdant-glyph/20 to-ember-flame/20 rounded-full text-verdant-glyph text-sm font-medium border border-verdant-glyph/30 backdrop-blur-md glass-effect">
              ⚡ Live Funding Progress
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Help Us <span className="gradient-text">Reach Our Goal</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Track our real-time progress on both Kickstarter and Ko-fi as we build this mystical adventure together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Kickstarter Progress */}
          <Card className="bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm relative overflow-hidden">
            {/* Mystical border glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-ethereal-gold/10 via-transparent to-luminous-azure/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ethereal-gold/20 to-luminous-azure/20 mb-4 mx-auto border border-ethereal-gold/30 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-ethereal-gold animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ethereal-gold transition-colors">
                Kickstarter Campaign
              </CardTitle>
              <CardDescription className="text-ethereal-gold font-medium">
                Primary funding source
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2 animate-glow">{kickstarterRaised}</div>
                <div className="text-slate-300">raised of <span className="text-ethereal-gold font-semibold">{kickstarterGoal}</span> goal</div>
              </div>
              
              {/* Custom Mystical Progress Bar */}
              <div className="relative">
                <div className="h-4 bg-ancient-stone/60 rounded-full border border-ancient-stone/80 overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-ethereal-gold via-luminous-azure to-verdant-glyph transition-all duration-1000 ease-out relative"
                    style={{ width: `${kickstarterProgress}%` }}
                  >
                    {/* Animated shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    {/* Glowing edge effect */}
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/50 blur-sm"></div>
                  </div>
                </div>
                {/* Progress glow effect */}
                <div className="absolute inset-0 h-4 bg-gradient-to-r from-ethereal-gold/20 to-luminous-azure/20 rounded-full blur-md opacity-60"></div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-ethereal-gold font-bold text-lg">{kickstarterProgress}% funded</span>
                <span className="text-slate-400 text-xs">Updates daily</span>
              </div>
              
              <div className="flex items-center justify-center text-xs text-slate-400 mt-4 bg-ancient-stone/20 rounded-lg py-2 px-4 border border-ancient-stone/40">
                <TrendingUp className="w-3 h-3 mr-2 text-verdant-glyph" />
                Journey begins here • Last updated: Today
              </div>
            </CardContent>
          </Card>

          {/* Ko-fi Progress */}
          <Card className="bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-ember-flame/30 hover:border-ember-flame/60 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm relative overflow-hidden">
            {/* Mystical border glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-ember-flame/10 via-transparent to-ethereal-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ember-flame/20 to-ethereal-gold/20 mb-4 mx-auto border border-ember-flame/30 backdrop-blur-sm">
                <Coffee className="w-8 h-8 text-ember-flame animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ember-flame transition-colors">
                Ko-fi Supporters
              </CardTitle>
              <CardDescription className="text-ember-flame font-medium">
                Community champions
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2 animate-glow">{kofiSupporters}</div>
                <div className="text-slate-300">supporters of <span className="text-ember-flame font-semibold">{kofiGoal}</span> goal</div>
              </div>
              
              {/* Custom Mystical Progress Bar */}
              <div className="relative">
                <div className="h-4 bg-ancient-stone/60 rounded-full border border-ancient-stone/80 overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-ember-flame via-ethereal-gold to-verdant-glyph transition-all duration-1000 ease-out relative"
                    style={{ width: `${kofiProgress}%` }}
                  >
                    {/* Animated shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    {/* Glowing edge effect */}
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/50 blur-sm"></div>
                  </div>
                </div>
                {/* Progress glow effect */}
                <div className="absolute inset-0 h-4 bg-gradient-to-r from-ember-flame/20 to-ethereal-gold/20 rounded-full blur-md opacity-60"></div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-ember-flame font-bold text-lg">{kofiProgress}% complete</span>
                <span className="text-slate-400 text-xs">Updates daily</span>
              </div>
              
              <div className="flex items-center justify-center text-xs text-slate-400 mt-4 bg-ancient-stone/20 rounded-lg py-2 px-4 border border-ancient-stone/40">
                <TrendingUp className="w-3 h-3 mr-2 text-verdant-glyph" />
                Adventure awaits • Last updated: Today
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-mystic-blue/40 to-ancient-stone/40 rounded-xl p-6 border border-ethereal-gold/20 backdrop-blur-md glass-effect">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-ethereal-gold font-semibold">Every contribution matters.</span> Progress updates refresh daily as we work together to bring The Forgotten Trial to life. Thank you for being part of this mystical journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingProgress;
