'use client';

import { useState, useCallback } from 'react';
import { Play, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getMorseAudioPlayer } from '@/lib/converters/morseAudio';

interface MorsePlayerProps {
  morseCode: string;
  disabled?: boolean;
}

export function MorsePlayer({ morseCode, disabled = false }: MorsePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = useCallback(async () => {
    const player = getMorseAudioPlayer();

    if (isPlaying) {
      player.stop();
      setIsPlaying(false);
      setProgress(0);
      return;
    }

    setIsPlaying(true);
    setProgress(0);

    try {
      await player.play(morseCode, (p) => setProgress(p));
    } finally {
      setIsPlaying(false);
      setProgress(0);
    }
  }, [morseCode, isPlaying]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handlePlay}
      disabled={disabled || !morseCode}
      className="gap-2 relative overflow-hidden"
    >
      {/* Progress bar */}
      {isPlaying && (
        <div
          className="absolute left-0 top-0 h-full bg-primary/20 transition-all duration-100"
          style={{ width: `${progress * 100}%` }}
        />
      )}
      <span className="relative flex items-center gap-2">
        {isPlaying ? (
          <>
            <Square className="h-4 w-4" />
            Stop
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Play Audio
          </>
        )}
      </span>
    </Button>
  );
}
