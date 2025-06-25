
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const MysteryQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % mysteryQuotes.length);
        setIsVisible(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [mysteryQuotes.length]);

  const quote = mysteryQuotes[currentQuote];

  return (
    <section className="py-20 bg-gradient-to-r from-mystic-blue/95 via-ancient-stone/90 to-mystic-blue/95 relative overflow-hidden">
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
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="mb-8">
              <Quote className="w-16 h-16 text-ethereal-gold/60 mx-auto mb-6 animate-pulse" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 leading-relaxed italic">
              "{quote.text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-ethereal-gold"></div>
              <cite className="text-ethereal-gold font-medium not-italic">{quote.author}</cite>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-ethereal-gold"></div>
            </div>

            <div className="flex justify-center space-x-2">
              {mysteryQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote 
                      ? 'bg-ethereal-gold scale-125 shadow-lg shadow-ethereal-gold/30' 
                      : 'bg-ancient-stone/40 hover:bg-ethereal-gold/50'
                  }`}
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
