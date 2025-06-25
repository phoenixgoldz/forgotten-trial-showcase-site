import { useState } from "react";
import { RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveDemo = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [storyText, setStoryText] = useState("");
  const [storyStep, setStoryStep] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);

  const introStory = "You awaken on cold stone, your mind a void. The dungeon walls press close, ancient and forgotten. Four shadowy figures emerge from the darkness - companions whose names escape you, yet their presence feels... familiar. Who will you turn to first in this moment of vulnerability?";

  const characterStories = {
    Solari: {
      initial: [
        "Solari's gentle light illuminates your confused face. 'Peace, friend. Your memories may be lost, but your heart still beats with purpose.' Her golden radiance reveals strange scars on your hands - marks of power you cannot remember wielding.",
        "She extends a healing hand toward you. 'I sense great pain in your past, but also great compassion. The light within you has not dimmed.' As her magic touches you, flashes of burning skies dance at the edge of your memory.",
        "Solari's eyes grow distant. 'In my dreams, I see you standing before a great fire... were you its master, or its victim?' Her voice trembles with recognition she cannot quite grasp."
      ],
      deeper: [
        "Solari gasps as ancient runes on the dungeon wall begin to glow in response to your presence. 'These markings... they're reacting to you. What manner of power did you once wield?'",
        "A spectral voice whispers through Solari: 'The Sunburner has awakened... but does the flame remember its purpose?' Her face pales as she realizes the implications.",
        "Solari places her hand on a cracked mirror, and for a moment, you both see a reflection of you wreathed in celestial fire, standing over a battlefield of fallen enemies... or fallen friends."
      ]
    },
    Tarrin: {
      initial: [
        "Tarrin's electric eyes narrow as he studies you. 'Your stance, your scars... you were a warrior once. But warriors remember their battles.' Lightning flickers around his mane as confusion clouds his features.",
        "He sniffs the air near you, then recoils. 'You smell of old blood and older magic. Familiar, yet... wrong somehow.' His claws extend unconsciously, as if recognizing a threat he cannot name.",
        "Tarrin circles you warily. 'In the storm of my dreams, a figure fights beside me. Same height, same build as you... but I cannot see their face.' Thunder rumbles in the distance."
      ],
      deeper: [
        "A broken weapon lies embedded in the wall - Tarrin pulls it free and it sparks with recognition in your hands. 'This blade knows you,' he growls, 'but why do I feel we've crossed swords before?'",
        "Tarrin's memories surge as lightning illuminates the chamber: 'I remember now... a great betrayal. A friend who became an enemy, or an enemy who was once a friend. Which were you to me?'",
        "The storm warrior's eyes flash with electricity and pain. 'You saved my life once... or perhaps you tried to take it. The lightning cannot tell friend from foe in my fractured memories.'"
      ]
    },
    Wisp: {
      initial: [
        "Wisp's ethereal song echoes strangely around you. 'Oh my, oh my... the melody of your soul is so very complex. Like a song played backward, or a story told in reverse.' Her eyes twinkle with otherworldly knowledge.",
        "She tilts her head, studying you with curious intensity. 'Time whispers secrets about you, dear one. You've danced through moments that haven't happened yet, and forgotten ones that defined who you were.'",
        "Wisp giggles, but there's sadness in the sound. 'The threads of time are tangled around you like spider silk. Some memories are meant to stay buried... but are you brave enough to unearth them?'"
      ],
      deeper: [
        "Wisp's bard magic reveals ghostly echoes of past events playing out around you - but they're fragmented, showing moments of both heroism and terrible choice.",
        "She gasps as her time magic shows her glimpses of potential futures: 'I see... so many paths from here. In some, you become our greatest ally. In others...' She shivers and cannot finish.",
        "Wisp reaches out to touch your forehead, and suddenly you both experience a rush of temporal echoes - versions of yourself making different choices, walking different paths, becoming different people."
      ]
    },
    Kael: {
      initial: [
        "Kael's stone features remain impassive, but the glyphs carved into his rocky flesh pulse with recognition. He cannot speak, but his very presence seems to pose a question: 'Do you remember why I was made?'",
        "The runic warden approaches slowly, each step deliberate. Ancient symbols flare to life on his body - some protective, others... accusatory. His creation and your past are clearly intertwined.",
        "Kael places a moss-covered hand on your shoulder. The touch floods you with flashes of memory: stone being carved, runes being etched, a purpose being forged. But was that purpose to guard you... or to stop you?"
      ],
      deeper: [
        "Kael's glyphs suddenly blaze with painful light, revealing the truth carved into his very being - he was created as either your greatest protector or your most dedicated jailer.",
        "The stone guardian kneels before you, and in that gesture lies a terrible question: is he showing respect to his creator, or preparing to carry out an ancient duty to stop you?",
        "Ancient magic flows between you and Kael, and for a moment you understand the runic language written on his form. The message is clear: 'To guard the Forgotten, until memory returns and judgment can be passed.'"
      ]
    }
  };

  const continueChoices = [
    "Press deeper into the mystery",
    "Question your companion further", 
    "Explore the dungeon together",
    "Try to unlock more memories"
  ];

  const choose = (name: string) => {
    const character = characterStories[name as keyof typeof characterStories];
    const randomStory = character.initial[Math.floor(Math.random() * character.initial.length)];
    setSelectedCharacter(name);
    setStoryText(randomStory);
    setStoryStep(1);
    setChoices(continueChoices);
  };

  const continueStory = (choiceIndex: number) => {
    if (selectedCharacter && storyStep === 1) {
      const character = characterStories[selectedCharacter as keyof typeof characterStories];
      const deeperStory = character.deeper[Math.floor(Math.random() * character.deeper.length)];
      setStoryText(deeperStory);
      setStoryStep(2);
      setChoices([
        "Begin your journey together",
        "Seek answers in the deeper dungeon",
        "Confront the truth of your past",
        "Choose a different companion"
      ]);
    } else if (storyStep === 2) {
      // Final story conclusions
      const endings = [
        "As you venture deeper into the forgotten dungeon, fragments of your true identity begin to surface. Whether hero or villain, savior or destroyer, your story is about to begin anew...",
        "The dungeon's ancient secrets call to you, promising answers to questions you're afraid to ask. Together with your companion, you step into the shadows of your forgotten past...",
        "Memory is a double-edged sword, and yours has been shattered for a reason. But in this dark place, with unlikely allies, perhaps you can forge a new legend...",
        "The whispers of the dungeon grow louder, speaking of trials ahead and choices that will define not just who you were, but who you choose to become..."
      ];
      
      setStoryText(endings[Math.floor(Math.random() * endings.length)]);
      setStoryStep(3);
      setChoices([]);
    }
  };

  const restart = () => {
    setSelectedCharacter(null);
    setStoryText("");
    setStoryStep(0);
    setChoices([]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
        {Array.from({ length: 12 }).map((_, i) => (
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
            Interactive Story Experience
          </h3>

          {storyStep === 0 ? (
            <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-ethereal-gold mx-auto mb-4 animate-pulse" />
              </div>
              
              <p className="text-gray-100 text-lg mb-6 leading-relaxed italic" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                {introStory}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Button
                  onClick={() => choose('Solari')}
                  variant="ember"
                  size="story"
                  className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110"
                >
                  <span className="text-3xl mb-3 block group-hover:animate-pulse">☀️</span>
                  <span className="font-cinzel text-lg font-bold">Solari</span>
                  <p className="text-sm mt-1 opacity-90 font-normal">The Sunweaver</p>
                </Button>
                
                <Button
                  onClick={() => choose('Tarrin')}
                  variant="azure"
                  size="story"
                  className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110"
                >
                  <span className="text-3xl mb-3 block group-hover:animate-pulse">⚡</span>
                  <span className="font-cinzel text-lg font-bold">Tarrin</span>
                  <p className="text-sm mt-1 opacity-90 font-normal">The Stormblade</p>
                </Button>
                
                <Button
                  onClick={() => choose('Wisp')}
                  variant="verdant"
                  size="story"
                  className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110"
                >
                  <span className="text-3xl mb-3 block group-hover:animate-pulse">🎵</span>
                  <span className="font-cinzel text-lg font-bold">Wisp</span>
                  <p className="text-sm mt-1 opacity-90 font-normal">The Chronobard</p>
                </Button>
                
                <Button
                  onClick={() => choose('Kael')}
                  variant="mystic"
                  size="story"
                  className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110"
                >
                  <span className="text-3xl mb-3 block group-hover:animate-pulse">🌿</span>
                  <span className="font-cinzel text-lg font-bold">Kael</span>
                  <p className="text-sm mt-1 opacity-90 font-normal">The Runic Warden</p>
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm animate-fade-in">
              <h3 className="font-cinzel text-3xl font-bold text-ethereal-gold mb-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                {selectedCharacter && storyStep === 1 && `With ${selectedCharacter}...`}
                {selectedCharacter && storyStep === 2 && `The Mystery Deepens...`}
                {storyStep === 3 && "Your Journey Begins..."}
              </h3>
              
              <div className="text-white text-lg leading-relaxed mb-8 italic space-y-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                <p>"{storyText}"</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {choices.length > 0 && choices.map((choice, index) => (
                  <Button
                    key={index}
                    onClick={() => continueStory(index)}
                    variant="primary"
                    size="story"
                    className="font-cinzel hover:scale-110"
                  >
                    ✨ {choice}
                  </Button>
                ))}
                
                <Button
                  onClick={restart}
                  variant="secondary_trial"
                  size="story"
                  className="flex items-center justify-center font-cinzel hover:scale-110"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  🔄 Begin Anew
                </Button>
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-100 text-lg mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Experience a unique story every time you play.
            </p>
            <p className="text-ethereal-gold font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Your choices shape your destiny in The Forgotten Trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
