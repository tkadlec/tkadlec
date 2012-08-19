---
comments: false
date: 2008-02-18 19:00:00
layout: post
slug: xpath-in-javascript-predicates-and-compounds
title: 'XPath in Javascript: Predicates and Compounds'
wordpress_id: 76
categories:
- Javascript
tags:
- javascript
- xpath
---

Welcome to the second part of my look at XPath and how it can be used in Javascript. [Part one](http://www.timkadlec.com/post.asp?q=47) served as a real basic introduction to what XPath is, how it can traverse the document tree, and an introduction to using XPath expressions in Javascript using the evaluate method. So far what we have seen is really basic. There is some value in it, but we can build much more robust expressions with a bit more knowledge.


## Getting More Detailed with Compounds


So far, we haven't dealt with any compound location paths...each of our expressions has just gotten nodes that are direct children of the context node. However, we can continue to move up and down the document tree by combining single location paths. One of the ways we can do this (and this should look quite familiar to anyone who has moved through directories elsewhere) is by using the forward slash '/'. The forward slash continues to move us one step down in the tree, relative to the preceding step.

For example, consider the following:
`



	
  1. myXPath = "//div/h3/span"

	
  2. var results = document.evaluate(myXPath, document, null, XPathResult.ANY_TYPE, null);


`
The expression above will first go to the root node thanks to our '//'. It will then get any div elements that are descendants of the root node. Then, we use the forward slash to move down one more level. Now we are saying to get all h3 elements that are direct descendants of one of the div elements that was returned. Finally, we once again use our forward slash to move down one more level, and tell the expression to return any span elements that are direct descendants of the h3 elements we already found.

In addition, we can use the double period '..' to select an elements parent nodes. For example, if we use an expression like '//@title', we will get all title attributes in the document. Let's say that what we actually wanted, is all elements in the document that have title attributes. Using the parent selector (..), we can do just that. The expression '//@title/..' first grabs all title attributes. Then the double period tells the expression to step back up and grab the parent node for each of those title attributes.

This is a pretty handy little feature. We can use the double period to select sibling elements by doing something like '//child/../sibling' where child is the child element, and sibling is the sibling element we are looking for. For example, '//h3/../p' would get all p elements that are siblings of h3 elements.

Finally, we can use a single period '.' to select the current node. You will see this become useful when we introduce the use of predicates.


## Speak Of the Devil


Each expression we've seen returns a bunch of nodes matching criteria. Occasionally, we will want to refine this even further. We can do that using predicates, which are simply Boolean expressions that get tested for each node in our list. If the expression is false, the node is not returned in our results; if the expression is true, the node is returned.

Predicates use the typical Boolean operators, '+', '<', '>', '<=', '>=', '!=', 'and' and 'or'. As promised, the single period becomes much more useful when combined with predicates. For example, we can grab all h3 elements that have a value of "Yaddle" by using the following expression:

`



	
  * //h3[.="Yaddle"]


`
The dot tells the expression to check for the value of that current node. If the value equals "Yaddle", the h3 will be returned to us. Let's take a look at another example, one maybe a bit more practical. Let's say you have a calendar of events, and all you want to retrieve all the events that occurred between 2005 and 2007. Being the smart developers we are, we wrapped all the event years in a span with a class of year, like so:
`



	
  * <span class="year">2007</span>


`
Getting all the year spans where the value is between 2005 and 2007 is easy. We can simply do this:
`



	
  * //span[@class="year"][.<= 2007 and .>=2005]


`
Ok...granted, at first glance that is pretty ugly, so let's break it down.



	
  1. `//span` - Get all span elements

	
  2. `[@class="year"]` - Make sure the only span elements we grab have a class of 'year'

	
  3. `[.>=2005 and .<=2007]` - Make sure the value of span is between 2005 and 2007. We use the '<=' and '>=' operators versus the '<' and '>' operators because we want to also return values in the years 2005 and 2007.


Making sense out of all the slashes and brackets can take some getting used to, so don't be discouraged if it takes you awhile before you can make sense out of what is happening there. Once you get more familiar with the syntax used, you will find you can create some really robust checks in one line of code that would have taken numerous iterations using DOM methods.
