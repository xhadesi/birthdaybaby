/* ==========================================================================
   STARRY CELESTIAL CANVAS BACKGROUND & PARTICLES
   ========================================================================== */

class StarCanvas {
  constructor() {
    this.canvas = document.getElementById('star-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.mouse = { x: null, y: null };

    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    this.createStars();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createStars() {
    const starCount = Math.floor((this.width * this.height) / 8000);
    this.stars = [];
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 0.5,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.02 + 0.005,
        direction: Math.random() > 0.5 ? 1 : -1,
        color: Math.random() > 0.3 ? '#ffffff' : (Math.random() > 0.5 ? '#ffb6c1' : '#ffeaa7')
      });
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.stars.length; i++) {
      const s = this.stars[i];
      s.alpha += s.speed * s.direction;
      if (s.alpha > 1 || s.alpha < 0.2) {
        s.direction *= -1;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fillStyle = s.color;
      this.ctx.shadowBlur = 6;
      this.ctx.shadowColor = s.color;
      this.ctx.fill();
      this.ctx.restore();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.starCanvas = new StarCanvas();
});
