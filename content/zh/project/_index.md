---
title: 研究项目
type: landing
translationKey: project
sections:
  - block: markdown
    content:
      title: 研究领域
      subtitle: 引领控制与机器人领域的未来
      text: 欢迎来到我们的研究中心，这里是创新与卓越交融的殿堂。我们拥有一支跨学科的顶尖团队，致力于在多个领域不断突破技术的边界。请探索以下内容，了解我们的开创性研究计划与变革性项目，共同见证技术革新的力量。
   
  - block: markdown
    content:
      title: 模型预测控制
      subtitle: 
      text: |
        模型预测控制（MPC）是一种先进的工业过程控制方法，广泛应用于各种工业领域。我们的研究特别关注将人工智能和数据驱动的方法与MPC相结合：
        
        - 增强型AI-MPC算法
          * 深度学习用于模型识别
          * 强化学习用于控制策略优化
        
        - 数据驱动MPC
          * 数据高效模型学习
          * 在线适应和学习
        
        - 实时MPC研究
          * 实时优化和实现
          * 分布式和分层MPC
        
        - 应用

    design:
      columns: '2'
    filters:
      tags: 
        - 'Predictive Control'  
    
  
  - block: markdown
    content:
      title: 自主机器人
      subtitle: 
      text: |
        我们的自主机器人研究专注于开发能够在复杂环境中独立操作的智能机器人。主要研究领域包括：
        
        - 机器人感知与场景理解
        - 运动规划与控制
        - 多机器人协调
            design:
      columns: '2'
    filters:
      tags:
        - 'Robot'

  - block: markdown
    content:
      title: 智能交通
      subtitle: 
      text: |
        我们的智能交通研究旨在开发先进的解决方案，以应对未来的交通系统挑战。主要研究方向包括：
        
        - 交通流建模与预测
        - 智能交通信号控制
        - 连接与自主车辆
        - 智能基础设施系统
        - 可持续的城市交通
    design:
      columns: '2'
    filters:
      tags:
        - 'Traffic' 

  - block: portfolio
    content:
      title: 研究项目
      subtitle: 我们的主要研究项目
      text: ''
      filters:
        exclude_folders:
          - publication
        tag:
          - 'Predictive Control'
          - 'Robot' 
          - 'Traffic'
    #   filters:
    #     folders:
    #       - en/project    # 指定正确的项目路径
    #   default_button_index: 0
      buttons:
        - name: 模型预测控制
          tag: 'Predictive Control'
        - name: 自主机器人
          tag: 'Robot'
        - name: 智能交通
          tag: 'Traffic'
      
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
 
---
