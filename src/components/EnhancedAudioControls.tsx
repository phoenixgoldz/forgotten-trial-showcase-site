import { useState, useEffect, useCallback } from 'react';
import { 
  Volume2, VolumeX, Play, Pause, SkipBack, SkipForward, 
  Shuffle, Square, Music, Settings, Clock, Loader2, 
  Maximize2, Minimize2, RotateCcw, Headphones, Wifi, WifiOff,
  Heart, Download, Share2, Radio, ChevronUp, ChevronDown,
  Repeat, FastForward, Rewind, Disc3
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

const TRACK_EMOJIS = {
  ambient: '🌙',
  battle: '⚔️',
  ethereal: '✨',
  town: '🏘️',
  medieval: '🏰',
  dragonquest: '🐉',
  conquest: '🎭',
  wizard: '🧙‍♂️'
} as const;

const EnhancedAudioControls = () => {
  const {
    isPlaying, isLoading, isBuffering, volume, isMuted, currentTrack,
    currentTime, duration, isShuffled, audioQuality, playHistory,
    playTrack, pauseTrack, resumeTrack, stopTrack, toggleMute, 
    changeVolume, nextTrack, previousTrack, toggleShuffle,
    toggleAudioQuality, availableTracks
  } = useAudio();
  
  // Enhanced UI State
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState<'good' | 'poor' | 'offline'>('good');
  const [currentTrackFavorited, setCurrentTrackFavorited] = useState(false);
  const [visualizerActive, setVisualizerActive] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const [tempProgress, setTempProgress] = useState(0);

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

  // Monitor connection with enhanced detection
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

  // Enhanced play/pause with better UX
  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      pauseTrack();
    } else if (currentTrack) {
      resumeTrack();
    } else {
      // Start a random track with visual feedback
      const trackKeys = availableTracks;
      const randomIndex = Math.floor(Math.random() * trackKeys.length);
      const randomTrack = trackKeys[randomIndex];
      playTrack(randomTrack);
    }
  }, [isPlaying, currentTrack, pauseTrack, resumeTrack, playTrack, availableTracks]);

  // Enhanced volume control
  const handleVolumeChange = useCallback((values: number[]) => {
    changeVolume(values[0] / 100);
  }, [changeVolume]);

  // Enhanced progress seeking
  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    // Note: Actual seeking would require additional audio manager functionality
    console.log(`Seeking to ${newTime}s (${Math.round(percent * 100)}%)`);
  }, [duration]);

  // Enhanced random track selection
  const handleRandomTrack = useCallback(() => {
    const trackKeys = availableTracks.filter(track => track !== currentTrack);
    if (trackKeys.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * trackKeys.length);
    const randomTrack = trackKeys[randomIndex];
    playTrack(randomTrack);
  }, [availableTracks, currentTrack, playTrack]);

  // Format time with enhanced precision
  const formatTime = useCallback((time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, []);

  const currentTrackName = currentTrack ? TRACK_NAMES[currentTrack] : null;
  const currentTrackMood = currentTrack ? TRACK_MOODS[currentTrack] : null;
  const currentTrackEmoji = currentTrack ? TRACK_EMOJIS[currentTrack] : null;
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  // Enhanced collapsed state
  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Card className="fixed bottom-6 right-6 z-50 bg-ancient-stone/95 backdrop-blur-md border-2 border-ethereal-gold/40 shadow-3xl shadow-ethereal-gold/20 p-2 hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-2">
            {/* Enhanced collapsed play button */}
            <Button
              size="sm"
              variant="ghost"
              onClick={handlePlayPause}
              className={`text-ethereal-gold hover:bg-ethereal-gold/10 relative ${isPlaying ? 'animate-pulse' : ''}`}
              disabled={connectionQuality === 'offline' || isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {/* Playing indicator */}
              {isPlaying && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-verdant-glyph rounded-full animate-pulse"></div>
              )}
            </Button>
            
            {/* Quick track info */}
            {currentTrack && (
              <div className="text-xs text-ethereal-gold/70 max-w-16 truncate">
                {currentTrackEmoji}
              </div>
            )}
            
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsCollapsed(false)}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
            >
              <ChevronUp className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <Card className={`fixed bottom-6 right-6 z-50 bg-ancient-stone/95 backdrop-blur-md border-2 border-ethereal-gold/40 shadow-3xl shadow-ethereal-gold/20 transition-all duration-500 hover:shadow-glow-intense hover:border-ethereal-gold/60 ${
        isExpanded ? 'p-6 max-w-sm' : 'p-4 max-w-xs'
      } ${isPlaying ? 'ring-1 ring-verdant-glyph/30' : ''}`}>
        
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {/* Connection status with enhanced icons */}
            <div className="flex items-center gap-1">
              {connectionQuality === 'offline' ? (
                <WifiOff className="w-3 h-3 text-red-400 animate-pulse" />
              ) : connectionQuality === 'poor' ? (
                <Wifi className="w-3 h-3 text-yellow-400 animate-pulse" />
              ) : (
                <Wifi className="w-3 h-3 text-green-400" />
              )}
              <Badge variant="outline" className="text-xs px-2 py-0.5 border-ethereal-gold/30">
                {audioQuality.toUpperCase()}
              </Badge>
            </div>
            
            {/* Enhanced loading/buffering indicator */}
            {(isBuffering || isLoading) && (
              <div className="flex items-center gap-1">
                <Loader2 className="w-3 h-3 text-ethereal-gold animate-spin" />
                <span className="text-xs text-ethereal-gold/70">
                  {isLoading ? 'Loading...' : 'Buffering...'}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            {/* Enhanced control buttons */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowPlaylist(!showPlaylist)}
                  className={`text-ethereal-gold hover:bg-ethereal-gold/10 p-1 ${showPlaylist ? 'bg-ethereal-gold/20' : ''}`}
                >
                  <Radio className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Track List</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`text-ethereal-gold hover:bg-ethereal-gold/10 p-1 ${isExpanded ? 'bg-ethereal-gold/20' : ''}`}
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
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Minimize</TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Enhanced Now Playing Display */}
        <div className="bg-ancient-stone/20 rounded-lg p-4 mb-4 border border-ethereal-gold/20 relative overflow-hidden">
          {/* Animated background for playing state */}
          {isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ethereal-gold/5 to-transparent -translate-x-full animate-pulse"></div>
          )}
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              {/* Enhanced track icon */}
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-ethereal-gold/20 to-ember-flame/20 flex items-center justify-center border border-ethereal-gold/30 ${isPlaying ? 'animate-pulse' : ''}`}>
                {currentTrack ? (
                  <span className="text-lg">{currentTrackEmoji}</span>
                ) : (
                  <Disc3 className="w-5 h-5 text-ethereal-gold/60" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Music className={`w-3 h-3 text-ethereal-gold ${isPlaying ? 'animate-pulse' : ''}`} />
                  <span className="text-ethereal-gold font-semibold text-xs">
                    {isPlaying ? '▶️ Playing' : currentTrack ? '⏸️ Paused' : '⏹️ Ready'}
                  </span>
                  {isShuffled && (
                    <Badge variant="outline" className="text-xs px-1 py-0 bg-ember-flame/10 text-ember-flame border-ember-flame/30">
                      🔀
                    </Badge>
                  )}
                </div>
                
                {currentTrack ? (
                  <div className="space-y-1">
                    <div className="text-ethereal-gold/90 font-medium text-sm truncate">
                      {currentTrackName}
                    </div>
                    {currentTrackMood && (
                      <div className="text-xs text-ethereal-gold/60">
                        {currentTrackMood} Atmosphere
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-ethereal-gold/60 text-xs">
                    Choose your soundtrack
                  </div>
                )}
              </div>

              {/* Enhanced favorite button */}
              {currentTrack && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setCurrentTrackFavorited(!currentTrackFavorited)}
                      className={`p-1 transition-all duration-200 ${
                        currentTrackFavorited 
                          ? 'text-red-400 hover:text-red-300' 
                          : 'text-ethereal-gold/60 hover:text-red-400'
                      }`}
                    >
                      <Heart className={`w-3 h-3 ${currentTrackFavorited ? 'fill-current animate-pulse' : ''}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{currentTrackFavorited ? 'Remove from favorites' : 'Add to favorites'}</TooltipContent>
                </Tooltip>
              )}
            </div>

            {/* Enhanced time display */}
            {currentTrack && (
              <div className="flex items-center justify-between text-xs text-ethereal-gold/70">
                <span className="font-mono bg-ancient-stone/30 px-2 py-1 rounded">
                  {formatTime(currentTime)}
                </span>
                <span className="text-ethereal-gold/30">•</span>
                <span className="font-mono bg-ancient-stone/30 px-2 py-1 rounded">
                  {formatTime(duration)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        {currentTrack && (
          <div className="mb-4">
            <div 
              className="w-full bg-ancient-stone/30 rounded-full h-3 overflow-hidden border border-ethereal-gold/20 cursor-pointer hover:h-4 transition-all duration-200 group"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-gradient-to-r from-ethereal-gold via-ember-flame to-verdant-glyph rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${Math.max(0, Math.min(100, progressPercentage))}%` }}
              >
                {/* Progress glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                {/* Progress handle */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-ethereal-gold rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Main Controls */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={previousTrack}
                className="text-ethereal-gold hover:bg-ethereal-gold/10 hover:scale-110 transition-all duration-200"
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
                className="text-ethereal-gold hover:bg-ethereal-gold/10 bg-ethereal-gold/5 rounded-full w-14 h-14 hover:scale-110 transition-all duration-200 shadow-lg relative"
                disabled={isLoading || connectionQuality === 'offline'}
              >
                {isLoading || isBuffering ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
                {/* Play button glow */}
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full bg-ethereal-gold/20 animate-ping"></div>
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
                className="text-ethereal-gold hover:bg-ethereal-gold/10 hover:scale-110 transition-all duration-200"
                disabled={isLoading}
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Next (Ctrl+→)</TooltipContent>
          </Tooltip>
        </div>

        {/* Enhanced Secondary Controls */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={stopTrack}
                className="text-ember-flame hover:bg-ember-flame/10 hover:scale-110 transition-all duration-200"
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
                className={`hover:bg-ethereal-gold/10 transition-all duration-200 hover:scale-110 ${
                  isShuffled ? 'text-ember-flame bg-ember-flame/10' : 'text-ethereal-gold'
                }`}
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
                onClick={handleRandomTrack}
                className="text-verdant-glyph hover:bg-verdant-glyph/10 hover:scale-110 transition-all duration-200"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Random Track</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleAudioQuality}
                className="text-ethereal-gold hover:bg-ethereal-gold/10 hover:scale-110 transition-all duration-200"
              >
                <Headphones className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Audio Quality</TooltipContent>
          </Tooltip>
        </div>

        {/* Enhanced Volume Control */}
        <div className="flex items-center gap-3 mb-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleMute}
                onMouseEnter={() => setShowVolumeSlider(true)}
                className="text-ethereal-gold hover:bg-ethereal-gold/10 hover:scale-110 transition-all duration-200"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{isMuted ? 'Unmute (Ctrl+M)' : 'Mute (Ctrl+M)'}</TooltipContent>
          </Tooltip>
          
          <div 
            className="flex-1 relative"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className={`cursor-pointer transition-all duration-200 ${showVolumeSlider ? 'h-4' : 'h-3'}`}
            />
          </div>
          
          <span className="text-xs text-ethereal-gold/70 font-mono w-10 text-right bg-ancient-stone/30 px-2 py-1 rounded">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>

        {/* Enhanced Playlist */}
        {showPlaylist && (
          <div className="bg-ancient-stone/20 rounded-lg p-3 border border-ethereal-gold/20 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-ethereal-gold">Track Library</h4>
              <Badge variant="outline" className="text-xs px-2 py-1">
                {availableTracks.length} tracks
              </Badge>
            </div>
            <div className="space-y-1 max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-ethereal-gold/50 scrollbar-track-ancient-stone/30">
              {availableTracks.map((trackId) => (
                <button
                  key={trackId}
                  onClick={() => playTrack(trackId)}
                  className={`w-full text-left text-xs p-3 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                    currentTrack === trackId 
                      ? 'bg-ethereal-gold/20 text-ethereal-gold border border-ethereal-gold/30' 
                      : 'text-ethereal-gold/70 hover:bg-ethereal-gold/10 hover:text-ethereal-gold'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base">{TRACK_EMOJIS[trackId]}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{TRACK_NAMES[trackId]}</div>
                      <div className="text-xs text-current opacity-60">{TRACK_MOODS[trackId]}</div>
                    </div>
                    {currentTrack === trackId && isPlaying && (
                      <div className="w-2 h-2 bg-verdant-glyph rounded-full animate-pulse"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Expanded Controls */}
        {isExpanded && (
          <div className="space-y-4 border-t border-ethereal-gold/20 pt-4">
            {/* Recent History with enhanced design */}
            {playHistory.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-ethereal-gold mb-2 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Recently Played
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {playHistory.slice(0, 4).map((trackId, index) => (
                    <button
                      key={`${trackId}-${index}`}
                      onClick={() => playTrack(trackId)}
                      className="text-xs bg-ancient-stone/40 hover:bg-ethereal-gold/20 text-ethereal-gold/80 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-1"
                    >
                      <span className="text-xs">{TRACK_EMOJIS[trackId]}</span>
                      {TRACK_NAMES[trackId]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced keyboard shortcuts info */}
            <div className="bg-ancient-stone/20 rounded-lg p-3 border border-ethereal-gold/20">
              <h4 className="text-xs font-semibold text-ethereal-gold mb-2">Keyboard Shortcuts</h4>
              <div className="text-xs text-ethereal-gold/60 space-y-1">
                <div><kbd className="bg-ethereal-gold/20 px-1 rounded text-ethereal-gold">Space</kbd> Play/Pause</div>
                <div><kbd className="bg-ethereal-gold/20 px-1 rounded text-ethereal-gold">Ctrl+←/→</kbd> Skip tracks</div>
                <div><kbd className="bg-ethereal-gold/20 px-1 rounded text-ethereal-gold">Ctrl+M</kbd> Mute</div>
                <div><kbd className="bg-ethereal-gold/20 px-1 rounded text-ethereal-gold">Ctrl+S</kbd> Shuffle</div>
                <div><kbd className="bg-ethereal-gold/20 px-1 rounded text-ethereal-gold">Esc</kbd> Stop</div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </TooltipProvider>
  );
};

export default EnhancedAudioControls;