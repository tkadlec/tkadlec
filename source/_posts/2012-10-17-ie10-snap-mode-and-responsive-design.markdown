---
layout: post
title: "IE10 Snap Mode and Responsive Design"
date: 2012-10-17 20:30
comments: true
categories:
tags: 
- responsive
- microsoft
---
Maximiliano Firtman has done an excellent job providing an overview of [what to expect from IE10 in Windows 8](http://www.mobilexweb.com/blog/windows-8-surface-ie10-html5), but I wanted to dig just a little deeper on one feature in particular. 

In Windows 8, there are two "modes" of use: Metro mode and classic mode. Metro mode sports the spiffy new UI while classic is the same old boring Windows of yore. When you run Internet Explorer 10 in Metro mode (the default) there's a cool new feature that lets you "snap" a window to the side so you can use two simultaneously. This window, of course, is made to be far more narrow. 

Here's the wrinkle: when snapped, IE10 ignores the meta viewport tag for any viewport smaller than 400 pixels in width (which it is, when in snap mode). This in turn messes up your beautifully set responsive plans and results in the same kind of smart scaling you see on non-optimized sites on an iPhone or Android device.

To get IE10 in snap mode to play nicely you have to use  [CSS Device Adaptation](http://dev.w3.org/csswg/css-device-adapt/). For the unfamilar, CSS Device Adaptation allows you to move your viewport declarations (such as width, zoom, orientation, etc) into your CSS, using a rule like so:

<pre>
<code class="language-css">
@viewport{
	[viewport property];
}
</code>
</pre>

IE10 supports the <code>@viewport</code> rule with a -ms prefix. So the viewport rule ends up looking like:

<pre>
<code class="language-css">
@-ms-viewport{
	[viewport property];
}
</code>
</pre>

What Microsoft recommends is adding the rule:

<pre>
<code class="language-css">
@media screen and (max-width:400px) {
	@-ms-viewport{
		width:320px;
	}
}
</code>
</pre>

The rule above would ensure that for any viewport under 400px wide, IE would set the width to 320px and scale from there. I'm not crazy about the introduction of pixels into an otherwise fluid layout (see [Lyza's post on em-based media queries](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/) for a little bit about why). Instead I recommend:

<pre>
<code class="language-css">
@-ms-viewport{
	width: device-width;
}
</code>
</pre>

Seeing that this worked, I had three main questions.

## 1. Why does device-width work?
While the specification states that [device-width should return the width of the "rendering surface" of the device](http://www.w3.org/TR/css3-mediaqueries/#device-width), Windows 8 doesn't seem to adhere to that when in snap mode. Unless they are claiming that in snap mode the "rendering surface" is just the snapped portion of the screen.

## 2. What about other browsers?
Early versions of Chrome and Firefox are both available for Metro and using the typical meta viewport element is enough to ensure layouts adjust while in snap mode.

## 3. Why did Microsoft choose to ignore the viewport tag?
My initial reaction was to reach for the torches and pitchforks. Though they have been doing some awesome work lately, IE does have a history of questionable moves. However, after chatting with the awesome <a href="http://twitter.com/rainypixels">Nishant Kothary</a> over at Microsoft (seriously—Nishant is a great example of how to do developer relations), I have to soften my stance at least slightly.

The meta viewport element is non-normative, that is, it isn't actually a standard. It was first implemented by Apple for the iPhone and quickly adopted by other platforms.

The <code>@viewport</code> rule, however, is in the process of being standardized by the W3C. In fact, the only time the viewport element is mentioned is to explain how to translate it into the @viewport rule. So in this way, you could make the case that the team over at Microsoft is banking on the future.

The other thing to keep in mind is that you can build native Metro apps using HTML, CSS and JS. This means that the approach Microsoft chooses for handling device-adaptation in IE10 is the same approach they have to use for Metro apps.

I'm with them in thinking that <code>@viewport</code> is the more elegant solution and I also admire their decisions to try and adhere to standards. That being said, it's a gutsy move and I do worry that it was premature. By going this route, they've ensured that the ever-increasing number of sites that make use of the meta viewport element will not display as intended in the narrower viewport. And considering that support for CSS Device Adaptation is currently limited to Opera and IE10, developers aren't going to switch their approach anytime soon.

On the surface it seems to me that it would have made more sense to introduce support for <code>@-ms-viewport</code> while maintaining support for the meta viewport element across all modes. They still could have pushed <code>@-ms-viewport</code> as the best way to build for Metro apps (in particular) and IE10, but it would have ensured that existing sites weren't breaking in their browser.

That being said, the standard disclaimer that it's easy to judge from the outside is in full effect. I know that the IE team felt that this move was the responsible one to make, and the best scenario for the web. I also know that they undoubtedly have a lot more data on how well the two methods work than I do. It's entirely possible that my suggested way of handling this would've caused issues at some point.

Regardless, the takeaway for today is that you need to start adding the @-ms-viewport rule to your CSS now to ensure your sites look as you would expect on Windows 8.