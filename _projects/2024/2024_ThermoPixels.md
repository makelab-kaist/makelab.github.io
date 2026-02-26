---
title: ThermoPixels
full-title: '3D Printing Locally Activated Visual-Displays Embedded in 3D Objects via Electrically Conductive and Thermochromic Materials'
featured_image: /images/projects/thermopixels.png # width must be 1600px

# Paper info
year: 2024
venue: CHI
authors: [Kongpyung Justin Moon, Zofia Marciniak, Ryo Suzuki, Andrea Bianchi]

# Paper links
pdf: Moon_ThermoPixels_CHI24.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3613904.3642537
github: https://github.com/makelab-kaist/ThermoPixels
video: UPplIn-6F6A
---

<!-- Video -->
{% include youtube-video.html %}

<!-- {% include youtube-video.html id="UPplIn-6F6A" %} -->


<!-- Abstract -->
3D printed displays have the potential to create unique visual interfaces for physical objects, but current methods either require specialized post-processing or are limited to passive color changes triggered by environmental factors. This paper presents _ThermoPixels_, a method for designing and 3D printing actively controlled, visually rich thermochromic displays embedded in arbitrary shapes. By studying the color-changing and thermal properties of thermochromic and conductive filaments, the authors developed ThermoPixels and a software tool that enables embedding these displays in various 3D geometries, including flat, curved, textured, multicolored, or flexible forms.

<!-- Break -->
--- 

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3613904.3642537,
  author = {Moon, Kongpyung (Justin) and Marciniak, Zofia and Suzuki, Ryo and Bianchi, Andrea},
  title = {3D Printing Locally Activated Visual-Displays Embedded in 3D Objects via Electrically Conductive and Thermochromic Materials},
  year = {2024},
  isbn = {9798400703300},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3613904.3642537},
  doi = {10.1145/3613904.3642537},
  booktitle = {Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
  articleno = {343},
  numpages = {15},
  keywords = {3D Displays, Color-changing Interfaces, Local Heating, Multi-material Printing, Thermochromic Filaments},
  location = {Honolulu, HI, USA},
  series = {CHI '24}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}