---
comments: true
date: 2012-01-11 16:18:55
layout: post
slug: work-to-be-done
title: Work to be done
wordpress_id: 1182
tags:
- mobile
- performance
- responsive
---

Smashing Magazine just launched their [newly redesigned site](http://smashingmagazine.com). Personally, I think it looks pretty great. The ads are a little distracting perhaps, but other than that, the side content mostly gets out of the way leading to a pleasant reading experience.

And of course, it’s responsive. That adds another level of loveliness. The navigation adjustments in particular are kind of interesting to watch. My favorite layout is the last one to kick in before you hit 1020px. It’s clean, easy to read, and the ads are not yet there.

But….

There’s a catch here. For as lovely as the site looks, there’s a lot going wrong from a technical perspective.


## Performance


For starters, the size. Even on my phone, the site weighs in at a massive 1.4MB. A large part of the issue is that those ads, the same ones that don’t display below 1020px, are still being requested and loaded on smaller resolutions. They're just being hidden with a little touch of 'display:none'.

When I tested, the site also made about 90 requests. That’s an awful big drag on page load time—no matter what device or network you are viewing the site on.


## Advertising


Another potential concern is the advertising. I’m not sure exactly on Smashing Magazine’s business model, prices, etc., so it’s hard to criticize their advertising efforts too much. I do find it interesting that their ads are all hidden below 1020px though, leaving their ads visible to only a portion of their audience.

One reason for this may be the high number of ads they display. In their sidebar, I count 16 ads. They are distracting at large resolutions, so I imagine they got to be very overwhelming on smaller resolutions. Having to re-orchestrate 16 ads onto a small screen layout would be a very tall task.

Again, we’re talking business model here so there's obviously much more at play than what an outside perspective grants, but I would love to see fewer ads. Not just for Smashing Magazine, but across all sites. Less ad spaces, more money per slot. (Roger Black talks about this in detail in his posts [The holy grail, part 1](http://rogerblack.com/blog/post/the_holy_grail_part_i) and [part 2](http://rogerblack.com/blog/post/the_holy_grail_part_2).) The result would be three key improvements:



	
  1. You would have a lighter, cleaner experience.

	
  2. The ads would provide more value to the advertisers—less ads competing for eyeballs per page.

	
  3. The smaller number of ads would be much easier to manage across resolutions.




## Bigger picture


Now, having said all that, I could be guilty of premature condemnation. Perhaps this is the interim solution and a fix to these issues (performance in particular) is forthcoming.

Jason Grigsby put it nicely in [two](https://twitter.com/#!/grigs/status/157200482429960192) [tweets](https://twitter.com/#!/grigs/status/157200706317729792):


> When I have guests and don’t have time to clean, I shove things in a closet. No biggee. Everyone does it. But the house isn’t really clean.

> The key is following through and cleaning the closet as well. Let’s hope others are better at it than I am at home. :-)


Of course he's right. In fact, I have a few messy closets myself. (Both literally and metaphorically.)

And I don't mean to pick on Smashing Magazine. They are far from the only site making these kinds of mistakes on the technical side of things and from a business perspective, the discussion about how to handle advertising is far from being resolved. And again, from a visual perspective I think they did an awful lot of things right.

We simply need to ensure that the discussion broadens. Responsive design is a fantastic approach, one that brings us closer to taking advantage of the inherent flexibility of the web. But simply being responsive is not the destination. To maximize the potential of a responsive approach, we need to focus not only on the visual components, but on the technical execution and business ramifications as well.
