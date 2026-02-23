---
title: The Lab
description: Interaction, Design, HCI, Haptics, VR, Digital Fabrication, Physical computing, Prototyping tools, KAIST, Korea, Hardware UX
---

_make lab_ is a research group working in the field of Human-Computer Interaction (**HCI**), with the objective of creating novel _computationally augmented physical interactions_. We are in the department of [Industrial Design](http://id.kaist.ac.kr) at [KAIST](https://www.kaist.ac.kr/en/) (South Korea) and are a member of the [KAIST HCI group](https://hci.kaist.ac.kr). Our lab is a well-recognized and award-winning HCI lab in Korea working at the intersection of design and engineering. Please see our [publications](./publications.html).

<iframe width="560" height="315" src="https://www.youtube.com/embed/FaTROXhY3-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Rooted in user-centered experience design and with deep understanding and expertise in various engineering fields (computing, mechanical engineering, electronics), we explore emerging technologies in the areas of _physical interaction with computers_ that require combinations of software and hardware. 

Current research topics are related to **novel tools for electronics**, **digital fabrication**, **mixed-reality (XR) interaction**, and **haptic or robotic interfaces**.

---

### Meet the team

{% assign prof = site.data.people[0] %}

<div class="container-fluid">
    <div class="row peopleContainer">
        <div class="col-lg-3 col-md-3 col-sm-3 text-center people">
            <div class="service-box">
                <img src="/images/people/{{ prof.name | append: '_' | append: prof.lastname | append: '.jpg' | downcase  }}"
                    alt="{{prof.name}}" class="rounded-circle profImage">
                <h5>{{prof.name}}<br>{{prof.lastname}}</h5>
                <b>{{prof.position}}<br>Director</b>
                <div class="icons">
                    {% if prof.homepage %}<a href="{{prof.homepage}}"><i class="fas fa-home" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if prof.github %}
                    <a href="http://github.com/{{prof.github}}"><i class="fab fa-github" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if prof.twitter %}
                    <a href="https://www.twitter.com/{{prof.twitter}}"><i class="fab fa-x-twitter" aria-hidden="true"></i></a>
                    {%endif%}
                    {% if prof.facebook %}
                    <a href="https://www.facebook.com/{{prof.facebook}}"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                    {%endif%}
                    {% if prof.scholar %}
                    <a href="https://scholar.google.co.kr/citations?user={{prof.scholar}}"><i class="fas fa-graduation-cap" aria-hidden="true"></i></a>
                    {% endif %}
                    {% if prof.email %}
                    <a href="#" onclick="(function(){window.open('mailto:{{ prof.email }}');})()"><i class="fas fa-envelope"></i></a>
                    {% endif %}
                </div>
            </div>
        </div>

        <!-- OTHER MEMBERS -->
        {% include people-grid.html %}
    </div>

</div>

---

## Alumni

### Ph.D

