---
comments: false
date: 2008-05-17 19:00:00
layout: post
slug: behavior-in-your-presentation
title: Behavior in Your Presentation
wordpress_id: 61
categories:
- CSS
tags:
- css
- standards
---

I've spent some time lately playing around with the [WebKit Nightly Build](http://nightly.webkit.org/). In addition to having advanced CSS support, the nightly build also introduces a few new proprietary CSS properties (though the plan is to eventually get W3C to implement them in the CSS specification). There are some really cool features being implemented, including CSS gradients, masks and transforms. One new feature, CSS transitions, has me a little on the fence though.

CSS transitions are definitely a cool idea. Using one simple line of CSS, we can specify how we want a particular style to change. For example, a very common thing to do with CSS is change a link's color when hovered over. To do so, you just use the :hover pseudo-class like so:
`
`

`



	
  1. a{

	
  2. color: blue;

	
  3. }

	
  4. a:hover{

	
  5. color: red;

	
  6. }


`
Browsers make the color change immediately when a user hovers over the link. Using WebKit's transition property, we can tell the browser to instead make a smooth transition. For example, to make the color slowly change from blue to red over the course of two seconds, we could do the following:
`
`

`



	
  1. a{

	
  2. color: blue;

	
  3. -webkit-transition: color 2s linear;

	
  4. }

	
  5. a:hover{

	
  6. color: red;

	
  7. }


`
We tell the browser (line 3) what style we want to animate (color), for how long (2s) and what kind of transition we want to use (linear). If you have the WebKit nightly build, I set up [an example](http://www.timkadlec.com/transition.asp) using the CSS above. It works great, and the transition is super smooth. Better yet, the other browsers just disregard it and perform the color change as usual. Simple and cool right?


## Mixing Things Up a Bit


The problem I have with it is that it I think it starts to put CSS in our behavior layer, which is not so cool. Remember, one of the major benefits to proper use of web standards is being able to separate our content, presentation and behavior onto their own separate layers. By using CSS to make these changes, we make it difficult to interact with these properties using Javascript. Will we have access to information regarding how far into the animation we are? Will the transition fire some sort of onFinish method? Javascript would be needed to add this level of flexibility...not CSS.

While looking around for more information, I was happy to run across a [post from late 2007](http://snook.ca/archives/javascript/css_animations_in_safari/) by Jonathan Snook that shares my opinion on the matter. One thing Jonathan suggested was that while browser animation is not a bad idea perhaps it should have been an extension to the DOM instead. That would offer more robustness and flexibility, and seems to preserve the separation of concerns a bit better.

Don't get me wrong...I'm very excited about most of the new features on display in the nightly build. I can also see how the line between behavior and presentation is a bit blurred already. After all, isn't :hover a bit of a behavioral style? I just think that given the potential interactivity here, I have to agree with Jonathan and say that adding a method to the DOM would make more sense in this case.
