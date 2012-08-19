---
comments: false
date: 2009-06-17 19:00:00
layout: post
slug: developing-smarter-with-progressive-enhancement
title: Developing Smarter with Progressive Enhancement
wordpress_id: 33
categories:
- CSS
tags:
- css
- progressive enhancement
---

Progressive enhancement is not only a smart idea, but it's the right idea for anyone looking to produce cost-effective websites. It is alright if your site doesn't look exactly the same in every browser. In fact, because of factors like font rendering, it's impossible to maintain the exact same appearance across all browsers. Getting clients to accept that fact is important because it can save them both time and money (not to mention save you a few headaches).

Let's take an example. Let's say that our client, Great Sprockets Inc., wants a design with a few rounded corners and semi-transparent backgrounds sprinkled in. We decide not to use progressive enhancement. Everybody should get these rounded corners and semi-transparent backgrounds.

So, we oblige. We create some 24-bit PNGs for the backgrounds. IE6 doesn't support PNG24 transparency natively, so we add in a call to a script to fix that. We create a few images for the rounded corners, add a couple of extra element to our markup to position them, and we're good to go.

Now our other client, Even Greater Sprockets Inc., also wants rounded corners and semi-transparent backgrounds. However, recognizing that neither is important to the actual branding of the site, they agree to practice a bit of progressive enhancement.

So, using two lines of CSS, we give rounded corners to all Firefox and Webkit-based browsers. Again, using CSS, we use [RGBa](http://www.timkadlec.com/post.asp?q=61) to create semi-transparent backgrounds in the browsers that support them, and let others fall back to a fully opaque background color. And that's it. No images, no extra Javascript calls, and no extra elements in our markup.

One client has ensured that every visitor to their site with a relatively modern browser, regardless of browser capabilities, gets rounded corners and semi-transparent backgrounds. As a result, they added time to the development of their site, and therefore money to their bill. In addition, they've increased the time it takes for their page to load by adding a few extra HTTP requests necessary to load the necessary images and scripts.

The other client has offered these embellishments only to browsers that support them natively. As a result, their development time is lower, and so is their bill and page load time. Their branding is still in tact, and their site still looks good, it's just without a few added aesthetic touches.

Which option makes more sense to you?
