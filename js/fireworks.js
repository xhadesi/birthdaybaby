/* ==========================================================================
   HIGH-PERFORMANCE CANVAS FIREWORKS & HEART EXPLOSION ENGINE
   ========================================================================== */

class FireworksEngine {
  constructor() {
    this.canvas = document.getElementById('fireworks-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.fireworks = [];
    this.isRunning = false;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.loop();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createFirework(x, y, targetX, targetY, isHeart = false) {
    this.fireworks.push({
      x: x || Math.random() * this.width,
      y: y || this.height,
      targetX: targetX || (Math.random() * (this.width * 0.8) + this.width * 0.1),
      targetY: targetY || (Math.random() * (this.height * 0.5) + this.height * 0.1),
      speed: 12 + Math.random() * 6,
      angle: Math.atan2((targetY || 200) - (y || this.height), (targetX || this.width / 2) - (x || this.width / 2)),
      color: `hsl(${Math.random() * 60 + 330}, 100%, 75%)`, // Rose, gold, pink hues
      isHeart: isHeart || Math.random() > 0.4
    });
  }

  explode(x, y, isHeart, baseColor) {
    const particleCount = isHeart ? 65 : 80;
    for (let i = 0; i < particleCount; i++) {
      let vx, vy;
      if (isHeart) {
        // Heart curve formula: x = 16 sin^3(t), y = -(13 cos(t) - 5 cos(2t) - 2 cos(3t) - cos(4t))
        const t = (Math.PI * 2 / particleCount) * i;
        const heartX = 16 * Math.pow(Math.sin(t), 3);
        const heartY = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
        const speedMultiplier = 0.22 + Math.random() * 0.05;
        vx = heartX * speedMultiplier;
        vy = heartY * speedMultiplier;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      }

      this.particles.push({
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.012,
        color: baseColor || `hsl(${Math.random() * 60 + 330}, 100%, 70%)`,
        size: Math.random() * 3 + 2,
        gravity: 0.06
      });
    }
  }

  startGrandFinale() {
    this.isRunning = true;
    let burstCount = 0;
    const interval = setInterval(() => {
      this.createFirework(
        Math.random() * this.width,
        this.height,
        Math.random() * (this.width * 0.8) + this.width * 0.1,
        Math.random() * (this.height * 0.4) + this.height * 0.1,
        true
      );
      burstCount++;
      if (burstCount > 15) {
        clearInterval(interval);
      }
    }, 250);
  }

  loop() {
    requestAnimationFrame(() => this.loop());

    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = 'lighter';

    // Update fireworks
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      const f = this.fireworks[i];
      const dx = f.targetX - f.x;
      const dy = f.targetY - f.y;
      const dist = Math.hypot(dx, dy);

      if (dist < f.speed) {
        this.explode(f.targetX, f.targetY, f.isHeart, f.color);
        this.fireworks.splice(i, 1);
      } else {
        f.x += Math.cos(f.angle) * f.speed;
        f.y += Math.sin(f.angle) * f.speed;

        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, 3, 0, Math.PI * 2);
        this.ctx.fillStyle = f.color;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = f.color;
        this.ctx.fill();
      }
    }

    // Update explosion particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
      } else {
        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.color;
        this.ctx.fill();
        this.ctx.restore();
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.fireworksEngine = new FireworksEngine();
});
