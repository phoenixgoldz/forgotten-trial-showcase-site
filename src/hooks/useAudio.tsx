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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioning = useRef(false);
  const playRequestRef = useRef<string | null>(null);

  const clearFadeInterval = useCallback(() => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  }, []);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeEventListener('timeupdate', () => {});
      audioRef.current.removeEventListener('loadedmetadata', () => {});
      audioRef.current.removeEventListener('error', () => {});
      audioRef.current.removeEventListener('ended', () => {});
      audioRef.current.src = '';
    }
    clearFadeInterval();
    isTransitioning.current = false;
    playRequestRef.current = null;
  }, [clearFadeInterval]);

  const fadeOut = useCallback((callback?: () => void) => {
    if (!audioRef.current || isTransitioning.current) return;
    
    const audio = audioRef.current;
    const startVolume = audio.volume;
    const fadeStep = startVolume / 10;
    
    clearFadeInterval();
    isTransitioning.current = true;
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > fadeStep) {
        audio.volume = Math.max(0, audio.volume - fadeStep);
      } else {
        audio.volume = 0;
        audio.pause();
        clearFadeInterval();
        isTransitioning.current = false;
        callback?.();
      }
    }, 100);
  }, [clearFadeInterval]);

  const fadeIn = useCallback((targetVolume: number) => {
    if (!audioRef.current || isTransitioning.current) return;
    
    const audio = audioRef.current;
    audio.volume = 0;
    const fadeStep = targetVolume / 10;
    
    clearFadeInterval();
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume < targetVolume - fadeStep) {
        audio.volume = Math.min(targetVolume, audio.volume + fadeStep);
      } else {
        audio.volume = targetVolume;
        clearFadeInterval();
      }
    }, 100);
  }, [clearFadeInterval]);

  const playTrack = useCallback((trackId: TrackId, loop = true, crossfade = true) => {
    // Prevent multiple simultaneous requests
    if (playRequestRef.current === trackId || isTransitioning.current) {
      console.log(`Already playing or transitioning to ${trackId}, ignoring request`);
      return;
    }

    playRequestRef.current = trackId;
    console.log(`🎵 Play request for: ${trackId}`);

    // Initialize audio element if needed
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    setIsLoading(true);
    setAudioError(null);
    
    const switchTrack = () => {
      // Clear any existing event listeners
      audio.onloadstart = null;
      audio.oncanplaythrough = null;
      audio.ontimeupdate = null;
      audio.onloadedmetadata = null;
      audio.onerror = null;
      audio.onended = null;

      // Stop current track completely
      audio.pause();
      audio.currentTime = 0;
      audio.src = TRACKS[trackId];
      audio.loop = loop;
      
      audio.onloadstart = () => setIsLoading(true);
      
      audio.oncanplaythrough = () => {
        setIsLoading(false);
        console.log(`✅ Audio ready: ${trackId}`);
      };
      
      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration || 0);
      };
      
      audio.onloadedmetadata = () => {
        setDuration(audio.duration || 0);
      };
      
      audio.onerror = () => {
        console.log(`Audio file not found: ${trackId}`);
        setAudioError('Audio files not available yet');
        setIsPlaying(false);
        setCurrentTrack(null);
        setIsLoading(false);
        playRequestRef.current = null;
      };
      
      // Attempt to play
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Only update state if this is still the current request
          if (playRequestRef.current === trackId) {
            setIsPlaying(true);
            setCurrentTrack(trackId);
            setIsLoading(false);
            
            if (crossfade) {
              fadeIn(isMuted ? 0 : volume);
            } else {
              audio.volume = isMuted ? 0 : volume;
            }
            
            console.log(`🎵 Successfully playing: ${trackId}`);
          }
          playRequestRef.current = null;
        }).catch(error => {
          console.log(`Playback failed for ${trackId}:`, error.message);
          setAudioError('Audio playback failed');
          setIsPlaying(false);
          setCurrentTrack(null);
          setIsLoading(false);
          playRequestRef.current = null;
        });
      }
    };

    // Handle track switching
    if (isPlaying && crossfade && currentTrack !== trackId) {
      fadeOut(switchTrack);
    } else {
      switchTrack();
    }
  }, [volume, isMuted, isPlaying, currentTrack, fadeOut, fadeIn]);

  const getRandomTrack = useCallback((excludeCurrent = true): TrackId => {
    const availableTracks = Object.keys(TRACKS) as TrackId[];
    const filteredTracks = excludeCurrent && currentTrack 
      ? availableTracks.filter(track => track !== currentTrack)
      : availableTracks;
    
    return filteredTracks[Math.floor(Math.random() * filteredTracks.length)];
  }, [currentTrack]);

  const getNextTrack = useCallback((): TrackId => {
    if (isShuffled) {
      return getRandomTrack();
    }
    
    const trackKeys = Object.keys(TRACKS) as TrackId[];
    const currentIndex = currentTrack ? trackKeys.indexOf(currentTrack) : -1;
    const nextIndex = (currentIndex + 1) % trackKeys.length;
    return trackKeys[nextIndex];
  }, [currentTrack, isShuffled, getRandomTrack]);

  const getPreviousTrack = useCallback((): TrackId => {
    if (isShuffled) {
      return getRandomTrack();
    }
    
    const trackKeys = Object.keys(TRACKS) as TrackId[];
    const currentIndex = currentTrack ? trackKeys.indexOf(currentTrack) : -1;
    const prevIndex = currentIndex <= 0 ? trackKeys.length - 1 : currentIndex - 1;
    return trackKeys[prevIndex];
  }, [currentTrack, isShuffled, getRandomTrack]);

  const stopTrack = useCallback((smooth = true) => {
    playRequestRef.current = null;
    
    if (audioRef.current) {
      if (smooth) {
        fadeOut(() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
          }
          setIsPlaying(false);
          setCurrentTrack(null);
          setCurrentTime(0);
          setAudioError(null);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
        setCurrentTrack(null);
        setCurrentTime(0);
        setAudioError(null);
      }
    }
  }, [fadeOut]);

  const nextTrack = useCallback(() => {
    const next = getNextTrack();
    playTrack(next, true, true);
  }, [getNextTrack, playTrack]);

  const previousTrack = useCallback(() => {
    const prev = getPreviousTrack();
    playTrack(prev, true, true);
  }, [getPreviousTrack, playTrack]);

  const toggleShuffle = useCallback(() => {
    setIsShuffled(prev => !prev);
  }, []);

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
    return cleanup;
  }, [cleanup]);

  return {
    isPlaying,
    isLoading,
    currentTrack,
    volume,
    isMuted,
    audioError,
    currentTime,
    duration,
    isShuffled,
    playTrack,
    stopTrack,
    nextTrack,
    previousTrack,
    toggleShuffle,
    toggleMute,
    changeVolume,
    playContextualAudio,
    availableTracks: Object.keys(TRACKS) as TrackId[]
  };
};
