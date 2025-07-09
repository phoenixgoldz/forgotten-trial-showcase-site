
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
    
    // Enhanced contextual audio logic
    if (hasUserInteracted && !hasTriedAutoPlay) {
      let audioContext: 'hero' | 'characters' | 'demo' | 'support' | 'features' | null = null;
      
      switch (path) {
        case '/':
          audioContext = 'hero';
          break;
        case '/characters':
          audioContext = 'characters';
          break;
        case '/demo':
          audioContext = 'demo';
          break;
        case '/support':
          audioContext = 'support';
          break;
        case '/features':
          audioContext = 'features';
          break;
      }
      
      // Only start contextual audio if no audio is currently playing and we have a context
      if (audioContext && !isPlaying && !currentTrack) {
        console.log(`🎵 Attempting contextual audio for ${path} -> ${audioContext}`);
        setHasTriedAutoPlay(true);
        
        // Longer delay to ensure smooth page load
        setTimeout(() => {
          playContextualAudio(audioContext!);
        }, 1000);
      }
    }
  }, [location.pathname, hasUserInteracted, hasTriedAutoPlay, isPlaying, currentTrack, playContextualAudio]);

  return null;
};

export default ContextualAudio;
