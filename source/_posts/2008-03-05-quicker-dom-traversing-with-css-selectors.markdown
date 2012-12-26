---
comments: false
date: 2008-03-05 19:00:00
layout: post
slug: quicker-dom-traversing-with-css-selectors
title: Quicker DOM Traversing with CSS Selectors
wordpress_id: 74
categories:
- Javascript
tags:
- css
- javascript
---

After looking at XPath and how it can be used to quickly traverse the document tree, I also thought I'd take a look at the [W3C Selectors API](http://www.w3.org/TR/selectors-api/) as it kind of falls in that same line. At this point, it none of the major browsers support it. However, any WebKit build (Safari's engine) since February 7th supports it, and it looks like IE8 will be supporting it as well. I'd be eager to hear if anyone knows where Opera and Firefox stand on getting it going here in the future.

The Selectors API allows us to utilize CSS (1-3) selectors to collect nodes from the DOM. This is actually quite a common enhancement in a lot of Javascript libraries....CSS selectors are a very efficient and powerful way to quickly look up nodes, and since most people are familiar with CSS syntax, it is very user friendly. The Selectors API offers native browser support for CSS selectors using the querySelector and querySelectorAll methods.

The querySelector method as defined by the W3C returns the first element matching the selector, or if no matching element is found, it returns a null value.

The querySelectorAll method returns a StaticNodeList of all elements matching the selector, or if no matching elements were found, it returns a null value. For anyone familiar with DOM traversal, you are probably familiar with NodeLists. NodeLists are returned by methods like getElementsByTagName. The main difference between the StaticNodeList and a NodeList, is that if you remove an element from the document, a NodeList is also affected and therefore the indexes of the NodeList are altered. A StaticNodeList, however, is not affected...hence the Static part.

The querySelector and querySelector methods are very easily used:
`
`

`



	
  1. //returns all elements with an error class

	
  2. document.querySelectorAll(".error");

	
  3. //returns the first paragraph with an error class

	
  4. document.querySelector("p.error");

	
  5. //returns every other row of a table with an id of data

	
  6. document.querySelectorAll("#data:nth-child(even)";


`
In addition to calling the methods with a single selector, you can also pass groups of selectors seperated by commas, like so:
`
`

`



	
  1. document.querySelectorAll(".error, .warning");

	
  2. document.querySelector(".error, .warning");


`
The first line above would return all elements with a class or error or a class of warning. The second line would return the first element with a class of either error or warning.

You can see the advantage of having native support for the SelectorAPI by taking a look at [some test results](http://webkit.org/perf/slickspeed). SlickSpeed runs the test cases using the popular Javascript libraries Prototype, JQuery and ext as well as by using the Selectors API and the results are substantially quicker using the Selectors API. To run the native support test, you will need to go grab the WebKit nightly build. If you don't want to do that, [Robert Biggs](http://blogs.vertigo.com/personal/rbiggs/Blog/Lists/Posts/Post.aspx?ID=33) ran the test in various browsers and has the test results up.
