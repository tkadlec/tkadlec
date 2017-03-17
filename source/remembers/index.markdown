---
layout: page
title: "Archives"
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
	<ol class="slats">
		{% for post in site.posts reverse %}
		{% unless post.external-url %}
		  {% include archive_post.html %}
		{% endunless %}
		
		{% endfor %}
		</ol>
	</div>
	<aside class="blog-archives-aside">
		{% include custom/asides/elsewhere.html %}
	</aside>
</div>
