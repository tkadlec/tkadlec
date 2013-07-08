---
comments: true
date: 2010-12-08 20:04:03
layout: post
slug: a-series-of-trade-offs
title: A Series of Trade-offs
wordpress_id: 818
tags:
- coding
- semantics
- standards
- process
---

Jeremy Keith recently wrote a post about some of the [false dichotomies in web development](http://adactio.com/journal/1714/). When faced with two options, we are often presented with a solution that paints one option black and one white as if there was no middle ground. I've attempted to write a post along a similar lines many times, though to be perfectly honest, none of my drafts painted the scene quite as well as Jeremy did:


> In the world of web development, there are many choices that are commonly presented as true or false, black and white, Boolean, binary values, when in fact they exist in a grey goo of quantum uncertainty.


What prompted my thoughts on the subject (at least recently) was a post on Simply Accessible entitled [Speed vs. Accessibility](http://simplyaccessible.com/article/speed-vs-accessibility/). In the post, Derek Featherstone tells a story of someone who went so far as to change their markup, in a manner that made it significantly less semantic, in order to save a few bytes in file size and therefore improve performance. The result? They saved about 50 bytes, but lost contextual meaning and reduced accessibility. This lead Derek to ask if it had to be speed _or_ accessibility (by the way, the answer is no—they can coexist).

The truth of the matter is, web development is a series of trade-offs. Sure, some best practices overlap between say, performance and accessibility. Many, however, do not. To make an educated decision requires a healthy level of knowledge both of the project being worked on, and of these concerns (semanticity, accessibility, performance, etc.) and their implications. Knowing what is most important to a project will give you a roadmap to follow when you inevitably have to decide which trade-offs to make.

It's for this reason that I give little credence to the many one-sided argumentative posts you will see online. The goal should always be to be as semantic as possible, but you should also strive to be as performant, as accessibile and as well designed as possible. For example, anyone who reads my blog knows how seriously I take performance. In my opinion however, I would never be willing to adjust my markup as the person in Derek's story did in order to shave a few bytes of my HTML. I may be a performance zealot, but to me, having a well structured page is the base from which I prefer to build off of. I believe a well marked up document provides the ideal starting point for optimal semantics, accessibility, performance and maintainability. This means that my sites will never be quite as peformant as they could be and I'm ok with that. I'll do my best to optimize my site in ways that I think maximize my gains and have a minimal negative impact on my markup. There are many far more effective ways to optimize my site without having to pay such a steep price.

So by all means, find something you feel strongly about—learn about it, share your knowledge with others, become a strong advocate for it, but always remember that web development requires a balance. Find a solid base to build from, determine the considerations most important to the project and always keep those in mind as you make your decisions about what trade-offs to make.
