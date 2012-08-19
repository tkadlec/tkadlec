---
comments: false
date: 2008-10-19 19:00:00
layout: post
slug: font-equality-for-everyone
title: Font Equality for Everyone
wordpress_id: 48
categories:
- CSS
tags:
- css
- fonts
---

One of the areas that web design is lacking in, is a way to reliably provide beautiful fonts for our designs. There's a very limited amount of fonts that are actually safe to use on the web, because not everyone is a designer with lots of nice fonts installed on their machine. Sure, with font stacking we can help ease the pain a bit, but it's still a small amount of people that will see the fonts we intend, with everyone else getting boring alternates.

There are a few solutions currently being utilized across the web. The simplest, and also probably the worst option of them, is to use background images to display our custom fonts. This is not very ideal at all...every time we want to change the text on the site, we have to edit the appropriate background image. A couple less "needy" options are sIFR and FLIR. In both cases, Javascript is utilized to deliver the text in our desired font. sIFR uses Flash to make this happen and FLIR uses PHP. But we are still relying on Javascript to load the fonts onto the page, and there is some performance loss.

Thankfully, we are close to being able to make use of a CSS rule that makes font use so much simpler. The newest versions of all major browsers now support the @font-face rule, which gives us a lot of power over the fonts we can use in our sites. Unfortunately, some of them don't play too nicely yet. Firefox 3.1 and Safari both implement the @font-face rule very well, but IE only supports EOT fonts and I've found Opera 9.6's support is a bit unreliable. However, in the name of progressive enhancement, there's little reason why we can't start making use of this rule to improve our sites now.


## Simply Powerful


The beauty of the @font-face rule is both how simple it is, and yet how powerful it is. The @font-face rule includes the rule and the font description like so:



	
  1. @font-face {

	
  2. }


The font description is made up of the what are called font descriptors. Simply put, they follow the same format of typical CSS style declarations. The most basic font description is composed of a font-family declaration and a src declaration that points to the font we will be using, like so:

	
  1. @font-face {

	
  2. font-family: "Benjamin Franklin";

	
  3. src: url(BenjaminFranklin.ttf);

	
  4. }


The url can be either remote or on your own site. However, for maximum browser compatibility, your font should reside in the same place as the page using it. Firefox, for instance, does not allow using fonts that don't have the same origin of the page. Instead of using a url, we can also use a local path ( local(font-path) ) that would point to a font located on the user's computer. We've now set the way for us to make use of the Benjamin Franklin font in our site.

	
  1. h1 {

	
  2. font-family: "Benjamin Franklin", serif;

	
  3. }




## More Than Meets the Eye


Simple and easy. Here's where the fun stuff comes in though. Remember how those declarations, like the font-family declaration above, are called font descriptors? That's because they describe the declaration that can be used to trigger that font use. Admittedly, that might not be very clear, so let's extend our example:



	
  1. @font-face {

	
  2. font-family: "Benjamin Franklin";

	
  3. src: url(BenjaminFranklin.ttf);

	
  4. font-weight: all;

	
  5. }

	
  6. @font-face {

	
  7. font-family: "Benjamin Franklin";

	
  8. src: url(Hansa.ttf);

	
  9. font-weight: bold;

	
  10. }

	
  11. h1 {

	
  12. font-family: "Benjamin Franklin", serif;

	
  13. font-weight: bold;

	
  14. }

	
  15. h2 {

	
  16. font-family: "Benjamin Franklin", serif;

	
  17. font-weight: normal;

	
  18. }


In the example above, we changed the call to the font being used if the font-weight is bold. If the font-weight is anything but bold, then the Benjamin Franklin font is used. If the font-weight is set to bold, then the Hansa font is used. If you have Safari or the Firefox 3.1 beta you can [take a look at the code in action](font-facetest.asp). (NOTE: The only reason I was using two different fonts here is to make it obvious that the font is changed based on the font-weight. A more subtle example would be to use a variation of the base font, like a bold version.)

Descriptors give you significant power over the fonts you utilize. Instead of relying on the browser to fake a bold or italic version of the font, we can provide the more professional looking actual italicized, or bolded, version of the font, greatly improving the appearance of our design.

I highly encourage taking a look at the [W3C's information on the @font-face rule](http://www.w3.org/TR/CSS2/fonts.html#font-descriptions) and playing around with it a bit. There's some great examples of some of the powerful ways you can make use of the @font-face rules including an interesting example of redefining the basic serif font-family. Remember, for full functionality you'll need to either get ahold of Firefox 3.1 or Safari.

Keep in mind that not all fonts are meant to be used in this way. Some font providers encourage you to make use of their fonts freely, other's don't. So make sure you're allowed to make use of the font before embedding it on your site. Both fonts used in the examples, Hansa and Benjamin Franklin, are designed by [Dieter Steffman](http://moorstation.org/typoasis/designers/steffmann/index.htm) who graciously allows his fonts to be freely used on the web.

Also, while there is a lot of power and control offered with the @font-face rule, still use it with some level of restraint. There is some time involved in downloading the font, so you should probably stick to using this method for headlines only...not body text.
  *[EOT]: Embedded Open Type
  *[sIFR]: scalable Inman Flash Replacement
  *[FLIR]: Facelift Image Replacement
