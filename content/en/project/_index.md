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
   
  
  - id: robot
    block: markdown
    content:
      title: Autonomous Robots
      subtitle: 
      text: |
        [↓ View Related Projects](/en/project/#projects)

        Our autonomous robotics research focuses on developing intelligent robots that can operate independently in complex environments. Our key research areas include:
        - MPC Control for Embodied Robots
        - Robot Perception and Scene Understanding
        - Motion Planning and Control
        - Multi-Robot Coordination

  - id: predictive-control
    block: markdown
    content:
      title: Model Predictive Control
      subtitle: 
      text: |
        [↓ View Related Projects](/en/project/#projects)

        Model Predictive Control (MPC) is an advanced process control method widely used in various industrial fields. Our research focuses on integrating AI and data-driven approaches with MPC:
        
        - Enhanced AI-MPC Algorithms
          * Deep Learning for Model Identification
          * Reinforcement Learning for Control Policy Optimization
        
        - Data-Driven MPC
          * Data-Efficient Model Learning
          * Online Adaptation and Learning
        
        - Real-time MPC Research
          * Embedded System MPC Optimization and Implementation
          * Distributed Robotic MPC

  - id: traffic
    block: markdown
    content:
      title: Intelligent Transportation
      subtitle: 
      text: |
        [↓ View Related Projects](/en/project/#projects)

        Our intelligent transportation research aims to develop advanced solutions for future transportation systems. Key research directions include:
        
        - Traffic Flow Modeling and Prediction
        - Intelligent Traffic Signal Control
        - Smart Infrastructure Systems
        - Unmanned Systems and 3D Transportation

  - block: portfolio
    id: projects
    content:
      title: Research Projects
      subtitle: Our main research projects
      text: ''
      filters:
        folders:
          - project
        exclude_folders:
          - publication
      buttons:
        - name: Autonomous Robot
          tag: 'Robot'
          url: '#projects'
        - name: Predictive Control
          tag: 'Predictive Control'
          url: '#projects'
        - name: Intelligent Transport
          tag: 'Traffic'
          url: '#projects'
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false
---