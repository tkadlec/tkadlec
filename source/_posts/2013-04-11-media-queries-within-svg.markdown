---
layout: post
title: "Media Queries within SVG"
date: 2013-04-11 08:31
comments: true
categories: 
tags:
- responsive
- SVG
- images
excerpt: "There has been a lot of interesting chatter regarding SVG as of late. One aspect in particular that is getting quite a bit of attention is the ability to embed media queries within SVG files. But just how well supported is this feature?"
---

There has been a lot of interesting chatter regarding SVG as of late, including thorough posts by [David Bushell](http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/) and [Chris Coyier](http://css-tricks.com/using-svg/). One aspect in particular that is getting quite a [bit of attention](http://blog.cloudfour.com/media-queries-in-svg-images/) is the ability to embed media queries within SVG files. Even more amazing is the fact that this was first talked about by [Andreas Bovens of Opera all the way back in 2009](http://my.opera.com/ODIN/blog/2009/10/12/how-media-queries-allow-you-to-optimize-svg-icons-for-several-sizes)!

The renewed interest in the technique makes a lot of sense. In 2009 using SVG wasn't a very viable option, but the landscape has improved quite a bit since then. This has lead to some very interesting ideas such as Estelle Weyl's [experiment using SVG to display different raster images](http://estelle.github.io/mobilecss/images/clown/clown.svg).

There are simpler applications as well. Say you have a logo that includes a slogan. When the logo is displayed at a small size the slogan can become illegible. At those sizes it may make the most sense to simply hide the slogan allowing the rest of the logo to display. With embedded media queries you could apply an id or class to the portion of SVG that generates the slogan and then embed a media query within the SVG file that hides the slogan when the logo is below a certain size. Essentially something like this:

<pre>
<code class="language-markup">
&lt;svg&gt;
	&lt;defs&gt;
		&lt;style type="text/css"&gt;
			@media screen and (max-width: 200px) {
				#slogan{
					display: none;
				}
			}
		&lt;/style&gt;
	&lt;/defs&gt;
	&lt;g id="slogan"&gt;
		...
	&lt;/g&gt;
&lt;/svg&gt;
</code>
</pre>

In the stripped down example above, the code that creates the slogan is wrapped in a group element (&lt;g&gt;) with an id of "slogan" applied. Here's where the fun part comes in. The media query is based on the width of the image, not the screen! So in the above example, the slogan is hid when the image is below 200px wide, regardless of screen size. It's sort of a small teaser for what it would be like to have [element media queries](http://ianstormtaylor.com/media-queries-are-a-hack/).

The exception to this rule are inline SVG images. In that case, the SVG file is no longer self-contained and the media queries are relative to the width of the viewport of the screen.

## Support
To get an idea of the level of support, I grabbed the image of a Kiwi standing on an oval from Chris Coyier's post. I put an id on the oval and, using a max-width media query, hid it when the image is below 200px wide.

I love automating test results, but couldn't figure out a way to pull it off consistenly so these test were run by hand on the following browsers:

- Chrome 14 - 25
- Safari 4.0.5 - 6.0.2
- Opera 10 - 12.14
- IE 10
- Firefox 3.6 - 19
- Android 3.2 - 4.1
- Blackberry 6 - 7
- iOS 5 - 6.0.1

## Background Images
[Run the test](http://timkadlec.com/test/mq-svg/index.html)

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Passed</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 3+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Blackberry 6+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Chrome 17+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Firefox (<= 19 tested)</td>
<td class="fail">No</td>
</tr>
<tr>
<td>IE 10</td>
<td class="fail">No</td>
</tr>
<tr>
<td>iOS 6+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Opera 10+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Safari <= 5.1</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Safari 6+</td>
<td class="pass">Yes</td>
</tr>
</tbody>
</table>

### Results
Support for media queries within an SVG file that is used as a background image is still a bit poor. Basically, you have support in Chrome 17+, iOS 6 and Safari 6. Opera, since version 11, and IE10 both hid the slogan regardless of whether or not the media query applied. It's bizarre and if someone knows why, please feel free to enlighten me.

## IMG Element
[Run the test](http://timkadlec.com/test/mq-svg/img.html)

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Passed</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 3+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Blackberry 6+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Chrome 14-18</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Chrome 19+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Firefox 4+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>IE 10</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>iOS 6+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Opera 10+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Safari <= 5.1</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Safari (6+)</td>
<td class="pass">Yes</td>
</tr>
</tbody>
</table>

### Results
Support for media queries inside SVG images placed in a img element is a bit better. Chrome 19+, Firefox 4+, Opera 10+ (maybe earlier—10 is the oldest I had handy for testing), Safari 6, iOS6 and IE10 all behaved as expected. 

## Object Element
[Run the test](http://timkadlec.com/test/mq-svg/object.html)

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Passed</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 3+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Blackberry 6+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Chrome (14+ tested)</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Firefox 4+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>IE 10</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>iOS 6+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Opera 10+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Safari 5.1+</td>
<td class="pass">Yes</td>
</tr>
</tbody>
</table>

### Results
Using the object element, the picture is even more rosy. Safari 5.1+, iOS 6+, Firefox 4+, Chrome 14+, Opera 10+ and IE10 all passed the test.

## Inline SVG
[Run the test](http://timkadlec.com/test/mq-svg/inline.html)

<table class="testResults" cellspacing="3">
<thead>
<tr>
<th>Tested</th>
<th>Passed</th>
</tr>
</thead>
<tbody>
<tr>
<td>Android 3+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Blackberry 6+</td>
<td class="fail">No</td>
</tr>
<tr>
<td>Chrome (14+ tested)</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Firefox 4+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>IE 10</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>iOS 6+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Opera 10+</td>
<td class="pass">Yes</td>
</tr>
<tr>
<td>Safari 5.1+</td>
<td class="pass">Yes</td>
</tr>
</tbody>
</table>

### Results
As mentioned before, using inline SVG's do not respond based on image width, but on the width of the screen. So the results above are based on how it performed at different screen sizes. As it turns out, it's pretty good. You get the usual suspects, and Android 3.x and up decides to play along as well.

## Caveats and Conclusion
Notably absent from the use cases above (aside from inline SVG) is the stock Android browser, which had no SVG support at all in 2.x and still doesn't support media queries inside of SVG images as of 4.1.

I also haven't tested what the performance implications are of this. I know with my simple example, there wasn't anything that noticeable, but I suspect that could change if the number of queries applied increases or you do something more substantial than a simple show/hide.

Finally, this isn't as clear cut as a boolean supports or no supports. For example, [changing the fill of the oval](http://timkadlec.com/test/mq-svg/path.html) in a SVG background image works just fine in IE10. (Though Opera still appears to apply it no matter what.) Results for support will no doubt vary based on what properties you try to alter, what media queries you use (more on that soon, I hope!), and perhaps even what elements you try to apply those too. I would *love* for someone with a bit more knowledge of SVG to chime in if they've got any ideas about this.

**Update:** Turns out, Jeremie Patonnier's has already built a [great test for media query support in SVG images](http://jeremie.patonnier.net/experiences/svg/media-queries/test.html).

In short be sure to experiment and test thoroughly to make sure the results are as expected. It's exciting stuff with loads of potential.
