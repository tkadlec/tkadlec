---
comments: true
date: 2010-03-30 17:22:44
layout: post
slug: performance-toolbelt-spriteme
title: 'Performance Toolbelt: SpriteMe'
wordpress_id: 289
categories:
- Performance
tags:
- performance
---

As I mentioned in a [prior post](http://timkadlec.com/2010/02/performance-optimization-made-quick-and-simple/), there are a lot of really good tools available to developers to aid in making performance optimization quick and easy. I've decided to highlight some of my favorite tools that I've come across and thought I'd kick things off with [Steve Souders](http://souders.org/) excellent [SpriteMe](http://spriteme.org) bookmarklet.

Having a lot of images in a page can be very costly. Each image requires an HTTP request, and each HTTP request comes with [plenty of overhead](http://www.phpied.com/reducing-the-number-of-page-components/). I've seen pages with 20+ icons, each requiring their own request - that's a serious hinderance to performance.

A way of combatting the issue is to use sprites. For the uninitiated, an image sprite is simply one big image that includes many smaller images. This allows you to make one HTTP request, and using CSS, still make use of a variety of different images. If you plan ahead and do this while initially building the site, it's rather simple to do. How do you quickly implement this strategy in an existing site though?

That's where SpriteMe comes in. Steve Souders wrote a handy bookmarklet that looks through the images on a given page and identifies those that could potentially be combined into a sprite. At that point, it gives you a simple drag and drop interface with which you can add or remove items from a sprite. Once you've determined which images you'd like to combine, you can click "make sprite" and the bookmarklet will automatically create the image sprite for you, inject it into the page, and show you the CSS you'll need to add.

From there it's as simple as downloading the image and copying the CSS the tool provides into your stylesheet (I believe the ability to export the CSS is being worked on). On one recent project, I used SpriteMe to create a sprite from ~25 images that were being used in the site's navigation in about 15 minutes of work. The only additional step I took was to run the generated sprite through OptiPng to shave some filesize off (I'll talk about OptiPng in another post).

So what are the downsides? Not too much. I'd love to see it do some optimization on the sprites it produces - in the example I gave above, OptiPng shaved ~40% off the file size off. I'd also be willing to bet that the tool produces a bit more whitespace than is optimal or necessary in it's sprites resulting in more [memory usage](http://blog.vlad1.com/2009/06/22/to-sprite-or-not-to-sprite/). To be fair, I haven't tried to remove some of that excess whitespace to determine how big of a deal it really is.

All things considered, these are minor issues. I can easily run an image optimization tool on the produced sprite to fix that up, and it's not like there's THAT much whitespace - just probably a bit more than needed. These are, in my opinion, minor tradeoffs for the incredible convenience this tool provides.
