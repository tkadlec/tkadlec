---
layout: post
title: "Choosing performance"
date: 2015-05-14 11:54:08 -0500
comments: true
categories: 
tags:
- performance
- global
- facebook
---
Facebook just announced a new feature they’re calling [“Instant Articles”](http://instantarticles.fb.com/). Facebook is positioning this as a way for publishers to have their stories displayed, within Facebook, “instantly”:

> Mobile web articles can take an average of eight seconds to load, by far one of the slowest parts of the Facebook app. Instant Articles provides a faster and richer reading experience for people in News Feed.

Now before we wring our hands *too* much over this, it’s worth noting that the articles themselves still *start on the web*. Facebook just becomes a distribution platform. Here’s the exact statement from their FAQ’s (emphasis my own):

> Instant Articles is simply a faster, mobile-optimized way to publish and distribute stories on Facebook, and it supports automated content syndication using standards like HTML and RSS. **Content published as Instant Articles will also be published on the publishers’ websites.**

From Facebook’s perspective this is a no-brainer. It keeps the content within Facebook’s environment, which is one less reason for Facebook’s users to ever leave the app or site. In addition, we have numerous case studies showing that improved performance improves engagement. So Facebook creating a way to display content—very quickly and within their own little garden—makes absolute sense for them.

What I find interesting is the emphasis on speed. There are a few interesting interactive features, but speed is the selling point here. Facebook is pushing it very, very hard. “Fast” is scattered throughout their information about Instant Articles, and emphasized very heavily in the promotional video.

I’m all for fast as a feature. It makes absolute sense. What concerns me, and I think many others based on reactions I’ve seen, is the fact that Facebook very clearly sees the web as too slow and feels that circumventing it is the best route forward.

Here’s the thing: they’re not entirely wrong. The web *is* too slow. The median SpeedIndex of the top 1000 websites (as tested on mobile devices) is now 8220 according to [HTTP Archive](http://httparchive.org/) data from the end of April. That’s an embarrassingly far cry from the [golden standard of 1000](http://timkadlec.com/2014/01/fast-enough/#comment-1200946500).

And that’s happening in spite of all the improvements we’ve seen in the last few years. Better tooling. Better browsers. Better standards. Better awareness (at least from a cursory glance based on conference lineups and blog posts). Sure, all of those areas have plenty of room for improvement, but it’s entirely possible to build a site that performs well today.

So why is this a problem? Is the web just inherently slow and destined to never be able to compete with the performance offered by a native platform? (Spoiler: No. No it is not.)

Another recent example of someone circumventing the web for performance reasons I think gives us a clue. Flipkart, a very large e-commerce company operating in India, recently [jettisoned their website (on mobile devices) entirely](http://www.livemint.com/Industry/J9VeQxowSOlHU8ZMUParUL/Flipkart-moves-towards-becoming-apponly-platform.html) in favor of Android and iOS apps and is planning to do the same with their desktop site. Among the reasons cited for the decision, the supposedly better performance offered by native platforms was again a primary factor:

> Our app is designed to work relatively well even in low bandwidth conditions compared to the m-site.

Had I been in that interview my follow-up question would’ve been: “Well then, why don’t you design your website to work well even in low bandwidth conditions?” Alas, I was not invited. 

But this quote is really the best indicator of why the web is so slow at the moment. It’s not because of any sort of technical limitations. No, if a website is slow it’s because performance was not prioritized. It’s because when push came to shove, time and resources were spent on other features of a site and not on making sure that site loads quickly.

This goes back to what many have been stating as of late: performance is a cultural problem.

While this is frustrating, this is also why I’m optimistic. The awareness of performance as not merely a technical issue but a cultural one, has been spreading. If things are progressing a little slower than I would like, it’s also fair to point out out that cultural change is a much more difficult and time consuming process that technical change. The progress may be hard to see, but I believe it is there.

We need this progress. Circumventing the web is not a viable solution for most companies—it’s merely punting on the problem. The web continues to be the medium with the highest capacity for reach—it's the medium that can get into all the little nooks and crannies of the world better than any other.

That's important. It’s important for business, and it’s important for the people who need it to access content online. It's unfair, and frankly a bit naive and narcissistic, to expect anyone who wants to read your articles or buy from your company to A) be using a specific sort of device and then B) go and download an app onto that device to accomplish their goal. The reach and [openness](https://adactio.com/journal/8735) of the web well worth preserving.

Scott Jehl had a [beautiful tweet rant](https://twitter.com/scottjehl/status/598849572522348545) prompted by Facebook’s announcement. The one that stuck with me the most [was this one](https://twitter.com/scottjehl/status/598853645371908096):

> So yeah, I think any criticism of the web’s terrible performance is totally valid. We can choose to do better, but our focus is elsewhere.

Scott's right: performance is a decision. We actively choose whether to devote our time and energy to improving it, or to ignore it and leave it up to chance.

Let’s choose wisely.