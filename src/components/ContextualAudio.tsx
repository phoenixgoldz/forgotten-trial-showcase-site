
import { useEffect } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';

const ContextualAudio = () => {
  const { playContextualAudio } = useAudio();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    
    // Only attempt contextual audio on initial home page load
    if (path === '/') {
      console.log('🎵 Attempting contextual audio for home page');
      playContextualAudio('hero');
    }
  }, [location.pathname, playContextualAudio]);

  // This component doesn't render anything, it just handles context-aware audio
  return null;
};

export default ContextualAudio;
