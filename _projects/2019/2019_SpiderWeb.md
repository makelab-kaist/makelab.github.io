---
title: Spider Web Fabrication
full-title: "Spider Web Fabrication: A Computational Approach for Spider Web Inspired Fabrication of String Art"
featured_image: /images/projects/spiderweb.jpg # width must be 1600px

# Paper info
year: 2019
venue: CAV
authors: [Seungwoo Je, Yekaterina Abileva, Andrea Bianchi, Jean-Charles Bazin]

# Paper links
pdf: Je_SpiderWeb_CAV19.pdf # put file in the directory FILES
doi: https://doi.org/10.1002/cav.1904
video: 9XmnfOtUVKw
github: https://github.com/makinteractlab/SpiderPrinter
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
Creating objects with threads is commonly referred to as string art. It is typically a manual, tedious work reserved for skilled artists. In this paper, we investigate how to automatically fabricate string art pieces from one single continuous thread in such a way that it looks like an input image. The proposed system consists of a thread connection optimization algorithm and a custom-made fabrication machine. It allows casual users to create their own personalized string art pieces in a fully automatic manner. Quantitative and qualitative evaluations demonstrated that our system can create visually appealing results.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@article{https://doi.org/10.1002/cav.1904,
  author = {Je, Seungwoo and Abileva, Yekaterina and Bianchi, Andrea and Bazin, Jean-Charles},
  title = {A computational approach for spider web-inspired fabrication of string art},
  journal = {Computer Animation and Virtual Worlds},
  volume = {30},
  number = {3-4},
  pages = {e1904},
  keywords = {fabrication, image halftoning, string art},
  doi = {https://doi.org/10.1002/cav.1904},
  url = {https://onlinelibrary.wiley.com/doi/abs/10.1002/cav.1904},
  eprint = {https://onlinelibrary.wiley.com/doi/pdf/10.1002/cav.1904},
  note = {e1904 cav.1904},
  year = {2019}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}