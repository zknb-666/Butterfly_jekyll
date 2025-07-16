# Hexo Butterfly Theme for Jekyll

这是一个完全移植到Jekyll的Hexo Butterfly主题，保留了原主题的所有核心功能和美观设计。

## ✨ 功能特性

### 🎨 视觉设计
- **响应式设计**: 完美适配桌面、平板和移动设备
- **黑暗/明亮主题**: 支持主题切换，用户体验更佳
- **现代化UI**: 简洁美观的界面设计
- **动画效果**: 流畅的交互动画

### 📝 内容管理
- **Markdown支持**: 完整的Markdown语法支持
- **代码高亮**: 使用Rouge进行语法高亮
- **目录生成**: 自动生成文章目录
- **标签分类**: 完善的标签和分类系统

### 🔍 搜索功能
- **本地搜索**: 基于JSON的快速本地搜索
- **实时搜索**: 输入即时显示搜索结果
- **搜索高亮**: 搜索关键词高亮显示

### 📱 社交功能
- **社交链接**: 支持多种社交平台链接
- **分享功能**: 一键分享到各大平台
- **评论系统**: 集成多种评论系统

### 🛠️ 技术特性
- **Jekyll 4.2+**: 基于最新Jekyll版本
- **Sass/SCSS**: 模块化的样式架构
- **Font Awesome**: 丰富的图标库
- **SEO优化**: 完善的搜索引擎优化
- **PWA就绪**: 支持渐进式Web应用

## 📁 目录结构

```
hexo-theme-butterfly-jekyll/
├── _config.yml                 # Jekyll配置文件
├── Gemfile                     # Ruby依赖管理
├── _layouts/                   # 布局模板
│   ├── default.html           # 默认布局
│   ├── home.html              # 首页布局
│   ├── post.html              # 文章布局
│   ├── page.html              # 页面布局
│   ├── archive.html           # 归档布局
│   ├── category.html          # 分类布局
│   └── tag.html               # 标签布局
├── _includes/                  # 包含文件
│   ├── head.html              # HTML头部
│   ├── header/                # 页头组件
│   ├── footer.html            # 页脚
│   ├── sidebar.html           # 侧边栏
│   ├── widget/                # 小工具
│   ├── post/                  # 文章相关组件
│   └── third-party/           # 第三方集成
├── _sass/                      # Sass样式文件
│   ├── _variables.scss        # 变量定义
│   ├── base/                  # 基础样式
│   ├── components/            # 组件样式
│   ├── pages/                 # 页面样式
│   ├── third-party/           # 第三方样式
│   └── utilities/             # 工具样式
├── assets/                     # 静态资源
│   ├── css/                   # CSS文件
│   ├── js/                    # JavaScript文件
│   └── img/                   # 图片资源
├── _posts/                     # 博客文章
└── _site/                      # 生成的静态网站
```

## 🚀 快速开始

### 1. 环境要求
- Ruby 2.7+
- Jekyll 4.2+
- Bundler

### 2. 安装依赖
```bash
bundle install
```

### 3. 本地开发
```bash
bundle exec jekyll serve
```

### 4. 构建生产版本
```bash
bundle exec jekyll build
```

## ⚙️ 配置说明

### 基本配置
在 `_config.yml` 中配置网站基本信息：

```yaml
title: "您的网站标题"
description: "网站描述"
url: "https://yoursite.com"
author: "作者名称"
```

### 主题配置
主题相关配置在 `_config.yml` 的 `theme_config` 部分：

```yaml
theme_config:
  nav:
    logo: "/assets/img/logo.png"
    menu:
      首页: /
      归档: /archives/
      标签: /tags/
      分类: /categories/
      关于: /about/
```

### 社交链接
```yaml
theme_config:
  social:
    github: https://github.com/yourusername
    twitter: https://twitter.com/yourusername
    email: mailto:your@email.com
```

## 📝 写作指南

### 文章Front Matter
```yaml
---
layout: post
title: "文章标题"
date: 2024-01-01 12:00:00 +0800
categories: [分类1, 分类2]
tags: [标签1, 标签2]
author: "作者"
cover: "/assets/img/cover.jpg"
excerpt: "文章摘要"
---
```

### 页面Front Matter
```yaml
---
layout: page
title: "页面标题"
permalink: /about/
---
```

## 🎨 自定义样式

### 修改主题色彩
在 `_sass/_variables.scss` 中修改颜色变量：

```scss
// 主题色彩
$primary-color: #49b1f5;
$secondary-color: #ff7242;
$success-color: #51cf66;
$warning-color: #ffd43b;
$error-color: #ff6b6b;
```

### 添加自定义样式
在 `assets/css/main.scss` 中添加自定义样式：

```scss
// 自定义样式
.custom-class {
  // 您的样式代码
}
```

## 🔌 插件集成

### 评论系统
支持多种评论系统，在 `_config.yml` 中配置：

```yaml
theme_config:
  comments:
    enable: true
    type: disqus  # disqus, gitalk, valine等
    disqus_shortname: your-disqus-shortname
```

### 分析统计
```yaml
theme_config:
  analytics:
    google_analytics: UA-XXXXXXXX-X
    baidu_analytics: your-baidu-id
```

## 📱 部署

### GitHub Pages
1. 推送代码到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择source为 `main` 分支

### Netlify
1. 连接GitHub仓库到Netlify
2. 设置构建命令: `bundle exec jekyll build`
3. 设置发布目录: `_site`

### Vercel
1. 导入GitHub仓库到Vercel
2. 自动检测Jekyll项目并部署

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个主题！

## 📄 许可证

本项目基于MIT许可证开源。

## 🙏 致谢

- 感谢 [Hexo Butterfly](https://github.com/jerryc127/hexo-theme-butterfly) 原主题作者
- 感谢Jekyll社区的支持
- 感谢所有贡献者

---

**享受Jekyll版本的Butterfly主题带来的美好写作体验！** 🦋
