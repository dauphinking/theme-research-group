---
title: Projets de recherche
type: landing
translationKey: project

sections:
  - block: markdown
    content:
      title: Domaines de recherche
      subtitle: Robotique / Commande prédictive (MPC) / Transport intelligent
      text: |
        Bienvenue dans notre laboratoire où l'innovation rencontre l'excellence. Notre équipe interdisciplinaire repousse les frontières technologiques dans plusieurs domaines clés. Découvrez ci-dessous nos travaux et projets de recherche.

  - id: robot
    block: markdown
    content:
      title: Robotique autonome
      subtitle: 
      text: |
        [↓ Voir les projets associés](/fr/project/#projects)

        Nos recherches en robotique autonome visent à développer des robots intelligents capables d'opérer de manière indépendante dans des environnements complexes. Axes principaux :
        - MPC pour robots incarnés
        - Perception robotique et compréhension de scène
        - Planification du mouvement et contrôle
        - Coordination multi-robots

  - id: predictive-control
    block: markdown
    content:
      title: Commande prédictive (MPC)
      subtitle: 
      text: |
        [↓ Voir les projets associés](/fr/project/#projects)

        La commande prédictive (MPC) est une méthode avancée de contrôle de procédé, largement utilisée dans l'industrie. Nous intégrons l'IA et les approches data-driven à la MPC :
        
        - Algorithmes AI-MPC améliorés
          * Apprentissage profond pour l'identification de modèle & l'optimisation de politique
        
        - MPC pilotée par les données
          * Apprentissage de modèle économe en données
          * Adaptation et apprentissage en ligne
        
        - Recherche MPC temps réel
          * Optimisation et implémentation MPC embarquée

  - id: traffic
    block: markdown
    content:
      title: Transport intelligent
      subtitle: 
      text: |
        [↓ Voir les projets associés](/fr/project/#projects)

        Nos recherches visent des solutions avancées pour les systèmes de transport du futur. Axes principaux :
        
        - Systèmes sans pilote et transport 3D
        - Modélisation et prévision des flux
        - Co-optimisation énergie-transport

  - block: portfolio
    id: projects
    content:
      title: Projets de recherche
      subtitle: Nos principaux projets
      text: ''
      filters:
        folders:
          - project
      buttons:
        - name: Robotique autonome
          tag: 'Robot'
        - name: Commande prédictive (MPC)
          tag: 'Predictive Control'
        - name: Transport intelligent
          tag: 'Traffic'
    design:
      columns: '1'
      view: showcase
      flip_alt_rows: false

---


