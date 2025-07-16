---
layout: page
title: Archives
permalink: /archives/
---

<div class="archive-header">
  <h1 class="archive-title">Archives</h1>
  <p class="archive-count">{{ site.posts.size }} posts in total</p>
</div>

<div class="archive-list">
  {% for post in site.posts %}
    <div class="archive-item" data-aos="fade-up" data-aos-delay="{{ forloop.index0 | times: 100 }}">
      <div class="archive-date">
        {{ post.date | date: "%Y-%m-%d" }}
      </div>
      <div class="archive-content">
        <a href="{{ post.url | relative_url }}" class="archive-title-link">
          {{ post.title }}
        </a>
        {% if post.categories.size > 0 %}
          <div class="archive-categories">
            {% for category in post.categories %}
              <span class="category-tag">{{ category }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
