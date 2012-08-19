---
comments: false
date: 2008-09-10 19:00:00
layout: post
slug: getting-started-with-the-canvas-element
title: Getting Started with the Canvas Element
wordpress_id: 51
categories:
- Javascript
tags:
- (x)html
- html5
---

There's a lot of really exciting and interesting features arriving just around the corner in the world of web development. One of the new features that is receiving a lot of attention, and for good reason, is the new canvas element. The canvas element offers a lot of power to web developers, but can take a bit for some people to get comfortable with. So, I'm going to run a series of posts introducing this powerful new feature, and showing some of the ways it can be utilized.


## What Is It, and Who Supports It?


The canvas element was originally implemented in Safari, and then became standardized in the HTML5 specification. The element allows developers to dynamically draw onto a blank 'canvas' in a website. Thankfully, you don't have to wait to play around with this element. Currently, you can find support for it in Firefox (version 1.5 and newer), Safari, or Opera (version 9 and newer). In addition, you can twist IE's arm a bit thanks to Google and Mozilla. Google has created [ExplorerCanvas](http://excanvas.sourceforge.net/), a script that allows your canvas scripts to work in IE. For more intensive applications, Mozilla created has created an [ActiveX plugin](http://arstechnica.com/news.ars/post/20080819-mozilla-drags-ie-into-the-future-with-canvas-element-plugin.html) for IE to bring canvas support to the widely used browser. So, there's little reason why you can't start using it today....Google Maps does!

Unfortunately, there is some discrepancy in the way browsers support the canvas element right now. For example, in Safari, the canvas tag works a lot like the img tag...it doesn't require a closing tag. In Safari, you can close the element like so:



In Firefox, however, the canvas element requires a closing tag:

The problem comes in with alternate content. In Firefox, we can simply throw our alternate content in between the opening and closing canvas tags. If the browser doesn't support the canvas element, then the alternate content displays. In Safari, the content displays regardless. There are a few ways you can hack around this however, including this one presented by [Matt Snider](http://mattsnider.com/languages/javascript/intro-to-html-canvas-tag/).


## Why It's Cool


The canvas element is not meant for static images...though it can certainly be used to do that. The real power of it comes when we make use of Javascript to manipulate the canvas element and create dynamic visualizations like data charts and graphs, interactive diagrams and games. In fact, there are a couple impressive Javascript game recreations that have already been developed that make use of the canvas element. You can already play [Mario Kart](http://www.nihilogic.dk/labs/mariokart/), [Super Mario](http://blog.nihilogic.dk/2008/04/super-mario-in-14kb-javascript.html), and an incredibly addicting game called [Ooze](http://www.gamesforthebrain.com/game/oooze/).

The canvas element is a great example of where implementation precedes standardization. Safari implemented it, then Firefox and Opera caught on, and now the WHAT-WG is incorporating it into the HTML5 specification. Once implemented, it provides us with a standardized, cross-browser means to dynamically display data and react to user events in a way that previously required Flash.


## What's Coming Up


Next time around, we'll start to look at the canvas element in more detail including the attributes available. We'll also start diving into some Javascript and some of the methods provided by the DOM to interact with the canvas element.
  *[WHAT-WG]: Web Hypertext Application Technology Working Group
