---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: Complex System and Control
      image:
        filename: welcome.jpg
      text: |
        Welcome to our research hub **CSC Laboratory**, where innovation meets excellence. Our interdisciplinary team is dedicated to pushing the boundaries of technological advancement across multiple domains. 

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
          - en
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
    design:
      view: card
      columns: '1'
--- 