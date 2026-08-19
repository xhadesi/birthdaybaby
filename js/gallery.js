/* ==========================================================================
   POLAROID MEMORY GALLERY & LIGHTBOX SYSTEM
   ========================================================================== */

const PHOTO_LIST = [
  {
    src: "assets/photos/Image_20260712071325_3403_28.jpg",
    zhTitle: "甜美微笑",
    enTitle: "Sweet Radiant Smile",
    zhDate: "2026年7月 • 让人心动的瞬间",
    enDate: "July 2026 • Heartfluttering moment",
    rot: -2.5
  },
  {
    src: "assets/photos/Image_20260717172901_4776_28.jpg",
    zhTitle: "可爱的依依",
    enTitle: "Cutest Baby Yi",
    zhDate: "夏日的阳光与你",
    enDate: "Summer sunshine and you",
    rot: 3.2
  },
  {
    src: "assets/photos/Image_20260717172902_4777_28.jpg",
    zhTitle: "温柔的眼眸",
    enTitle: "Gentle Gaze",
    zhDate: "眼里有星星的女孩",
    enDate: "A girl with stars in her eyes",
    rot: -1.8
  },
  {
    src: "assets/photos/Image_20260717172904_4778_28.jpg",
    zhTitle: "心动瞬间",
    enTitle: "Enchanting Moment",
    zhDate: "好想抱抱你",
    enDate: "Wishing to hold you close",
    rot: 2.1
  },
  {
    src: "assets/photos/Image_20260717172905_4779_28.jpg",
    zhTitle: "全世界最美",
    enTitle: "Most Beautiful in the World",
    zhDate: "每一个角度都如此完美",
    enDate: "Flawless from every angle",
    rot: -3.5
  },
  {
    src: "assets/photos/Image_20260717172907_4780_28.jpg",
    zhTitle: "治愈系笑容",
    enTitle: "Healing Smile",
    zhDate: "看到你所有烦恼都烟消云散",
    enDate: "Seeing you makes everything bright",
    rot: 1.5
  },
  {
    src: "assets/photos/Image_20260718124811_4871_28.jpg",
    zhTitle: "独一无二的宝藏",
    enTitle: "My Rare Treasure",
    zhDate: "7月18日 • 甜蜜回忆",
    enDate: "July 18 • Sweet Memories",
    rot: -2.0
  },
  {
    src: "assets/photos/Image_20260724152400_6597_28.jpg",
    zhTitle: "满分可爱",
    enTitle: "100% Adorable",
    zhDate: "7月24日 • 可爱暴击",
    enDate: "July 24 • Pure Loveliness",
    rot: 3.0
  },
  {
    src: "assets/photos/Image_20260724152400_6598_28.jpg",
    zhTitle: "清澈的目光",
    enTitle: "Crystal Clear Eyes",
    zhDate: "想念你的每一分每一秒",
    enDate: "Missing you every single second",
    rot: -1.2
  },
  {
    src: "assets/photos/Image_20260724152400_6599_28.jpg",
    zhTitle: "如花绽放",
    enTitle: "Blooming Like a Flower",
    zhDate: "夏天最美的风景就是你",
    enDate: "The prettiest view of summer",
    rot: 2.8
  },
  {
    src: "assets/photos/Image_20260724152400_6600_28.jpg",
    zhTitle: "小公主",
    enTitle: "My Little Princess",
    zhDate: "永远守护你的快乐",
    enDate: "Guarding your happiness forever",
    rot: -2.8
  },
  {
    src: "assets/photos/Image_20260724152400_6601_28.jpg",
    zhTitle: "甜美定格",
    enTitle: "Frozen in Sweetness",
    zhDate: "时光温柔，因你而美",
    enDate: "Time is sweet because of you",
    rot: 1.9
  },
  {
    src: "assets/photos/Image_20260724152400_6602_28.jpg",
    zhTitle: "浪漫氛围感",
    enTitle: "Romantic Vibes",
    zhDate: "我的全世界都是你",
    enDate: "You mean the world to me",
    rot: -3.1
  },
  {
    src: "assets/photos/Image_20260724152400_6603_28.jpg",
    zhTitle: "心动的信号",
    enTitle: "Signals of Love",
    zhDate: "听见心跳的声音",
    enDate: "Hearing my heartbeat for you",
    rot: 2.4
  },
  {
    src: "assets/photos/Image_20260724152400_6604_28.jpg",
    zhTitle: "俏皮可爱",
    enTitle: "Playful & Cute",
    zhDate: "怎么看都看不够",
    enDate: "Can never get enough of your smile",
    rot: -1.6
  },
  {
    src: "assets/photos/Image_20260724152400_6605_28.jpg",
    zhTitle: "纯净与优雅",
    enTitle: "Pure Elegance",
    zhDate: "令人着迷的依依",
    enDate: "Fascinating & charming Yi",
    rot: 3.4
  },
  {
    src: "assets/photos/Image_20260724152400_6606_28.jpg",
    zhTitle: "夏日微风",
    enTitle: "Summer Breeze",
    zhDate: "只想永远牵着你的手",
    enDate: "Just want to hold your hand forever",
    rot: -2.3
  },
  {
    src: "assets/photos/Image_20260724152400_6607_28.jpg",
    zhTitle: "最美依依",
    enTitle: "Gorgeous Yi",
    zhDate: "为你心动一万次",
    enDate: "Falling for you ten thousand times",
    rot: 1.8
  },
  {
    src: "assets/photos/Image_20260724152400_6608_28.jpg",
    zhTitle: "温暖的光",
    enTitle: "Warm Light",
    zhDate: "照亮我世界的那道光",
    enDate: "The bright light illuminating my world",
    rot: -3.0
  },
  {
    src: "assets/photos/Image_20260724152400_6609_28.jpg",
    zhTitle: "心尖上的宝贝",
    enTitle: "Sweetest Baby",
    zhDate: "最深的思念与爱意",
    enDate: "Deepest longing and love",
    rot: 2.2
  },
  {
    src: "assets/photos/Image_20260724152400_6610_28.jpg",
    zhTitle: "闪闪发光",
    enTitle: "Shining Star",
    zhDate: "愿你天天开心无忧",
    enDate: "Wishing you pure happiness every day",
    rot: -1.9
  },
  {
    src: "assets/photos/Image_20260724152422_6611_28.jpg",
    zhTitle: "甜到心里",
    enTitle: "Sweet as Honey",
    zhDate: "7月24日 • 快乐每一刻",
    enDate: "July 24 • Joy in every moment",
    rot: 3.1
  },
  {
    src: "assets/photos/Image_20260803140506_8537_28.jpg",
    zhTitle: "八月的你",
    enTitle: "August Sunshine",
    zhDate: "8月3日 • 倒计时期待生日",
    enDate: "August 3 • Anticipating your birthday",
    rot: -2.7
  },
  {
    src: "assets/photos/Image_20260809185444_9939_28.jpg",
    zhTitle: "温柔晚风",
    enTitle: "Gentle Evening",
    zhDate: "8月9日 • 无论何时都在想你",
    enDate: "August 9 • Always on my mind",
    rot: 1.4
  },
  {
    src: "assets/photos/Image_20260810164652_10018_28.jpg",
    zhTitle: "生日大快乐",
    enTitle: "Happy Birthday Yi!",
    zhDate: "8月10日 • 永远爱你",
    enDate: "August 10 • Loving you forever",
    rot: -2.2
  }
];

