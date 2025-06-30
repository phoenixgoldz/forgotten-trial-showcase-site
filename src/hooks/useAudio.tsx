
import { useState, useEffect, useRef, useCallback } from 'react';

type TrackId = 'ambient' | 'battle' | 'ethereal' | 'town' | 'medieval' | 'dragonquest' | 'conquest' | 'wizard';
type AudioContext = 'hero' | 'characters' | 'demo' | 'support' | 'features';

const TRACKS: Record<TrackId, string> = {
  ambient: '/audio/fantasy-song-363806.mp3',
  battle: '/audio/battle-of-the-dragons-8037.mp3',
  ethereal: '/audio/elves-song-ethereal-fantasy-elf-music-363281.mp3',
  town: '/audio/market-town-of-turelli-135459.mp3',
  medieval: '/audio/rpg-medieval-animated-music-320583.mp3',
  dragonquest: '/audio/alexander-nakarada-dragonquest.mp3',
  conquest: '/audio/conquest-jester-dance.mp3',
  wizard: '/audio/walen-wizard-magic.mp3'
};

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackId | null>(null);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearFadeInterval = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  const fadeOut = useCallback((callback?: () => void) => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    const startVolume = audio.volume;
    const fadeStep = startVolume / 20;
    
    clearFadeInterval();
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > fadeStep) {
        audio.volume = Math.max(0, audio.volume - fadeStep);
      } else {
        audio.volume = 0;
        audio.pause();
        clearFadeInterval();
        callback?.();
      }
    }, 50);
  }, [clearFadeInterval]);

  const fadeIn = useCallback((targetVolume: number) => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    audio.volume = 0;
    const fadeStep = targetVolume / 20;
    
    clearFadeInterval();
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume < targetVolume - fadeStep) {
        audio.volume = Math.min(targetVolume, audio.volume + fadeStep);
      } else {
        audio.volume = targetVolume;
        clearFadeInterval();
      }
    }, 50);
  }, [clearFadeInterval]);

  const playTrack = useCallback((trackId: TrackId, loop = true, crossfade = true) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    setIsLoading(true);
    setAudioError(null);
    
    const switchTrack = () => {
      audio.src = TRACKS[trackId];
      audio.loop = loop;
      
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlayThrough = () => setIsLoading(false);
      const handleError = () => {
        console.log('Audio playback failed - this is normal if audio files are not uploaded yet');
        setAudioError('Audio files not available yet. Upload audio files to enable sound.');
        setIsPlaying(false);
        setCurrentTrack(null);
        setIsLoading(false);
      };
      
      // Remove previous event listeners to prevent memory leaks
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('error', handleError);
      
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      audio.addEventListener('error', handleError);
      
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

    if (isPlaying && crossfade && currentTrack !== trackId) {
      fadeOut(switchTrack);
    } else {
      switchTrack();
    }
  }, [volume, isMuted, isPlaying, currentTrack, fadeOut, fadeIn]);

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
      if (audioRef.current && isPlaying) {
        if (newMuted) {
          fadeOut();
        } else {
          fadeIn(volume);
        }
      }
      return newMuted;
    });
  }, [volume, isPlaying, fadeOut, fadeIn]);

  const changeVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    if (audioRef.current && !isMuted && isPlaying) {
      audioRef.current.volume = clampedVolume;
    }
  }, [isMuted, isPlaying]);

  const playContextualAudio = useCallback((context: AudioContext) => {
    const contextMap: Record<AudioContext, TrackId> = {
      hero: 'ethereal',
      characters: 'medieval',
      demo: 'battle',
      support: 'ambient',
      features: 'town'
    };
    
    const trackToPlay = contextMap[context];
    if (currentTrack !== trackToPlay) {
      playTrack(trackToPlay, true, true);
    }
  }, [currentTrack, playTrack]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current.load();
        audioRef.current = null;
      }
      clearFadeInterval();
    };
  }, [clearFadeInterval]);

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
    availableTracks: Object.keys(TRACKS) as TrackId[]
  };
};
