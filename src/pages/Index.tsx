
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import NewsTicker from "@/components/NewsTicker";
import MysteryQuotes from "@/components/MysteryQuotes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AudioControls from "@/components/AudioControls";
import ContextualAudio from "@/components/ContextualAudio";
import ImprovedErrorBoundary from "@/components/ImprovedErrorBoundary";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enhanced loading with better progress tracking
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 12;
      });
    }, 150);
    
    // Reduced timeout for faster loading
    const loadingTimeout = setTimeout(() => {
      setLoadingProgress(100);
      setIsLoaded(true);
      clearInterval(progressInterval);
    }, 2500);

    // Enhanced preloading with better error handling
    const criticalImages = [
      '/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png',
      '/lovable-uploads/965e98d3-fb85-40c6-9263-e357de40fd59.png',
      '/lovable-uploads/6f040610-e708-4437-889b-206c9c9c9d50.png',
      '/lovable-uploads/728cafee-48b6-4a16-b5aa-d8fe7882ef2d.png',
      '/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png',
      '/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png',
      '/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png',
      '/lovable-uploads/6a99999e-936c-4735-97d7-d896ed4d0f24.png'
    ];
    
    const preloadPromises = criticalImages.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadingProgress(prev => Math.min(prev + 8, 95));
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
      setTimeout(() => setIsLoaded(true), 200);
      console.log('🎮 All game assets loaded successfully!');
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
        {/* Enhanced loading background */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`loading-particle-${i}`}
              className="absolute w-1 h-1 bg-ethereal-gold/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        <div className="text-center max-w-md mx-auto px-4 relative z-10">
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-ethereal-gold/20 border-t-ethereal-gold rounded-full animate-spin mx-auto shadow-lg shadow-ethereal-gold/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-ethereal-gold font-citizen">
                {Math.round(loadingProgress)}%
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-ethereal-gold font-cinzel text-3xl animate-pulse drop-shadow-lg">
              ⚔️ Awakening the Forgotten Memories... 🏰
            </h1>
            
            <div className="w-full bg-ancient-stone/40 rounded-full h-3 overflow-hidden border border-ethereal-gold/30">
              <div 
                className="h-full bg-gradient-to-r from-ethereal-gold via-ember-flame to-verdant-glyph transition-all duration-300 ease-out shadow-lg"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            
            <p className="text-gray-200 text-base font-citizen leading-relaxed">
              🎭 Preparing your mystical adventure...<br/>
              <span className="text-ethereal-gold/80 text-sm">Four heroes await your command</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ImprovedErrorBoundary>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Optimized background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/95 via-ancient-stone/85 to-mystic-blue/95"></div>
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={`bg-particle-${i}`}
              className="absolute w-1 h-1 bg-ethereal-gold/25 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${8 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Navigation />
          <div className="pt-16">
            <NewsTicker />
            <Hero />
            <About />
            <Features />
            <Characters />
            <MysteryQuotes />
            <Newsletter />
          </div>
          <Footer />
        </div>

        {/* Audio Components */}
        <ContextualAudio />
        <AudioControls />
      </div>
    </ImprovedErrorBoundary>
  );
};

export default Index;
