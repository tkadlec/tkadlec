---
layout: page
title: "Links"
comments: false
sharing: false
footer: false
sidebar: false
comments: false
prism: false
body_id: "archives"
---

<div id="blog-archives">
    <div class="blog-archives-main">
        <ol class="slats link-list">
        {% for post in site.posts reverse %}
        {% if post.external-url %}
          {% include link_post.html %}
        {% endif %}
       
        {% endfor %}
         </ol>
    </div>
    <aside class="blog-archives-aside">
        <p>The feed of links is available for <a href="/saved/atom.xml">you to subscribe to.</a></p>
    </aside>
</div>
