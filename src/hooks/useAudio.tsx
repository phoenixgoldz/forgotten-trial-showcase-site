
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = {
    ambient: '/audio/mystical-ambient.mp3',
    combat: '/audio/battle-theme.mp3',
    victory: '/audio/victory-fanfare.mp3',
    mystery: '/audio/mystery-theme.mp3'
  };

  const playTrack = useCallback((trackId: keyof typeof tracks, loop = true) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;
    audio.src = tracks[trackId];
    audio.volume = isMuted ? 0 : volume;
    audio.loop = loop;
    
    // Clear any previous error
    setAudioError(null);
    
    audio.play().then(() => {
      setIsPlaying(true);
      setCurrentTrack(trackId);
      console.log(`Successfully playing: ${trackId}`);
    }).catch(error => {
      console.log('Audio playback failed - this is normal if audio files are not uploaded yet:', error);
      setAudioError('Audio files not available yet. Upload audio files to enable sound.');
      setIsPlaying(false);
      setCurrentTrack(null);
    });
  }, [volume, isMuted, tracks]);

  const stopTrack = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTrack(null);
      setAudioError(null);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (audioRef.current) {
        audioRef.current.volume = newMuted ? 0 : volume;
      }
      return newMuted;
    });
  }, [volume]);

  const changeVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = newVolume;
    }
  }, [isMuted]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return {
    isPlaying,
    currentTrack,
    volume,
    isMuted,
    audioError,
    playTrack,
    stopTrack,
    toggleMute,
    changeVolume
  };
};
