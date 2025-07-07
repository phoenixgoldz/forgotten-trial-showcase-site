
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Activity, MessageCircle, Star, TrendingUp } from 'lucide-react';

const RealTimeEngagement = () => {
  const [liveStats, setLiveStats] = useState({
    activeVisitors: 0,
    recentBackers: 0,
    communitySize: 0,
    engagementRate: 0
  });

  const [recentActivity, setRecentActivity] = useState<Array<{
    id: string;
    type: 'backer' | 'share' | 'visit' | 'demo';
    message: string;
    timestamp: Date;
  }>>([]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update live stats with more realistic fluctuations
      setLiveStats(prev => ({
        activeVisitors: Math.max(3, prev.activeVisitors + Math.floor(Math.random() * 3) - 1),
        recentBackers: prev.recentBackers + (Math.random() > 0.92 ? 1 : 0),
        communitySize: prev.communitySize + (Math.random() > 0.96 ? 1 : 0),
        engagementRate: Math.min(95, Math.max(75, prev.engagementRate + (Math.random() - 0.5) * 1.5))
      }));

      // Add new activity
      if (Math.random() > 0.7) {
        const activities = [
          { type: 'backer' as const, message: 'New adventurer joined the quest!' },
          { type: 'share' as const, message: 'Someone shared the mystical journey!' },
          { type: 'visit' as const, message: 'New visitor exploring the realm!' },
          { type: 'demo' as const, message: 'Adventurer tried the interactive demo!' }
        ];
        
        const activity = activities[Math.floor(Math.random() * activities.length)];
        setRecentActivity(prev => [
          {
            id: `activity-${Date.now()}`,
            ...activity,
            timestamp: new Date()
          },
          ...prev.slice(0, 4) // Keep only 5 most recent
        ]);
      }
    }, 3000);

    // Initialize with realistic base values
    setLiveStats({
      activeVisitors: 8 + Math.floor(Math.random() * 6),
      recentBackers: Math.floor(Math.random() * 3),
      communitySize: 156 + Math.floor(Math.random() * 20),
      engagementRate: 82 + Math.random() * 8
    });

    return () => clearInterval(interval);
  }, []);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'backer': return <Star className="w-3 h-3 text-ethereal-gold" />;
      case 'share': return <MessageCircle className="w-3 h-3 text-luminous-azure" />;
      case 'visit': return <Users className="w-3 h-3 text-verdant-glyph" />;
      case 'demo': return <Activity className="w-3 h-3 text-ember-flame" />;
      default: return <Activity className="w-3 h-3" />;
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const seconds = Math.floor((new Date().getTime() - timestamp.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    return `${Math.floor(minutes / 60)}h ago`;
  };

  return (
    <section className="py-12 bg-gradient-to-br from-mystic-blue/50 via-ancient-stone/30 to-mystic-blue/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 bg-gradient-to-r from-verdant-glyph/20 to-luminous-azure/20 rounded-full text-verdant-glyph text-sm font-medium border border-verdant-glyph/30 backdrop-blur-sm">
              🔴 Live Activity
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-cinzel">
            Community <span className="gradient-text">Pulse</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Live Stats */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-luminous-azure/30 glass-effect backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-cinzel flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-luminous-azure animate-pulse" />
                  Live Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-ancient-stone/30 rounded-lg">
                    <div className="text-2xl font-bold text-verdant-glyph animate-glow">
                      {liveStats.activeVisitors}
                    </div>
                    <div className="text-xs text-slate-300">Active Now</div>
                    <div className="flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-verdant-glyph rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="text-center p-3 bg-ancient-stone/30 rounded-lg">
                    <div className="text-2xl font-bold text-ethereal-gold animate-glow">
                      {liveStats.recentBackers}
                    </div>
                    <div className="text-xs text-slate-300">New Backers</div>
                    <div className="text-xs text-ethereal-gold/70">Today</div>
                  </div>
                  
                  <div className="text-center p-3 bg-ancient-stone/30 rounded-lg">
                    <div className="text-2xl font-bold text-luminous-azure animate-glow">
                      {liveStats.communitySize}
                    </div>
                    <div className="text-xs text-slate-300">Community</div>
                    <div className="text-xs text-luminous-azure/70">Total</div>
                  </div>
                  
                  <div className="text-center p-3 bg-ancient-stone/30 rounded-lg">
                    <div className="text-2xl font-bold text-ember-flame animate-glow">
                      {liveStats.engagementRate.toFixed(0)}%
                    </div>
                    <div className="text-xs text-slate-300">Engagement</div>
                    <div className="text-xs text-ember-flame/70">Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-ethereal-gold/30 glass-effect backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-cinzel flex items-center gap-2">
                  <Activity className="w-5 h-5 text-ethereal-gold animate-pulse" />
                  Live Feed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.length === 0 ? (
                  <div className="text-center text-slate-400 py-4">
                    <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Waiting for activity...</p>
                  </div>
                ) : (
                  recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 p-2 bg-ancient-stone/20 rounded-lg animate-fade-in"
                    >
                      <div className="mt-1">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white leading-tight">
                          {activity.message}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {formatTimeAgo(activity.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-ancient-stone/40 to-mystic-blue/40 rounded-xl p-6 max-w-2xl mx-auto border border-ethereal-gold/20 backdrop-blur-md glass-effect">
            <p className="text-slate-300 text-sm mb-4">
              Join <span className="text-ethereal-gold font-semibold">{liveStats.communitySize}+ adventurers</span> in shaping this mystical journey!
            </p>
            <div className="flex justify-center gap-3">
              <Button
                size="sm"
                className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold"
                onClick={() => window.open('https://discord.gg/knfKP9qxtM', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-ethereal-gold/50 text-ethereal-gold hover:bg-ethereal-gold/10"
                onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
              >
                <Star className="w-4 h-4 mr-2" />
                Back Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeEngagement;
