---
layout: post
title: "Who's In Charge Here?"
date: 2013-11-16 10:45
comments: true
categories: 
tags:
- images
- responsive
- standards
- whatwg
---
I tried to resist writing this post. I really, really did. I've [ranted once about the standards process](http://timkadlec.com/2012/05/wtfwg/) as it related to responsive images. I had no interest in going there again. I’d prefer not to be known as “that ranty Wisconsin dude who sounds slightly Canadian when he talks”.

Besides, I hesitated to post a condemnation of the current state of affairs when I didn't have a solution to offer up.

But then I read Jeremy Keith's beautifully written post ["A map to build by"](http://adactio.com/journal/6564/) discussing the web and our ability to impact what it becomes. In it, Jeremy said:

> Perhaps we need our own acts of resistance if we want to change the map of the web. I don’t know what those acts of resistance are. Perhaps publishing on your own website is an act of resistance—one that’s more threatening to the big players than they’d like to admit. Perhaps engaging in civil discourse online is an act of resistance.

Jeremy was discussing other issues, but I think those words make sense in many contexts.

So let's consider this my act of resistance.

If you’ve not been paying attention, the responsive image discussion has continued full-steam ahead, but without any conclusion. If you want to catch-up in full, I highly recommend Bruce Lawson's excellent review of [where we are](http://html5doctor.com/responsive-images-end-of-year-report/) and Mat Marquis's [gist](https://gist.github.com/Wilto/7453901) of where things stand.

For anyone not willing to read the full thing, here's a TL;DR version:

- The picture element was never received with any sort of enthusiasm by implementors and, while not dead, is barely what you would call alive. 
- The srcset attribute was implemented by WebKit for resolution only, and by Blink (also for resolution only) behind an experimental features flag.
- Tab Atkins proposed a new approach, [src-N](http://tabatkins.github.io/specs/respimg/Overview.html), that address the three primary use cases (art direction, resolution, screen size) for responsive images.

So that's where we stand today. Just about everyone agrees that srcset is not extendable—hence why no one is implemented the extended syntax for the other use cases. Mozilla, in fact, has come right out and said they have zero interest in it at all—they [closed the issue as WONTFIX](https://bugzilla.mozilla.org/show_bug.cgi?id=870021).

On the other hand, just about everyone has some interest in src-N. It solves the use cases, has implementor support from Blink (the Client Hints proposal was [even refactored to incorporate src-N](https://github.com/igrigorik/http-client-hints/#interaction-with-src-n)) and Mozilla, and has the support of the [RICG](http://www.w3.org/community/respimg/). Seems like a great situation to be in. 

The one exception, however, is the WebKit gang who have labeled src-N ["a grotesque perversion of the HTML language"](http://permalink.gmane.org/gmane.os.opendarwin.webkit.devel/25817). Guess you could say they're not big fans of the syntax.

Coincidentally (or perhaps not so much) the same group that came up with srcset is the one implementor not willing to leave it behind. Unfortunately, because this particular implementor wields a big stick, Blink sounds like they’re willing to [play follow-the-leader](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2013-November/041473.html) and do as WebKit does.

The fact that Blink is apparently calling src-N dead in the water because one implementor opposes (WebKit) and yet haven’t said the same about srcset which is also opposed by an implementor (Mozilla) speaks volumes to the rationale here: it’s not because there isn’t a consensus, it’s because of who is wielding the heavier stick. The fact that the RICG have thrown their support behind src-N appears to not really figure into the equation.

So here we are 21 months after the RICG was started. We finally have a solution that both the RICG and a majority of implementors are interested in, and it looks like it's at risk of not happening because of one single implementor dissenting opinion. The fact that the currently discussed solution on the WHATWG list is a frankenstein combination of HTML and inline CSS doesn’t do much to elevate my spirits ([thread starts here](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2013-November/041409.html)).

Here's the thing: the existence of politics in this doesn’t surprise me, it’s an unfortunate reality. I’m also pragmatic enough to recognize why WebKit has such a large influence here. I get all that.

But I find it upsetting that one party can throw this much weight around, discount the opinions of developers and other browser implementors in one fell swoop, and then watch as everyone accepts their opinion as the ultimate conclusion.

Just as I did last May, I refer back to [design principles of HTML](http://www.w3.org/TR/html-design-principles/) once more. In terms of priority, the top three opinions go to three groups, in order:

1. **Users**  
This is definitely good for users. They'll benefit from src-N by getting [less page weight](http://timkadlec.com/2013/06/why-we-need-responsive-images/) and [improved rendering times](http://timkadlec.com/2013/11/why-we-need-responsive-images-part-deux/), among other things.
2. **Authors**  
The RICG is the representative for the developers in this scenario and they are in support of src-N.
3. **Implementors**  
Here again is almost a full consensus. Mozilla and Blink have shown interest, WebKit is stonewalling.

I'm no standards expert but when I can place checkboxes next to the top two priorities, and when more representatives of the third priority support something than do not, then it seems to me that thing has merit. If those principles can be thrown out the door when one implementor opposes a solution, then what exactly are they there for in the first place?

I openly admit I’m not sure how to solve the situation. Here’s what I do know.

1. We can’t stick our heads in the sand and pretend an attribute that lets us give our fancy iPhones and iPads a big, fat, shiny image is a good enough solution.
2. There is a very, very small likelihood of everyone agreeing on one perfect solution. As a result, concessions need to be made. For example, the RICG is supporting src-N because of the interest from implementors despite many members still preferring the picture syntax.

Given that no solution is likely to be agreed upon by everyone we need to find one that solves the use cases, can be responsibly polyfilled, has the approval of the authors and makes a majority of implementors happy. And then we need to ship it.

Maybe that solution is src-N, maybe it’s something else. But I’d prefer to work on a web where we didn’t have to wait for WebKit, or any other single party for that matter, to make up our minds for us.