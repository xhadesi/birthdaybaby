/* ==========================================================================
   INTERACTIVE SURPRISES: SKY LANTERNS, CAKE CANDLES & LOVE CAPSULES
   ========================================================================== */

const LOVE_REASONS = [
  { zh: "因为你笑起来的时候，整个世界都在发光 ✨", en: "Because your smile illuminates the entire universe ✨" },
  { zh: "因为你叫我「baby」时的声音，甜到了我心里 💖", en: "Because the way you say 'baby' melts my heart completely 💖" },
  { zh: "因为在重庆鸿恩寺初次见你，我就认定了你 🌿", en: "Because the moment I saw you in Chongqing, I knew you were the one 🌿" },
  { zh: "因为你有一颗最善良、最纯真、最体贴的心 🌸", en: "Because you have the kindest, purest, most caring heart 🌸" },
  { zh: "因为哪怕相隔8000公里，有你我就觉得很安心 ✈️", en: "Because even 8,000 km apart, you make me feel so safe and loved ✈️" },
  { zh: "因为你认真吃美食的样子超级可爱 🍜", en: "Because you look unimaginably adorable when enjoying good food 🍜" },
  { zh: "因为你是我每天醒来想到的第一个人，睡前想到的最后一个人 🌙", en: "Because you are my first thought in the morning and my last before sleep 🌙" },
  { zh: "因为我们有聊不完的话题和数不清的欢笑 💫", en: "Because we have endless laughter and conversations that never grow old 💫" },
  { zh: "因为你值得世界上所有最美好的爱与宠溺 👑", en: "Because you deserve all the purest love and joy this world has to offer 👑" },
  { zh: "因为我已经等不及明年正式搬来中国，每一天都陪着你 🏡", en: "Because I cannot wait to move to China next year to be with you forever 🏡" }
];

class BirthdayQuests {
  constructor() {
    // Modals
    this.lanternModal = document.getElementById('lantern-modal');
    this.reasonModal = document.getElementById('reason-modal');
    this.cakeModal = document.getElementById('cake-modal');

    // Buttons to open modals
    this.btnLantern = document.getElementById('open-lantern-btn');
    this.btnReason = document.getElementById('open-reason-btn');
    this.btnCake = document.getElementById('open-cake-btn');

    // Action buttons inside modals
    this.sendLanternBtn = document.getElementById('send-lantern-btn');
    this.nextReasonBtn = document.getElementById('next-reason-btn');
    this.lanternInput = document.getElementById('lantern-input');
    this.reasonContentEl = document.getElementById('reason-card-content');
    this.candleFlame = document.getElementById('candle-flame');
    this.cakeMsg = document.getElementById('cake-msg');

    this.currentReasonIndex = 0;
    this.currentLang = 'zh';

    this.init();
  }

  init() {
    // Open Modal Triggers
    if (this.btnLantern) this.btnLantern.addEventListener('click', () => this.openModal(this.lanternModal));
    if (this.btnReason) this.btnReason.addEventListener('click', () => {
      this.drawRandomReason();
      this.openModal(this.reasonModal);
    });
    if (this.btnCake) this.btnCake.addEventListener('click', () => {
      this.resetCake();
      this.openModal(this.cakeModal);
    });

    // Close Modal on backdrop click or close btn
    document.querySelectorAll('.game-modal-close').forEach(btn => {
      btn.addEventListener('click', () => this.closeAllModals());
    });

    document.querySelectorAll('.game-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeAllModals();
      });
    });

    // Lantern Launch
    if (this.sendLanternBtn) {
      this.sendLanternBtn.addEventListener('click', () => this.launchLantern());
    }

    // Reason Capsule Draw
    if (this.nextReasonBtn) {
      this.nextReasonBtn.addEventListener('click', () => this.drawRandomReason());
    }

    // Cake Candle Blow
    if (this.candleFlame) {
      this.candleFlame.addEventListener('click', () => this.blowCandle());
    }
  }

  openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeAllModals() {
    document.querySelectorAll('.game-modal').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }

  setLanguage(lang) {
    this.currentLang = lang;
    this.updateReasonDisplay();
  }

  // 1. Sky Lantern Action
  launchLantern() {
    const customWish = this.lanternInput ? this.lanternInput.value.trim() : "";
    const wishText = customWish || (this.currentLang === 'zh' ? "愿依依岁岁平安，永远开心甜蜜！✨" : "May Yi always be happy and healthy! ✨");

    this.closeAllModals();

    // Create 3 floating lanterns
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const lantern = document.createElement('div');
        lantern.className = 'lantern-flyer';
        lantern.textContent = '🏮';
        lantern.style.left = `${Math.random() * 80 + 10}vw`;
        lantern.style.animationDuration = `${Math.random() * 4 + 7}s`;
        document.body.appendChild(lantern);

        setTimeout(() => lantern.remove(), 12000);
      }, i * 400);
    }

    if (window.showToast) {
      window.showToast(`🏮 ${wishText}`);
    }

    if (window.fireworksEngine) {
      window.fireworksEngine.explode(window.innerWidth / 2, window.innerHeight * 0.3, true, '#ffd700');
    }
  }

  // 2. Reasons Capsule Draw
  drawRandomReason() {
    this.currentReasonIndex = Math.floor(Math.random() * LOVE_REASONS.length);
    this.updateReasonDisplay();
  }

  updateReasonDisplay() {
    if (!this.reasonContentEl) return;
    const item = LOVE_REASONS[this.currentReasonIndex];
    const text = this.currentLang === 'zh' ? item.zh : item.en;
    this.reasonContentEl.innerHTML = `
      <div style="font-size: 2.5rem; margin-bottom: 15px;">💖</div>
      <p style="font-size: 1.2rem; font-weight: 600; line-height: 1.8; color: #fff;">${text}</p>
    `;
  }

  // 3. Virtual Cake Blowout
  resetCake() {
    if (this.candleFlame) {
      this.candleFlame.classList.remove('blown');
    }
    if (this.cakeMsg) {
      this.cakeMsg.style.display = 'none';
    }
  }

  blowCandle() {
    if (!this.candleFlame || this.candleFlame.classList.contains('blown')) return;
    
    this.candleFlame.classList.add('blown');
    if (this.cakeMsg) {
      this.cakeMsg.style.display = 'block';
    }

    // Launch celebratory fireworks
    if (window.fireworksEngine) {
      window.fireworksEngine.startGrandFinale();
    }

    if (window.showToast) {
      window.showToast(this.currentLang === 'zh' ? "🎂 蜡烛已吹灭！愿望全部成真！🎉" : "🎂 Candles blown out! All wishes will come true! 🎉");
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.birthdayQuests = new BirthdayQuests();
});
