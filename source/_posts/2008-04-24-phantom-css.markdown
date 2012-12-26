---
comments: false
date: 2008-04-24 19:00:00
layout: post
slug: phantom-css
title: Phantom CSS
wordpress_id: 65
categories:
- CSS
tags:
- css
---

At the heart of CSS, of course, are its selectors. They are after all what allow us to apply styles to a given element in our (X)HTML. Sometimes though, there is a desire to apply a style based on an elements state. That is where pseudo-classes come into play. You've probably all used them at some point...but there may be more there than you realize. Their value makes it worth taking a closer look.


## Static Pseudo-Classes


Pseudo-classes allow us to apply an invisible, or "phantom", class to an element in order to style it. For example, let's look at the element most often styled using pseudo-classes: the anchor tag (). Some anchor tags point to locations a user has already viewed, and some point to locations the user has not yet visited. Looking at the document structure, we can't tell this. No matter if the link is viewed or not, it looks the same in (X)HTML. However, behind the scenes, a "phantom" class is applied to the link to differentiate between the two. We can access this "phantom" class with pseudo-class selectors, like :link and :visited. (Pseudo-classes are always prefixed by a colon.)

The :link pseudo-class selector refers to any anchor tag that is a link...that is any anchor tag that has a href attribute. The :visited pseudo-class selector does exactly what it sounds like...it refers to any link that has been visited. Using these pseudo-classes allows us to apply different effects to links on the page according to the visited state.
`
`

`



	
  1. a {color:blue;}

	
  2. a:link {color: red;}

	
  3. a:visited {color: orange;}


`
The above styles for example, will make any anchor tag that does not have a href attribute to be colored blue (line 1). Any link that has a href attribute, but has not been visited will be red (line 2). Finally, if a link is visited (line 3), then it is an orange color.

Another static pseudo-class is :first-child (The :first-child pseudo-class is not supported by IE6). The :first-child selector is used to select elements that are first children of other elements. This can be easily misunderstood. A lot of times, people will try to use it to select the first-child of an element. For example:
`
`

`



	
  1. 



	
  2. Here is some text





`
Say we want to apply a style to the paragraph element. It is not uncommon to see people try to do this using the following style:
`
`

`



	
  * div:first-child {font-weight: bold;}


`
However, this is not how the pseudo-class works. If we think back to the concept of pseudo-classes essentially being "phantom" classes, then what we just did was apply a phantom class to the div like so:
`
`

`



	
  1. 



	
  2. Here is some text





`
Obviously that is not what we want. The :first-child selector doesn't grab the first child of an element; it just grabs any of the specified element that is a first-child. The correct way to style that would be with the following line:
`
`

`



	
  * p:first-child {font-weight: bold;}


`
That's probably as clear as mud, so it may help to take another look at the "phantom" class:
`
`

`



	
  1. 



	
  2. 


Here is some text








`


## Watch Your Language


Corny headings aside, we can select elements based on the language using the :lang( ) pseudo-class. For example, we can italicize anything in French using the following style:
`
`

`



	
  * *:lang(fr) {font-style: italic;}


`
Where does the language get defined? According to the CSS 2.1 specification, the language can be defined in one of many ways:


> In HTML, the language is determined by a combination of the lang attribute, the META element, and possibly by information from the protocol (such as HTTP headers). XML uses an attribute called xml:lang, and there may be other document language-specific methods for determining the language.




## Dynamic Pseudo-Classes


So far, what we have discussed are static pseudo-classes. That is, once the document is loaded, these pseudo-classes don't change until the page is reloaded. The CSS 2.1 specification also defines three dynamic pseudo-classes. These pseudo-classes can change a document's appearance based on user behavior. They are:



	
  * `:focus` - any element that has input focus

	
  * `:hover` - any element that the mouse pointer is placed over

	
  * `:active` - any element that is activated by user input (ex: a link while being clicked)


Usually, these pseudo-classes are applied only to links. However, they can be used on other elements as well. For example, you could use the following style to apply a yellow background to any input field in a form when it has the focus.
`
`

`



	
  * input:focus {background: yellow;}


`
The main reason this is not done a lot is because of a lack of support. IE6 does not allow any dynamic pseudo-classes to be applied to anything besides links. IE7 allows the :hover pseudo-class to be applied to all elements, but doesn't let the :focus pseudo-class be applied to form elements.


## Complex Pseudo-Classes


CSS offers us the ability to apply multiple pseudo-classes so long as they aren't mutually exclusive. For example, we can chain a :first-child and :hover pseudo-class, but not a :link and :visited.
`
`

`



	
  1. p:first-child:hover {font-weight: bold;} //works

	
  2. a:link:visited {font-weight: bold;} //link and visited are mutually exclusive


`
Again, there is a compliance issue here with IE6. The IE6 browser will only recognize the final pseudo-class mentioned. So in the case of our first style above, IE6 will ignore the :first-child pseudo-class selector and just apply the style to the :hover pseudo-class.


## Looking Forward to CSS3


In addition to the pseudo-classes laid down in CSS 2.1, CSS 3 provides sixteen new pseudo-classes to allow for even more detailed styling capabilities. The new pseudo-classes are:
`
`

`



	
  * :nth-child(N)

	
  * :nth-last-child(N)

	
  * :nth-of-type(N)

	
  * :nth-last-of-type(N)

	
  * :last-child

	
  * :first-of-type

	
  * :last-of-type

	
  * :only-child

	
  * :only-of-type

	
  * :root

	
  * :empty

	
  * :target

	
  * :enabled

	
  * :disabled

	
  * :checked

	
  * :not(S)


`


For more information about the new pseudo-class selectors laid down in CSS3, take a look at the [CSS3 selectors working draft](http://www.w3.org/TR/2005/WD-css3-selectors-20051215/), or the excellent write-up by [Roger Johansson](http://www.456bereastreet.com/archive/200601/css_3_selectors_explained/). Currently, very few have decent cross-browser support, but as Johansson says, they can still be used for progressive enhancement...and in such a quickly changing field, when we can stay ahead of the curve, we should take advantage of it.
