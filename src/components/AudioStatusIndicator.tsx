import { useState, useEffect } from 'react';
import { Music, Wifi, WifiOff, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useAudio } from '@/hooks/useAudio';

const AudioStatusIndicator = () => {
  const { isPlaying, currentTrack, volume, isMuted, audioQuality } = useAudio();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Show indicator when track changes or connection status changes
  useEffect(() => {
    if (currentTrack || !isOnline) {
      setShowIndicator(true);
      const timer = setTimeout(() => setShowIndicator(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentTrack, isOnline]);

  if (!showIndicator && isOnline && !currentTrack) return null;

  return (
    <div className="fixed top-20 right-4 z-40 transition-all duration-300">
      <div className="bg-ancient-stone/95 backdrop-blur-md rounded-lg border border-ethereal-gold/30 p-3 shadow-lg">
        <div className="flex items-center gap-2">
          {/* Connection Status */}
          <div className="flex items-center gap-1">
            {isOnline ? (
              <Wifi className="w-3 h-3 text-green-400" />
            ) : (
              <WifiOff className="w-3 h-3 text-red-400" />
            )}
            <Badge variant="outline" className="text-xs">
              {audioQuality.toUpperCase()}
            </Badge>
          </div>

          {/* Audio Status */}
          {currentTrack && (
            <>
              <div className="w-px h-4 bg-ethereal-gold/30" />
              <div className="flex items-center gap-1">
                {isPlaying ? (
                  <Play className="w-3 h-3 text-green-400" />
                ) : (
                  <Pause className="w-3 h-3 text-yellow-400" />
                )}
                <Music className={`w-3 h-3 text-ethereal-gold ${isPlaying ? 'animate-pulse' : ''}`} />
              </div>
            </>
          )}

          {/* Volume Status */}
          <div className="flex items-center gap-1">
            {isMuted ? (
              <VolumeX className="w-3 h-3 text-red-400" />
            ) : (
              <Volume2 className="w-3 h-3 text-ethereal-gold" />
            )}
            <span className="text-xs text-ethereal-gold/70 font-mono">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>
        </div>

        {!isOnline && (
          <div className="text-xs text-red-400 mt-1">
            Offline - Audio may not work
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioStatusIndicator;