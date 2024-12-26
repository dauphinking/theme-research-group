---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing


sections:
  - block: hero
    content:
      title: 复杂系统控制实验室
      image:
        filename: welcome.jpg
      text: |
        **复杂系统控制实验室** 致力于复杂系统的建模、分析与控制研究。
    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  
  - block: collection
    id: posts
    content:
      title: 最新动态
      subtitle: ''
      text: ''
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      folders:
        - zh/post    # 明确指定语言路径
      offset: 0
      order: desc
     
    design:
      view: card
      columns: '1'
---