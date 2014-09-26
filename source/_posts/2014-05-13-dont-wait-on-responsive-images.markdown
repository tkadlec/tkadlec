---
layout: post
title: "Don't Wait on Responsive Images"
date: 2014-05-13 12:27
comments: true
categories: 
tags:
- responsive
- images
- performance
---
At long last, it appears we have our much-needed markup solution for responsive images thanks to srcset, sizes and picture. Implementation is already happening in [Chrome & Opera (Blink)](https://www.indiegogo.com/projects/picture-element-implementation-in-blink#activity) and Firefox (Gecko). Soon, the Blink implementation will be ported to WebKit. This is fantastic news—we’ve needed this for so long!

Yet some are still not happy. Honestly, that’s to be expected. The responsive images debate was incredibly heated and had much in common with an episode of Game of Thrones—minus the nudity. Some folks are still unsettled by the potential verbosity of picture & friends and would prefer a server-side solution or a new image format.

The thing is—they’re not wrong. The markup solution was absolutely needed, but a server-side solution (Hello, [client-hints](https://github.com/igrigorik/http-client-hints)!) would be amazing, as would a new image format. And in some cases, such solutions might even be better than what we currently have to play with.

Yet dismissing one of these three options as less than ideal misses the point. There is no ideal. There is no one-size-fits-all solution here. They each have their own important role in meeting the ultimate goal—serving great looking images to our visitors without all the current excess bloat.

In fact, I’d argue they all work better when in concert. Here’s what the responsive image process looked like on a recent project I worked on:

1. Image gets uploaded through the CMS by the content creators.
2. Server process compresses images and resizes to different dimensions. 
3. A template uses these images and, based on how the image is used in the page, generates a picture element with the appropriate breakpoints.
4. Users rejoice over faster-loading pages!

It’s an approach that lends itself well to future changes while making use of what we have available to us today. It also doesn’t just depend on a single approach to the task—it combines front-end markup with server-side processes to make an even better end result.

Since the solution was kept in it’s own little module, there is a lot of flexibility to improve it in the future. It’s currently using the slightly older [picturefill](https://github.com/scottjehl/picturefill) markup, but it will be easy to update that to the new and improved version. When client-hints come into the fold, it won’t take much work to use that data as well to inform the creation of the picture element and reduce the markup a little.

It took some time to get to that point. We had to analyze what types of images were used on the site, how they needed to change for different screens, and then figure out what breakpoints to use to pull in new images.

Then we had to build the server-side process to do the optimization and resizing, the module to generate the picture element, and the template logic to use the module. But the result of that effort is a better performing page and an image creation process that is flexible, future-friendly and fully automated. 

So yes, keep pushing for a new image format or a new server-side solution. We could absolutely use those. But don’t let that stop you from making a better experience for the people accessing your sites today.

The tools are there now. Let’s use them.