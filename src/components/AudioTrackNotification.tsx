import { useState, useEffect } from 'react';
import { Music, Play, Pause, SkipForward } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useAudio } from '@/hooks/useAudio';

const TRACK_NAMES = {
  ambient: 'Mystical Ambient',
  battle: 'Battle of Dragons',
  ethereal: 'Ethereal Elves',
  town: 'Market Town',
  medieval: 'Medieval Adventure',
  dragonquest: 'Dragon Quest',
  conquest: 'Jester Dance',
  wizard: 'Wizard Magic'
} as const;

const AudioTrackNotification = () => {
  const { currentTrack, isPlaying, nextTrack } = useAudio();
  const [showNotification, setShowNotification] = useState(false);
  const [lastTrack, setLastTrack] = useState<string | null>(null);

  useEffect(() => {
    if (currentTrack && currentTrack !== lastTrack) {
      setShowNotification(true);
      setLastTrack(currentTrack);
      
      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [currentTrack, lastTrack]);

  if (!showNotification || !currentTrack) return null;

  const trackName = TRACK_NAMES[currentTrack as keyof typeof TRACK_NAMES];

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
      <Card className="bg-ancient-stone/95 backdrop-blur-md border border-ethereal-gold/30 shadow-xl">
        <div className="flex items-center gap-3 p-4 min-w-80">
          {/* Album Art Placeholder */}
          <div className="w-12 h-12 bg-gradient-to-br from-ethereal-gold/20 to-ember-flame/20 rounded-lg flex items-center justify-center border border-ethereal-gold/30">
            <Music className={`w-6 h-6 text-ethereal-gold ${isPlaying ? 'animate-pulse' : ''}`} />
          </div>
          
          {/* Track Info */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-ethereal-gold truncate">
              {trackName}
            </div>
            <div className="text-xs text-ethereal-gold/60">
              {isPlaying ? '▶️ Now Playing' : '⏸️ Paused'}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => isPlaying ? undefined : nextTrack()}
              className="p-1.5 text-ethereal-gold hover:bg-ethereal-gold/10 rounded transition-colors"
              aria-label="Next track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setShowNotification(false)}
              className="p-1.5 text-ethereal-gold/60 hover:bg-ethereal-gold/10 rounded transition-colors"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="h-0.5 bg-ancient-stone/30 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-ethereal-gold to-ember-flame transition-all duration-[4000ms] ease-linear"
            style={{ width: showNotification ? '100%' : '0%' }}
          />
        </div>
      </Card>
    </div>
  );
};

export default AudioTrackNotification;