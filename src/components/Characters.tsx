
const Characters = () => {
  const characters = [
    {
      name: "Solari Emberkin",
      title: "The Sunweaver",
      emoji: "☀️",
      description: "Healer, light mage, and gentle soul with a flickering past.",
      quote: "You once burned the sky, the whispers say.",
      image: "/lovable-uploads/Solari.png",
      colors: "from-ethereal-gold to-ember-flame"
    },
    {
      name: "Tarrin Duskmane",
      title: "The Stormblade",
      emoji: "⚡",
      description: "A lion warrior with shattered memories and lightning-fast reflexes.",
      quote: "What was he sworn to protect?",
      image: "/lovable-uploads/Tarrin.png",
      colors: "from-luminous-azure to-mystic-blue"
    },
    {
      name: "Wisp Brambletuck",
      title: "The Chronobard",
      emoji: "🎵",
      description: "A whimsical bard who bends time through music. Her songs echo forgotten truths.",
      quote: "Time dances to her melody.",
      image: "/lovable-uploads/Wisp.png",
      colors: "from-verdant-glyph to-luminous-azure"
    },
    {
      name: "Kael Thornstride",
      title: "The Runic Warden",
      emoji: "🌿🛡️",
      description: "A silent stone guardian etched with ancient glyphs. Was he carved to protect—or destroy?",
      quote: "Ancient runes hold dangerous secrets.",
      image: "/lovable-uploads/Kael.png",
      colors: "from-ancient-stone to-mystic-blue"
    }
  ];

  return (
    <section id="characters" className="py-20 bg-ancient-stone/30 relative overflow-hidden">
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
          <div className="w-24 h-1 bg-ethereal-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-citizen">
            Each companion carries secrets, memories, and powers that shape your journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {characters.map((character, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover-scale interactive-card group transform transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-mystic-blue/60 group-hover:bg-mystic-blue/40 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-ethereal-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 text-3xl drop-shadow-lg animate-bounce">
                  {character.emoji}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-mystic-blue/90">
                  <h3 className="text-2xl font-cinzel text-ethereal-gold mb-1 group-hover:text-ember-flame transition-colors duration-300">
                    {character.name}
                  </h3>
                  <h4 className="text-sm font-citizen text-luminous-azure uppercase tracking-wider opacity-90">
                    {character.title}
                  </h4>
                </div>
              </div>
              
              <div className="p-6 bg-mystic-blue/20">
                <p className="text-gray-200 font-citizen mb-4 leading-relaxed text-sm">
                  {character.description}
                </p>
                <blockquote className="text-ethereal-gold/90 italic text-sm font-citizen border-l-4 border-ethereal-gold/50 pl-4 bg-ethereal-gold/5 py-2 rounded-r-lg">
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
