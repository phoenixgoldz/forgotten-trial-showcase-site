
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/90 via-ancient-stone/80 to-mystic-blue/90"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
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
          <Features />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FeaturesPage;
