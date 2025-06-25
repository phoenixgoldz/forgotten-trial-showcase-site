
import { useState, useEffect } from "react";
import { Bell, ExternalLink } from "lucide-react";

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
      link: "#characters",
      type: "feature"
    },
    {
      text: "⚔️ Tactical combat system development in progress",
      link: "#features",
      type: "feature"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [updates.length]);

  const currentUpdate = updates[currentIndex];

  return (
    <div className="bg-gradient-to-r from-mystic-blue/90 to-ancient-stone/80 border-b border-ethereal-gold/30 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
      
      <div className="container mx-auto px-4 py-3 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <Bell className="w-4 h-4 text-ethereal-gold animate-pulse flex-shrink-0" />
          
          <div className="flex-1 min-w-0">
            <a
              href={currentUpdate.link}
              className={`block text-sm font-medium transition-all duration-500 hover:text-ethereal-gold ${
                currentUpdate.type === 'kickstarter' ? 'text-verdant-glyph' :
                currentUpdate.type === 'blog' ? 'text-ember-flame' : 'text-slate-200'
              }`}
              onClick={currentUpdate.link.startsWith('#') ? (e) => {
                e.preventDefault();
                document.querySelector(currentUpdate.link)?.scrollIntoView({ behavior: 'smooth' });
              } : undefined}
              target={currentUpdate.link.startsWith('http') ? '_blank' : undefined}
              rel={currentUpdate.link.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="inline-flex items-center gap-2 animate-fade-in">
                {currentUpdate.text}
                {currentUpdate.link.startsWith('http') && (
                  <ExternalLink className="w-3 h-3 opacity-60" />
                )}
              </span>
            </a>
          </div>

          <div className="flex gap-1">
            {updates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-ethereal-gold scale-125' 
                    : 'bg-ancient-stone/50 hover:bg-ethereal-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
