---
title: PassBYOP
full-title: "PassBYOP: Bring Your Own Picture for Securing Graphical Passwords"
featured_image: /images/projects/passBYOP.jpg # width must be 1600px

# Paper info
year: 2016
venue: IEEE Transactions on Human-Machine Systems
authors: [Andrea Bianchi, Ian Oakley, Hyoungshick Kim]

# Paper links
pdf: Bianchi_Passbyop_IEEE16.pdf # put file in the directory FILES
doi: https://doi.org/10.1109/THMS.2015.2487511
video: mRCUVANSvgw
---

<!-- Video -->
{% include youtube-video.html video_id=page.video %}

<!-- Abstract -->
PassBYOP is a graphical password system for public terminals that uses personalized physical tokens, like digital pictures on a user's mobile device, instead of static images. Users authenticate by showing these images to a system camera and selecting password elements on live video. The system verifies passwords by extracting distinctive optical features. Studies showed PassBYOP is reliable, requiring at least seven features and 40% geometric matching; usable, with 7.5-second completion times and 9% error rates; and secure, resisting observation attacks such as shoulder surfing and malware. Overall, PassBYOP provides strong security while maintaining usability comparable to existing graphical password systems.

---

<!-- BibTex -->
{% capture paper_bibtex %}
@article{7307177,
  author={Bianchi, Andrea and Oakley, Ian and Kim, Hyoungshick},
  journal={IEEE Transactions on Human-Machine Systems}, 
  title={PassBYOP: Bring Your Own Picture for Securing Graphical Passwords}, 
  year={2016},
  volume={46},
  number={3},
  pages={380-389},
  keywords={Authentication;Feature extraction;Cameras;Reliability;Heating;Mobile handsets;Graphical password;input;live video;observation;user study;Graphical password;input;live video;observation;user study},
  doi={10.1109/THMS.2015.2487511}}

{% endcapture %}
{% include bibtex.html bibtex=paper_bibtex %}