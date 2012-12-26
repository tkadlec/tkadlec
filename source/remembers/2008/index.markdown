---
layout: page
title: "Posts from 2008"
comments: false
sharing: false
footer: false
sidebar: false
comments: false
prism: false
---

<div id="blog-archives">
{% for post in site.posts reverse %}
{% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% if this_year == "2008" %}
<div class="post">
  {% include archive_post.html %}
</div>
{% endif %}
{% endfor %}
</div>