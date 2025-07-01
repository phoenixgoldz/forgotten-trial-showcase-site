
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
    
    // Streamlined loading with better progress tracking
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    
    // Faster loading for better UX
    const loadingTimeout = setTimeout(() => {
      setLoadingProgress(100);
      setIsLoaded(true);
      clearInterval(progressInterval);
    }, 1800);

    // Updated image paths to use "Images" folder
    const criticalImages = [
      '/Images/Solari.png',
      '/Images/Tarrin.png',
      '/Images/Wisp.png',
      '/Images/Kael.png',
      '/Images/TitlePosterImage.png'
    ];
    
    const preloadPromises = criticalImages.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadingProgress(prev => Math.min(prev + 15, 95));
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
      setTimeout(() => setIsLoaded(true), 150);
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
        {/* Reduced loading particles for cleaner look */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={`loading-particle-${i}`}
              className="absolute w-1 h-1 bg-ethereal-gold/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
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
        {/* Reduced background effects for cleaner look */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/90 via-ancient-stone/80 to-mystic-blue/90"></div>
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={`bg-particle-${i}`}
              className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Main content - reorganized for better flow */}
        <div className="relative z-10">
          <Navigation />
          <div className="pt-16">
            <NewsTicker />
            <Hero />
            <About />
            <Characters />
            <Features />
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
