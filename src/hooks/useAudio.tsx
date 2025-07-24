
import { useState, useEffect, useRef, useCallback } from 'react';

type TrackId = 'ambient' | 'battle' | 'ethereal' | 'town' | 'medieval' | 'dragonquest' | 'conquest' | 'wizard';
type AudioContext = 'hero' | 'characters' | 'demo' | 'support' | 'features';

// Enhanced audio quality settings
const AUDIO_QUALITY_SETTINGS = {
  preload: 'metadata' as const,
  crossOrigin: 'anonymous' as const,
  defaultVolume: 0.3,
  fadeInDuration: 1200,
  fadeOutDuration: 800,
  crossfadeDuration: 1000
};

// Use proper paths for GitHub Pages deployment
const getAudioPath = (filename: string): string => {
  // Use absolute paths that work with GitHub Pages
  return `./audio/${filename}`;
};

const TRACKS: Record<TrackId, string> = {
  ambient: getAudioPath('fantasy-song-363806.mp3'),
  battle: getAudioPath('battle-of-the-dragons-8037.mp3'), 
  ethereal: getAudioPath('elves-song-ethereal-fantasy-elf-music-363281.mp3'),
  town: getAudioPath('market-town-of-turelli-135459.mp3'),
  medieval: getAudioPath('rpg-medieval-animated-music-320583.mp3'),
  dragonquest: getAudioPath('alexander-nakarada-dragonquest.mp3'),
  conquest: getAudioPath('conquest-jester-dance.mp3'),
  wizard: getAudioPath('walen-wizard-magic.mp3')
};

// Fallback to existing audio files if primary ones fail
const FALLBACK_TRACKS: Record<TrackId, string> = {
  ambient: getAudioPath('rpg-medieval-animated-music-320583.mp3'),
  battle: getAudioPath('battle-of-the-dragons-8037.mp3'),
  ethereal: getAudioPath('elves-song-ethereal-fantasy-elf-music-363281.mp3'), 
  town: getAudioPath('market-town-of-turelli-135459.mp3'),
  medieval: getAudioPath('rpg-medieval-animated-music-320583.mp3'),
  dragonquest: getAudioPath('alexander-nakarada-dragonquest.mp3'),
  conquest: getAudioPath('conquest-jester-dance.mp3'),
  wizard: getAudioPath('walen-wizard-magic.mp3')
};

