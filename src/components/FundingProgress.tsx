
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Coffee, TrendingUp } from "lucide-react";

const FundingProgress = () => {
  // Updated to reflect more realistic current funding status
  const kickstarterProgress = 15; // Current percentage funded
  const kickstarterGoal = "$50,000";
  const kickstarterRaised = "$7,500"; // Current amount raised
  
  const kofiSupporters = 23; // Current number of supporters
  const kofiGoal = 200; // Target number of supporters
  const kofiProgress = Math.round((kofiSupporters / kofiGoal) * 100);

  return (
    <section className="py-16 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-ember-flame/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-verdant-glyph/20 to-ember-flame/20 rounded-full text-verdant-glyph text-sm font-medium border border-verdant-glyph/30">
              Live Funding Progress
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Help Us <span className="gradient-text">Reach Our Goal</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Track our real-time progress on both Kickstarter and Ko-fi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Kickstarter Progress */}
          <Card className="bg-gradient-to-br from-mystic-blue/80 to-ancient-stone/60 border-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-ethereal-gold to-luminous-azure mb-3 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white group-hover:text-ethereal-gold transition-colors">
                Kickstarter Campaign
              </CardTitle>
              <CardDescription className="text-ethereal-gold">
                Main funding goal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{kickstarterRaised}</div>
                <div className="text-slate-300">raised of {kickstarterGoal} goal</div>
              </div>
              <Progress 
                value={kickstarterProgress} 
                className="h-3 bg-ancient-stone/50 [&>div]:bg-gradient-to-r [&>div]:from-ethereal-gold [&>div]:to-luminous-azure" 
              />
              <div className="flex justify-between items-center text-sm">
                <span className="text-ethereal-gold font-semibold">{kickstarterProgress}% funded</span>
                <span className="text-slate-400">Updated daily</span>
              </div>
              <div className="flex items-center justify-center text-xs text-slate-400 mt-2">
                <TrendingUp className="w-3 h-3 mr-1" />
                Last updated: Today
              </div>
            </CardContent>
          </Card>

          {/* Ko-fi Progress */}
          <Card className="bg-gradient-to-br from-mystic-blue/80 to-ancient-stone/60 border-ember-flame/30 hover:border-ember-flame/60 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-ember-flame to-ethereal-gold mb-3 mx-auto">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white group-hover:text-ember-flame transition-colors">
                Ko-fi Supporters
              </CardTitle>
              <CardDescription className="text-ember-flame">
                Community support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{kofiSupporters}</div>
                <div className="text-slate-300">supporters of {kofiGoal} goal</div>
              </div>
              <Progress 
                value={kofiProgress} 
                className="h-3 bg-ancient-stone/50 [&>div]:bg-gradient-to-r [&>div]:from-ember-flame [&>div]:to-ethereal-gold" 
              />
              <div className="flex justify-between items-center text-sm">
                <span className="text-ember-flame font-semibold">{kofiProgress}% complete</span>
                <span className="text-slate-400">Updated daily</span>
              </div>
              <div className="flex items-center justify-center text-xs text-slate-400 mt-2">
                <TrendingUp className="w-3 h-3 mr-1" />
                Last updated: Today
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Progress updates are refreshed daily. Thank you for your incredible support in making The Forgotten Trial a reality!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundingProgress;
