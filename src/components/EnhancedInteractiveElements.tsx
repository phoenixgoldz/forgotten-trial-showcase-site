
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Eye, Hand, Zap } from 'lucide-react';

const EnhancedInteractiveElements = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [clickedElements, setClickedElements] = useState<Set<string>>(new Set());
  const [mysticalEffects, setMysticalEffects] = useState<Array<{id: string, x: number, y: number}>>([]);

  const handleElementInteraction = (elementId: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Create mystical effect
    const effectId = `effect-${Date.now()}`;
    setMysticalEffects(prev => [...prev, { id: effectId, x, y }]);
    
    // Track clicked elements
    setClickedElements(prev => new Set([...prev, elementId]));
    
    // Remove effect after animation
    setTimeout(() => {
      setMysticalEffects(prev => prev.filter(effect => effect.id !== effectId));
    }, 1000);
  };

  const handleKeyPress = (elementId: string, event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      // Simulate click for keyboard users
      const fakeEvent = {
        currentTarget: event.currentTarget,
        clientX: 0,
        clientY: 0
      } as React.MouseEvent;
      handleElementInteraction(elementId, fakeEvent);
    }
  };

  const interactiveElements = [
    {
      id: 'memory-crystal',
      title: 'Memory Crystal',
      description: 'A shimmering crystal that holds forgotten memories',
      icon: Sparkles,
      color: 'from-luminous-azure to-ethereal-gold',
      ariaLabel: 'Explore the Memory Crystal to discover forgotten memories'
    },
    {
      id: 'scrying-orb',
      title: 'Scrying Orb',
      description: 'Peer into the mysteries of The Forgotten Trial',
      icon: Eye,
      color: 'from-verdant-glyph to-luminous-azure',
      ariaLabel: 'Use the Scrying Orb to peer into game mysteries'
    },
    {
      id: 'enchanted-scroll',
      title: 'Enchanted Scroll',
      description: 'Ancient writings reveal character secrets',
      icon: Hand,
      color: 'from-ember-flame to-ethereal-gold',
      ariaLabel: 'Read the Enchanted Scroll to learn character secrets'
    },
    {
      id: 'power-rune',
      title: 'Power Rune',
      description: 'A magical sigil pulsing with arcane energy',
      icon: Zap,
      color: 'from-mystic-blue to-verdant-glyph',
      ariaLabel: 'Activate the Power Rune to feel arcane energy'
    }
  ];

  return (
    <section 
      className="py-16 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden"
      aria-labelledby="interactive-elements-heading"
    >
      <div className="container mx-auto px-4">
        <div className="sr-only">
          <h2 id="interactive-elements-heading">Interactive Mystical Elements</h2>
          <p>Explore these magical artifacts to learn more about The Forgotten Trial</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {interactiveElements.map((element) => {
            const Icon = element.icon;
            const isClicked = clickedElements.has(element.id);
            const isHovered = hoveredElement === element.id;
            
            return (
              <Card
                key={element.id}
                className={`relative cursor-pointer transition-all duration-500 transform hover-scale bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-ancient-stone/40 hover:border-ethereal-gold/60 focus-within:border-ethereal-gold/80 glass-effect backdrop-blur-sm overflow-hidden ${
                  isClicked ? 'animate-pulse-glow' : ''
                }`}
                onMouseEnter={() => setHoveredElement(element.id)}
                onMouseLeave={() => setHoveredElement(null)}
                onClick={(e) => handleElementInteraction(element.id, e)}
                onKeyDown={(e) => handleKeyPress(element.id, e)}
                tabIndex={0}
                role="button"
                aria-label={element.ariaLabel}
                aria-pressed={isClicked}
                aria-describedby={`${element.id}-description`}
              >
                {/* Mystical effects */}
                {mysticalEffects
                  .filter(effect => effect.id.includes(element.id))
                  .map(effect => (
                    <div
                      key={effect.id}
                      className="absolute pointer-events-none animate-ping"
                      style={{
                        left: effect.x,
                        top: effect.y,
                        transform: 'translate(-50%, -50%)'
                      }}
                      aria-hidden="true"
                    >
                      <div className="w-4 h-4 bg-ethereal-gold rounded-full opacity-75"></div>
                    </div>
                  ))
                }
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto bg-gradient-to-r ${element.color} transition-all duration-300 ${
                    isHovered ? 'scale-110 shadow-lg shadow-ethereal-gold/25' : ''
                  }`}>
                    <Icon 
                      className={`w-8 h-8 text-white transition-all duration-300 ${
                        isHovered ? 'animate-pulse' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-2 font-cinzel transition-colors duration-300 ${
                    isClicked ? 'text-ethereal-gold' : 'text-white'
                  }`}>
                    {element.title}
                  </h3>
                  
                  <p 
                    id={`${element.id}-description`}
                    className="text-slate-300 text-sm leading-relaxed"
                  >
                    {element.description}
                  </p>
                  
                  {isClicked && (
                    <div className="mt-4 text-xs text-ethereal-gold animate-fade-in" aria-live="polite">
                      ✨ Explored!
                    </div>
                  )}
                </CardContent>
                
                {/* Hover glow effect */}
                {isHovered && (
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${element.color} opacity-10 animate-pulse`}
                    aria-hidden="true"
                  ></div>
                )}
                
                {/* Focus indicator */}
                <div className="absolute inset-0 ring-2 ring-transparent focus-within:ring-ethereal-gold/50 rounded-lg pointer-events-none transition-all duration-200"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedInteractiveElements;
