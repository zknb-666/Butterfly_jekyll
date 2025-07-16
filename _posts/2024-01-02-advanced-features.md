---
layout: post
title: "Advanced Features Guide"
date: 2024-01-02 00:00:00 +0000
categories: [Tutorial, Advanced]
tags: [features, customization, guide]
cover: /assets/img/advanced-features.jpg
---

# Advanced Features of Butterfly Jekyll Theme

This guide covers the advanced features and customization options available in the Butterfly Jekyll theme.

## Theme Configuration

### Navigation Menu

Customize your navigation menu in `_config.yml`:

```yaml
butterfly:
  nav:
    logo: 
      text: "Your Site Name"
    menu:
      Home: /
      Archives: /archives/
      Tags: /tags/
      Categories: /categories/
      About: /about/
```

### Social Links

Add your social media links:

```yaml
butterfly:
  social:
    github: https://github.com/username
    twitter: https://twitter.com/username
    instagram: https://instagram.com/username
    email: mailto:your-email@example.com
```

## Post Features

### Cover Images
Each post can have a custom cover image by adding the `cover` field to the front matter:

```yaml
---
cover: /assets/img/your-cover-image.jpg
---
```

### Categories and Tags
Organize your content with categories and tags:

```yaml
---
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
---
```

## Animations

The theme includes several animation features:

- **AOS (Animate On Scroll)**: Elements fade in as you scroll
- **CSS Transitions**: Smooth hover effects
- **Background Animations**: Animated ribbon background
- **Text Animations**: Letter-by-letter animations for titles

## Dark Mode

The dark mode feature includes:

- Automatic system preference detection
- Manual toggle button
- Smooth color transitions
- Persistent user preference

## Performance Features

### Lazy Loading
Images are lazy-loaded for better performance:

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### Code Optimization
- Minified CSS and JavaScript
- Efficient animations
- Responsive images
- Fast loading times

## Customization Tips

### Colors
Modify the CSS variables in `assets/css/main.css` to change the color scheme:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... other variables */
}
```

### Fonts
Change the font family by updating the CSS variable:

```css
:root {
  --font-family: 'Your Font', sans-serif;
}
```

### Animations
Disable animations for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

This theme is designed to be flexible and customizable while maintaining excellent performance and accessibility.
