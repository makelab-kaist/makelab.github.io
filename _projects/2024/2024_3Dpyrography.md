---
title: 3D Printed Pyrography
full-title: '3D printed pyrography: Using wood filament and dynamic control of nozzle temperature for embedding shades of color in objects'
featured_image: /images/projects/3Dpyrography.png # width must be 1600px

# Paper info
year: 2024
venue: Additive Manufacturing
authors: [Kongpyung Justin Moon, Jaeseong Yi, Valkyrie Savage, Andrea Bianchi]

# Paper links
pdf: Moon_3Dpyrography_AM24.pdf # put file in the directory FILES
doi: https://doi.org/10.1016/j.addma.2024.104064
github: https://github.com/makelab-kaist/3DPyrography
video: u_1KeQZzR7M
---

<!-- Video -->
{% include youtube-video.html %}


<!-- Abstract -->
This paper introduces a 3D printing technique called 3D printed pyrography, which produces multiple shades and gradients using wood filament and a single-nozzle extruder without requiring additional costly or complex hardware. The study examines how printing temperature and speed affect the color of wood filament, using perceptual metrics in CIELAB color space to quantify color differences. Results show that varying temperatures produce at least sixteen distinct, perceivable colors. A custom software interface was developed to allow users to specify shades or map images onto 3D surfaces by modulating nozzle temperature through generated G-code. The technique is demonstrated in 11 applications, enhancing aesthetics, providing visual guidance, and embedding markers to integrate digital information with physical objects.

<!-- Break -->
---

<!-- BibTex -->
{% capture paper_bibtex %}
@article{MOON2024104064,
  title = {3D printed pyrography: Using wood filament and dynamic control of nozzle temperature for embedding shades of color in objects},
  journal = {Additive Manufacturing},
  volume = {83},
  pages = {104064},
  year = {2024},
  issn = {2214-8604},
  doi = {https://doi.org/10.1016/j.addma.2024.104064},
  url = {https://www.sciencedirect.com/science/article/pii/S2214860424001106},
  author = {Kongpyung (Justin) Moon and Jaeseong Yi and Valkyrie Savage and Andrea Bianchi},
  keywords = {3D printing, 3D pyrography, Wood filament, Rapid prototyping},
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}