---
title: 研究
type: landing
translationKey: research
sections:
  - block: markdown
    content:
      title: 研究领域
      subtitle: 机器人/模型预测控制/智能交通
      text: 欢迎来到创新与卓越交融的实验室。我们拥有一支跨学科的团队，致力于在机器人/预测控制/智慧交通领域的创新。请探索以下内容，了解我们的开创性研究计划与项目，共同见证技术革新的力量。实验室不定期提供研究实习课题，长期欢迎优秀的本科/研究生邮件联系。

  - block: markdown
    content:
      title: 研究伙伴
      text: |
       

        {{< sponsors >}}
  - id: robot
    block: markdown
    content:
      title: 自主机器人
      subtitle: 
      text: |
        [↓ 查看相关项目](#projects)

        我们的自主机器人研究专注于开发能够在复杂环境中独立操作的智能机器人。主要研究领域包括：
        - 具身机器人的MPC控制
        - 机器人感知与场景理解
        - 运动规划与控制
        - 多机器人协调
    design:
      columns: '2'
    filters:
      tags:
        - 'Robot'

  - id: predictive-control
    block: markdown
    content:
      title: 模型预测控制
      subtitle: 
      text: |
        [↓ 查看相关项目](#projects)

        模型预测控制（MPC）是一种先进的工业过程控制方法，广泛应用于各种工业领域。我们的研究特别关注将人工智能和数据驱动的方法与MPC相结合：
        
        - 增强型AI-MPC算法
          * 深度学习用于模型识别 & 策略优化
        
        - 数据驱动MPC
          * 数据高效模型学习
          * 在线适应和学习
        
        - 实时MPC研究
          * 嵌入式系统MPC优化和实现

    design:
      columns: '2'
    filters:
      tags: 
        - 'Predictive Control'  
    

  - id: traffic
    block: markdown
    content:
      title: 智能交通
      subtitle: 
      text: |
        [↓ 查看相关项目](#projects)

        我们的智能交通研究旨在开发先进的解决方案，以应对未来的交通系统挑战。主要研究方向包括：
        
        - 无人系统与立体交通
        - 交通流建模与预测
        - 交通能源协同优化
    design:
      columns: '2'
    filters:
      tags:
        - 'Traffic' 

  - block: portfolio
    id: projects
    content:
      title: 研究项目
      subtitle: 我们的主要研究项目
      text: ''
      filters:
        folders:
          - project
      buttons:
        - name: 自主机器人
          tag: 'Robot'
        - name: 模型预测控制
          tag: 'Predictive Control'
        - name: 智能交通
          tag: 'Traffic'
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false

---
