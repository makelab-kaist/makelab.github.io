---
title: BodyPrinter
full-title: 'BodyPrinter: Fabricating Circuits Directly on the Skin at Arbitrary Locations Using a Wearable Compact Plotter'
featured_image: /images/projects/bodyPrinter.jpg # width must be 1600px

# Paper info
year: 2020
venue: UIST
authors: [Youngkyung Choi, Neung Ryu, Myung Jin Kim, Artem Dementyev, Andrea Bianchi]

# Paper links
pdf: Choi_BodyPrinter_UIST20.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3379337.3415840
video: XA9z8xhkhsQ
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
On-body electronics and sensors offer the opportunity to seamlessly augment the human with computing power. Accordingly, numerous previous work investigated methods that exploit conductive materials and flexible substrates to fabricate circuits in the form of wearable devices, stretchable patches, and stickers that can be attached to the skin. For all these methods, the fabrication process involves several manual steps, such as designing the circuit in software, constructing conductive patches, and manually placing these physical patches on the body. In contrast, in this work, we propose to fabricate electronics directly on the skin. We present _BodyPrinter_, a wearable conductive-ink deposition machine, that prints flexible electronics directly on the body using skin-safe conductive ink. The paper describes our system in detail and, through a series of examples and a technical evaluation, we show how direct on-body fabrication of electronic circuits and sensors can further enhance the human body.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3379337.3415840,
  author = {Choi, Youngkyung and Ryu, Neung and Kim, Myung Jin and Dementyev, Artem and Bianchi, Andrea},
  title = {BodyPrinter: Fabricating Circuits Directly on the Skin at Arbitrary Locations Using a Wearable Compact Plotter},
  year = {2020},
  isbn = {9781450375146},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3379337.3415840},
  doi = {10.1145/3379337.3415840},
  booktitle = {Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology},
  pages = {554–564},
  numpages = {11},
  keywords = {on-body fabrication, skin electronics, wearable},
  location = {Virtual Event, USA},
  series = {UIST '20}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}