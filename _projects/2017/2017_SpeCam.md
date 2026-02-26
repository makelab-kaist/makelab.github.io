---
title: SpeCam
full-title: "SpeCam: Sensing Surface Color and Material with the Front-Facing Camera of a Mobile Device"
featured_image: /images/projects/specam.jpg # width must be 1600px

# Paper info
year: 2017
venue: MobileHCI
award: Honorable Mention
authors: [Hui-Shyong Yeo, Juyoung Lee, Andrea Bianchi, David Harris-Birtill, Aaron Quigley]

# Paper links
pdf: Yeo_SpeCam_MHCI17.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3098279.3098541
video: NxjbOVxcNuM
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
_SpeCam_ is a lightweight surface color and material sensing approach for mobile devices that uses only the front-facing camera and the display as a multi-spectral light source. By leveraging the natural behavior of placing a phone face-down, SpeCam detects the underlying material and infers the device’s location or placement context.

This capability enables discreet micro-interactions designed to reduce everyday mobile distractions. A two-part evaluation demonstrates that SpeCam can: i) recognize colors in the HSB space with 10-degree separation near dominant colors and 4-degree separation otherwise, and ii) identify 30 different surface materials with 99% accuracy. These findings are further supported by a spectroscopy validation study. The paper concludes by proposing applications that leverage simple, unobtrusive micro-interactions when a phone is placed face-down.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3098279.3098541,
   author = {Yeo, Hui-Shyong and Lee, Juyoung and Bianchi, Andrea and Harris-Birtill, David and Quigley, Aaron},
   title = {SpeCam: sensing surface color and material with the front-facing camera of a mobile device},
   year = {2017},
   isbn = {9781450350754},
   publisher = {Association for Computing Machinery},
   address = {New York, NY, USA},
   url = {https://doi.org/10.1145/3098279.3098541},
   doi = {10.1145/3098279.3098541},
   booktitle = {Proceedings of the 19th International Conference on Human-Computer Interaction with Mobile Devices and Services},
   articleno = {25},
   numpages = {9},
   keywords = {discreet interaction, material detection, surface detection},
   location = {Vienna, Austria},
   series = {MobileHCI '17}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}