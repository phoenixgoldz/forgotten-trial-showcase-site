
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import MysteryQuotes from "@/components/MysteryQuotes";
import Newsletter from "@/components/Newsletter";
import ProfessionalFundingProgress from "@/components/ProfessionalFundingProgress";
import Footer from "@/components/Footer";
import EnhancedNavigation from "@/components/EnhancedNavigation";
import EnhancedAudioControls from "@/components/EnhancedAudioControls";
import AudioStatusIndicator from "@/components/AudioStatusIndicator";
import ContextualAudio from "@/components/ContextualAudio";
import ImprovedErrorBoundary from "@/components/ImprovedErrorBoundary";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleSystem from "@/components/ParticleSystem";
import SocialShare from "@/components/SocialShare";
import InteractiveCursor from "@/components/InteractiveCursor";
import MysticalNotifications from "@/components/MysticalNotifications";
import FloatingActionWidget from "@/components/FloatingActionWidget";
import { GAME_ASSETS } from "@/utils/assetPaths";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Single loading process to prevent conflicts
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    
    const loadingTimeout = setTimeout(() => {
      setLoadingProgress(100);
      setTimeout(() => setIsLoaded(true), 150);
      clearInterval(progressInterval);
    }, 1800);

    // Preload critical images for homepage
    const criticalImages = [
      GAME_ASSETS.images.titlePoster,
      GAME_ASSETS.images.kickstarterBanner
    ];
    
    const preloadPromises = criticalImages.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadingProgress(prev => Math.min(prev + 10, 95));
          console.log(`✅ Image ${index + 1} loaded: ${src.split('/').pop()}`);
          resolve(src);
        };
        img.onerror = () => {
          console.warn(`⚠️ Failed to load image ${index + 1}: ${src.split('/').pop()}`);
          resolve(src);
        };
        img.src = src;
      });
    });
    
    Promise.allSettled(preloadPromises).then(() => {
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoaded(true);
        console.log('🎮 All game assets loaded successfully!');
      }, 150);
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center relative overflow-hidden">
        {/* Enhanced particle system for loading */}
        <ParticleSystem density={20} interactive={true} />
        
        <div className="text-center max-w-md mx-auto px-4 relative z-10">
          <div className="relative mb-6">
            <div className="w-20 h-20 border-3 border-ethereal-gold/20 border-t-ethereal-gold rounded-full animate-spin mx-auto shadow-lg shadow-ethereal-gold/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-ethereal-gold font-citizen">
                {Math.round(loadingProgress)}%
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-ethereal-gold font-cinzel text-2xl animate-pulse drop-shadow-lg">
              ⚔️ The Forgotten Trial 🏰
            </h1>
            
            <div className="w-full bg-ancient-stone/40 rounded-full h-2 overflow-hidden border border-ethereal-gold/30">
              <div 
                className="h-full bg-gradient-to-r from-ethereal-gold via-ember-flame to-verdant-glyph transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            
            <p className="text-gray-200 text-sm font-citizen leading-relaxed">
              🎭 Preparing your adventure...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ImprovedErrorBoundary>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Enhanced UI Components */}
        <ScrollProgress />
        <InteractiveCursor />
        <MysticalNotifications />
        
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/90 via-ancient-stone/80 to-mystic-blue/90"></div>
          <ParticleSystem density={15} interactive={false} />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <EnhancedNavigation />
          <div className="pt-16">
            <Hero />
            <MysteryQuotes />
            <ProfessionalFundingProgress />
            <Newsletter />
          </div>
          <Footer />
        </div>

        {/* Enhanced Audio & Social Components */}
        <AudioStatusIndicator />
        <ContextualAudio />
        <EnhancedAudioControls />
        <SocialShare />
        <FloatingActionWidget />
      </div>
    </ImprovedErrorBoundary>
  );
};

export default Index;
