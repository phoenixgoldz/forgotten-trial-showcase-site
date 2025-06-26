
import { useStoryLogic } from "./story/useStoryLogic";
import CharacterSelection from "./story/CharacterSelection";
import StoryDisplay from "./story/StoryDisplay";

const InteractiveDemo = () => {
  const {
    selectedCharacter,
    storyText,
    storyStep,
    choices,
    choose,
    continueStory,
    restart
  } = useStoryLogic();

  return (
    <section className="py-20 bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-gold/5 via-transparent to-verdant-glyph/5"></div>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-ethereal-gold/30 rounded-full"
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
            <CharacterSelection onCharacterSelect={choose} />
          ) : (
            <StoryDisplay
              selectedCharacter={selectedCharacter}
              storyText={storyText}
              storyStep={storyStep}
              choices={choices}
              onContinueStory={continueStory}
              onRestart={restart}
            />
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-100 text-lg mb-2 font-citizen" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Experience a unique story every time you play.
            </p>
            <p className="text-ethereal-gold font-medium font-citizen" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
              Your choices shape your destiny in The Forgotten Trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
