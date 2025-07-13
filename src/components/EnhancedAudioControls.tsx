import { useState, useEffect, useCallback } from 'react';
import { 
  Volume2, VolumeX, Play, Pause, SkipBack, SkipForward, 
  Shuffle, Square, Music, Settings, Clock, Loader2, 
  Maximize2, Minimize2, RotateCcw, Headphones, Wifi, WifiOff,
  Heart, Download, Share2, Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { useAudio } from "@/hooks/useAudio";
import { useAudioKeyboardShortcuts } from "@/hooks/useAudioKeyboardShortcuts";

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

const TRACK_MOODS = {
  ambient: 'Peaceful',
  battle: 'Intense',
  ethereal: 'Mystical',
  town: 'Cheerful',
  medieval: 'Epic',
  dragonquest: 'Heroic',
  conquest: 'Playful',
  wizard: 'Mysterious'
} as const;

const EnhancedAudioControls = () => {
  const {
    isPlaying, isLoading, isBuffering, volume, isMuted, currentTrack,
    currentTime, duration, isShuffled, audioQuality, playHistory,
    playTrack, pauseTrack, resumeTrack, stopTrack, toggleMute, 
    changeVolume, nextTrack, previousTrack, toggleShuffle,
    toggleAudioQuality, availableTracks
  } = useAudio();
  
  // UI State
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState<'good' | 'poor' | 'offline'>('good');
  const [currentTrackFavorited, setCurrentTrackFavorited] = useState(false);
  const [visualizerActive, setVisualizerActive] = useState(false);

  // Enhanced keyboard shortcuts
  useAudioKeyboardShortcuts({
    isPlaying,
    isMuted,
    pauseTrack,
    resumeTrack,
    previousTrack,
    nextTrack,
    toggleMute,
    toggleShuffle,
    stopTrack,
    currentTrack
  });

  // Monitor connection
  useEffect(() => {
    const updateConnection = () => {
      if (!navigator.onLine) setConnectionQuality('offline');
      else if (isBuffering) setConnectionQuality('poor');
      else setConnectionQuality('good');
    };

    updateConnection();
    window.addEventListener('online', updateConnection);
    window.addEventListener('offline', updateConnection);
    return () => {
      window.removeEventListener('online', updateConnection);
      window.removeEventListener('offline', updateConnection);
    };
  }, [isBuffering]);

  const handlePlayPause = () => {
    if (isPlaying) pauseTrack();
    else if (currentTrack) resumeTrack();
    else playTrack('ethereal');
  };

  const handleVolumeChange = (values: number[]) => {
    changeVolume(values[0] / 100);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTrackName = currentTrack ? TRACK_NAMES[currentTrack] : null;
  const currentTrackMood = currentTrack ? TRACK_MOODS[currentTrack] : null;
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Card className="fixed bottom-6 right-6 z-50 bg-ancient-stone/95 backdrop-blur-md border border-ethereal-gold/30 p-2">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={handlePlayPause}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
              disabled={connectionQuality === 'offline'}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsCollapsed(false)}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Card className={`fixed bottom-6 right-6 z-50 bg-ancient-stone/95 backdrop-blur-md border border-ethereal-gold/30 shadow-2xl transition-all duration-300 ${
        isExpanded ? 'p-6 max-w-sm' : 'p-4 max-w-xs'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {connectionQuality === 'offline' ? (
                <WifiOff className="w-3 h-3 text-red-400" />
              ) : connectionQuality === 'poor' ? (
                <Wifi className="w-3 h-3 text-yellow-400" />
              ) : (
                <Wifi className="w-3 h-3 text-green-400" />
              )}
              <Badge variant="outline" className="text-xs px-2 py-0.5">
                {audioQuality.toUpperCase()}
              </Badge>
            </div>
            {isBuffering && <Loader2 className="w-3 h-3 text-ethereal-gold animate-spin" />}
          </div>

          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                >
                  <Radio className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Playlist</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                >
                  <Settings className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Settings</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsCollapsed(true)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                >
                  <Minimize2 className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Minimize</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Now Playing Display */}
        <div className="bg-ancient-stone/20 rounded-lg p-3 mb-4 border border-ethereal-gold/20">
          <div className="flex items-center gap-2 mb-2">
            <Music className={`w-4 h-4 text-ethereal-gold ${isPlaying ? 'animate-pulse' : ''}`} />
            <span className="text-ethereal-gold font-semibold text-sm">
              {isPlaying ? '▶️ Now Playing' : currentTrack ? '⏸️ Paused' : '⏹️ No Track'}
            </span>
            {isShuffled && <span className="text-ember-flame">🔀</span>}
            
            {currentTrack && (
              <div className="ml-auto flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setCurrentTrackFavorited(!currentTrackFavorited)}
                      className={`p-1 ${currentTrackFavorited ? 'text-red-400' : 'text-ethereal-gold/60'} hover:bg-ethereal-gold/10`}
                    >
                      <Heart className={`w-3 h-3 ${currentTrackFavorited ? 'fill-current' : ''}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{currentTrackFavorited ? 'Remove from favorites' : 'Add to favorites'}</TooltipContent>
                </Tooltip>
              </div>
            )}
          </div>
          
          {currentTrack ? (
            <div className="space-y-2">
              <div className="text-ethereal-gold/90 font-medium text-sm truncate">
                {currentTrackName}
              </div>
              {currentTrackMood && (
                <div className="text-xs text-ethereal-gold/60">
                  Mood: {currentTrackMood}
                </div>
              )}
              <div className="flex items-center justify-between text-xs text-ethereal-gold/70">
                <span className="font-mono">{formatTime(currentTime)}</span>
                <span className="text-ethereal-gold/50">/</span>
                <span className="font-mono">{formatTime(duration)}</span>
              </div>
            </div>
          ) : (
            <div className="text-ethereal-gold/60 text-xs italic">
              Select a track to start your musical journey
            </div>
          )}
        </div>

        {/* Progress Bar */}
        {currentTrack && (
          <div className="mb-4">
            <div className="w-full bg-ancient-stone/30 rounded-full h-2 overflow-hidden border border-ethereal-gold/20 cursor-pointer">
              <div 
                className="h-full bg-gradient-to-r from-ethereal-gold to-ember-flame rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.max(0, Math.min(100, progressPercentage))}%` }}
              />
            </div>
          </div>
        )}

        {/* Main Controls */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={previousTrack}
                className="text-ethereal-gold hover:bg-ethereal-gold/10"
                disabled={isLoading}
              >
                <SkipBack className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Previous (Ctrl+←)</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                variant="ghost"
                onClick={handlePlayPause}
                className="text-ethereal-gold hover:bg-ethereal-gold/10 bg-ethereal-gold/5 rounded-full w-12 h-12"
                disabled={isLoading || connectionQuality === 'offline'}
              >
                {isLoading || isBuffering ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isPlaying ? 'Pause (Space)' : 'Play (Space)'}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={nextTrack}
                className="text-ethereal-gold hover:bg-ethereal-gold/10"
                disabled={isLoading}
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Next (Ctrl+→)</TooltipContent>
          </Tooltip>
        </div>

        {/* Secondary Controls */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={stopTrack}
                className="text-ember-flame hover:bg-ember-flame/10"
                disabled={!currentTrack}
              >
                <Square className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Stop</TooltipContent>
          </Tooltip>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleShuffle}
                className={`hover:bg-ethereal-gold/10 ${isShuffled ? 'text-ember-flame' : 'text-ethereal-gold'}`}
              >
                <Shuffle className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isShuffled ? 'Shuffle Off (Ctrl+S)' : 'Shuffle On (Ctrl+S)'}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleAudioQuality}
                className="text-ethereal-gold hover:bg-ethereal-gold/10"
              >
                <Headphones className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle Quality</TooltipContent>
          </Tooltip>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3 mb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleMute}
                className="text-ethereal-gold hover:bg-ethereal-gold/10"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isMuted ? 'Unmute (Ctrl+M)' : 'Mute (Ctrl+M)'}</TooltipContent>
          </Tooltip>
          
          <div className="flex-1">
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="cursor-pointer"
            />
          </div>
          
          <span className="text-xs text-ethereal-gold/70 font-mono w-8 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>

        {/* Playlist */}
        {showPlaylist && (
          <div className="bg-ancient-stone/20 rounded-lg p-3 border border-ethereal-gold/20">
            <h4 className="text-sm font-semibold text-ethereal-gold mb-2">Available Tracks</h4>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {availableTracks.map((trackId) => (
                <button
                  key={trackId}
                  onClick={() => playTrack(trackId)}
                  className={`w-full text-left text-xs p-2 rounded transition-colors ${
                    currentTrack === trackId 
                      ? 'bg-ethereal-gold/20 text-ethereal-gold' 
                      : 'text-ethereal-gold/70 hover:bg-ethereal-gold/10 hover:text-ethereal-gold'
                  }`}
                >
                  {TRACK_NAMES[trackId]} 
                  <span className="text-ethereal-gold/50 ml-2">• {TRACK_MOODS[trackId]}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Expanded Controls */}
        {isExpanded && (
          <div className="space-y-3 border-t border-ethereal-gold/20 pt-3">
            {/* Recent History */}
            {playHistory.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-ethereal-gold mb-2">Recent Tracks</h4>
                <div className="flex gap-1 flex-wrap">
                  {playHistory.slice(0, 3).map((trackId, index) => (
                    <button
                      key={`${trackId}-${index}`}
                      onClick={() => playTrack(trackId)}
                      className="text-xs bg-ancient-stone/30 hover:bg-ethereal-gold/20 text-ethereal-gold/80 px-2 py-1 rounded transition-colors"
                    >
                      {TRACK_NAMES[trackId]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Keyboard shortcuts info */}
            <div className="text-xs text-ethereal-gold/50 text-center">
              Space: Play/Pause • Ctrl+← →: Skip • Ctrl+M: Mute • Ctrl+S: Shuffle
            </div>
          </div>
        )}
      </Card>
    </TooltipProvider>
  );
};

export default EnhancedAudioControls;