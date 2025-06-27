
import { Volume2, VolumeX, Play, Pause, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useAudio } from "@/hooks/useAudio";

const AudioControls = () => {
  const { isPlaying, volume, isMuted, audioError, playTrack, stopTrack, toggleMute, changeVolume } = useAudio();

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-ancient-stone/90 to-mystic-blue/90 backdrop-blur-md rounded-2xl p-4 border border-ethereal-gold/30 shadow-xl max-w-xs">
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => isPlaying ? stopTrack() : playTrack('ambient')}
          className="text-ethereal-gold hover:bg-ethereal-gold/10"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
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
      
      {audioError ? (
        <div className="flex items-center gap-2 text-xs text-amber-400 mt-2">
          <AlertCircle className="w-3 h-3" />
          <span className="text-center leading-tight">Audio files needed for sound</span>
        </div>
      ) : (
        <div className="text-xs text-ethereal-gold/70 mt-2 text-center">
          Mystical Ambience
        </div>
      )}
    </div>
  );
};

export default AudioControls;
