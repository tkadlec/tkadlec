---
layout: post
title: "Apple's Web?"
date: 2015-02-24 15:10
comments: true
categories: 
tags:
- standards
- apple
- community
---
The [Pointer Events specification](http://www.w3.org/TR/pointerevents/) just became a W3C Recommendation. For those unfamiliar, it’s an intriguing attempt to unify pointer events regardless of the input device in use.

The [jQuery team threw their weight behind it](http://blog.jquery.com/2015/02/24/getting-on-point/) this morning. 

> …we love Pointer Events because they support all of the common input devices today – mouse, pen/stylus, and fingers – but they’re also designed in such a way that future devices can easily be added, and existing code will automatically support the new device.

Unfortunately, as they went on to point out, there are some hurdles to jump yet. While Microsoft has a full implementation in IE11 and [Mozilla is working on it](https://bugzilla.mozilla.org/show_bug.cgi?id=960316), Apple has shown no interest and Google seems ready to follow their lead.

I was willing to give the Blink folks the benefit of the doubt, because I do remember they had specific and legitimate concerns about the spec awhile back. But after reading through notes from a [Pointer Events Meeting in August](https://lists.w3.org/Archives/Public/public-pointer-events/2014JulSep/0071), I’m forced to reconsider. The Chrome representative had this to say:

> No argument that PE is more elegant. If we had a path to universal input that all supported, we would be great with that, but not all browsers will support PE. If we had Apple on board with PE, we’d still be on board too.

Doesn’t sound very good, does it?

Let's set any opinions about Pointer Events aside. Frankly, I need to do a *lot* more digging here before I have any sort of strong opinion in one direction or another. There is a bigger issue here. We have a recurring situation where all vendors (save for Apple) show interest in standard, but because Apple does not express that same interest, the standard gets waylaid.

The jQuery team took a very strong stance against this behavior:

> We need to stop letting Apple stifle the work of browser vendors and standards bodies. Too many times, we’ve seen browser vendors with the best intentions fall victim to Apple’s reluctance to work with standards bodies and WebKit’s dominance on mobile devices. We cannot let this continue to happen. 

As you might expect, the reactions have been divided. While many have echoed those sentiments, some have rightfully pointed out that Apple and Safari have made some really great contributions to the modern Web.

Of course they have. So has Mozilla. So has Microsoft. There have actually been quite a few organizations who can make that very broad and generic claim. They all can also [claim the opposite](https://twitter.com/grigs/status/570317499822170112).

But here’s the current reality, one that has been accurate for awhile. Apple has a very, very strong influence over what standards get adopted and what standards do not. Partly it’s market share, partly it’s developer bias (see, for example, how other vendors eventually felt forced to start supporting the webkit prefix due to vendor prefix abuse).

Apple simply does not play well with other vendors when it comes to standardization. The same sort of things we once criticized Microsoft for doing long ago, we give Apple a pass on today. They’re very content to play in their own little sandbox all too often.

They also don’t play particularly well with developers. They supposedly have a developer relations team, but it’s kind of like Bigfoot: maybe it’s out there somewhere but boy there hasn’t been a lot of compelling evidence. This splendid rant from [Remy Sharp](https://adactio.com/journal/5442/#comment438) and the [follow-up from Jeremy Keith](https://adactio.com/journal/5787) come to mind. They were written in 2012, but the posts would be equally on point if published today.

The other vendors aren’t exactly perfect either. The Microsoft folks, no doubt reeling from all the negativity aimed at them over the years, have more than once been content to let everyone else duke it out over a standard, only getting involved late when a consensus has been reached. The Blink folks, despite being the best positioned to take a stand, have been happy to play the “Apple won’t do it so I guess we won’t either” card on multiple occasions.

But at least you can have a dialogue with them. It’s easy to reach the Mozilla, Google and Microsoft folks to discuss their thoughts on these emerging standards. That's a much harder thing to do with the Apple crew.

So I’m tempted to agree with jQuery’s stance about Apple stifling the work of vendors and standards bodies. They haven’t exactly done anything to make me feel like they’re particularly interested in the idea of the “open” web.

But I don’t think other vendors get to be let off the hook. I’m just as happy to point my fingers at them for being so easily persuaded by an argument that amounts to “we don’t want to”. I’m not comfortable with a single entity being able to hold that much influence when so many others have expressed interest in an idea.

This isn’t a healthy thing for the web. We *need* something to change here. And I'm optimistic. To quote [Jeremy’s 2012 post](https://adactio.com/journal/5787):

> It can change. It should change. And the time for that change is now.