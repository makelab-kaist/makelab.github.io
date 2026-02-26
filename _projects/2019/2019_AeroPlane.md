---
title: Aero-Plane
full-title: "Aero-Plane: a Handheld Force-Feedback Device that Renders Weight Motion Illusion on a Virtual 2D Plane"
featured_image: /images/projects/aeroplane.jpg # width must be 1600px

# Paper info
year: 2019
venue: UIST
authors: [Seungwoo Je, Myung Jin Kim, Woojin Lee, Byungjoo Lee, Xing-Dong Yang, Pedro Lopes, Andrea Bianchi]

# Paper links
pdf: Je_AeroPlane_UIST19.pdf # put file in the directory FILES
doi: https://doi.org/10.1145/3332165.3347926
video: -8yYRvdDKPM
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
Force feedback is said to be the next frontier in virtual reality (VR). Recently, with consumers pushing forward with untethered VR, researchers turned away from solutions based on bulky hardware (e.g., exoskeletons and robotic arms) and started exploring smaller portable or wearable devices. However, when it comes to rendering inertial forces, such as when moving a heavy object around or when interacting with objects with unique mass properties, current ungrounded force-feedback devices are unable to provide quick weight shifting sensations that can realistically simulate weight changes over 2D surfaces. In this paper we introduce Aero-plane, a force-feedback handheld controller based on two miniature jet-propellers that can render shifting weights of up to 14 N within 0.3 seconds. Through two user studies we: (1) characterize the users' ability to perceive and correctly recognize different motion paths on a virtual plane while using our device; and, (2) test the level of realism and immersion of the controller when used in two VR applications (a rolling ball on a plane, and using kitchen tools of different shapes and sizes). Lastly, we present a set of applications that further explore different usage cases and alternative form-factors for our device.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@inproceedings{10.1145/3332165.3347926,
  author = {Je, Seungwoo and Kim, Myung Jin and Lee, Woojin and Lee, Byungjoo and Yang, Xing-Dong and Lopes, Pedro and Bianchi, Andrea},
  title = {Aero-plane: A Handheld Force-Feedback Device that Renders Weight Motion Illusion on a Virtual 2D Plane},
  year = {2019},
  isbn = {9781450368162},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3332165.3347926},
  doi = {10.1145/3332165.3347926},
  booktitle = {Proceedings of the 32nd Annual ACM Symposium on User Interface Software and Technology},
  pages = {763–775},
  numpages = {13},
  keywords = {weight motion illusion, vrcontroller, virtual reality, force-feedback},
  location = {New Orleans, LA, USA},
  series = {UIST '19}
}
{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}