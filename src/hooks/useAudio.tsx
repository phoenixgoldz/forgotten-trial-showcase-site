
import { useState, useEffect, useRef, useCallback } from 'react';

interface AudioTrack {
  id: string;
  src: string;
  volume: number;
  loop: boolean;
}

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const tracks = {
    ambient: '/audio/fantasy-song-363806.mp3',
    battle: '/audio/battle-of-the-dragons-8037.mp3',
    ethereal: '/audio/elves-song-ethereal-fantasy-elf-music-363281.mp3',
    town: '/audio/market-town-of-turelli-135459.mp3',
    medieval: '/audio/rpg-medieval-animated-music-320583.mp3'
  };

  const fadeOut = useCallback((callback?: () => void) => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    const startVolume = audio.volume;
    const fadeStep = startVolume / 20; // 20 steps for smooth fade
    
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > fadeStep) {
        audio.volume -= fadeStep;
      } else {
        audio.volume = 0;
        audio.pause();
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
        }
        if (callback) callback();
      }
    }, 50);
  }, []);

  const fadeIn = useCallback((targetVolume: number) => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    audio.volume = 0;
    const fadeStep = targetVolume / 20;
    
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume < targetVolume - fadeStep) {
        audio.volume += fadeStep;
      } else {
        audio.volume = targetVolume;
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current);
        }
      }
    }, 50);
  }, []);

  const playTrack = useCallback((trackId: keyof typeof tracks, loop = true, crossfade = true) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    setIsLoading(true);
    setAudioError(null);
    
    const switchTrack = () => {
      audio.src = tracks[trackId];
      audio.loop = loop;
      
      audio.addEventListener('loadstart', () => setIsLoading(true));
      audio.addEventListener('canplaythrough', () => setIsLoading(false));
      audio.addEventListener('error', () => {
        console.log('Audio playback failed - this is normal if audio files are not uploaded yet');
        setAudioError('Audio files not available yet. Upload audio files to enable sound.');
        setIsPlaying(false);
        setCurrentTrack(null);
        setIsLoading(false);
      });
      
      audio.play().then(() => {
        setIsPlaying(true);
        setCurrentTrack(trackId);
        setIsLoading(false);
        if (crossfade) {
          fadeIn(isMuted ? 0 : volume);
        } else {
          audio.volume = isMuted ? 0 : volume;
        }
        console.log(`Successfully playing: ${trackId}`);
      }).catch(error => {
        console.log('Audio playback failed:', error);
        setAudioError('Audio playback failed. Please check your audio files.');
        setIsPlaying(false);
        setCurrentTrack(null);
        setIsLoading(false);
      });
    };

    if (isPlaying && crossfade) {
      fadeOut(switchTrack);
    } else {
      switchTrack();
    }
  }, [volume, isMuted, isPlaying, fadeOut, fadeIn, tracks]);

  const stopTrack = useCallback((smooth = true) => {
    if (audioRef.current) {
      if (smooth) {
        fadeOut(() => {
          setIsPlaying(false);
          setCurrentTrack(null);
          setAudioError(null);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setCurrentTrack(null);
        setAudioError(null);
      }
    }
  }, [fadeOut]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (audioRef.current) {
        if (newMuted) {
          fadeOut();
        } else {
          fadeIn(volume);
        }
      }
      return newMuted;
    });
  }, [volume, fadeOut, fadeIn]);

  const changeVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current && !isMuted && isPlaying) {
      audioRef.current.volume = newVolume;
    }
  }, [isMuted, isPlaying]);

  // Context-aware audio switching based on page/section
  const playContextualAudio = useCallback((context: 'hero' | 'characters' | 'demo' | 'support' | 'features') => {
    const contextMap = {
      hero: 'ethereal' as const,
      characters: 'medieval' as const,
      demo: 'battle' as const,
      support: 'ambient' as const,
      features: 'town' as const
    };
    
    const trackToPlay = contextMap[context] || 'ambient';
    if (currentTrack !== trackToPlay) {
      playTrack(trackToPlay, true, true);
    }
  }, [currentTrack, playTrack]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  return {
    isPlaying,
    isLoading,
    currentTrack,
    volume,
    isMuted,
    audioError,
    playTrack,
    stopTrack,
    toggleMute,
    changeVolume,
    playContextualAudio,
    availableTracks: Object.keys(tracks)
  };
};
