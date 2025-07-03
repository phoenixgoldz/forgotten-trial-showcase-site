
import { useEffect, useState } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';

const ContextualAudio = () => {
  const { playContextualAudio, isPlaying, currentTrack } = useAudio();
  const location = useLocation();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [hasTriedAutoPlay, setHasTriedAutoPlay] = useState(false);

  // Listen for user interactions to enable audio
  useEffect(() => {
    const handleUserInteraction = () => {
      console.log('🎵 User interaction detected');
      setHasUserInteracted(true);
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname;
    
    // Only attempt contextual audio after user interaction, on home page, and if no audio is playing
    if (path === '/' && hasUserInteracted && !hasTriedAutoPlay && !isPlaying && !currentTrack) {
      console.log('🎵 Attempting contextual audio for home page');
      setHasTriedAutoPlay(true);
      
      // Small delay to ensure audio context is ready
      setTimeout(() => {
        playContextualAudio('hero');
      }, 500);
    }
  }, [location.pathname, hasUserInteracted, hasTriedAutoPlay, isPlaying, currentTrack, playContextualAudio]);

  return null;
};

export default ContextualAudio;
