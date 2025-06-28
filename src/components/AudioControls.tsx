
import { Volume2, VolumeX, Play, Pause, AlertCircle, Music, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAudio } from "@/hooks/useAudio";
import { useState } from "react";

const AudioControls = () => {
  const { 
    isPlaying, 
    isLoading,
    volume, 
    isMuted, 
    audioError, 
    currentTrack,
    playTrack, 
    stopTrack, 
    toggleMute, 
    changeVolume,
    availableTracks
  } = useAudio();
  
  const [isExpanded, setIsExpanded] = useState(false);

  const trackNames = {
    ambient: 'Mystical Ambient',
    battle: 'Battle Theme',
    ethereal: 'Ethereal Elves',
    town: 'Market Town',
    medieval: 'Medieval Adventure'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-gradient-to-r from-ancient-stone/95 to-mystic-blue/95 backdrop-blur-md rounded-2xl border border-ethereal-gold/30 shadow-xl transition-all duration-300 ${
        isExpanded ? 'p-6 max-w-sm' : 'p-4 max-w-xs'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => isPlaying ? stopTrack() : playTrack('ambient')}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
              disabled={isLoading}
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
              onClick={toggleMute}
              className="text-ethereal-gold hover:bg-ethereal-gold/10"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            
            <div className="w-20">
              <Slider
                value={[volume * 100]}
                onValueChange={(value) => changeVolume(value[0] / 100)}
                max={100}
                step={1}
                className="cursor-pointer"
              />
            </div>
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-ethereal-gold hover:bg-ethereal-gold/10"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
        
        {isExpanded && (
          <div className="space-y-3 animate-fade-in">
            <div className="space-y-2">
              <label className="text-xs text-ethereal-gold/70 font-medium">Select Track</label>
              <Select value={currentTrack || ''} onValueChange={(value) => playTrack(value as any)}>
                <SelectTrigger className="w-full bg-ancient-stone/20 border-ethereal-gold/30 text-white">
                  <SelectValue placeholder="Choose music..." />
                </SelectTrigger>
                <SelectContent>
                  {availableTracks.map((track) => (
                    <SelectItem key={track} value={track}>
                      {trackNames[track as keyof typeof trackNames] || track}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2 text-xs">
              <Music className="w-3 h-3 text-ethereal-gold animate-pulse" />
              <span className="text-ethereal-gold/70">
                Now: {currentTrack ? trackNames[currentTrack as keyof typeof trackNames] : 'None'}
              </span>
            </div>
          </div>
        )}
        
        {audioError ? (
          <div className="flex items-center gap-2 text-xs text-amber-400 mt-2">
            <AlertCircle className="w-3 h-3" />
            <span className="text-center leading-tight">Audio files needed for sound</span>
          </div>
        ) : (
          <div className="text-xs text-ethereal-gold/70 mt-2 text-center">
            {currentTrack ? trackNames[currentTrack as keyof typeof trackNames] : 'Mystical Ambience'}
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioControls;
