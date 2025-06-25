
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Tactical RPG Combat",
      description: "Grid-based battles with fantasy abilities and turn-based strategy that rewards clever positioning and timing.",
      icon: "⚔️"
    },
    {
      title: "Procedural Exploration",
      description: "Every dungeon is different. Discover scattered party members, memory shards, and gear across modular maps.",
      icon: "🗺️"
    },
    {
      title: "Hand-Written Narrative",
      description: "No AI here! Our team crafts evolving dialogue and story fragments that adapt to your progress and choices.",
      icon: "📜"
    },
    {
      title: "Trust & Morality System",
      description: "Choices matter. Be kind, ruthless, or neutral — and see how it changes your party's trust in you.",
      icon: "🤝"
    },
    {
      title: "Party of 1-4 Characters",
      description: "Find and earn the trust of companions, each with their own evolving personality and mystery to uncover.",
      icon: "👥"
    },
    {
      title: "Kid-Friendly Design",
      description: "No horror, no gore. Just mystery, magic, and meaningful decisions that players of all ages can enjoy.",
      icon: "✨"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core Gameplay Features
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience a unique blend of tactical combat, procedural storytelling, and meaningful choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
