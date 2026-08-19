/* ==========================================================================
   CORE APPLICATION ORCHESTRATOR & LANGUAGE SWITCHER
   ========================================================================== */

class AppManager {
  constructor() {
    this.currentLang = 'zh'; // Default Chinese since it's Beijing midnight & Yi's native language
    this.langToggleBtn = document.getElementById('lang-toggle-btn');
    this.toastContainer = document.getElementById('toast-container');

    this.init();
  }

  init() {
    if (this.langToggleBtn) {
      this.langToggleBtn.addEventListener('click', () => this.toggleLanguage());
    }

    // Set initial text
    this.applyLanguage();

    // Global toast expose
    window.showToast = (msg) => this.showToast(msg);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'zh' ? 'en' : 'zh';
    this.applyLanguage();
  }

  applyLanguage() {
    const t = TRANSLATIONS[this.currentLang];
    if (!t) return;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // Notify Subsystems
    if (window.polaroidGallery) window.polaroidGallery.setLanguage(this.currentLang);
    if (window.birthdayQuests) window.birthdayQuests.setLanguage(this.currentLang);

    // Update Language Button Label
    if (this.langToggleBtn) {
      this.langToggleBtn.textContent = t.langToggle;
    }
  }

  showToast(message) {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>💖</span> <span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px)';
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.appManager = new AppManager();
});
