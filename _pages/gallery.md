---
layout: default
title: Gallery
permalink: /gallery/
---

# 🎨 Sketches & Visual Notes

A visual diary of ideas, mechanical sketches, and conceptual art behind my robotics research.

{% for image in site.static_files %}
  {% if image.path contains '/images/' %}
  <div style="margin-bottom:1em;">
    <img src="{{ site.baseurl }}{{ image.path }}" alt="{{ image.name }}" style="max-width:100%; border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </div>
  {% endif %}
{% endfor %}
