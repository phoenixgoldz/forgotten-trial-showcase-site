import { Volume2, VolumeX, Play, Pause, AlertCircle, Music, Settings, SkipBack, SkipForward, Shuffle, Square, RotateCcw, Clock, Loader2, Wifi, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useAudio } from "@/hooks/useAudio";
import { useState, useEffect } from "react";

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

const AudioControls = () => {
  const { 
    isPlaying, 
    isLoading,
    isBuffering,
    volume, 
    isMuted, 
    audioError, 
    currentTrack,
    currentTime,
    duration,
    isShuffled,
    audioQuality,
    playHistory,
    playTrack, 
    pauseTrack,
    resumeTrack,
    stopTrack,
    toggleMute, 
    changeVolume,
    nextTrack,
    previousTrack,
    toggleShuffle,
    toggleAudioQuality,
    availableTracks
  } = useAudio();
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showRecentTracks, setShowRecentTracks] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState<'good' | 'poor' | 'offline'>('good');
  const [showEqualizer, setShowEqualizer] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Monitor connection quality
  useEffect(() => {
    const updateConnectionStatus = () => {
      if (!navigator.onLine) {
        setConnectionQuality('offline');
      } else if (isBuffering) {
        setConnectionQuality('poor');
      } else {
        setConnectionQuality('good');
      }
    };

    updateConnectionStatus();
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);

    return () => {
      window.removeEventListener('online', updateConnectionStatus);
      window.removeEventListener('offline', updateConnectionStatus);
    };
  }, [isBuffering]);

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else if (currentTrack) {
      resumeTrack();
    } else {
      // Start with ethereal track if nothing is playing
      playTrack('ethereal');
    }
  };

  const handleStop = () => {
    stopTrack();
  };

  const handleTrackSelect = (trackId: string) => {
    if (availableTracks.includes(trackId as any)) {
      playTrack(trackId as any);
    }
  };

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0] / 100;
    changeVolume(newVolume);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTrackName = currentTrack ? TRACK_NAMES[currentTrack as keyof typeof TRACK_NAMES] : null;
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
    }`}>
      <div className={`bg-ancient-stone/95 backdrop-blur-md rounded-2xl border border-ethereal-gold/30 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-ethereal-gold/20 ${
        isMinimized ? 'p-3 max-w-xs' : isExpanded ? 'p-6 max-w-md' : 'p-4 max-w-sm'
      }`}>
        {/* Toggle Visibility Button */}
        {!isVisible && (
          <button
            onClick={() => setIsVisible(true)}
            className="absolute -top-2 -left-2 bg-ethereal-gold/20 hover:bg-ethereal-gold/30 text-ethereal-gold rounded-full p-1 transition-colors duration-200"
            aria-label="Show audio controls"
          >
            <Music className="w-3 h-3" />
          </button>
        )}
        
        {isVisible && (
          <>
            {/* Minimize Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute -top-2 -right-2 bg-ethereal-gold/20 hover:bg-ethereal-gold/30 text-ethereal-gold rounded-full p-1 transition-colors duration-200"
              aria-label="Hide audio controls"
            >
              <div className="w-3 h-3 border border-current rounded-full" />
            </button>

            {/* Enhanced Status Row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                {/* Connection indicator */}
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center gap-1">
                      {connectionQuality === 'offline' ? (
                        <WifiOff className="w-3 h-3 text-red-400" />
                      ) : connectionQuality === 'poor' ? (
                        <Wifi className="w-3 h-3 text-yellow-400" />
                      ) : (
                        <Wifi className="w-3 h-3 text-green-400" />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connection: {connectionQuality}</p>
                  </TooltipContent>
                </Tooltip>

                {/* Audio quality indicator */}
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  {audioQuality.toUpperCase()}
                </Badge>

                {/* Buffering indicator */}
                {isBuffering && (
                  <Loader2 className="w-3 h-3 text-ethereal-gold animate-spin" />
                )}
              </div>

              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                  aria-label="Toggle mini mode"
                >
                  <div className={`w-3 h-3 border border-current transition-transform ${isMinimized ? 'rotate-45' : ''}`} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowRecentTracks(!showRecentTracks)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                  aria-label="Recent tracks"
                >
                  <Clock className="w-3 h-3" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setShowEqualizer(!showEqualizer)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                  aria-label="Audio visualizer"
                >
                  <div className="flex gap-0.5">
                    <div className={`w-0.5 h-2 bg-current ${isPlaying ? 'animate-pulse' : ''}`} />
                    <div className={`w-0.5 h-3 bg-current ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.1s' }} />
                    <div className={`w-0.5 h-2 bg-current ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.2s' }} />
                  </div>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleAudioQuality}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                  aria-label="Toggle audio quality"
                >
                  <Settings className="w-3 h-3" />
                </Button>
              </div>
            </div>

            {/* Conditionally show content based on minimized state */}
            {!isMinimized && (
              <>
                {/* Main Controls */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={previousTrack}
                          className="text-ethereal-gold hover:bg-ethereal-gold/10"
                          disabled={isLoading}
                          aria-label="Previous track"
                        >
                          <SkipBack className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Previous Track</TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handlePlayPause}
                          className="text-ethereal-gold hover:bg-ethereal-gold/10"
                          disabled={isLoading || connectionQuality === 'offline'}
                          aria-label={isPlaying ? "Pause audio" : "Play audio"}
                        >
                          {isLoading || isBuffering ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : isPlaying ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{isPlaying ? 'Pause' : 'Play'}</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handleStop}
                          className="text-ember-flame hover:bg-ember-flame/10"
                          disabled={isLoading || !currentTrack}
                          aria-label="Stop audio"
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
                          onClick={nextTrack}
                          className="text-ethereal-gold hover:bg-ethereal-gold/10"
                          disabled={isLoading}
                          aria-label="Next track"
                        >
                          <SkipForward className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Next Track</TooltipContent>
                    </Tooltip>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={toggleShuffle}
                          className={`hover:bg-ethereal-gold/10 ${isShuffled ? 'text-ember-flame' : 'text-ethereal-gold'}`}
                          aria-label={isShuffled ? "Turn off shuffle" : "Turn on shuffle"}
                        >
                          <Shuffle className="w-4 h-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{isShuffled ? 'Shuffle Off' : 'Shuffle On'}</TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-ethereal-gold hover:bg-ethereal-gold/10"
                    aria-label={isExpanded ? "Collapse audio controls" : "Expand audio controls"}
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}

            {/* Minimized controls - show only essential buttons */}
            {isMinimized && (
              <div className="flex items-center justify-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handlePlayPause}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10"
                  disabled={isLoading || connectionQuality === 'offline'}
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                >
                  {isLoading || isBuffering ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : isPlaying ? (
                    <Pause className="w-3 h-3" />
                  ) : (
                    <Play className="w-3 h-3" />
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleMute}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                </Button>
              </div>
            )}

            {/* Enhanced Current Track Display */}
            <div className="bg-ancient-stone/20 rounded-lg p-3 mb-3 border border-ethereal-gold/20">
              <div className="flex items-center gap-2 mb-2">
                <Music className={`w-4 h-4 text-ethereal-gold ${isPlaying ? 'animate-pulse' : ''}`} />
                <span className="text-ethereal-gold font-semibold text-sm">
                  {isPlaying ? '▶️ Now Playing' : currentTrack ? '⏸️ Paused' : '⏹️ No Track'}
                </span>
                {isShuffled && <span className="text-ember-flame">🔀</span>}
              </div>
              
              {currentTrack ? (
                <div className="space-y-1">
                  <div className="text-ethereal-gold/90 font-medium text-sm truncate">
                    {currentTrackName}
                  </div>
                  <div className="flex items-center justify-between text-xs text-ethereal-gold/70">
                    <span className="font-mono">{formatTime(currentTime)}</span>
                    <span className="text-ethereal-gold/50">/</span>
                    <span className="font-mono">{formatTime(duration)}</span>
                  </div>
                </div>
              ) : (
                <div className="text-ethereal-gold/60 text-xs italic">
                  Select a track to start playing
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {currentTrack && !isMinimized && (
              <div className="mb-3">
                <div className="w-full bg-ancient-stone/30 rounded-full h-2 overflow-hidden border border-ethereal-gold/20 cursor-pointer">
                  <div 
                    className="h-full bg-ethereal-gold rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${Math.max(0, Math.min(100, progressPercentage))}%` }}
                  />
                </div>
              </div>
            )}

            {/* Audio Visualizer */}
            {showEqualizer && isPlaying && !isMinimized && (
              <div className="mb-3 p-3 bg-ancient-stone/20 rounded-lg border border-ethereal-gold/20">
                <div className="flex items-end justify-center gap-1 h-8">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      className="bg-ethereal-gold/60 rounded-full animate-pulse"
                      style={{
                        width: '3px',
                        height: `${20 + Math.random() * 20}px`,
                        animationDelay: `${i * 100}ms`,
                        animationDuration: `${800 + Math.random() * 400}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Volume Controls */}
            {!isMinimized && (
              <div className="flex items-center gap-3 mb-3">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={toggleMute}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                
                <div className="flex-1">
                  <Slider
                    value={[isMuted ? 0 : volume * 100]}
                    onValueChange={handleVolumeChange}
                    max={100}
                    step={1}
                    className="cursor-pointer"
                    aria-label="Volume control"
                  />
                </div>
                
                <span className="text-xs text-ethereal-gold/70 font-mono w-8">
                  {Math.round(isMuted ? 0 : volume * 100)}%
                </span>
              </div>
            )}
            
            {/* Recent Tracks Quick Access */}
            {showRecentTracks && playHistory.length > 0 && (
              <div className="mb-3 p-3 bg-ancient-stone/30 rounded-lg border border-ethereal-gold/20 animate-fade-in">
                <p className="text-xs text-ethereal-gold/70 font-medium mb-2">Recent Tracks</p>
                <div className="flex flex-wrap gap-1">
                  {playHistory.map((trackId, index) => (
                    <Button
                      key={`${trackId}-${index}`}
                      size="sm"
                      variant="ghost"
                      onClick={() => handleTrackSelect(trackId)}
                      className="text-xs p-1 h-6 text-ethereal-gold/80 hover:text-ethereal-gold hover:bg-ethereal-gold/10"
                    >
                      {TRACK_NAMES[trackId as keyof typeof TRACK_NAMES]?.slice(0, 8)}...
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Expanded Controls */}
            {isExpanded && (
              <div className="space-y-3 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-xs text-ethereal-gold/70 font-medium">Select Track</label>
                  <Select value={currentTrack || ''} onValueChange={handleTrackSelect}>
                    <SelectTrigger className="w-full bg-ancient-stone/20 border-ethereal-gold/30 text-white">
                      <SelectValue placeholder="Choose music..." />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTracks.map((track) => (
                        <SelectItem key={track} value={track}>
                          {TRACK_NAMES[track as keyof typeof TRACK_NAMES] || track}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Audio Quality Controls */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ethereal-gold/70 font-medium">Audio Quality</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleAudioQuality}
                    className="text-xs text-ethereal-gold hover:bg-ethereal-gold/10"
                  >
                    {audioQuality.toUpperCase()} →
                  </Button>
                </div>

                {/* Connection Status */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ethereal-gold/70 font-medium">Connection</span>
                  <div className="flex items-center gap-2">
                    {connectionQuality === 'offline' ? (
                      <Badge variant="destructive" className="text-xs">Offline</Badge>
                    ) : connectionQuality === 'poor' ? (
                      <Badge variant="outline" className="text-xs text-yellow-400">Poor</Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs text-green-400">Good</Badge>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Enhanced Status/Error Display */}
            {audioError ? (
              <div className="flex items-center gap-2 text-xs text-amber-400 mt-2 p-3 bg-amber-900/20 rounded-lg border border-amber-600/30 animate-fade-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0 animate-pulse" />
                <div className="flex-1">
                  <p className="font-medium">Audio Error</p>
                  <p className="leading-tight opacity-80">{audioError}</p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => currentTrack && playTrack(currentTrack)}
                  className="text-amber-300 hover:text-amber-100 p-1"
                >
                  <RotateCcw className="w-3 h-3" />
                </Button>
              </div>
            ) : connectionQuality === 'offline' ? (
              <div className="text-xs text-red-400 mt-2 text-center animate-pulse flex items-center justify-center gap-2">
                <WifiOff className="w-3 h-3" />
                🔌 No internet connection
              </div>
            ) : isLoading || isBuffering ? (
              <div className="text-xs text-ethereal-gold/70 mt-2 text-center animate-pulse flex items-center justify-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin" />
                🎵 {isBuffering ? 'Buffering audio...' : 'Loading audio magic...'}
              </div>
            ) : (
              <div className="text-xs text-ethereal-gold/70 mt-2 text-center">
                🎵 Audio System {audioQuality.toUpperCase()} • {currentTrack ? `${playHistory.length > 0 ? `${playHistory.length} tracks in history` : 'Controls available'}` : 'Click to play music'}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AudioControls;