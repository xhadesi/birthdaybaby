/* ==========================================================================
   COUNTDOWN TIMER & MIDNIGHT AUTOMATIC UNLOCK (CHONGQING TIME / UTC+8)
   ========================================================================== */

class BirthdayCountdown {
  constructor() {
    this.daysEl = document.getElementById('cd-days');
    this.hoursEl = document.getElementById('cd-hours');
    this.minsEl = document.getElementById('cd-mins');
    this.secsEl = document.getElementById('cd-secs');
    this.beijingClockEl = document.getElementById('beijing-clock');
    this.countdownSection = document.getElementById('countdown-section');
    this.mainExperience = document.getElementById('main-experience');
    this.heroSection = document.getElementById('hero-section');
    this.brandHeart = document.querySelector('.brand-heart');
    
    // Target: August 20, 2026 00:00:00 China Standard Time (UTC+8)
    // In UTC, this is August 19, 2026 16:00:00 UTC
    this.targetDateUTC = Date.UTC(2026, 7, 19, 16, 0, 0); // Month is 0-indexed: 7 is August
    this.isUnlocked = false;
    this.heartClickCount = 0;

    this.init();
  }

  init() {
    this.update();
    this.timer = setInterval(() => this.update(), 1000);

    // Secret dev testing trigger: Triple tap the brand heart
    if (this.brandHeart) {
      this.brandHeart.addEventListener('click', () => {
        this.heartClickCount++;
        if (this.heartClickCount >= 3) {
          this.triggerCelebration(true);
        }
        setTimeout(() => { this.heartClickCount = 0; }, 2000);
      });
    }
  }

  getChongqingTime() {
    // Current UTC time + 8 hours
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utcTime + (3600000 * 8));
  }

  update() {
    const now = new Date().getTime();
    const diff = this.targetDateUTC - now;

    // Update Chongqing Clock Badge
    const cqTime = this.getChongqingTime();
    const cqStr = cqTime.toTimeString().split(' ')[0];
    if (this.beijingClockEl) {
      this.beijingClockEl.textContent = `🇨🇳 重庆时间 / Chongqing Time: ${cqStr} (CST / UTC+8)`;
    }

    if (diff <= 0) {
      if (!this.isUnlocked) {
        this.triggerCelebration(false);
      }
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
    if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
    if (this.minsEl) this.minsEl.textContent = String(mins).padStart(2, '0');
    if (this.secsEl) this.secsEl.textContent = String(secs).padStart(2, '0');
  }

  triggerCelebration(isManual = false) {
    if (this.isUnlocked) return;
    this.isUnlocked = true;
    if (this.timer) clearInterval(this.timer);

    if (this.daysEl) this.daysEl.textContent = "00";
    if (this.hoursEl) this.hoursEl.textContent = "00";
    if (this.minsEl) this.minsEl.textContent = "00";
    if (this.secsEl) this.secsEl.textContent = "00";

    // UNLOCK MAIN EXPERIENCE
    if (this.mainExperience) {
      this.mainExperience.classList.remove('main-experience-locked');
      this.mainExperience.classList.add('main-experience-unlocked');
    }

    if (this.countdownSection) {
      this.countdownSection.classList.remove('fullscreen-lock');
    }

    // Launch Grand Fireworks Finale
    if (window.fireworksEngine) {
      window.fireworksEngine.startGrandFinale();
    }

    // Play Romantic Music automatically
    if (window.audioPlayer && !window.audioPlayer.isPlaying) {
      window.audioPlayer.play();
    }

    // Show Toast
    if (window.showToast) {
      window.showToast("🎉 Happy Birthday Zhang Jing Yi (依依)! 🎂💖");
    }

    // Scroll smoothly to Hero
    setTimeout(() => {
      if (this.heroSection) {
        this.heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.birthdayCountdown = new BirthdayCountdown();
});
