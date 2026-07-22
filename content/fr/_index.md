---
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
        **Laboratoire de commande des systèmes complexes**

        Fort de plus de quarante ans de recherche, le Laboratoire de commande des systèmes complexes de l'Université Jiao Tong de Shanghai se consacre à la commande prédictive, à la robotique autonome ainsi qu'à l'optimisation et à la commande des systèmes complexes.
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
