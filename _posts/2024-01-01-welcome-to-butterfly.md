---
layout: post
title: "Welcome to Butterfly Jekyll Theme"
date: 2024-01-01 00:00:00 +0000
categories: [Tutorial, Theme]
tags: [jekyll, butterfly, theme, blog]
cover: /assets/img/sample-post.jpg
---

# Welcome to Butterfly Jekyll Theme! 🦋

This is a beautiful Jekyll theme inspired by the popular Hexo Butterfly theme. It features a modern design with smooth animations, dark mode support, and responsive layout.

## Key Features

### 🎨 Modern Design
- Clean and elegant interface
- Responsive design that works on all devices
- Beautiful typography with Inter font family
- Smooth animations and transitions

### 🌙 Dark Mode Support
- Automatic system preference detection
- Manual toggle with smooth transition
- Persistent user preference storage
- Optimized colors for both light and dark themes

### ✨ Advanced Animations
- CSS animations with AOS library
- Smooth scroll effects
- Parallax backgrounds
- Interactive elements with hover effects

### 📱 Mobile First
- Responsive navigation with hamburger menu
- Touch-friendly interface
- Optimized for mobile performance
- Fast loading times

## Getting Started

To start using this theme, you can:

1. **Create a new post** by adding a markdown file to the `_posts` directory
2. **Customize the theme** by editing `_config.yml`
3. **Add your content** and make it your own

## Code Highlighting

The theme supports syntax highlighting for various programming languages:

```javascript
// JavaScript example
function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.setItem('darkMode', html.classList.contains('dark'));
}
```

```css
/* CSS example */
.post-card {
  background: var(--card-bg);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
}
```

```python
# Python example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

## Typography

The theme includes beautiful typography with proper spacing and hierarchy:

### Heading Level 3
Regular paragraph text with proper line height and spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

#### Heading Level 4
More text content with **bold text** and *italic text* formatting. Links are styled with the primary color and have hover effects.

> Blockquotes are styled with a left border and italic text.
> They stand out from regular content and are great for highlighting important information.

## Lists

Unordered lists:
- Feature one
- Feature two
- Feature three
  - Nested item
  - Another nested item

Ordered lists:
1. First step
2. Second step
3. Third step

## Images

Images are responsive and have proper styling:

![Sample Image](/assets/img/sample-image.jpg)

## Conclusion

This theme provides a solid foundation for your Jekyll blog. Feel free to customize it according to your needs and create amazing content!

Happy blogging! 🚀
