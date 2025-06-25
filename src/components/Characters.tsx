
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      class: "The Sunweaver",
      description: "Healer, light mage, and gentle soul with a flickering past. 'You once burned the sky,' the whispers say.",
      image: "/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png",
      color: "from-ethereal-gold via-ember-flame to-verdant-glyph",
      bgColor: "from-ethereal-gold/20 to-ember-flame/20"
    },
    {
      name: "Tarrin Duskmane",
      class: "The Stormblade",
      description: "A lion warrior with shattered memories and lightning-fast reflexes. What was he sworn to protect?",
      image: "/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png",
      color: "from-luminous-azure via-verdant-glyph to-ethereal-gold",
      bgColor: "from-luminous-azure/20 to-verdant-glyph/20"
    },
    {
      name: "Wisp Brambletuck",
      class: "The Chronobard",
      description: "A whimsical bard who bends time through music. Her songs echo forgotten truths.",
      image: "/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png",
      color: "from-verdant-glyph via-luminous-azure to-ethereal-gold",
      bgColor: "from-verdant-glyph/20 to-luminous-azure/20"
    },
    {
      name: "Kael Thornstride",
      class: "The Runic Warden",
      description: "A silent stone guardian etched with ancient glyphs. Was he carved to protect—or destroy?",
      image: "/lovable-uploads/728cafee-48b6-4a16-b5aa-d8fe7882ef2d.png",
      color: "from-ancient-stone via-ethereal-gold to-ember-flame",
      bgColor: "from-ancient-stone/20 to-ethereal-gold/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone to-luminous-azure/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-ethereal-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-ember-flame/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-verdant-glyph/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-luminous-azure/20 to-verdant-glyph/20 rounded-full text-luminous-azure text-sm font-medium border border-luminous-azure/30">
              Meet Your Party
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Four <span className="gradient-text">Mysterious</span> Souls
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Each character harbors secrets, unique abilities, and evolving stories that change based on your choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {characters.map((character, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-ancient-stone/80 to-mystic-blue/80 border-ancient-stone/50 overflow-hidden hover:border-ethereal-gold/50 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] flex items-center justify-center bg-gradient-to-br from-ancient-stone/50 to-mystic-blue/50">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${character.bgColor} opacity-40`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-mystic-blue/60 via-transparent to-transparent"></div>
                
                {/* Character Class Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${character.color} text-white shadow-lg`}>
                    {character.class}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-ethereal-gold transition-colors duration-300">
                  {character.name}
                </CardTitle>
                <CardDescription className={`text-lg font-semibold bg-gradient-to-r ${character.color} bg-clip-text text-transparent`}>
                  {character.class}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {character.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-ancient-stone/60 to-mystic-blue/60 rounded-2xl p-8 max-w-4xl mx-auto border border-ancient-stone/50 glass-effect backdrop-blur-sm">
            <div className="mb-4">
              <span className="text-4xl">🔮</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 gradient-text">The Mystery Awaits</h3>
            <p className="text-slate-300 text-lg md:text-xl italic mb-6 leading-relaxed">
              "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend?"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400">
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-lg">
                <span className="text-2xl mb-2">🧩</span>
                <p className="text-sm">Memory fragments reveal your past</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-lg">
                <span className="text-2xl mb-2">🎭</span>
                <p className="text-sm">Every run tells a different story</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-ancient-stone/30 rounded-lg">
                <span className="text-2xl mb-2">⚡</span>
                <p className="text-sm">One of you might be a traitor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
