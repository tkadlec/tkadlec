---
comments: false
date: 2008-05-21 19:00:00
layout: post
slug: libraries-and-frameworks
title: Libraries and Frameworks
wordpress_id: 60
categories:
- Coding
tags:
- coding
- javascript
---

A question I get asked often through emails and other discussions is how I feel about frameworks and libraries, both for scripting and for CSS. I've been meaning to share my thoughts on it for awhile, and now that I see [NetTuts.com](http://nettuts.com/html-css-techniques/which-css-grid-framework-should-you-use-for-web-design/) has posted an article about choosing a CSS framework, I figured now is as good a time as any.

Any of you who have been reading my site since the beginning might remember I wrote [a post](http://www.timkadlec.com/post.asp?q=32) about the importance of forcing yourself to reinvent the wheel. I still stand by that, but that doesn't mean I am entirely against all frameworks. In fact, in the case of scripting libraries, I can definitely see the value in using them. The key point is to be able to tell when to use a library and when not to.


## Why Should You?


One nod for using libraries and frameworks is that reusable code is a good thing. It saves you time and money, and I think most developers have at least some amount of code that they reuse on various projects. I am all for that. We programmers are lazy...errr...efficient. If we can create a solution that is flexible and reusable...then more power to us.

Libraries are also quite handy in large teams. They provide a common base for everyone on the team to start from, and if you stick to a certain naming or formatting convention, in combination with a library of some sort (either in-house developed or not), you can make communication very easy and eliminate a lot of the questions that can arise when passing code from developer to developer.

Large applications also provide us a good reason to use a library. In Javascript, for example, there are a fair amount of browser incompatibilities. These incompatibilities are taken care of by most Javascript libraries, allowing a developer to focus on developing the actual logic for the application not the browser differences that arise.


## On the Other Hand...


There are many issues though that can arise from consistent use of libraries and frameworks. If you use a library exclusively, you can become quite dependant on it. It's important to understand the underlying code that the library is using. If you continue to depend entirely on a library to cover all browser bugs for you, there will come a time when there will be a bug it doesn't cover, and you aren't going to know where to turn to troubleshoot it.

Also, and this is particularly true in CSS frameworks, you can become too attached to what the framework provides and start conforming your code to fit in with the framework or library you are using. There is a saying that goes "When the only tool you have is a hammer, everything looks like a nail." If you are using a CSS framework to create your layout and there is a particular visual style that the framework doesn't quite get right, the most common approach, unfortunately, is to conform to the framework. You start to look for ways to make the layout fit within the frameworks provided structure.

Continuing with CSS frameworks, there is also a definite lack of semantics. You end up with mixing content with presentation by providing HTML markup that uses classes like yui-gb or span-8. I understand that semanticity is not no everyone's top 10 list of important things to do (though I do feel it should be a priority). But if semantics aren't particularly important, why not just use tables to mark up the page. It would take less code and would work almost seamlessly browser to browser. (Please note, I am not in any way condoning the use of tables for layout...I'm just making a point.)


## For those Interested


So, in case you're wondering...here's where I stand on using libraries and frameworks. For Javascript, I occasionally use a library for code, usually on larger apps. Most of my code though is hand-created, however I do try to build with reusability in mind. I guess you could say I have my own personal library that I use.

As far as CSS goes...I don't use frameworks and can't see a time where I will actually do so. The lack of semantics rubs me the wrong way and to be honest with you, most of my CSS is not that similar from site to site. That being said, I have used reset styles of some sort on most projects, and there are a few other basic styles that I tend to include on all of my CSS, but it's no more than a few lines. It doesn't take me particularly long to get a layout set up in CSS, so I don't feel like a framework would help increase my efficiency in doing so.

That last paragraph sounds a bit harsh...but hopefully you understand that that's just one man's opinion. Again, I am not opposed entirely to frameworks and libraries; in fact as I said above I have used Javascript libraries in particular on more than one occasion. I just think it's important that frameworks are used only when appropriate and as enhancements to your coding abilities...not the foundation for them.
