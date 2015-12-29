---
layout: post
title: "The Fallacy of Keeping Up"
date: 2015-09-30 10:45:59 -0500
comments: true
categories: 
tags: 
- community
- process
- standards
---
The web has always evolved fairly quickly but as of late it sure feels like the pace has picked up substantially. There are a plethora of new standards and techniques emerging that range from incremental improvements to potentially giant leaps forward. 

We have the mass migration to HTTPS. There’s [HTTP/2](http://http2.github.io/) which provides the first major update to HTTP in over 15 years. Alongside of that we have Google’s [QUIC](https://www.chromium.org/quic) which could provide significant reduction in latency. [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) brings a programmable proxy to the browser. We have more focus than ever on motion design on the web. Improved performance metrics have shifted the discussion to more experience-based optimizations such as [optimizing for the critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=en). We have the shift to [ECMAScript 6](https://github.com/ericdouglas/ES6-Learning). The list goes on and on.

It’s _very_ exciting. But it can also be stressful. 

The other day I tweeted about my [excitement about some of these new standards](https://twitter.com/tkadlec/status/647079705133338624). [Shane Hudson was the first reply](https://twitter.com/ShaneHudson/status/647083409085480960):

> Quite worryingly, some of those words are gobbledegook to me. Looks like I have some research to do!

That sense of worry is something that seems to be widespread in our industry. Arguably the most common question I’ve heard at events over the last few years—whether directed to myself, another speaker, or simply discussed over drinks at the end of the night—is how people “keep up”. With everything coming out there is a collective feeling of falling behind.

Some have blamed it on increasing complexity but I don’t really buy that. My first few sites were simple (and ugly) things I put together using Notepad and an FTP client while teaching myself HTML using a little magazine I bought. If I were just getting started today that same setup would work just as well. In fact, it would probably be easier as the baseline of browser support has generally improved and frankly, there are a ton of excellent resources now for learning how to write HTML, CSS and JavaScript.

I didn’t think much about accessibility or performance or semantic markup or visual design when I started. I just used what little I knew and learned to build something.

Over time as I learned more and more about the web, I started to recognize the extreme limitations of my knowledge. I realized accessibility was important and that I needed to learn more about that. I learned that performance was important. I learned that typography was important. 

And so I dug in and tried to learn each. The more I learned, the more I realized I didn’t know. It’s the [Dunning-Kruger](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect) effect in full force.

No, I don’t think the complexity of building for the web has changed. I think our collective understanding of what it means to build well for the web has and that as that understanding has deepened, we’ve become acutely aware of how much we individually still do not know.

I certainly have improved as a developer since I first started. Yet everything I've learned has exposed a dozen more topics I know nothing about. The list of things I don't know about the web grow as fast as my well-intentioned "read-it-later" list, so how do I prioritize and figure out what to explore next?

[Susan Robertson](https://twitter.com/susanjrobertson) had some solid advice on coping with this in her [article on A List Apart a year ago](http://alistapart.com/blog/post/overwhelmed-by-code):

> So I’ve started devoting the time I have for learning new things to learning the things that I like, that matter to me, and hopefully that will show in my work and in my writing. It may not be sexy and it may not be the hottest thing on the web right now, but it’s still relevant and important to making a great site or application. So instead of feeling overwhelmed by code, maybe take a step back, evaluate what you actually enjoy learning, and focus on that.

I completely agree with her stance on learning about what interests you, but I would add one small bit of advice to this as well: when in doubt, focus on the core. When in doubt, learn CSS over any sort of tooling around CSS. Learn JavaScript instead of React or Angular or whatever other library seems hot at the moment. Learn HTML. Learn how browsers work. Learn how connections are established over the network.

The reason for focusing on the core has nothing to do with the validity of any of those other frameworks, libraries or tools. On the contrary, focusing on the core helps you to recognize the strengths and limitations of these tools and abstractions. A developer with a solid understanding of vanilla JavaScript can shift fairly easily from React to Angular to Ember. More importantly, they are well equipped to understand if the shift should be made at all. You can’t necessarily say the same thing about an INSERT-NEW-HOT-FRAMEWORK-HERE developer.

Building your core understanding of the web and the underlying technologies that power it will help you to better understand when and how to utilize abstractions. 

That’s part one of dealing with the rapid pace of the web.

The second part is letting go and recognizing that it’s ok not to be on the bleeding edge.

In another fantastic [A List Apart post today](http://alistapart.com/column/how-do-we-get-it-done-now), [Lyza Danger Gardner](https://twitter.com/lyzadanger) looked at Service Workers and the conundrum of how you can use them today. As she points out, for all the attention they’ve received online, support is still very limited and in several cases incomplete. While I think Service Workers have a simpler migration path than many other standards—the whole API was built from the ground-up to be easy to progressively enhance—I think her nod to the hype versus the reality of support is important.

Service workers are one of those potentially seismic shifts on the web. New uncharted territory. And that brings excitement which in turn has brought a _lot_ of posts and presentations about this new standard. For people who have seen all of this chatter but haven’t actually dove in yet, it can feel like they’re quickly falling behind. 

But for all that hype, browser support is still in the early days. Building with service workers is still living on the edge—it’s pretty far from mainstream. The same is true for many of the technologies that are seeing the most chatter. 

That doesn’t mean you don’t want to pay attention to them, but it does mean you don’t need to feel left behind if you haven’t yet. These are very new additions to the web and it will take time for our understanding of their potential (and their limitations) to develop.

As Dan McKinley has eloquently argued, there is a great deal of value in forgoing life on the bleeding edge and instead [choosing “boring technology”](http://mcfunley.com/choose-boring-technology)—technology that may not be as “cool” but that has been around awhile. The major advantage is that the kinks have been worked out:

> The nice thing about boringness…is that the capabilities of these things are well understood. But more importantly, their failure modes are well understood. 

Bleeding edge technology is exciting, but there is a reason that phrase is so vivid. 

If you were to ask me, “Tim, how do you keep up?” my answer would be this: I don’t. I don’t think any of us do. Anyone who tries telling you that they are keeping up with everything is either putting up a front or they’re not yet knowledgeable enough to be aware of how much they don’t know.

No matter how much time we spend working on the web, there is always some other API or tool or technique we haven’t used. There is always something we haven’t fully understood yet.

We're blessed with a community full of people willing to share what they are learning about creating a vast knowledge base for us to tap into. We don't need to know everything about the web. In fact, we can’t know everything about the web. 

But that isn't something to feel guilty about. That isn’t because of increasing complexity. That isn’t some sort of personal weakness.

It's a sign of a deepening understanding of this incredible [continuum](https://adactio.com/journal/6692) we get to build and an honest acknowledgement that we still have so much left to learn.