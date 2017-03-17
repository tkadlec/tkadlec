---
layout: post
title: "AMP and the Web"
date: 2017-03-07 16:04:49 -0600
comments: true
categories: 
tags:
- AMP
- performance
- standards
---
The first day of the first ever [Google AMP conference](https://www.ampproject.org/amp-conf-2017) was today in New York. I would have loved to have been able to participate, but I had to settle for listening to bits and pieces from afar (thanks to Google for always doing such a good job of live streaming all of their events).

The only session I circled back to watch in its entirety so far was the panel about "AMP & The Web Platform." Unsurprisingly to anyone who has read anything I've written in the past about AMP, this was the session that looked the most interesting to me. I'm not typically a fan of panels—panels are _so hard_ to do well—but this was a good one.

Now first off, hats off to the AMP team for assembling the panelists that they did. They could've gone the easy route and pulled in a bunch of AMP diehards, but they didn't. They assembled a smart group of panelists who weren't afraid to ask some important and hard-hitting questions: [Gina Trapani](https://twitter.com/ginatrapani), [Nicole Sullivan](https://twitter.com/stubbornella), [Sarah Meyer](https://twitter.com/meyerini), [Jeremy Keith](https://adactio.com/) and [Mike Adler](https://twitter.com/stuntbeard).

That was not accidental. Talking to [Paul Bakaus](https://twitter.com/pbakaus) (who moderated the panel) before the event, that's exactly what he wanted to do: put people on the panel who wouldn't be afraid to voice dissent. When they split the talks out into separate videos, I'd definitely recommend watching this one. There is so much good discussion from every single panelist.

I've not been shy in [expressing my](https://timkadlec.com/2015/10/amp-and-incentives/) [opinion of AMP](https://timkadlec.com/2016/02/a-standardized-alternative-to-amp/). As a performance "framework", it would be ok. But it's not treated that way. It's treated as the incentive. Create AMP content, and you can get in the "Top Stories" carousel and you can get AMP's little "lightning-bolt of approval". I don't think that's healthy for the web.

These incentives have repeatedly been downplayed whenever I chat with someone involved with AMP, but my own experience has shown otherwise. I've been lucky enough to talk to a lot of publishers since AMP first came out and the most common sentiment has been: "We're feeling pressure to use AMP to get our content into the top stories carousel. How can we do this without having to use AMP?"

Gina [talked about how she's seen the same thing](https://twitter.com/waxpancake/status/839195543771332608), where the incentives are what is driving the adoption:

> In my experience people are motiviated to use AMP...I've seen this from our clients...mostly because of SEO. They want it in that top stories carousel, they want that lightning bolt of approval in regular search results wwhich is happening now. And that concerns me. I'd rather that the concern for them was about performance and better user experience but it's about SEO and search rankings. How many publishers would use AMP if that weren't a factor? Fewer.

This makes total sense: you need incentive to drive adoption of, well, anything. And Google can offer a very clear incentive for using AMP. Now AMP can argue all they want that about how they're trying to advocate for performance and a better experience, but that's not the message everyone is hearing.

This is evidenced by most of the AMP case studies I've seen. AMP gets noted as the reason for metric improvement, but if you actually look at the non-AMP version of those same pages you'll find they're incredibly bloated. Improve performance without AMP and I'm sure you'll see similar improvements.

That the message is more about AMP's incentives than performance was also evidenced many times in the panel. Paul would point out you could, for example, cache your AMP content on your own servers. The panelists were quick to point out that, while technically true, you don't get the carousel or lightning bolt if you do.

Whether they intended it to incentive performance or not, that's _not_ the incentive that most people see in using AMP.

Gina also pointed out (much more eloquently than I ever have) the broader risk and concern that many (myself included) see with AMP:

> But hearing you say that the lightning bolt is a symbol of Google verifying and validating and hosting this page that's scary to me as someone who cares about the open web. If you talk about the open web you're talking about standards based and decentralized and where content isn't privileged right? And AMP does all those things. It's not a W3C standard...yet. It's not decentralized because at least all AMP pages are hosted on Google's cache. So if you search Twitter for google.com/amp there's lots of results there people are sharing that URL so it's not decentralized....AMP content is privileged in search results, and that concerns me.

This isn't to say that AMP is entirely a bad idea. These are issues that could be fixed. But while the fact that people like Paul are so willing and eager to hear critical feedback gives me hope, so far I haven't seen a lot of evidence that these issues will be addressed. Consider the fact that AMP now accepts other valid AMP caches other than Google. The single cache source was one of the early criticisms and now they've, seemingly, opened that up with [Cloudflare being the first to publicize it](https://blog.cloudflare.com/accelerated-mobile/).

That's great, except it does nothing to alleviate the actual underlying concern about centralization. While I can cache AMP content anywhere I want, I don't get the benefits Google is promising unless that content is also cached on Google's cache. That's not decentralization, and frankly, I'm not entirely sure what the point is. After all, I can cache my AMP documents on Akamai, or Fastly, or whatever other service I want—AMP approved or not—but I won't get the incentives that are tihe primary reason AMP is adopted unless it's on Google's cache.

There was some optimism from the panelists that, perhaps, AMP will be a gateway to better performance. A platform for learning, a way to make performance more "accessible" as Sarah Meyer put it. And maybe it will be. After all, the work the AMP team has done is already leading to new standards proposals that, if implemented, will greatly improve performance on the web—certainly a great thing.

I _want_ to believe the same thing will happen with the priority organizations put on performance. I _want_ to believe that people learn from AMP's tricks. That they'll get to a point where they've seen the benefit of performance and start to incorporate these things into their own site. In the long-term, that's where the effort is best spent.

This is something Jeremy pointed out as well as he thought about all the interesting work folks had been presenting all day.

> That's great but could you imagine if you'd put that same amount of work into your HTML pages?

From what I've read and seen in the past from folks working with AMP, they're doing some _incredibly_ intelligent work making new features and functionality work inside of AMP. What if we could channel that same effort directly to the web instead?

Optimistically, AMP may be a stepping stone to a better performant web. But I still can't shake the feeling that, in its current form, it's more of a detour.