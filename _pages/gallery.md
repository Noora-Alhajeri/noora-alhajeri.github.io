---
layout: default
title: Gallery
permalink: /gallery/
---

# Visual Diary

### Photography
{% for image in site.static_files %}
  {% if image.path contains '/assets/photos/' %}
  <img src="{{ image.path }}" style="width:100%;border-radius:12px;margin-bottom:1rem;">
  {% endif %}
{% endfor %}

### Sketches
{% for art in site.static_files %}
  {% if art.path contains '/assets/sketches/' %}
  <img src="{{ art.path }}" style="width:100%;border-radius:12px;margin-bottom:1rem;">
  {% endif %}
{% endfor %}
