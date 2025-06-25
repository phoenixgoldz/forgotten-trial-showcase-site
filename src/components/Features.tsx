
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Tactical RPG Combat",
      description: "Grid-based battles with fantasy abilities and turn-based strategy that rewards clever positioning and timing.",
      icon: "⚔️",
      color: "from-ember-flame to-ethereal-gold"
    },
    {
      title: "Procedural Exploration",
      description: "Every dungeon is different. Discover scattered party members, memory shards, and gear across modular maps.",
      icon: "🗺️",
      color: "from-luminous-azure to-verdant-glyph"
    },
    {
      title: "Hand-Written Narrative",
      description: "No AI here! Our team crafts evolving dialogue and story fragments that adapt to your progress and choices.",
      icon: "📜",
      color: "from-ethereal-gold to-ember-flame"
    },
    {
      title: "Trust & Morality System",
      description: "Choices matter. Be kind, ruthless, or neutral — and see how it changes your party's trust in you.",
      icon: "🤝",
      color: "from-verdant-glyph to-luminous-azure"
    },
    {
      title: "Party of 1-4 Characters",
      description: "Find and earn the trust of companions, each with their own evolving personality and mystery to uncover.",
      icon: "👥",
      color: "from-luminous-azure to-ethereal-gold"
    },
    {
      title: "Kid-Friendly Design",
      description: "No horror, no gore. Just mystery, magic, and meaningful decisions that players of all ages can enjoy.",
      icon: "✨",
      color: "from-ethereal-gold to-verdant-glyph"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 181, 106, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 rounded-full text-ethereal-gold text-sm font-medium border border-ethereal-gold/30">
              Core Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text">
            Gameplay That Matters
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience a unique blend of tactical combat, procedural storytelling, and meaningful choices that shape your adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-ancient-stone/80 to-mystic-blue/80 border-ancient-stone/50 hover:border-ethereal-gold/50 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 mx-auto text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-ethereal-gold transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-ethereal-gold/10 to-ember-flame/10 rounded-2xl border border-ethereal-gold/20 backdrop-blur-sm">
            <p className="text-ethereal-gold text-lg font-medium">
              🎯 Every feature designed to create memorable, meaningful experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
