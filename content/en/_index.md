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
      title: ""
      text: |
        <div style="background-color: #e7f3ff; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #007bff; text-align: center;">
          <strong>📰 News:</strong> Prof. Yugeng Xi receives Outstanding Contribution Award <span style="color: #666; font-size: 0.9em;">(July 2025)</span>
        </div>
    design:
      columns: '1'

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