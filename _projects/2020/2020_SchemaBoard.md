---
title: SchemaBoard
full-title: 'SchemaBoard: Supporting Correct Assembly of Schematic Circuits using Dynamic In-Situ Visualization'
featured_image: /images/projects/schemaboard.jpg # width must be 1600px

# Paper info
year: 2020
venue: UIST
authors: [Yoonji Kim, Hyein Lee, Ramkrishna Prasad, Seungwoo Je, Youngkyung Choi, Daniel Ashbrook, Ian Oakley, Andrea Bianchi]

# Paper links
pdf: Kim_SchemaBoard_UIST20.pdf # put file in the directory FILESii
doi: https://doi.org/10.1145/3379337.3415887
video: JbrhlfrhZ9Y
---

<!-- Video -->
{% include youtube-video.html %}

<!-- Abstract -->
Assembling circuits on breadboards using reference designs is a common activity among makers. While tools like Fritzing offer a simplified visualization of how components and wires are connected, such pictorial depictions of circuits are rare in formal educational materials and the vast bulk of online technical documentation. Electronic schematics are more common but are perceived as challenging and confusing by novice makers. To improve access to schematics, we propose _SchemaBoard_, a system for assisting makers in assembling and inspecting circuits on breadboards from schematic source materials. SchemaBoard uses an LED matrix integrated underneath a working breadboard to visualize via light patterns where and how components should be placed, or to highlight elements of circuit topology such as electrical nets and connected pins. This paper presents a formative study with 16 makers, the SchemaBoard system, and a summative evaluation with an additional 16 users. Results indicate that SchemaBoard is effective in reducing both the time and the number of errors associated with building a circuit based on a reference schematic, and for inspecting the circuit for correctness after its assembly.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3379337.3415887,
  author = {Kim, Yoonji and Lee, Hyein and Prasad, Ramkrishna and Je, Seungwoo and Choi, Youngkyung and Ashbrook, Daniel and Oakley, Ian and Bianchi, Andrea},
  title = {SchemaBoard: Supporting Correct Assembly of Schematic Circuits using Dynamic In-Situ Visualization},
  year = {2020},
  isbn = {9781450375146},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3379337.3415887},
  doi = {10.1145/3379337.3415887},
  booktitle = {Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology},
  pages = {987–998},
  numpages = {12},
  keywords = {system, physical computing, circuits, breadboard visualization},
  location = {Virtual Event, USA},
  series = {UIST '20}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}