---
title: Bimanual Vibrotactile Crosstalk
full-title: 'Connected Material Experiences using Bimanual Vibrotactile Crosstalk in Virtual Reality'
featured_image: /images/projects/biHaptics.png # width must be 1600px

# Paper info
year: 2026
venue: CHI
authors:
  [
    Nihar Sabnis,
    André Zenner,
    Erik Peralta,
    Marco Weiss,
    Andrea Bianchi,
    Paul Strohmeier,
  ]

# Paper links
pdf: SabnisN_Bimanual_CHI26.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3772318.3790767
github: https://github.com/sensint/biHaptics
video: hdSUGFasvtA?si=m7njciuaBISt2gj3
---

<!-- Video -->

{% include youtube-video.html %}

<!-- Abstract -->

Perceiving material properties such as elasticity, flexibility, and torsion is inherently bimanual, as we rely on the relative motion of our hands to form a unified sense of materiality. Yet, most vibrotactile material rendering approaches are limited to a single-hand or finger. While prior work has explored bimanual haptic interfaces, most depend on specialized hardware for specific interactions. In this paper, we demonstrate design strategies to support _bimanual material exploration_ through motion-coupled vibrotactile feedback. Our technique introduces variable crosstalk between the controllers' vibration to evoke connectedness, making two unconnected devices feel as though they manipulate a single object. The technique generalizes motion-coupled feedback approaches beyond previous single-point explorations. Through two user studies, we show that this approach (1) significantly enhances perceived connectedness and (2) conveys distinct material qualities such as elasticity and compliance. Finally, we present _Dvihastīya_, an authoring-tool for designing connected bimanual experiences in VR.

---

<!-- BibTex -->

{% capture paper_bibtex %}
@inproceedings{10.1145/3772318.3790767,
  author = {Sabnis, Nihar and Zenner, Andr\'{e} and L\o{}vaas, Erik Peralta and Weiss, Marco and Bianchi, Andrea and Strohmeier, Paul},
  title = {Connected Material Experiences using Bimanual Vibrotactile Crosstalk in Virtual Reality},
  year = {2026},
  isbn = {9798400722783},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3772318.3790767},
  doi = {10.1145/3772318.3790767},
  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  articleno = {756},
  numpages = {20},
  keywords = {bimanual vibrotactile feedback, virtual reality, material perception, motion-coupled vibrations, Consumer VR},
  series = {CHI '26}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}
