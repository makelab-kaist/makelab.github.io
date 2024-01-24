---
title: BlinkBoard
subtitle: 'Guiding and monitoring circuit assembly for synchronous and remote physical computing education'
description: 'BlinkBoard: Guiding and monitoring circuit assembly for synchronous and remote physical computing education'
year: 2024
featured_image: /images/projects/blinkboard.jpg # width must be 1600px
pdf_file: Bianchi_BlinkBoard_HardwareX2024.pdf # put file in the directory FILES
doi_link: https://doi.org/10.1016/j.ohx.2024.e00511
featured: false
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/IEO068N3r2c?si=y4U6bEn6rOgDwma2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- DO NOT CHANGE MANUALLY -->

# {{page.title}}: {{page.subtitle}} ({{page.year}})

Motivated by the necessity of guiding and monitoring students when assembling electronic circuits during in-class activities, we propose BlinkBoard, an augmented breadboard that enhances synchronous and remote physical computing classes. BlinkBoard uses LEDs placed on each row of a breadboard to guide, via four distinct blinking patterns, how to place and connect components and wires. It also uses a set of Input/Output pins to sense voltage levels or to generate voltage output at user-specified rows. Our hardware uses an open protocol of JSON commands and responses that can be used directly via a command line interface to control the hardware. Alternatively, these commands can be issued within a front-end graphical application hosted on a computer for a more user-friendly interface, and to ensure bidirectional and real-time communication between the instructor’s guiding and monitoring panel, and all the students’ remote BlinkBoards. The BlinkBoard hardware is affordable and simple, partially due to a customized circuit configured via a hardware description language that handles the LEDs’ patterns with minimal load on the Arduino microcontroller. Finally, we briefly show BlinkBoard in use during a workshop with high-school students and an undergraduate design course.

### References


Andrea Bianchi, Kongpyung Justin Moon, Artem Dementyev, Seungwoo Je. 2024. **BlinkBoard: Guiding and monitoring circuit assembly for synchronous and remote physical computing education**. In HardwareX 2024,
e00511, ISSN 2468-0672, DOI: [https://doi.org/10.1016/j.ohx.2024.e00511](https://doi.org/10.1016/j.ohx.2024.e00511).


<!-- DO NOT CHANGE MANUALLY -->

<a href="{{ site.url }}/files/{{ page.year }}/{{ page.pdf_file }}" target="_blank">paper</a>&nbsp;&nbsp;&nbsp;
<a href="{{ page.doi_link }}" target="_blank">doi</a>

### Source code and material

- [Official BlinkBoard website](https://blinkboard.kaist.ac.kr)
- [BlinkBoard Hardware on **GitHub**](https://github.com/makinteractlab/BlinkBoard)
- [BlinkBoard App on **GitHub**](https://github.com/makinteractlab/BlinkBoardApp)


---

<a href="/index.html" class="button button--large">Back to projects</a>
