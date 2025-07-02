
import { useEffect } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';

const ContextualAudio = () => {
  const { playContextualAudio, isPlaying, currentTrack } = useAudio();
  const location = useLocation();

  useEffect(() => {
    // Only start contextual audio if no track is currently playing
    if (isPlaying && currentTrack) {
      console.log(`🎵 Audio already playing: ${currentTrack}, skipping contextual audio`);
      return;
    }

    const path = location.pathname;
    
    // Only play contextual audio on initial load for the home page
    if (path === '/' && !currentTrack) {
      console.log('🎵 Starting contextual audio for home page');
      playContextualAudio('hero');
    }
  }, [location.pathname, playContextualAudio, isPlaying, currentTrack]);

  // This component doesn't render anything, it just handles context-aware audio
  return null;
};

export default ContextualAudio;
