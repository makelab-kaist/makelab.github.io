---
title: VibRing
full-title: "VibRing: Disambiguating Touch with a Smart-Ring"
featured_image: /images/projects/vibRing.jpg # width must be 1600px

# Paper info
year: 2017
venue: AHs
authors: [Andrea Bianchi, Seungwoo Je]

# Paper links
pdf: Bianchi_Vibring_AH2017.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3041164.3041196
video: rwC8DR7krq8
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
Capacitive touchscreens have transformed user interaction by enabling intuitive multi-finger input. However, existing touchscreens cannot differentiate between individual fingers or users, limiting the expressiveness of touch input.

_VibRing_ proposes augmenting touchscreen interaction with a smart ring that transmits a unique identifier through vibration patterns when in contact with the screen. This enables the system to distinguish between users and assign different meanings to touches. The paper explores this concept and presents example applications demonstrating its feasibility and potential to enrich multi-user and multi-touch interaction.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3041164.3041196,
   author = {Bianchi, Andrea and Je, Seungwoo},
   title = {Disambiguating touch with a smart-ring},
   year = {2017},
   isbn = {9781450348355},
   publisher = {Association for Computing Machinery},
   address = {New York, NY, USA},
   url = {https://doi.org/10.1145/3041164.3041196},
   doi = {10.1145/3041164.3041196},
   booktitle = {Proceedings of the 8th Augmented Human International Conference},
   articleno = {27},
   numpages = {5},
   keywords = {wearable, touch disambiguation, smart-ring, augmentation},
   location = {Silicon Valley, California, USA},
   series = {AH '17}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}