---
layout: page
title: Tags
permalink: /tags/
---

<div class="archive-header">
  <h1 class="archive-title">Tags</h1>
  <p class="archive-count">{{ site.tags.size }} tags in total</p>
</div>

<!-- Tag Cloud -->
<div class="tag-cloud">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    <a href="#{{ tag[0] | slugify }}" class="tag-cloud-item">
      {{ tag[0] }} ({{ tag[1].size }})
    </a>
  {% endfor %}
</div>

<!-- Posts by Tag -->
<div class="archive-list">
  {% for tag in sorted_tags %}
    <div class="tag-section" id="{{ tag[0] | slugify }}">
      <h2 class="tag-title">{{ tag[0] }}</h2>
      {% for post in tag[1] %}
        <div class="archive-item" data-aos="fade-up">
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
  {% endfor %}
</div>
