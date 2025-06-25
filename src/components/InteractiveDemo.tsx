
import { useState } from "react";
import { RotateCcw } from "lucide-react";

const InteractiveDemo = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [storyText, setStoryText] = useState("");

  const story = {
    Solari: [
      "Solari's hand glows with radiant energy. 'I remember healing... but not who I saved.'",
      "You follow Solari through a corridor of runes. One lights up as you pass — a lost memory stirs.",
      "A whisper echoes: 'You once burned the sky… but why?'"
    ],
    Tarrin: [
      "Tarrin growls, electricity crackling. 'We move. Talking wastes breath.'",
      "You step into a hall filled with broken medallions. Tarrin's eyes narrow. 'I failed this place once.'",
      "Suddenly, an afterimage flashes beside him — it speaks with your voice."
    ],
    Wisp: [
      "Wisp hums a haunting melody. The walls shimmer in response.",
      "She laughs softly: 'Time is not a river… it's a song. Do you want to hear your verse?'",
      "You glimpse yourself… older, wiser — and someone else lies at your feet. Friend or foe?"
    ],
    Kael: [
      "Kael does not speak. His moss-covered stone body moves with purpose.",
      "Glowing glyphs pulse beneath his rocky skin as he touches a rune stone. A door opens silently.",
      "On the other side, a statue identical to Kael awaits — etched with your name."
    ]
  };

  const choose = (name: string) => {
    const stories = story[name as keyof typeof story];
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    setSelectedCharacter(name);
    setStoryText(randomStory);
  };

  const restart = () => {
    setSelectedCharacter(null);
    setStoryText("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-ethereal-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-white mb-4 gradient-text" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            The Forgotten Trial
          </h2>
          <h3 className="font-cinzel text-2xl md:text-3xl font-semibold text-ethereal-gold mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Choose Your Own Adventure
          </h3>

          {!selectedCharacter ? (
            <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm">
              <p className="text-gray-100 text-lg mb-6 italic" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                "(Narrator – "You awaken in the dark. Your memories are fractured... but you are not alone.")"
              </p>
              <p className="text-white text-xl mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                Four silhouettes flicker in the dim torchlight. One steps forward.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <button
                  onClick={() => choose('Solari')}
                  className="bg-gradient-to-br from-ember-flame to-ethereal-gold text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-shine"
                >
                  <span className="text-2xl mb-2 block">☀️</span>
                  Solari
                </button>
                
                <button
                  onClick={() => choose('Tarrin')}
                  className="bg-gradient-to-br from-luminous-azure to-verdant-glyph text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-shine"
                >
                  <span className="text-2xl mb-2 block">⚡</span>
                  Tarrin
                </button>
                
                <button
                  onClick={() => choose('Wisp')}
                  className="bg-gradient-to-br from-verdant-glyph to-ethereal-gold text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-shine"
                >
                  <span className="text-2xl mb-2 block">🎵</span>
                  Wisp
                </button>
                
                <button
                  onClick={() => choose('Kael')}
                  className="bg-gradient-to-br from-ancient-stone to-mystic-blue text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-shine"
                >
                  <span className="text-2xl mb-2 block">🌿</span>
                  Kael
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm animate-fade-in">
              <h3 className="font-cinzel text-3xl font-bold text-ethereal-gold mb-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                You chose {selectedCharacter}
              </h3>
              <p className="text-white text-xl leading-relaxed mb-8 italic" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                "{storyText}"
              </p>
              <button
                onClick={restart}
                className="bg-gradient-to-r from-ethereal-gold to-ember-flame text-black px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 button-shine flex items-center justify-center mx-auto"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Choose Again
              </button>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-100 text-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Experience the mystery and make choices that shape your destiny.
            </p>
            <p className="text-ethereal-gold font-medium mt-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Every playthrough reveals new secrets...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
