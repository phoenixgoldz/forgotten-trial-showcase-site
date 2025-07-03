
import { Puzzle, Brain, Sword, MessageCircle, Drama, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Puzzle,
      title: "Procedural Dungeon Layouts",
      description: "Every playthrough offers a new map, new encounters, and new memories to discover.",
      gradient: "from-ethereal-gold to-amber-400"
    },
    {
      icon: Brain,
      title: "Hand-Written Narrative Fragments",
      description: "Letters, journal entries, and ghostly whispers reveal who you were—and who you might become.",
      gradient: "from-luminous-azure to-blue-400"
    },
    {
      icon: Sword,
      title: "Tactical Turn-Based Combat",
      description: "Command your party on a grid in rich, strategic battles with unique abilities.",
      gradient: "from-ember-flame to-red-400"
    },
    {
      icon: MessageCircle,
      title: "Dynamic Trust System",
      description: "Your actions shape your party's trust in you. Will you lead with kindness, neutrality, or ruthlessness?",
      gradient: "from-verdant-glyph to-green-400"
    },
    {
      icon: Drama,
      title: "Character-Driven Storytelling",
      description: "Each companion has secrets, personalities, and reactions that change with your choices.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: Sparkles,
      title: "Unique Every Time",
      description: "No two adventures are the same. Discover new story paths and character interactions each run.",
      gradient: "from-ethereal-gold to-ember-flame"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-mystic-blue/40 to-ancient-stone/60 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`feature-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/15 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${7 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel text-ethereal-gold mb-6 animate-fade-in">
            🧠 Core <span className="gradient-text">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ethereal-gold to-ember-flame mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-citizen">
            Discover the magical systems that make every adventure unique and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover-scale interactive-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-cinzel text-ethereal-gold mb-4 text-center group-hover:text-ember-flame transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 font-citizen text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-cinzel text-ethereal-gold mb-4">
              🌌 The Mystery Awaits
            </h3>
            <blockquote className="text-lg text-gray-200 italic font-citizen leading-relaxed">
              "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend?"
            </blockquote>
            <div className="mt-6 p-4 bg-ember-flame/10 rounded-xl border border-ember-flame/30">
              <p className="text-ember-flame font-semibold">
                Every memory fragment you collect adds a piece to the story. Every run is a new adventure, 
                with different characters, outcomes, and twists. But beware: One of you might be a traitor... 
                and not even know it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
