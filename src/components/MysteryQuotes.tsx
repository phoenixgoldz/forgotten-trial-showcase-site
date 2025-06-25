
import { useState, useEffect } from "react";
import { Quote, Play, Pause } from "lucide-react";

const MysteryQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const mysteryQuotes = [
    {
      text: "Who were you before the dungeon claimed your mind?",
      author: "The Narrator",
      theme: "identity"
    },
    {
      text: "You once burned the sky, the whispers say...",
      author: "About Solari Emberkin",
      theme: "memory"
    },
    {
      text: "What was he sworn to protect?",
      author: "About Tarrin Duskmane",
      theme: "duty"
    },
    {
      text: "Her songs echo forgotten truths.",
      author: "About Wisp Brambletuck",
      theme: "time"
    },
    {
      text: "Was he carved to protect—or destroy?",
      author: "About Kael Thornstride",
      theme: "purpose"
    },
    {
      text: "One of you might be a traitor... and not even know it.",
      author: "The Mystery Deepens",
      theme: "betrayal"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % mysteryQuotes.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [mysteryQuotes.length, isPlaying]);

  const quote = mysteryQuotes[currentQuote];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToQuote = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentQuote(index);
      setIsVisible(true);
    }, 250);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-black/90 via-ancient-stone/80 to-black/90 relative overflow-hidden">
      {/* Mystical background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              boxShadow: '0 0 6px rgba(212, 181, 106, 0.4)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <button
              onClick={togglePlayPause}
              className="text-ethereal-gold/60 hover:text-ethereal-gold transition-colors p-2 rounded-full hover:bg-ethereal-gold/10"
              aria-label={isPlaying ? 'Pause quotes' : 'Play quotes'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-8">
              <Quote className="w-16 h-16 text-ethereal-gold/60 mx-auto mb-6 animate-pulse" />
            </div>
            
            <blockquote className="font-cinzel text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 leading-relaxed italic text-center" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
              "{quote.text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-ethereal-gold"></div>
              <cite className="text-ethereal-gold font-medium not-italic text-center" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>{quote.author}</cite>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-ethereal-gold"></div>
            </div>

            <div className="flex justify-center space-x-2">
              {mysteryQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote 
                      ? 'bg-ethereal-gold scale-125 shadow-lg shadow-ethereal-gold/30' 
                      : 'bg-ancient-stone/40 hover:bg-ethereal-gold/50'
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MysteryQuotes;
