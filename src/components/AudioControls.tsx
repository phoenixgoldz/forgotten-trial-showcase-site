
import { Volume2, VolumeX, Play, Pause, AlertCircle, Music, Settings, SkipBack, SkipForward, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAudio } from "@/hooks/useAudio";
import { useState } from "react";

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
    volume, 
    isMuted, 
    audioError, 
    currentTrack,
    currentTime,
    duration,
    isShuffled,
    playTrack, 
    stopTrack, 
    toggleMute, 
    changeVolume,
    nextTrack,
    previousTrack,
    toggleShuffle,
    availableTracks
  } = useAudio();
  
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      stopTrack();
    } else if (currentTrack) {
      // Resume current track
      playTrack(currentTrack);
    } else {
      // Start with ambient track
      playTrack('ambient');
    }
  };

  const handleTrackSelect = (trackId: string) => {
    if (availableTracks.includes(trackId as any)) {
      // Always stop current track first, then play new one
      if (isPlaying) {
        stopTrack(false); // Stop immediately without fade
      }
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

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className={`bg-gradient-to-r from-ancient-stone/95 to-mystic-blue/95 backdrop-blur-md rounded-2xl border border-ethereal-gold/30 shadow-xl transition-all duration-300 ${
        isExpanded ? 'p-6 max-w-sm' : 'p-4 max-w-xs'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={previousTrack}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
              disabled={isLoading || !currentTrack}
              aria-label="Previous track"
            >
              <SkipBack className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={handlePlayPause}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
              disabled={isLoading}
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-ethereal-gold/30 border-t-ethereal-gold rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={nextTrack}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
              disabled={isLoading || !currentTrack}
              aria-label="Next track"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={toggleShuffle}
              className={`hover:bg-ethereal-gold/10 ${isShuffled ? 'text-ember-flame' : 'text-ethereal-gold'}`}
              aria-label={isShuffled ? "Turn off shuffle" : "Turn on shuffle"}
            >
              <Shuffle className="w-4 h-4" />
            </Button>
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

        {/* Timestamp and Progress - Only show when we have a current track */}
        {currentTrack && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-ethereal-gold/70 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="w-full bg-ancient-stone/30 rounded-full h-1">
              <div 
                className="h-full bg-ethereal-gold rounded-full transition-all duration-300"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}

        {/* Volume and Mute Controls */}
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
              value={[volume * 100]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="cursor-pointer"
              aria-label="Volume control"
            />
          </div>
        </div>
        
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
            
            <div className="flex items-center gap-2 text-xs">
              <Music className="w-3 h-3 text-ethereal-gold animate-pulse" />
              <span className="text-ethereal-gold/70">
                {isPlaying ? 'Playing' : 'Ready'}: {currentTrackName || 'Select a track'}
              </span>
              {isShuffled && <span className="text-ember-flame">🔀</span>}
            </div>
          </div>
        )}
        
        {audioError ? (
          <div className="flex items-center gap-2 text-xs text-amber-400 mt-2">
            <AlertCircle className="w-3 h-3" />
            <span className="text-center leading-tight">Audio ready to play!</span>
          </div>
        ) : (
          <div className="text-xs text-ethereal-gold/70 mt-2 text-center">
            {currentTrackName || 'Mystical Ambience Ready'}
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioControls;
