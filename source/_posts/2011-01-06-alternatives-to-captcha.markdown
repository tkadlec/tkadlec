---
comments: true
date: 2011-01-06 21:21:44
layout: post
slug: alternatives-to-captcha
title: Alternatives to Captcha
wordpress_id: 864
tags:
- usability
- users
---

It seems I stirred the pot a little more than expected with my post calling for the [death to captchas](http://timkadlec.com/2011/01/death-to-captchas/). If you haven’t read the post, it was basically a rant detailing all the issues with captcha systems—accessibility and usability concerns primarily. My goal was to identify the problem, but quite a few people called me out for not taking the time to highlight alternatives (I actually did mention Akismet, but only in passing). The criticism was fair enough and since there appears to be interest, I thought a follow-up post pointing out three alternative solutions that don’t interrupt the user would be a good idea.

Just a warning ahead of time because I know people are going to mention it—none of these solutions are 100% foolproof, just as captchas are not 100% foolproof. I acknowledge that, but that’s beside the point. While it would be nice to use a system that detects and eliminates 100% of the spam without any false positives, I don’t think that’s a realistic expectation at this point in time. My goal is to eliminate as much as spam as possible without negatively affecting the experience of my users.

So let’s get started shall we?


## Akismet


The only alternative solution I proposed in the prior post is also the one I most commonly use. Taken directly from [their site](http://akismet.com/):


> Akismet is a hosted web service that saves you time by automatically detecting comment and trackback spam. It’s hosted on our servers, but we give you access to it through plugins and our API.


Here’s the basic gist. Every time a form using Akismet is submitted, that information is sent to the Akismet service. Akismet then performs a series of tests (including whether that email or message has been marked as spam by other users of the service) on that information to determine if it’s spam or not. The service then returns a value indicating the results of these tests.

If Akismet thinks it’s spam, it keeps the information in their database for 15 days in case you need to check it out and approve it. If you do find a false positive, Akismet will re-analyze the information to attempt to learn from it.

Traditionally, Akismet has been used on blogs (primarily Wordpress driven ones). However since the API is available, there have been many plugins and libraries created that allow you to easily use the service on other platforms, and for any type of form you would like (contact, sign-up, etc).

I use Akismet on this site and it’s been very effective. I can remember only a handful of spam comments that got through, and even less false positives. Meanwhile, Akismet has managed to successfully mark ~45,000 messages as spam. Not too bad.


## Roll Your Own Heuristic Solution


Another alternative solution is to use a heuristic spam detection system. Basically, you would check the message against a series of specific criteria to see how likely it is to be spam. Jonathan Snook [outlined a method for doing just this](http://snook.ca/archives/other/effective_blog_comment_spam_blocker) a couple of years ago.

In his system, he checked a long list of rules and used a point based system to weigh the results. For example, for anytime ‘viagra’ was found in a comment he would apply -1 points. At the end of the checks, if the number is below a certain level, he marks the message as spam. At the time he wrote the post, he was only getting a spam message every one or two weeks.

Building a heuristic approach like this would not be particularly difficult or time-consuming. It would also allow you the opportunity to fine-tune the system based on common traits you are seeing amongst spam submissions. More importantly, as with Akismet, it would not get in the way of your users.


## Bayesian Filtering


Taking the heuristic solution one step further, you could use a bayesian filtering method (like most email spam filtering services). A bayesian approach determines the probability that a message is spam based both on what that message contains and also the contents of past messages that were marked as spam.

It actually works the other way too--a bayesian filtering system can also compare the words that are typical in ‘good’ messages to help determine if a message is safe.  What works so beautifully about a bayesian approach is that it will progressively get better the more it is used and the larger it’s library of ‘good’ and ‘bad’ words grows.

You could easily roll your own solution here if you would like. There are numerous bayesian filtering classes written in a variety of programming languages, that are readily available online.



## Any combination of the above


You can of course combine any of the above to give yourself an even more robust system if you would like. In my experience, there isn’t much of a reason to combine Akismet with anything. It’s been robust and accurate enough that I just haven’t had the need. If you’d rather not use their service, however, combining bayesian filtering with some general criteria would create a strong layer of defense against spam attacks.

Again, as stated above, none of these methods are entirely, 100% foolproof. They are, however, quite effective and will bring the number of spam messages that get through to an almost negligible amount. A few minutes a week would be all it would take to clean those up.

To me, these solutions are much better alternatives to using a captcha system. They still catch the spam, but they remain transparent to the user.
