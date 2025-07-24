import { useState, useEffect } from 'react';
import { Music, Sparkles, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

const TRACK_DESCRIPTIONS = {
  ambient: 'Peaceful fantasy melodies',
  battle: 'Epic combat orchestration',
  ethereal: 'Mystical elven harmonies',
  town: 'Cheerful marketplace sounds',
  medieval: 'Heroic adventure themes',
  dragonquest: 'Legendary quest music',
  conquest: 'Playful tavern tunes',
  wizard: 'Mysterious arcane ambience'
} as const;

const TrackStartupNotification = () => {
  const { autoStartupTrack, isPlaying, hasStartedOnce } = useAudio();
  const [showNotification, setShowNotification] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'selecting' | 'loading' | 'playing' | 'hidden'>('hidden');

  useEffect(() => {
    if (autoStartupTrack && !hasStartedOnce) {
      setShowNotification(true);
      setAnimationPhase('selecting');

      // Selection phase (1.5 seconds)
      const selectTimer = setTimeout(() => {
        setAnimationPhase('loading');
      }, 1500);

      // Loading phase (when audio starts)
      const loadTimer = setTimeout(() => {
        setAnimationPhase('playing');
      }, 3000);

      // Hide notification after playing starts
      const hideTimer = setTimeout(() => {
        setAnimationPhase('hidden');
        setTimeout(() => setShowNotification(false), 500);
      }, 7000);

      return () => {
        clearTimeout(selectTimer);
        clearTimeout(loadTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [autoStartupTrack, hasStartedOnce]);

  if (!showNotification || !autoStartupTrack) return null;

  const trackName = TRACK_NAMES[autoStartupTrack];
  const trackDescription = TRACK_DESCRIPTIONS[autoStartupTrack];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 ${
      animationPhase === 'hidden' ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-mystic-blue/40 backdrop-blur-sm"></div>
      
      {/* Notification Card */}
      <Card className={`relative bg-ancient-stone/95 backdrop-blur-md border-2 border-ethereal-gold/40 shadow-3xl max-w-md mx-4 transition-all duration-700 ${
        animationPhase === 'hidden' ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <div className="p-8 text-center space-y-6">
          {/* Icon with animation */}
          <div className="flex justify-center">
            <div className={`relative w-16 h-16 rounded-full bg-ethereal-gold/20 border-2 border-ethereal-gold/40 flex items-center justify-center transition-all duration-500 ${
              animationPhase === 'selecting' ? 'animate-pulse' : 
              animationPhase === 'loading' ? 'animate-spin' : 
              'animate-bounce'
            }`}>
              {animationPhase === 'selecting' && <Sparkles className="w-8 h-8 text-ethereal-gold" />}
              {animationPhase === 'loading' && <Music className="w-8 h-8 text-ethereal-gold" />}
              {animationPhase === 'playing' && <Play className="w-8 h-8 text-ethereal-gold" />}
              
              {/* Mystical glow effect */}
              <div className="absolute inset-0 rounded-full bg-ethereal-gold/20 animate-ping"></div>
            </div>
          </div>

          {/* Status Message */}
          <div className="space-y-3">
            {animationPhase === 'selecting' && (
              <>
                <h3 className="text-ethereal-gold font-cinzel text-xl font-bold">
                  🎲 Selecting Random Track
                </h3>
                <p className="text-slate-300 font-citizen">
                  Choosing the perfect soundtrack for your adventure...
                </p>
              </>
            )}

            {animationPhase === 'loading' && (
              <>
                <h3 className="text-ethereal-gold font-cinzel text-xl font-bold">
                  📻 Loading Audio
                </h3>
                <div className="space-y-2">
                  <p className="text-slate-300 font-citizen font-semibold">
                    {trackName}
                  </p>
                  <p className="text-slate-400 font-citizen text-sm">
                    {trackDescription}
                  </p>
                </div>
              </>
            )}

            {animationPhase === 'playing' && (
              <>
                <h3 className="text-ethereal-gold font-cinzel text-xl font-bold">
                  🎵 Now Playing
                </h3>
                <div className="space-y-2">
                  <p className="text-slate-200 font-citizen font-semibold text-lg">
                    {trackName}
                  </p>
                  <Badge className="bg-verdant-glyph/20 text-verdant-glyph border-verdant-glyph/30">
                    Auto-Selected
                  </Badge>
                </div>
              </>
            )}
          </div>

          {/* Progress indication */}
          <div className="w-full bg-ancient-stone/40 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-ethereal-gold to-ember-flame transition-all duration-1000 ease-out ${
                animationPhase === 'selecting' ? 'w-1/3' :
                animationPhase === 'loading' ? 'w-2/3' :
                'w-full'
              }`}
            />
          </div>

          {/* Flavor text */}
          <p className="text-ethereal-gold/60 font-citizen text-xs italic">
            Immerse yourself in The Forgotten Trial's mystical soundscape
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TrackStartupNotification;