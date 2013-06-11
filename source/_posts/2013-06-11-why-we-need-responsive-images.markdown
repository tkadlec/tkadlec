---
layout: post
title: "Why we need responsive images"
date: 2013-06-11 10:20
comments: true
categories: 
tags: 
- performance
- responsive
- images
---
The topic of responsive images has been one of the most hotly debated topics amongst web developers for what feels like forever. I think Jason Grigsby was perhaps the first to [publicly point out](http://blog.cloudfour.com/css-media-query-for-mobile-is-fools-gold/) that simply setting a percentage width on images was not enough, you needed to resize these images as well.  He showed that if you served appropriately sized images on the original responsive demo site, you could shave 78% off the weight of those images (about 162kB) on small screens.

The discussion has evolved since then with debates over what sort of solution we need (server-side, client-side), new markup (srcset vs picture) and even, in some cases, wondering [whether we really needed to worry about it at all](http://dbushell.com/2013/06/03/the-raster-image-paradox/). 

It’s a messy issue for sure. The current solutions for responsive images do come with some complexity and overhead. If you’re using a client-side solution and don’t want to make more than one request per image, then you end up breaking the preloader. As [Steve Souders explained rather well](http://www.stevesouders.com/blog/2013/04/26/i/), this can have a very negative impact on the time it takes for those images to actually start appearing to your visitors.

No doubt there are trade-offs. Complexity of solutions, preloader versus file size—these each have to be considered when making the determination of what solution to use. Eventually we’ll have a native solution which will take care of the preloader issue, but browsers sure seem to be dragging their feet on that.

In the meantime, I was curious just how much page weight could be saved with a responsive image solution in place. I know that on the projects I’ve worked on, the savings has often been huge, but I wanted to see how consistent my experience is with the web as a whole.

## Experiment time!

[Yoav Weiss](http://yoav.ws/) created a bash script called [Sizer-Soze](https://github.com/yoavweiss/Sizer-Soze) that, with the help of ImageMagick and PhantomJS, determines just how much you could save in file size by serving optimized and resized images. The script is built for one url at a time, so I modified it slightly to let me loop through a list of 471 URLs (the same list used by Guy Podjarny for his [analysis of responsive performance](http://www.guypo.com/uncategorized/real-world-rwd-performance-take-2/)). My bash scripting skills are minimal (read: nearly non-existent), but thankfully Yoav is far more skilled there than I and was happy to help out and make the whole thing run much more efficiently.

The script looped through the 471 urls, spitting out the results into a CSV. Each site was tested at widths of 360px, 760px and 1260px. Numbers were collected for total original image size, size of images if they weren’t resized but were optimized, and size of images if they were both optimized and resized to match the size they actually displayed at (so if a 1200px image was displayed at 280px wide, the script resized the image to 280px and compared the two file sizes).

If Sizer-Soze came across an image set to “display:none” it would re-check the dimensions every 500 milliseconds (for a maximum wait of 25 seconds) to see if things had changed. This was done to account for image-based carousels where images may have been hidden initially but then later revealed. If the image became visible during that time, then the dimensions were used to process the file savings normally. If the image was never displayed, the entire weight of the image was counted as wasted.

Even with that tweak, there are few caveats about Sizer-Soze:

- It does not make a distinction between 3rd party images and images served by the site itself. So some of the weight can be attributed to things like ads.
- It does not analyze background images. That’s fine because that’s not what we want here anyway, but its worth noting that potentially even more bytes could be saved.
- It won’t be able to pickup some clever lazy-loading techniques, so again, its possible that some sites would actually be able to save even more than the reported numbers.
- It doesn’t include data-uri images in the totals as the file name exceeds the length limit for the script.

After looping through, the list shortened to 402 different responsive sites. Some of the original 471 moved to new URLs or apparently went AWOL so Sizer-Soze couldn’t follow along. Others had no images in the source code—either as a result of some sort of lazy-loading mechanism or by design. Still, 402 sites is a pretty good base to look at.

## Results: Total Savings
On to the results! First up, the totals.

<table class="plain num" cellspacing="3">
	<thead>
		<tr>
			<th>Viewport Size</th>
			<th>Sum of Original Sizes</th>
			<th>Sum of Optimized Savings</th>
			<th>Sum of Resized Savings</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" data-title="Viewport Size">360</td>
			<td data-title="Sum of Original Sizes">237.66MB</td>
			<td data-title="Sum of Optimized Savings">12.86MB</td>
			<td data-title="Sum of Resized Savings">171.62MB</td>
		</tr>
		<tr>
			<th scope="row" data-title="Viewport Size">760</td>
			<td data-title="Sum of Original Sizes">244.39MB</td>
			<td data-title="Sum of Optimized Savings">13.30MB</td>
			<td data-title="Sum of Resized Savings">129.34MB</td>
		</tr>
		<tr>
			<th scope="row" data-title="Viewport Size">1260</td>
			<td data-title="Sum of Original Sizes">250.08MB</td>
			<td data-title="Sum of Optimized Savings">13.70MB</td>
			<td data-title="Sum of Resized Savings">104.31MB</td>
		</tr>
	</tbody>
</table>

It’s not too surprising to see that the original size (what’s being served now) is pretty consistent from screen size to screen size. Guy’s research, and many others, have already demonstrated this pretty well.

What is staggering is just how massive the savings could be if these sites served appropriately sized images. At 360px wide, these 402 sites combine to serve 171.62MB of unnecessary weight to their visitors . That’s a whopping 72.2% of image weight that could be ditched by using a responsive image technique.

It’s not just small screens that would benefit. For 760px and 1260px sized screens, 52.9% and 41.7% of image weight is unnecessary.

## Results: Average Savings
Let’s look at the savings in terms of per-site averages.

<table class="plain num" cellspacing="3">
	<thead>
		<tr>
			<th>Viewport Size</th>
			<th>Avg. Original Size</th>
			<th>Avg. Optimized Savings</th>
			<th>Avg. Resized Savings</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row" data-title="Viewport Size">360</td>
			<td data-title="Avg. Original Size">603.89kB</td>
			<td data-title="Avg. Optimized Size">32.68kB</td>
			<td data-title="Avg. Resized Size">436.08kB</td>
		</tr>
		<tr>
			<th scope="row" data-title="Viewport Size">760</td>
			<td data-title="Avg. Original Size">622.53kB</td>
			<td data-title="Avg. Optimized Size">33.88kB</td>
			<td data-title="Avg. Resized Size">329.47kB</td>
		</tr>
		<tr>
			<th scope="row" data-title="Viewport Size">1260</td>
			<td data-title="Avg. Original Size">635.43kB</td>
			<td data-title="Avg. Optimized Size">34.81kB</td>
			<td data-title="Avg. Resized Size">265.06kB</td>
		</tr>
	</tbody>
</table>

Looking at it from the perspective of an individual site, the numbers feel even more impactful. For each screen size, sites on average would shed about 5% of the weight of their images (from 32-34kb) by simply doing some lossless optimization. Considering that this could be automated easily into a build process, or manually done with tools like [ImageOptim](http://imageoptim.com/) with little effort—that’s an easy 5% improvement.

Unsurprisingly, the gains are much more significant if those images get resized to an appropriate size as well. At 360px, the average site would drop 436.08kb. Consider that for a second. One optimization (resizing images) dropping that large of a chunk of weight. That takes image weight for a page from 603.89kB to a mere 167.81kB. That’s a *huge* difference that shouldn’t be dismissed.

 While the improvements are slightly smaller for larger screen sizes (as you would expect), using some sort of responsive image technique would still save 320kB for sites displayed at 760px and 265kB for sites displayed at 1260px.

## Conclusion
We spend a lot of time talking about responsive images online—debating the approaches, trying out new solutions. Sometimes it can be a little discouraging that we still haven’t gotten it ironed out (I know I feel that way frequently).

But the web needs us to be diligent. It needs us to not settle for seemingly simple solutions that sacrifice performance. It is extremely rare where one optimization lets us knock off such a significant amount of page weight, but here we are staring one such technique right in the face. 

72% less image weight.

That’s why we need a responsive image solution.




 












