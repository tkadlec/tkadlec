---
comments: false
date: 2008-02-05 19:00:00
layout: post
slug: share-your-site-with-the-masses
title: Share Your Site with the Masses
wordpress_id: 78
categories:
- CSS
tags:
- css "media queries"
---

Originally, it was never going to get this complex. The internet was never meant to be this popular. However, as time has gone by and this wonderful beast of resource has evolved, it is becoming important to be able to provide our content to a wide variety of devices. In addition to simply viewing a site on a computer screen, or printing it, our information may be accessed by Braille feedback devices, speech synthesizers, handheld devices, etc. More often than not, one set of styles will not be adequate to provide our content optimally to each of these devices. That is where media types come into play.

Media types can be extremely useful. For example, there is very little reason to display a site's navigation on a print-out. Using the print media type, we can then set up a style that hides our navigation section. Handheld devices which have very small screens and often low-bandwidth, may benefit from not displaying a bunch of images.

CSS 2 offered us 10 media types as a way to designate which styles are applied depending on the device that accesses our site:



	
  1. All - all devices (this is default)

	
  2. Aural - speech synthesizers

	
  3. Braille - Braille tactile feedback devices

	
  4. Embossed - paged Braille printers

	
  5. Handheld - handheld devices (usually small screen, low bandwidth, possibly monochrome)

	
  6. Print - printing or print preview

	
  7. Projection - projected presentations (projectors, printing on transparencies)

	
  8. Screen - computer screen

	
  9. Tty - media using a fixed-pitch character grid (terminals or teletypes)

	
  10. Tv - television devices


If no media type is declared, the default is "all". Using these media types, we can tell devices to only use certain sets of styles. There are three basic ways of doing this:


## Using Inline Syles

<pre>
<code class="language-markup">
&lt;style type="text/css"&gt;
	@media print{
		body{ background-color:#FFFFFF; }
		#heading{ font-size:28px; }
	}
&lt;/style&gt;
</code>
</pre>

Inline style sheets are not a very good solution, as they do not separate content and presentation.


## Imported Stylesheets

<pre>
<code class="language-markup">
&lt;style type="text/css" media="print"/&gt;
	@import "print.css";
&lt;/style&gt;
</code>
</pre>

Imported style sheets are a much better solution, and are fairly widely used. A distinct advantage of imported style sheets is that a styles sheet is only downloaded if that specific media type is being used. For example, if I defined the above styles to be associated with the handheld media type and someone using a regular computer came to my site, they wouldn't have to download the styles.


## Linked Stylesheets

<pre>
<code class="language-markup">	
&lt;link rel="stylesheet" type="text/css" media="print" rel="print.css" /&gt;
</code>
</pre>

This is the most widely supported. As you may have guessed, a user will download each stylesheet regardless of the media type, and then use the appropriate ones. A bit unfortunate, as it wastes a little bit of time downloading styles we're not really going to use.

It is important to note that some styles only have meaning within a certain media type, and others are not applicable to certain media types. For example, the aural media type has no use for the font-size style while the page-break-before style is really only useful in the media types like projection, printing, and tv.

Unfortunately, the support for most media types is quite minimal. You can pretty much depend on all, screen, and print. However, at this point, only Opera supports the projection media type, and the handheld media type isn't widely supported yet on handheld devices. Feel free to use them anyway, as even if the user agent doesn't recognize the media type named, it will just ignore it.


## Media Types on Steroids: Media Queries


Media types will eventually become even more useful. CSS3 will implement media queries, which will allow us to check for certain criteria. For example, with media queries we can do something like the following:

<pre>
<code class="language-markup">	
&lt;link rel="stylesheet" type="text/css" media="screen and (color)" rel="print.css" /&gt;
</code>
</pre>

What we are telling the user agent is to only use those styles if the device uses a screen media type AND the device is a color device, not monochromatic. The parentheses are required around the text expression to indicate that it is a query. Media queries will allow us to check for items like, width, height, max-width, max-height, min-width, min-height, color, resolution, etc.

Opera already has some limited support for media queries. You can check for height and width values using the pixel measurement in Opera. Hopefully other browsers won't be to far behind. Actually, to try and push the concept forward a bit, media queries are one of the criteria being built into the new Acid 3 browser test.

You can check out a more detailed look at media queries by looking at the W3C [candidate recommendation](http://www.w3.org/TR/css3-mediaqueries/) on the subject.
