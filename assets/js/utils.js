/**
 * Utility functions
 */

window.ButterflyUtils = {
  // DOM manipulation
  $(selector) {
    return document.querySelector(selector);
  },

  $$(selector) {
    return document.querySelectorAll(selector);
  },

  // Element creation
  createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
  },

  // Event handling
  on(element, event, handler) {
    if (typeof element === 'string') {
      element = this.$(element);
    }
    if (element) {
      element.addEventListener(event, handler);
    }
  },

  off(element, event, handler) {
    if (typeof element === 'string') {
      element = this.$(element);
    }
    if (element) {
      element.removeEventListener(event, handler);
    }
  },

  // Animation
  fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = performance.now();
    
    function animate(time) {
      const progress = (time - start) / duration;
      
      if (progress < 1) {
        element.style.opacity = progress;
        requestAnimationFrame(animate);
      } else {
        element.style.opacity = '1';
      }
    }
    
    requestAnimationFrame(animate);
  },

  fadeOut(element, duration = 300) {
    element.style.opacity = '1';
    
    let start = performance.now();
    
    function animate(time) {
      const progress = (time - start) / duration;
      
      if (progress < 1) {
        element.style.opacity = 1 - progress;
        requestAnimationFrame(animate);
      } else {
        element.style.opacity = '0';
        element.style.display = 'none';
      }
    }
    
    requestAnimationFrame(animate);
  },

  // Scroll utilities
  scrollTo(element, offset = 0) {
    if (typeof element === 'string') {
      element = this.$(element);
    }
    if (element) {
      const top = element.offsetTop + offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  },

  getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  },

  // String utilities
  slugify(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  truncate(str, length = 100) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  },

  // Date utilities
  formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day);
  },

  timeAgo(date) {
    const now = new Date();
    const past = new Date(date);
    const diff = now - past;
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    
    if (years > 0) return `${years}年前`;
    if (months > 0) return `${months}个月前`;
    if (days > 0) return `${days}天前`;
    if (hours > 0) return `${hours}小时前`;
    if (minutes > 0) return `${minutes}分钟前`;
    return '刚刚';
  },

  // Storage utilities
  setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }
  },

  getStorage(key, defaultValue = null) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : defaultValue;
    } catch (e) {
      console.warn('LocalStorage not available:', e);
      return defaultValue;
    }
  },

  removeStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }
  },

  // Device detection
  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },

  isTouch() {
    return 'ontouchstart' in window;
  },

  // Lazy loading
  lazyLoad(selector = 'img[data-src]') {
    const images = this.$$(selector);
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });
      
      images.forEach((img) => observer.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach((img) => {
        img.src = img.dataset.src;
        img.classList.add('loaded');
      });
    }
  },

  // Copy to clipboard
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true;
      } catch (e) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  }
};
