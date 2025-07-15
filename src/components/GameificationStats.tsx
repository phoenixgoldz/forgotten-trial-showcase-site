import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Users, Target, Heart, Zap } from 'lucide-react';

const GameificationStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

  const stats = [
    {
      icon: Users,
      value: 1247,
      suffix: '+',
      label: 'Supporters',
      color: 'text-ethereal-gold',
      bgColor: 'from-ethereal-gold/20 to-ember-flame/20'
    },
    {
      icon: Target,
      value: 75,
      suffix: '%',
      label: 'Goal Reached',
      color: 'text-verdant-glyph',
      bgColor: 'from-verdant-glyph/20 to-luminous-azure/20'
    },
    {
      icon: Heart,
      value: 4,
      suffix: '',
      label: 'Characters',
      color: 'text-ember-flame',
      bgColor: 'from-ember-flame/20 to-ethereal-gold/20'
    },
    {
      icon: Zap,
      value: 12,
      suffix: '',
      label: 'Features',
      color: 'text-luminous-azure',
      bgColor: 'from-luminous-azure/20 to-mystic-blue/20'
    }
  ];

  return (
    <div ref={sectionRef} className="py-16 bg-ancient-stone/20 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-cinzel text-ethereal-gold mb-4">
            Adventure Progress
          </h3>
          <p className="text-gray-300 font-citizen text-lg">
            Join our growing community of fantasy RPG enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.bgColor} rounded-xl p-6 glass-effect hover-scale transition-all duration-300 border border-white/10`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="text-center">
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                    {isVisible ? (
                      <AnimatedCounter 
                        target={stat.value} 
                        suffix={stat.suffix}
                        duration={1500}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <p className="text-gray-300 font-citizen text-sm uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GameificationStats;