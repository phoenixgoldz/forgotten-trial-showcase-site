import { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

interface ParticleSystemProps {
  density?: number;
  colors?: string[];
  interactive?: boolean;
}

const DEFAULT_COLORS = ['ethereal-gold', 'luminous-azure', 'ember-flame', 'verdant-glyph'];

const ParticleSystem = ({ 
  density = 15, 
  colors = DEFAULT_COLORS,
  interactive = false 
}: ParticleSystemProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoize colors to prevent infinite re-renders
  const memoizedColors = useMemo(() => colors, [colors.join(',')]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < density; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 8 + 4,
          delay: Math.random() * 4,
          color: memoizedColors[Math.floor(Math.random() * memoizedColors.length)]
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [density, memoizedColors]);

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((particle) => {
        const distanceFromMouse = interactive ? Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        ) : 50;
        
        const scale = interactive && distanceFromMouse < 20 ? 1.5 : 1;
        const opacity = interactive && distanceFromMouse < 15 ? 0.8 : 0.4;

        return (
          <div
            key={particle.id}
            className={`absolute rounded-full bg-${particle.color} animate-float transition-all duration-500`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity,
              transform: `scale(${scale})`,
              filter: interactive ? `blur(${distanceFromMouse < 20 ? 0 : 0.5}px)` : 'none'
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleSystem;