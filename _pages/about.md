---
title: The Lab
description: Interaction, Design, HCI, Haptics, VR, Digital Fabrication, Physical computing, Prototyping tools, KAIST, Korea, Hardware UX
---

**Make Lab** is a research lab working in the field of Human-Computer Interaction (**HCI**), with the objective of creating novel _computationally augmented physical interactions_. We are in the department of [Industrial Design](http://id.kaist.ac.kr) at [KAIST](https://www.kaist.ac.kr/en/) (South Korea) and are a member of the [KAIST HCI group](https://hci.kaist.ac.kr). Our lab is a well-recognized and award-winning HCI lab in Korea working at the intersection of design and engineering. Please see our [publications](./publications.html).

<iframe width="560" height="315" src="https://www.youtube.com/embed/FaTROXhY3-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Rooted in user-centered experience design and with deep understanding and expertise in various engineering fields (computing, mechanical engineering, electronics), we explore emerging technologies in the areas of _physical interaction with computers_ that require combinations of software and hardware. Current research topics are related to **novel tools for electronics**, **digital fabrication**, **mixed-reality interaction**, and **haptic or robotic interfaces**.

---

### Meet the makers

{% assign prof = site.data.people[0] %}

<div class="container-fluid">
    <div class="row peopleContainer">
        <div class="col-lg-4 col-md-4 col-sm-4 text-center people">
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

<!-- IMAGE  -->
<!-- <div class="img-container">
    <img src="/images/people/group.jpg" alt="The Lab" style="width:100%;">
    <h5 class="text-overlay">Few hours before the CHI deadline...</h5>
</div> -->
<!--
### Collaborators

Our research was possible also thanks to numerous collaborators:
[Michel Pahud](https://www.microsoft.com/en-us/research/people/mpahud/) and [Mike Sinclair](https://www.microsoft.com/en-us/research/people/sinclair/) (Microsoft Research), [Ian Oakley](http://interactions.unist.ac.kr) (UNIST), [Daniel Ashbrook](http://danielashbrook.com) (University of Copenhagen), [Artem Dementyev](http://www.artemdementyev.com) (Google), [Jean-Charles Bazin](https://scholar.google.com/citations?user=XPZLx-8AAAAJ&hl=en) (Apple), [Pedro Lopes](http://plopes.org) (University of Chicago), [Xing-Dong Yang](https://www.cs.dartmouth.edu/~xingdong/) (Dartmouth College), [Liwei Chan](https://scholar.google.co.uk/citations?user=yF0Cw1EAAAAJ&hl=en) (National Yang Ming Chiao Tung University), [Aaron Quigley](https://aaronquigley.org) (University of New South Wales) and [Hui-Shyong](https://hsyeo.me) (Huawei), [Hamed Alavi](http://hamedalavi.com) (University of Fribourg) and [Himanshu Verma](http://vermahimanshu.com) (TU Delft), [Youngjun Cho](https://youngjuncho.com) and [Nicolai Marquardt](http://www.nicolaimarquardt.com) (UCL), [Hyeon-Jeong Suk](http://color.kaist.ac.kr) and [Tek-Jin Nam](http://cidr.kaist.ac.kr) (KAIST Design), [Geehyuk Lee](http://hcil.kaist.ac.kr/?page_id=349) (KAIST School of Computing), [Hyoungshick Kim](https://seclab.skku.edu) (SKKU).

If you are interested in collaborating with us, please reach out. -->

<a href="contact.html" class="button button--large">Contact us</a>
