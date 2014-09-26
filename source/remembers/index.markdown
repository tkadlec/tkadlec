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
		{% for post in site.posts reverse %}
		<ol class="slats">
		  {% include archive_post.html %}
		</ol>
		{% endfor %}
	</div>
	<aside class="blog-archives-aside">
		{% include custom/asides/elsewhere.html %}
	</aside>
</div>
