---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        Supervisor Name: Professor Dewei Li Email: dwli@sjtu.edu.cn 

        Contact Person Name: Mme. Yujun Wu Email: wyjzhang@sjtu.edu.cn 
        Phone (also WeChat): 13918876465
      email: dwli@sjtu.edu.cn 
      phone: 0086-21-34204550
      address:
        street: 800, Dongchuan Rd
        city: Minhang
        region: Shanghai
        postcode: '200000'
        country: China
        country_code: CN
      coordinates:
        latitude: '121.447612'
        longitude: '31.031875'
      directions: Room 305, Building 2, School of EE Building,
      office_hours:
        - '8:30 to 18:00'
      #appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
    
      # Automatically link email and phone or display as text?
      autolink: true
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---
