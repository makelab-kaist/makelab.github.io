---
title: VirtualWire
full-title: 'VirtualWire: Supporting Rapid Prototyping with Instant Reconfigurations of Wires in Breadboarded Circuits'
featured_image: /images/projects/virtualwire.jpg # width must be 1600px

# Paper info
year: 2021
venue: TEI
award: Best Paper
authors: [Woojin Lee, Ramkrishna Prasad, Seungwoo Je, Yoonji Kim, Ian Oakley, Daniel Ashbrook, Andrea Bianchi]

# Paper links
pdf: Lee_VirtualWire_TEI21.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3430524.3440623
github: https://github.com/makinteractlab/VirtualWire
video: vWRRjfUocuw
---

<!-- Video -->
{% include youtube-video.html %}

<!-- Abstract -->
Assembling circuits is a challenging and time-consuming activity for novice makers, frequently resulting in incorrect placements of wires and components into breadboards. This results in errors that are difficult to identify and debug, and delays that hinder creating, exploring, or reconfiguring circuit layouts.

_VirtualWire_ allows users to rapidly design and modify circuits in software and have these changes instantiated in real-time as electrical connections on a physical breadboard. The system dynamically translates circuit design files into physical connections inside a hardware switching matrix, which handles wiring across breadboard rows and to/from an embedded Arduino. Users can interactively test, tune, and share different circuit layouts for an Arduino shield and, once satisfied, fabricate the circuit on a permanent substrate.

Quantitative and qualitative user studies demonstrate that VirtualWire significantly reduces the time taken for circuit assembly (by 37%) and the number of errors made during assembly (by 53%), while also supporting users in creating readable, space-efficient, and flexible layouts.

---

### Video Presentation

<iframe width="560" height="315" src="https://www.youtube.com/embed/y9QzhTt-I_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3430524.3440623,
  author = {Lee, Woojin and Prasad, Ramkrishna and Je, Seungwoo and Kim, Yoonji and Oakley, Ian and Ashbrook, Daniel and Bianchi, Andrea},
  title = {VirtualWire: Supporting Rapid Prototyping with Instant Reconfigurations of Wires in Breadboarded Circuits},
  year = {2021},
  isbn = {9781450382137},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3430524.3440623},
  doi = {10.1145/3430524.3440623},
  booktitle = {Proceedings of the Fifteenth International Conference on Tangible, Embedded, and Embodied Interaction},
  articleno = {4},
  numpages = {12},
  keywords = {Physical computing, circuits, system., virtual wires},
  location = {Salzburg, Austria},
  series = {TEI '21}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}