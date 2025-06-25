
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scroll, Heart, Users, Sparkles, ChevronDown, ChevronUp } from "lucide-react";

const About = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const aboutCards = [
    {
      id: "story",
      icon: Scroll,
      title: "What is The Forgotten Trial?",
      preview: "Step into a cursed dungeon where you awaken with no memory...",
      content: "Step into a cursed dungeon where you awaken with no memory—and only the echoing whispers of the past to guide you. In The Forgotten Trial, you lead a party of mysterious heroes through tactical battles and narrative choices. Each dungeon run is unique, shaped by handcrafted story fragments and a procedurally rebuilt world. No AI-generated content here—every word, character, and line of dialogue is crafted by our writing team to deliver a heartfelt, meaningful experience.",
      color: "ethereal-gold"
    },
    {
      id: "team",
      icon: Heart,
      title: "Crafted with Passion",
      preview: "Every word, character, and dialogue is hand-written by our team...",
      content: "No AI-generated content here. Every word, character, and line of dialogue is crafted by our passionate writing team at Phoenix Goldz Studios. We believe in creating heartfelt, meaningful experiences that resonate with players. Our small but dedicated team pours love into every aspect of the game, from the mystical world-building to the tactical combat mechanics.",
      color: "ember-flame"
    },
    {
      id: "community",
      icon: Users,
      title: "Built for the Community",
      preview: "Join fellow adventurers in bringing this mystical world to life...",
      content: "The Forgotten Trial is more than just a game—it's a community-driven adventure. Through Kickstarter and Ko-fi, we're building this experience together with fellow RPG enthusiasts. Your support helps us create deeper storylines, more characters, and richer gameplay mechanics. Every backer becomes part of our extended development family.",
      color: "verdant-glyph"
    },
    {
      id: "mystery",
      icon: Sparkles,
      title: "The Mystery Deepens",
      preview: "Who were you before the dungeon claimed your mind?...",
      content: "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend? Every memory fragment you collect adds a piece to the story. Every run is a new adventure, with different characters, outcomes, and twists. But beware: One of you might be a traitor... and not even know it. The deeper you delve, the more questions arise.",
      color: "luminous-azure"
    }
  ];

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-ancient-stone via-mystic-blue to-ancient-stone relative overflow-hidden">
      {/* Mystical Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-ethereal-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-verdant-glyph/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-ember-flame/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 rounded-full text-ethereal-gold text-sm font-medium border border-ethereal-gold/30 backdrop-blur-md glass-effect">
              ✨ About the Adventure
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover the <span className="gradient-text">Mystery</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every choice matters, every memory is a clue, and every playthrough reveals new secrets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card) => {
            const IconComponent = card.icon;
            const isExpanded = expandedCard === card.id;
            
            return (
              <Card 
                key={card.id}
                className={`bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm relative overflow-hidden cursor-pointer ${
                  card.color === 'ethereal-gold' ? 'border-ethereal-gold/30 hover:border-ethereal-gold/60' :
                  card.color === 'ember-flame' ? 'border-ember-flame/30 hover:border-ember-flame/60' :
                  card.color === 'verdant-glyph' ? 'border-verdant-glyph/30 hover:border-verdant-glyph/60' :
                  'border-luminous-azure/30 hover:border-luminous-azure/60'
                }`}
                onClick={() => toggleCard(card.id)}
              >
                <CardHeader className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 border backdrop-blur-sm ${
                    card.color === 'ethereal-gold' ? 'bg-gradient-to-br from-ethereal-gold/20 to-ethereal-gold/10 border-ethereal-gold/30' :
                    card.color === 'ember-flame' ? 'bg-gradient-to-br from-ember-flame/20 to-ember-flame/10 border-ember-flame/30' :
                    card.color === 'verdant-glyph' ? 'bg-gradient-to-br from-verdant-glyph/20 to-verdant-glyph/10 border-verdant-glyph/30' :
                    'bg-gradient-to-br from-luminous-azure/20 to-luminous-azure/10 border-luminous-azure/30'
                  }`}>
                    <IconComponent className={`w-8 h-8 animate-pulse ${
                      card.color === 'ethereal-gold' ? 'text-ethereal-gold' :
                      card.color === 'ember-flame' ? 'text-ember-flame' :
                      card.color === 'verdant-glyph' ? 'text-verdant-glyph' :
                      'text-luminous-azure'
                    }`} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <CardTitle className={`text-xl font-bold text-white transition-colors ${
                      card.color === 'ethereal-gold' ? 'group-hover:text-ethereal-gold' :
                      card.color === 'ember-flame' ? 'group-hover:text-ember-flame' :
                      card.color === 'verdant-glyph' ? 'group-hover:text-verdant-glyph' :
                      'group-hover:text-luminous-azure'
                    }`}>
                      {card.title}
                    </CardTitle>
                    
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform" />
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-20 opacity-80'
                  }`}>
                    <p className="text-slate-300 leading-relaxed">
                      {isExpanded ? card.content : card.preview}
                    </p>
                  </div>
                  
                  {!isExpanded && (
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`border transition-colors ${
                          card.color === 'ethereal-gold' ? 'border-ethereal-gold/60 text-ethereal-gold hover:bg-ethereal-gold/15' :
                          card.color === 'ember-flame' ? 'border-ember-flame/60 text-ember-flame hover:bg-ember-flame/15' :
                          card.color === 'verdant-glyph' ? 'border-verdant-glyph/60 text-verdant-glyph hover:bg-verdant-glyph/15' :
                          'border-luminous-azure/60 text-luminous-azure hover:bg-luminous-azure/15'
                        }`}
                      >
                        Read More
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
