
import { useEffect, useState } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';

const ContextualAudio = () => {
  const { playContextualAudio } = useAudio();
  const location = useLocation();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Listen for user interactions to enable audio
  useEffect(() => {
    const handleUserInteraction = () => {
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
    
    // Only attempt contextual audio after user interaction and on initial home page load
    if (path === '/' && hasUserInteracted) {
      console.log('🎵 User has interacted, attempting contextual audio for home page');
      // Small delay to ensure audio context is ready
      setTimeout(() => {
        playContextualAudio('hero');
      }, 100);
    }
  }, [location.pathname, hasUserInteracted, playContextualAudio]);

  return null;
};

export default ContextualAudio;
