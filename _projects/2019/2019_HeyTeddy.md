---
title: HeyTeddy
full-title: "HeyTeddy: Conversational Test-Driven Development for Physical Computing"
year: 2019
venue: IMWUT
featured_image: /images/projects/heyteddy.jpg # width must be 1600px
pdf_file: Kim_HeyTeddy_IMWUT19.pdf # put file in the directory FILES
doi_link: https://doi.org/10.1145/3369838
---

<span class="badge">{{page.venue}} {{page.year}}</span>

# {{page.full-title}}

<!-- Video -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/GUtUtIBBJ74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- Paper reference -->
<blockquote class="pretty-blockquote">
Yoonji Kim, Youngkyung Choi, Daye Kang, Minkyeong Lee, Tek-Jin Nam, and Andrea Bianchi. 2019. <strong>HeyTeddy: Conversational Test-Driven Development for Physical Computing</strong>. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. 3, 4, Article 139 (December 2019), 21 pages. DOI: <a href="https://doi.org/10.1145/3369838">https://doi.org/10.1145/3369838</a>
</blockquote>

<!-- Links -->
<div class="link-box">
  <a href="{{ site.url }}/files/{{ page.year }}/{{ page.pdf_file }}" target="_blank" class="link-btn">Paper PDF</a>
  <a href="{{ page.doi_link }}" target="_blank" class="link-btn">DOI Link</a>
  <a href="https://github.com/makinteractlab/heyteddy" target="_blank" class="link-btn">
    <i class="fab fa-github"></i> GitHub
  </a>
</div>

<!-- Abstract -->
Physical computing is a complex activity that consists of different but tightly coupled tasks: programming and assembling hardware for circuits. Prior work clearly shows that this coupling is the main source of mistakes that unfruitfully take a large portion of novices' debugging time. While past work presented systems that simplify prototyping or introduce novel debugging functionalities, these tools either limit what users can accomplish or are too complex for beginners. In this paper, we propose a general-purpose prototyping tool based on conversation. HeyTeddy guides users during hardware assembly by providing additional information on requests or by interactively presenting the assembly steps to build a circuit. Furthermore, the user can program and execute code in real-time on their Arduino platform without having to write any code, but instead by using commands triggered by voice or text via chat. Finally, the system also presents a set of test capabilities for enhancing debugging with custom and proactive unit tests. We codesigned the system with 10 users over 6 months and tested it with realistic physical computing tasks. With the result of two user studies, we show that conversational programming is feasible and that voice is a suitable alternative for programming simple logic and encouraging exploration. We also demonstrate that conversational programming with unit tests is effective in reducing development time and overall debugging problems while increasing users' confidence. Finally, we highlight limitations and future avenues of research.

---

<a href="/index.html" class="button button--large">Back to projects</a>