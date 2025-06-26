
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-cinzel text-8xl font-bold text-ethereal-gold mb-4 drop-shadow-2xl">
            404
          </h1>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Lost in the Forgotten Depths
          </h2>
          <p className="text-xl text-gray-200 mb-8 font-citizen leading-relaxed">
            The path you seek has vanished into the mists of time. Perhaps the ancient magic has shifted the dungeon corridors once again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg" 
            className="bg-gradient-to-r from-ethereal-gold to-ember-flame hover:from-ethereal-gold/90 hover:to-ember-flame/90 text-white font-semibold px-8 py-4 text-lg rounded-lg button-shine hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-ethereal-gold/30 font-citizen"
          >
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </Button>
          
          <Button 
            onClick={() => window.history.back()}
            size="lg" 
            variant="outline"
            className="border-2 border-ethereal-gold/70 text-ethereal-gold hover:bg-ethereal-gold/20 hover:border-ethereal-gold px-8 py-4 text-lg rounded-lg backdrop-blur-md glass-effect hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-ethereal-gold/20 font-citizen"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
