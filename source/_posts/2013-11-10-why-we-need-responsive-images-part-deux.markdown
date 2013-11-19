---
layout: post
title: "Why we need responsive images: part deux"
date: 2013-11-11 09:45
comments: true
categories: 
tags: 
- performance
- responsive
- images
---
***Big fat disclaimer:** The stats below come from tests on Chrome and IE11, because their developer tools expose this sort of information. The impact on other browsers may be less...or more.*

Way back in June, I wrote a post about [the need for responsive images](http://timkadlec.com/2013/06/why-we-need-responsive-images/). The post discussed the topic from the typical point of view: the impact on page weight. But serving large images and then relying on the browser to scale them has other downsides as well.

## Memory
Shortly after the first post, I chatted with [Ilya Grigorik](http://www.igvita.com/) a little and he brought up the toll inappropriately sized images can have on memory.

Once the browser decodes an image, each pixel is stored in memory as an RGBA value:

- 255 values for red
- 255 values for green
- 255 values for blue
- 255 values for alpha

This means that for every pixel of an image, it’s taking up 4 bytes of memory. It’s pretty easy to see the impact that this can have when you serve large images to the browser. Here’s an example: let’s say we provide a 300px by 300px image and the browser scales it down by 100px and displays it at 200px by 200px. Those excess pixels are essentially wasted, yet they take up 40,000 (100 x 100 x 4) bytes in memory. That’s about 39kb of useless information in memory.

Ilya also pointed out that this makes it pretty obvious which images developers should target first with an appropriate responsive solution. Let’s look at two more images. This time, we’ll only require the browser to scale them down by 50px—a seemingly innocent number

- 600px by 600px, downscaled by 50px to 550px by 550px
- 200px by 200px, downscaled by 50px to 150px by 150px

At first glance, it seems like these two images would have a similar impact in terms of memory—after all, each are only being scaled down by 50px. But some simple math shows that’s not at all the case:

- (600x600) - (550x550) = 57,500px
- (200x200) - (150x150) = 17,500px

The difference is huge: the larger image is taking up 3.3 times as much pixels in memory—a difference of about 156kb!

So first rule of responsive images: hit those big images first.

## Decoding
Another area frequently overlooked in regards to the performance of responsive images is the time it takes for browsers to decode them. 

To test this, I set up super [crude and simple test pages](http://timkadlec.com/test/images/rwd-fps/), purposely keeping layout as simple as possible. On each page, the browser displays a set of images at 200px wide. The actual size of the images themselves varies from page to page. On one page, the images are 1200px wide (6x). On another, they are 400px (2x).  Finally, there is one page where all images are appropriately sized at 200px. 

Each page was loaded 10 times per browser. Unfortunately, developer tools are still in the infant stage when it comes to this kind of analysis. So for decoding times, I used Chrome on the desktop as well as IE11 because those browsers have tools to see this sort of information. I also tested Chrome for Android, but decodes are not logged as a separate event and a [bug](https://twitter.com/aerotwist/status/399644279817375744) results in their timeline not properly recording image resizes so I didn’t include the data here for the time being.

The impact on decoding varies drastically depending on the size of images being passed to the browser.

<table class="plain num" cellspacing="3">
	<caption>Impact of large image sizes on decoding in Chrome 30</caption>
	<thead>
		<tr>
			<th>Image Size</th>
			<th>Number of Decodes</th>
			<th>Decode Time</th>
			<th>% Difference in Time from Resized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-title="Image Size">Resized (200px)</td>
			<td data-title="Number of Decodes">28</td>
			<td data-title="Decode Time">6.65ms</td>
			<td data-title="% Difference in Time from Resized">--</td>
		</tr>
		<tr>
			<td data-title="Image Size">2x (400px)</td>
			<td data-title="Number of Decodes">49</td>
			<td data-title="Decode Time">20.59ms</td>
			<td data-title="% Difference in Time from Resized">+ 209.6%</td>
		</tr>
		<tr>
			<td data-title="Image Size">6x (1200px)</td>
			<td data-title="Number of Decodes">277</td>
			<td data-title="Decode Time">163.08ms</td>
			<td data-title="% Difference in Time from Resized">+ 2352.3 %</td>
		</tr>
	</tbody>
</table>

When images were appropriately sized (200px wide), decoding was relatively light. From the 10 runs on Chrome, the median was 28 decode events making up a grand total of 6.65ms.

When images were sized at two times (400px wide) the intended size of display, those decoding times take a sizeable jump. The median for Chrome was now 49 decodes and 20.59ms (209.6% increase).

{{ table of impact here for Chrome, Chrome Android, IE11 on 6x}}

Decoding times for images that were six times (1200px wide) their intended display size was, of course, much worse. The median for Chrome was 277 decodes taking up a total of 163.08ms. This represents an incredible 2352.3% increase over appropriately sized images and a 692% increase over double-sized images! Honestly, the increased number of decodes seems a little bizarre and unneeded—to the point where I wonder if there's not a bug somewhere.

<ins>**Update:** After some digging, Ilya Grigorik discovered what is going on here with the number of decodes. Chrome is decoding chunks of image data as its received—not decoding the same images repeatedly. The time increase is still legit, but at least we have a nice explanation regarding the number: larger images means more chunks of data to decode.</ins>

While some of the decoding time can be attributed simply to the large sized images, it does appear the scaling (combined with the layout) has an impact as well. A quick test of the same large sized images scaling only about 50% to 600px still showed ~80 decodes and 118ms of decode time.

<table class="plain num" cellspacing="3">
	<caption>Impact of large image sizes on decoding in IE 11</caption>
	<thead>
		<tr>
			<th>Image Size</th>
			<th>Number of Decodes</th>
			<th>Decode Time</th>
			<th>% Difference in Time from Resized</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-title="Image Size">Resized (200px)</td>
			<td data-title="Number of Decodes">10</td>
			<td data-title="Decode Time">6.2ms</td>
			<td data-title="% Difference in Time from Resized">--</td>
		</tr>
		<tr>
			<td data-title="Image Size">2x (400px)</td>
			<td data-title="Number of Decodes">10</td>
			<td data-title="Decode Time">21.35ms</td>
			<td data-title="% Difference in Time from Resized">+ 244.4%</td>
		</tr>
		<tr>
			<td data-title="Image Size">6x (1200px)</td>
			<td data-title="Number of Decodes">10</td>
			<td data-title="Decode Time">101.37ms</td>
			<td data-title="% Difference in Time from Resized">+ 1535%</td>
		</tr>
	</tbody>
</table>

Looking at IE11 found similar results. For the resized images, IE11 showed 10 decode events (one per image) with a median total decode time of 6.2ms. For the 2x images, IE11's decode count stayed at 10  but the total time for those decodes jumped to 21.35ms (244.4% increase). Once again, the 6x increase was staggering. While still reporting 10 decodes, the decode time increased to 101.37ms—a 1535% jump from the time spent on appropriately sized images.

I expected that this would be noticeable in someway (other than the slower time to load and display the images), but after adding 70-80 additional images, there wasn’t really a sizeable dip in FPS as you scrolled down the page on either Chrome or IE11.

Even though the tools aren’t there, I fired up Firefox for a visual spot check and there the FPS took a noticeable hit for large images. That fact that we're able to get better scrolling performance by [hacking things together in JavaScript](http://aerotwist.com/blog/one-weird-trick/), I’m willing to call say the browsers are missing something here and this a bug that should be fixed.

Still, that's not an excuse to ignore the issue. Scrolling performance has a huge impact on the user experience (something both [Facebook](https://speakerdeck.com/jklein/edge-conf-rendering-performance-panel-opening-talk?slide=09) and [Etsy](https://speakerdeck.com/jklein/edge-conf-rendering-performance-panel-opening-talk?slide=10) have seen first hand). In many scenarios this FPS hit can be really harmful. Any image heavy page with infinite scrolling, for example, would be a prime candidate for jank caused by long decodes. I’m also willing to bet there is a hit here on battery life as a result of all the extra work.

## Resizing
But wait, there’s more! As part of the process of getting large images to display at their appropriate scale, Chrome resizes the images. IE11 showed no image resizes, so it’s either not taking this step, including the resizing information as part of the decode in their tool, or simply not exposing the resizing information at the moment for whatever reason.

Those image resize times (unsurprisingly) are also impacted significantly by the size of the image being passed down.

<table class="plain num" cellspacing="3">
	<caption>Impact of large image sizes on resizing in Chrome 30</caption>
	<thead>
		<tr>
			<th>Image Size</th>
			<th>Number of Resizes</th>
			<th>Resize Time</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-title="Image Size">Resized (200px)</td>
			<td data-title="Number of Resizes">0</td>
			<td data-title="Resize Time">0</td>
		</tr>
		<tr>
			<td data-title="Image Size">2x (400px)</td>
			<td data-title="Number of Resizes">19</td>
			<td data-title="Resize Time">16.06ms</td>
		</tr>
		<tr>
			<td data-title="Image Size">6x (1200px)</td>
			<td data-title="Number of Resizes">31</td>
			<td data-title="Resize Time">115.77ms</td>
		</tr>
	</tbody>
</table>

Of course when all the images are appropriately sized, no image resizes are necessary. When the image is double sized, Chrome recorded 19 resizes, taking up a total of 16.06ms. For the page with images that are six times the displayed size, the total of resizes was now 31, taking up 115.77ms—an increase of 620.86% from the time to resize the 2x images.

## Summary
One thing to come out of this testing: we need better tools. From what I can tell, only Chrome and IE11 provide this information, and each of them has things to improve on here. IE11 and Chrome Mobile seem to lack any resize information. Chrome doesn't attempt to link their decodes to the actual image (whereas in IE11, if you hover over a decode it tells you the url of the associated image). And whatever is causing the exponential growth in decode count on Chrome sure seems fishy.

There’s also a great deal of follow-up that could be done here: 

1. How do other browsers handle image decoding and resizing?
2. How do these results change as file weight is adjusted up or down (important for compressive images, for example)?
3. Does file format impact decoding and resizing times?

Those questions aside, it’s already apparent that serving large images to the browser has some potentially series side effects from a rendering perspective. On the test page with 6x images (not unusual at the moment on many responsive sites), the combination of resizes and decodes added an additional 278ms in Chrome and 95.17ms in IE (perhaps more if we had resize data) to the time it took to display those 10 images. That much time spent on decoding and resizing can not only delay rendering of images, but could impact battery life and scrolling behavior as well.

While page weight and load time are the most commonly cited examples, those clearly aren’t the only metrics suffering when we serve images that are too large to the browser. 

<div class="note">
	Thanks to <a href="http://www.igvita.com/">Ilya Grigorik</a>, <a href="http://aerotwist.com/">Paul Lewis</a>, <a href="http://blog.yoav.ws/">Yoav Weiss</a> and <a href="http://andydavies.me/">Andy Davies</a> for helping me make some sense of all this. Smart folks, these guys.
</div>