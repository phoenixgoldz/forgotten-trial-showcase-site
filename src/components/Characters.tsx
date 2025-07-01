
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Zap, 
  Music, 
  Shield, 
  Heart,
  Sword,
  Sparkles,
  ArrowRight,
  Crown
} from "lucide-react";

const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      title: "The Sunweaver",
      emoji: "☀️",
      role: "Healer & Light Mage",
      image: "/lovable-uploads/Solari.png",
      description: "A gentle soul with a flickering past who weaves light into healing magic",
      whisper: '"You once burned the sky," the whispers say.',
      abilities: ["Divine Healing", "Light Manipulation", "Solar Flare"],
      personality: "Compassionate, mysterious, haunted by forgotten power",
      icon: Sun,
      color: "ethereal-gold",
      bgGradient: "from-ethereal-gold/20 to-amber-400/10"
    },
    {
      name: "Tarrin Duskmane",
      title: "The Stormblade",
      emoji: "⚡",
      role: "Lightning Warrior",
      image: "/lovable-uploads/Tarrin.png",
      description: "A majestic lion warrior with shattered memories and lightning-fast reflexes",
      whisper: "What was he sworn to protect?",
      abilities: ["Lightning Strike", "Storm Shield", "Thunder Roar"],
      personality: "Noble, fierce, struggling with lost oaths",
      icon: Zap,
      color: "luminous-azure",
      bgGradient: "from-luminous-azure/20 to-blue-400/10"
    },
    {
      name: "Wisp Brambletuck",
      title: "The Chronobard",
      emoji: "🎵",
      role: "Time-Bending Bard",
      image: "/lovable-uploads/Wisp.png",
      description: "A whimsical bard who bends time through music, with songs that echo forgotten truths",
      whisper: "Her melodies remember what others have forgotten.",
      abilities: ["Time Distortion", "Memory Song", "Fate's Melody"],
      personality: "Playful, wise, keeper of ancient songs",
      icon: Music,
      color: "verdant-glyph",
      bgGradient: "from-verdant-glyph/20 to-green-400/10"
    },
    {
      name: "Kael Thornstride", 
      title: "The Runic Warden",
      emoji: "🌿🛡️",
      role: "Stone Guardian",
      image: "/lovable-uploads/Kael.png",
      description: "A silent stone guardian etched with ancient glyphs, carved from living rock",
      whisper: "Was he carved to protect—or destroy?",
      abilities: ["Stone Fortress", "Runic Power", "Earth Tremor"],
      personality: "Silent, loyal, harboring ancient secrets",
      icon: Shield,
      color: "ember-flame",
      bgGradient: "from-ember-flame/20 to-orange-400/10"
    }
  ];

  const handleKickstarterClick = () => {
    console.log('Redirecting to Kickstarter from Characters');
    window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank', 'noopener,noreferrer');
  };

  const handleKofiClick = () => {
    console.log('Redirecting to Ko-fi from Characters');
    window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Reduced background effects for cleaner look */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-blue/60 via-ancient-stone/40 to-mystic-blue/60"></div>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`char-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/25 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Streamlined Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 border border-ethereal-gold/40 backdrop-blur-sm mb-6">
            <Crown className="w-5 h-5 text-ethereal-gold mr-2" />
            <span className="font-citizen text-ethereal-gold font-bold">Meet Your Party</span>
            <Sparkles className="w-5 h-5 text-ember-flame ml-2" />
          </div>
          
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            🎭 <span className="text-ethereal-gold">The Characters</span> ⚔️
          </h2>
          
          <p className="text-xl text-gray-100 leading-relaxed font-citizen max-w-3xl mx-auto">
            Four mysterious heroes, each with secrets to uncover and stories to tell.
          </p>
        </div>

        {/* Characters Grid - More compact */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {characters.map((character, index) => {
            const Icon = character.icon;
            return (
              <Card 
                key={character.name}
                className="group bg-black/70 border border-ethereal-gold/40 hover:border-ethereal-gold/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${character.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-0 relative z-10">
                  {/* Character Image Section - Optimized sizing */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={character.image}
                      alt={`${character.name} - ${character.title}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-cinzel text-xl font-bold text-white mb-1">
                        {character.name}
                      </h3>
                      <p className="font-citizen text-base text-ethereal-gold">
                        {character.title}
                      </p>
                    </div>
                    
                    <div className="absolute top-3 left-3">
                      <Badge className="px-3 py-1 font-citizen bg-black/60 border-ethereal-gold/60 text-ethereal-gold text-xs font-bold backdrop-blur-sm">
                        <Icon className="w-3 h-3 mr-1" />
                        {character.role}
                      </Badge>
                    </div>
                    
                    <div className="absolute top-3 right-3 text-2xl">
                      {character.emoji}
                    </div>
                  </div>
                  
                  {/* Character Info Section - Streamlined */}
                  <div className="p-6 space-y-4 bg-black/80">
                    <p className="text-gray-100 font-citizen leading-relaxed text-center">
                      {character.description}
                    </p>
                    
                    <div className="bg-black/50 rounded-lg p-4 border border-ethereal-gold/30">
                      <p className="text-ethereal-gold font-citizen italic text-center">
                        {character.whisper}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-cinzel font-bold text-white text-center">Abilities</h4>
                      <div className="flex flex-wrap justify-center gap-1">
                        {character.abilities.map((ability, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="px-2 py-1 font-citizen bg-ethereal-gold/10 border-ethereal-gold/40 text-ethereal-gold text-xs"
                          >
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mystery Teaser Section - More compact */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-black/80 rounded-2xl p-8 backdrop-blur-sm border border-ethereal-gold/40 max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="font-cinzel text-3xl font-bold text-white mb-4">
              The <span className="text-ethereal-gold">Mystery</span> Awaits
            </h3>
            
            <blockquote className="text-lg text-gray-200 font-citizen italic mb-6 leading-relaxed max-w-2xl mx-auto">
              "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend?"
            </blockquote>
            
            <p className="text-base text-gray-300 font-citizen mb-6 leading-relaxed max-w-3xl mx-auto">
              Every memory fragment you collect adds a piece to the story. Every run is a new adventure, 
              with different characters, outcomes, and twists. But beware: <span className="text-ember-flame font-bold">One of you might be a traitor... and not even know it.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleKickstarterClick}
                className="font-citizen py-4 px-6 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 shadow-lg shadow-ethereal-gold/30 hover:shadow-ethereal-gold/50 transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Support on Kickstarter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={handleKofiClick}
                variant="outline"
                className="font-citizen py-4 px-6 border-2 border-verdant-glyph text-verdant-glyph hover:bg-verdant-glyph hover:text-white transition-all duration-300"
              >
                <Sword className="w-5 h-5 mr-2" />
                Support on Ko-fi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
