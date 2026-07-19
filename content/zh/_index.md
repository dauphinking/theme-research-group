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

        上海交通大学复杂系统智能控制实验室，围绕模型预测控制、自主机器人、复杂工业系统控制开展研究。

    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  
  - block: markdown
    content:
      title: ""
      text: |
        {{< quicknews lang="zh" count="3" >}}
    design:
      columns: '1'
   
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
