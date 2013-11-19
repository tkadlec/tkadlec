---
layout: post
title: "Avoiding the 300ms click delay, accessibly"
date: 2013-11-07 15:22
comments: true
categories: 
tags: 
- accessibility
- performance
- touch
---
On touch devices, a click event has a [300ms delay](https://developers.google.com/mobile/articles/fast_buttons) before firing. The reason for this the delay is that browsers need that buffer to make sure you aren’t going to double-tap on anything. The result is that if you use click events blindly, that delay creates a noticeable lag as users interact with elements on your page.

There has been a [Google + post by Rick Byers](https://plus.google.com/u/0/+RickByers/posts/ej7nsuoaaDa) floating around the last few days claiming the best way to deal with the delay was to eliminate the double-tap zoom altogether. With no double-tap gesture to worry about, browsers no longer need that 300ms buffer and can now fire click events immediately.

One of the recommendations made was to kill the double-tap gesture on Chrome and Firefox for Android. To do this, you have to kill scaling:

> On Chrome Android and Firefox this involves using the "viewport" meta tag to disable zooming (with user-scalable=no or initial-scale=1,maximum-scale=1)

The popularity of the post concerned me because while the comments discussed it a bit, the original post didn’t mention one massive, glaring issue with this recommendation: the impact on accessibility.

Disabling scaling means not only is there no double-tap to zoom, but there is no pinch-to-zoom either. Many users depend on this functionality for accessibility: for them, disabling scaling effectively renders your site broken and useless.

So my advice is to avoid this like the plague in nearly all scenarios, for several reasons:

- While only Chrome and Firefox for Android will benefit from it from a performance perspective, **everyone** loses out on an important accessibility feature. For users who require the ability to zoom to use a site, you’ve just broken the experience for them.
- Chrome 32 is going to get clever and [disable the double-tap to zoom feature without requiring scaling to be disabled](https://groups.google.com/a/chromium.org/forum/#!msg/blink-dev/8evES7o-QTY/FVCaNzCIvoAJ). As long as as “the computed viewport width in CSS pixels is less than or equal to the window width” (so basically, if you’re using width=device-width in your viewport element). Double-tap zoom will be gone—as will the 300ms delay—but users will still be able to pinch-to-zoom if necessary. Cake...eating it too...all that.
- iOS double-tap isn’t going anywhere anytime soon. iOS uses the double-tap gesture to provide a [scroll feature](http://www.slideshare.net/mobile/redux/getting-touchy-an-introduction-to-touch-and-pointer-events-future-of-web-apps-london-24102013/64) so you’re still going to have to account for the delay on one of the most popular mobile browsers.

As [Patrick Lauke](http://www.splintered.co.uk/) [pointed](https://twitter.com/patrick_h_lauke/status/398543924069142528) [out](https://twitter.com/patrick_h_lauke/status/398544072883060736) on Twitter, this leaves three different solutions for developers, depending on the scenario:

1. Use something like [FastClick](https://github.com/ftlabs/fastclick), to account for iOS.
2. Use FastClick or kill scalability (as we’ve just discussed, a bad idea) for Chrome versions 32 and under.
3. Use width=device-width in their meta tags and celebrate when Chrome 32 and later don’t have a delay.

So what’s a performance and accessibility loving developer to do if they want to get rid of the delay? 

At the end of the post, Rick states to “just switch to using FastClick”. That’s frequently my recommendation as well. FastClick does a good job of dealing with the issue—without losing the ability to pinch-to-zoom and does so at ~10kb minimized. That’s not super lightweight, but it’s not too painful either. 

Another option is to use something like [Tappy!](https://github.com/filamentgroup/tappy/), a normalized tap event from the always-clever folks at Filament Group. Tappy! lets you use a “tap” event that works for touch, mouse and keyboard. Not only do you avoid the 300ms delay, but the script is under 1kb when minimized (though it does require the use of jQuery or a similar framework).

The point being: there are ways to successfully eliminate the click delay *without* negatively impacting performance. Until more browsers start solving this themselves, in the present day, preserving scaling and finding another way to combat the 300ms delay is our best option.

<div class="note">
	Thanks to <a href="https://twitter.com/scottjehl">Scott Jehl</a> and <a href="https://twitter.com/wilto">Mat Marquis</a> for giving the article a read-through. They are also the ones who insisted I refer to Filament as "always-clever".
</div>