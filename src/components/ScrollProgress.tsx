import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-mystic-blue/50">
      <div
        className="h-full bg-gradient-to-r from-ethereal-gold via-ember-flame to-verdant-glyph transition-all duration-300 shadow-lg shadow-ethereal-gold/50"
        style={{
          width: `${scrollProgress}%`,
          filter: 'drop-shadow(0 0 8px rgba(212, 181, 106, 0.6))'
        }}
      />
    </div>
  );
};

export default ScrollProgress;