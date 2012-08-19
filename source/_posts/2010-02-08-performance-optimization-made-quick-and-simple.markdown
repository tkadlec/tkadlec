---
comments: true
date: 2010-02-08 00:00:23
layout: post
slug: performance-optimization-made-quick-and-simple
title: Performance Optimization Made Quick and Simple
wordpress_id: 236
categories:
- Performance
tags:
- performance
---

Optimizing your site's performance doesn't have to be very difficult. Take this site for example. Typically, I take care of optimization as part of the build process. However, for the sake of demonstration, I thought this time around I'd take care of each step by itself, using freely available tools where applicable.

First off was setting expires tags and turning gzipping on. Since I've done this in too many .htaccess files to count, this was simply a copy/paste job with very little tweaking necessary.

Then, I decided to optimize the images (what few there are). I ran [Smush.It](http://developer.yahoo.com/yslow/smushit/) from the [YSlow](http://developer.yahoo.com/yslow/) tool in Firefox. That compressed the images which I then downloaded to my computer and then promptly pushed right back up to the server. It took me 5, maybe 10 minutes and it cut the image size by about 33% total.

The icons for the RSS, Twitter and LinkedIn links in the footer were separate images - each requiring its own HTTP request. By using the [SpriteMe](http://spriteme.org/) bookmarklet, I was able to generate a new sprite and the necessary CSS in a few minutes and trim those 3 HTTP requests down into one. I also ran [OptiPng](http://optipng.sourceforge.net/) from the terminal window on my Mac on the new sprited image to shave off about 40% of the size.

I then minimized the CSS and Javascript (what little I was using) using [OMG](http://www.phpied.com/omg-initial-checkin/), which shaved ~30% off the file size of each.

Without any of these optimizations, my YSlow grade was a C and my page size was about 150K. After the 1/2 hour investment (if that...I'm being generous here) my YSlow grade came in at an A with a page size around 80K. Not bad for such little work.

There's much more I can, and will, do here (caching, data-uri's, etc.) but the moral of the story is that not optimizing your sites because it takes too long is just no longer an argument you can use. Make use of the tools available to you, and it's downright scary how quickly you can speed up a site.
