
import { useEffect, useState } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';

const ContextualAudio = () => {
  const { playContextualAudio, isPlaying, currentTrack, audioQuality } = useAudio();
  const location = useLocation();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [hasTriedAutoPlay, setHasTriedAutoPlay] = useState(false);
  const [lastRoute, setLastRoute] = useState<string>('');
  const [isContextualAudioEnabled, setIsContextualAudioEnabled] = useState(true);

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
    
    // Enhanced contextual audio logic with user preference
    if (hasUserInteracted && !hasTriedAutoPlay && isContextualAudioEnabled) {
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
      
      // Enhanced contextual audio logic with better UX
      if (audioContext && !isPlaying && !currentTrack && path !== lastRoute) {
        console.log(`🎵 Attempting contextual audio for ${path} -> ${audioContext}`);
        setHasTriedAutoPlay(true);
        setLastRoute(path);
        
        console.log(`🎵 Starting contextual audio for ${path} -> ${audioContext}`);
        
        setTimeout(() => {
          playContextualAudio(audioContext!);
        }, 300);
      }
    }
  }, [location.pathname, hasUserInteracted, hasTriedAutoPlay, isPlaying, currentTrack, playContextualAudio, lastRoute, isContextualAudioEnabled]);

  // Load user preference for contextual audio
  useEffect(() => {
    const savedPreference = localStorage.getItem('forgottenTrialContextualAudio');
    if (savedPreference === 'disabled') {
      setIsContextualAudioEnabled(false);
    }
  }, []);

  return null;
};

export default ContextualAudio;
