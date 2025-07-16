---
layout: post
title: "欢迎使用 Butterfly Jekyll 主题"
date: 2024-01-15 10:00:00 +0800
categories: [技术, Jekyll]
tags: [Jekyll, Butterfly, 主题, 博客]
author: "博主"
cover: "/assets/img/cover-1.svg"
excerpt: "这是一个基于 Hexo Butterfly 主题移植到 Jekyll 的完整主题，包含了原主题的所有功能和特性。"
---

# 欢迎使用 Butterfly Jekyll 主题

这是一个基于著名的 Hexo Butterfly 主题移植到 Jekyll 的完整主题包。我们保留了原主题的所有精美设计和强大功能，同时充分利用了 Jekyll 的优势。

## 主要特性

### 🎨 精美设计
- 响应式设计，完美适配各种设备
- 支持明暗主题切换
- 优雅的动画效果
- 自定义颜色方案

### 📝 强大功能
- 完整的文章系统
- 分类和标签管理
- 搜索功能
- 评论系统
- 社交媒体集成

### ⚡ 性能优化
- 快速加载
- SEO 优化
- 图片懒加载
- 代码高亮

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/username/butterfly-jekyll.git
cd butterfly-jekyll
```

### 2. 安装依赖

```bash
bundle install
```

### 3. 运行开发服务器

```bash
bundle exec jekyll serve
```

### 4. 访问网站

在浏览器中打开 `http://localhost:4000` 即可查看您的网站。

## 配置说明

### 基本配置

在 `_config.yml` 文件中，您可以配置网站的基本信息：

```yaml
title: "您的网站标题"
description: "网站描述"
author:
  name: "您的姓名"
  email: "您的邮箱"
```

### 主题配置

主题的详细配置位于 `_config.yml` 中的 `theme_config` 部分：

```yaml
theme_config:
  # 导航配置
  nav:
    logo: "/assets/img/logo.png"
    display_title: true
    fixed: false
  
  # 菜单配置
  menu:
    Home: /
    Archives: /archives/
    Categories: /categories/
    Tags: /tags/
    About: /about/
```

## 写作指南

### 创建新文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式为 `YYYY-MM-DD-title.md`：

```markdown
---
layout: post
title: "文章标题"
date: 2024-01-15 10:00:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2, 标签3]
author: "作者名"
cover: "/assets/img/cover.jpg"
excerpt: "文章摘要"
---

在这里写文章内容...
```

### 代码高亮

主题支持语法高亮：

```javascript
function hello() {
    console.log("Hello, Butterfly Jekyll!");
}
```

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

### 图片处理

主题支持图片懒加载和点击放大：

![示例图片](/assets/img/example.jpg)

## 部署

### GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择源分支（通常是 `main` 或 `gh-pages`）

### Netlify

1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令：`bundle exec jekyll build`
3. 设置发布目录：`_site`

## 自定义

### 修改样式

主题使用 Sass 编写样式，您可以在 `_sass` 目录下找到所有样式文件：

- `_variables.scss` - 变量定义
- `base/` - 基础样式
- `components/` - 组件样式
- `pages/` - 页面样式

### 添加功能

您可以通过以下方式扩展主题功能：

1. 在 `_includes` 目录下添加新的包含文件
2. 在 `assets/js` 目录下添加 JavaScript 文件
3. 修改 `_layouts` 目录下的布局文件

## 支持

如果您在使用过程中遇到问题，可以：

1. 查看 [文档](https://your-docs-site.com)
2. 提交 [Issue](https://github.com/username/butterfly-jekyll/issues)
3. 参与 [讨论](https://github.com/username/butterfly-jekyll/discussions)

## 许可证

本主题基于 MIT 许可证发布。详情请查看 [LICENSE](LICENSE) 文件。

---

感谢您选择 Butterfly Jekyll 主题！希望它能帮助您创建一个美丽而功能强大的博客。
