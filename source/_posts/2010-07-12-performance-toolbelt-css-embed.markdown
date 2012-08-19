---
comments: true
date: 2010-07-12 17:30:29
layout: post
slug: performance-toolbelt-css-embed
title: 'Performance Toolbelt: CSSEmbed'
wordpress_id: 576
categories:
- Performance
tags:
- performance
---

One of the biggest keys to improving the load time of your site is minimizing the number of HTTP requests. There's a lot of overhead involved with each request, and many requests can very quickly slow down your site. One great way to eliminate extra requests is to use data URIs instead of images. If you want the nitty-gritty on what data URIs are, and how to use them, there are a few excellent posts by [Stoyan Stefanov](http://www.phpied.com/data-urls-what-are-they-and-how-to-use/) and [Nicholas Zakas](http://www.nczonline.net/blog/2009/10/27/data-uris-explained/) that walk you through the details.

Data URIs can be tricky to implement efficiently however. Since they are a Base64-encoded representation of an image, there is a built-in level of obfuscation that can make manual maintenance tedious. Thankfully, Nicholas put together a command line tool called CSSEmbed which takes the pain out of using them.

CSSEmbed is a very straightforward tool that parses a stylesheet and converts all references of images to their data URI equivalents. Installation is as simple as [downloading the .jar file](http://wiki.github.com/nzakas/cssembed/) and placing it where you'd like. Then you use a simple command specifying any options, the file to output to, and the file to parse, like so:

`java -jar cssembed.jar -o styles_uri.css styles.css`

Since versions of Internet Explorer prior to IE8 don't support data URIs, you have to use MHTML as a workaround (again, Stoyan has an [excellent post](http://www.phpied.com/mhtml-when-you-need-data-uris-in-ie7-and-under/) with more info). The command for that is very similar — you just need to make sure to declare a "root" (for example, I'd use http://timkadlec.com as my root for this site) which CSSEmbed will use in the MHTML.

`java -jar cssembed.jar -o styles_mhtml.css styles.css --mhtml --mhtmlroot http://timkadlec.com`

Right now, to my knowledge, you can't parse an entire directory of CSS files, but that's about the only thing I can think of that I'd like to see added. It's a great tool to use during an automated build to really simplify the process of using data URIs and I definitely encourage you to go download it and give it a try.
