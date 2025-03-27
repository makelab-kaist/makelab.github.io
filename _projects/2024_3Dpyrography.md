---
title: 3D Printed Pyrography
subtitle: 'Using wood filament and dynamic control of nozzle temperature for embedding shades of color in objects'
description: '3D printed pyrography: Using wood filament and dynamic control of nozzle temperature for embedding shades of color in objects'
year: 2024
featured_image: /images/projects/3Dpyrography.png
pdf_file: Moon_3Dpyrography_AM24.pdf # put file in the directory FILES
doi_link: https://doi.org/10.1016/j.addma.2024.104064
featured: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed//u_1KeQZzR7M?si=Gbr5llSNWh1_dWJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- DO NOT CHANGE MANUALLY -->

# {{page.title}}: {{page.subtitle}} ({{page.year}})

Colors enhance the esthetic and functional aspects of three-dimensional (3D) printed objects via material extrusion (MEX). However, existing 3D printing techniques require additional materials and hardware that are either challenging to calibrate or too costly for average 3D printing users. This paper presents a fabrication technique we call 3D printed pyrography, which enables printing multiple shades of color and gradients using a wood filament and a single-nozzle extruder. We investigate the effects of printing temperature and speed on the color properties of wood filament (ColorFabb). Using Euclidean distance in CIELAB color space, we employed perceptual metrics to quantify color differences between samples with different print temperatures (minimum: 195°C, maximum: 300°C, and 5°C increment). As a result, we identified all samples had perceivable discrete colors (ΔE ≥ 1), and, by applying a more conservative threshold, we can refine the count to sixteen distinct colors (ΔE ≥ 2.3). This approach underscores the sensitivity of color perception to printing parameters and highlights the utility of ΔE in CIELAB parameters in discerning color differences in 3D printed objects. Furthermore, we encapsulate this information in a custom software interface. This tool allows users to specify shades or map photographic images directly onto 3D surfaces, and generates the G-code that modulates the nozzle temperature and achieves the desired shading. We demonstrate 3D printed pyrography through 11 applications, such as enhancing visual esthetics, offering visual guidance, and embedding markers to merge digital information with physical objects.

### References

Kongpyung (Justin) Moon, Jaeseong Yi, Valkyrie Savage, and Andrea Bianchi. **3D printed pyrography: Using wood filament and dynamic control of nozzle temperature for embedding shades of color in objects**. In _Additive Manufacturing_ Volume 83, 2024, 104064, ISSN 2214-8604. DOI: [https://doi.org/10.1016/j.addma.2024.104064](https://doi.org/10.1016/j.addma.2024.104064)

<!-- DO NOT CHANGE MANUALLY -->

<a href="{{ site.url }}/files/{{ page.year }}/{{ page.pdf_file }}" target="_blank">paper</a>&nbsp;&nbsp;&nbsp;
<a href="{{ page.doi_link }}" target="_blank">doi</a>

### Source code and material

[GitHub](https://github.com/makelab-kaist/3DPyrography)

---

<a href="/index.html" class="button button--large">Back to projects</a>
