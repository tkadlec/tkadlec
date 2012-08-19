---
comments: false
date: 2007-12-12 19:00:00
layout: post
slug: one-clear-to-rule-them-all
title: One Clear to Rule Them All
wordpress_id: 92
categories:
- CSS
---

One really common situation for web developers to run into is how to properly clear their floats. There are numerous approaches that have been discussed and used, but only recently have I come across a method that I believe is superior to the rest of the ones I had used up to now. In this post, we will first take a look at the problem caused by floats, and then we will look at some of the ways of fixing that problem.

There are some simple styles that will stay consistent throughout the examples:

`



	
  1. #wrap{

	
  2. border: 1px solid #000;

	
  3. }

	
  4. .main{

	
  5. float: left;

	
  6. width: 70%;

	
  7. }

	
  8. .side{

	
  9. float: right;

	
  10. width: 25%;

	
  11. }


`
The problem is that when you float an item, you are taking it out of the normal flow of the document, so other elements on the page act as if the floated element is not there. You can see this below (I am using white on black in my examples so they stand out more):

![Broken Float](images/clearfloat1.jpg)

As you can see, #wrap doesn't see .main or .side because they are floated, so our border doesn't extend down. There are numerous proposed solutions to this problem.


## Extra Markup


One method that is tried and true, is to add another element inside of #wrap after both of the floats. For example, you could use a div with the class of bottomfix. Now you just set the style of bottomfix to be `clear:both`, and your wrap will now extend to contain the floats and the bottomfix.

Obviously, if we are shooting for separation of presentation and content (as we should be), this is not an ideal situation. We now have an element in place simply to create a presentational effect.

Instead, let's take a look at some ways of creating the same effect using only CSS. To do so, you have to have a very brief understanding of how Internet Explorer handles floats.


## IE Floats


So far it may seem that Internet Explorer (IE) handles floats the same as other browsers, but as we look a little closer, we see that is not the case. Internet Explorer has a proprietary property called `hasLayout`. For the purpose of this article, just understand that for an element to have "layout", in more cases than not it will need either a width or a height. `hasLayout` can only be affected indirectly by your CSS styles, there is no `hasLayout` declaration.

Why is this important to know? Because if an element's `hasLayout` property is equal to true, that element will auto-contain the float elements. What this means, is that to get IE to clear the floats, we really only have to add `width: 100%` to #wrap. Now #wrap's `hasLayout` property is equal to true, and it will now automatically extend to contain the two floated elements.

It's far from being ideal though. While #wrap will now extend properly, we have to be careful about our margins. Elements on the page may respect the containing element (#wrap), but they will not respect the floated elements.

To show this, let's add another div with an id of next. We'll give this div a 1 pixel pink border just so it stands out. Let's also add a 10px bottom margin to the main element. The results in IE are shown below:

![IE with layout](images/clearfloat2.jpg)

As you can see, by adding the width to #wrap, IE will now allow #wrap to contain the floats. You can also see that our 10px margin had no effect. In fact, the top margin of our first paragraph, and bottom margin of our last paragraph are also ignored in IE. So, if you want some space here, you need to use padding, not margins. You can also set a margin to #wrap...since it is the containing element, it's margins are still respected.


## Moving On


So now we have cleared the floats in IE, and we understand why. What about the other browsers though? Most will allow you to use the `:after` pseudo-class to add some content and have that content clear the floats.



	
  1. #wrap:after{

	
  2. content: ".";

	
  3. display: block;

	
  4. clear: both;

	
  5. visibility: hidden;

	
  6. height: 0;

	
  7. }


What this does in the browsers that recognize it is add a period after the content of #wrap and have it clear the floats. We then use the height and visibility properties to make sure the period doesn't show up. Remember, IE still needs to have "layout" on #wrap because it doesn't recognize the `:after` pseudo class.

One problem...IE/Mac doesn't auto clear, and doesn't recognize the `:after` pseudo class. So we have to use some hacks to get IE/Mac and IE/Win to play nicely together. I won't be getting into this, you can find a really nice article about it at [Position Is Everything](http://www.positioniseverything.net/easyclearing.html).


## An Easier Way


Thankfully, there is an easier way that has been credited to [Paul O'Brien](http://www.pmob.co.uk/). For most browsers to clear the float we simply need to add `overflow: hidden` to #wrap. Just make sure that there is also a width on #wrap so it has "layout" in IE and you are good to go. Our CSS ends up looking like this:



	
  1. #wrap{

	
  2. border: 1px solid #000;

	
  3. width: 100%;

	
  4. overflow: hidden;

	
  5. }

	
  6. .main{

	
  7. float: left;

	
  8. width: 70%;

	
  9. }

	
  10. .side{

	
  11. float: right;

	
  12. width: 25%;

	
  13. }


No seriously....that's it. #wrap will now fully contain both the floats. Just keep in mind that if you want to add some space around either of the floated elements, you will want to use padding instead of margins because otherwise IE will ignore it.
