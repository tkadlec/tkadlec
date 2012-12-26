---
comments: true
date: 2012-02-21 11:37:52
layout: post
slug: media-query-asset-downloading-tests
title: Media Query & Asset Downloading Tests
wordpress_id: 1246
tags:
- media queries
- mobile
- performance
- responsive
---

When you’re building a responsive site, there will undoubtedly be times when you need to change a background image, or when you need to hide an image for a specific resolution range. Unfortunately if you’re not careful, this can lead to multiple images being downloaded even when they aren’t being used. A few people—including [Jason Grigsby](http://www.cloudfour.com/css-media-query-for-mobile-is-fools-gold/), [Greg Rewis](http://blog.assortedgarbage.com/2010/12/css3-media-queries-download-answers/) and [Aaron Mentele](http://aaronmentele.com/2012/01/15/media-queries-for-mobile-browsers/)—have done some excellent testing about how images are downloaded when media queries are involved. So far, the tests have been conducted using manual methods. There is absolutely nothing wrong with that, but I wanted to find a way to make the testing more automated so that a wider group of people could contribute to the test results.

To that end, I’ve hacked together [a few tests](http://timkadlec.com/mq) (using Jason’s tests as a starting point) that store their results in [Browsercope](http://browserscope.org). The test is fairly simple. For each test case, I check to see if the background image (or content image) has been loaded by checking the `image.complete` property. The property (which appears to be well supported) returns true if the image has been  requested and downloaded, and false otherwise. So, if I want to see if `image2.png` has been downloaded, my code looks like this:

{% gist 3316747 %}

## Early results

It’s early, but already a few trends (some interesting, some less so) are emerging:



	
  * Setting an image to `display:none` won’t stop the image from downloading (see [test 1](http://timkadlec.com/mq/test1.php)). So don’t do it. We already knew this, but the tests are reinforcing it.

	
  * The same goes for setting an element to `display:none`: the background will still be downloaded by everybody (see [test2](http://timkadlec.com/mq/test2.php)).

	
  * Setting the parent object to `display:none`, however, does work pretty consistently (see [test 3](http://timkadlec.com/mq/test3.php)). It looks like Fennec still downloads the image, but Android, iOS and Opera won’t.

	
  * Downloading behavior for a simple cascade override is pretty inconsistent (see [test 4](http://timkadlec.com/mq/test4.php)). However, setting background images within a media query and then overriding seems to work pretty well ([test 5](http://timkadlec.com/mq/test5.php)). Fennec is a little eager again, but Android, iOS, Opera and the Kindle only download what’s needed.


Finally, my favorite nugget of information so far pertains to Opera Mobile. Opera, as it turns out, is darn clever. Instead of using the parser to trigger resource downloading, they use layout code. This means that since they have information about viewport size and visibility settings, they can be much more selective about which resources they download. So, for example, if an element is outside the viewport then the background image doesn't have to be downloaded on page load.

When I talked to Ola Kleiven of Opera about this optimization, he said that Opera used to implement the same behavior on Opera for desktop prior to 11.60 but had to pull it due to compatibility reasons. Developers were relying on things like the load events of these images, so when they didn’t load in Opera, things would break. It’s too bad: it’s an interesting and effective optimization method. I would love to see this behavior implemented cross-browser, but as an opt-in feature (maybe a meta tag or something could trigger it).

Thanks to everyone who has already been testing—it’s been fun to watch the results come in! If you haven't run the tests yet and you've got a few minutes, [please do](http://timkadlec.com/mq/). Once the number of results gets to a nice level, I’ll post a more detailed follow-up about which browsers behave in what ways. I'll also include any interesting findings in [the book](http://responsiveenhancement.com).

In the meantime, feel free to fire up the tests on any and all devices you have. If you think of another test you would like to see added, or see a potential issue with the test, [let me know](mailto:tim@timkadlec.com). One of the benefits of automating the test results is that it should be very easy to add new tests and quickly get broad results.
