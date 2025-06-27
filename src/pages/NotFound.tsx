
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-ancient-stone/90 rounded-2xl p-8 text-center border border-ethereal-gold/30 backdrop-blur-md shadow-xl">
        <div className="text-8xl mb-6 animate-bounce">🏰</div>
        <h1 className="text-4xl font-bold text-white mb-4 font-cinzel">
          Lost in the Dungeon
        </h1>
        <p className="text-slate-300 mb-8 font-citizen text-lg leading-relaxed">
          The path you seek has been forgotten by time. Perhaps it never existed, 
          or perhaps it's hidden deeper in the trials ahead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-citizen shadow-lg hover:shadow-verdant-glyph/30"
          >
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-ethereal-gold/50 text-ethereal-gold hover:bg-ethereal-gold/10 font-citizen"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
