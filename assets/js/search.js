/**
 * Search functionality for Jekyll Butterfly theme
 */

class Search {
  constructor() {
    this.searchData = [];
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.loadSearchData();
      this.bindEvents();
    }
  }

  loadSearchData() {
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        this.searchData = data;
      })
      .catch(error => {
        console.warn('Search data not found. Search functionality will be limited.');
      });
  }

  bindEvents() {
    this.searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });
  }

  performSearch(query) {
    if (!query || query.length < 2) {
      this.clearResults();
      return;
    }

    const results = this.searchData.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase()) ||
             item.content.toLowerCase().includes(query.toLowerCase()) ||
             (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())));
    });

    this.displayResults(results, query);
  }

  displayResults(results, query) {
    if (!this.searchResults) return;

    if (results.length === 0) {
      this.searchResults.innerHTML = `<div class="search-no-results">No results found for "${query}"</div>`;
      return;
    }

    const html = results.map(item => `
      <div class="search-result-item">
        <h3><a href="${item.url}">${this.highlight(item.title, query)}</a></h3>
        <p>${this.highlight(item.excerpt || item.content.substring(0, 150) + '...', query)}</p>
        ${item.tags ? `<div class="search-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>` : ''}
      </div>
    `).join('');

    this.searchResults.innerHTML = html;
  }

  highlight(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  clearResults() {
    if (this.searchResults) {
      this.searchResults.innerHTML = '';
    }
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Search();
});
