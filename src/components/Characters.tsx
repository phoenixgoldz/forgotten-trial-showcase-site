
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      class: "The Sunweaver",
      description: "Healer, light mage, and gentle soul with a flickering past. 'You once burned the sky,' the whispers say.",
      image: "/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Tarrin Duskmane",
      class: "The Stormblade",
      description: "A lion warrior with shattered memories and lightning-fast reflexes. What was he sworn to protect?",
      image: "/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png",
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "Wisp Brambletuck",
      class: "The Chronobard",
      description: "A whimsical bard who bends time through music. Her songs echo forgotten truths.",
      image: "/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png",
      color: "from-green-400 to-teal-500"
    },
    {
      name: "Kael Thornstride",
      class: "The Runic Warden",
      description: "A silent stone guardian etched with ancient glyphs. Was he carved to protect—or destroy?",
      image: "/lovable-uploads/728cafee-48b6-4a16-b5aa-d8fe7882ef2d.png",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet the Cast
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Four unique characters, each with their own mysteries, abilities, and evolving stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {characters.map((character, index) => (
            <Card 
              key={index}
              className="bg-slate-800/60 border-slate-600 overflow-hidden hover:bg-slate-800/80 transition-all duration-300 hover-scale animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${character.color} opacity-20`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-white">{character.name}</CardTitle>
                <CardDescription className={`text-lg font-semibold bg-gradient-to-r ${character.color} bg-clip-text text-transparent`}>
                  {character.class}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-300 leading-relaxed">{character.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-lg p-8 max-w-4xl mx-auto border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">The Mystery Awaits</h3>
            <p className="text-slate-300 text-lg italic mb-4">
              "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend?"
            </p>
            <p className="text-slate-400">
              Every memory fragment you collect adds a piece to the story. Every run is a new adventure, with different characters, outcomes, and twists. But beware: One of you might be a traitor... and not even know it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
