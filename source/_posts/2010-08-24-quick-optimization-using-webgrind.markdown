---
comments: true
date: 2010-08-24 05:23:48
layout: post
slug: quick-optimization-using-webgrind
title: Quick Optimization Using Webgrind
wordpress_id: 664
categories:
- Performance
tags:
- performance
- php
---

I was recently working on a site whose code I was inheriting and the pages took much longer to process than I would've liked. Caching helped, but I wanted to get to the underlying issue so I fired up Webgrind to see if I could trace the problem.

[Webgrind](http://code.google.com/p/webgrind/) is a freely available PHP profiling frontend that sits on top of XDebug. Using it, you can see how many times different functions are called and find what functions called them. You can also quickly see the inclusive cost (time spent inside a function plus calls to other functions) and self cost of each function.

Viewing the logs for the last page load, I could see that mysql_query was called a whopping 52 times and accounted for 84.93% of the processing time (which was at an unacceptable ~3.1ms).

Using the Webgrind frontend, I was able to trace back 23 of those calls to one function. In turn, this function was called by one other function 17 times. I decided to focus there first.

Again, with the help of Webgrind, I could see that this function was called several times, in  separate files, for each page. The function produced the same results each time it was called.

The quick and simple fix, then, was to use a property to cache the results of that function call. So the first time it was called, it would process completely and run the necessary queries. The next time it was called, it would check it's cache property to see if a value existed for the parameter being passed. If the value did exist - it would return that value.

This simple optimization immediately brought the total queries down from 52 to 36. They still accounted for 74% of the processing time, but that time had dropped dramatically from 3.1ms to ~2ms.

36 queries was still more than I wanted. A similar function to the one I had just optimized was responsible (both indirectly and directly) for 25 of the remaining 36 queries, so I thought I'd take a look there next.

Looking at the source, I could see that while the function asked for a boolean parameter to indicate if it should run certain queries, it never actually checked the value of that parameter. So no matter what, it was running all the queries, all the time. Fixing that error brought the total query count down from 36 to 16 and the total time to process the page was now ~1ms.

As a surprising bonus, there were no locations in the code that I had to change now that the function had been corrected. People hadn't been expecting to get those extra values in their return object, so they never tried to use them unless they had passed a true value in for that parameter.

All in all I was able to take the query count down from 52 to 16 and the processing time from ~3.1ms to ~1ms. There's more room for optimization, but this is certainly not a bad start for about 45 minutes of work.
