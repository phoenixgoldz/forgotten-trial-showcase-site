import { useState } from 'react';
import { Plus, Heart, Share2, Download, Gamepad2, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Heart,
      label: 'Support on Kickstarter',
      color: 'text-ember-flame',
      action: () => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')
    },
    {
      icon: Share2,
      label: 'Share Game',
      color: 'text-luminous-azure',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'The Forgotten Trial',
            text: 'Check out this amazing tactical fantasy RPG!',
            url: window.location.href
          });
        }
      }
    },
    {
      icon: Gamepad2,
      label: 'Try Demo',
      color: 'text-verdant-glyph',
      action: () => window.location.href = '/demo'
    },
    {
      icon: Star,
      label: 'Rate & Review',
      color: 'text-ethereal-gold',
      action: () => console.log('Opening rating modal...')
    }
  ];

  return (
    <div className="fixed bottom-20 left-6 z-50">
      {/* Action Buttons */}
      {isOpen && (
        <div className="mb-4 space-y-3">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mr-3 px-3 py-1 bg-ancient-stone/90 backdrop-blur-md rounded-lg border border-ethereal-gold/30 text-ethereal-gold text-xs font-citizen opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {action.label}
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={action.action}
                className={`w-12 h-12 rounded-full bg-ancient-stone/90 backdrop-blur-md border border-ethereal-gold/30 hover:border-ethereal-gold/60 ${action.color} hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <action.icon className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-ethereal-gold hover:bg-ethereal-gold/90 text-mystic-blue border-2 border-ethereal-gold hover:border-ethereal-gold/80 shadow-2xl hover:shadow-ethereal-gold/40 transition-all duration-300 ${
          isOpen ? 'rotate-45 scale-110' : 'hover:scale-105'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Plus className="w-6 h-6" />
        )}
      </Button>

      {/* Mystical glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-ethereal-gold/20 via-ember-flame/20 to-verdant-glyph/20 rounded-full blur-xl opacity-60 animate-pulse pointer-events-none" />
    </div>
  );
};

export default FloatingActionWidget;