---
title: 'MBits'
full-title: 'MBits: Multi-modality 3D-printed objects via resonance-tunable spring-mass units'
featured_image: /images/projects/mbits.png # width must be 1600px

# Paper info
year: 2026
month: 10
venue: UIST
authors: [Atul Chaudhary, Andrea Bianchi, Daniel Ashbrook, Valkyrie Savage]

# Paper links
pdf: ChaudharyA_MBits_UIST26.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3830398.3830641
video: ElFv-0JHoXE?si=5dprVaKWjJXBS7g3
---

<!-- Video -->

{% include youtube-video.html %}

<!-- Abstract -->

The geometric customization possible using digital fabrication has unlocked various explorations into objects' static properties: their shape, texture, materials, and embedded mechanisms. Less-explored is how geometry can enable new modes of interactivity through customizing object dynamics---how an object responds to forces and motions. We contribute _MBits: programmable, simulatable, and reconfigurable spring-mass units_ which react to mechanical waves and enable controllable dynamical outputs in the form of haptics, motion, display, and audio. Objects with MBits can be printed from scratch using our toolkit or can include off-the-shelf springs, with geometry or mass modification pre- or post-manufacture to tune their responses. Each MBit responds strongly to a single vibrational frequency, and collections of multiple MBits can, with a single actuator input, create mechanical filters, cascading sequences, or individually targetable vibration regions. We contribute a collection of characterization experiments, embedded in a CAD design tool, along with sample applications showing the possibilities of MBits.

---

<!-- BibTex -->

{% capture paper_bibtex %}
@inproceedings{10.1145/3830398.3830641,
    author = {Chaudhary, Atul and Bianchi, Andrea and Ashbrook, Daniel and Savage, Valkyrie},
    title = {MBits: Multi-modality 3D-printed objects via resonance-tunable spring-mass units},
    year = {2026},
    isbn = {9798400728563},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3830398.3830641},
    doi = {10.1145/3830398.3830641},
    booktitle = {Proceedings of the 39th Annual ACM Symposium on User Interface Software and Technology},
    articleno = {181},
    numpages = {15},
    keywords = {fabrication, resonance, springs, vibration, passive, mechanical},
    location = {Detroit, Michigan, USA},
    series = {UIST '26}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}
