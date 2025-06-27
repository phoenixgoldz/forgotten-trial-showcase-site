
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Users, BookOpen, Zap } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  reward: string;
}

const Gamification = () => {
  const [userLevel, setUserLevel] = useState(1);
  const [userXP, setUserXP] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first_visit',
      title: 'Memory Awakened',
      description: 'Visit The Forgotten Trial website',
      icon: BookOpen,
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      reward: '+10 XP'
    },
    {
      id: 'demo_completed',
      title: 'Trial Explorer',
      description: 'Complete the interactive demo',
      icon: Target,
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      reward: '+25 XP'
    },
    {
      id: 'supporter',
      title: 'Realm Supporter',
      description: 'Back the project on Kickstarter or Ko-fi',
      icon: Star,
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      reward: '+50 XP'
    },
    {
      id: 'social_share',
      title: 'Lore Spreader',
      description: 'Share the project with others',
      icon: Users,
      unlocked: false,
      progress: 0,
      maxProgress: 3,
      reward: '+30 XP'
    },
    {
      id: 'newsletter',
      title: 'Chronicle Keeper',
      description: 'Subscribe to updates',
      icon: Zap,
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      reward: '+15 XP'
    }
  ]);

  // Simulate achievement progress
  useEffect(() => {
    const interval = setInterval(() => {
      setAchievements(prev => prev.map(achievement => {
        if (!achievement.unlocked && Math.random() > 0.95) {
          const newProgress = Math.min(achievement.progress + 1, achievement.maxProgress);
          const unlocked = newProgress >= achievement.maxProgress;
          
          if (unlocked && !achievement.unlocked) {
            // Add XP when achievement is unlocked
            const xpGain = parseInt(achievement.reward.match(/\d+/)?.[0] || '0');
            setUserXP(prev => prev + xpGain);
          }
          
          return {
            ...achievement,
            progress: newProgress,
            unlocked
          };
        }
        return achievement;
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Level up logic
  useEffect(() => {
    const xpForNextLevel = userLevel * 100;
    if (userXP >= xpForNextLevel) {
      setUserLevel(prev => prev + 1);
    }
  }, [userXP, userLevel]);

  const xpForCurrentLevel = (userLevel - 1) * 100;
  const xpForNextLevel = userLevel * 100;
  const currentLevelProgress = ((userXP - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;

  return (
    <section className="py-16 bg-gradient-to-br from-mystic-blue via-verdant-glyph/10 to-luminous-azure/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-luminous-azure/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-verdant-glyph/20 to-luminous-azure/20 rounded-full text-verdant-glyph text-sm font-medium border border-verdant-glyph/30 backdrop-blur-md glass-effect">
              🏆 Adventure Progress
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-cinzel">
            Your <span className="gradient-text">Mystical Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unlock achievements and level up as you explore The Forgotten Trial
          </p>
        </div>

        {/* User Progress Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-ethereal-gold/30 glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ethereal-gold/20 to-verdant-glyph/20 mb-4 mx-auto border border-ethereal-gold/30 backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-ethereal-gold animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-cinzel">
                Adventurer Level {userLevel}
              </CardTitle>
              <CardDescription className="text-ethereal-gold font-medium">
                {userXP} / {xpForNextLevel} XP to next level
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="relative">
                <Progress value={currentLevelProgress} className="h-3" />
                <div className="absolute inset-0 h-3 bg-gradient-to-r from-ethereal-gold/20 to-verdant-glyph/20 rounded-full blur-md opacity-60"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-ancient-stone/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-ethereal-gold">{achievements.filter(a => a.unlocked).length}</div>
                  <div className="text-xs text-slate-300">Achievements</div>
                </div>
                <div className="bg-ancient-stone/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-verdant-glyph">{userXP}</div>
                  <div className="text-xs text-slate-300">Total XP</div>
                </div>
                <div className="bg-ancient-stone/30 rounded-lg p-3">
                  <div className="text-2xl font-bold text-luminous-azure">{userLevel}</div>
                  <div className="text-xs text-slate-300">Level</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;
            
            return (
              <Card 
                key={achievement.id}
                className={`bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 transition-all duration-500 hover-scale glass-effect backdrop-blur-sm relative overflow-hidden ${
                  achievement.unlocked 
                    ? 'border-verdant-glyph/60 shadow-verdant-glyph/25' 
                    : 'border-ancient-stone/40 hover:border-ancient-stone/60'
                }`}
              >
                {achievement.unlocked && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-verdant-glyph to-luminous-azure text-white text-xs">
                      Unlocked!
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 mx-auto border backdrop-blur-sm ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-verdant-glyph/20 to-luminous-azure/20 border-verdant-glyph/30'
                      : 'bg-gradient-to-br from-ancient-stone/20 to-mystic-blue/20 border-ancient-stone/30'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      achievement.unlocked ? 'text-verdant-glyph animate-pulse' : 'text-slate-400'
                    }`} />
                  </div>
                  <CardTitle className={`text-lg font-bold font-cinzel ${
                    achievement.unlocked ? 'text-verdant-glyph' : 'text-white'
                  }`}>
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-sm">
                    {achievement.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Progress</span>
                      <span className={achievement.unlocked ? 'text-verdant-glyph' : 'text-slate-400'}>
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={progressPercentage} className="h-2" />
                      {achievement.unlocked && (
                        <div className="absolute inset-0 h-2 bg-gradient-to-r from-verdant-glyph/30 to-luminous-azure/30 rounded-full blur-sm opacity-60"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="outline" className={`${
                      achievement.unlocked 
                        ? 'border-verdant-glyph/50 text-verdant-glyph' 
                        : 'border-slate-600 text-slate-400'
                    }`}>
                      {achievement.reward}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-mystic-blue/40 to-ancient-stone/40 rounded-xl p-6 border border-ethereal-gold/20 backdrop-blur-md glass-effect">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-ethereal-gold font-semibold">Complete achievements to unlock exclusive rewards!</span> 
              Each milestone brings you closer to becoming a true champion of The Forgotten Trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
