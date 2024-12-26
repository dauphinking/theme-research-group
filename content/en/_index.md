---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing
translationKey: en

sections:
  - block: hero
    content:
      title: Complex Systems and Control
      image:
        filename: welcome.jpg
      text: |
        **CSC Laboratory** is dedicated to the modeling, analysis and control of complex systems.
    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  
  - block: collection
    id: posts
    content:
      title: Latest News
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - en/post
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
    design:
      view: card
      columns: '1'
--- 