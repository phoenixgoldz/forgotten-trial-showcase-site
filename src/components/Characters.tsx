
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      class: "The Sunweaver",
      description: "Healer, light mage, and gentle soul with a flickering past. 'You once burned the sky,' the whispers say.",
      image: "/lovable-uploads/8654a423-2282-4ae5-bd0b-870a0ac350af.png",
      color: "from-yellow-400 via-orange-500 to-red-500",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      name: "Tarrin Duskmane",
      class: "The Stormblade",
      description: "A lion warrior with shattered memories and lightning-fast reflexes. What was he sworn to protect?",
      image: "/lovable-uploads/aba7c576-7054-488d-bf91-e74455e2ade2.png",
      color: "from-blue-400 via-indigo-500 to-purple-500",
      bgColor: "from-blue-500/20 to-purple-500/20"
    },
    {
      name: "Wisp Brambletuck",
      class: "The Chronobard",
      description: "A whimsical bard who bends time through music. Her songs echo forgotten truths.",
      image: "/lovable-uploads/c261823d-4fbe-4910-83e7-edaf1effd9bd.png",
      color: "from-green-400 via-teal-500 to-cyan-500",
      bgColor: "from-green-500/20 to-teal-500/20"
    },
    {
      name: "Kael Thornstride",
      class: "The Runic Warden",
      description: "A silent stone guardian etched with ancient glyphs. Was he carved to protect—or destroy?",
      image: "/lovable-uploads/728cafee-48b6-4a16-b5aa-d8fe7882ef2d.png",
      color: "from-purple-400 via-pink-500 to-rose-500",
      bgColor: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-300 text-sm font-medium border border-purple-500/30">
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
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/50 overflow-hidden hover:border-slate-500 transition-all duration-500 hover-scale group glass-effect backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${character.bgColor} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                
                {/* Character Class Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${character.color} text-white shadow-lg`}>
                    {character.class}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
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
          <div className="bg-gradient-to-r from-slate-800/60 to-purple-800/60 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-600/50 glass-effect backdrop-blur-sm">
            <div className="mb-4">
              <span className="text-4xl">🔮</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 gradient-text">The Mystery Awaits</h3>
            <p className="text-slate-300 text-lg md:text-xl italic mb-6 leading-relaxed">
              "Who were you before the dungeon claimed your mind? Will you find the truth—or become part of the legend?"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400">
              <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
                <span className="text-2xl mb-2">🧩</span>
                <p className="text-sm">Memory fragments reveal your past</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
                <span className="text-2xl mb-2">🎭</span>
                <p className="text-sm">Every run tells a different story</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/30 rounded-lg">
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
