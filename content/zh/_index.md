---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: CSC-Lab
      image:
        filename: welcome.jpg
      text: |
        欢迎来到上海交大复杂系统智能控制实验室。我们拥有跨领域的学术与技术团队，致力于在突破自主机器人/先进控制领域边界，共创未来。

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
        folders:
          - post
        category: ''
      offset: 0
      order: desc
     
    design:
      view: card
      columns: '1'
---