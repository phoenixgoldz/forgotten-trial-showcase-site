
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Coffee, TrendingUp, Users, Calendar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const EnhancedFundingProgress = () => {
  const [kickstarterProgress, setKicksarterProgress] = useState(0);
  const [kofiSupporters, setKofiSupporters] = useState(0);
  const [recentBackers, setRecentBackers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Keep progress at 0
      setKicksarterProgress(0);
      setKofiSupporters(0);
      // Remove random backer functionality since we have 0 supporters
    }, 5000);

    // Campaign countdown
    const countdownInterval = setInterval(() => {
      const campaignEnd = new Date('2025-02-28').getTime();
      const now = new Date().getTime();
      const distance = campaignEnd - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      });
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(countdownInterval);
    };
  }, []);

  const kickstarterGoal = "$50,000";
  const kickstarterRaised = "$0.00";
  const kofiGoal = 200;
  const kofiProgress = 0;

  return (
    <section className="py-16 bg-mystic-blue relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-ember-flame/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        {Array.from({ length: 12 }).map((_, i) => (
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
            <span className="px-6 py-3 bg-verdant-glyph/20 rounded-full text-verdant-glyph text-sm font-medium border border-verdant-glyph/30 backdrop-blur-md glass-effect animate-pulse-glow">
              ⚡ Live Campaign Progress
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-cinzel">
            Join the <span className="gradient-text animate-glow">Mystical Journey</span>
          </h2>
          
          {/* Campaign Countdown */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="bg-ember-flame/20 rounded-xl p-4 border border-ember-flame/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-ember-flame mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Campaign Ends In</span>
              </div>
              <div className="flex gap-4 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-ethereal-gold">{timeLeft.days}</div>
                  <div className="text-xs text-slate-300">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ethereal-gold">{timeLeft.hours}</div>
                  <div className="text-xs text-slate-300">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ethereal-gold">{timeLeft.minutes}</div>
                  <div className="text-xs text-slate-300">Min</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Enhanced Kickstarter Progress */}
          <Card className="bg-mystic-blue/90 border-2 border-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-ethereal-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-ethereal-gold/20 mb-4 mx-auto border border-ethereal-gold/30 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-ethereal-gold animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ethereal-gold transition-colors font-cinzel">
                Kickstarter Campaign
              </CardTitle>
              <CardDescription className="text-ethereal-gold font-medium">
                Main funding adventure
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 animate-glow font-cinzel">{kickstarterRaised}</div>
                <div className="text-slate-300">raised of <span className="text-ethereal-gold font-semibold">{kickstarterGoal}</span> goal</div>
              </div>
              
              <div className="relative">
                <div className="h-4 bg-ancient-stone/60 rounded-full border border-ancient-stone/80 overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-ethereal-gold via-luminous-azure to-verdant-glyph transition-all duration-1000 ease-out relative"
                    style={{ width: `0%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/50 blur-sm"></div>
                  </div>
                </div>
                <div className="absolute inset-0 h-4 bg-ethereal-gold/20 rounded-full blur-md opacity-60"></div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-ethereal-gold font-bold text-lg">0.0% funded</span>
                <div className="flex items-center gap-1 text-verdant-glyph">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs">Growing</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-ethereal-gold hover:bg-ethereal-gold/90 text-white font-semibold px-8 py-4 rounded-xl button-shine hover-scale shadow-lg hover:shadow-ethereal-gold/25 transition-all duration-300"
                onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
              >
                <Zap className="w-5 h-5 mr-2" />
                Back the Adventure
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Ko-fi Progress */}
          <Card className="bg-mystic-blue/90 border-2 border-ember-flame/30 hover:border-ember-flame/60 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-ember-flame/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-ember-flame/20 mb-4 mx-auto border border-ember-flame/30 backdrop-blur-sm">
                <Coffee className="w-8 h-8 text-ember-flame animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ember-flame transition-colors font-cinzel">
                Ko-fi Champions
              </CardTitle>
              <CardDescription className="text-ember-flame font-medium">
                Daily fuel supporters
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 animate-glow font-cinzel">{kofiSupporters}</div>
                <div className="text-slate-300">supporters of <span className="text-ember-flame font-semibold">{kofiGoal}</span> goal</div>
              </div>
              
              <div className="relative">
                <div className="h-4 bg-ancient-stone/60 rounded-full border border-ancient-stone/80 overflow-hidden backdrop-blur-sm">
                  <div 
                    className="h-full bg-gradient-to-r from-ember-flame via-ethereal-gold to-verdant-glyph transition-all duration-1000 ease-out relative"
                    style={{ width: `0%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                    <div className="absolute right-0 top-0 w-2 h-full bg-white/50 blur-sm"></div>
                  </div>
                </div>
                <div className="absolute inset-0 h-4 bg-ember-flame/20 rounded-full blur-md opacity-60"></div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-ember-flame font-bold text-lg">0% complete</span>
                <div className="flex items-center gap-1 text-verdant-glyph">
                  <Users className="w-3 h-3" />
                  <span className="text-xs">+0 today</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-ember-flame hover:bg-ember-flame/90 text-white font-semibold px-8 py-4 rounded-xl button-shine hover-scale shadow-lg hover:shadow-ember-flame/25 transition-all duration-300"
                onClick={() => window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank')}
              >
                <Coffee className="w-5 h-5 mr-2" />
                Support Daily Dev
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Backers Social Proof */}
        {recentBackers.length > 0 && (
          <div className="text-center mb-8">
            <div className="bg-ancient-stone/60 rounded-2xl p-6 max-w-2xl mx-auto border border-ancient-stone/50 glass-effect backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-verdant-glyph mr-2 animate-pulse" />
                <h3 className="text-lg font-semibold text-white font-cinzel">Recent Adventurers</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {recentBackers.map((name, index) => (
                  <span key={index} className="px-3 py-1 bg-verdant-glyph/20 text-verdant-glyph rounded-full text-sm border border-verdant-glyph/30 animate-fade-in">
                    {name} joined the quest
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto bg-mystic-blue/40 rounded-xl p-8 border border-ethereal-gold/20 backdrop-blur-md glass-effect">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-ember-flame mr-3 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-semibold text-white font-cinzel">Your Support Unlocks:</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-xl hover:bg-ancient-stone/50 transition-colors duration-300 interactive-card">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold text-white mb-2 font-cinzel">Rich Lore</h4>
                <p className="text-sm text-center">Deeper character backstories and world building</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-xl hover:bg-ancient-stone/50 transition-colors duration-300 interactive-card">
                <div className="text-3xl mb-3">🗺️</div>
                <h4 className="font-semibold text-white mb-2 font-cinzel">New Realms</h4>
                <p className="text-sm text-center">Additional dungeons and mystical locations</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-xl hover:bg-ancient-stone/50 transition-colors duration-300 interactive-card">
                <div className="text-3xl mb-3">✨</div>
                <h4 className="font-semibold text-white mb-2 font-cinzel">Epic Encounters</h4>
                <p className="text-sm text-center">Legendary bosses and memorable moments</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-ethereal-gold font-semibold">Every contribution creates magic.</span> Together, we're building something truly special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFundingProgress;
