---
layout: post
title: "Being Practical"
date: 2013-08-01 10:59
comments: true
categories: 
tags:
- accessibility
- performance
- progressive enhancement
---
There are many books, articles and presentations that have influenced the way I approach the web today. Its always been one of my favorite parts of this community: a willingness and eagerness to share what we learn with each other. So many blog posts, online publications, and presentations continually challenged me to move forward by presenting new techniques and ways of thinking about the technology I used on a daily basis. 

One of the ones that stands out is Nate Koechley’s “Professional Frontend Engineering” presentation ([transcript](http://dancewithnet.com/snapshot/nate-koechley-professional-frontend-engineering/) and [video](http://www.yuiblog.com/blog/2009/03/18/video-koechley-prof2e/)). When he first gave the presentation in 2008, he was working at this massive company called Yahoo! and was preaching about the importance of progressive enhancement, graded browser support, and the massive scope of knowledge a professional front-end engineer needed to know. 

I mean, just listen to some of the wisdom that is just as relevant, if not more so, today.

On the first of Yahoo’s guiding principles:

> First is availability — this is the bedrock of building a website. If the site’s not available to people, game over, we might as well not even bother. And so our job is to make sure that everything we do is out there, working, available to everybody. This needs to be true regardless of where they are in the world, or what special circumstances they may be under — everything needs to be available and accessible. And I purposely used the word availability — you hear a lot of talk about accessibility, but availability applies to everybody, and it’s an umbrella term that encompasses accessibility also. And so I like to think about just making the sites available to everybody, whatever that entails.

On another Yahoo! guiding principle, richness:

> Another thing to keep in mind about richness, as a developer, is that you’re probably not the average user. Here at Yahoo!, we sit on top of a tremendously fat internet connection – everything’s blazing fast, many of us work on brand new hardware with lots of memory — and so as we’re doing rich JavaScript development, as I’m writing lots of software that gets executed in the browser, it may work really well for us, but we need to remember that different people have different sort of equipment, and bandwidth, and so forth. And so remember that — that’s another reason to build in the layers, and to make things defensive.

On building things that are stable and future friendly:

> The web is young; we don’t know what’s coming around the corner. We don’t know what’s going to be invented next, what technology’s coming next. And so it’s important to continually invest in stability, in strong infrastructure, in stable code, so that we have that strong platform to stand on as the next thing happens. So by focusing on stability, you’re really investing in your future, and again, preparing for that future — whatever it might bring.

On support not being binary:

> When I was doing agency work, before joining Yahoo!, I would often get asked at the beginning of a project: “which browsers do we need to support on this project? Are we going to support Netscape 4? Are we going to support IE 5 on the Mac?” And it was always asked in a binary sense, where the answer is either yes or no. And we realized over time that that’s counter to our goal of maximum availability – if we’re ever choosing not to support a particular browser, that means we’re choosing to have less than complete availability. So that was the first thing that we had to understand, is that support is not binary. The second thing we had to understand is that support doesn’t mean identical. Forcing every pixel to be in the exact same place on every user agent in the world isn’t what it means to support the user agent. Instead, to support a browser, we want to give the browser what it can handle, in the most efficient way possible.

And finally, on users: 

> And then finally, and I think most importantly, is that for me, front-end engineering comes down to supporting users. It’s our job to make sure that they have a great user experience. If they’re using a screen reader, I want to make sure that they’re having the best possible experience with all of our websites. If they’re using a particular browser, or if they want their font bigger, or if they’re on a mobile device — it’s our job to give them that great experience...We want to have stubborn empathy for what they need, and what they want, and what they’re going through — what can we do to make all that better?

Seriously, this stuff is pure gold **especially** today. 

That was 2008. [A Dao of Web Design](http://alistapart.com/article/dao) was written by John Allsopp in 2000. Nick Finck and Steve Champeon first [coined the term “progressive enhancement”](http://www.hesketh.com/thought-leadership/our-publications/inclusive-web-design-future) in 2003. That’s how long people have been arguing for embracing the nature of the web—embracing its flexibility, instability, and unpredictability. That’s also how long so many have been resisting it.

[In my last post](http://timkadlec.com/2013/07/crippling-the-web/), I argued for embracing the web’s ubiquity. Many comments, while not unexpected, were still a bit discouraging. Some said it wasn’t practical. Some stated that not everyone “has the luxury” of thinking about it. Similar comments seem to come up whenever this topic gets discussed.

The many developers who have been pushing for this general approach for over a decade weren’t doing this because it was impractical. On the contrary, these philosophies (Key distinction here: philosophies, not specific techniques. [Techniques have a far more limited shelf-life.](http://futurefriend.ly/come-aboard.html#philosophy-first)) that made sense then and still make sense today have been promoted for so long because they *are* practical. Because building sites that do not consider what happens when situations are not ideal is a sure-fire way to cause headaches. I’ve been there myself and it’s never fun.

When we dismiss the less-than-ideal situation, we dismiss traits inherent in the very platform we’re building for. And whenever you do that you open the door for trouble. 

Is there a cost associated in building robust sites? Yes, though it’s not nearly as bad as many seem to think. As with anything, the more you learn the quicker the process will go. Eventually, it just becomes the way you work. I remember going through this with CSS. At first it was a beast and yeah, building with tables was easier. But as I learned more and more about the spec, about how browsers behaved, and about how to make my process efficient, that time gap gradually reduced itself to being minimal, at most.

There is also a cost involved with *not*  building sites this way. In a [comment on my last post](http://timkadlec.com/2013/07/crippling-the-web/#comment-982895616) I referenced the Boston Globe and [how it appears on Google Glass](https://twitter.com/wilto/statuses/351812298010132481). The point is not that we all need to be testing on Google Glass—time will tell how well that device does. The point is that here is a brand new device and form factor and they didn’t have to do a single thing to have get their site working on it. If Glass takes off perhaps they may see a way (and a value) to optimize for it further, but what people currently see is a perfectly acceptable and usable experience.

Others who made assumptions about capabilities, support, networks, etc are going to be scrambling to fix bugs and make their site just “work”. Meanwhile the folks at the Globe are going to be busy making improvements to their experience—adding new enhancements that make the experience even more awesome. That, and seeing how they can use Glass to punk each other.

When topics like this come up, we focus a lot on the benefits for people with less than ideal situations. That appeals to some of us (it does to me!) and less so to others. For those unmoved by that, consider this: by building something that can handle less than ideal circumstances, by removing assumptions from your development process, you make your site better equipped to handle the unpredictability of the web’s future.

Building something that will hold up as new devices and browsers come onto the scene—that seems like something practical that we can all get behind.
