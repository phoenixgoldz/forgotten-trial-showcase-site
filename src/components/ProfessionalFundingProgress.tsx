import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Coffee, 
  TrendingUp, 
  Users, 
  Calendar, 
  Target,
  RefreshCw,
  ExternalLink,
  Clock,
  DollarSign,
  Heart,
  Sparkles
} from "lucide-react";
import { useFundingData } from "@/hooks/useFundingData";
import AnimatedCounter from "@/components/AnimatedCounter";

const ProfessionalFundingProgress = () => {
  const { data, isLoading, error, refreshData, isRealTime } = useFundingData();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshData();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const formatLastUpdated = (date: Date) => {
    const now = new Date();
    const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const hours = Math.floor(diffMinutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-mystic-blue/95 to-ancient-stone relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,181,106,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,138,101,0.08),transparent_50%)]"></div>
        {/* Subtle animated particles for professional feel */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold rounded-full opacity-20 animate-float"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + (i * 2)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="outline" className="px-4 py-2 bg-ethereal-gold/10 border-ethereal-gold/30 text-ethereal-gold">
              <Sparkles className="w-4 h-4 mr-2" />
              Live Campaign Status
            </Badge>
            {isRealTime && (
              <Badge variant="outline" className="px-3 py-2 bg-verdant-glyph/10 border-verdant-glyph/30 text-verdant-glyph animate-pulse">
                <div className="w-2 h-2 bg-verdant-glyph rounded-full mr-2 animate-pulse"></div>
                Real-time
              </Badge>
            )}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-cinzel">
            Join the <span className="gradient-text">Epic Quest</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Support The Forgotten Trial's development and become part of gaming history. 
            Every contribution helps us craft the ultimate tactical fantasy RPG experience.
          </p>

          {/* Real-time status bar */}
          <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Last updated: {formatLastUpdated(data.lastUpdated)}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="h-8 px-3 hover:bg-white/10"
            >
              <RefreshCw className={`w-3 h-3 mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Enhanced funding cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Kickstarter Card */}
          <Card className="bg-mystic-blue/60 border-2 border-ethereal-gold/20 hover:border-ethereal-gold/40 transition-all duration-500 group glass-effect backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-ethereal-gold/20 border border-ethereal-gold/30">
                  <Zap className="w-7 h-7 text-ethereal-gold" />
                </div>
                <Badge 
                  variant={data.kickstarter.isLive ? "default" : "secondary"}
                  className={data.kickstarter.isLive ? "bg-verdant-glyph text-white" : ""}
                >
                  {data.kickstarter.isLive ? "Live Campaign" : "Coming Soon"}
                </Badge>
              </div>
              
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ethereal-gold transition-colors font-cinzel">
                Kickstarter Campaign
              </CardTitle>
              <CardDescription className="text-ethereal-gold/80 font-medium">
                Primary development funding
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter target={data.kickstarter.pledged} prefix="$" />
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Pledged</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ethereal-gold mb-1">
                    <AnimatedCounter target={data.kickstarter.backers} />
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Backers</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Progress</span>
                  <span className="text-ethereal-gold font-bold">
                    {data.kickstarter.progress.toFixed(1)}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="h-3 bg-ancient-stone/40 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-ethereal-gold via-luminous-azure to-ethereal-gold transition-all duration-1000 ease-out relative"
                      style={{ width: `${Math.min(data.kickstarter.progress, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 h-3 bg-ethereal-gold/10 rounded-full blur-sm"></div>
                </div>
                
                <div className="text-center text-sm text-slate-400">
                  Goal: <span className="text-ethereal-gold font-semibold">{data.kickstarter.goalDisplay}</span>
                  {data.kickstarter.isLive && (
                    <span className="ml-4">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {data.kickstarter.daysLeft} days left
                    </span>
                  )}
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-ethereal-gold hover:bg-ethereal-gold/90 text-mystic-blue font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-ethereal-gold/25"
                onClick={() => window.open(data.kickstarter.url, '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {data.kickstarter.isLive ? 'Back on Kickstarter' : 'Follow Campaign'}
              </Button>
            </CardContent>
          </Card>

          {/* Ko-fi Card */}
          <Card className="bg-mystic-blue/60 border-2 border-ember-flame/20 hover:border-ember-flame/40 transition-all duration-500 group glass-effect backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ember-flame/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-ember-flame/20 border border-ember-flame/30">
                  <Coffee className="w-7 h-7 text-ember-flame" />
                </div>
                <Badge variant="outline" className="bg-ember-flame/10 border-ember-flame/30 text-ember-flame">
                  Monthly Goal
                </Badge>
              </div>
              
              <CardTitle className="text-2xl font-bold text-white group-hover:text-ember-flame transition-colors font-cinzel">
                Ko-fi Support
              </CardTitle>
              <CardDescription className="text-ember-flame/80 font-medium">
                Monthly development fuel
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">
                    <AnimatedCounter target={data.kofi.supporters} />
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">Supporters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ember-flame mb-1">
                    <AnimatedCounter target={data.kofi.totalRaised} prefix="$" />
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">This Month</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Monthly Progress</span>
                  <span className="text-ember-flame font-bold">
                    {data.kofi.progress.toFixed(1)}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="h-3 bg-ancient-stone/40 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-ember-flame via-ethereal-gold to-ember-flame transition-all duration-1000 ease-out relative"
                      style={{ width: `${Math.min(data.kofi.progress, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 h-3 bg-ember-flame/10 rounded-full blur-sm"></div>
                </div>
                
                <div className="text-center text-sm text-slate-400">
                  Goal: <span className="text-ember-flame font-semibold">{data.kofi.monthlyGoal} supporters</span>
                </div>
              </div>

              {/* Recent supporters */}
              {data.kofi.recentSupporters.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Heart className="w-3 h-3" />
                    <span>Recent Champions</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {data.kofi.recentSupporters.slice(0, 4).map((supporter, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs bg-ember-flame/10 text-ember-flame border-ember-flame/20"
                      >
                        {supporter}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                size="lg" 
                className="w-full bg-ember-flame hover:bg-ember-flame/90 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-ember-flame/25"
                onClick={() => window.open(data.kofi.url, '_blank')}
              >
                <Coffee className="w-5 h-5 mr-2" />
                Support on Ko-fi
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Professional development roadmap */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-mystic-blue/40 border border-ethereal-gold/20 glass-effect backdrop-blur-md">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-verdant-glyph mr-2" />
                <CardTitle className="text-xl font-bold text-white font-cinzel">
                  Development Milestones
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-verdant-glyph/10 rounded-xl border border-verdant-glyph/20">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-bold text-white mb-2">Alpha Build</h4>
                  <p className="text-sm text-slate-300">Core mechanics & character systems</p>
                  <Badge className="mt-2 bg-verdant-glyph text-white">In Progress</Badge>
                </div>
                <div className="text-center p-4 bg-luminous-azure/10 rounded-xl border border-luminous-azure/20">
                  <div className="text-2xl mb-2">🏰</div>
                  <h4 className="font-bold text-white mb-2">Beta Release</h4>
                  <p className="text-sm text-slate-300">Complete dungeon system & story</p>
                  <Badge variant="outline" className="mt-2">Q2 2025</Badge>
                </div>
                <div className="text-center p-4 bg-ethereal-gold/10 rounded-xl border border-ethereal-gold/20">
                  <div className="text-2xl mb-2">🎮</div>
                  <h4 className="font-bold text-white mb-2">Full Launch</h4>
                  <p className="text-sm text-slate-300">Polished experience & multiplayer</p>
                  <Badge variant="outline" className="mt-2">Q4 2025</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional footer message */}
        <div className="text-center mt-12">
          <div className="max-w-3xl mx-auto bg-ancient-stone/20 rounded-xl p-8 border border-ancient-stone/30 glass-effect backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-ethereal-gold mr-2" />
              <h3 className="text-lg font-bold text-white font-cinzel">Join Our Community</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Thank you for supporting indie game development. Your contribution directly funds 
              our small but passionate team working to create something truly special in the RPG space.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <TrendingUp className="w-4 h-4 text-verdant-glyph" />
              <span>Updates every 30 seconds • Phoenix Gold Studios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalFundingProgress;