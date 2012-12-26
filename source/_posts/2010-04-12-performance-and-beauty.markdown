---
comments: true
date: 2010-04-12 17:57:23
layout: post
slug: performance-and-beauty
title: Performance and Beauty
wordpress_id: 345
categories:
- Performance
tags:
- performance
---

By now I'm sure that most of you have heard about the [recent announcement](http://googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html) by Google that speed is officially a factor in their rankings. This seems to have caused a little bit of panic amongst some people in the web community.

One web guru who you may have heard of, Jeffrey Zeldman, posted an [article](http://www.zeldman.com/2010/04/11/of-google-and-page-speed/) on Sunday wherein he describes the choice he feels designers are now faced with:


> So now we face a dilemma. As we continue to seduce viewers via large, multiple background images, image replacement, web fonts or sIFR, and so on, we may find our beautiful sites losing page rank.


It's a fair enough point to make  - sometimes a designer will need to make a decision between additional aesthetic effects and improved performance (but not that often). What followed in the comments was disturbing though - many people were actually viewing Google's move as a negative thing and seemed to be very worried about it's effects.  Some felt Google was simply abusing their power, others believed they'd have to sacrifice good design in order to receive a decent ranking. The situation, I think, needs a little diffusing.


## Deep Breaths People


First, let's remember that Google themselves have said that this addition to their algorithm affects less than 1% of their search queries. That means that while it is a factor, it is certainly not the most important one. It also means that while Google wants to display sites that perform well, their standards are probably not that high. If they were, there'd be a lot more sites being penalized in the rankings.

Secondly, this is a great move by Google and is fantastic news for users. Study after study has demonstrated that users really care about how well a site performs. It's been shown that performance has an effect on bounce rate, purchase amounts, queries per user, credibility and more. If Google really cares about presenting their users with the best content, then this was a great demonstration of that belief.


## You Can Have Your Cake and Eat It Too


Finally, there's no need to panic - a site can be beautiful and still perform very well. For an example, let's look at Happy Cog's own [visitphilly.com](http://www.visitphilly.com/), both because it is a beautiful site, and because this conversation was started on Zeldman's blog.

A quick look lets us identify some easy improvements. For one, there are 47 CSS background images. A quick run through [SpriteMe](http://spriteme.org/) trims that number down to 15.

There are also 7 scripts being called, 3 of which are unminified. At least a few of the seven could be concatenated to reduce some more requests and running the 3 unminified scripts through a compressor shaves a whopping 54% percent off their combined size. Finally, by running the images on the home page through [Smush.It](http://smush.it/), we eliminate another 133KB of baggage.

When you add those fixes together, the performance of the site would be dramatically improved, and the visual experience would not be diminished at all. It would be indistinguishable from the unoptimized version in every way, except that it would load significantly quicker.

So in summary, performance and beauty are not mutually exclusive. By taking performance into consideration, Google is not making the web a difficult place for designers; they're simply making the web a more usable and less frustrating place for users.
