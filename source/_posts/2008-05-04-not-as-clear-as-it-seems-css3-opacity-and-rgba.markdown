---
comments: false
date: 2008-05-04 19:00:00
layout: post
slug: not-as-clear-as-it-seems-css3-opacity-and-rgba
title: 'Not As Clear As It Seems: CSS3 Opacity and RGBA'
wordpress_id: 63
categories:
- CSS
tags:
- css
---

One of the many things CSS lets us control is the opacity of elements, starting in CSS3. The opacity property is in fact one of the earliest and most widely implemented CSS3 properties. It has its problems though, but CSS3 also defines a more powerful way to control an element's transparency: RGBA values.


## The Opacity Property


To change the opacity of an element using the opacity property, you simply give it a value between 0 and 1 to determine the elements' opacity. For example, if I want a div to be 50% transparent, I would give it the following style:
`
`

`



	
  1. div {

	
  2. opacity: .5;

	
  3. color: #fff;

	
  4. background-color: #000;

	
  5. }


`
This works fine in Safari, Opera, and Firefox. Internet Explorer, however, doesn't yet support the opacity property. Instead, we have to use their proprietary property Alpha Filter. It's really not any more difficult than the opacity selector. One key thing to note hear though is that the Alpha Filter requires you specify the opacity on a scale of 0 to 100. There's even a catch to that though...the element is that you are applying the opacity filter to has to have a `hasLayout` value of true. While there are many ways of making an element have layout, some of the most common are to set a width, or give the element a zoom value of 1. So now our declaration is as follows:
`
`

`



	
  1. div{

	
  2. background: #000;

	
  3. opacity: .5;

	
  4. filter: alpha(opacity='50');

	
  5. zoom: 1;

	
  6. }


`
Simple enough...but with one catch that may or may not present a problem, depending on your situation. When you use the opacity property, the opacity is set for that element, and any children of that element. This can cause problems in readability and general appearance. If you do have problems in this situation, you may not have to resort to a PNG just yet.


## More Power


CSS3 also allows for an extended version of the RGB color model that includes a fourth value that is used to specify opacity. Again, like the opacity property, the alpha value in the RGBA model accepts a value between 0 and 1. We can use an RGBA value anywhere that colors values are accepted in CSS: borders, background, font colors, etc. This already offers a higher level of control than the opacity selector.

Even better yet, while the opacity property defines the opacity for an element and all of its children, using the RGBA value only applies that transparency to the given property of an element that we specify. For example:
`
`

`



	
  1. div{

	
  2. background-color: rgba(0,0,0,.5);

	
  3. color: #fff;

	
  4. }

	
  5. <div>

	
  6. Some white text.

	
  7. </div>


`
Using the background-color property and assigning an RGBA value to it, we are able to define the transparency for the divs' background color. The transparency of any text or elements inside of the div is unchanged. In contrast, using the opacity property, the paragraph above would inherit the 50% transparency defined on the div.

Unfortunately, as is often the issue, browser support for RGBA is limited. Both Safari and Firefox 3 offer support for the RGBA color value system, but so far Opera and IE do not. The good news though, is that we can use the RGBA value without worrying about it breaking our design by also defining a fallback color.
`
`

`



	
  1. div{

	
  2. background-color: rgb(0,0,0);

	
  3. background-color: rgba(0,0,0,.5);

	
  4. color: #fff;

	
  5. }


`
In most browsers that do not recognize RGBA values, that declaration is simply ignored, as it should be. In IE though (I know, surprise, suprise), it appears that RGBA values cause IE to not display the background at all. A way to get around this would be to use conditional comments to reset the background to a solid color for IE. So we can just define a solid color for browsers that do not accept RGBA values and leave the transparency for those that can support it...a prime example of progressive enhancement.

I have set up a [working comparison](opacity.asp) of RGBA versus using the opacity property for you to view in each browser. Remember, to see the effects of RGBA, you will have to view the page in Safari or Firefox 3.
