---
title: Inline
full-title: 'Inline Visualization and Manipulation of Real-Time Hardware Log for Supporting Debugging of Embedded Programs'
featured_image: /images/projects/inline.png # width must be 1600px

# Paper info
year: 2024
venue: EICS
award: Honorable Mention # Best Paper
authors: [Andrea Bianchi, Zhi Lin Yap, Punn Lertjaturaphat, Austin Z. Henley, Kongpyung Justin Moon, Yoonji Kim]

# Paper links
pdf: Bianchi_Inline_PACM2024.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3660250
github: https://github.com/makelab-kaist/inline-extension
slides: Inline_slides.pdf
# web: https://google.com
video: gAf5mNowg7A
---

<!-- Video -->
{% include youtube-video.html %}
<!-- {% include youtube-video.html id="gAf5mNowg7A" %} -->


<!-- Abstract -->
The development of user-friendly embedded prototyping systems like Arduino has made creating interactive devices more accessible. However, debugging these systems is challenging due to the intertwined nature of software and hardware issues. Existing tools often require hardware instrumentation or log visualization through serial monitors. To address this, the authors designed Inline, a programming tool that simplifies debugging by displaying hardware logs directly within the code, providing real-time execution flow tracking and an expression language for log manipulation. A study with twelve users demonstrated the tool's effectiveness in aiding debugging tasks.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@article{10.1145/3660250,
  author = {Bianchi, Andrea and Yap, Zhi Lin and Lertjaturaphat, Punn and Henley, Austin Z. and Moon, Kongpyung Justin and Kim, Yoonji},
  title = {Inline Visualization and Manipulation of Real-Time Hardware Log for Supporting Debugging of Embedded Programs},
  year = {2024},
  issue_date = {June 2024},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {8},
  number = {EICS},
  url = {https://doi.org/10.1145/3660250},
  doi = {10.1145/3660250},
  journal = {Proc. ACM Hum.-Comput. Interact.},
  month = jun,
  articleno = {248},
  numpages = {26},
  keywords = {Debugging, Embedded Systems, Expression Language, Hardware logs, Live programming, Physical computing, Visualization}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}


