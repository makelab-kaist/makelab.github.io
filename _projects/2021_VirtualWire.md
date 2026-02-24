---
title: VirtualWire
full-title: 'VirtualWire: Supporting Rapid Prototyping with Instant Reconfigurations of Wires in Breadboarded Circuits'
year: 2021
venue: TEI
featured_image: /images/projects/virtualwire.jpg # width must be 1600px
pdf_file: Lee_VirtualWire_TEI21.pdf # put file in the directory FILES
doi_link: https://doi.org/10.1145/3430524.3440623
---

<span class="badge">{{page.venue}} {{page.year}}</span>
<span class="award-badge">🏆 Best Paper Award</span>

# {{page.full-title}}

<!-- Video -->
<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vWRRjfUocuw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- Paper reference -->
<blockquote class="pretty-blockquote">
Woojin Lee, Ramkrishna Prasad, Seungwoo Je, Yoonji Kim, Ian Oakley, Daniel Ashbrook, and Andrea Bianchi. 2021. <strong>VirtualWire: Supporting Rapid Prototyping with Instant Reconfigurations of Wires in Breadboarded Circuits</strong>. In <em>Proceedings of the Fifteenth International Conference on Tangible, Embedded, and Embodied Interaction (TEI '21)</em>. Association for Computing Machinery, New York, NY, USA, Article 4, 1–12. <a href="https://doi.org/10.1145/3430524.3440623">https://doi.org/10.1145/3430524.3440623</a>
</blockquote>

<!-- Links -->
<div class="link-box">
  <a href="{{ site.url }}/files/{{ page.year }}/{{ page.pdf_file }}" target="_blank" class="link-btn">Paper PDF</a>
  <a href="{{ page.doi_link }}" target="_blank" class="link-btn">DOI Link</a>
  <a href="https://github.com/makinteractlab/VirtualWire" target="_blank" class="link-btn">
    <i class="fab fa-github"></i> GitHub
  </a>
</div>

<!-- Abstract -->
Assembling circuits is a challenging and time-consuming activity for novice makers, frequently resulting in incorrect placements of wires and components into breadboards. This results in errors that are difficult to identify and debug, and delays that hinder creating, exploring, or reconfiguring circuit layouts.

VirtualWire allows users to rapidly design and modify circuits in software and have these changes instantiated in real-time as electrical connections on a physical breadboard. The system dynamically translates circuit design files into physical connections inside a hardware switching matrix, which handles wiring across breadboard rows and to/from an embedded Arduino. Users can interactively test, tune, and share different circuit layouts for an Arduino shield and, once satisfied, fabricate the circuit on a permanent substrate.

Quantitative and qualitative user studies demonstrate that VirtualWire significantly reduces the time taken for circuit assembly (by 37%) and the number of errors made during assembly (by 53%), while also supporting users in creating readable, space-efficient, and flexible layouts.

---

## Video Presentation

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/y9QzhTt-I_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

<a href="/index.html" class="button button--large">Back to projects</a>