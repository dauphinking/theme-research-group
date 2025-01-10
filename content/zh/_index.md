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
        欢迎来到我们的研究中心——复杂系统控制实验室，这里是创新与卓越交汇的殿堂。我们拥有一支跨学科的卓越团队，致力于在多个领域不断突破技术边界，开创未来。

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