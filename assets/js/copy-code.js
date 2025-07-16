/**
 * Copy code functionality
 */

class CopyCode {
  constructor() {
    this.init();
  }

  init() {
    this.addCopyButtons();
  }

  addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code, .highlight code');
    
    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.closest('pre') || codeBlock.closest('.highlight');
      if (!pre || pre.querySelector('.copy-btn')) return;

      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
      copyBtn.title = 'Copy code';
      
      copyBtn.addEventListener('click', () => {
        this.copyToClipboard(codeBlock.textContent);
        this.showCopySuccess(copyBtn);
      });

      pre.style.position = 'relative';
      pre.appendChild(copyBtn);
    });
  }

  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }

  showCopySuccess(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.color = '#52c41a';
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.color = '';
    }, 2000);
  }
}

// Initialize copy code functionality
document.addEventListener('DOMContentLoaded', () => {
  new CopyCode();
});
