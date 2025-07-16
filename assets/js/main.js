/**
 * Butterfly Theme Main JavaScript
 */

(function() {
  'use strict';

  // Utility functions
  const utils = {
    // Debounce function
    debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Throttle function
    throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // Get theme config
    getConfig(key) {
      return window.BUTTERFLY_CONFIG && window.BUTTERFLY_CONFIG.theme_config
        ? window.BUTTERFLY_CONFIG.theme_config[key]
        : null;
    }
  };

  // Theme initialization
  const Theme = {
    init() {
      this.initNavigation();
      this.initScrollEffects();
      this.initRightside();
      this.initDarkMode();
      this.initLoading();
      this.initCodeCopy();
      this.initImageLightbox();
    },

    // Navigation
    initNavigation() {
      const navToggle = document.getElementById('nav-toggle');
      const navMenu = document.getElementById('nav-menu');

      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          navToggle.classList.toggle('active');
          navMenu.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
          if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('show');
          }
        });
      }

      // Fixed navigation on scroll
      const nav = document.getElementById('nav');
      if (nav) {
        const handleScroll = utils.throttle(() => {
          if (window.scrollY > 100) {
            nav.classList.add('fixed');
          } else {
            nav.classList.remove('fixed');
          }
        }, 100);

        window.addEventListener('scroll', handleScroll);
      }
    },

    // Scroll effects
    initScrollEffects() {
      const goUpBtn = document.getElementById('go-up');
      if (goUpBtn) {
        const handleScroll = utils.throttle(() => {
          if (window.scrollY > 400) {
            goUpBtn.style.opacity = '1';
            goUpBtn.style.visibility = 'visible';
          } else {
            goUpBtn.style.opacity = '0';
            goUpBtn.style.visibility = 'hidden';
          }
        }, 100);

        window.addEventListener('scroll', handleScroll);

        goUpBtn.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    },

    // Right side toolbar
    initRightside() {
      const configBtn = document.getElementById('rightside_config');
      const configHide = document.getElementById('rightside-config-hide');
      const configShow = document.getElementById('rightside-config-show');

      if (configBtn && configHide && configShow) {
        configBtn.addEventListener('click', () => {
          configHide.classList.toggle('show');
        });
      }

      // Hide aside toggle
      const hideAsideBtn = document.getElementById('hide-aside-btn');
      if (hideAsideBtn) {
        hideAsideBtn.addEventListener('click', () => {
          document.body.classList.toggle('hide-aside');
          const layout = document.getElementById('content-inner');
          if (layout) {
            layout.classList.toggle('hide-aside');
          }
        });
      }

      // Reading mode
      const readModeBtn = document.getElementById('readmode');
      if (readModeBtn) {
        readModeBtn.addEventListener('click', () => {
          document.body.classList.toggle('read-mode');
        });
      }
    },

    // Dark mode
    initDarkMode() {
      const darkModeBtn = document.getElementById('darkmode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Get saved theme or use system preference
      let currentTheme = localStorage.getItem('theme') || 
        (prefersDark.matches ? 'dark' : 'light');

      // Apply theme
      this.setTheme(currentTheme);

      if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
          currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
          this.setTheme(currentTheme);
          localStorage.setItem('theme', currentTheme);
        });
      }

      // Listen for system theme changes
      prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    },

    setTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    },

    // Loading animation
    initLoading() {
      const loadingBox = document.getElementById('loading-box');
      if (loadingBox) {
        window.addEventListener('load', () => {
          loadingBox.style.opacity = '0';
          setTimeout(() => {
            loadingBox.style.display = 'none';
          }, 300);
        });
      }
    },

    // Code copy functionality
    initCodeCopy() {
      if (!utils.getConfig('code_blocks.copy')) return;

      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((code) => {
        const pre = code.parentElement;
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.title = '复制代码';

        copyBtn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(code.textContent);
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            copyBtn.style.color = '#10b981';
            setTimeout(() => {
              copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
              copyBtn.style.color = '';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
        });

        pre.appendChild(copyBtn);
      });
    },

    // Image lightbox
    initImageLightbox() {
      const images = document.querySelectorAll('article img');
      images.forEach((img) => {
        img.addEventListener('click', () => {
          this.openLightbox(img.src, img.alt);
        });
        img.style.cursor = 'zoom-in';
      });
    },

    openLightbox(src, alt) {
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-overlay">
          <div class="lightbox-content">
            <img src="${src}" alt="${alt}">
            <button class="lightbox-close">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(lightbox);
      document.body.style.overflow = 'hidden';

      // Close lightbox
      const close = () => {
        document.body.removeChild(lightbox);
        document.body.style.overflow = '';
      };

      lightbox.querySelector('.lightbox-close').addEventListener('click', close);
      lightbox.querySelector('.lightbox-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) close();
      });

      // ESC key to close
      const handleKeydown = (e) => {
        if (e.key === 'Escape') {
          close();
          document.removeEventListener('keydown', handleKeydown);
        }
      };
      document.addEventListener('keydown', handleKeydown);
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Theme.init());
  } else {
    Theme.init();
  }

  // Make Theme available globally
  window.Theme = Theme;
})();
