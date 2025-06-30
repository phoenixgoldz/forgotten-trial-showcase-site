
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
      image: "/lovable-uploads/965e98d3-fb85-40c6-9263-e357de40fd59.png",
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
      image: "/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png",
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
      image: "/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png",
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
      image: "/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png",
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

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-blue/70 via-ancient-stone/50 to-mystic-blue/70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`char-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 border border-ethereal-gold/40 backdrop-blur-sm mb-8">
            <Crown className="w-6 h-6 text-ethereal-gold mr-3 animate-pulse" />
            <span className="font-citizen text-ethereal-gold font-bold text-lg">Meet Your Party</span>
            <Sparkles className="w-6 h-6 text-ember-flame ml-3 animate-pulse" />
          </div>
          
          <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            🎭 <span className="text-ethereal-gold">The Characters</span> ⚔️
          </h2>
          
          <p className="text-2xl text-gray-100 leading-relaxed font-citizen max-w-4xl mx-auto">
            Four mysterious heroes, each with secrets to uncover and stories to tell. Who will you trust?
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {characters.map((character, index) => {
            const Icon = character.icon;
            return (
              <Card 
                key={character.name}
                className="group bg-black/60 border border-ethereal-gold/40 hover:border-ethereal-gold/60 backdrop-blur-sm transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Character glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${character.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                <CardContent className="p-0 relative z-10">
                  {/* Character Image Section - Fixed sizing and positioning */}
                  <div className="relative overflow-hidden h-96">
                    <img
                      src={character.image}
                      alt={`${character.name} - ${character.title}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Character overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    {/* Character name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-cinzel text-2xl font-bold text-white mb-1 drop-shadow-lg">
                        {character.name}
                      </h3>
                      <p className="font-citizen text-lg font-semibold text-ethereal-gold drop-shadow-md">
                        {character.title}
                      </p>
                    </div>
                    
                    {/* Character badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="px-4 py-2 font-citizen bg-black/60 border-ethereal-gold/60 text-ethereal-gold text-sm font-bold backdrop-blur-sm">
                        <Icon className="w-4 h-4 mr-2" />
                        {character.role}
                      </Badge>
                    </div>
                    
                    {/* Character emoji in corner */}
                    <div className="absolute top-4 right-4 text-4xl animate-pulse drop-shadow-lg">
                      {character.emoji}
                    </div>
                  </div>
                  
                  {/* Character Info Section */}
                  <div className="p-8 space-y-6 bg-black/80">
                    <p className="text-gray-100 font-citizen text-lg leading-relaxed text-center">
                      {character.description}
                    </p>
                    
                    {/* Whisper quote */}
                    <div className="bg-black/50 rounded-xl p-6 border border-ethereal-gold/30">
                      <p className="text-ethereal-gold font-citizen italic text-center text-lg leading-relaxed">
                        {character.whisper}
                      </p>
                    </div>
                    
                    {/* Abilities */}
                    <div className="space-y-3">
                      <h4 className="font-cinzel text-lg font-bold text-white text-center">Signature Abilities</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {character.abilities.map((ability, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="px-3 py-1 font-citizen bg-ethereal-gold/10 border-ethereal-gold/40 text-ethereal-gold text-sm"
                          >
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Personality */}
                    <div className="text-center">
                      <p className="text-gray-200 font-citizen text-sm leading-relaxed">
                        <span className="font-semibold text-white">Personality:</span> {character.personality}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mystery Teaser Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-black/80 rounded-3xl p-12 backdrop-blur-sm border border-ethereal-gold/40 max-w-5xl mx-auto">
            <div className="text-6xl mb-6">🌌</div>
            <h3 className="font-cinzel text-4xl font-bold text-white mb-6">
              The <span className="text-ethereal-gold">Mystery</span> Awaits
            </h3>
            
            <blockquote className="text-2xl text-gray-200 font-citizen italic mb-8 leading-relaxed max-w-3xl mx-auto">
              "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend?"
            </blockquote>
            
            <p className="text-xl text-gray-300 font-citizen mb-8 leading-relaxed max-w-4xl mx-auto">
              Every memory fragment you collect adds a piece to the story. Every run is a new adventure, 
              with different characters, outcomes, and twists. But beware: <span className="text-ember-flame font-bold">One of you might be a traitor... and not even know it.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleKickstarterClick}
                className="font-citizen text-lg py-6 px-8 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 shadow-xl shadow-ethereal-gold/30 hover:shadow-ethereal-gold/50 transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-6 h-6 mr-3" />
                Support Their Story
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button 
                variant="outline"
                className="font-citizen text-lg py-6 px-8 border-2 border-verdant-glyph text-verdant-glyph hover:bg-verdant-glyph hover:text-white transition-all duration-300"
              >
                <Sword className="w-6 h-6 mr-3" />
                Meet Them in Battle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
