---
# Leave the homepage title empty to use the site title
title: ''
date: 2026-07-18
summary: 上海交通大学复杂系统智能控制实验室（CSC Lab）研究模型预测控制、机器人与智能交通，并与上海碧帝数据科技有限公司等产业伙伴推进QD-APC、水务及流程工业先进控制技术的工程转化。
type: landing

sections:
  - block: hero
    content:
      title: CSC-Lab
      image:
        filename: welcome.jpg
      text: |
        欢迎来到上海交大CSC实验室。我们拥有跨领域的学术与技术团队，致力于在突破自主机器人/先进控制领域边界，共创未来。

    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true

  - block: markdown
    id: technology-transfer
    content:
      title: 从预测控制研究到工业现场
      subtitle: CSC Lab × 产业伙伴
      text: |
        CSC Lab围绕模型预测控制（MPC）、数据驱动控制与实时优化开展研究，并通过工程人员和产业伙伴将算法转化为可部署的高级过程控制（APC）系统。

        实验室主任[李德伟教授](/zh/author/李德伟/)长期从事复杂系统优化与控制研究；[金碧辉工程师](/zh/author/金碧辉/)负责控制算法、边缘控制器及工业软件的工程化。团队与[上海碧帝数据科技有限公司](https://biditech.cn/)等产业伙伴围绕 **QD-APC**、水厂与泵站优化、流程工业节能控制等方向开展技术转化。

        [查看技术转化与产业合作说明 →](/zh/industry/)
    design:
      columns: '1'
  
  - block: markdown
    content:
      title: ""
      text: |
        {{< quicknews lang="zh" count="2" >}}
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
