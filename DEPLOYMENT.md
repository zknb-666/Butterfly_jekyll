# 🚀 Jekyll Butterfly 主题部署指南

## 📦 GitHub Pages 自动部署

您的Jekyll Butterfly主题已成功推送到GitHub仓库：
**https://github.com/zknb-666/Butterfly_jekyll**

### 🌐 启用GitHub Pages

1. **进入仓库设置**
   - 访问：https://github.com/zknb-666/Butterfly_jekyll/settings/pages

2. **配置GitHub Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**

3. **等待部署完成**
   - GitHub会自动构建您的Jekyll网站
   - 部署完成后，网站将可以通过以下地址访问：
   - **https://zknb-666.github.io/Butterfly_jekyll**

### ⚙️ 自动化工作流

我们已经配置了GitHub Actions自动部署工作流：

```yaml
# .github/workflows/jekyll.yml
- 当推送到main分支时自动触发
- 自动安装依赖并构建Jekyll网站
- 自动部署到GitHub Pages
```

### 🔧 本地开发

如果需要本地开发，请使用以下命令：

```bash
# 安装依赖
bundle install

# 本地开发服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

### 📝 自定义配置

#### 更新网站信息
编辑 `_config.yml` 文件：

```yaml
title: "您的网站标题"
description: "网站描述" 
url: "https://zknb-666.github.io/Butterfly_jekyll"
baseurl: "/Butterfly_jekyll"
```

#### 添加新文章
在 `_posts/` 目录下创建新的Markdown文件：

```markdown
---
layout: post
title: "文章标题"
date: 2025-07-16 12:00:00 +0800
categories: [分类]
tags: [标签1, 标签2]
---

文章内容...
```

### 🎨 主题自定义

#### 修改主题色彩
编辑 `_sass/_variables.scss`：

```scss
$primary-color: #49b1f5;
$secondary-color: #ff7242;
```

#### 添加自定义样式
编辑 `assets/css/main.scss`：

```scss
// 自定义样式
.custom-class {
  // 您的样式
}
```

### 📊 网站功能

- ✅ 响应式设计
- ✅ 黑暗/明亮主题切换
- ✅ 搜索功能
- ✅ 代码高亮
- ✅ 目录生成
- ✅ 标签和分类
- ✅ 社交分享
- ✅ SEO优化
- ✅ RSS订阅

### 🔄 更新流程

1. **本地修改**
   ```bash
   # 编辑文件
   git add .
   git commit -m "更新说明"
   git push origin main
   ```

2. **自动部署**
   - GitHub Actions会自动构建和部署
   - 几分钟后网站更新生效

### 📞 技术支持

如果遇到问题，请检查：

1. **GitHub Actions**: 查看构建日志
2. **Jekyll日志**: 检查构建错误
3. **浏览器控制台**: 查看前端错误

---

**🎉 恭喜！您的Jekyll Butterfly主题网站已经成功部署！**

访问地址：**https://zknb-666.github.io/Butterfly_jekyll**
