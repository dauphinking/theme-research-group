---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        SJTU CSC Lab
      image:
        filename: welcome.jpg
      text: |
        <br>
        
        上海交通大学复杂系统智能控制实验室由李德伟教授领导，致力于机器人和模型预测控制(MPC)等前沿研究。
        
        Complex Systems Control Laboratory at Shanghai Jiao Tong University, led by Prof. Dewei LI, focuses on Robots and Model Predictive Control (MPC) research.

  - block: markdown
    content:
      title: 关注我们
      text: |
        <div class="wechat-widget">
          <img src="/media/qrcode.jpg" alt="WeChat QR Code" style="width: 200px; height: 200px; display: block; margin: 0 auto;">
          <p style="text-align: center; margin-top: 1rem; color: #444;">扫描二维码，关注SJTU CSC Lab公众号</p>
          <p style="text-align: center; color: #666; font-size: 0.9rem;">获取最新实验室动态</p>
        </div>
    design:
      columns: '1'
      css_class: 'text-center'

  - block: markdown
    content:
      text: |
        <div style="background-color: #f8f9fa; padding: 10px; border-left: 4px solid #007bff; margin-bottom: 20px;">
          <small>📰 <strong>快讯：</strong>实验室关于柔性机器人的论文被 TASE 期刊接收</small>
        </div>
    design:
      columns: '1'
      background:
        color: 'white'
        text_color_light: false

  - block: collection
    content:
      title: 最新动态
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'

  # ... 其他现有的 sections ... 