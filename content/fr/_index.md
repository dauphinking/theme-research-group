---
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: CSC Lab
      image:
        filename: welcome.jpg
      text: |
        **Laboratoire de commande des systèmes complexes**

        Dirigé par le professeur Dewei Li à l'Université Jiao Tong de Shanghai, le CSC Lab mène des recherches en commande prédictive, robotique autonome, transport intelligent et optimisation des procédés industriels.
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
