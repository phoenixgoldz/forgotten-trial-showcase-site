
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

// Singleton audio manager to prevent conflicts
class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private isTransitioning = false;
  private timeUpdateInterval: NodeJS.Timeout | null = null;
  
  private constructor() {}
  
  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }
  
  async playTrack(trackId: TrackId, callbacks: {
    onLoadStart: () => void;
    onCanPlay: () => void;
    onLoadedMetadata: (duration: number) => void;
    onTimeUpdate: (currentTime: number) => void;
    onError: (error: string) => void;
    onEnded: () => void;
    onSuccess: () => void;
  }): Promise<void> {
    // Prevent concurrent operations
    if (this.isTransitioning) {
      console.log(`🎵 Already transitioning, ignoring ${trackId}`);
      return;
    }
    
    this.isTransitioning = true;
    console.log(`🎵 Starting playback: ${trackId}`);
    
    try {
      // Clean up existing audio
      this.cleanup();
      
      // Create new audio element
      this.audio = new Audio();
      this.audio.src = TRACKS[trackId];
      this.audio.loop = true;
      this.audio.preload = 'metadata';
      
      // Set up event listeners
      this.audio.addEventListener('loadstart', callbacks.onLoadStart);
      this.audio.addEventListener('canplay', callbacks.onCanPlay);
      this.audio.addEventListener('loadedmetadata', () => {
        if (this.audio && !isNaN(this.audio.duration)) {
          callbacks.onLoadedMetadata(this.audio.duration);
        }
      });
      this.audio.addEventListener('error', (e) => {
        console.error(`Audio error for ${trackId}:`, e);
        const errorMsg = `Failed to load ${trackId}. Audio file may be missing or corrupt.`;
        callbacks.onError(errorMsg);
        this.isTransitioning = false;
      });
      this.audio.addEventListener('ended', callbacks.onEnded);
      
      // Start time tracking
      this.timeUpdateInterval = setInterval(() => {
        if (this.audio && !this.audio.paused && !isNaN(this.audio.currentTime)) {
          callbacks.onTimeUpdate(this.audio.currentTime);
        }
      }, 500);
      
      // Wait for audio to be ready
      await new Promise<void>((resolve, reject) => {
        if (!this.audio) {
          reject(new Error('Audio element not available'));
          return;
        }
        
        const timeoutId = setTimeout(() => {
          reject(new Error(`Timeout loading ${trackId}`));
        }, 10000);
        
        const onCanPlay = () => {
          clearTimeout(timeoutId);
          this.audio?.removeEventListener('canplay', onCanPlay);
          this.audio?.removeEventListener('error', onError);
          resolve();
        };
        
        const onError = (e: Event) => {
          clearTimeout(timeoutId);
          this.audio?.removeEventListener('canplay', onCanPlay);
          this.audio?.removeEventListener('error', onError);
          reject(new Error(`Failed to load ${trackId}: ${(e as any).message || 'Unknown error'}`));
        };
        
        this.audio.addEventListener('canplay', onCanPlay);
        this.audio.addEventListener('error', onError);
        
        // If already ready, resolve immediately
        if (this.audio.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          onCanPlay();
        }
      });
      
      // Attempt to play
      await this.audio.play();
      console.log(`✅ Successfully playing: ${trackId}`);
      callbacks.onSuccess();
      
    } catch (error) {
      console.error(`Playback failed for ${trackId}:`, error);
      callbacks.onError(`Playback failed for ${trackId}. ${(error as Error).message}`);
    } finally {
      this.isTransitioning = false;
    }
  }
  
  stop(): void {
    console.log('🛑 Stopping current track');
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.cleanup();
  }
  
  pause(): void {
    if (this.audio && !this.audio.paused) {
      console.log('⏸️ Pausing audio');
      this.audio.pause();
    }
  }
  
  resume(): void {
    if (this.audio && this.audio.paused) {
      console.log('▶️ Resuming audio');
      this.audio.play().catch(error => {
        console.error('Failed to resume playback:', error);
      });
    }
  }
  
  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
  
  private cleanup(): void {
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
      this.timeUpdateInterval = null;
    }
    
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio.src = '';
      this.audio.remove();
      this.audio = null;
    }
  }
  
  getCurrentAudio(): HTMLAudioElement | null {
    return this.audio;
  }
  
  isPlaying(): boolean {
    return this.audio ? !this.audio.paused : false;
  }
}

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
  
  const audioManager = useRef(AudioManager.getInstance());

  const playTrack = useCallback(async (trackId: TrackId, loop = true) => {
    // If the same track is already playing, don't restart it
    if (currentTrack === trackId && isPlaying) {
      console.log(`🎵 Track ${trackId} is already playing`);
      return;
    }

    setIsLoading(true);
    setAudioError(null);
    setCurrentTime(0);
    setDuration(0);

    try {
      await audioManager.current.playTrack(trackId, {
        onLoadStart: () => {
          console.log(`Loading ${trackId}...`);
          setIsLoading(true);
        },
        onCanPlay: () => {
          console.log(`Can play ${trackId}`);
          setIsLoading(false);
        },
        onLoadedMetadata: (dur) => {
          console.log(`Duration loaded: ${dur}s`);
          setDuration(dur);
        },
        onTimeUpdate: (time) => {
          setCurrentTime(time);
        },
        onError: (error) => {
          console.error('Audio error:', error);
          setAudioError(error);
          setIsPlaying(false);
          setCurrentTrack(null);
          setIsLoading(false);
          setCurrentTime(0);
          setDuration(0);
        },
        onEnded: () => {
          if (!loop) {
            setIsPlaying(false);
            setCurrentTime(0);
          }
        },
        onSuccess: () => {
          setIsPlaying(true);
          setCurrentTrack(trackId);
          setIsLoading(false);
          // Apply current volume settings
          audioManager.current.setVolume(isMuted ? 0 : volume);
        }
      });
    } catch (error) {
      console.error(`Failed to play ${trackId}:`, error);
      setAudioError(`Failed to play ${trackId}. Please check your connection.`);
      setIsLoading(false);
      setIsPlaying(false);
      setCurrentTrack(null);
    }
  }, [currentTrack, isPlaying, volume, isMuted]);

  const stopTrack = useCallback(() => {
    audioManager.current.stop();
    setIsPlaying(false);
    setCurrentTrack(null);
    setCurrentTime(0);
    setDuration(0);
    setAudioError(null);
  }, []);

  const pauseTrack = useCallback(() => {
    audioManager.current.pause();
    setIsPlaying(false);
  }, []);

  const resumeTrack = useCallback(() => {
    if (currentTrack) {
      audioManager.current.resume();
      setIsPlaying(true);
    }
  }, [currentTrack]);

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
    playTrack(next, true);
  }, [getNextTrack, playTrack]);

  const previousTrack = useCallback(() => {
    const prev = getPreviousTrack();
    console.log(`⏮️ Previous track: ${prev}`);
    playTrack(prev, true);
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
      audioManager.current.setVolume(newMuted ? 0 : volume);
      console.log(`🔇 ${newMuted ? 'Muted' : 'Unmuted'}`);
      return newMuted;
    });
  }, [volume]);

  const changeVolume = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    if (!isMuted) {
      audioManager.current.setVolume(clampedVolume);
    }
  }, [isMuted]);

  const playContextualAudio = useCallback((context: AudioContext) => {
    // Only start contextual audio if nothing is currently playing
    if (isPlaying || currentTrack) {
      console.log(`🎵 Audio already active, skipping contextual audio for ${context}`);
      return;
    }
    
    const contextMap: Record<AudioContext, TrackId> = {
      hero: 'ethereal',
      characters: 'medieval',
      demo: 'ambient',
      support: 'ambient',
      features: 'town'
    };
    
    const trackToPlay = contextMap[context];
    console.log(`🎵 Starting contextual audio: ${trackToPlay} for ${context}`);
    playTrack(trackToPlay, true);
  }, [isPlaying, currentTrack, playTrack]);

  // Clear errors when switching tracks
  useEffect(() => {
    if (currentTrack && audioError) {
      setAudioError(null);
    }
  }, [currentTrack, audioError]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      audioManager.current.stop();
    };
  }, []);

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
    pauseTrack,
    resumeTrack,
    nextTrack,
    previousTrack,
    toggleShuffle,
    toggleMute,
    changeVolume,
    playContextualAudio,
    availableTracks: Object.keys(TRACKS) as TrackId[]
  };
};
