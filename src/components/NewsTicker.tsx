
import { useState, useEffect } from "react";
import { Bell, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const updates = [
    {
      text: "🎮 Kickstarter campaign is now live! Support The Forgotten Trial",
      link: "https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial",
      type: "kickstarter"
    },
    {
      text: "☕ New development blog post available on Ko-fi",
      link: "https://ko-fi.com/phoenixgoldzstudios",
      type: "blog"
    },
    {
      text: "🎨 Four unique characters revealed - each with mysterious pasts",
      link: "/characters",
      type: "feature"
    },
    {
      text: "⚔️ Tactical combat system development in progress",
      link: "/features",
      type: "feature"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [updates.length, isPaused]);

  const currentUpdate = updates[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + updates.length) % updates.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % updates.length);
  };

  const handleLinkClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (link.startsWith('/')) {
      // Use React Router navigation for internal links
      window.location.href = link;
    } else if (link.startsWith('#')) {
      // Smooth scroll for anchor links
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      className="bg-gradient-to-r from-mystic-blue/90 to-ancient-stone/80 border-b border-ethereal-gold/30 backdrop-blur-md relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="banner"
      aria-label="News updates"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
      
      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <Bell className="w-4 h-4 text-ethereal-gold animate-pulse flex-shrink-0" aria-hidden="true" />
          
          <button
            onClick={goToPrevious}
            className="text-ethereal-gold/60 hover:text-ethereal-gold transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50"
            aria-label="Previous update"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex-1 min-w-0">
            <button
              onClick={() => handleLinkClick(currentUpdate.link)}
              className={`block text-sm font-medium transition-all duration-500 hover:text-ethereal-gold w-full text-center font-citizen focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50 rounded px-2 py-1 ${
                currentUpdate.type === 'kickstarter' ? 'text-verdant-glyph' :
                currentUpdate.type === 'blog' ? 'text-ember-flame' : 'text-slate-200'
              }`}
              aria-label={`${currentUpdate.text}. ${currentUpdate.link.startsWith('http') ? 'Opens in new tab' : 'Navigate to page'}`}
            >
              <span className="inline-flex items-center gap-2">
                {currentUpdate.text}
                {currentUpdate.link.startsWith('http') && (
                  <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                )}
              </span>
            </button>
          </div>

          <button
            onClick={goToNext}
            className="text-ethereal-gold/60 hover:text-ethereal-gold transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50"
            aria-label="Next update"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex gap-1 ml-2">
            {updates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-ethereal-gold/50 ${
                  index === currentIndex 
                    ? 'bg-ethereal-gold scale-125' 
                    : 'bg-ancient-stone/50 hover:bg-ethereal-gold/50'
                }`}
                aria-label={`Go to update ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
