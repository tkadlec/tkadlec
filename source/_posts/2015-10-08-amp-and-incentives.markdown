---
layout: post
title: "AMP and Incentives"
date: 2015-10-08 11:31:00 -0500
comments: true
categories: 
tags:
- AMP
- performance
- standards
---
Incentives are fascinating. Dangle the right carrot in front of people and you can subtly influence their behavior. But it has to be the right carrot. It has to matter to the people you’re trying to influence. Just as importantly, it has to influence the correct changes.

A few years ago there was a story of incentives gone wrong that was making the rounds. The story was about a fast food chain that determined customer service was an important metric that they needed to track in some way. After discussion, they determined that the time it took to complete an order in the drive thru seemed to be a reasonable proxy.

So they set a goal: all drive thru orders needed to be completed within 90 seconds of the cars arrival at the window. They had a timer visible to both the customer and the server. If the timer went over 90 seconds, the time would be recorded and then reported back to corporate headquarters.

There were some rather silly and unintended side effects. One of the most absurd happened when a customer informed the server that part of their order was missing. The server had the customer first drive forward a few feet, and then back up to the window. This way, the timer reset and it wouldn’t be flagged as a slow order in the reports.

It’s silly. But the incentives being applied encouraged this sort of….let’s call it creativity. The incentives were intended to encourage better customer service, but by choosing the wrong method of encouragement, they influenced the wrong kind of change.

