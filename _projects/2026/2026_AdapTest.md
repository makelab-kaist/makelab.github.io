---
title: 'AdapTest'
full-title: 'AdapTest: Supporting Designers in Authoring and Evaluating Environmentally Responsive User Interfaces for Extended Reality'
featured_image: /images/projects/adaptest.png # width must be 1600px

# Paper info
year: 2026
month: 11
venue: ISS
authors:
  [
    Jungwoo Rhee,
    Guhn Lee,
    Yumin Jung,
    Mustafa Doga Dogan,
    Kongpyung Justin Moon,
    Andrea Bianchi,
  ]
equal_authors: [Kongpyung Justin Moon, Andrea Bianchi]

# Paper links
pdf: RheeJungwoo_AdapTest_ISS26.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3859325
video: imBZi7NmE6o?si=EKfui3MQ2vlAUsWG
---

<!-- Video -->

{% include youtube-video.html %}

<!-- Abstract -->

Extended Reality (XR) headsets increasingly host familiar 2D user interfaces as windows floating in physical environments. However, their usability depends on environmental conditions that designers cannot fully control. Current design workflows often separate how a variant is designed from how it actually looks in the target environment. We present _AdapTest_, an _in-situ authoring and testing tool_ that lets designers select interface elements, define when and how they change, compare the resulting variations, and test their activation without coding. Based on prior research and a formative study with 12 interface designers, the system targets three key environmental variables: distance, lighting, and occlusion. We evaluated AdapTest against a desktop design and in-headset preview workflow in a within-subjects study with 12 designers. Compared with the baseline, AdapTest led designers to account for a wider range of environmental factors, address more overlapping conditions, and repeatedly test and revise their designs in place; there were no significant differences in workload or usability despite longer sessions. Our work contributes an integrated, designer-centered approach to adapting, comparing, and validating environmentally responsive XR user interfaces.

---

<!-- BibTex -->

{% capture paper_bibtex %}
@article{10.1145/3859325,
  author = {Rhee, Jungwoo and Lee, Guhn and Jung, Yumin and Dogan, Mustafa Doga and Moon, Kongpyung (Justin) and Bianchi, Andrea},
  title = {AdapTest: Supporting Designers in Authoring and Evaluating Environmentally Responsive User Interfaces for Extended Reality},
  year = {2026},
  issue_date = {November 2026},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  volume = {10},
  number = {8},
  url = {https://doi.org/10.1145/3859325},
  doi = {10.1145/3859325},
  journal = {Proc. ACM Hum.-Comput. Interact.},
  month = nov,
  articleno = {ISS013},
  numpages = {29},
  keywords = {XR, Responsive UI, Environmental Adaptation, Interface Design Tools}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}
