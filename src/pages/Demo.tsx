
import { useEffect } from "react";
import EnhancedNavigation from "@/components/EnhancedNavigation";
import Footer from "@/components/Footer";
import InteractiveDemo from "@/components/InteractiveDemo";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/85 via-ancient-stone/75 to-mystic-blue/85"></div>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <EnhancedNavigation />
        <div className="pt-16">
          <section className="py-8 px-6">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <Link to="/" className="inline-flex items-center text-ethereal-gold hover:text-ethereal-gold/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </section>
          <InteractiveDemo />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Demo;
