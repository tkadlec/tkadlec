---
layout: post
title: "Fast Enough"
date: 2014-01-14 10:33
comments: true
categories: 
tags: 
- performance
---
How fast is fast enough?

I'm asked this question a lot. Page weights and load times vary so much from site to site and industry to industry. While it’s easy to spot the obviously bad examples, it can be much more difficult to find the line between is “fast enough” and what is slow.

My usual answer of “make it as fast as possible” doesn’t seem to make people very happy, so let's try to get at least a little more concrete.

## Compare
One method of attempting to arrive at a measure for “fast enough” on a new site is by seeing how you stack up against the competition. Do some analysis on a few of your key pages. Then do the same for key pages for 10 competitors or so. If you’re doing a redesign, analyze your existing site as well. Then, rank yourself to see where you stack up.

In his book, [“Designing and Engineering Time”](http://www.engineeringtime.com/), Steven Seow talks about the 20% rule. The basic idea is that people perceive tasks as faster or slower than other tasks when the difference in time is at least 20% slower or faster.

For example, say a competitors site loads in 5 seconds. 20% of 5 seconds is 1 second. So to be perceived as faster than them, you need to have your pages taking no longer than 4 seconds (5 seconds load time - 20% difference).

Using this rule, you can come up with minimum viable targets—the slowest possible “fast enough” that puts you ahead of your competition.

## Response Times
On the other end of the spectrum are the response time targets discovered in a 1968 study and later [made popular by Jakob Nielsen](http://www.nngroup.com/articles/response-times-3-important-limits/).

- **100ms** is how long you have for the user to feel like the task was instantaneous.
- **1.0 second** is how long you have for the user’s state of flow to remain uninterrupted (though the delay will still be noticeable).
- **10 seconds** is how long you have before the user loses interest entirely and will want to multitask while the task is completing.

Based on these response time targets, the pie-in-the-sky goal is to be hitting that 100ms barrier and providing people with an instantaneous experience. It’s possible in some cases, though certainly not easy. Even the 1 second barrier can be an aggressive target for most companies today. 

Pairing these aggressive numbers alongside the conservative targets derived from comparison gives you an acceptable range to target for your site (handy to get you started with [a performance budget](http://timkadlec.com/2013/01/setting-a-performance-budget/)).

## Measure the right thing
The next question is whether load time is even the [correct metric to be measuring](http://www.stevesouders.com/blog/2013/05/13/moving-beyond-window-onload/) to determine "fast enough". It certainly has value (as does watching page weight), but it is not the most accurate indication of how a user is perceiving the loading of a page. 

A step up is to measure the [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index) of a page instead. Speed Index doesn’t really bother with what happens at on load. Instead, it looks how quickly the majority of the page gets painted to the browser. It’s a better metric for measuring how page loading is perceived by users than load time is.

For your own site you can get more granular. At what point is the form functional for the user? When can the tab interface be used? You can track whatever you would like with a little bit of [User Timing](https://gist.github.com/pmeenan/5902672#file-user-timing-rum-js).

Even better, measure task completion. For key tasks on your site (even those that require moving between several pages), how long does it take you users to complete them? As [UIE pointed out back in 2001](http://www.uie.com/articles/download_time/), task completion has a huge impact on perceived performance. Want your site to be fast enough for your users? Make sure they can get things done easily and efficiently.

## Don’t stop with launch
Finally, making sure your site is fast enough means you have to keep measuring long after your initial launch. Continue to track those performance metrics over time. Watch how those measurements change as you make adjustments to your site. Look at key business metrics (conversions, bounce rate, etc) and see how changes in performance  impacts them.

Monitoring these metrics over time will also help you to find the right balance between your visual aesthetics and performance. As you make adjustments to either, you should be able to see how it impacts your business helping you to identify whether those changes are adding value or pain.

## So...what’s fast enough?
When you make a decision to create a “richer” experience in any way, you’re trading some level of performance for that richness. That doesn’t mean it’s never a worthwhile exchange to make. [Eye candy has value](http://alistapart.com/article/indefenseofeyecandy) when used appropriately and responsibly.

With anything added to a page, you need to be able to answer the question of “What value does this provide?” and in turn be able to determine if the value outweighs the pain. Careful and continual analysis is the only way you’ll figure that out.

In short, the correct answer to how fast is fast enough is: “It depends”. 