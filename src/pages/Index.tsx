
import { useEffect } from "react";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import About from "@/components/About";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import InteractiveDemo from "@/components/InteractiveDemo";
import MysteryQuotes from "@/components/MysteryQuotes";
import FundingProgress from "@/components/FundingProgress";
import Newsletter from "@/components/Newsletter";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload critical images
    const criticalImages = [
      '/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <NewsTicker />
        <Hero />
        <About />
        <Features />
        <Characters />
        <InteractiveDemo />
        <MysteryQuotes />
        <FundingProgress />
        <Newsletter />
        <Support />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
