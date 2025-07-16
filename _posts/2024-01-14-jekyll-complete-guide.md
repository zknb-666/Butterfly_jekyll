---
layout: post
title: "Jekyll 静态网站生成器完全指南"
date: 2024-01-14 15:30:00 +0800
categories: [技术, Web开发]
tags: [Jekyll, 静态网站, GitHub Pages, Ruby]
author: "技术达人"
cover: "/assets/img/jekyll-guide.svg"
excerpt: "深入了解 Jekyll 静态网站生成器，从基础概念到高级功能，帮助您构建现代化的静态网站。"
---

# Jekyll 静态网站生成器完全指南

Jekyll 是一个简单的静态网站生成器，特别适合用于创建博客、文档网站和个人主页。本文将详细介绍 Jekyll 的使用方法和最佳实践。

## 什么是 Jekyll？

Jekyll 是由 GitHub 的联合创始人 Tom Preston-Werner 开发的静态网站生成器。它使用 Ruby 语言编写，可以将纯文本转换为静态网站和博客。

### 主要优势

1. **简单易用** - 使用 Markdown 编写内容
2. **Git 友好** - 完美集成版本控制
3. **免费托管** - 可部署到 GitHub Pages
4. **高性能** - 静态文件加载速度快
5. **安全性** - 没有数据库和服务器端漏洞

## 安装 Jekyll

### 系统要求

- Ruby 2.5.0 或更高版本
- RubyGems
- GCC 和 Make

### 安装步骤

1. **安装 Ruby**（如果尚未安装）：

```bash
# macOS (使用 Homebrew)
brew install ruby

# Ubuntu/Debian
sudo apt-get install ruby-full

# Windows (使用 RubyInstaller)
# 下载并安装 RubyInstaller
```

2. **安装 Jekyll 和 Bundler**：

```bash
gem install jekyll bundler
```

3. **创建新网站**：

```bash
jekyll new my-awesome-site
cd my-awesome-site
```

4. **启动开发服务器**：

```bash
bundle exec jekyll serve
```

## 目录结构

Jekyll 网站的典型目录结构如下：

```
.
├── _config.yml          # 配置文件
├── _data/               # 数据文件目录
├── _drafts/             # 草稿文件目录
├── _includes/           # 包含文件目录
├── _layouts/            # 布局文件目录
├── _posts/              # 博客文章目录
├── _sass/               # Sass 文件目录
├── _site/               # 生成的网站文件
├── assets/              # 资源文件目录
├── Gemfile              # Ruby 依赖管理
├── Gemfile.lock         # 锁定的依赖版本
└── index.md             # 首页文件
```

## 配置文件详解

`_config.yml` 是 Jekyll 的核心配置文件：

```yaml
# 网站信息
title: Your awesome title
email: your-email@example.com
description: >- # 网站描述
  Write an awesome description for your new site here.
baseurl: "" # 子路径
url: "" # 网站 URL

# 构建设置
markdown: kramdown
highlighter: rouge
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# 排除文件
exclude:
  - .sass-cache/
  - .jekyll-cache/
  - gemfiles/
  - Gemfile
  - Gemfile.lock
  - node_modules/
  - vendor/

# 分页设置
paginate: 5
paginate_path: "/page:num/"

# 自定义变量
custom_variable: "custom value"
```

## 创建内容

### 写博客文章

在 `_posts` 目录下创建文件，文件名格式：`YYYY-MM-DD-title.MARKUP`

```markdown
---
layout: post
title:  "我的第一篇博客"
date:   2024-01-14 15:30:00 +0800
categories: jekyll update
tags: [blog, jekyll]
---

这里是文章内容...

## 标题

段落内容...

```ruby
puts "Hello, Jekyll!"
```
```

### 创建页面

创建独立页面，如 `about.md`：

```markdown
---
layout: page
title: About
permalink: /about/
---

这是关于页面的内容...
```

## 布局系统

### 创建布局

在 `_layouts` 目录下创建布局文件：

```html
<!-- _layouts/post.html -->
---
layout: default
---

<article class="post">
  <header class="post-header">
    <h1 class="post-title">{{ page.title }}</h1>
    <p class="post-meta">
      <time datetime="{{ page.date | date_to_xmlschema }}">
        {{ page.date | date: "%B %d, %Y" }}
      </time>
    </p>
  </header>

  <div class="post-content">
    {{ content }}
  </div>
</article>
```

### 使用包含文件

在 `_includes` 目录下创建可重用的代码片段：

