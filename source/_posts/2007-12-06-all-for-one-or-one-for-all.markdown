---
comments: false
date: 2007-12-06 19:00:00
layout: post
slug: all-for-one-or-one-for-all
title: All For One Or One For All
wordpress_id: 93
categories:
- Javascript
---

Most of us who are just starting in Javascript and more specifically working with the DOM, can probably write some simple scripts using event handlers. However, there is a more memory efficient method that someone relatively new to Javascript (heck, even some people who have been doing this awhile) might not be aware of - event delegation.

Lucky for us, event delegation is not overly complex, and the jump from using event handlers to using event delegation can be made relatively easily.

Let's start by creating a simple script using event handlers, and then recreate it using event delegation. What we want from our simple script, is that whenever a link is clicked on inside of a specified list, we will get the 'href' of the link alerted for us.

First, we will set up the markup. Nothing fancy to see here, just a list with an id of 'links' which will serve as our hook.

Now we can write a simple script that will go through and add an onclick event handler to each of the links in the list. (Note: for the purpose of simplicity, we will just have our functions below. In a real setting, you would want to do some scoping to protect your variables.)

<pre>
function prepareAnchors(){
	if (!document.getElementById) return false;
	var theList = document.getElementById(“links”);
	var anchors = theList.getElementsByTagName(“a”);
	for (var i=0; i < anchors.length; i++){
		anchors[i].onclick = function(){
			alert(this.getAttribute(“href”));
			return false;
		}
	}
}
</pre>

Again, like I said nothing spectacular. We just grab all the links inside of the ul, loop through them, and assign a function to each individual link's onclick event. (Note: At this point, if you  are not able to follow the function above, you are probably not going to get anything useful out of this article. I would instead recommend DOM Scripting by Jeremy Keith.) Now let's recreate the effect using event delegation.

<pre>
function getTarget(x){
	x = x || window.event;
	return x.target || x.srcElement;
}

function prepareAnchors(){
	if (!document.getElementById) return false;
	var theList = document.getElementById(“links”);
	theList.onclick = function(e){
		var target = getTarget(e);
		if (target.nodeName.toLowerCase() ===’a’){
			alert(target.getAttribute(“href”));
		}
		return false;
	}
}
</pre>

This one probably requires a little more explanation. The getTarget() function simply gets the target of the event function, or according to Internet Explorer, the source of the event function.

In prepareAnchors() we get the 'links' list, and assign an onclick event handler to the list as a whole. Now, when anything inside the list is clicked, we simply use getTarget() to find the element that was clicked. If the clicked element was a link, we alert the 'href', if not, we just ignore it.

What are the advantages to using event delegation? Well, for starters, by using one event handler versus many, there is less memory being used to accomplish the same task. On a script this small, you won't be able to tell a performance difference, but larger, more intensive apps will most certainly perform better. Also, by using event delegation, we ensure that our script works even if the DOM has been modified since page load. To see an example of what how modifying the DOM can alter the performance of a script using event handlers, take a look at the excellent comparison done by [Chris Heilmann](http://icant.co.uk/sandbox/eventdelegation/).