Yesterday morning the [Accelerated Mobile Pages (“AMP”) Project](https://www.ampproject.org/) was announced to a loud chorus of tweets and posts. The AMP Project is an open source initiative to improve performance and distribution on the mobile web. That’s a very fancy way of saying that they aim to do for the web what [Facebook Instant Articles](https://instantarticles.fb.com/) does for…well…Facebook.

I’ll be completely honest: when I first started reading about it I was viewing it as basically a performance version of the [Vanilla JS](http://vanilla-js.com/) site. A “subset of HTML”, no JavaScript—it sounded very much like someone having a little too much fun trolling readers. It was only after seeing the publishers who were associated with the project and then looking at the [GitHub repo](https://github.com/ampproject) that I realized it was a real thing.

AMP provides a framework for developers to use to build their site with good performance baked in—not entirely unlike Bootstrap or Foundation does for responsive design.

To build a “valid AMP page” you start by using a subset of HTML (carefully selected with performance in mind) called AMP HTML. You also use the AMP JavaScript library. This library is responsible for loading all external resources needed for a page. It’s also the only JavaScript allowed: author-written scripts, as well as third party scripts, are not valid.

If you want to load resources such as images, videos or analytics tracking, you use the provided web components (branded as AMP Components).

By enforcing these conditions, AMP retains tight control of the loading process. They are able to selectively load things that will appear in the initial viewport and focus heavily on ensuring AMP pages are prerender and cache friendly. In return for having this level of granular control, they give up browser optimizations like the preloader.

To further help achieve the goal of “instant load”, Google is offering to provide caching for these AMP pages through their CDN. It's free to use and publishers retain control of their content.

The result is pretty impactful. The AMP Project is reporting some rather significant improvements for publishers using the AMP pages: anywhere from 15-85% improvement in Speed Index scores when compared to the original article.

So from a performance standpoint, the proposition is pretty clear: buy into AMP’s tools and approach to development and in return you’ll get a fast loading page without all the hassle of actually, you know, optimizing for performance.

There’s not anything particularly revolutionary about this. The Google caching is notable in that it is free, but other than that it appears to be nothing more than any CDN can do for you. You can build your sites to be prerender and cache friendly. You can limit your use of JavaScript. You can carefully select your HTML and write your CSS with the goal of performance in mind. You can do all these things all by yourself (and in fact you should be doing all of these things).

There is also nothing too exciting about the claim that using a subset of the web’s features will improve your performance. Kill JavaScript on any traditional article page out there and you’ll likely see very similar returns.

The advantage that AMP has over anyone else who might try to make similar claims is that AMP provides clear incentive by promising better methods of distribution for AMP content than non-AMP content.

The distribution model is slightly more fuzzy at the moment than the performance impact, but with a little imagination you can see the potential. The AMP Project is promising a much-needed revenue stream for publishers through soon to be added functionality for subscription models and advertising. Google, for its part, will be using AMP pages in their news and search products at the very least.

There’s a [demo of what the search implementation](https://www.google.com/webhp?esrch=AcceleratedMobilePages::Preview,AcceleratedMobilePagesDesktop::Promo) could potentially look like. (Addy Osmani was kind enough to [make a video](https://www.youtube.com/watch?v=i2_lAEzmOPo&feature=youtu.be) for those who can’t see the demo in their region.)

The demo is definitely impressive ([provided your article uses “valid AMP HTML”](https://twitter.com/bryanrieger/status/651782717676216320)). AMP pages get pulled into a nicely formatted carousel at the top of the search results and pages load instantly when tapped on. It’s exactly the kind of performance I would love to see on the web.

Google does claim they have no plans at the moment to prioritize content that is on AMP pages, but how many of us are going to be surprised to see an implementation like this go live?

AMP has giving performance a “paint-by-numbers” solution. The project has also drawn a very clear line from point A to B: do this, and here’s what we’ll do for you. 

As a result they get to do an interesting thing here: they get to suggest a big, fat “reset” button and have people take them seriously.

This is something [Eric Meyer](https://twitter.com/meyerweb) [saw](https://twitter.com/meyerweb/status/645257708904554497) [coming](https://twitter.com/meyerweb/status/645258191585083392) [with](https://twitter.com/meyerweb/status/645258555822485506) the rise in ad blocking.

> Feels like content blockers are a two-decade reset button, sending us back to 1995 when nobody was sure how to make money publishing online.

> No question that’s scary, but it’s also an opportunity. We can look at what we got wrong in the last 20 years, and try something different.

> It’s kind of a unique moment. How often does an entire industry get an almost literal do-over?

AMP is experimenting with what a do-over would look like. Start fresh. Take all the baggage we’ve been adding, remove it, and then try to collectively come up with something better.

If anyone had suggested hitting “reset” a month ago, I would have found it to be an interesting thought experiment. I may have even gotten a little bit excited about the idea. So why is it that now that it’s here, I find it a bit unsettling?

I think it comes down to incentives.

If you can build a site that performs well without using AMP, then what does AMP offer us? Certainly convenience—that’s the primary offering of any framework. And if AMP stopped there, I think I’d feel a little more at ease. I actually kind of like the idea of a framework for performance.

It’s the distribution that makes AMP different. It’s the distribution that makes publishers suddenly so interested in building a highly performant version of their pages—something they’re all capable of doing otherwise. AMP’s promise of improved distribution is cutting through all the red tape that usually stands in the way.

This promise of improved distribution for pages using AMP HTML shifts the incentive. AMP isn’t encouraging better performance on the web; AMP is encouraging the use of their specific tool to build a version of a web page. It doesn’t feel like something helping the open web so much as it feels like something bringing a little bit of the walled garden mentality of native development onto the web.

That troubles me. Using a very specific tool to build a tailored version of my page in order to “reach everyone” doesn’t fit any definition of the “open web” that I’ve ever heard.

Getting rid of the clutter on the web and improving performance is a very worthy and important goal, as is finding ways to allow publishers on the web to have a consistent revenue stream without derailing the user experience.

But they should be decoupled. Provide tooling to improve performance. Provide a model and method for producing a revenue stream and improving distribution. You can encourage better performance by factoring that into the distribution model, but do that for performance in general—not just performance gained by using a specific set of tools.

There's a smart team behind AMP and I do think there’s value in what they're doing. I’m hopeful that, eventually, AMP will evolve into something that really does benefit the web as a whole—not just a specific version of it.