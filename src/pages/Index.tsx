
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import MysteryQuotes from "@/components/MysteryQuotes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Set a timeout to show content even if images don't load
    const loadingTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png',
      '/lovable-uploads/965e98d3-fb85-40c6-9263-e357de40fd59.png',
      '/lovable-uploads/6f040610-e708-4437-889b-206c9c9c9d50.png',
      '/lovable-uploads/728cafee-48b6-4a16-b5aa-d8fe7882ef2d.png',
      '/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png',
      '/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png',
      '/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png'
    ];
    
    const preloadPromises = criticalImages.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => resolve(src); // Still resolve on error to continue
        img.src = src;
      });
    });
    
    Promise.allSettled(preloadPromises).then(() => {
      clearTimeout(loadingTimeout);
      setIsLoaded(true);
      console.log('Image preloading completed');
    });

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ethereal-gold/30 border-t-ethereal-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-ethereal-gold font-cinzel text-xl">Awakening the forgotten memories...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Global background effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/90 via-ancient-stone/80 to-mystic-blue/90"></div>
          {Array.from({ length: 30 }, (_, i) => (
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
      </div>
    </ErrorBoundary>
  );
};

export default Index;
