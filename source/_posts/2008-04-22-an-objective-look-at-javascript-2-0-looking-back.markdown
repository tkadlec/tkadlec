---
comments: false
date: 2008-04-22 19:00:00
layout: post
slug: an-objective-look-at-javascript-2-0-looking-back
title: 'An Objective Look at Javascript 2.0: Looking Back'
wordpress_id: 66
categories:
- Javascript
tags:
- javascript
---

There has been [no](http://www.dustindiaz.com/java-in-our-script/) [shortage](http://blogs.msdn.com/cwilso/archive/2007/10/31/what-i-think-about-es4.aspx) [of](http://weblogs.mozillazine.org/roadmap/archives/2007/10/open_letter_to_chris_wilson.html) [debate](http://my.opera.com/haavard/blog/2007/11/02/ars-technica-mozilla-the-bad-guys-fighting-microsoft-the-good-guys) over Javascript 2.0, based on ECMAScript 4.0. Some people are extremely excited about some of the new features being discussed, and some feel that Javascript 2.0 is shaping up to look a bit too much like Java or even C++ for their tastes.

Whether you like the new features being proposed, think they're silly and unnecessary, or have no idea what the heck I am talking about, I think it's important to have a firm grasp on some of the changes being proposed. Doing so will help you to better understand both sides of the debate, and also help to prepare you for when Javascript 2.0 becomes available for use.

There's far too many changes and fixes to discuss them in one post, so this will be an ongoing serious of posts. I'll be taking a look at what the new language provides us and why. Hopefully by taking a closer look at all the changes, we can get a better feel for how those changes affect both web developers and javascript in general. First though, we should take a quick look at how Javascript got to this point, and the reasoning behind the changes beings suggested in Javascript 2.0.


## Once Upon a Time...


Javascript has been around since 1995, when it was debuted in Netscape Navigator 2.0. The original intent was for Javascript to provide a more accessible way for web designers and non-Java programmers to utilize Java applets. In reality though, Javascript was used far more often to provide levels of interactivity on a page...allowing for the manipulation of images and document contents.

Microsoft then implemented Javascript in IE 3.0, but their implementation varied from that of Netscape�s and it became apparent that some sort of standardization was necessary. So the European Computer Manufacturers Association (ECMA) standards organization developed the TC39 committee to do just that.

In 1997, the first ECMA standard, ECMA-262, was adopted. The second version came along a bit later and consisted primarily of fixes. In December of 1999, when the third version rolled out, the changes were more drastic. New features like regular expressions, closures, arrays and object literals, exceptions and do-while statements were introduced, greatly adding value to the language. This revision, ECMAScript Edition 3, is fully implemented by Javascript 1.5, which is the most recently released version of Javascript.

Like ECMAScript 3, the proposed ECMAScript 4 specification will provide a very noticeable change in the language. As it stands now, Javascript 2.0 will be featuring, among other changes, support for things like scoping, typing and class support.


## Let the Debate Begin


While some of the changes are bug fixes, the justification for the major revisions appears to be largely based on providing better support for developing larger-scale applications. With the growing popularity of AJAX, and the rise of RIAs, Javascript is now being used for much larger-scale apps than it was ever intended for. The proposed changes to ECMAScript 4 are intended to help make development of those kinds of apps easier by making the language more disciplined and therefore making it easier for multiple developers to work on the same application.

This is where the debate starts....how much do we need these revisions? Technically, we can implement a lot of the same kinds of structures using the language as it stands currently. The proposed changes are aimed at making that easier, but there are some people who worry about the effect this may have on what is currently a very expressive and lightweight language.

Which group is correct? Are the changes going to make our lives as Javascript developers easier, or force us to lose a lot of what makes Javascript such an attractive scripting language to use today? I think the only way to really judge how the changes will affect us is to take a closer look at the changes themselves and see both the good and the bad.
  *[AJAX]: Asynchronous Javascript and XML
  *[RIAs]: Rich Internet Applications
