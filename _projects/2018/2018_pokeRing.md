---
title: PokeRing
full-title: "PokeRing: Notifications by Poking Around the Finger"
featured_image: /images/projects/pokering.jpg # width must be 1600px

# Paper info
year: 2018
venue: CHI
authors: [Seungwoo Je, Minkyeong Lee, Yoonji Kim, Liwei Chan, Xing-Dong Yang, Andrea Bianchi]

# Paper links
pdf: Je_PokeRing_CHI18.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3173574.3174116
video: HTMol6LW0xs
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
Smart rings are well suited for subtle, always-available haptic notifications due to their direct skin contact. While previous research demonstrated the feasibility of haptic feedback in smart rings using limited finger locations, the potential of poking stimuli to convey richer information remained underexplored.

Through three studies involving 76 participants, PokeRing was developed to stimulate eight locations around the index finger’s proximal phalanx. The evaluation assessed performance in realistic scenarios (standing and walking) and examined the effectiveness of twenty-one spatio-temporal patterns created by six interaction designers.

Results demonstrate that PokeRing can reliably convey rich tactile information. The paper concludes by presenting three application scenarios that leverage its enhanced notification capabilities.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3173574.3174116,
   author = {Je, Seungwoo and Lee, Minkyeong and Kim, Yoonji and Chan, Liwei and Yang, Xing-Dong and Bianchi, Andrea},
   title = {PokeRing: Notifications by Poking Around the Finger},
   year = {2018},
   isbn = {9781450356206},
   publisher = {Association for Computing Machinery},
   address = {New York, NY, USA},
   url = {https://doi.org/10.1145/3173574.3174116},
   doi = {10.1145/3173574.3174116},
   booktitle = {Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems},
   pages = {1–10},
   numpages = {10},
   keywords = {haptics, notification, poke, ring, wearable},
   location = {Montreal QC, Canada},
   series = {CHI '18}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}