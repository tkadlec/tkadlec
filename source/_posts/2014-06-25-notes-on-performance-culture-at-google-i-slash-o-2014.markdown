---
layout: post
title: "Notes on: 'Performance Culture' at Google I/O 2014"
date: 2014-06-25 13:32
comments: true
categories: 
tags:
- performance
- googleio
---
At [Google I/O 2014](https://www.google.com/events/io), [Lara Swanson](http://twitter.com/laraswanson) and [Paul Lewis](http://twitter.com/aerotwist) discussed performance culture. Since it's one of my favorite topics, I decided to share my notes:

- 34% of US adults use a smartphone as their primary means of internet access.
- Mobile networks add a tremendous amount of latency.
- We are not our end users. The new devices and fast networks we use are not necessarily what our users are using.
- 40% of people abandon a site that takes longer than 2-3 seconds to load.
- Performance cops (developers or designers who enforce performance) is not sustainable. We need to build a performance culture.
- There is no "I" in performance. Performance culture is a team sport.
- The first step is to gather data. Look at your traffic stats, load stats and render stats to better understand the shape of your site and how visitors are using it.
- Conduct performance experiments on your site to see the impact of performance on user behavior.
- Test across devices to experience what your users are experiencing. Not testing on multiple devices can cost much more than the cost of building a device lab.
- Add performance into your build tools to automatically perform optimizations and build a dashboard of performance metrics over time. Etsy notifies developers whenever one of the metrics exceeds a performance goal.
- Surfacing your team's performance data throughout development will improve their work.
- Celebrating performance wins both internally and externally will make your team more eager to consider performance in their work.