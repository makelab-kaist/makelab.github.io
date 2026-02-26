---
title: RealPen
full-title: "RealPen: Providing Realism in Handwriting Tasks on Touch Surfaces using Auditory-Tactile Feedback"
featured_image: /images/projects/realpen.jpg # width must be 1600px

# Paper info
year: 2016
venue: UIST
authors: [Youngjun Cho, Andrea Bianchi, Nicolai Marquardt, Nadia Bianchi-Berthouze]

# Paper links
pdf: Cho_RealPen_UIST16.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/2984511.2984550
video: RNn0_rkFXkw
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
We present RealPen, an augmented stylus for capacitive tablet screens that simulates the physical sensation of writing on paper with various traditional pens. It enhances the writing experience on touch surfaces by reproducing the friction-induced vibrations and sounds of real writing tools. Our algorithm analyzes the frequency spectrum of these friction oscillations, extracts key frequencies, and adjusts them based on the actuator's response to generate realistic tactile feedback. Sound feedback is also synchronized with writing pressure and speed to increase realism. Additionally, we studied how combining multiple frequencies affects tactile perception, evaluated RealPen's performance, and assessed user preferences for different feedback types.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/2984511.2984550,
  author = {Cho, Youngjun and Bianchi, Andrea and Marquardt, Nicolai and Bianchi-Berthouze, Nadia},
  title = {RealPen: Providing Realism in Handwriting Tasks on Touch Surfaces using Auditory-Tactile Feedback},
  year = {2016},
  isbn = {9781450341899},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/2984511.2984550},
  doi = {10.1145/2984511.2984550},
  booktitle = {Proceedings of the 29th Annual Symposium on User Interface Software and Technology},
  pages = {195–205},
  numpages = {11},
  keywords = {auditory feedback, friction, friction-induced oscillation, handwriting, haptics, pen, stylus, tactile feedback},
  location = {Tokyo, Japan},
  series = {UIST '16}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}