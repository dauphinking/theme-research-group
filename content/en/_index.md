---
# Leave the homepage title empty to use the site title
title: ''
date: 2026-07-18
summary: SJTU CSC Lab researches model predictive control, robotics, and intelligent transportation, and works with Shanghai Bidi Data Technology and other industry partners on QD-APC and industrial control deployment.
type: landing

sections:
  - block: hero
    content:
      title: |
        <span style="font-size: 24px; font-weight: bold;">Complex System and Control</span>
      image:
        filename: welcome.jpg
      text: |
        Welcome to our research hub **CSC Laboratory**, where innovation meets excellence. Our interdisciplinary team is dedicated to pushing the boundaries of technological advancement across multiple domains. 

    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true

  - block: markdown
    id: technology-transfer
    content:
      title: From Predictive Control Research to Industrial Deployment
      subtitle: CSC Lab × Industry Partners
      text: |
        CSC Lab conducts research in model predictive control (MPC), data-driven control, and real-time optimization. Its engineers and industry partners translate these methods into deployable advanced process control (APC) systems.

        Lab director [Prof. Dewei Li](/en/author/dewei-li/) leads research in complex-system optimization and control. [Bihui Jin](/en/author/bihui-jin/) works on the engineering of control algorithms, edge controllers, and industrial software. The team collaborates with [Shanghai Bidi Data Technology](https://biditech.cn/) and other partners on **QD-APC**, water and pumping optimization, and energy-efficient process control.

        [Read the technology transfer and industry collaboration statement →](/en/industry/)
    design:
      columns: '1'
  
  - block: markdown
    content:
      title: ""
      text: |
        {{< quicknews lang="en" count="2" >}}
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
