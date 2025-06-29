
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import MysteryQuotes from "@/components/MysteryQuotes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AudioControls from "@/components/AudioControls";
import ContextualAudio from "@/components/ContextualAudio";
import ImprovedErrorBoundary from "@/components/ImprovedErrorBoundary";
import SkeletonLoader from "@/components/SkeletonLoader";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate progressive loading
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    
    // Set a timeout to show content even if images don't load
    const loadingTimeout = setTimeout(() => {
      setLoadingProgress(100);
      setIsLoaded(true);
      clearInterval(progressInterval);
    }, 3000);

    // Preload critical images with progress tracking
    const criticalImages = [
      '/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png',
      '/lovable-uploads/965e98d3-fb85-40c6-9263-e357de40fd59.png',
      '/lovable-uploads/6f040610-e708-4437-889b-206c9c9c9d50.png',
      '/lovable-uploads/728cafee-48b6-4a16-b5aa-d8fe7882ef2d.png',
      '/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png',
      '/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png',
      '/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png'
    ];
    
    const preloadPromises = criticalImages.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          console.log(`Image ${index + 1} loaded successfully: ${src}`);
          resolve(src);
        };
        img.onerror = () => {
          console.warn(`Failed to load image ${index + 1}: ${src}`);
          resolve(src); // Still resolve on error to continue
        };
        img.src = src;
      });
    });
    
    Promise.allSettled(preloadPromises).then(() => {
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
      setLoadingProgress(100);
      setTimeout(() => setIsLoaded(true), 300); // Small delay for smooth transition
      console.log('Image preloading completed');
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(loadingTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-ethereal-gold/30 border-t-ethereal-gold rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-ethereal-gold font-citizen">
                {Math.round(loadingProgress)}%
              </span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-ethereal-gold font-cinzel text-2xl animate-pulse">
              Awakening the forgotten memories...
            </h1>
            
            <div className="w-full bg-ancient-stone/30 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-ethereal-gold to-ember-flame transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            
            <p className="text-gray-300 text-sm font-citizen">
              Preparing your mystical adventure...
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
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/90 via-ancient-stone/80 to-mystic-blue/90"></div>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`bg-particle-${i}`}
              className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 5}s`,
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
