---
layout: post
title: "Thriving in Unpredictability"
date: 2015-06-29 13:45:41 -0500
comments: true
categories: 
tags: 
- progressive enhancement
---
Getting a website successfully delivered to a visitor depends on a series of actions. My server must spit *something* out. That something must be passed over some network. That something must then be consumed by another something: some client (often a browser) on some device. Finally, the visitor views that something in whatever context they happen to be in.

There are a lot of unpredictable layers here.

I have no control over the network. It could be fast, it could be slow, it could be down entirely. 

I have no control over the end device. It could be a phone, a laptop, an e-reader, a watch, a tv. It could be top-of-the line or it could be budget device with low specs. It could be a device released the other day, or a device released 5 years ago. 

I have no control over the client running on that device. It could be the latest and greatest of modern browsers. It could be  one of those browsers we developers love to hate. It could be a proxy browser. It could be an in-app browser.

I have no control over the visitor or their context. They could be sitting down. They could be taking a train somewhere. They could be multitasking while walking down the street. They could be driving (I know). They could be color-blind.

The only thing I control is my server environment. That’s it. Everything else is completely unpredictable.

So when I’m building something, and I want to make it robust—to make it [resilient](https://twitter.com/scottjehl/status/615580565404839936) and give it the best chance it has to reach across this complicated mess full of unpredictability—I want to take advantage of the one thing I control by letting my server output something usable and as close to working as possible. That doesn’t mean it’s going to have the same fidelity as the ideal experience, but it does mean that provided there’s a network at least there’s an experience to be had.

From there I want to do whatever I can to provide offline support so that after that first visit I can reduce some of the risk the network introduces.

I want to apply my JavaScript and CSS with care so that the site will still work and look as good as possible, no matter how capable their browser or device.

I want to use semantic markup to give clients as much information as possible so that they can ensure the content is usable and accessible.

I want to build something that’s lightweight and fast so that my content gets to the visitor quickly and doesn’t cost them a fortune in the process.

I want to ensure that content is not hidden from the visitor so that they can get what they came for no matter their context.

Of course there’s some nuance here in the details, and assumptions will naturally be made at some point. But I want to make as few of those assumptions as possible. Because every assumption I make introduces fragility. Every assumption introduces another way that my site can break.

We used to call that progressive enhancement but I know that’s become a bit of loaded term with many. Discussions online, and more recently at [EdgeConf](https://edgeconf.com/2015-london) have confirmed this. 

I’m not sure what we call it now. Maybe we do need another term to get people to move away from the “progressive enhancement = working without JS” baggage that distracts from the real goal.

We’re not building something to work without JavaScript. That's a short-sighted definition of the term. As both [Paul Irish](https://twitter.com/paul_irish) and [Kyle Simpson](https://twitter.com/getify) pointed out during EdgeConf, it puts the focus on the features and the technology. It’s not about that. 

It’s about the users. It’s about finding ways to make our content [available](http://www.kryogenix.org/code/browser/why-availability/) to them no matter how unpredictable the path that lies between us and them.