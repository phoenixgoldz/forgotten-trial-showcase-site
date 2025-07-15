import { useEffect, useState } from 'react';

const InteractiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], input, textarea, select') !== null;
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-200"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: `scale(${isClicking ? 0.8 : isHovering ? 1.5 : 1})`
        }}
      >
        <div className="w-4 h-4 rounded-full bg-ethereal-gold border-2 border-white" />
      </div>
      
      {/* Trail cursor */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-500 opacity-30"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          transform: `scale(${isHovering ? 2 : 1})`
        }}
      >
        <div className="w-1 h-1 rounded-full bg-ember-flame" />
      </div>
    </>
  );
};

export default InteractiveCursor;