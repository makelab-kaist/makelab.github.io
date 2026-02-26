---
title: ToonNote
full-title: 'ToonNote: Improving Communication in Computational Notebooks Using Interactive Data Comics'
featured_image: /images/projects/toonnote.jpg # width must be 1600px

# Paper info
year: 2021
venue: CHI
authors: [DaYe Kang, Tony Ho, Nicolai Marquardt, Bilge Mutlu, Andrea Bianchi]

# Paper links
pdf: Kang_ToonNote_CHI21.pdf # put file in the directory FILESii
doi: https://doi.org/10.1145/3411764.3445434
video: OKgT3HrORho
---

<!-- Video -->
{% include youtube-video.html %}

<!-- Abstract -->
Computational notebooks help data analysts analyze and visualize datasets, and share analysis procedures and outputs. However, notebooks typically combine code (e.g., Python scripts), notes, and outputs (e.g., tables, graphs). The combination of disparate materials is known to hinder the comprehension of notebooks, making it difficult for analysts to collaborate with other analysts unfamiliar with the dataset. To mitigate this problem, we introduce _ToonNote_, a JupyterLab extension that enables the conversion of notebooks into "data comics." ToonNote provides a simplified view of a Jupyter notebook, highlighting the most important results while supporting interactive and free exploration of the dataset. This paper presents the results of a formative study that motivated the system, its implementation, and an evaluation with 12 users, demonstrating the effectiveness of the produced comics. We discuss how our findings inform the future design of interfaces for computational notebooks and features to support diverse collaborators.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3411764.3445434,
  author = {Kang, DaYe and Ho, Tony and Marquardt, Nicolai and Mutlu, Bilge and Bianchi, Andrea},
  title = {ToonNote: Improving Communication in Computational Notebooks Using Interactive Data Comics},
  year = {2021},
  isbn = {9781450380966},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3411764.3445434},
  doi = {10.1145/3411764.3445434},
  booktitle = {Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems},
  articleno = {727},
  numpages = {14},
  keywords = {computational notebooks, data comics, data summarization, multi-level interface},
  location = {Yokohama, Japan},
  series = {CHI '21}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}