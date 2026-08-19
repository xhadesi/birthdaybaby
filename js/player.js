/* ==========================================================================
   ROMANTIC FLOATING VINYL AUDIO PLAYER & WEBAUDIO HARMONIC ENGINE
   ========================================================================== */

class RomanticAudioPlayer {
  constructor() {
    this.playBtn = document.getElementById('player-play-btn');
    this.vinylDisc = document.getElementById('vinyl-disc');
    this.statusText = document.getElementById('player-status');
    this.audioEl = document.getElementById('romantic-audio-element');
    
    this.isPlaying = false;
    this.audioCtx = null;
    this.synthInterval = null;
    this.noteStep = 0;

    this.init();
  }

  init() {
    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => this.togglePlay());
    }

    if (this.vinylDisc) {
      this.vinylDisc.addEventListener('click', () => this.togglePlay());
    }

    // WeChat In-App Browser special audio autoplay support
    document.addEventListener('WeixinJSBridgeReady', () => {
      if (this.audioEl) {
        this.audioEl.load();
      }
    }, false);

    // Attempt audio on first user touch anywhere if not yet playing
    document.addEventListener('touchstart', () => {
      if (!this.audioCtx) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          this.audioCtx = new AudioContext();
        } catch (e) {}
      }
    }, { once: true });

    document.addEventListener('click', () => {
      // Passive listener just to unlock audio context
      if (!this.audioCtx) {
        try {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          this.audioCtx = new AudioContext();
        } catch (e) {}
      }
    }, { once: true });
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    if (this.vinylDisc) this.vinylDisc.classList.add('playing');
    if (this.playBtn) this.playBtn.textContent = '⏸️';

    // Try HTML5 Audio if audio file is present
    if (this.audioEl && this.audioEl.src && this.audioEl.src !== window.location.href) {
      this.audioEl.play().catch(() => {
        this.startHarmonicSynth();
      });
    } else {
      this.startHarmonicSynth();
    }

    if (window.showToast) {
      window.showToast("🎵 Playing: 浪漫星空下 (Wang Junkai Style) 💖");
    }
  }

  pause() {
    this.isPlaying = false;
    if (this.vinylDisc) this.vinylDisc.classList.remove('playing');
    if (this.playBtn) this.playBtn.textContent = '▶️';

    if (this.audioEl) this.audioEl.pause();
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  startHarmonicSynth() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Wang Junkai style romantic chord progression in G Major / E minor:
    // Gmaj7 -> Em9 -> Cmaj7 -> Dadd9
    // Beautiful gentle electric piano / acoustic harp frequencies
    const chordProgression = [
      [392.00, 493.88, 587.33, 739.99], // G, B, D, F# (Gmaj7)
      [329.63, 392.00, 493.88, 587.33], // E, G, B, D (Em7)
      [261.63, 329.63, 392.00, 493.88], // C, E, G, B (Cmaj7)
      [293.66, 369.99, 440.00, 587.33], // D, F#, A, D (Dadd9)
      [392.00, 493.88, 587.33, 880.00], // G, B, D, A (Gadd9)
      [329.63, 440.00, 493.88, 659.25], // Em11
      [261.63, 392.00, 523.25, 659.25], // Cmaj9
      [293.66, 440.00, 587.33, 739.99]  // Dsus4 to D
    ];

    if (this.synthInterval) clearInterval(this.synthInterval);

    this.synthInterval = setInterval(() => {
      if (!this.isPlaying) return;
      const currentChord = chordProgression[this.noteStep % chordProgression.length];
      
      // Play arpeggio
      currentChord.forEach((freq, idx) => {
        setTimeout(() => {
          if (!this.isPlaying) return;
          this.playHarpNote(freq, 1.8);
        }, idx * 380);
      });

      this.noteStep++;
    }, 1700);
  }

  playHarpNote(frequency, duration) {
    if (!this.audioCtx || this.audioCtx.state !== 'running') return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle'; // Warm, soft romantic timbre
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.09, this.audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.audioPlayer = new RomanticAudioPlayer();
});
