import { useEffect, useState } from 'react';
import { CheckCircle, Sparkles, Star } from 'lucide-react';

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: 'hover' | 'click' | 'focus';
  effect?: 'glow' | 'shake' | 'pulse' | 'float';
  feedback?: 'success' | 'error' | 'info';
}

const MicroInteractions = ({ 
  children, 
  type = 'hover', 
  effect = 'glow',
  feedback 
}: MicroInteractionProps) => {
  const [isActive, setIsActive] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleInteraction = () => {
    setIsActive(true);
    
    if (feedback) {
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
    }
    
    setTimeout(() => setIsActive(false), 300);
  };

  const getEffectClasses = () => {
    switch (effect) {
      case 'glow':
        return isActive ? 'shadow-lg shadow-ethereal-gold/50 scale-105' : '';
      case 'shake':
        return isActive ? 'animate-pulse' : '';
      case 'pulse':
        return isActive ? 'animate-ping' : '';
      case 'float':
        return isActive ? 'translate-y-[-4px]' : '';
      default:
        return '';
    }
  };

  const getFeedbackIcon = () => {
    switch (feedback) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-verdant-glyph" />;
      case 'error':
        return <Star className="w-4 h-4 text-ember-flame" />;
      case 'info':
        return <Sparkles className="w-4 h-4 text-luminous-azure" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative inline-block">
      <div
        className={`transition-all duration-300 ${getEffectClasses()}`}
        onMouseEnter={type === 'hover' ? handleInteraction : undefined}
        onClick={type === 'click' ? handleInteraction : undefined}
        onFocus={type === 'focus' ? handleInteraction : undefined}
      >
        {children}
      </div>
      
      {showFeedback && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-1 bg-mystic-blue/90 backdrop-blur-sm rounded-lg px-2 py-1 border border-ethereal-gold/30 animate-fade-in">
          {getFeedbackIcon()}
          <span className="text-xs text-ethereal-gold font-citizen">
            {feedback === 'success' ? 'Done!' : feedback === 'error' ? 'Oops!' : 'Info'}
          </span>
        </div>
      )}
    </div>
  );
};

export default MicroInteractions;