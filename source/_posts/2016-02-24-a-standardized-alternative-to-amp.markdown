---
layout: post
title: "CPP: A Standardized Alternative to AMP"
date: 2016-02-24 13:39:24 -0500
comments: true
categories: 
tags: 
- AMP
- performance
- standards
---
It’s no secret that [I have reservations](https://timkadlec.com/2015/10/amp-and-incentives/) about Google’s [AMP project](https://www.ampproject.org/) in its current form. I do want to make it clear, though, that what bothers me has never been the technical side of things—AMP as a performance framework. The community working on AMP is doing good work to make a performant baseline. As with any framework, there are decisions I agree with and some I don’t, but that doesn’t mean the work isn’t solid—it just means we have different ways of approaching building for the web.

But that’s the beauty of the web, isn’t it? It’s not just that anyone, anywhere can consume the information on the web—that’s fantastic and amazing, but it’s not the complete picture. What makes the web all the more incredible is that anyone, anywhere can contribute to it. 

You don’t need to go through some developer enrollment process. You don’t need to use a specific application to build and bundle your apps. At its simplest, you need a text editor and a place to host your site.

That’s it. The rest is up to you. You can choose to use jQuery, SASS, React, Angular or just plain old HTML, CSS and JavaScript. You can choose to use a build process, picking from one of numerous available options based on what works best for you. Certainly everybody has their own opinion on what works best but in the end it’s your choice. The tools are up to you.

That’s not the case with AMP as it stands today. While I’ve heard many people claim that the early concerns about tying better methods of distribution to AMP were unfounded, that’s the very carrot (or stick depending on your point of view) that they’re dangling in front of publishers. There have been numerous rumblings of AMP content being given priority over non-AMP content in their search engine rankings. Even if this ends up to not be the case right away, they have certainly emphasized the need for valid AMP documents in order to get into [Google’s “search carousel”](http://www.wired.com/2016/02/google-will-now-favor-pages-use-fast-loading-tech/)—something any publisher clearly would like to benefit from.

This differs from similar announcements in the past from Google about what they prioritize in their search ranking algorithms. We know they like sites that are fast, for example, but they’ve never come out and said “You must use this specific tool to accomplish this goal”. Up until now.

By specifying the specific tool to be used when building a page, Google makes their job much easier. There has been no simple way to verify a certain level of performance is achieved by a site. AMP provides that. Because AMP only allows a specific set of elements and features to be used, Google can be assured that if your page is a valid AMP document, certain optimizations have been applied and certain troublesome patterns have been avoided. It is this verification of performance that gives Google the ability to say they’ll promote AMP content because of a better experience for users.

So when we look at what AMP offers that you cannot offer yourself already, it’s not a high-performing site—we’re fully capable of doing that already. It’s this verification.

##Content Performance Policies

I’d like to see a standardized way to provide similar verification. Something that would avoid forcing developers into the use of a specific tool and the taste of “walled-garden” that comes with it.

There were several discussions with various folks around this topic, and the option I’m most excited about is the idea of a policy defined by the developer and enforced by the browser. We played around with name ideas and Content-Performance-Policy (CPP) seemed like the best option.

The idea is that you would define a policy using dedicated directives (say….no hijacking of scroll events) in either a header or meta tag. The browser could then view this as a “promise” that the site adheres to the specified policy (in this case, that it doesn’t hijack any scroll events).

If the site then tried to break its promise, the browser would make sure that it cannot (e.g. ignore attempts to cancel the scroll event). An embedder, such as a search engine or a social network app, can then be certain that the “promises” provided by the developers are enforced, and the user experience on the site is guaranteed not to suffer from these anti-patterns.

CPP directives could also be used to control what third parties can do on a given site, as well as a way for third parties to provide guarantees that they will “behave”. This way, content owners can be sure that the user experience will not contain obvious anti-patterns even if the page is pulling in scripts and content from a large number of arbitrary third-party sources. 

CPP could borrow from the concept and approach of the already existing Content Security Policies (CSP). This means that there would likely be a reporting-only mode that would allow sites to see the impact the policy would have on their pages before applying it live.

CPP’s would free developers up to use their own tools again and avoid limiting them to the specific subset of web technologies that AMP imposes. Because it uses a set of definable policies versus a specific framework, there is much more flexibility in how browsers and apps choose to enforce and promote content. For example, an app may choose to look for a certain set of policies that would work best for its context while Google may prioritize an entirely different set of policies when considering how a page should be prioritized in their search-engine. It’s far more extensible.

You could also imagine smarter content blockers that let through ads and other third party content guaranteed to be fast and not interfere with the user experience, while blocking third party content without these guarantees. That would allow us to avoid the centralized model of things like the [Acceptable-Ads program](https://acceptableads.org/), while providing a standard way to have the same benefits.

##So...what happens to AMP?

There are too many smart people building AMP to let all that good work go to waste. If we decouple the distribution benefits away from the tool, then suddenly AMP becomes a framework for performance—something it is far better suited to. Developers could choose to use AMP, or a subset of its features, to help them accomplish their performance goals. The difference is that they wouldn’t be forced to use it. It becomes an option.

I’m working with [Yoav Weiss](https://blog.yoav.ws/) to create a formal proposal for CPP’s that can be shared and built up. There's an [extremely early draft up already](http://yoavweiss.github.io/ContentPerformancePolicy/), if you would like to take a look. We’ve discussed the idea with numerous people from browsers and publishers and so far the feedback has been positive. People like the more standardized approach, and publishers in particular like that it feels more open and less like something they’re being forced into.

The idea of CPP is still young and nearly all discussion has happened behind closed doors. So this is us putting it out publicly to get people thinking about it: what works, what doesn’t, what could make it better.

I like the work AMP has done from a technical perspective, and I love the ambitious goal of fixing performance on the web. Let’s find a way of accomplishing these goals that doesn’t lose some of the openness that makes the web so great in the process.