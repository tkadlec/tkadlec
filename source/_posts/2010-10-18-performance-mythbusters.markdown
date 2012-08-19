---
comments: true
date: 2010-10-18 06:21:27
layout: post
slug: performance-mythbusters
title: Performance Mythbusters
wordpress_id: 748
categories:
- Performance
tags:
- performance
---

Performance optimization is the Rodney Dangerfield of web development--it "don't get no respect". In spite of its great importance in the overall user experience, it is all too often pushed aside and treated as an afterthought. In my conversations with designers and developers who don't optimize, a few of the same myths are constantly brought up.


 




  * **Performance optimization isn't that necessary.** This misconception doesn't stem from a lack of caring--most of the people I talk to truly care about crafting a good user experience for their visitors. I think this myth stems more from a lack of awareness. Most of us work on connections that are typically quite a bit faster than that of the average internet user. As a result, we experience the web differently than our users. In addition, most of the people I talk to just haven't heard about the studies that have come out regarding the effect of performance on the user experience.


  * **Performance optimization is too difficult and takes too much time.** The statement is often followed by "…and my clients won't pay for all that extra time." The prevailing belief is that you have to invest numerous hours and considerable energy to improve the performance of your site.


  * **High performance and beautiful design are mutually exclusive.** In the early days of the web when we were browsing the internet via a dialup connection, improving performance meant removing the images from your site. On today's web people don't want to have to settle for a less graphically compelling site, so removing most of the images on a site isn't a very compelling option. The fact that most sites that talk about performance optimization aren't exactly well known for beautiful designs doesn't help to dispel the myth.


 


Thankfully, there's been a flurry of recent studies and new tools that help to both demonstrate the value of a high-performing site and simplify the process of getting there.


 


## Performance matters


 


Information on the _how_ of performance has been available for awhile, but not until the last couple years have we really seen answers to the question of _why_.


 


