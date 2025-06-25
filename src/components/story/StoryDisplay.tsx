
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoryDisplayProps {
  selectedCharacter: string | null;
  storyText: string;
  storyStep: number;
  choices: string[];
  onContinueStory: (choiceIndex: number) => void;
  onRestart: () => void;
}

const StoryDisplay = ({ 
  selectedCharacter, 
  storyText, 
  storyStep, 
  choices, 
  onContinueStory, 
  onRestart 
}: StoryDisplayProps) => {
  const getStoryTitle = () => {
    if (selectedCharacter && storyStep === 1) return `With ${selectedCharacter}...`;
    if (selectedCharacter && storyStep === 2) return "The Mystery Deepens...";
    if (storyStep === 3) return "Your Journey Begins...";
    return "";
  };

  return (
    <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm animate-fade-in">
      <h3 className="font-cinzel text-3xl font-bold text-ethereal-gold mb-6" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
        {getStoryTitle()}
      </h3>
      
      <div className="text-white text-lg leading-relaxed mb-8 italic space-y-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
        <p>"{storyText}"</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {choices.length > 0 && choices.map((choice, index) => (
          <Button
            key={index}
            onClick={() => onContinueStory(index)}
            variant="primary"
            size="story"
            className="font-cinzel hover:scale-110"
          >
            ✨ {choice}
          </Button>
        ))}
        
        <Button
          onClick={onRestart}
          variant="secondary_trial"
          size="story"
          className="flex items-center justify-center font-cinzel hover:scale-110"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          🔄 Begin Anew
        </Button>
      </div>
    </div>
  );
};

export default StoryDisplay;
