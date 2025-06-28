
import { useEffect } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';

const ContextualAudio = () => {
  const { playContextualAudio, isPlaying } = useAudio();
  const location = useLocation();

  useEffect(() => {
    // Don't auto-play audio until user has interacted with audio controls at least once
    if (!isPlaying) return;

    const path = location.pathname;
    
    // Map routes to audio contexts
    if (path === '/') {
      playContextualAudio('hero');
    } else if (path === '/characters') {
      playContextualAudio('characters');
    } else if (path === '/demo') {
      playContextualAudio('demo');
    } else if (path === '/support') {
      playContextualAudio('support');
    } else if (path === '/features') {
      playContextualAudio('features');
    }
  }, [location.pathname, playContextualAudio, isPlaying]);

  // This component doesn't render anything, it just handles context-aware audio
  return null;
};

export default ContextualAudio;
