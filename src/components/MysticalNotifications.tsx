import { useState, useEffect } from 'react';
import { Bell, X, Sparkles, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Notification {
  id: string;
  type: 'kickstarter' | 'update' | 'achievement';
  title: string;
  message: string;
  icon: JSX.Element;
  timestamp: Date;
}

const MysticalNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  useEffect(() => {
    // Simulate mystical notifications
    const mysticalNotifications: Notification[] = [
      {
        id: '1',
        type: 'kickstarter',
        title: '🎮 Kickstarter Live!',
        message: 'The Forgotten Trial is now live on Kickstarter. Support our journey!',
        icon: <Crown className="w-4 h-4 text-ethereal-gold" />,
        timestamp: new Date()
      },
      {
        id: '2',
        type: 'update',
        title: '✨ Memory Fragment Discovered',
        message: 'New character backstory unlocked in the demo.',
        icon: <Sparkles className="w-4 h-4 text-verdant-glyph" />,
        timestamp: new Date()
      },
      {
        id: '3',
        type: 'achievement',
        title: '⭐ Mystical Explorer',
        message: 'You\'ve discovered all hidden sections of the site!',
        icon: <Star className="w-4 h-4 text-ember-flame" />,
        timestamp: new Date()
      }
    ];

    // Load notifications after a delay to simulate real updates
    setTimeout(() => {
      setNotifications(mysticalNotifications);
      setHasNewNotifications(true);
    }, 3000);
  }, []);

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    if (notifications.length <= 1) {
      setHasNewNotifications(false);
    }
  };

  const openNotifications = () => {
    setIsOpen(true);
    setHasNewNotifications(false);
  };

  if (notifications.length === 0) return null;

  return (
    <>
      {/* Notification Bell */}
      <div className="fixed top-4 right-16 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={openNotifications}
          className="relative bg-ancient-stone/80 backdrop-blur-md border border-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-300 w-10 h-10 rounded-full"
        >
          <Bell className="h-5 w-5 text-ethereal-gold" />
          {hasNewNotifications && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-ember-flame rounded-full animate-pulse border border-white/50" />
          )}
        </Button>
      </div>

      {/* Notifications Panel */}
      {isOpen && (
        <div className="fixed top-16 right-4 z-50 max-w-sm">
          <Card className="bg-ancient-stone/95 backdrop-blur-md border border-ethereal-gold/30 shadow-2xl">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-cinzel text-lg text-ethereal-gold">Mystical Updates</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-ethereal-gold hover:bg-ethereal-gold/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 bg-mystic-blue/20 rounded-lg border border-ethereal-gold/20 hover:border-ethereal-gold/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-ethereal-gold text-sm font-citizen">
                          {notification.title}
                        </h4>
                        <p className="text-gray-300 text-xs mt-1 font-citizen">
                          {notification.message}
                        </p>
                        <p className="text-ethereal-gold/60 text-xs mt-2">
                          {notification.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dismissNotification(notification.id)}
                        className="text-ethereal-gold/60 hover:text-ethereal-gold hover:bg-ethereal-gold/10 p-1"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default MysticalNotifications;