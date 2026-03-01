---
title: News
---

Here are the latest news from our lab:

{% assign sorted_news = site.data.news | sort: 'date' | reverse %}

<ul class="news-list">
{% for item in sorted_news %}
  <li class="news-item">
    <span class="news-date">{{ item.date | date: "%b %d, %Y" }}</span>
    <div class="news-text">
      {{ item.text | markdownify | strip_newlines }}
    </div>
  </li>
{% endfor %}
</ul>