```html
<!-- _includes/head.html -->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <title>
    {% if page.title %}{{ page.title | escape }}{% else %}{{ site.title | escape }}{% endif %}
  </title>
  
  <link rel="stylesheet" href="{{ "/assets/main.css" | relative_url }}">
</head>
```

在布局中使用：

```html
<!DOCTYPE html>
<html>
  {% include head.html %}
  <body>
    {{ content }}
  </body>
</html>
```

## Liquid 模板语言

Jekyll 使用 Liquid 模板语言来处理动态内容：

### 变量输出

```liquid
{{ site.title }}        <!-- 网站标题 -->
{{ page.title }}        <!-- 页面标题 -->
{{ content }}           <!-- 页面内容 -->
```

### 条件语句

```liquid
{% if page.title %}
  <h1>{{ page.title }}</h1>
{% endif %}

{% unless page.hide_title %}
  <h1>{{ page.title }}</h1>
{% endunless %}
```

### 循环语句

```liquid
<!-- 遍历文章 -->
{% for post in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt }}</p>
{% endfor %}

<!-- 遍历数据 -->
{% for item in site.data.navigation %}
  <a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}
```

### 过滤器

```liquid
{{ page.date | date: "%B %d, %Y" }}     <!-- 格式化日期 -->
{{ page.title | upcase }}               <!-- 转大写 -->
{{ content | strip_html | truncate: 160 }}  <!-- 去除HTML并截断 -->
```

## 数据文件

在 `_data` 目录下创建 YAML、JSON 或 CSV 文件：

```yaml
# _data/navigation.yml
- title: "首页"
  url: "/"
- title: "关于"
  url: "/about/"
- title: "联系"
  url: "/contact/"
```

在模板中使用：

```liquid
<nav>
  {% for item in site.data.navigation %}
    <a href="{{ item.url }}">{{ item.title }}</a>
  {% endfor %}
</nav>
```

## 插件系统

### 常用插件

1. **jekyll-feed** - RSS 订阅
2. **jekyll-sitemap** - 站点地图
3. **jekyll-seo-tag** - SEO 优化
4. **jekyll-paginate** - 分页功能

### 安装插件

在 `Gemfile` 中添加：

```ruby
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end
```

在 `_config.yml` 中启用：

```yaml
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

## 部署选项

### GitHub Pages

1. 创建 GitHub 仓库
2. 推送代码到仓库
3. 在设置中启用 GitHub Pages

### Netlify

1. 连接 GitHub 仓库
2. 设置构建命令：`bundle exec jekyll build`
3. 设置发布目录：`_site`

### 自定义服务器

```bash
# 构建网站
bundle exec jekyll build

# 上传 _site 目录到服务器
rsync -avz _site/ user@server:/path/to/website/
```

## 性能优化

### 图片优化

```liquid
<!-- 使用 picture 元素 -->
<picture>
  <source media="(min-width: 800px)" srcset="{{ '/assets/img/large.jpg' | relative_url }}">
  <img src="{{ '/assets/img/small.jpg' | relative_url }}" alt="描述">
</picture>
```

### CSS 和 JS 压缩

在 `_config.yml` 中配置：

```yaml
sass:
  style: compressed

# 使用插件压缩 HTML
plugins:
  - jekyll-compress-html
```

### 缓存优化

```liquid
<!-- 添加缓存版本号 -->
<link rel="stylesheet" href="{{ '/assets/css/main.css?v=' | append: site.time | date: '%s' | relative_url }}">
```

## 最佳实践

1. **使用版本控制** - 始终使用 Git 管理代码
2. **定期备份** - 备份 `_posts` 和 `_config.yml`
3. **测试构建** - 部署前在本地测试
4. **SEO 优化** - 使用合适的标题和描述
5. **移动优先** - 确保在移动设备上正常显示

## 故障排除

### 常见问题

1. **构建失败**
   ```bash
   bundle exec jekyll build --verbose --trace
   ```

2. **依赖冲突**
   ```bash
   bundle update
   ```

3. **编码问题**
   ```yaml
   # _config.yml
   encoding: utf-8
   ```

### 调试技巧

```liquid
<!-- 显示所有变量 -->
{{ site | inspect }}
{{ page | inspect }}

<!-- 显示构建时间 -->
Generated on {{ site.time | date: "%Y-%m-%d %H:%M:%S" }}
```

## 总结

Jekyll 是一个强大而灵活的静态网站生成器，适合各种规模的项目。通过掌握本文介绍的概念和技巧，您可以创建出专业且高性能的静态网站。

记住，Jekyll 的强大之处在于其简单性和灵活性。从简单开始，随着需求的增长逐步添加功能和复杂性。
