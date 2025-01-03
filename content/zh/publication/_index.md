---
title: 发表论文
date: 2022-10-24
type: landing
translationKey: publication
sections:
  - block: collection
    content:
      title: 发表论文
      filters:
        folders:
          - ../../en/publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    content:
      title: 近期论文
      text: |-
        {{% callout note %}}
        快速发现研究成果通过 [过滤](../../en/publication/).
        {{% /callout %}}
      filters:
        folders:
          - en/publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
--- 