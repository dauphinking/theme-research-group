---
# Leave the homepage title empty to use the site title
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
        Welcome to our research hub **CSC Laboratory**, where innovation meets excellence. Our interdisciplinary team is dedicated to pushing the boundaries of technological advancement across multiple domains. 

    design:
      background:
        gradient_end: '#1976d2'
        gradient_start: '#004ba0'
        text_color_light: true
  
  - block: markdown
    content:
      title: Good News
      text: |
        Congratulations to the lab! One of our papers on flexible robots has been accepted by *IEEE Transactions on Automation Science and Engineering* (TASE).
    design:
      columns: '1'
      css_class: 'text-center'

  - block: collection
    id: posts
    content:
      title: Latest News
      subtitle: ''
      text: ''
      count: 5
      filters:
        folders:
          - post
        publication_type: ''
      offset: 0
      order: desc
    design:
      view: card
      columns: '1'
--- 