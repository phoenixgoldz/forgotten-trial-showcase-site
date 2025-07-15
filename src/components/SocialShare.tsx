import { useState } from 'react';
import { Share2, Copy, Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialShare = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const currentUrl = window.location.href;
  const shareText = "Check out The Forgotten Trial - A tactical fantasy RPG where every memory is a clue!";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className={`flex flex-col space-y-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="bg-background/90 backdrop-blur-sm border-ethereal-gold/30 hover:border-ethereal-gold/50 text-ethereal-gold hover:text-white hover:bg-ethereal-gold/20"
        >
          {copiedUrl ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={shareOnTwitter}
          className="bg-background/90 backdrop-blur-sm border-ethereal-gold/30 hover:border-ethereal-gold/50 text-ethereal-gold hover:text-white hover:bg-ethereal-gold/20"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={shareOnFacebook}
          className="bg-background/90 backdrop-blur-sm border-ethereal-gold/30 hover:border-ethereal-gold/50 text-ethereal-gold hover:text-white hover:bg-ethereal-gold/20"
        >
          <Facebook className="w-4 h-4" />
        </Button>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2 bg-background/90 backdrop-blur-sm border-ethereal-gold/30 hover:border-ethereal-gold/50 text-ethereal-gold hover:text-white hover:bg-ethereal-gold/20"
      >
        <Share2 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SocialShare;