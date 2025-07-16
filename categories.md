---
layout: page
title: Categories
permalink: /categories/
---

<div class="archive-header">
  <h1 class="archive-title">Categories</h1>
  <p class="archive-count">{{ site.categories.size }} categories in total</p>
</div>

<!-- Category Cloud -->
<div class="tag-cloud">
  {% assign sorted_categories = site.categories | sort %}
  {% for category in sorted_categories %}
    <a href="#{{ category[0] | slugify }}" class="tag-cloud-item">
      {{ category[0] }} ({{ category[1].size }})
    </a>
  {% endfor %}
</div>

<!-- Posts by Category -->
<div class="archive-list">
  {% for category in sorted_categories %}
    <div class="category-section" id="{{ category[0] | slugify }}">
      <h2 class="category-title">{{ category[0] }}</h2>
      {% for post in category[1] %}
        <div class="archive-item" data-aos="fade-up">
          <div class="archive-date">
            {{ post.date | date: "%Y-%m-%d" }}
          </div>
          <div class="archive-content">
            <a href="{{ post.url | relative_url }}" class="archive-title-link">
              {{ post.title }}
            </a>
            {% if post.tags.size > 0 %}
              <div class="archive-tags">
                {% for tag in post.tags limit: 3 %}
                  <span class="tag">#{{ tag }}</span>
                {% endfor %}
              </div>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div>
