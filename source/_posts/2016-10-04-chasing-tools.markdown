---
layout: post
title: "Chasing Tools"
date: 2016-10-04 12:35:44 -0500
comments: true
categories: 
tags:
- process
- community
- frameworks
---
One of the very first projects I ever worked on as a professional was a relatively large site with tons of legacy code. Legacy code brings many headaches. My favorite example was opening a few pages to find that these pages used not one, not two, but three different JavaScript frameworks!

The developers were overworked and the site had never gotten enough budget to give it the rebuild it needed. Granted, they _could_ have stuck with the original framework included but the problem was that as each of the frameworks faded and gave way to the next one, the ecosystem and community around them online dried up and shriveled.

There's a happy ending to this story. Eventually, jQuery was used and all the other frameworks were removed (talk about a big performance win!). jQuery never suffered from the same fate as the other frameworks the team had tried to use—its ecosystem only continued to grow and flourish as time went on.

Of course, the snarky side of me would be happy to point out that had they used good old fashioned JavaScript, the problem would have never manifested in the first place.

That isn't entirely fair though, is it? There's a reason people build these tools. Tools exist because somewhere someone thought one would be helpful in some way. So they created it and they shared it. And frankly, that's pretty darn awesome. 

So maybe that's why some people were a little upset when they read the post going around that [pokes a little fun at the current state of learning JavaScript](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.eid2utvdg). The post was intended to be humorous (I laughed), but to some it felt like a critique of the ecosystem and those contributing to it. 

To be clear, I don't think that was the point of the article. The thing is, it's not the ecosystem that's the problem. It's great that we have a plethora of options available to us. It beats the alternative. No, the problem is the way we've chased after each new tool that comes along and even more concerning to me, the way we teach.

Our industry loves tools, and not without reason. Tools help us to be more productive. They can help to automate low-hanging fruit that is critical to the success of a project. They can help to obfuscate tricky browser compatibility issues. The can free us up to focus on the bigger, more interesting challenges presented. Tools are generally a "Good Thing".

Unfortunately our love of tools has lead to an unhealthy mentality where we constantly feel the need to seek out the next great tool to be released.

Build scripts are a fun example. [Grunt](http://gruntjs.com/) came out and was really instrumental in getting the front-end community as a whole to give more serious consideration to having a formal build process. Just as people started to adopt it more frequently, the early adopters were already starting to promote [Gulp](http://gulpjs.com/) as a superior option. As some developers tried to make the shift, still others jumped on [Broccoli](http://broccolijs.com/). For many, it seemed that just as they started to understand how to use what _had_ been the new best option, an even newer best option would become available.

Mostly, I think the evolution is healthy. We should be iterating and improving on what we know. And each build tool does things a little differently and different people will find one or the other fits their workflow a bit better. The problem is if we blindly race after the next great thing without stopping to consider the underlying problem that actually needs solving.

I don't know _exactly_ what fosters this mentality, but certainly the way we approach teaching JavaScript (and web technology as a whole) doesn't help.

If you've ever tried to find resources about how to use vanilla JavaScript to solve a given issue, you'll know what I'm talking about. It's rare to find a post or talk that doesn't throw a tool at the problem. A common critique you could hear early in the days of jQuery really taking off was that too many posts assumed the use of jQuery. You've likely heard similar critiques of using Sass to demo something where you could've demoed it using regular old CSS. When the fictional character in the previously mentioned post responds to a simple question with "you should learn React", it may be a little contrived but it isn't uncommon.

Just as each additional tool adds complexity to our development environment, each additional tool we mention when teaching someone about how to build for the web introduces complexity to the learning environment. That, I think, was the point of the post going around. Not that the ecosystem is flawed, not that the diversity of options is a bad thing, but that when someone wants to find an answer to a problem, the response they get frequently starts with "use this tool, then set this up".

It's ok—good even—to teach new tools that may be helpful. But when we do so, we need to be careful to present why these tools may be helpful as well as when they may not be. We need to be careful to separate the underlying issue from the tool itself, so that the two do not become conflated. Let people learn what's going on under the hood first. Then they can make a determination themselves as to the necessity of the tool.

I've said it [before](https://timkadlec.com/2015/09/the-fallacy-of-keeping-up/), but the most valuable development skill to develop is not to learn Node.js. Or React. Or Angular. Or Gulp. Or Babel. The most valuable thing you can do is take the time to learn the core technologies of the web: the network stack, HTML, CSS and JavaScript. The core understanding of the web serves as your foundation when making decisions about tooling.

Those tools are useful in the right context, but you need to be able to understand what that context is. Whenever you come across an issue that needs solving, think about what the underyling problem actually is. Only once you've identified that should you consider whether you might want to use a tool to help you address the problem, and which tool that might be.

For the tool itself, there's a few things you might want to consider. Here's what I tend to look at:

1. **Who benefits from the use of this tool and how?**
Someone has to benefit, or else this tool doesn't really need to be here, does it? If you can't articulate who is benefitting and how they're benefitting, then it's probably not a tool that needs to be used on this particular project.
2. **Who suffers and how?**
There is always a trade-off. Always. Someone is paying for the use of this tool in some way. You could be adding complexity to the development environment or, in the worst case scenario, it could be your users who are paying the price. You need to know the cost so that you can compare it to the benefits and see if its worthwhile.
3. **How does it fail?**
I'm stealing this from [the fine folks at Clearleft](http://clearleft.com/thinks/398), but I love the way this frames the discussion. What happens when something goes wrong? Like it or not, the web is a hostile environment. At some point, for someone, something will break.
4. **Does the abstraction feed the core?**
If it's a framework or library, does it help to strengthen the underying core technologies in a meaningful way. jQuery to me is a good example of this. jQuery was a much friendlier way to interact with the DOM and some of the work they did ended up influencing what you can use do with JavaScript, and how that should work.

There may be more questions you want to ask (how active the community is, the number of contributors, etc), but I find this is a really good start to help me begin to think critically about whether or not it is worthwhile to introduce another tool into my current environment.

Very often, the answer is no. Which means that when you're chatting with some developer friends and they're talking about using this brand new framework inside of a new code editor released last week, you may have to politely nod your head and admit you haven't really dug into either yet. That's nothing to be ashamed of. There is power in [boring technology](http://mcfunley.com/choose-boring-technology). Boring is good.

Have you ever watched someone who has been using Vim for years work in it? It's amazing! Some joke that the reason they're still in there is because they haven't learned how to quit yet, but I think they're onto something. While some of us jump from tool to new tool year after year, they continue to master this "boring" tool that just works—getting more and more efficient as time goes on.

We are lucky working on the web. Not only _can_ anyone contribute something they think is helpful, but many _do_. We benefit constantly from the work and knowledge that others share. While that's something to be encouraged, that doesn't mean we need to constantly be playing keep-up. [Addy's advice on this is absolutely spot-on](https://medium.com/@addyosmani/totally-get-your-frustration-ea11adf237e3#.cfv6h8pzb):

> ...get the basics right. Slowly become familiar with tools that add value and then use what helps you get and stay effective.

Start with the core and layer with care. A rock-solid approach for building for the web, as well as for learning.