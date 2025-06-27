
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Copy, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialSharing = () => {
  const [shareCount, setShareCount] = useState(0);
  const { toast } = useToast();

  const shareUrl = "https://theforgottentrial.com";
  const shareText = "🧙‍♂️ Check out The Forgotten Trial - an epic tactical fantasy RPG where every memory is a clue! Support this amazing indie game on Kickstarter.";

  const shareLinks = [
    {
      name: "Twitter",
      icon: "🐦",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Facebook",
      icon: "📘",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: "from-blue-700 to-blue-800"
    },
    {
      name: "Reddit",
      icon: "🔸",
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("The Forgotten Trial - Tactical Fantasy RPG")}`,
      color: "from-orange-500 to-red-600"
    }
  ];

  const handleShare = (platform: string, url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
    setShareCount(prev => prev + 1);
    toast({
      title: "Thanks for sharing!",
      description: `Shared on ${platform}. Help spread the word about The Forgotten Trial!`,
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      toast({
        title: "Copied to clipboard!",
        description: "Share link copied. Paste it anywhere to spread the word!",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-luminous-azure/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-ember-flame/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-luminous-azure/20 to-ember-flame/20 rounded-full text-luminous-azure text-sm font-medium border border-luminous-azure/30 backdrop-blur-md glass-effect">
              📢 Spread the Magic
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-cinzel">
            Share the <span className="gradient-text">Adventure</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Help us reach more adventurers and make The Forgotten Trial a reality
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-luminous-azure/30 hover:border-luminous-azure/60 transition-all duration-500 glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-luminous-azure/20 to-ember-flame/20 mb-4 mx-auto border border-luminous-azure/30 backdrop-blur-sm">
                <Share2 className="w-8 h-8 text-luminous-azure animate-pulse" />
              </div>
              <CardTitle className="text-2xl font-bold text-white font-cinzel">
                Become a Lore Spreader
              </CardTitle>
              <CardDescription className="text-luminous-azure font-medium">
                Every share helps us reach our funding goal
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Share Statistics */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-ancient-stone/40 to-mystic-blue/40 rounded-xl p-6 border border-ancient-stone/50 glass-effect backdrop-blur-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-luminous-azure mb-1 font-cinzel">{shareCount}</div>
                      <div className="text-sm text-slate-300">Your Shares</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-verdant-glyph mb-1 font-cinzel">847</div>
                      <div className="text-sm text-slate-300">Total Community Shares</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-ember-flame mb-1 font-cinzel">1.2K</div>
                      <div className="text-sm text-slate-300">Goal Reached</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {shareLinks.map((platform) => (
                  <Button
                    key={platform.name}
                    onClick={() => handleShare(platform.name, platform.url)}
                    className={`bg-gradient-to-r ${platform.color} hover:scale-105 transition-all duration-300 text-white font-semibold py-6 rounded-xl button-shine shadow-lg`}
                  >
                    <span className="text-2xl mr-2">{platform.icon}</span>
                    {platform.name}
                  </Button>
                ))}
              </div>

              {/* Copy Link */}
              <div className="text-center">
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="border-ethereal-gold/50 text-ethereal-gold hover:bg-ethereal-gold/10 font-semibold px-8 py-3 rounded-xl"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Share Link
                </Button>
              </div>

              {/* Discord Invitation */}
              <div className="bg-gradient-to-r from-ancient-stone/30 to-mystic-blue/30 rounded-xl p-6 border border-ancient-stone/40 glass-effect backdrop-blur-sm text-center">
                <MessageCircle className="w-8 h-8 text-luminous-azure mx-auto mb-3 animate-pulse" />
                <h3 className="text-lg font-semibold text-white mb-2 font-cinzel">Join Our Community</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Connect with fellow adventurers, get exclusive updates, and shape the game's development
                </p>
                <Button
                  onClick={() => window.open('https://discord.gg/knfKP9qxtM', '_blank')}
                  className="bg-gradient-to-r from-luminous-azure to-verdant-glyph hover:from-luminous-azure/90 hover:to-verdant-glyph/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                >
                  Join Discord Server
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialSharing;
