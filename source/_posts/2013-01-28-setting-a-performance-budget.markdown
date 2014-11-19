---
layout: post
title: "Setting a performance budget"
date: 2013-01-28 13:40
comments: true
categories: 
tags: 
- performance
- performance budget
---
Jason Grigsby [once quipped](http://www.slideshare.net/grigs/native-is-easy-web-is-essential/51) that "We've remade the Internet in our image….obese." He was right, of course. Average page weight and number of connections has been increasing at a rather alarming rate.

This is why I've been so happy to see the recent rash of posts discussing performance as a fundamental component of design. [The latest comes from Mr. Brad Frost](http://bradfrostweb.com/blog/post/performance-as-design/). He makes the case that performance is not just something developers need to worry about, but that it is an "essential *design* feature."

One of the things he suggests doing is mentioning performance in project documents. 

> Statements of work, project proposals and design briefs should explicitly and repeatedly call out performance as a primary goal. “The goal of this project is to create a stunning, flexible, lightning-fast experience…”

It's an excellent point. Performance should be brought up early and often to emphasize its importance. Not considering it from the earliest stages of a project is a surefire way to end up with slow and bloated sites. A decision made early on about the visual appearance of a site can have a serious impact on how the site itself will end up performing.

Early in the project, saying things like "lightning-fast experience" is probably sufficient. At some point you need to get a little more direct though.

Enter the performance budget. I've [mentioned this before](http://24ways.org/2012/responsive-responsive-design/), but it's worth discussing in a bit more detail.

A performance budget is just what it sounds like: you set a "budget" on your page and do not allow the page to exceed that. This may be a specific load time, but it is usually an easier conversation to have when you break the budget down into the number of requests or size of the page.

The BBC did this with their responsive mobile site. They determined that they wanted each page to be usable within [10 seconds on a GPRS connection](https://speakerdeck.com/tmaslen/moving-swiftly-the-story-of-how-bbc-news-fell-in-love-with-responsive-web-design#63) and then based their goals for page weight and request count on that.

Once those goals are set, you stick to them. Anytime you want to add something to a page, you need to ensure it stays within budget. [Steve Souders talked](http://fsm.bdconf.com/podcast/web-performance) about the three options you have if something does not fit within the budget: 

1. Optimize an existing feature or asset on the page.
2. Remove an existing feature or asset from the page.
3. Don't add the new feature or asset.

Just be sure to define the budget early on. Defining a performance budget after you've already finalized the appearance of a site limits its effectiveness. It may still help to guide decisions about plugins and so on, but deciding a page can't exceed 500kB when a mock-up containing three carousels and a full-screen high-resolution background image has already been approved isn't going to do you much good.

Clearleft recently wrote an excellent post about [their experience with using a performance budget](http://clearleft.com/thinks/responsivedesignonabudget/) and how it impacted their project:

> The important point is to look at every decision, right through the design/build process, as something that has consequence. Having a pre-defined ‘budget’ is a clear, tangible way to frame decisions about what can and can’t be be included, and at a suitably early stage in the project. It can also potentially provide some justification to the client about why certain things have been omitted (or rather, swapped out for something else).

That's the value of a performance budget: it provides a framework for discussions as you move forward. It serves as a point of reference as you decide what components should, and shouldn't, get added to a page.

It's worth noting that I'm assuming you have already determined what content needs to be on the page to begin with. A performance budget doesn't guide your decisions about *what* content should be displayed. Rather, it's about *how* you choose to display that content. Removing important content altogether to decrease the weight of a page is not a performance strategy.

As Brad stated, it's time to give performance the attention it deserves and setting a budget is an excellent place to start.