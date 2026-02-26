---
title: BlinkBoard
full-title: 'BlinkBoard: Guiding and monitoring circuit assembly for synchronous and remote physical computing education'
featured_image: /images/projects/blinkboard.jpg # width must be 1600px

# Paper info
year: 2024
venue: HardwareX
authors: [Andrea Bianchi, Kongpyung Justin Moon, Artem Dementyev, Seungwoo Je]

# Paper links
pdf: Bianchi_BlinkBoard_HardwareX2024.pdf # put file in the directory FILES
doi: https://doi.org/10.1016/j.ohx.2024.e00511
# web: https://blinkboard.kaist.ac.kr
github: https://github.com/makinteractlab/BlinkBoard
video: IEO068N3r2c
---

<!-- Video -->
{% include youtube-video.html %}

<!-- {% include youtube-video.html id="IEO068N3r2c" %} -->


<!-- Abstract -->
_BlinkBoard_ is an augmented breadboard designed to help and monitor students assembling electronic circuits in both in-person and remote classes. It uses LEDs with four blinking patterns to guide component and wire placement and includes Input/Output pins for voltage sensing or generation. Controlled via an open JSON protocol through command line or graphical interface, it enables real-time communication between instructors and students. BlinkBoard is affordable, simple, and efficiently manages LED patterns with minimal microcontroller load. Its effectiveness was proven in workshops with high-school and undergraduate students.

<!-- Break -->
---

<!-- BibTex -->
{% capture paper_bibtex %}
@article{BIANCHI2024e00511,
  title = {BlinkBoard: Guiding and monitoring circuit assembly for synchronous and remote physical computing education},
  journal = {HardwareX},
  volume = {17},
  pages = {e00511},
  year = {2024},
  issn = {2468-0672},
  doi = {https://doi.org/10.1016/j.ohx.2024.e00511},
  url = {https://www.sciencedirect.com/science/article/pii/S2468067224000051},
  author = {Andrea Bianchi and Kongpyung (Justin) Moon and Artem Dementyev and Seungwoo Je},
  keywords = {Human–computer interaction, Embedded systems, Physical computing, Breadboard, Synchronous remote education},
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}