
import { useEffect, useState } from 'react';
import { useAudio } from '@/hooks/useAudio';
import { useLocation } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const ContextualAudio = () => {
  const { playContextualAudio, isPlaying, currentTrack, audioQuality } = useAudio();
  const { toast } = useToast();
  const location = useLocation();
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [hasTriedAutoPlay, setHasTriedAutoPlay] = useState(false);
  const [lastRoute, setLastRoute] = useState<string>('');

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
      
      // Enhanced contextual audio logic with better UX
      if (audioContext && !isPlaying && !currentTrack && path !== lastRoute) {
        console.log(`🎵 Attempting contextual audio for ${path} -> ${audioContext}`);
        setHasTriedAutoPlay(true);
        setLastRoute(path);
        
        // Show contextual audio notification
        const pageNames = {
          '/': 'Home',
          '/characters': 'Characters',
          '/demo': 'Demo',
          '/support': 'Support',
          '/features': 'Features'
        };
        
        toast({
          title: "🎵 Atmospheric Audio",
          description: `Playing ambient sounds for ${pageNames[path as keyof typeof pageNames] || 'this page'}`,
        });
        
        // Longer delay to ensure smooth page load
        setTimeout(() => {
          playContextualAudio(audioContext!);
        }, 1200);
      }
    }
  }, [location.pathname, hasUserInteracted, hasTriedAutoPlay, isPlaying, currentTrack, playContextualAudio, lastRoute, toast]);

  return null;
};

export default ContextualAudio;
