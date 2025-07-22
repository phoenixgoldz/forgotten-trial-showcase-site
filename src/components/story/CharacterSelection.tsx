
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CharacterSelectionProps {
  onCharacterSelect: (name: string) => void;
}

const CharacterSelection = ({ onCharacterSelect }: CharacterSelectionProps) => {
  const introStory = "You awaken on cold stone, your mind a void. The dungeon walls press close, ancient and forgotten. Four shadowy figures emerge from the darkness - companions whose names escape you, yet their presence feels... familiar. Who will you turn to first in this moment of vulnerability?";

  return (
    <div className="bg-black/60 rounded-2xl p-8 border border-ancient-stone/40 glass-effect backdrop-blur-sm">
      <div className="mb-6">
        <Sparkles className="w-12 h-12 text-ethereal-gold mx-auto mb-4 animate-pulse" />
      </div>
      
      <p className="text-gray-100 text-lg mb-6 leading-relaxed italic" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
        {introStory}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Button
          onClick={() => onCharacterSelect('Solari')}
          variant="ember"
          size="story"
          className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110 text-wrap break-words whitespace-normal leading-tight min-h-[8rem]"
        >
          <span className="text-3xl mb-3 block group-hover:animate-pulse">☀️</span>
          <span className="font-cinzel text-lg font-bold text-center break-words">Solari</span>
          <p className="text-sm mt-1 opacity-90 font-normal text-center break-words">The Sunweaver</p>
        </Button>
        
        <Button
          onClick={() => onCharacterSelect('Tarrin')}
          variant="azure"
          size="story"
          className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110 text-wrap break-words whitespace-normal leading-tight min-h-[8rem]"
        >
          <span className="text-3xl mb-3 block group-hover:animate-pulse">⚡</span>
          <span className="font-cinzel text-lg font-bold text-center break-words">Tarrin</span>
          <p className="text-sm mt-1 opacity-90 font-normal text-center break-words">The Stormblade</p>
        </Button>
        
        <Button
          onClick={() => onCharacterSelect('Wisp')}
          variant="verdant"
          size="story"
          className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110 text-wrap break-words whitespace-normal leading-tight min-h-[8rem]"
        >
          <span className="text-3xl mb-3 block group-hover:animate-pulse">🎵</span>
          <span className="font-cinzel text-lg font-bold text-center break-words">Wisp</span>
          <p className="text-sm mt-1 opacity-90 font-normal text-center break-words">The Chronobard</p>
        </Button>
        
        <Button
          onClick={() => onCharacterSelect('Kael')}
          variant="mystic"
          size="story"
          className="group flex flex-col items-center justify-center h-auto py-6 hover:scale-110 text-wrap break-words whitespace-normal leading-tight min-h-[8rem]"
        >
          <span className="text-3xl mb-3 block group-hover:animate-pulse">🌿</span>
          <span className="font-cinzel text-lg font-bold text-center break-words">Kael</span>
          <p className="text-sm mt-1 opacity-90 font-normal text-center break-words">The Runic Warden</p>
        </Button>
      </div>
    </div>
  );
};

export default CharacterSelection;
