---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: SJTU CSC Lab
      image:
        filename: welcome.jpg
      text: |
        **Complex Systems & Control Laboratory**

        Shanghai Jiao Tong University's research laboratory focusing on model predictive control, autonomous robotics, and complex industrial systems control.

    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  
  - block: markdown
    content:
      title: ""
      text: |
        {{< quicknews lang="en" count="3" >}}
    design:
      columns: '1'

  - block: collection
    id: posts
    content:
      title: Latest News
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - post
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      columns: '1'
---
