---
title: GamesBond
full-title: 'GamesBond: Bimanual Haptic Illusion of Physically Connected Objects for Immersive VR Using Grip Deformation'
featured_image: /images/projects/gamesbond.jpg # width must be 1600px

# Paper info
year: 2021
venue: CHI
award: Honorable Mention
authors: [Neung Ryu, Hye-Young Jo, Michel Pahud, Mike Sinclair, Andrea Bianchi]

# Paper links
pdf: Ryu_Gamesbond_CHI21.pdf # put file in the directory FILESii
doi: https://doi.org/10.1145/3411764.3445727
video: 0f3wAVNglsk
---

<!-- Video -->
{% include youtube-video.html %}

<!-- Abstract -->
Virtual Reality experiences, such as games and simulations, typically support the usage of bimanual controllers to interact with virtual objects. To recreate the haptic sensation of holding objects of various shapes and behaviors with both hands, previous researchers have used mechanical linkages between the controllers that render adjustable stiffness. However, the linkage cannot quickly adapt to simulate dynamic objects, nor can it be removed to support free movements. This paper introduces _GamesBond_, a pair of 4-DoF controllers without physical linkage but capable of creating the illusion of being connected as a single device, forming a virtual bond. The two controllers work together by dynamically displaying and physically rendering deformations of hand grips, allowing users to perceive a single connected object between the hands, such as a jumping rope. With a user study and various applications, we show that GamesBond increases the realism, immersion, and enjoyment of bimanual interaction.

---

### Media Coverage

GamesBond on the <a href="https://www.microsoft.com/en-us/research/blog/microsoft-research-collaborates-with-kaist-in-korea-to-explore-bimanual-interactions-with-haptic-feedback-in-virtual-reality/" target="_blank">Microsoft Research Blog</a>.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3411764.3445727,
  author = {Ryu, Neung and Jo, Hye-Young and Pahud, Michel and Sinclair, Mike and Bianchi, Andrea},
  title = {GamesBond: Bimanual Haptic Illusion of Physically Connected Objects for Immersive VR Using Grip Deformation},
  year = {2021},
  isbn = {9781450380966},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3411764.3445727},
  doi = {10.1145/3411764.3445727},
  booktitle = {Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems},
  articleno = {125},
  numpages = {10},
  keywords = {shape-changing, grip deformation, bimanual interaction, Virtual Reality, Haptics},
  location = {Yokohama, Japan},
  series = {CHI '21}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}