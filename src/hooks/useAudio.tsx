
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
  const isTransitioning = useRef(false);

  // Clear and cleanup audio
  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = '';
      audioRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    isTransitioning.current = false;
  }, []);

  const playTrack = useCallback((trackId: TrackId, loop = true, crossfade = true) => {
    // Prevent multiple simultaneous calls
    if (isTransitioning.current) {
      console.log(`Transition in progress, ignoring ${trackId}`);
      return;
    }

    isTransitioning.current = true;
    setIsLoading(true);
    setAudioError(null);

    console.log(`🎵 Starting playback: ${trackId}`);

    // Stop any existing audio immediately
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
    }

    // Create new audio element
    audioRef.current = new Audio();
    const audio = audioRef.current;
    
    audio.src = TRACKS[trackId];
    audio.loop = loop;
    audio.volume = isMuted ? 0 : volume;

    // Set up event listeners
    const handleLoadStart = () => {
      console.log(`Loading ${trackId}...`);
      setIsLoading(true);
    };

    const handleCanPlay = () => {
      console.log(`Can play ${trackId}`);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleError = () => {
      console.error(`Failed to load ${trackId}`);
      setAudioError(`Failed to load ${trackId}`);
      setIsPlaying(false);
      setCurrentTrack(null);
      setIsLoading(false);
      isTransitioning.current = false;
    };

    const handleEnded = () => {
      if (!audio.loop) {
        setIsPlaying(false);
        setCurrentTime(0);
      }
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    // Attempt to play
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log(`✅ Successfully playing: ${trackId}`);
        setIsPlaying(true);
        setCurrentTrack(trackId);
        setIsLoading(false);
        isTransitioning.current = false;
      }).catch(error => {
        console.error(`Playback failed for ${trackId}:`, error);
        setAudioError(`Playback failed: ${error.message}`);
        setIsPlaying(false);
        setCurrentTrack(null);
        setIsLoading(false);
        isTransitioning.current = false;
      });
    }
  }, [volume, isMuted]);

  const stopTrack = useCallback(() => {
    console.log('🛑 Stopping current track');
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    isTransitioning.current = false;
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
      if (audioRef.current) {
        audioRef.current.volume = newMuted ? 0 : volume;
      }
      console.log(`🔇 ${newMuted ? 'Muted' : 'Unmuted'}`);
      return newMuted;
    });
  }, [volume]);

  const changeVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = clampedVolume;
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
