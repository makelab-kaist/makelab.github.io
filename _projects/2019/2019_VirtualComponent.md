---
title: VirtualComponent
full-title: 'VirtualComponent: A Mixed-Reality Tool for Designing and Tuning Breadboarded Circuits'
featured_image: /images/projects/virtualComponent.jpg # width must be 1600px

# Paper info
year: 2019
venue: CHI
authors: [Yoonji Kim, Youngkyung Choi, Hyein Lee, Geehyuk Lee, Andrea Bianchi]

# Paper links
pdf: Kim_VirtualComponent_CHI19.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3290605.3300407
video: xeq6MhjG2Vs
github: https://github.com/makinteract/VirtualComponent
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
Prototyping electronic circuits is an increasingly popular activity, supported by researchers, who develop toolkits to improve the design, debugging, and fabrication of electronics. Although past work mainly dealt with circuit topology, in this paper we propose a system for determining or tuning the values of the circuit components. Based on the results of a formative study with seventeen makers, we designed _VirtualComponent_, a mixed-reality tool that allows users to digitally place electronic components on a real breadboard, tune their values in software, and see these changes applied to the physical circuit in real-time. VirtualComponent is composed of a set of plug-and-play modules containing banks of components, and a custom breadboard managing the connections and components' values. Through demonstrations and the results of an informal study with twelve makers, we show that VirtualComponent is easy to use and allows users to test components' value configurations with little effort.

---

## Media Coverage

The augmented reality breadboard of the future, [Hackaday (May 27, 2019)](https://hackaday.com/2019/05/27/the-augmented-reality-breadboard-of-the-future/), [Hackster.io (May 29, 2019)](https://blog.hackster.io/virtualcomponent-lets-users-digitally-place-virtual-electronics-on-a-real-breadboard-39bf0352bc09).

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3290605.3300407,
  author = {Kim, Yoonji and Choi, Youngkyung and Lee, Hyein and Lee, Geehyuk and Bianchi, Andrea},
  title = {VirtualComponent: A Mixed-Reality Tool for Designing and Tuning Breadboarded Circuits},
  year = {2019},
  isbn = {9781450359702},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3290605.3300407},
  doi = {10.1145/3290605.3300407},
  booktitle = {Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems},
  pages = {1–13},
  numpages = {13},
  keywords = {toolkit, physical computing, component tuning, circuits},
  location = {Glasgow, Scotland Uk},
  series = {CHI '19}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}