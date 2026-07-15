---
title: 'AtoMix'
full-title: 'AtoMix: Fostering Structured Visual Ideation for Remote Groups through Atomic Composition and Cross‑Pollination'
featured_image: /images/projects/atomix.png # width must be 1600px

# Paper info
year: 2026
month: 5
venue: ACM C&C
authors: [Heeji Jolie Kim, Anam Ahmad Khan, SeungHui Huh, Andrea Bianchi]

# Paper links
pdf: KimHeeji_AtoMix_CC26.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3803784.3807530
video: iXEGsJGh2bs?si=kJUw6OMwtQkGBqqj
---

<!-- Video -->

{% include youtube-video.html %}

<!-- Abstract -->

6-3-5 _brainwriting_ is a structured, silent ideation method where 6 participants each generate 3 ideas in 5 minutes across 6 rounds, yielding up to 108 ideas and enabling equal participation, rapid ideation and cumulative development. Many ideas are fundamentally visual, making generative image models especially useful for accelerating visual exploration and making abstract ideas quickly tangible, but existing tools cannot fully support visual composition, where ideas are built from atomic elements and iteratively remixed. A formative study (N=18) showed that even with GenAI embedded in a 6-3-5 structure, participants invested effort in crafting monolithic prompts yet struggled to obtain intended results, build on others’ ideas, or work modularly, leading to redundancy and limited divergence. To address these issues, we present _AtoMix_, a collaborative visual interface for remote 6-3-5 brainwriting that supports granularity and cross-pollination through atomic prompting, canvas composition, and reuse of image fragments. In a comparative study (N=24), AtoMix afforded more fine-grained interaction than the baseline and better supported collaborative visual ideation.

---

<!-- BibTex -->

{% capture paper_bibtex %}
@inproceedings{10.1145/3803784.3807530,
author = {Kim, Heeji Jolie and Khan, Anam Ahmad and Huh, SeungHui and Bianchi, Andrea},
title = {AtoMix: Fostering Structured Visual Ideation for Remote Groups through Atomic Composition and Cross‑Pollination},
year = {2026},
isbn = {9798400725838},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3803784.3807530},
doi = {10.1145/3803784.3807530},
booktitle = {Proceedings of the 2026 Conference on Creativity and Cognition},
pages = {1092–1107},
numpages = {16},
keywords = {Creativity Support Tools (CST), Visual Ideation, Brainwriting, Generative Image},
location = {
},
series = {C&C '26}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}
