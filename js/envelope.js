/* ==========================================================================
   WAX-SEALED LOVE ENVELOPE INTERACTION & SOUND SYNTHESIS
   ========================================================================== */

class LoveEnvelope {
  constructor() {
    this.envelopeBox = document.getElementById('envelope-box');
    this.waxSeal = document.getElementById('wax-seal');
    this.letterModal = document.getElementById('letter-modal');
    this.closeBtn = document.getElementById('letter-close-btn');

    this.init();
  }

  init() {
    if (this.envelopeBox) {
      this.envelopeBox.addEventListener('click', () => this.openLetter());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeLetter();
      });
    }

    if (this.letterModal) {
      this.letterModal.addEventListener('click', (e) => {
        if (e.target === this.letterModal) this.closeLetter();
      });
    }
  }

  playOpenSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      // AudioContext unavailable or blocked
    }
  }

  openLetter() {
    this.playOpenSound();
    if (this.letterModal) {
      this.letterModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    if (window.fireworksEngine) {
      window.fireworksEngine.explode(
        window.innerWidth / 2,
        window.innerHeight / 2,
        true,
        '#ff6b8b'
      );
    }
  }

  closeLetter() {
    if (this.letterModal) {
      this.letterModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.loveEnvelope = new LoveEnvelope();
});
