---
comments: true
date: 2012-04-10 10:09:17
layout: post
slug: media-query-asset-downloading-results
title: Media Query & Asset Downloading Results
wordpress_id: 1318
post_format:
- Standard
tags:
- book
- media queries
- mobile
- performance
- responsive
---

A little while back, [I mentioned](http://timkadlec.com/2012/02/media-query-asset-downloading-tests/) I was doing some research for [the book](http://responsiveenhancement.com) about how images are downloaded when media queries are involved. To help with that, I wrote up some automated tests where Javascript could determine whether or not the image was requested and the results could be collected by Browserscope for review. I posted some initial findings, but I think I’ve got enough data now to be able to go into a bit more detail.

First, any credit has to go to the awesome team at Cloud Four. [Most of the tests were created by them](http://cloudfour.com/examples/mediaqueries/image-test/) for some testing they were doing. I just added some Javascript to automate them.

On to the results!


## Test One: Image Tag

[Run the test](http://timkadlec.com/mq/test1.php)


This page tried to hide an image contained within a div by using display: none. The HTML and CSS are below:

<pre>
<code class="language-markup">
&lt;div id="test1"&gt;
    &lt;img src="images/test1.png" alt="" /&gt;
&lt;/div>
</code>
</pre>

<pre>
<code class="language-css">
@media all and (max-width: 600px) {
    #test1 { display:none; }
}
</code>
</pre>

### The results

If there is one method of hiding images that I can say with 100% certainty should be avoided, it’s using display:none. It’s completely useless. It appears that Opera Mobile and Opera Mini don’t download the image (see the initial post for the reasons why), but the image is requested by, well, everyone else.


<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Requests Image</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 2.1+</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Blackberry (6.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Chrome (4.1)+</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Chrome Mobile</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Fennec (10.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Firefox (3.6+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>IE</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>iOS (4.26+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Kindle (3.0)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Opera (11.6+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Opera Mini (6.5+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mobile (11.5)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>RockMelt</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Safari (4+)</td>
<td class="fail">Yes</td>
</tr>
</tbody>
</table>




### Conclusion


Simple: don’t do this.


## Test Two: Background Image Display None




[Run the test](http://timkadlec.com/mq/test2.php)


In this test, a div was given a background image. If the screen was under 600px wide, the div was set to display:none. The HTML and CSS are below:

<pre>
<code class="language-markup">
&lt;div id="test2"&gt;&lt;/div&gt;
</code>
</pre>

<pre>
<code class="language-css">
#test2 {
    background-image:url('images/test2.png');
    width:200px;
    height:75px;
}
@media all and (max-width: 600px) {
    #test2 {display:none;}
}
</code>
</pre>

### The results


The same as with the first test: every browser tested, aside from Opera Mini and Opera Mobile, will download the image.

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Requests Image</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 2.1+</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Blackberry (6.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Chrome (4.1)+</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Chrome Mobile</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Fennec (10.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Firefox (3.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>IE</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>iOS (4.26+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Kindle (3.0)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Opera (11.6+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Opera Mini (6.5+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mobile (11.5)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>RockMelt</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Safari (4+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Silk</td>
<td class="fail">Yes</td>
</tr>
</tbody>
</table>

### Conclusion


Once again: don’t do this. Thankfully, as some of the other tests show, there are a few easy ways to hide background images without having the image requested.


## Test Three: Background Image, Parent Object Set to Display None




[Run the test](http://timkadlec.com/mq/test3.php)


In this test, a div was given a background image. The parent of the div (another div) was set to display:none when the screen was under 600px wide. The HTML and CSS are below:

<pre>
<code class="language-markup">
&lt;div id="test3"&gt;
    &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;
</code>
</pre>

<pre>
<code class="language-css">
#test3 div {
    background-image:url('images/test3.png');
    width:200px;
    height:75px;
}
@media all and (max-width: 600px) {
    #test3 {
        display:none;
    }
}
</code>
</pre>

### The results


Kudos to Jason Grigsby for catching this one. On the surface, it’s not entirely obvious why this would be any different than test two. However, when doing his initial research, he noticed this seemed to make a difference so he decided to test it. Lucky for us he did because this method is actually pretty reliable.

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Requests Image</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 2.1+</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Blackberry (6.0+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome (16+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome Mobile</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Fennec (10.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Firefox (3.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>IE 9+</td>
<td class="pass">No</td>
</tr>
<tr>
<td>iOS (4.26+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Kindle (3.0)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera (11.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mini (6.5+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mobile (11.5)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Safari (4+)</td>
<td class="pass">No</td>
</tr>
</tbody>
</table>

### Conclusion


This method works well. With the exception of the over-eager Fennec, every tested browser only downloads the image when needed. The issue with this method is that you do have the requirement of being able to hide the containing element. If that’s an option, then feel free to go ahead and use this approach.


## Test Four: Background Image with Cascade Override

[Run the test](http://timkadlec.com/mq/test4.php)


In this test, a div is given a background image. If the screen is under 600px, then the div is given a different background image. This tested to see if both images were requested, or only the one needed. The HTML and CSS are below:

<pre>
<code class="language-markup">
&lt;div id="test4"&gt;&lt;/div&gt;
</code>
</pre>

<pre>
<code class="language-css">
#test4 {
    background-image:url('images/test4-desktop.png');
    width:200px;
    height:75px;
}
@media all and (max-width: 600px) {
    #test4 {
        background-image:url('images/test4-mobile.png');
    }
}
</code>
</pre>

### The results


While certainly better than using display:none, this method is a little spotty.

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Requests Both</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 2.1-3.0?</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Android 4.0</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Blackberry 6.0</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Blackberry 7.0</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome (16+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome Mobile</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Fennec (10.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Firefox (3.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>IE 9+</td>
<td class="pass">No</td>
</tr>
<tr>
<td>iOS (4.26+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Kindle (3.0)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Opera (11.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mini (6.5+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mobile (11.5)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Safari 4.0</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Safari 5.0+</td>
<td class="pass">No</td>
</tr>
</tbody>
</table>

### Conclusion


I’d avoid it. While the situation is improving, Android 2.x, which dominates the Android marketshare, still downloads both images as does Fennec and the Kindle. Between the three, but particularly because of Android, I would recommend looking at other options.

## Test Five: Background Image Where Desktop Image Set with Min-Width


[Run the test](http://timkadlec.com/mq/test5.php)


In this test, a div is given one background image if the (min-width: 601px) media query matches, and a different one if (max-width: 600px) matches. The HTML and CSS is below:

<pre>
<code class="language-markup">  
&lt;div id="test5"&gt;&lt;/div&gt;
</code>
</pre>

<pre>
<code class="language-css">
@media all and (min-width: 601px) {
    #test5 {
        background-image:url('images/test5-desktop.png');
        width:200px;
        height:75px;
    }
}
@media all and (max-width: 600px) {
    #test5 {
        background-image:url('images/test5-mobile.png');
        width:200px;
        height:75px;
    }
}
</code>
</pre>

### The results

The situation here is a little better.

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Requests Both</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 2.1+</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Blackberry (6.0+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome (16+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome Mobile</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Fennec (10.0+)</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Firefox (3.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>IE 9+</td>
<td class="pass">No</td>
</tr>
<tr>
<td>iOS (4.26+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Kindle (3.0)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera (11.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mini (6.5+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mobile (11.5)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Safari (4+)</td>
<td class="pass">No</td>
</tr>
</tbody>
</table>

### Conclusion


More browsers play along this time. Fennec, as always, just can’t control itself. <del>Android 2.x is….odd. It requests both images, but only if the screen size is over 600px and the min-width media query kicks in. This behavior appears to stop as of Android 3. This is an odd one and I would love to know why the heck it happens.</del> Actually, good news here. Jason Grigsby pinged me and said his results for this test weren't jiving with what I reported here, so I re-ran the tests on a few Android 2.x devices. Turns out, my initial results were off: Android 2.x plays nicely and my initial runs of this test on that platform were wrong. Not only is this good news for developers, but it is also a much more sane behavior and it has restored my faith in humanity. Or at least my faith in Android.

It’s also worth nothing that if you use this method, you’ll need to consider alternate options for Internet Explorer 8 and under. Those versions of the browser don’t support media queries, so no image will be applied. Of course, this is simple enough to fix with conditional comments and an IE specific stylesheet.


## Test Six: Background Image Display None (max-device-width)

[Run the test](http://timkadlec.com/mq/test6.php)


This test was the same as test two, but it used max-device-width for the media query instead of max-width. The HTML and CSS is below:

<pre>
<code class="language-markup">
&lt;div id="test6"&gt;&lt;/div&gt;
</code>
</pre>

<pre>
<code class="language-css">
#test6 {
    background-image:url('images/test6.png');
    width:200px;
    height:75px;
}
@media all and (max-device-width: 600px) {
    #test6 {
        display:none;
    } 
}
</code>
</pre>


### Conclusion


I'm not going to spend much time on this, as it ended up being a throw away test. There were no differences in behavior between this and test two. The test was added because of a tweet where someone had mentioned they were getting different results than the original tests by Cloud Four, but the discrepancy ended up being caused by something else entirely (a typo, if I remember right).


## Test Seven: Cascade Override for High Resolution

[Run the test](http://timkadlec.com/mq/test7.php)


The final test was added to the suite a bit late. With the retina iPad around the corner, there were a lot of posts about how to handle serving images to high-res displays. In one post, [Brad Frost mentioned](http://bradfrostweb.com/blog/mobile/hi-res-optimization/) he thought it would be interesting to see test results for this, so I added it in.

In this test, a div is given a background image. Then, by using the min-device-pixel-ratio meda query, a new background image was applied if the minimum ratio was 1.5.

The HTML and CSS are below:

<pre>
<code class="language-markup">  
&lt;div id="test7"&gt;&lt;/div&gt;
</code>
</pre>

<pre>
<code class="language-css">
#test7 {
    background-image:url('images/test7-lowres.png');
    width:200px;
    height:75px;
}
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min-device-pixel-ratio: 1.5) {
    #test7 {
        background-image:url('images/test7-highres.png');
        width:200px;
        height:75px;
    }
}
</code>
</pre>

### The results


Of all the tests, this one is the one that could benefit the most from having some more people run it. That being said, it does look like the following behavior is accurate.

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Requests Both</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 2.1-3.0?</td>
<td class="fail">Yes</td>
</tr>
<tr>
<td>Android 4.0</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Blackberry 6.0</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Blackberry 7.0</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome (16+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Chrome Mobile</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Fennec (10.0+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Firefox (3.6+)</td>
<td class="pass">No</td>
</tr>
<tr><td>IE 9+</td>
<td class="pass">No</td>
</tr>
<tr>
<td>iOS (4.26+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Kindle (3.0)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera (11.6+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mini (6.5+)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Opera Mobile (11.5)</td>
<td class="pass">No</td>
</tr>
<tr>
<td>Safari 4.0+</td>
<td class="pass">No</td>
</tr>
</tbody>
</table>

### Conclusion


Again, this test could stand to be run a bit more, just to be safe. It looks like this method will work the vast majority of the time. Unfortunately, it appears Android 2.x will download both images _if the device pixel ratio is above or equal to 1.5 (or whatever value you set in the media query)_. So in the case of the above tests, if you’ve got a high resolution device running Android 2.x you’re out of luck.


The good news, for now, is that I'm unaware of any Android device with a device pixel ratio over 1.5. So if you're targeting the retina display iOS devices, you could set your min-device-pixel-ratio to 2 and be safe. And of course, now that I've said it, I fully expect the first 3 comments for this post to all correct me and point out the one Android device that just has to prove me wrong.

The earliest rounds of this test looked more promising for Android, so this is a bit of a bummer for me. They’re the only browser that seems to mess it up, but they’re also one of the biggest players.


## Recommendations


If you’re going to hide a content image, you’re not going to be able to do it by setting display:none. I recommend using a Javascript or server-side based approach instead.

If you want to hide a background image, your best bet is to hide the parent element. If you can’t do that, then use a cascade override (like test five above) and set the background-image to none when you want it hidden.

For swapping background images, define them both inside of media queries.

## Going Forward

If you run any of [the tests](http://timkadlec.com/mq/) and think something above is incorrect, either [drop me a line](mailto:tim@timkadlec.com) or say report it on [GitHub](https://github.com/tkadlec/Media-Query-test) so I can dig into it. The same goes for adding any additional tests.