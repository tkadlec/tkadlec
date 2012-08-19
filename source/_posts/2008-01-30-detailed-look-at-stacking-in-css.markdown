---
comments: false
date: 2008-01-30 19:00:00
layout: post
slug: detailed-look-at-stacking-in-css
title: Detailed Look at Stacking in CSS
wordpress_id: 80
categories:
- CSS
tags:
- css
---

Using the z-index to affect stacking order in CSS is a much deeper topic than it may appear at first. The idea seems quite simple, but if we take a look we can see that there is actually quite a bit going on here that warrants a closer examination.

Most of the time, stacking order just kind of works behind the scenes and we don't really pay any attention to it. However, once we use relative or absolute positioning to move an object around the screen, we will end up with several elements occupying the same space. Which element is displayed on top is determined by the elements stacking order. We can adjust an elements stacking order by using the z-index property.

The z-index is so named because it affects an elements position along the z-axis. The z-axis is the axis that goes from front to back from the user. If we think of the x-axis and y-axis as height and width, then z-axis would be the depth. The higher the z-index of an element, the closer it becomes to the user, and the lower the z-index, the further back on the screen it appears.

If we do not specify any z-index values, the default stacking order from closest to the user to furthest back is as follows:



	
  1. Positioned elements, in order of appearance in source code

	
  2. Inline elements

	
  3. Non-positioned floating elements, in order of appearance in source code

	
  4. All non-positioned, non-floating, block elements in order of source code

	
  5. Root element backgrounds and borders


Based on the default stacking order above, you can see that any element that has been positioned, whether relative or absolute, will be placed above any element that is not positioned. Both positioned and non-positioned elements are of course, above the background of our root element.


## Mixing Things Up A Bit


Now let's say we want to move some of our elements around in the stacking order so different elements appear on top. We can use the z-index property on any positioned elements to adjust there stacking order. The z-index property can accept an integer, the auto value, or an inherit value. When using integers, the higher the positive number, the further up in the stacking order it will appear. You can use negative z-index values to move the element further down in the stacking order. If we do not use a z-index value on an element, it will render at the rendering layer of 0 and will not be moved. The stacking order now looks like this:



	
  1. Positioned elements with z-index of greater than 0, first in order of z-index from lowest to highest, then in order of appearance in source code

	
  2. Positioned elements, in order of appearance in source code

	
  3. Inline elements

	
  4. Non-positioned floating elements, in order of appearance in source code

	
  5. All non-positioned, non-floating, block elements in order of source code

	
  6. Positioned elements with z-index of less than 0, first in order of z-index from highest to lowest, then in order of appearance in source code.

	
  7. Root element backgrounds and borders




## Stacking Context


An interesting thing happens though when we set a z-index value to 0 or auto...we establish a new stacking context. Let's say we set #front to have a z-index of 5. Now, we have just established a new stacking context for any element descending from (contained in) #front. If #middle is contained within #front, and I set its z-index to 2, it should still appear above #front. Why? Because since we set a z-index value to #front, every descendant of #front is now being stacked in relation to #front. It may be helpful to look at this as a multiple number system (as demonstrated by Eric Meyer in [CSS: The Definitive Guide](http://www.amazon.com/gp/product/0596527330?ie=UTF8&tag=timkadcom-20&link_code=as3&camp=211189&creative=373489&creativeASIN=0596527330)):
`
`

`



	
  1. #front 5.0

	
  2. #middle 5.2


`
Since #front is the ancestor that sets the stacking context, it's relative stacking level can be thought of as 0. Now when we set the z-index for middle, we are merely setting it's local stacking value. Of course 2 is higher than 0, and therefore even though in our CSS it looks like #middle should be displayed behind #front, we can see that actually it should be displayed on top.

For an example, consider the following code:
`
`

`



	
  1. <div id="one">

	
  2. <div id="two"></div>

	
  3. </div>

	
  4. <div id="three"></div>


`
Now, using CSS we position these elements so that there is some overlap:
`
`

`



	
  1. #one{

	
  2. position: absolute;

	
  3. left: 0px;

	
  4. top: 20px;

	
  5. z-index: 10;

	
  6. }

	
  7. #two{

	
  8. position: absolute;

	
  9. left: 50px;

	
  10. top: 30px;

	
  11. z-index: 15;

	
  12. }

	
  13. #three{

	
  14. position: absolute;

	
  15. left: 100px;

	
  16. top: 30px;

	
  17. z-index: 12;

	
  18. }


`
![Z-Index Example](/rantpics/zindex1.gif)

The result is that #two shows up below #three, even though the z-index value we gave it (line 11) is higher than the z-index value we gave #three (line 17). This is because #two is a descendant of #one, which established a new stacking context. Which means if we use our numbering system, we would get the following stacking order:
`
`

`



	
  1. #three 12

	
  2. #two 10.15

	
  3. #one 10.0


`


## Firefox Gets It Wrong


Ok...that felt weird to say. We are all used to Firefox getting most CSS things right, but this is one area it gets wrong. According to CSS 2.1, no element can be stacked below the background of the stacking context (the root element for that particular context). What this means is if we adjust the CSS above to give our #two element a negative z-index, the content of #one should overlap over the content of #two, but the background color should not. The way IE renders this is correct. Both results are shown below:

![Z-Index Example](/rantpics/zindex2.gif)

You can see that in IE, while the content of #one is still set above the content of #two, the background color remains behind it, as specified in CSS 2.1. Firefox on the other hand, shoves the entire #two element, background color and all, behind #one. Until this is fixed, be careful about using negative numbers for the z-index of an element.


## Go Forth and Experiment


Definetely take this and play around with it. This is a topic that is best understood by setting up some positioned and non-positioned elements and experimenting with different z-index values. If you are feeling bold, check out [the W3C's](http://www.w3c.org/TR/CSS21/zindex.html) really detailed breakdown of the stacking order of not just elements, but their background colors, background images, and borders. As with most topics in CSS, there is more here to understand than we first realize.
