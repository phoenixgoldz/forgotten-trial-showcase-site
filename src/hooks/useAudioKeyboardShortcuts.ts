import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

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
            toast({
              title: "⏸️ Paused",
              description: "Audio paused",
              duration: 1500,
            });
          } else if (currentTrack) {
            resumeTrack();
            toast({
              title: "▶️ Playing",
              description: "Audio resumed",
              duration: 1500,
            });
          }
          break;
          
        case 'arrowleft':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            previousTrack();
            toast({
              title: "⏮️ Previous Track",
              description: "Skipped to previous track",
              duration: 1500,
            });
          }
          break;
          
        case 'arrowright':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            nextTrack();
            toast({
              title: "⏭️ Next Track", 
              description: "Skipped to next track",
              duration: 1500,
            });
          }
          break;
          
        case 'm':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            toggleMute();
            toast({
              title: isMuted ? "🔊 Unmuted" : "🔇 Muted",
              description: `Audio ${isMuted ? 'unmuted' : 'muted'}`,
              duration: 1500,
            });
          }
          break;
          
        case 's':
          if (ctrlKey || metaKey) {
            e.preventDefault();
            toggleShuffle();
            toast({
              title: "🔀 Shuffle",
              description: "Shuffle mode toggled",
              duration: 1500,
            });
          }
          break;
          
        case 'escape':
          e.preventDefault();
          if (currentTrack) {
            stopTrack();
            toast({
              title: "⏹️ Stopped",
              description: "Audio stopped",
              duration: 1500,
            });
          }
          break;
          
        case '?':
          if (!modifierPressed) {
            e.preventDefault();
            toast({
              title: "🎹 Keyboard Shortcuts",
              description: "Space: Play/Pause • Ctrl+←/→: Skip • Ctrl+M: Mute • Ctrl+S: Shuffle • Esc: Stop",
              duration: 5000,
            });
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [
    isPlaying, isMuted, currentTrack,
    pauseTrack, resumeTrack, previousTrack, nextTrack,
    toggleMute, toggleShuffle, stopTrack, toast
  ]);
};