// Enhanced singleton audio manager with fade support
class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private isTransitioning = false;
  private timeUpdateInterval: NodeJS.Timeout | null = null;
  private fadeInterval: NodeJS.Timeout | null = null;
  
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
    onBuffering?: (isBuffering: boolean) => void;
    onQualityChange?: (quality: string) => void;
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
      
      // Create new audio element with enhanced settings
      this.audio = new Audio();
      this.audio.loop = true;
      this.audio.preload = AUDIO_QUALITY_SETTINGS.preload;
      this.audio.crossOrigin = AUDIO_QUALITY_SETTINGS.crossOrigin;
      this.audio.volume = 0; // Start silent for fade-in
      this.audio.src = TRACKS[trackId];
      
      // Enhanced buffering detection
      this.audio.addEventListener('waiting', () => callbacks.onBuffering?.(true));
      this.audio.addEventListener('canplaythrough', () => callbacks.onBuffering?.(false));
      
      // Remove the duplicate error listener since we handle it below
      
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
        // Try fallback if we haven't already
        if (this.audio && this.audio.src.includes(TRACKS[trackId])) {
          console.log(`🎵 Trying fallback for ${trackId}`);
          this.audio.src = FALLBACK_TRACKS[trackId];
          return; // Let it try again with fallback
        }
        const errorMsg = `Failed to load ${trackId}. Audio file may be missing.`;
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
          reject(new Error(`Failed to load ${trackId}: ${e instanceof ErrorEvent ? e.message : 'Unknown error'}`));
        };
        
        this.audio.addEventListener('canplay', onCanPlay);
        this.audio.addEventListener('error', onError);
        
        // If already ready, resolve immediately
        if (this.audio.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          onCanPlay();
        }
      });
      
      // Attempt to play with enhanced fade-in
      await this.audio.play();
      this.fadeIn(AUDIO_QUALITY_SETTINGS.defaultVolume, AUDIO_QUALITY_SETTINGS.fadeInDuration);
      console.log(`✅ Successfully playing: ${trackId}`);
      callbacks.onSuccess();
      callbacks.onQualityChange?.('High Quality Audio Active');
      
    } catch (error) {
      console.error(`Playback failed for ${trackId}:`, error);
      callbacks.onError(`Playback failed for ${trackId}. ${(error as Error).message}`);
    } finally {
      this.isTransitioning = false;
    }
  }
  
  stop(): void {
    console.log('🛑 Stopping current track');
    if (this.audio && !this.audio.paused) {
      this.fadeOut(() => {
        this.cleanup();
      });
    } else {
      this.cleanup();
    }
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

  // Enhanced smooth fade-in effect
  private fadeIn(targetVolume: number, duration = AUDIO_QUALITY_SETTINGS.fadeInDuration): void {
    if (!this.audio || this.fadeInterval) return;
    
    this.clearFadeInterval();
    const startVolume = 0;
    const volumeStep = (targetVolume - startVolume) / (duration / 50);
    let currentVolume = startVolume;
    
    this.audio.volume = currentVolume;
    
    this.fadeInterval = setInterval(() => {
      if (!this.audio) {
        this.clearFadeInterval();
        return;
      }
      
      currentVolume += volumeStep;
      if (currentVolume >= targetVolume) {
        currentVolume = targetVolume;
        this.audio.volume = currentVolume;
        this.clearFadeInterval();
      } else {
        this.audio.volume = currentVolume;
      }
    }, 50);
  }

  // Enhanced smooth fade-out effect
  private fadeOut(onComplete?: () => void, duration = AUDIO_QUALITY_SETTINGS.fadeOutDuration): void {
    if (!this.audio || this.fadeInterval) {
      onComplete?.();
      return;
    }
    
    this.clearFadeInterval();
    const startVolume = this.audio.volume;
    const volumeStep = startVolume / (duration / 50);
    let currentVolume = startVolume;
    
    this.fadeInterval = setInterval(() => {
      if (!this.audio) {
        this.clearFadeInterval();
        onComplete?.();
        return;
      }
      
      currentVolume -= volumeStep;
      if (currentVolume <= 0) {
        currentVolume = 0;
        this.audio.volume = currentVolume;
        this.audio.pause();
        this.clearFadeInterval();
        onComplete?.();
      } else {
        this.audio.volume = currentVolume;
      }
    }, 50);
  }

  private clearFadeInterval(): void {
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
  }
  
  private cleanup(): void {
    this.clearFadeInterval();
    
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

// Utility function for formatting time
const formatTime = (time: number): string => {
  if (isNaN(time) || time === 0) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackId | null>(null);
  const [volume, setVolume] = useState(AUDIO_QUALITY_SETTINGS.defaultVolume);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [playHistory, setPlayHistory] = useState<TrackId[]>([]);
  const [audioQuality, setAudioQuality] = useState<'high' | 'medium' | 'low'>('high');
  
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
    setIsBuffering(false);

    try {
      await audioManager.current.playTrack(trackId, {
        onLoadStart: () => {
          console.log(`Loading ${trackId}...`);
          setIsLoading(true);
          setIsBuffering(true);
        },
        onCanPlay: () => {
          console.log(`Can play ${trackId}`);
          setIsLoading(false);
          setIsBuffering(false);
        },
        onLoadedMetadata: (dur) => {
          console.log(`Duration loaded: ${dur}s`);
          setDuration(dur);
        },
        onTimeUpdate: (time) => {
          setCurrentTime(time);
        },
        onBuffering: (buffering) => {
          setIsBuffering(buffering);
        },
        onQualityChange: (quality) => {
          console.log(`Audio quality: ${quality}`);
        },
        onError: (error) => {
          console.error('Audio error:', error);
          setAudioError(error);
          setIsPlaying(false);
          setCurrentTrack(null);
          setIsLoading(false);
          setIsBuffering(false);
          setCurrentTime(0);
          setDuration(0);
          
          // Enhanced error feedback
          console.error("Audio Error:", error);
        },
        onEnded: () => {
          if (!loop) {
            setIsPlaying(false);
            setCurrentTime(0);
            
            // Auto-play next track when current ends (if not looping)
            if (isShuffled || playHistory.length > 0) {
              setTimeout(() => {
                nextTrack();
              }, 500);
            }
          }
        },
        onSuccess: () => {
          setIsPlaying(true);
          setCurrentTrack(trackId);
          setIsLoading(false);
          setIsBuffering(false);
          
          // Add to play history
          setPlayHistory(prev => {
            const updated = [trackId, ...prev.filter(t => t !== trackId)];
            return updated.slice(0, 10); // Keep last 10 tracks
          });
          
          // Apply current volume settings
          audioManager.current.setVolume(isMuted ? 0 : volume);
          
          // Track info is now displayed in the AudioControls component
          console.log(`✅ Now playing: ${trackId}`);
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
      support: 'wizard',
      features: 'town'
    };
    
    const trackToPlay = contextMap[context];
    console.log(`🎵 Starting contextual audio: ${trackToPlay} for ${context}`);
    
    // Add small delay to ensure smooth transition
    setTimeout(() => {
      playTrack(trackToPlay, true).catch(error => {
        console.error(`Failed to play contextual audio: ${error}`);
      });
    }, 200);
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

  // Enhanced volume control with better UX
  const changeVolumeWithFeedback = useCallback((newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolume(clampedVolume);
    if (!isMuted) {
      audioManager.current.setVolume(clampedVolume);
    }
  }, [isMuted]);

  // Enhanced audio quality toggle
  const toggleAudioQuality = useCallback(() => {
    setAudioQuality(prev => {
      const qualities = ['high', 'medium', 'low'] as const;
      const currentIndex = qualities.indexOf(prev);
      const nextQuality = qualities[(currentIndex + 1) % qualities.length];
      
      console.log(`Audio quality switched to ${nextQuality}`);
      
      return nextQuality;
    });
  }, []);

  // Get recently played tracks
  const getRecentTracks = useCallback(() => {
    return playHistory.slice(0, 5);
  }, [playHistory]);

  return {
    isPlaying,
    isLoading,
    isBuffering,
    currentTrack,
    volume,
    isMuted,
    audioError,
    currentTime,
    duration,
    isShuffled,
    audioQuality,
    playHistory: getRecentTracks(),
    playTrack,
    stopTrack,
    pauseTrack,
    resumeTrack,
    nextTrack,
    previousTrack,
    toggleShuffle,
    toggleMute,
    changeVolume: changeVolumeWithFeedback,
    toggleAudioQuality,
    playContextualAudio,
    availableTracks: Object.keys(TRACKS) as TrackId[]
  };
};
