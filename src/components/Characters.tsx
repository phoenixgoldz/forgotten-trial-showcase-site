
const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      title: "The Sunweaver",
      emoji: "☀️",
      description: "Healer, light mage, and gentle soul with a flickering past.",
      quote: "You once burned the sky, the whispers say.",
      image: "/lovable-uploads/Solari.png",
      colors: "from-yellow-400 to-orange-500"
    },
    {
      name: "Tarrin Duskmane",
      title: "The Stormblade",
      emoji: "⚡",
      description: "A lion warrior with shattered memories and lightning-fast reflexes.",
      quote: "What was he sworn to protect?",
      image: "/lovable-uploads/Tarrin.png",
      colors: "from-blue-400 to-purple-500"
    },
    {
      name: "Wisp Brambletuck",
      title: "The Chronobard",
      emoji: "🎵",
      description: "A whimsical bard who bends time through music. Her songs echo forgotten truths.",
      quote: "Time dances to her melody.",
      image: "/lovable-uploads/Wisp.png",
      colors: "from-green-400 to-teal-500"
    },
    {
      name: "Kael Thornstride",
      title: "The Runic Warden",
      emoji: "🌿🛡️",
      description: "A silent stone guardian etched with ancient glyphs. Was he carved to protect—or destroy?",
      quote: "Ancient runes hold dangerous secrets.",
      image: "/lovable-uploads/Kael.png",
      colors: "from-stone-400 to-gray-600"
    }
  ];

  return (
    <section id="characters" className="py-20 bg-gradient-to-br from-ancient-stone/30 to-mystic-blue/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`char-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel text-ethereal-gold mb-6 animate-fade-in">
            🎭 Meet the <span className="gradient-text">Characters</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ethereal-gold to-ember-flame mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-citizen">
            Each companion carries secrets, memories, and powers that shape your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {characters.map((character, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover-scale interactive-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${character.colors} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-4 right-4 text-2xl animate-bounce-subtle">
                  {character.emoji}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-cinzel text-ethereal-gold mb-2 group-hover:text-ember-flame transition-colors">
                  {character.name}
                </h3>
                <h4 className="text-sm font-citizen text-luminous-azure mb-3 uppercase tracking-wider">
                  {character.title}
                </h4>
                <p className="text-gray-300 font-citizen mb-4 leading-relaxed">
                  {character.description}
                </p>
                <blockquote className="text-ethereal-gold/80 italic text-sm font-citizen border-l-2 border-ethereal-gold/30 pl-3">
                  "{character.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-cinzel text-ethereal-gold mb-4">
              Choose Your Path
            </h3>
            <p className="text-lg text-gray-200 font-citizen leading-relaxed">
              Each character reacts differently to your choices. Build trust, uncover secrets, 
              and discover the truth about your forgotten past. But remember—one among you 
              may not be who they seem...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
