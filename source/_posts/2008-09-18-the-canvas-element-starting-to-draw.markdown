---
comments: false
date: 2008-09-18 19:00:00
layout: post
slug: the-canvas-element-starting-to-draw
title: 'The Canvas Element: Starting to Draw'
wordpress_id: 50
categories:
- Javascript
tags:
- (x)html
- html5
---

Last [time around](post.asp?q=73), we took a general look at the canvas element and how it is supported (or not) in various browsers. This time, we'll start to go into the element in a bit more detail and start to look at some the things we can do with it.


## A Quick Look at Attributes


We've already seen how to set up the canvas element in HTML:

You've probably noticed that we've included an id attribute on our canvas element to make it easier for us to access the element in our Javascript. You can also apply other standard attributes like class, title or tabindex. Two other attributes, height and width, will also be used fairly regularly.

You can define the height and width as attributes in the canvas element, or you can use CSS to define the dimensions of your element. If you use CSS, however, your canvas will scale to meet the dimensions you define instead of simply resizing the area. Neither height nor width are necessary, however. If you choose to not define the size of the canvas element, then it defaults to a size of 300 pixels wide by 150 pixels high.


## Roll Up Your Sleeves...


All of this so far has been pretty easy...but also boring. The canvas element's real power, of course, is the ability to use Javascript to manipulate it. To do so, we have to get a rendering context using the getContext() function. The rendering context is what allows us to actually manipulate the content in the canvas element. The function is straight forward and easy to use:



	
  1. var canvas = document.getElementById('canvas');

	
  2. var context = canvas.getContext('2d');


Currently, "2d" is the only defined context that we can obtain. In the future, it is not unreasonable to expect to see that expand and include support for a three dimensional drawing context. Of course in a real-world setting you'll want to check to make sure the browser supports the getContext method in the first place. The canvas element is still relatively new and there will be a fair amount of browsers that will not support it.


## The One and Only


Now that we have a rendering context, let's make use of it by starting to draw something to the canvas. The canvas element only natively supports one shape and that is the rectangle. Don't panic....you'll see later that there are plenty of methods available for us to create everything from a basic circle to very complex abstract shapes.

For now though, we'll keep it simple and just make a rectangle. We have three functions that are available to use for this: fillRect(), strokeRect(), and clearRect(). The functions do pretty much exactly what you would think based on their names. fillRect() draws a filled rectangle; strokeRect() draws a rectangle with border, or stroke, around it; and clearRect() clears the area and makes a fully transparent rectangle. To make it even more simple, each of the functions takes the exact same parameters. Let's take for example the following line of code:



	
  * context.fillRect(0,0,50,75);


As you can see, the function takes four parameters. The first two define the starting point of the shape, the x and y coordinates. Thankfully the coordinates follow common sense. The origin or (0,0) is the top left of the canvas element. So (0,10) would be at the top and 10 pixels from the left.

The next two parameters are the width and height of the canvas element. In this case, I made a rectangle that is 50 pixels wide and 75 pixels high. So the result of the above line of code is a 50 pixel by 75 pixel, filled rectangle in the top left corner of the canvas element. To get a good idea of the results of each of the rectangle functions, we'll use the following code (we've also set the height and width attributes on our canvas element to 125 pixels each) :

	
  1. context.fillRect(0,0,50,50);

	
  2. context.clearRect(25,25,50,50);

	
  3. context.fillRect(50,50,50,50);

	
  4. context.strokeRect(75,75,50,50);


The result, [as you can see here](canvas.asp), is four overlapping rectangles. Remember, you'll need Firefox (1.5+), Safari, or Opera (9+) to view it. As you can see, the clear rectangle clears out the area it covers. The stroke rectangle, on the other hand, doesn't clear out the area, so you can see the filled rectangle through it.


## Next Time


Next time around, we'll start to look at some of the other functions available, and how we can use those functions to start making a variety of shapes...not just simple rectangles. To wet your appetite a bit in the meantime, have a look at [another great example](http://blog.nihilogic.dk/2008/09/sandbag-text-wrapping-with-canvas.html) of how the canvas element can be used.
