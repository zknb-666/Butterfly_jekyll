// Animated Ribbon Background
class RibbonBackground {
  constructor() {
    this.canvas = document.getElementById('ribbon');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.width = 0;
    this.height = 0;
    this.ribbons = [];
    this.colorSaturation = '80%';
    this.colorLightness = '60%';
    this.colorAlpha = 0.65;
    this.ribbonCount = 3;
    
    this.init();
  }

  init() {
    this.resize();
    this.createRibbons();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    
    // Adjust for dark mode
    document.addEventListener('DOMContentLoaded', () => {
      this.updateColorsForTheme();
    });
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      this.updateColorsForTheme();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  updateColorsForTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      this.colorLightness = '30%';
      this.colorAlpha = 0.3;
    } else {
      this.colorLightness = '60%';
      this.colorAlpha = 0.15;
    }
  }

  createRibbons() {
    this.ribbons = [];
    for (let i = 0; i < this.ribbonCount; i++) {
      this.ribbons.push(new Ribbon(this, i));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    this.ribbons.forEach(ribbon => {
      ribbon.update();
      ribbon.draw();
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

class Ribbon {
  constructor(parent, index) {
    this.parent = parent;
    this.index = index;
    this.points = [];
    this.pointCount = 50;
    this.hue = (index * 120) % 360;
    this.speed = 0.5 + index * 0.2;
    this.amplitude = 50 + index * 20;
    this.frequency = 0.01 + index * 0.005;
    this.offset = index * Math.PI * 0.5;
    this.time = 0;
    
    this.createPoints();
  }

  createPoints() {
    this.points = [];
    const spacing = this.parent.width / (this.pointCount - 1);
    
    for (let i = 0; i < this.pointCount; i++) {
      this.points.push({
        x: i * spacing,
        y: this.parent.height * 0.5,
        baseY: this.parent.height * 0.3 + this.index * 100
      });
    }
  }

  update() {
    this.time += this.speed;
    
    this.points.forEach((point, i) => {
      const wave1 = Math.sin((i * this.frequency) + this.time + this.offset) * this.amplitude;
      const wave2 = Math.sin((i * this.frequency * 2) + this.time * 1.5 + this.offset) * this.amplitude * 0.5;
      point.y = point.baseY + wave1 + wave2;
    });
  }

  draw() {
    const ctx = this.parent.ctx;
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, this.parent.width, 0);
    gradient.addColorStop(0, `hsla(${this.hue}, ${this.parent.colorSaturation}, ${this.parent.colorLightness}, 0)`);
    gradient.addColorStop(0.5, `hsla(${this.hue}, ${this.parent.colorSaturation}, ${this.parent.colorLightness}, ${this.parent.colorAlpha})`);
    gradient.addColorStop(1, `hsla(${this.hue}, ${this.parent.colorSaturation}, ${this.parent.colorLightness}, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = `hsla(${this.hue}, ${this.parent.colorSaturation}, ${this.parent.colorLightness}, ${this.parent.colorAlpha * 0.8})`;
    ctx.lineWidth = 2;
    
    // Draw ribbon path
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    
    // Create smooth curve using quadratic curves
    for (let i = 1; i < this.points.length - 1; i++) {
      const cp1x = (this.points[i].x + this.points[i + 1].x) / 2;
      const cp1y = (this.points[i].y + this.points[i + 1].y) / 2;
      ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, cp1x, cp1y);
    }
    
    // Complete the ribbon shape
    ctx.lineTo(this.parent.width, this.parent.height);
    ctx.lineTo(0, this.parent.height);
    ctx.closePath();
    
    ctx.fill();
    ctx.stroke();
  }
}

// Particle System for enhanced background
class ParticleSystem {
  constructor() {
    this.particles = [];
    this.particleCount = 50;
    this.canvas = document.getElementById('ribbon');
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.createParticles();
  }

  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height));
    }
  }

  update() {
    this.particles.forEach(particle => {
      particle.update();
      particle.draw(this.ctx);
    });
  }
}

class Particle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
    this.width = width;
    this.height = height;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    
    // Wrap around edges
    if (this.x < 0) this.x = this.width;
    if (this.x > this.width) this.x = 0;
    if (this.y < 0) this.y = this.height;
    if (this.y > this.height) this.y = 0;
  }

  draw(ctx) {
    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? '255, 255, 255' : '0, 0, 0';
    
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = `rgba(${color}, 0.3)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// Initialize background effects
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if canvas exists and user prefers motion
  const canvas = document.getElementById('ribbon');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (canvas && !prefersReducedMotion) {
    new RibbonBackground();
    
    // Add subtle particle effect
    setTimeout(() => {
      const particleSystem = new ParticleSystem();
      
      function animateParticles() {
        // Clear only particle area (particles are drawn after ribbons)
        particleSystem.update();
        requestAnimationFrame(animateParticles);
      }
      
      animateParticles();
    }, 1000);
  }
});

// Performance optimization: pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
  const canvas = document.getElementById('ribbon');
  if (canvas) {
    if (document.hidden) {
      canvas.style.animationPlayState = 'paused';
    } else {
      canvas.style.animationPlayState = 'running';
    }
  }
});
