---
comments: true
date: 2011-01-26 20:56:25
layout: post
slug: no-more-data-silos
title: No More Data Silos
wordpress_id: 889
tags:
- data
- federated social web
- preservation
- semantics
---

Mandy Brown very recently posted a thoughtful and well articulated look at [the importance of digital preservation](http://aworkinglibrary.com/library/archives/forever/). Her post was sparked by a flurry of sites that have recently been either dissolved (Cork’d), [“sunsetted”](http://mashable.com/2010/12/16/leaked-slide-shows-yahoo-is-killing-delicious-other-web-apps/) (Delicious) or simply completely removed from existence (Geocities). She also mentions the infamous data loss of Ma.gnolia where many people (me included) lost the bookmarks we had been carefully collecting and curating.

Her post, along with recent posts by [Stephen Hay](http://www.the-haystack.com/2010/12/17/death-to-web-services-long-live-web-services/) and [Alistair Croll](http://mashable.com/2011/01/12/data-ownership/) have got me thinking quite extensively about hosting my own data—everything from bookmarks to tweets. Tantek Celik is already utilizing his own home-brewed solution to do this, and he recently posted about [his stance on hosting your own data](http://tantek.com/2011/010/b1/owning-your-data).


> This is what I mean by “own your data”. Your site should be the source and hub for everything you post online. This doesn’t exist yet, it’s a forward looking vision, and I and others are hard at work building it. It’s the future of the indie web.


Right now, our social networks are all essentially data silos. I post tweets to Twitter, status updates to Facebook, bookmarks to Delicious (at least I used to) and images to Flickr. I don’t own that data, nor do I have easy access to it all in one central location. Aside from backups, if one of those services were to disappear, it would take any data I had posted there with it.

Even if I am diligent with my backups, most silo-based sites today do not have a common exportable data format. Which means that while I may be able to back my data up, in most cases I can not easily move that data over to another service.

One solution is to post through your own site, as Tantek is doing. Then, using the appropriate protocols and semantic standards, post that data to the appropriate hub or service. That way, you now have a local copy on your site, and you can continue to post even if say, Twitter, were to go down (which, you know, never happens).

The more I consider it, the more I am surprised that we ever settled for anything else. So often my posts into these silos are related to each other. I gain interest in a topic so I research it and add several bookmarks to Evernote. I talk about it with some people on Twitter. All of this leads me to write a post on my blog. With all three of those types of information being sectioned off from one another, each inherently loses some of it’s original value. If I have access to all the updates and replies from all of these different services in one location, however, I can see an the actual progression of an idea.

This future version of the web does not come without problems though. One such problem is how do we capture the social aspect of these sites. For example, consider any conversation on Twitter. If I’m archiving my tweets, I will only get half of the conversation. Without somehow having access to the other half of the data I no longer have a complete thought and that conversation loses it’s value.

Thankfully, there are some solutions being actively developed. The first step, is to use a protocol called [PubSubHubbub](http://code.google.com/p/pubsubhubbub/) which allows you to specify a “hub” for third-party services, like Twitter or Google Buzz for example, to refer to for new content. Using this model, whenever you post something, you ping your hub with the new content. The hub in turn alerts any services that have subscribed to the feed of that content that there is a new update for them to publish.

This accomplishes a few things. First, it allows you to publish once and potentially update many services. Secondly, it operates at near real time as opposed to the current practice of repeated polling.

To resolve the conversation issue, services can implement the [Salmon Protocol](http://www.salmon-protocol.org/). In the model described by the Salmon Protocol, the source (your site or whatever you are using to publish content) pushes new content out via one consistent protocol (PubSubHubbub) to all the aggregator services (Google Buzz for example). When a comment or reply is posted on one of those services, that service will then push the comment back to the source.

At this point, you can choose to simply store locally, or push that comment back out to your hub so other services can post the reply as well. If a large amount of services get behind this technology, it offers tremendous potential. Imagine being able to maintain a conversation that would span across several social networks!

Of course, the downside to all of this is that I may very well have to reconsider my aversion to Google Buzz. They already implement the PubSubHub protocol, and they claim to be actively working on implementing the Salmon Protocol as well.
