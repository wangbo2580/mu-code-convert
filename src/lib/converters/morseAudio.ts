// Morse Code Audio Player using Web Audio API

const AUDIO_CONFIG = {
  frequency: 800,      // Hz
  dotDuration: 100,    // ms
  dashDuration: 300,   // ms
  symbolGap: 100,      // ms (between dots and dashes)
  letterGap: 300,      // ms (between letters)
  wordGap: 700,        // ms (between words, for '/')
};

export class MorseAudioPlayer {
  private audioContext: AudioContext | null = null;
  private isPlaying: boolean = false;
  private abortController: AbortController | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
  }

  /**
   * Play Morse code audio
   * @param morseCode - Morse code string to play
   * @param onProgress - Optional callback for progress updates
   */
  async play(morseCode: string, onProgress?: (progress: number) => void): Promise<void> {
    if (!this.audioContext || this.isPlaying) return;

    // Resume audio context if suspended
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    this.isPlaying = true;
    this.abortController = new AbortController();

    const symbols = morseCode.split('');
    const totalSymbols = symbols.length;

    try {
      for (let i = 0; i < symbols.length; i++) {
        if (this.abortController.signal.aborted) break;

        const symbol = symbols[i];

        if (symbol === '.') {
          await this.playTone(AUDIO_CONFIG.dotDuration);
          await this.wait(AUDIO_CONFIG.symbolGap);
        } else if (symbol === '-') {
          await this.playTone(AUDIO_CONFIG.dashDuration);
          await this.wait(AUDIO_CONFIG.symbolGap);
        } else if (symbol === ' ') {
          await this.wait(AUDIO_CONFIG.letterGap);
        } else if (symbol === '/') {
          await this.wait(AUDIO_CONFIG.wordGap);
        }

        onProgress?.((i + 1) / totalSymbols);
      }
    } finally {
      this.isPlaying = false;
      this.abortController = null;
    }
  }

  /**
   * Stop playing audio
   */
  stop(): void {
    this.abortController?.abort();
    this.isPlaying = false;
  }

  /**
   * Play a single tone
   */
  private playTone(duration: number): Promise<void> {
    return new Promise((resolve) => {
      if (!this.audioContext) {
        resolve();
        return;
      }

      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = AUDIO_CONFIG.frequency;
      oscillator.type = 'sine';

      // Fade in/out to avoid clicking sounds
      const now = this.audioContext.currentTime;
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.5, now + 0.01);
      gainNode.gain.linearRampToValueAtTime(0, now + duration / 1000);

      oscillator.start(now);
      oscillator.stop(now + duration / 1000);

      setTimeout(resolve, duration);
    });
  }

  /**
   * Wait for specified milliseconds
   */
  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Check if currently playing
   */
  get playing(): boolean {
    return this.isPlaying;
  }
}

// Singleton instance
let playerInstance: MorseAudioPlayer | null = null;

export function getMorseAudioPlayer(): MorseAudioPlayer {
  if (!playerInstance) {
    playerInstance = new MorseAudioPlayer();
  }
  return playerInstance;
}
