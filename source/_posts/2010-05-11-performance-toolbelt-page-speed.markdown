---
comments: true
date: 2010-05-11 18:53:03
layout: post
slug: performance-toolbelt-page-speed
title: 'Performance Toolbelt: Page Speed'
wordpress_id: 395
categories:
- Performance
tags:
- google
- performance
---

Like it's older brother YSlow, [Page Speed](http://code.google.com/speed/page-speed/), released by Google in in mid-2009, is primarily a tool to audit and analyze the performance of your site. However a closer looks shows that there is in fact a lot more that Page Speed can do.


## What Does It Test


Page Speed analyzes the performance of a page based on a set of 26 rules (as of version 1.7) that Google has documented. Each rule is given a priority code based on how great the potential impact would be on the page load time. Once Page Speed has determined which rules are broken, it gives the page a score between 0 and 100, which can be exported in JSON format, or sent straight to [ShowSlow.com](http://www.showslow.com/) - a tool for recording YSlow and Page Speed scores over time.

The rules range from common rules like optimize your images, to lesser known techniques like defining a character set early. A complete list of the rules Page Speed checks for is below:



	
  1. Combine external CSS

	
  2. Minimize DNS lookups

	
  3. Leverage browser caching

	
  4. Remove unused CSS

	
  5. Leverage proxy caching

	
  6. Minify CSS

	
  7. Minify HTML

	
  8. Minify Javascript

	
  9. Specify image dimensions

	
  10. Serve static content from a cookieless domain

	
  11. Use efficient CSS selectors

	
  12. Avoid bad requests

	
  13. Combine external JavaScript

	
  14. Enable compression

	
  15. Minimize redirects

	
  16. Minimize request size

	
  17. Optimize images

	
  18. Optimize the order of styles and scripts

	
  19. Put CSS in the document head

	
  20. Serve resources from a consistent URL

	
  21. Serve scaled images

	
  22. Specify a character set early

	
  23. Avoid CSS expressions

	
  24. Defer loading of JavaScript

	
  25. Parallelize downloads across hostnames

	
  26. Specify a cache validator




## What Else Can It Do


Like I said, while auditing may be the most well known feature of Page Speed, it is far from being the extent of its capabilities. In addition to performing a basic audit of your page, Page Speed automatically optimizes the Javascript files, CSS files, and images that it finds on the page, and saves them to a folder on your computer (which you can specify). It also has the ability to profile deferred Javascript files - something it does not do by default.

Perhaps the most fun though comes when you use the Page Speed Activity panel. At it's most basic usage, the activity panel lets you record a timeline of all the browser activities, including both network activity and Javascript processing, that take place during the time you choose to record. That means that you get detail like how much time was spent connecting to the server, and how much time was spent executing the Javascript.

The activity panel also allows you to see a list of all the Javascript functions that were instantiated, but not called, during the recording period. This information could help you determine what portions of your code are not necessary immediately so that you can choose to load them later, allowing you to further improve your load time. You can also record "paint snapshots" in the activity panel which highlight each element in a page as it is rendered.

While the advanced features offered by the activity panel are very useful, it's important to keep in mind that they do slow down the Page Speed plugin a little. Since they add a little bit more overhead, the timeline will not be 100% accurate and will serve you better as a relative reference than an exact approximation of the time it takes your page to load.


## It's Open Source Too!


Just recently, the [Page Speed SDK](http://code.google.com/p/page-speed/wiki/DownloadPageSpeed?tm=2) was released as open source. Already, Steve Souders has demonstrated the usefulness of this by building [HAR to Page Speed](http://www.stevesouders.com/blog/2010/05/01/har-to-page-speed/) - a tool that will apply the Page Speed rules to a HAR (HTTP Archive specification - a format gaining popularity) file you upload.

By opening the SDK up to open source, the potential is there for developers to build cross-platform tools that would allow people to analyze the performance of their site according to the Page Speed rules, regardless of the browser in use. It's going to be exciting to see what other tools get built around the SDK as it continues to evolve.
