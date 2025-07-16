/**
 * Table of Contents (TOC) functionality
 */

class TableOfContents {
  constructor() {
    this.tocContainer = document.getElementById('toc');
    this.headings = [];
    this.init();
  }

  init() {
    if (!this.tocContainer) return;
    
    this.collectHeadings();
    this.generateTOC();
    this.bindScrollEvents();
  }

  collectHeadings() {
    const content = document.querySelector('.post-content') || document.querySelector('article');
    if (!content) return;

    this.headings = Array.from(content.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    
    // Add IDs to headings if they don't have them
    this.headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = this.generateId(heading.textContent) || `heading-${index}`;
      }
    });
  }

  generateId(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }

  generateTOC() {
    if (this.headings.length === 0) {
      this.tocContainer.innerHTML = '<p>No headings found</p>';
      return;
    }

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    this.headings.forEach(heading => {
      const listItem = document.createElement('li');
      listItem.className = `toc-item toc-level-${heading.tagName.toLowerCase()}`;
      
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = 'toc-link';
      
      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });

    this.tocContainer.innerHTML = '';
    this.tocContainer.appendChild(tocList);
  }

  bindScrollEvents() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.updateActiveHeading();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  updateActiveHeading() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const links = this.tocContainer.querySelectorAll('.toc-link');
    
    // Remove active class from all links
    links.forEach(link => link.classList.remove('active'));
    
    // Find the current active heading
    let activeHeading = null;
    
    for (let i = this.headings.length - 1; i >= 0; i--) {
      const heading = this.headings[i];
      const rect = heading.getBoundingClientRect();
      
      if (rect.top <= 100) {
        activeHeading = heading;
        break;
      }
    }
    
    // Add active class to corresponding link
    if (activeHeading) {
      const activeLink = this.tocContainer.querySelector(`a[href="#${activeHeading.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  }
}

// Initialize TOC when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TableOfContents();
});
