---
comments: false
date: 2008-12-16 19:00:00
layout: post
slug: exploring-cross-document-communication
title: Exploring Cross Document Communication
wordpress_id: 45
categories:
- Javascript
tags:
- javascript
---

One of the new features that HTML5 offers web developers is a way to send information between documents on different sites via Javascript. Currently for security and privacy reasons, browsers prevent cross site scripting but with HTML5's Cross Document Messaging, the intention is to allow documents to communicate with each other without sacrificing security.

To experiment with these methods and events, you'll need to be running either IE8, Firefox 3 or the WebKit Nightlies. Opera 9+ provides support as well, but they use an older version of the spec which required the postMessage method to be called from the document object instead of the window object.

There are two key steps involved with HTML5 Cross Document Messaging. The first is posting the message. You do this by calling the window's postMessage() function. The postMessage function takes two arguments: the message to be sent, and the target origin.

Then, to receive the message in the other window, you need to watch for the window's message event using window.addEventListener or something similar. To help show how this works, I've set up an example for you to see [here](http://www.timkadlec.com/crosssite_get.asp). In my example, both the sending window and the receiving window are located within the same domain (timkadlec.com), but as long as you have a reference to a window, you can communicate cross domain the same way.


## Walking the Code


Take a look at the source code and you'll see that I'm simply using one window (window A) to open the other (window B) so that I have a reference to it. Window B contains two buttons that when clicked, use the postMessage method to post a message back to window A, like so:


<pre>
<code class="language-javascript">
window.opener.postMessage('John Smith', 'http://www.timkadlec.com');
</code>
</pre>

We use window.opener to get our reference to window a, and then call the postMessage function and send the message 'John Smith' back to it. We specify that the origin is timkadlec.com in the targetOrigin argument.

Now back in window A, we need to prepare to receive the message. To do so, we look for the message event.

<pre>
<code class="language-javascript">
window.addEventListener('message', receiver, false);
</code>
</pre>

As you can see above, I'm using addEventListener to listen for the message event, and once the event occurs, we call the receiver function.

<pre>
<code class="language-javascript">
function receiver(e){
	if (e.origin == 'http://www.timkadlec.com'){
		if (e.data == 'John Smith') {
			alert(e.data);
			e.source.postMessage('Valid User', e.origin);
		} else {
			alert(e.data);
			e.source.postMessage('FAIL', e.origin);
		}
	}
}
</code>
</pre>

In the receiver function, we verify that the origin of the event is timkadlec.com (line 2). This is highly encouraged, as it ensures that we only receive messages from domains we are expecting to hear from. If you skipped this step, any domain could freely affect your page, and that could get a bit messy.

Then, we use the event's data property to retrieve the message that was sent. Based on the message received, we then use the source property of the event to obtain a reference to the window that sent the message. Then, again using the postMessage method (lines 5 and 8), we send a message back to window A.

This is a pretty straightforward example, and is really just meant to demonstrate how easy it is to post messages back and forth between documents. There's another good example up that [makes use of iframes](http://austinchau.blogspot.com/2008/11/html5-cross-document-messaging.html) if you want to see another example of cross document messaging.

## Some Security Considerations

Hopefully you can see that cross document messaging is both simple, and potentially quite useful for things like widgets, or authentication. However, there are some security risks if you don't take the time to double check a few things. First, like mentioned before, you should always double check the origin of the sent message. You don't want to be just accepting messages from anyone...that's kind of the reason cross-site scripting isn't allowed in the first place.

Secondly, it is possible to use the asterisk in the targetOrigin argument to allow your message to be posted to any domain. However, you should be sure to never use the asterisk symbol when sending confidential information. In those cases, you should be specifying the targetOrigin specifically so that you can guarantee that only the intended recipient gets the information.
