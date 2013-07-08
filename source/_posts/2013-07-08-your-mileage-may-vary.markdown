---
layout: post
title: "Your Mileage May Vary"
date: 2013-07-08 10:52
comments: true
categories: 
tags: 
- process
- images
- performance
- responsive
---

When we write about technology online, things can sound a bit black and white. Always do this, never do that. 

{% pullquote align:left %}
{"But blog posts and articles can’t cover every scenario. The author knows nothing about your team, your site, your business goals, your deadlines, the behavior of the people who visit your site or the technology they use to visit with."} There are characteristics of projects that may make a prescribed solution inappropriate.
{% endpullquote %}

A great example comes from an email conversation I had with [Ilya Grigorik](http://www.igvita.com/) (who is wicked smart, by the way) in response to my last post [on responsive image weight](http://timkadlec.com/2013/06/why-we-need-responsive-images/). One of the things he mentioned was the gray area of whether or not it was fair to count the entire cost of an undisplayed image as wasted or not.

The example he cited was [Breaking News](http://www.breakingnews.com/popular). On a small viewport the site uses tabs for latest and most popular posts. By default, the latest posts are displayed. These are a series of tweets with no images other than the Twitter avatars. 

The popular—not displayed by default—contains numerous images. Is it fair to say that this weight shouldn’t be loaded by default? That’s questionable. Due to the cost of making a connection on a mobile network, you could easily argue that if the popular tab is frequently used by visitors, those images should be there—maybe not before page load, but certainly shortly after.

It’s an excellent point—and an example of one of the many gray areas on the web. We can’t possibly prescribe the appropriate solution here without knowing a little about the behavior of the visitors to the site.

I recently got to talk with Dave Rupert and Chris Coyier on the [ShopTalkShow](http://shoptalkshow.com/episodes/075-with-tim-kadlec/), and the topic of responsive images came up (as it often does). One thing we each agree on: this isn’t a black and white, binary decision. There are many moving parts and as a result, your mileage may vary (YMMV).  We were talking specifically about responsive images, but that goes for any discussion online.

Read. Learn about the ways people are approaching difficult problems. Learn about what costs are associated with those solutions and compare them to the costs associated with doing nothing. Then go back and experiment. Look at your situation and see what fits and what doesn’t.  

And always remember: YMMV.
