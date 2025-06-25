
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Tactical RPG Combat",
      description: "Grid-based battles with fantasy abilities and turn-based strategy that rewards clever positioning and timing.",
      icon: "⚔️",
      color: "from-ember-flame to-ethereal-gold",
      shadowColor: "shadow-ember-flame/25"
    },
    {
      title: "Procedural Exploration",
      description: "Every dungeon is different. Discover scattered party members, memory shards, and gear across modular maps.",
      icon: "🗺️",
      color: "from-luminous-azure to-verdant-glyph",
      shadowColor: "shadow-luminous-azure/25"
    },
    {
      title: "Hand-Written Narrative",
      description: "No AI here! Our team crafts evolving dialogue and story fragments that adapt to your progress and choices.",
      icon: "📜",
      color: "from-ethereal-gold to-ember-flame",
      shadowColor: "shadow-ethereal-gold/25"
    },
    {
      title: "Trust & Morality System",
      description: "Choices matter. Be kind, ruthless, or neutral — and see how it changes your party's trust in you.",
      icon: "🤝",
      color: "from-verdant-glyph to-luminous-azure",
      shadowColor: "shadow-verdant-glyph/25"
    },
    {
      title: "Party of 1-4 Characters",
      description: "Find and earn the trust of companions, each with their own evolving personality and mystery to uncover.",
      icon: "👥",
      color: "from-luminous-azure to-ethereal-gold",
      shadowColor: "shadow-luminous-azure/25"
    },
    {
      title: "Kid-Friendly Design",
      description: "No horror, no gore. Just mystery, magic, and meaningful decisions that players of all ages can enjoy.",
      icon: "✨",
      color: "from-ethereal-gold to-verdant-glyph",
      shadowColor: "shadow-ethereal-gold/25"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone/80 to-mystic-blue relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 181, 106, 0.4) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 15px 15px, rgba(126, 200, 80, 0.2) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 blur-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'var(--ethereal-gold)' : i % 3 === 1 ? 'var(--verdant-glyph)' : 'var(--luminous-azure)'}, transparent)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 rounded-full text-ethereal-gold text-sm font-medium border border-ethereal-gold/40 backdrop-blur-sm hover:bg-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-300">
              Core Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text drop-shadow-lg animate-glow">
            Gameplay That Matters
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Experience a unique blend of tactical combat, procedural storytelling, and meaningful choices that shape your adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-ancient-stone/90 to-mystic-blue/90 border-ancient-stone/60 hover:border-ethereal-gold/60 transition-all duration-700 hover-scale group glass-effect backdrop-blur-md animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 to-verdant-glyph/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-ethereal-gold/30 transition-all duration-500"></div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-r ${feature.color} mb-4 mx-auto text-3xl shadow-xl ${feature.shadowColor} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 border border-white/20`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-ethereal-gold transition-colors duration-500 drop-shadow-sm">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-slate-300 text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-ethereal-gold/15 to-ember-flame/15 rounded-2xl border border-ethereal-gold/30 backdrop-blur-md hover:bg-ethereal-gold/20 hover:border-ethereal-gold/50 transition-all duration-300 hover-scale shadow-lg">
            <p className="text-ethereal-gold text-lg font-medium drop-shadow-sm">
              🎯 Every feature designed to create memorable, meaningful experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