class PolaroidGallery {
  constructor() {
    this.grid = document.getElementById('polaroid-grid');
    this.lightbox = document.getElementById('lightbox-modal');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxCaption = document.getElementById('lightbox-caption');
    this.lightboxSubcaption = document.getElementById('lightbox-subcaption');
    this.closeBtn = document.getElementById('lightbox-close');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    
    this.currentIndex = 0;
    this.currentLang = 'zh';

    this.init();
  }

  init() {
    if (!this.grid) return;
    this.render();

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeLightbox());
    }

    if (this.lightbox) {
      this.lightbox.addEventListener('click', (e) => {
        if (e.target === this.lightbox) this.closeLightbox();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevPhoto());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextPhoto());
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (!this.lightbox || !this.lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.prevPhoto();
      if (e.key === 'ArrowRight') this.nextPhoto();
    });
  }

  setLanguage(lang) {
    this.currentLang = lang;
    this.render();
    if (this.lightbox && this.lightbox.classList.contains('active')) {
      this.updateLightboxContent();
    }
  }

  render() {
    this.grid.innerHTML = '';
    PHOTO_LIST.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'polaroid-card';
      card.style.setProperty('--rot', `${photo.rot}deg`);

      const isZh = this.currentLang === 'zh';
      const title = isZh ? photo.zhTitle : photo.enTitle;
      const sub = isZh ? photo.zhDate : photo.enDate;

      card.innerHTML = `
        <div class="tape-deco"></div>
        <div class="polaroid-img-wrap">
          <img src="${photo.src}" alt="${title}" loading="lazy" />
        </div>
        <div class="polaroid-caption">${title}</div>
        <div class="polaroid-subcaption">${sub}</div>
      `;

      card.addEventListener('click', () => this.openLightbox(idx));
      this.grid.appendChild(card);
    });
  }

  openLightbox(idx) {
    this.currentIndex = idx;
    this.updateLightboxContent();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  prevPhoto() {
    this.currentIndex = (this.currentIndex - 1 + PHOTO_LIST.length) % PHOTO_LIST.length;
    this.updateLightboxContent();
  }

  nextPhoto() {
    this.currentIndex = (this.currentIndex + 1) % PHOTO_LIST.length;
    this.updateLightboxContent();
  }

  updateLightboxContent() {
    const photo = PHOTO_LIST[this.currentIndex];
    const isZh = this.currentLang === 'zh';
    this.lightboxImg.src = photo.src;
    this.lightboxCaption.textContent = isZh ? photo.zhTitle : photo.enTitle;
    this.lightboxSubcaption.textContent = isZh ? photo.zhDate : photo.enDate;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.polaroidGallery = new PolaroidGallery();
});
