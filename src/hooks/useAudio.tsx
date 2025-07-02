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

// Global audio instance to prevent multiple instances
let globalAudio: HTMLAudioElement | null = null;
let isGlobalTransitioning = false;

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.currentTime = 0;
      globalAudio.src = '';
      globalAudio = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    isGlobalTransitioning = false;
  }, []);

  const playTrack = useCallback((trackId: TrackId, loop = true, crossfade = true) => {
    // Prevent multiple simultaneous calls
    if (isGlobalTransitioning) {
      console.log(`🎵 Transition in progress, ignoring ${trackId}`);
      return;
    }

    // If the same track is already playing, don't restart it
    if (currentTrack === trackId && isPlaying && globalAudio) {
      console.log(`🎵 Track ${trackId} is already playing`);
      return;
    }

    isGlobalTransitioning = true;
    setIsLoading(true);
    setAudioError(null);

    console.log(`🎵 Starting playback: ${trackId}`);

    // Stop and cleanup any existing audio
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.currentTime = 0;
      globalAudio.src = '';
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Create new audio element
    globalAudio = new Audio();
    globalAudio.src = TRACKS[trackId];
    globalAudio.loop = loop;
    globalAudio.volume = isMuted ? 0 : volume;
    globalAudio.preload = 'auto';

    // Set up event listeners
    const handleLoadStart = () => {
      console.log(`Loading ${trackId}...`);
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      console.log(`Can play ${trackId}`);
      setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
      if (globalAudio) {
        setDuration(globalAudio.duration || 0);
      }
    };

    const handleError = (error: Event) => {
      console.error(`Failed to load ${trackId}:`, error);
      setAudioError(`Failed to load ${trackId}`);
      setIsPlaying(false);
      setCurrentTrack(null);
      setIsLoading(false);
      isGlobalTransitioning = false;
    };

    const handleEnded = () => {
      if (!globalAudio?.loop) {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    globalAudio.addEventListener('loadstart', handleLoadStart);
    globalAudio.addEventListener('canplaythrough', handleCanPlay);
    globalAudio.addEventListener('loadedmetadata', handleLoadedMetadata);
    globalAudio.addEventListener('error', handleError);
    globalAudio.addEventListener('ended', handleEnded);

    // Start time tracking interval
    intervalRef.current = setInterval(() => {
      if (globalAudio && !globalAudio.paused) {
        setCurrentTime(globalAudio.currentTime);
      }
    }, 1000);

    // Attempt to play
    const playPromise = globalAudio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log(`✅ Successfully playing: ${trackId}`);
        setIsPlaying(true);
        setCurrentTrack(trackId);
        setIsLoading(false);
        isGlobalTransitioning = false;
      }).catch(error => {
        console.error(`Playback failed for ${trackId}:`, error);
        setAudioError(`Playback failed: ${error.message}`);
        setIsPlaying(false);
        setCurrentTrack(null);
        setIsLoading(false);
        isGlobalTransitioning = false;
      });
    }
  }, [volume, isMuted, currentTrack, isPlaying]);

  const stopTrack = useCallback(() => {
    console.log('🛑 Stopping current track');
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.currentTime = 0;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    isGlobalTransitioning = false;
  }, []);

  const getRandomTrack = useCallback((): TrackId => {
    const availableTracks = Object.keys(TRACKS) as TrackId[];
    const filteredTracks = currentTrack ? availableTracks.filter(track => track !== currentTrack) : availableTracks;
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

  const nextTrack = useCallback(() => {
    const next = getNextTrack();
    console.log(`⏭️ Next track: ${next}`);
    playTrack(next, true, true);
  }, [getNextTrack, playTrack]);

  const previousTrack = useCallback(() => {
    const prev = getPreviousTrack();
    console.log(`⏮️ Previous track: ${prev}`);
    playTrack(prev, true, true);
  }, [getPreviousTrack, playTrack]);

  const toggleShuffle = useCallback(() => {
    setIsShuffled(prev => {
      const newShuffle = !prev;
      console.log(`🔀 Shuffle ${newShuffle ? 'ON' : 'OFF'}`);
      return newShuffle;
    });
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (globalAudio) {
        globalAudio.volume = newMuted ? 0 : volume;
      }
      console.log(`🔇 ${newMuted ? 'Muted' : 'Unmuted'}`);
      return newMuted;
    });
  }, [volume]);

  const changeVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    if (globalAudio && !isMuted) {
      globalAudio.volume = clampedVolume;
    }
  }, [isMuted]);

  const playContextualAudio = useCallback((context: AudioContext) => {
    const contextMap: Record<AudioContext, TrackId> = {
      hero: 'ethereal',
      characters: 'medieval',
      demo: 'ambient',
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
