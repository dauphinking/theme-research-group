---
title: Research Projects
type: landing
translationKey: project
sections:
  - block: markdown
    content:
      title: Research Domains
      subtitle: Pioneering the Future of Control and Robotics
      text: 'Welcome to our research hub, where innovation meets excellence. Our interdisciplinary team is dedicated to pushing the boundaries of technological advancement across multiple domains. Discover our groundbreaking research initiatives and transformative projects in the sections below.'
   
  - block: markdown
    content:
      title: Model Predictive Control 
      subtitle: 
      text: |
        Model Predictive Control (MPC) is an advanced method of process control that has been widely used in industrial applications. Our research particularly focuses on integrating artificial intelligence and data-driven approaches with MPC:
        
        - AI-enhanced MPC algorithms
          * Deep learning for model identification
          * Reinforcement learning for control policy optimization
        
        - Data-driven MPC
          * Data-efficient model learning
          * Online adaptation and learning
        
        - Real-time MPC research
          * Real-time optimization and implementation
          * Distributed and hierarchical MPC
        
        - Applications

    design:
      columns: '2'
    filters:
      tags: 
        - 'Predictive Control'  
    
  
  - block: markdown
    content:
      title: Autonomous Robot 
      subtitle: 
      text: |
        Our autonomous robotics research focuses on developing intelligent robots that can operate independently in complex environments. Key research areas include:
        
        - Robot perception and scene understanding
        - Motion planning and control
        - Human-robot interaction
        - Multi-robot coordination
        - Learning-based robotics
    design:
      columns: '2'
    filters:
      tags:
        - 'Robot'

  - block: markdown
    content:
      title: Intelligent Transportation 
      subtitle: 
      text: |
        Our intelligent transportation research aims to develop advanced solutions for future mobility systems. Key research directions include:
        
        - Traffic flow modeling and prediction
        - Intelligent traffic signal control
        - Connected and autonomous vehicles
        - Smart infrastructure systems
        - Sustainable urban mobility
    design:
      columns: '2'
    filters:
      tags:
        - 'Traffic' 

  - block: portfolio
    content:
      title: Research Projects
      subtitle: Our main research projects
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
        - name: Predictive Control
          tag: 'Predictive Control'
        - name: Autonomous Robot
          tag: 'Robot'
        - name: Intelligent Transport
          tag: 'Traffic'
      
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
 
---