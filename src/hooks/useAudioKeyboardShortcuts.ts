import { useEffect } from 'react';

interface AudioKeyboardShortcutsProps {
  isPlaying: boolean;
  isMuted: boolean;
  pauseTrack: () => void;
  resumeTrack: () => void;
  previousTrack: () => void;
  nextTrack: () => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  stopTrack: () => void;
  currentTrack: string | null;
}

export const useAudioKeyboardShortcuts = ({
  isPlaying,
  isMuted,
  pauseTrack,
  resumeTrack,
  previousTrack,
  nextTrack,
  toggleMute,
  toggleShuffle,
  stopTrack,
  currentTrack
}: AudioKeyboardShortcutsProps) => {

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs
      if (e.target instanceof HTMLInputElement || 
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement) {
        return;
      }

      // Check for modifier keys
      const { ctrlKey, metaKey, altKey, shiftKey } = e;
      const modifierPressed = ctrlKey || metaKey || altKey || shiftKey;

      switch (e.key.toLowerCase()) {
        case ' ':
          e.preventDefault();
          if (isPlaying) {
            pauseTrack();
          } else if (currentTrack) {
            resumeTrack();
          }
          break;
          
        case 'arrowleft':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            previousTrack();
          }
          break;
          
        case 'arrowright':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            nextTrack();
          }
          break;
          
        case 'm':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            toggleMute();
          }
          break;
          
        case 's':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            toggleShuffle();
          }
          break;
          
        case 'escape':
          e.preventDefault();
          if (currentTrack) {
            stopTrack();
          }
          break;
          
        case '?':
          if (!modifierPressed) {
            e.preventDefault();
            console.log("Keyboard Shortcuts: Space: Play/Pause • Ctrl+←/→: Skip • Ctrl+M: Mute • Ctrl+S: Shuffle • Esc: Stop");
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [
    isPlaying, isMuted, currentTrack,
    pauseTrack, resumeTrack, previousTrack, nextTrack,
    toggleMute, toggleShuffle, stopTrack
  ]);
};