In 2009 at Velocity--the annual performance optimization conference--there was a flurry of information released by companies that clearly demonstrated how performance effects key business objectives. Google and Bing teamed up to present results from their respective [experiments with page load time](http://blip.tv/file/2279751/). Bing showed that by slowing their load time down by 2 seconds, they saw a 4.3% drop in revenue per user, as well as a 1.8% decrease in the number of search queries per user.




Google's results were perhaps even more startling. They found that by introducing just a 400ms delay in their pages, the number of searches per user decreased by .59%. Even more concerning was the fact that even after the delay was removed, the slower initial user experience continued to affect how their users interacted with the site. With the delay gone, those same users still had .21% less searches.


 


Performance isn't just tied to the business objectives of search engines. Shopzilla [presented information](http://blip.tv/file/2290648) detailing how they were able to speed up their site from 4-6 seconds to 1.5 seconds per page. The results were impressive. They saw their conversion rate increase by 7-12% and their page views increased by 25%.




In April of this year, Mozilla performed just a couple of simple performance techniques and [shaved 2.2 seconds](http://blog.mozilla.com/metrics/2010/04/05/firefox-page-load-speed-%E2%80%93-part-ii/) off their average page load time. This boost in performance increased their download conversions by 15.4%. Based on their daily traffic, they estimated that this increase translated to an astonishing 10.28 million additional downloads per year.


 


Buoyed by these studies, Google recently announced that they will be [taking page load time into consideration](http://googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html) when ranking sites. While it's not yet one of the primary considerations, a high performing site of otherwise equal or similar ranking as a lower performing site will benefit from a bump in their ranking.




With performance contributing to revenue, frequency and depth of interaction, conversion rates and search engine optimization, it becomes crystal clear that performance optimization is not only important but that it should be a primary consideration.


 


## You can have your cake and eat it too


 


Of course, performance is not all that matters. (If it was, we'd all have sites that look like Jakob Nielsen's.) [Eye candy](http://www.alistapart.com/articles/indefenseofeyecandy), time and energy are all critical too. That's why it's important to note that there are many techniques you can use to improve the performance of your site without affecting the design at all. In most cases, you can do so using tools that greatly simplify the process and reduce the time investment required.


 


Improving page load time primarily boils down to two concerns:


 




  1. reducing page weight;


  2. and reducing HTTP requests.


 


### Reducing page weight


 


Reducing page weight is really a lot simpler than you might think. For images, take the time to optimize them by hand using your favorite graphics program. You'll be amazed by how much smaller you can make them without any noticeable degradation in quality.




If your images have already been produced, you can use a couple of different tools to reduce the size simply and quickly. One such tool is [Smushit.com](http://www.smushit.com/ysmush.it/). Smush.It lets you upload graphics which it will then return to you optimized, without any loss in quality. If an app is more your style, [ImageOptim](http://imageoptim.pornel.net/) is a very powerful app for Macs that wraps up the power of several different image optimization tools in an easy drag-and-drop interface.


 


For CSS and Javascript, run your code through a minimization tool like [YUI Compressor](http://developer.yahoo.com/yui/compressor/) or [JSMin](http://www.crockford.com/javascript/jsmin.html), both of which can be found online. These tools will remove unnecessary whitespace and comments from your files, decreasing the file size. YUI Compressor will take it a step further and substitute shorter variable and function names for the longer ones in your core file, resulting in even more savings. Again, if an app is more your style, Stoyan Stefanov's [OMG](http://www.phpied.com/omg-initial-checkin/) will automatically minimize and save your CSS and Javascript files.


 


### Reducing HTTP requests


 


To reduce the number of HTTP requests, you can again use a tool like the [online wrapper for YUI Compressor](http://yui.2clics.net/). The online tool gives you the option to upload several files, which it will then combine into one.


 


In addition to being a good idea in general, making use of progressive enhancement with CSS3 will help with the performance of your site. Using CSS3 for things like gradients, drop shadows and rounded corners can allow you to significantly reduce the number of images included on a page. Doing so will not only reduce the number of HTTP requests, but also reduce your page weight.


 


Use CSS sprites where applicable. They can be a little tedious to create and maintain, so consider using a tool like the [SpriteMe bookmarklet](http://spriteme.org/). SpriteMe will search through your CSS to find references to images and recommend which of them you can combine into one sprite. It will not only create the sprite for you, but it will also generate the new CSS for you to place into your stylesheet.




If sprites aren't your cup of tea, then use Data URI's. Like sprites, they can be tricky to efficiently maintain, but again, someone has done some of the heavy lifting for us. [CSSEmbed](http://github.com/nzakas/cssembed/wiki), created by Nicholas Zakas, is a great command line tool for parsing CSS and generating Data URIs where appropriate.


 


### Server side optimizations


 


You can reap great benefits from some basic optimizations in your .htaccess file as well. Enabling gzip compression for not only html, but also stylesheets and scripts, can greatly reduce the size of your files, typically [by about 70%](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_3.html). In fact, you can--and should--gzip any textual content that is requested on the server. It's not necessary to enable gzipping for files like images or PDFs, as you will not notice any improvement in size. In fact, you may see the size of those files actually _increase_ if you try to gzip them.


 


You should also set a far future Expires header. The Expires header is used by the server to tell the browser how long a component can be cached for. While this technique doesn't do anything for first time visitors, applying a far future Expires header to your images, stylesheets and scripts will greatly reduce the number of HTTP requests for return visits.


 


Depending on your role and familiarity with server side technologies, you might feel a bit uncomfortable making significant changes to your .htaccess file. Thankfully someone has already done the heavy lifting for us. There's actually an [.htaccess file already configured](http://github.com/sergeychernyshev/.htaccess) with all of these settings that you can just download and drop into place on your server.


 


## Conclusion


 


Performance matters. More and more studies are confirming that it's tied to the success of major business objectives. With Google now taking page performance into consideration in their rankings, it can no longer be ignored. Users want sites that are fast. We can give them those, without having to reduce the quality and effectiveness of our designs.


 


If you perform these basic optimization techniques, you'll considerably improve the performance of your site and you'll do so without having to sacrifice your design at all. In fact, you can implement all 35 of the [best practices for performance](http://developer.yahoo.com/performance/) as recommended by Yahoo! without any noticeable difference in your design.




If you also make use of the plethora of freely available tools to simplify each step, you'll find you don't have to spend a lot of time to notice a significant improvement in your page load time. Of course, if you're using a build tool the best solution would be to grab the command line versions of these tools and automate them, but that's a discussion for another article.


 


It's time we stop making excuses and start giving performance the respect it deserves and our users the faster experience they want.
  *[[OMG](http://www.phpied.com/omg-initial-checkin/)]: One-click Minifier Gadget
