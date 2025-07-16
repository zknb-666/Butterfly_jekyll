# Butterfly Jekyll Theme 🦋

A beautiful Jekyll theme inspired by the popular Hexo Butterfly theme, featuring modern design, dark mode support, and smooth animations.

![Theme Preview](assets/img/preview.jpg)

## ✨ Features

### 🎨 **Modern Design**
- Clean and elegant interface
- Responsive CSS Grid layout
- Beautiful typography with Inter font
- Card-based post layout

### 🌙 **Dark Mode Support**
- Automatic system preference detection
- Manual toggle with smooth transitions
- Persistent user preference storage
- Optimized colors for both themes

### ✨ **Advanced Animations**
- Scroll-triggered animations with AOS
- Smooth CSS transitions
- Animated ribbon background
- Interactive hover effects

### 📱 **Mobile First**
- Responsive design for all devices
- Touch-friendly navigation
- Fast loading performance
- Progressive enhancement

### 🚀 **Performance**
- Lazy loading images
- Optimized CSS and JavaScript
- Fast build times
- SEO optimized

## 🛠️ Installation

### Prerequisites
- Ruby (version 2.7 or higher)
- Jekyll
- Bundler

### Setup

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd butterfly-jekyll-theme
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Serve the site locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

## ⚙️ Configuration

### Basic Setup

Edit `_config.yml` to customize your site:

```yaml
title: Your Site Title
description: Your site description
url: "https://yourdomain.com"
```

### Theme Settings

Configure the Butterfly theme features:

```yaml
butterfly:
  # Navigation
  nav:
    logo: 
      text: "Your Site Name"
    menu:
      Home: /
      Archives: /archives/
      Tags: /tags/
      Categories: /categories/
      About: /about/

  # Social Links
  social:
    github: https://github.com/username
    twitter: https://twitter.com/username
    email: mailto:your-email@example.com

  # Theme Features
  darkmode:
    enable: true
    button: true

  # Cover Images
  index_img: /assets/img/bg.jpg
  default_cover: /assets/img/default-cover.jpg
```

## 📝 Writing Posts

Create new posts in the `_posts` directory:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-01 00:00:00 +0000
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
cover: /assets/img/post-cover.jpg
---

Your post content here...
```

## 🎨 Customization

### Colors

Modify CSS custom properties in `assets/css/main.css`:

```css
:root {
  --primary-color: #4285f4;
  --secondary-color: #34a853;
  /* ... other variables */
}
```

### Fonts

Change the font family:

```css
:root {
  --font-family: 'Your Font', sans-serif;
}
```

### Layout

The theme uses CSS Grid and Flexbox for layout. Customize in the main CSS file.

## 📁 Directory Structure

```
butterfly-jekyll-theme/
├── _includes/          # Reusable HTML components
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── scripts.html
├── _layouts/           # Page templates
│   ├── default.html
│   ├── home.html
│   ├── post.html
│   └── page.html
├── _posts/             # Blog posts
├── assets/
│   ├── css/
│   │   └── main.css    # Main stylesheet
│   ├── js/
│   │   ├── main.js     # Theme JavaScript
│   │   └── ribbon.js   # Background animations
│   └── img/            # Images
├── _config.yml         # Jekyll configuration
├── Gemfile            # Ruby dependencies
└── index.md           # Homepage
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose source branch (usually `main` or `gh-pages`)

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bundle exec jekyll build`
3. Set publish directory: `_site`

### Other Platforms

The theme works with any Jekyll-compatible hosting platform.

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please:

1. Check the documentation
2. Search existing issues
3. Create a new issue if needed

## 🙏 Acknowledgments

- Inspired by [Hexo Theme Butterfly](https://github.com/jerryc127/hexo-theme-butterfly)
- Built with [Jekyll](https://jekyllrb.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Animations with [AOS](https://michalsnik.github.io/aos/)

---

Made with ❤️ and Jekyll
