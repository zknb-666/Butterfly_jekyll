// Simple Jekyll Search Functionality
class JekyllSearch {
  constructor() {
    this.searchInput = null;
    this.searchResults = null;
    this.posts = [];
    this.isSearchVisible = false;
    
    this.init();
  }

  init() {
    this.createSearchInterface();
    this.loadPosts();
    this.bindEvents();
  }

  createSearchInterface() {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
      <input type="text" 
             class="search-input" 
             placeholder="Search posts..." 
             aria-label="Search posts">
      <div class="search-results"></div>
    `;

    // Insert after header or at top of main content
    const main = document.querySelector('.main');
    if (main) {
      main.insertBefore(searchContainer, main.firstChild);
    }

    this.searchInput = searchContainer.querySelector('.search-input');
    this.searchResults = searchContainer.querySelector('.search-results');
  }

  loadPosts() {
    // In a real implementation, you would load this from a JSON file
    // For demo purposes, we'll extract from the current page
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
      const titleElement = card.querySelector('.post-title a');
      const excerptElement = card.querySelector('.post-excerpt');
      const tagsElements = card.querySelectorAll('.tag');
      
      if (titleElement) {
        const post = {
          title: titleElement.textContent.trim(),
          url: titleElement.href,
          excerpt: excerptElement ? excerptElement.textContent.trim() : '',
          tags: Array.from(tagsElements).map(tag => tag.textContent.trim()),
          content: titleElement.textContent + ' ' + (excerptElement ? excerptElement.textContent : '')
        };
        
        this.posts.push(post);
      }
    });
  }

  bindEvents() {
    if (!this.searchInput) return;

    let searchTimeout;

    this.searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const query = e.target.value.trim();

      searchTimeout = setTimeout(() => {
        if (query.length > 2) {
          this.performSearch(query);
        } else {
          this.hideResults();
        }
      }, 300);
    });

    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideResults();
        this.searchInput.blur();
      }
    });

    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        this.hideResults();
      }
    });
  }

  performSearch(query) {
    const results = this.posts.filter(post => {
      const searchContent = (post.content + ' ' + post.tags.join(' ')).toLowerCase();
      return searchContent.includes(query.toLowerCase());
    });

    this.displayResults(results, query);
  }

  displayResults(results, query) {
    if (results.length === 0) {
      this.searchResults.innerHTML = `
        <div class="search-result-item">
          <div class="search-result-title">No results found</div>
          <div class="search-result-excerpt">Try a different search term</div>
        </div>
      `;
    } else {
      this.searchResults.innerHTML = results.map(post => `
        <div class="search-result-item" onclick="window.location.href='${post.url}'">
          <div class="search-result-title">${this.highlightQuery(post.title, query)}</div>
          <div class="search-result-excerpt">${this.highlightQuery(post.excerpt, query)}</div>
        </div>
      `).join('');
    }

    this.showResults();
  }

  highlightQuery(text, query) {
    if (!query || !text) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  showResults() {
    this.searchResults.style.display = 'block';
    this.isSearchVisible = true;
  }

  hideResults() {
    this.searchResults.style.display = 'none';
    this.isSearchVisible = false;
  }
}

// Enhanced search with JSON data
class EnhancedJekyllSearch extends JekyllSearch {
  async loadPosts() {
    try {
      // In a real Jekyll site, you would generate this JSON file
      const response = await fetch('/search.json');
      if (response.ok) {
        this.posts = await response.json();
      } else {
        // Fallback to DOM extraction
        super.loadPosts();
      }
    } catch (error) {
      console.log('Search JSON not found, using DOM extraction');
      super.loadPosts();
    }
  }

  performSearch(query) {
    const queryWords = query.toLowerCase().split(/\s+/);
    
    const results = this.posts.filter(post => {
      const searchContent = (post.content + ' ' + post.tags.join(' ')).toLowerCase();
      
      // Check if all query words are present
      return queryWords.every(word => searchContent.includes(word));
    }).sort((a, b) => {
      // Simple relevance scoring
      const aScore = this.calculateRelevance(a, query);
      const bScore = this.calculateRelevance(b, query);
      return bScore - aScore;
    });

    this.displayResults(results.slice(0, 10), query); // Limit to 10 results
  }

  calculateRelevance(post, query) {
    const queryLower = query.toLowerCase();
    let score = 0;

    // Title matches are more important
    if (post.title.toLowerCase().includes(queryLower)) {
      score += 10;
    }

    // Tag matches
    post.tags.forEach(tag => {
      if (tag.toLowerCase().includes(queryLower)) {
        score += 5;
      }
    });

    // Content matches
    const contentMatches = (post.content.toLowerCase().match(new RegExp(queryLower, 'g')) || []).length;
    score += contentMatches;

    return score;
  }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on pages that would benefit from search
  if (document.querySelector('.posts-grid') || document.querySelector('.archive-list')) {
    new EnhancedJekyllSearch();
  }
});

// Export for use in other scripts
window.JekyllSearch = EnhancedJekyllSearch;
