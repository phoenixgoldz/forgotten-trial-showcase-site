
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      class: "Sunweaver",
      description: "A radiant healer from the stars, wielding celestial magic to mend wounds and illuminate the darkest corners of the dungeon.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Tarrin Duskmane",
      class: "Stormblade",
      description: "A lion-hearted warrior with a broken oath, seeking redemption through honor and the clash of steel against ancient evils.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "Wisp Brambletuck",
      class: "Chronobard",
      description: "A curious wanderer who bends time with song, weaving melodies that can slow enemies or accelerate allies in battle.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      color: "from-green-400 to-teal-500"
    },
    {
      name: "Kael Thornstride",
      class: "Runic Warden",
      description: "A stone-carved guardian with a forgotten purpose, channeling ancient runes to protect allies and devastate foes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
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
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${character.color} opacity-30`}></div>
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
            <h3 className="text-2xl font-bold text-white mb-4">The Mystery Unfolds</h3>
            <p className="text-slate-300 text-lg italic mb-4">
              "You awaken in silence. Your memories... stolen. A whisper: 'You must remember... before it's too late.'"
            </p>
            <p className="text-slate-400">
              Each playthrough reveals different combinations of backstory revelations, possible betrayals, 
              hints at escape routes, and party dynamics that evolve with your choices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
