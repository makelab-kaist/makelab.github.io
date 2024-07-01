---
title: Inline
subtitle: 'Inline Visualization and Manipulation of Real-Time Hardware Log for Supporting Debugging of Embedded Programs'
description: 'Inline Visualization and Manipulation of Real-Time Hardware Log for Supporting Debugging of Embedded Programs'
year: 2024
featured_image: /images/projects/inline.png # width must be 1600px
pdf_file: Bianchi_Inline_PACM2024.pdf # put file in the directory FILES
doi_link: https://doi.org/10.1145/3660250
featured: true
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/gAf5mNowg7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- DO NOT CHANGE MANUALLY -->

# {{page.subtitle}} ({{page.year}})

🏅 _Honorable Mention Award_

The advent of user-friendly embedded prototyping systems, exemplified by platforms like Arduino, has significantly democratized the creation of interactive devices that combine software programs with electronic hardware. This interconnection between hardware and software, however, makes the identification of bugs very difficult, as problems could be rooted in the program, in the circuit, or at their intersection. While there are tools to assist in identifying and resolving bugs, they typically require hardware instrumentation or visualizing logs in serial monitors. Based on the findings of a formative study, we designed Inline a programming tool that simplifies debugging of embedded systems by making explicit the internal state of the hardware and the program's execution flow using visualizations of the hardware logs directly within the user's code. The system's key characteristics are 1) an inline presentation of logs within the code, 2) real-time tracking of the execution flow, and 3) an expression language to manipulate and filter the logs. The paper presents the detailed implementation of the system and a study with twelve users, which demonstrates what features were adopted and how they were leveraged to complete debugging tasks.

### References

Andrea Bianchi, Zhi Lin Yap, Punn Lertjaturaphat, Austin Henley, Kongpyung (Justin) Moon, and Yoonji Kim. 2024. **Inline Visualization and Manipulation of Real-Time Hardware Log for Supporting Debugging of Embedded Programs**. To appear in Proceedings of the ACM Hum.-Comput. Interact. _EICS '24_.

<!-- DO NOT CHANGE MANUALLY -->

<a href="{{ site.url }}/files/{{ page.year }}/{{ page.pdf_file }}" target="_blank">paper</a>&nbsp;&nbsp;&nbsp;
<a href="{{ page.doi_link }}" target="_blank">doi</a>

### Source code and material

[GitHub](https://github.com/makelab-kaist/inline-extension)

<a href="{{ site.url }}/files/various/Inline_slides.pdf" target="_blank">Slides</a>

---

<a href="/index.html" class="button button--large">Back to projects</a>
