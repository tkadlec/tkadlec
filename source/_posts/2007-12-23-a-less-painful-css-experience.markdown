---
comments: false
date: 2007-12-23 19:00:00
layout: post
slug: a-less-painful-css-experience
title: A Less Painful CSS Experience
wordpress_id: 89
categories:
- CSS
tags:
- css
---

CSS can be a tricky little fellow. It's easy to learn, but difficult to master. There are, after all, 122 CSS Level 2 Properties. Add to that pseudo-classes, selectors, inheritance, and specificity, and you have yourselves quite a bit of information to try and remember. Here are a few things that have made CSS development a little smoother for me, and hopefully they can do the same for you.


## Know the common bugs


Different browsers will handle CSS differently. This is something every CSS developer learns early on, sometimes painfully. Make sure when you come across a bug you force yourself to take a few minutes to look into it and gain an understanding of what is causing the problem. You will be surprised by how few fancy CSS hacks you will have to resort to if you know how to dodge the problems in the first place.


## Check your work often


After every couple rules you put into your stylesheet, you should be checking each browser you have access to so you can see what effect the rule had on the layout. The worst thing you can do, in my opinion, is to create your CSS entirely and then check it in each browser. Now you have to wade through all your CSS and try to find where the problem is coming from. However, if you are checking your work after every couple rules, you will have a pretty good idea where the problem lies, and you will be able to fix it that much more quickly.


## Know your resources


This may be the most important tip here. Like I said, with so many selectors, properties, bugs, etc. to try and memorize, you will undoubtedly have to turn for help on many occasions. It becomes important for you to know where you can find a solution, and where the solution will be explained in detail enough for you to understand it and be able to avoid it in the future. For example, when I run across a bug that I am not familiar with, the first place I turn to is [Position Is Everything](http://www.positioniseverything.net). They have wonderful write-ups on various bugs you will find in different browsers. If I just need to lookup a CSS property that I don't use very often, then I turn to ["CSS: The Definitive Guide"](http://www.amazon.com/gp/product/1590595335?ie=UTF8&tag=timkadcom-20&linkCode=xm2&camp=1789&creativeASIN=1590595335), by Eric Meyer. You need to know the places like this that you can turn to for answers.


## Know how to troubleshoot


Knowing how to find the problem is half the battle. There's plenty of ways to go about doing this, so you just have to find the techniques that work for you. While I can say that I haven't ever used diagnostic styling quite to the extent that Eric Meyer posted in his [24ways article](http://24ways.org/2007/diagnostic-styling), I am a huge fan of using bright colored borders on my block elements to help me locate problem areas. Commenting out blocks of code at a time can also help a lot when trying to find out what elements have the troublesome styles applied to them. And I cannot recommend the [Web Developer Toolbar extension](https://addons.mozilla.org/en-US/firefox/addon/60) for Firefox highly enough. I am so attached to that thing and its many useful troubleshooting features now that it pains me to work on a computer without it.


## Show patience and have a sense of humor


Don't worry if it seems like it is taking forever to get to the point where you don't have to look up every little bug. Patience, young Padawan. There are a lot of bugs out there, and it can take awhile before you get to a point where you can recognize one right away.

No matter how much you know, how many books you've read, or how many designs you've developed, there will still come times where a problem comes up that stumps you for awhile. There is just too much information to digest for you to expect to never run into problems. That's when you just need to grin and bear it. Keep plugging away and be willing to laugh at simple mistakes you may make along the way. If CSS wasn't challenging at times, wouldn't that take some of the fun out of it?
