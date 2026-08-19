/* ==========================================================================
   INTERACTIVE SURPRISES: SKY LANTERNS, CAKE CANDLES & LOVE CAPSULES (ANIMATED SVG)
   ========================================================================== */

const LOVE_REASONS = [
  { zh: "因为你笑起来的时候，整个世界都在发光", en: "Because your smile illuminates the entire universe" },
  { zh: "因为你叫我「baby」时的声音，甜到了我心里", en: "Because the way you say 'baby' melts my heart completely" },
  { zh: "因为在重庆鸿恩寺初次见你，我就认定了你", en: "Because the moment I saw you in Chongqing, I knew you were the one" },
  { zh: "因为你有一颗最善良、最纯真、最体贴的心", en: "Because you have the kindest, purest, most caring heart" },
  { zh: "因为哪怕相隔8000公里，有你我就觉得很安心", en: "Because even 8,000 km apart, you make me feel so safe and loved" },
  { zh: "因为你认真吃美食的样子超级可爱", en: "Because you look unimaginably adorable when enjoying good food" },
  { zh: "因为你是我每天醒来想到的第一个人，睡前想到的最后一个人", en: "Because you are my first thought in the morning and my last before sleep" },
  { zh: "因为我们有聊不完的话题和数不清的欢笑", en: "Because we have endless laughter and conversations that never grow old" },
  { zh: "因为你值得世界上所有最美好的爱与宠溺", en: "Because you deserve all the purest love and joy this world has to offer" },
  { zh: "因为我已经等不及明年正式搬来中国，每一天都陪着你", en: "Because I cannot wait to move to China next year to be with you forever" }
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
    this.candleFlameBtn = document.getElementById('candle-flame');
    this.candleFlameSvg = document.getElementById('candle-flame-svg-el');
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
    if (this.candleFlameBtn) {
      this.candleFlameBtn.addEventListener('click', () => this.blowCandle());
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

  // 1. Sky Lantern Action (Animated SVG floating lanterns)
  launchLantern() {
    const customWish = this.lanternInput ? this.lanternInput.value.trim() : "";
    const wishText = customWish || (this.currentLang === 'zh' ? "愿依依岁岁平安，永远开心甜蜜！" : "May Yi always be happy and healthy!");

    this.closeAllModals();

    // Create 4 floating vector lanterns
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        const lantern = document.createElement('div');
        lantern.className = 'lantern-flyer';
        lantern.innerHTML = `
          <svg viewBox="0 0 48 60" fill="none" style="width:100%; height:100%;">
            <ellipse cx="24" cy="30" rx="18" ry="24" fill="url(#lanternGrad)" stroke="#ffd32a" stroke-width="1.5"/>
            <rect x="18" y="52" width="12" height="4" rx="2" fill="#d4af37"/>
            <circle cx="24" cy="38" r="6" fill="#fff" opacity="0.9"/>
          </svg>
        `;
        lantern.style.left = `${Math.random() * 80 + 10}vw`;
        lantern.style.animationDuration = `${Math.random() * 4 + 7}s`;
        document.body.appendChild(lantern);

        setTimeout(() => lantern.remove(), 12000);
      }, i * 400);
    }

    if (window.showToast) {
      window.showToast(`${wishText}`);
    }

    if (window.fireworksEngine) {
      window.fireworksEngine.explode(window.innerWidth / 2, window.innerHeight * 0.3, true, '#ffd700');
    }
  }

  // 2. Reasons Capsule Draw (Animated SVG Capsule)
  drawRandomReason() {
    this.currentReasonIndex = Math.floor(Math.random() * LOVE_REASONS.length);
    this.updateReasonDisplay();
  }

  updateReasonDisplay() {
    if (!this.reasonContentEl) return;
    const item = LOVE_REASONS[this.currentReasonIndex];
    const text = this.currentLang === 'zh' ? item.zh : item.en;
    this.reasonContentEl.innerHTML = `
      <div style="margin-bottom: 15px;">
        <svg class="svg-icon icon-capsule" viewBox="0 0 48 48" fill="none" style="width: 60px; height: 60px;">
          <rect x="10" y="8" width="28" height="32" rx="14" fill="url(#liquidGlassGrad)" stroke="#ff4785" stroke-width="2"/>
          <path d="M24 28C24 28 17 23.5 17 19C17 16.5 18.5 15 20.5 15C22 15 23.5 16 24 17C24.5 16 26 15 27.5 15C29.5 15 31 16.5 31 19C31 23.5 24 28 24 28Z" fill="url(#roseGrad)"/>
        </svg>
      </div>
      <p style="font-size: 1.25rem; font-weight: 700; line-height: 1.8; color: #fff;">${text}</p>
    `;
  }

  // 3. Virtual Cake Blowout (Interactive SVG Candle)
  resetCake() {
    if (this.candleFlameSvg) {
      this.candleFlameSvg.classList.remove('blown');
    }
    if (this.cakeMsg) {
      this.cakeMsg.style.display = 'none';
    }
  }

  blowCandle() {
    if (!this.candleFlameSvg || this.candleFlameSvg.classList.contains('blown')) return;
    
    this.candleFlameSvg.classList.add('blown');
    if (this.cakeMsg) {
      this.cakeMsg.style.display = 'block';
    }

    // Launch celebratory fireworks
    if (window.fireworksEngine) {
      window.fireworksEngine.startGrandFinale();
    }

    if (window.showToast) {
      window.showToast(this.currentLang === 'zh' ? "蜡烛已吹灭！愿望一定会实现！宝贝生日快乐！" : "Candles blown out! All wishes will come true! Happy Birthday baby!");
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.birthdayQuests = new BirthdayQuests();
});
