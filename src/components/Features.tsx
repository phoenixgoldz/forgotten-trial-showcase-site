
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Puzzle, 
  Brain, 
  Swords, 
  MessageCircle, 
  Users, 
  Sparkles, 
  Crown,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Puzzle,
      title: "Procedural Dungeon Layouts",
      description: "Every playthrough offers a new map, new encounters, and new memories to discover. No two adventures are ever the same.",
      badge: "Infinite Replayability",
      colorClasses: {
        icon: "text-luminous-azure",
        iconBg: "bg-luminous-azure/20 border-luminous-azure/30",
        badge: "bg-luminous-azure/10 border-luminous-azure/30 text-luminous-azure",
        bullet: "bg-luminous-azure"
      },
      details: ["Handcrafted room templates", "Dynamic encounter placement", "Secrets that change location"]
    },
    {
      icon: Brain,
      title: "Hand-Written Narrative Fragments",
      description: "Letters, journal entries, and ghostly whispers reveal who you were—and who you might become.",
      badge: "Story-Driven",
      colorClasses: {
        icon: "text-ethereal-gold",
        iconBg: "bg-ethereal-gold/20 border-ethereal-gold/30",
        badge: "bg-ethereal-gold/10 border-ethereal-gold/30 text-ethereal-gold",
        bullet: "bg-ethereal-gold"
      },
      details: ["200+ unique story fragments", "Branching narrative paths", "Character backstory reveals"]
    },
    {
      icon: Swords,
      title: "Tactical Turn-Based Combat",
      description: "Command your party on a grid in rich, strategic battles with unique abilities and positioning.",
      badge: "Strategic Depth",
      colorClasses: {
        icon: "text-ember-flame",
        iconBg: "bg-ember-flame/20 border-ember-flame/30",
        badge: "bg-ember-flame/10 border-ember-flame/30 text-ember-flame",
        bullet: "bg-ember-flame"
      },
      details: ["Grid-based positioning", "Combo attacks", "Environmental interactions"]
    },
    {
      icon: MessageCircle,
      title: "Dynamic Trust System",
      description: "Your actions shape your party's trust in you. Will you lead with kindness, neutrality, or ruthlessness?",
      badge: "Meaningful Choices",
      colorClasses: {
        icon: "text-verdant-glyph",
        iconBg: "bg-verdant-glyph/20 border-verdant-glyph/30",
        badge: "bg-verdant-glyph/10 border-verdant-glyph/30 text-verdant-glyph",
        bullet: "bg-verdant-glyph"
      },
      details: ["Relationship tracking", "Trust-based abilities", "Multiple endings"]
    },
    {
      icon: Users,
      title: "Character-Driven Storytelling",
      description: "Each companion has secrets, personalities, and reactions that change with your choices.",
      badge: "Deep Characters",
      colorClasses: {
        icon: "text-luminous-azure",
        iconBg: "bg-luminous-azure/20 border-luminous-azure/30",
        badge: "bg-luminous-azure/10 border-luminous-azure/30 text-luminous-azure",
        bullet: "bg-luminous-azure"
      },
      details: ["4 unique companions", "Personal questlines", "Dynamic dialogue"]
    },
    {
      icon: Crown,
      title: "Mystery & Betrayal",
      description: "One of your party might be a traitor... and not even know it. Uncover the truth through gameplay.",
      badge: "Plot Twists",
      colorClasses: {
        icon: "text-ember-flame",
        iconBg: "bg-ember-flame/20 border-ember-flame/30",
        badge: "bg-ember-flame/10 border-ember-flame/30 text-ember-flame",
        bullet: "bg-ember-flame"
      },
      details: ["Hidden agendas", "Unreliable narrators", "Shocking revelations"]
    }
  ];

  const handleDemoClick = () => {
    console.log('Redirecting to demo');
    // This would navigate to demo page
  };

  const handleKickstarterClick = () => {
    console.log('Redirecting to Kickstarter from Features');
    window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-blue/60 via-ancient-stone/40 to-mystic-blue/60"></div>
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-ethereal-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-verdant-glyph/5 to-transparent"></div>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`feature-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-ethereal-gold/20 to-verdant-glyph/20 border border-ethereal-gold/40 backdrop-blur-sm mb-8">
            <Sparkles className="w-6 h-6 text-ethereal-gold mr-3 animate-pulse" />
            <span className="font-citizen text-ethereal-gold font-bold text-lg">Core Features</span>
            <Zap className="w-6 h-6 text-verdant-glyph ml-3 animate-pulse" />
          </div>
          
          <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            🧠 <span className="text-transparent bg-gradient-to-r from-ethereal-gold via-ember-flame to-verdant-glyph bg-clip-text">Epic Features</span> ⚔️
          </h2>
          
          <p className="text-2xl text-gray-100 leading-relaxed font-citizen max-w-4xl mx-auto mb-8">
            Every feature designed to create unforgettable tactical RPG experiences that keep you coming back for more
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-6 py-3 text-lg font-citizen bg-luminous-azure/20 border-luminous-azure/40 text-luminous-azure">
              <Shield className="w-5 h-5 mr-2" />
              Tactical Combat
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg font-citizen bg-ethereal-gold/20 border-ethereal-gold/40 text-ethereal-gold">
              <Brain className="w-5 h-5 mr-2" />
              Deep Story
            </Badge>
            <Badge variant="outline" className="px-6 py-3 text-lg font-citizen bg-verdant-glyph/20 border-verdant-glyph/40 text-verdant-glyph">
              <Puzzle className="w-5 h-5 mr-2" />
              Endless Replayability
            </Badge>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group bg-gradient-to-br from-ancient-stone/30 to-mystic-blue/30 border border-ethereal-gold/20 hover:border-ethereal-gold/40 backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ethereal-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-6">
                    {/* Icon section */}
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${feature.colorClasses.iconBg} border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <Icon className={`w-10 h-10 ${feature.colorClasses.icon} group-hover:animate-pulse`} />
                    </div>
                    
                    {/* Content section */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-cinzel text-2xl font-bold text-white group-hover:text-ethereal-gold transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <Badge 
                          variant="outline" 
                          className={`px-3 py-1 font-citizen ${feature.colorClasses.badge} text-sm`}
                        >
                          {feature.badge}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-200 font-citizen text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Feature details */}
                      <div className="space-y-2 pt-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${feature.colorClasses.bullet}`}></div>
                            <span className="text-gray-300 font-citizen text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-black/50 to-black/30 rounded-3xl p-12 backdrop-blur-sm border border-ethereal-gold/30 max-w-4xl mx-auto">
            <h3 className="font-cinzel text-4xl font-bold text-white mb-6">
              Ready to Experience <span className="text-ethereal-gold">The Mystery?</span>
            </h3>
            <p className="text-xl text-gray-200 font-citizen mb-8 leading-relaxed">
              Join thousands of adventurers who are already backing this epic tactical RPG experience
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={handleKickstarterClick}
                className="font-citizen text-lg py-6 px-8 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 shadow-xl shadow-ethereal-gold/30 hover:shadow-ethereal-gold/50 transform hover:scale-105 transition-all duration-300"
              >
                <Crown className="w-6 h-6 mr-3" />
                Back on Kickstarter
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleDemoClick}
                className="font-citizen text-lg py-6 px-8 border-2 border-verdant-glyph text-verdant-glyph hover:bg-verdant-glyph hover:text-white transition-all duration-300"
              >
                <Swords className="w-6 h-6 mr-3" />
                Try the Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
