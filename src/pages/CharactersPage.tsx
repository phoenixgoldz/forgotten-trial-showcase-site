
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Characters from "@/components/Characters";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollProgress from "@/components/ScrollProgress";
import SocialShare from "@/components/SocialShare";
import InteractiveCursor from "@/components/InteractiveCursor";

const CharactersPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Enhanced UI Components */}
      <ScrollProgress />
      <InteractiveCursor />
      
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/85 via-ancient-stone/75 to-mystic-blue/85"></div>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <Breadcrumbs />
          <Characters />
        </div>
        <Footer />
      </div>

      {/* Enhanced Features */}
      <SocialShare />
    </div>
  );
};

export default CharactersPage;
