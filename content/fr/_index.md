---
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        <span style="font-size: 24px; font-weight: bold;">Complex System and Control</span>
      image:
        filename: welcome.jpg
      text: |
        Bienvenue au **CSC Laboratory** de l'Université Jiao Tong de Shanghai. Notre équipe interdisciplinaire mène des recherches en robotique, commande prédictive et intelligence artificielle.
    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true

  - block: markdown
    content:
      title: ""
      text: |
        {{< quicknews lang="fr" count="3" >}}
    design:
      columns: '1'

  - block: collection
    id: posts
    content:
      title: Dernières actualités
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - post
      offset: 0
      order: desc
    design:
      view: card
      columns: '1'
---
