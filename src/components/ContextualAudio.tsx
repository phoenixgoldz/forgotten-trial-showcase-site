
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
        
        // Show contextual audio notification with dismiss option
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
          action: (
            <button 
              onClick={() => {
                setIsContextualAudioEnabled(false);
                localStorage.setItem('forgottenTrialContextualAudio', 'disabled');
              }}
              className="text-xs px-2 py-1 bg-amber-500/20 hover:bg-amber-500/30 rounded text-amber-200 transition-colors"
            >
              Disable Auto-play
            </button>
          ),
        });
        
        // Shorter delay for better responsiveness
        setTimeout(() => {
          playContextualAudio(audioContext!);
        }, 800);
      }
    }
  }, [location.pathname, hasUserInteracted, hasTriedAutoPlay, isPlaying, currentTrack, playContextualAudio, lastRoute, toast, isContextualAudioEnabled]);

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
