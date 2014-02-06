---
layout: post
title: "Smart Defaults: On Libraries & Frameworks"
date: 2014-01-31 10:14
comments: true
categories: 
tags: 
- javascript
- performance
- frameworks
---
Yesterday Twitter went nuts over a little site called [“You Might Not Need jQuery”](http://youmightnotneedjquery.com). The site’s seemingly innocent claim was that many things that you think you need jQuery for are actually not so bad in plain old JavaScript, depending on what browsers you are supporting.

> jQuery and its cousins are great, and by all means use them if it makes it easier to develop your application.

> If you're developing a library on the other hand, please take a moment to consider if you actually need jQuery as a dependency. Maybe you can include a few lines of utility code, and forgo the requirement.

It then proceeded to provide example code—what a line of jQuery was compared to the vanilla JavaScript alternative. Not all of these snippets were exactly identical to the jQuery code in terms of what they accomplished, but they were pretty close.

The site itself didn’t seem particularly exciting or controversial. We’ve seen these sorts of comparison before, and frankly claiming that you “might” not need jQuery is an awful innocent statement to make.

But the reaction was more divided than I expected with many getting a little worked up about the site. Which of course causes me to wonder—if suggesting we “might” not need a technology can cause such a heated discussion, perhaps we “might” be just a little too attached to it.

It's not that I don't like or use libraries and frameworks. I do. In fact, I use tools like [jQuery](http://jquery.com/) and [Ender](http://ender.no.de/) quite frequently. A good library brings the benefit of being well-tested, documented (well, in some cases at least) and can be very helpful for complex functionality or when working in a team environment.

What worries me is that for many, libraries have become the default. They're rolled into boilerplates and pattern libraries as an assumed dependency. And if we know anything about default settings, it’s that [most people](http://www.uie.com/brainsparks/2011/09/14/do-users-change-their-settings/) will [stick with them](http://www.dangoldstein.com/papers/DefaultsScience.pdf). This undoubtedly leads to many projects incurring this overhead without every giving consideration to whether it is really necessary.

According to the the latest run of [HTTPArchive’s top 1000 sites](http://httparchive.org/interesting.php) (January 15, 2014), the average weight for a page is 1463kb. Scripts weigh in at 272kb, second only to images in total weight. Mobile tells a similar story. The average site on a mobile device weighs in at 717kb, of which 168kb is JavaScript.

Compare those numbers to the start of the year and we see an alarming trend. Script weight is up 28% from the start of the year on desktop pages and up 22% on mobile.

This is concerning, but it's not just download sizes that you should be worried about. In a presentation given at Velocity in 2011, [Maximiliano Firtman pointed out](http://www.slideshare.net/firt/mobile-web-html5-performance-optimization/95) that on some phones (older, but still popular, BlackBerry devices for example) can take up to 8 seconds just to *parse* jQuery. More recent [research from Stoyan Stefanov](http://jsperf.com/zepto-jq-eval) revealed that even on iOS 5.1, it was taking as many as 200-300ms to parse jQuery.

This isn't even the worst case scenario. I've worked on projects where some of the devices we needed to test on couldn't load the page at all if jQuery was present—it was just too much JavaScript for the device to handle. 

Performance is not the only concern. At times, the abstraction that libraries and frameworks provide can [actually be harmful](https://twitter.com/angustweets/status/417774296274976768). Without an understanding of the underlying language in use, it can confuse developers as much as it aides them.

I'm know I’m picking on jQuery, but that’s primarily because of its un-paralleled popularity. My concerns with starting with a library as a default method of coding are not confined to any one library in particular.

It seems this is a tricky topic to approach because it is so often viewed as being black or white: you're either against frameworks or you're opposed to them. Like so many topics, people can get religious about this stuff. But it's not about what is the right&trade; way to do it: it's about using the best tool for the job and arming yourself with the knowledge necessary to make that determination.

The reality is that you don't *always* need to use a framework or library. Often times, you can get by with just a little bit of native JavaScript, saving precious bytes and seconds while doing so. When the job calls for frameworks, then use a framework ([and do so responsibly](https://github.com/jquery/jquery#modules)). When you can do it just as well with vanilla JavaScript, then roll your own. (For anyone thinking about commenting "Don't worry about it, just include one less image on your site" response, I'm going to preemptively respond: why not do both? One less image is not an excuse for not being careful about JS size.)

Everything has a cost associated with it. Whenever we add something to our sites we need to be able to think critically about whether or not the value outweighs the cost. JavaScript libraries are no exception.

I'm not saying that we stop using libraries altogether—and neither were the people who created “You Might Not Need jQuery”. I'm suggesting we make that decision with a great deal of care. 