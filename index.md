---
layout: default
title: Home
---

<div class="hero">
  <div class="hero-text">
    <h1 class="page-heading">Hi, I'm {{ site.data.site.author.name }}.</h1>
    <p class="subtitle">{{ site.data.site.author.title }}</p>
    <div class="cta-buttons" style="margin-top: 20px;">
      <a href="{{ '/about/' | relative_url }}" class="button primary">More about me</a>
      <a href="{{ '/publications/' | relative_url }}" class="button secondary">View Publications</a>
    </div>
  </div>
  <div class="hero-image" style="position: relative;">
    <!-- Image is dynamically set via _data/site.yml -->
    <img src="{{ '/assets/images/' | append: site.data.site.author.photo | relative_url }}" alt="{{ site.data.site.author.name }}" 
         onerror="this.src='https://ui-avatars.com/api/?name={{ site.data.site.author.name | cgi_escape }}&size=300&background=0D8ABC&color=fff';"
         style="z-index: 1; position: relative;">
    <div class="aura-strip" style="position: absolute; bottom: -70px; right: -60px; z-index: 2; width: 200px; pointer-events: none; background: transparent !important; transform: rotate(0deg);">
      <img src="{{ '/assets/images/aura-strips.png' | relative_url }}?v={{ site.time | date: '%s' }}" alt="Decorative Aura" style="border-radius: 0; box-shadow: none; border: none; width: 100%; background: transparent !important;">
    </div>
  </div>
</div>

<section class="research-interests">
  <h2>Research Interests</h2>
  <div class="grid-cards">
    {% for interest in site.data.interests %}
    <div class="card">
      <h3>{{ interest.title }}</h3>
      <p>{{ interest.description }}</p>
    </div>
    {% else %}
    <!-- Fallback if interests.yml is missing or empty -->
    <p>Add your research interests to _data/interests.yml to populate this section.</p>
    {% endfor %}
  </div>
</section>

<section class="latest-news">
  <h2>Latest News</h2>
  <ul class="post-list">
    {% for post in site.posts limit:3 %}
      <li>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
          <span class="post-meta" style="font-size: 0.8em; color: var(--secondary-text); margin-left: 10px; font-weight: normal; display: inline !important;">{{ post.date | date: "%b %-d, %Y" }}</span>
        </h3>
        {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
        {% endif %}
      </li>
    {% else %}
       <p>No news yet. Check back soon!</p>
    {% endfor %}
  </ul>
  <div style="margin-top: 20px;">
      <a href="{{ '/blog/' | relative_url }}" class="button secondary">View All News</a>
  </div>
</section>
