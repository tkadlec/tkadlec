---
comments: false
date: 2009-05-06 19:00:00
layout: post
slug: building-a-stronger-dom
title: Building a Stronger DOM
wordpress_id: 35
categories:
- (X)HTML
tags:
- (x)html
- semantics
---

In [Nate Koechley's](http://nate.koechley.com/blog/) excellent talk on [Frontend Engineering](http://video.yahoo.com/watch/4671445/12486762), he talks about the importance of building a "stronger DOM". By marking up your site with meaningful elements and attributes, you give your markup more value and provide a richer experience for both users and machines.

In addition, a strong DOM provides you with numerous attributes and elements that you can make use of to style the content to your hearts desire. This gives you much more power and control with your CSS, and helps to greatly decrease your usage of extraneous divs and classes

A very quick way to improve your markup skills, and therefore the value of your content, is to expand your knowledge of HTML elements, and start making use of a few you might not have been aware of.


##  and 


The fieldset element is used to group related controls and labels within a form. They are a great way to help make your form easier to understand, and more accessible for speech-navigated user agents.

It should be used in conjunction with the legend element to provide an even richer and more usable experience. The legend element basically defines a caption for the fieldset. Here's an example of how you could use these elements in your markup:



	
  1. 
	
  2. 
	
  3. Team Captain

	
  4. Name

	
  5. 
	
  6. 
	
  7. Player #2

	
  8. Name

	
  9. 
	
  10. 



## 


An often forgot element that you can start using immediately in your text is the q element. The q element is very similar to the blockquote element, but should be used in a different context. The blockquote element is meant to be used for longer, _block-level_ quotes. The q element, on the other hand should be used for short quotes.

All major browsers, other than IE6 and IE7, will automatically insert quotation marks around the content within the q element, according to the HTML spec. There's a few ways to work around this, but my favorite solution is the one proposed by Stacy Cordoni in an [A List Apart article](http://www.alistapart.com/articles/qtag/) from 2006. Her solution is to remove the quotes from around the q element using the :before and :after pseudo-classes to even the playing field. Then, with each of the major browsers not rendering quotes, you can insert them directly into your markup, ensuring that all browsers render your quote the same.



	
  * "Remember that drover, the one I shot in the mouth so's the teeth come out the back of his head?", asked Munny.




## 


The cite element is used to identify a reference or citation to another source, like a book or another website. By default, each of the major browsers render the cite element in italics. Making use of our q element example, adding the cite element would give us something like this:



	
  * "Remember that drover, the one I shot in the mouth so's the teeth come out the back of his head?", asked Munny.




## 


The dfn element is used to markup the defining instance of a word or phrase. It's important to note that it is not intended to markup the actual definition itself, but instead the word or phrase being defined. Most major browsers will render the content within the dfn element in italics, though of course you can alter that as you wish with CSS.



	
  * The dfn element is used to markup the defining instance of a word or phrase.




##  and <del></del>


Here's one for anyone who writes any sort of articles online. You can use the ins and del elements to identify content that has been either inserted or deleted since the content's publication. The ins element, by default, is underlined, and the del element, by default, is striked through.



	
  * SXSW's parties are a great time to <del>booze it up with</del> mingle with fellow developers.




## 


The address element is slightly misleading. One would think you would use it to mark up a physical address, but that's not necessarily the case. The address element is actually intended to contain the contact point for the document containing it. While this certainly could contain a physical address, it doesn't have to. It could house any sort of contact information provided that it is contact information for the author and/or owner of the document in question.

For example, I could use the address element to provide my contact information since I am the owner of this article, like so:



	
  * [tim@timkadlec.com](mailto:tim@timkadlec.com)


By default, the address element is rendered in italics in each of the major browsers.


## See For Yourself


If you're interested, I [put up a page](underused.htm) with examples of each of the elements above. I did not apply any CSS, so you can see how each element is rendered by default in different browsers.


