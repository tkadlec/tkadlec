---
comments: false
date: 2008-01-17 18:00:00
layout: post
slug: branching-out
title: Branching Out
wordpress_id: 84
categories:
- Javascript
tags: javascript
---

Utilizing branching in Javascript can allow us to create more efficient code. Branching essentially allows us to create "conditional" functions at run-time so we don't have to keep running the same verifications each time a function is called. That last sentence is probably as clear as mud, so let's take a look at an example.

A very common check to perform is whether a browser supports the getElementById() method, like so:

<pre>
<code class="language-javascript">		
if (!document.getElementById) return;
var myContainer = document.getElementById('container');
</code>
</pre>

That is just a very simple verification. We check to see if the browser recognizes the getElementById() method. If it doesn't, we quit what we are doing and don't go any further. If it does, we continue on with our code. It can be quite annoying to have to type out document.getElementById each time you have to use it, so let's create a shorter helper function.

<pre>
<code class="language-javascript">	
var id = function(attr){
	if (!document.getElementById) return undefined;
	return document.getElementById(attr);
}
var myContainer = id('container');
</code>
</pre>

Above, we create an id function that checks to see if the browser supports the getElementById() method, and if it does, it returns the value for us. There are two major benefits here. First, our function does the check for us to ensure the method is supported. Secondly, it's less typing; instead of having to type document.getElementById() each time we want to get an element, we can just type id().

However, let's say that we have a pretty intensive script here and we have to use the id method let's say 20 times. That means that 20 times over the course of our script, we are running a check to see if the browser supports the method, when we already know the answer after the first time we ran the check. Obviously, that isn't very ideal.

Using branching, we can make the check once on runtime, and then return a function that doesn't require checking anymore.

<pre>
<code class="language-javascript">	
var id = function(){
	if (!document.getElementById){
		return function(){
			return undefined;
		};
	} else {
		return function(attr){
			return document.getElementById(attr);
		};
	}
}();
</code>
</pre>

The key here is the parentheses after our function declaration (line 11). This makes the function run right away as soon as the browser sees it.

So while loading the page, the browser comes across this function and runs it. If the getElementById method is supported, it assigns a function that returns the element to the id variable. If the browser does not support the getElementById method, than it assigns a function that returns an undefined value to the id variable.

It may help to look at it this way. By using branching in our function above, we have essentially applied one of two functions to our id variable:

<pre>
<code class="language-javascript">		
// if getElementById is not supported
id = function(){
	return null;
}
// if getElementById is supported
id = function(attr){
	return document.getElementById(attr);
}
//Example usage
var myContainer = id('container');
</code>
</pre>

So now, when we are getting the element using the id function, it doesn't run the check to see if it is supported, because it doesn't need to. If we use our id function 20 times, the browser support check is only performed once: initially as the script is being loaded.

It is important to note that branching is not always going to provide a performance increase. Using branching results in higher memory usage because we are creating multiple objects. So whenever you consider using branching, you need to be able to compare the benefits you will get from not having to run the comparison over and over versus the higher memory usage that branching requires. However, when used properly, branching can be a very handy tool for optimizing your Javascript performance.