[Kongpyung Moon](https://www.kpmoon.com) (2025)
<br>Assistant professor at _National University of Singapore_

[Myung Jin Kim](https://sites.google.com/view/kimmj/home) (2025) 
<br>Postdoctoral Researcher at _ETRI, Korea_

[Seungwoo Je](http://www.seungwooje.com) (2022)
<br>Assistant Professor at _SUSTech, China_

[Joongi Shin](https://www.joongishin.com) (2021)
<br>Postdoctoral researcher at _Aalto University, Finland_

[Yoonji Kim](http://www.yoonji-kim.com) (2020)
<br>Assistant professor at _Chung-Ang University, Korea_

### Master

[Jee Youn Kim](https://missingscreuu.com) (2025), [Zofia Marciniak](https://zosia-hci.github.io) (2025, Samsung Electronics), [Jiwon Kim](https://quazycrystal.github.io) (2025), Jaeseong Yi (2024), [Haeun Lee](https://leehaeun.com) (2024), [Wooje Chang](https://scholar.google.com/citations?user=vYvAwQYAAAAJ&hl=en) (2023, Ph.D. student at University of Maryland), [Hye-Young Jo](https://www.hyeyoungjo.com) (2022, Ph.D. student at University of Colorado, Boulder), [Neung Ryu](http://www.neungryu.com) (2021, NAVER), [Daye Kang](https://www.dayekang.info) (2021, Ph.D. student at Cornell University), [Myung Jin Kim](https://sites.google.com/view/kimmj/home) (2021, Ph.D. at KAIST _make::lab_)., Hyein Lee (2020), Youngkyung Choi (2020), Minkyeong Lee (2019), Okyu Choi (2019), [Seungwoo Je](https://www.immersivedesignresearch.com/seungwoo) (2018, Ph.D. at KAIST _make::lab_).

### Interns and Other Alumni

[Punn Lertjaturaphat](https://punnlert.github.io) (2023-25), [Hyewon Lee](https://www.hyewon.me) (2024), [Lwam Z. Araya](https://lwamzeche.site/#/about) (2024), Yumin Jung (2024), Zhi Lin Yap (2023), Nargiz Askarbekkyzy (2022-23), Minseo Bang (2023), Jei Kong (2022), Nishant Nepal (2022), Yoosang Yoon (2021), Hyunseung Lim (2020), Edwin Truman (2019), WooJin Lee (2019), Ramkrishna Prasad (2019), [Jihoon Suh](https://www.jihoonsuh.com/) (2015), Wooshik Kim (2015), [Hoonjin Jung](https://davidhoonjin.github.io) (Master on leave), Leila Hyelip Lee (Ph.D. Alumna),  Eunhee Jung (Master Alumna). 

### Visitors

[Sylvain Malacria](https://www.malacria.com) (2025, INRIA, France), [Shana Smith](https://asmejcise.org/editors/shana-smith-ph-d) (2025, National Taiwan University), [Anusha Withana](https://withanage.info) (2024, The University of Sydney), [Atul Chaudhary](mailto:atul.aaytee@gmail.com) (2025, University of Copenhagen), [Nihar Sabnis](https://scholar.google.com/citations?user=1FU5pTAAAAAJ&hl=en) (2024, Max Planck, Germany), [Chris Bannon](https://www.linkedin.com/in/cbannon/) (2024, UC Berkeley), [Takuya Takahashi](https://takuya-13068.github.io/portfolio) (2022, Tokyo Institute of Technology, Japan), [Laurenz Seidel](https://www.laurenzseidel.com) (2021, HPI, Germany), [Tram Tran](https://tramtranx.com) (2019, The University of Sydney). 

### Frequent Collaborators

Our research was possible also thanks to numerous collaborators:
[Michel Pahud](https://www.microsoft.com/en-us/research/people/mpahud/) and Mike Sinclair (Microsoft Research), [Ian Oakley](https://ee.kaist.ac.kr/en/professor/ian-oakley/) and [Sang Ho Yoon](https://sanghoy.com) (KAIST), [Daniel Ashbrook](http://danielashbrook.com)  and [Valkyrie Savage](https://valkyriesavage.com) (University of Copenhagen), [Anusha Withana](https://profiles.sydney.edu.au/anusha.withana) (The University of Sydney), [Eyal Ofek](https://eyalofek.org) (University of Birmingham), [Ryo Suzuki](https://ryosuzuki.org) (University of Colorado, Boulder) [Clement Zheng](https://clementzheng.info) (National Universoity of Singapore), [Kristina Höök](https://www.kth.se/profile/khook/) (KTH), Yi Fei Cheng and [David Lindlbauer](https://hcii.cmu.edu/people/david-lindlbauer) (Carnegie Mellon University), [Nihar Sabnis](https://scholar.google.com/citations?user=1FU5pTAAAAAJ&hl=en) (Max Planck), [Artem Dementyev](http://www.artemdementyev.com) (Google), [Pedro Lopes](http://plopes.org) (University of Chicago), [Xing-Dong Yang](https://www.sfu.ca/fas/computing/people/faculty/faculty-members/xingdong_yang.html) (Simon Fraser University), [Liwei Chan](https://scholar.google.co.uk/citations?user=yF0Cw1EAAAAJ&hl=en) (National Yang Ming Chiao Tung University), [Aaron Quigley](https://aaronquigley.org) and [Josh Andres](https://www.unsw.edu.au/staff/josh-andres) (UNSW).


Interested in collaborating with us? Please reach out.

<!-- [Jean-Charles Bazin](https://scholar.google.com/citations?user=XPZLx-8AAAAJ&hl=en) (Apple), and [Hui-Shyong](https://hsyeo.me) (Huawei), [Hamed Alavi](http://hamedalavi.com) (University of Fribourg) and [Himanshu Verma](http://vermahimanshu.com) (TU Delft), [Youngjun Cho](https://youngjuncho.com) and [Nicolai Marquardt](http://www.nicolaimarquardt.com) (UCL), [Hyeon-Jeong Suk](http://color.kaist.ac.kr) and [Tek-Jin Nam](http://cidr.kaist.ac.kr) (KAIST Design), [Geehyuk Lee](http://hcil.kaist.ac.kr/?page_id=349) (KAIST School of Computing), [Hyoungshick Kim](https://seclab.skku.edu) (SKKU). -->

<!-- IMAGE  -->
<!-- <div class="img-container">
    <img src="/images/people/group.jpg" alt="The Lab" style="width:100%;">
    <h5 class="text-overlay">Few hours before the CHI deadline...</h5>
</div> -->


<a href="contact.html" class="button button--large">Contact us</a>
