
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, ExternalLink, Users } from "lucide-react";

const Newsletter = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleJoinDiscord = () => {
    window.open('https://discord.gg/knfKP9qxtM', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-ancient-stone via-mystic-blue to-ancient-stone relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-40 h-40 bg-ethereal-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-2xl mx-auto bg-black/60 border-2 border-ethereal-gold/40 hover:border-ethereal-gold/70 transition-all duration-500 glass-effect backdrop-blur-sm p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-luminous-azure/30 to-verdant-glyph/30 mb-6 border border-luminous-azure/40 backdrop-blur-sm">
              <MessageCircle className="w-8 h-8 text-luminous-azure" />
            </div>

            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Join Our <span className="gradient-text">Community</span>
            </h3>
            
            <p className="text-gray-100 mb-8 leading-relaxed text-center font-citizen" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Connect with fellow adventurers, get the latest development updates, participate in community events, and help shape the future of The Forgotten Trial!
            </p>

            <Button
              onClick={handleJoinDiscord}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-gradient-to-r from-luminous-azure to-verdant-glyph hover:from-luminous-azure/90 hover:to-verdant-glyph/90 text-white font-semibold px-8 py-4 h-auto rounded-lg button-shine hover-scale shadow-lg hover:shadow-luminous-azure/30 border border-luminous-azure/30 hover:border-luminous-azure/50 transition-all duration-300 font-citizen text-lg"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span>Join Our Discord Community</span>
                <ExternalLink className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
              </div>
            </Button>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300 font-citizen">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-verdant-glyph" />
                <span>Active Community</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-luminous-azure" />
                <span>Dev Updates</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-ethereal-gold">🎮</span>
                <span>Game Discussions</span>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400 text-center font-citizen" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Free to join • No spam • Community-driven discussions
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
