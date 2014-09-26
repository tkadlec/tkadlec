---
layout: post
title: "JS Parse and Execution Time"
date: 2014-09-26 09:06
comments: true
categories: 
tags:
- performance
- javascript
---
At Velocity NY, [Daniel Espeset](https://twitter.com/danielespeset) of Etsy gave a great talk about how Etsy profiles their JavaScript parse and execution time. Even better, after the talk, they released the tool on [GitHub](https://github.com/etsy/DeviceTiming).

Daniel shared a few examples [in his deck](https://speakerdeck.com/desp/unpacking-the-black-box-benchmarking-js-parsing-and-execution-on-mobile-devices), but I couldn’t wait to take Daniel’s tool and fire it up on a bunch of random browsers and devices that I have sitting around.

For this test, I decided to profile just jQuery 2.1.1, which weighs in at 88kb when minimized. jQuery was selected for its popularity, not because it’s the worst offender. There are many libraries much worse (hey there Angular and your 120kb payload). The results above are based on the median times taken from 20 tests per browser/device combination.

The list of tested devices isn’t exhaustive by any means—I just took some of the ones I have sitting around to try and get a picture of how much parse and execution time would vary.

<table class="plain" cellspacing="3">
	<caption>Parse and execution times of minimized jQuery 2.1.1</caption>
	<thead>
		<tr>
			<th>Device</th>
			<th>Browser</th>
			<th>Median Parse</th>
			<th>Median Execution</th>
			<th>Median Total</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-title="Device">Blackberry 9650</td>
			<td data-title="Browser">Default, BB6</td>
			<td class="num" data-title="Median Parse">171ms</td>
			<td class="num" data-title="Median Execution">554ms</td>
			<td class="num" data-title="Median Total">725ms</td>
		</tr>
		<tr>
			<td data-title="Device">UMX U670C</td>
			<td data-title="Browser">Android 2.3.6 Browser</td>
			<td class="num" data-title="Median Parse">168ms</td>
			<td class="num" data-title="Median Execution">484ms</td>
			<td class="num" data-title="Median Total">652ms</td>
		</tr>
		<tr>
			<td data-title="Device">Galaxy S3</td>
			<td data-title="Browser">Chrome 32</td>
			<td class="num" data-title="Median Parse">39ms</td>
			<td class="num" data-title="Median Execution">297ms</td>
			<td class="num" data-title="Median Total">336ms</td>
		</tr>
		<tr>
			<td data-title="Device">Galaxy S3</td>
			<td data-title="Browser">UC 8.6</td>
			<td class="num" data-title="Median Parse">45ms</td>
			<td class="num" data-title="Median Execution">215ms</td>
			<td class="num" data-title="Median Total">260ms</td>
		</tr>
		<tr>
			<td data-title="Device">Galaxy S3</td>
			<td data-title="Browser">Dolphin 10</td>
			<td class="num" data-title="Median Parse">2ms</td>
			<td class="num" data-title="Median Execution">222ms</td>
			<td class="num" data-title="Median Total">224ms</td>
		</tr>
		<tr>
			<td data-title="Device">Kindle Touch</td>
			<td data-title="Browser">Kindle 3.0+</td>
			<td class="num" data-title="Median Parse">63ms</td>
			<td class="num" data-title="Median Execution">132ms</td>
			<td class="num" data-title="Median Total">195ms</td>
		</tr>
		<tr>
			<td data-title="Device">Geeksphone Peak</td>
			<td data-title="Browser">Firefox 25</td>
			<td class="num" data-title="Median Parse">51ms</td>
			<td class="num" data-title="Median Execution">109ms</td>
			<td class="num" data-title="Median Total">160ms</td>
		</tr>
		<tr>
			<td data-title="Device">Kindle Fire</td>
			<td data-title="Browser">Silk 3.17</td>
			<td class="num" data-title="Median Parse">16ms</td>
			<td class="num" data-title="Median Execution">139ms</td>
			<td class="num" data-title="Median Total">155ms</td>
		</tr>
		<tr>
			<td data-title="Device">Lumia 520</td>
			<td data-title="Browser">IE10</td>
			<td class="num" data-title="Median Parse">97ms</td>
			<td class="num" data-title="Median Execution">56ms</td>
			<td class="num" data-title="Median Total">153ms</td>
		</tr>
		<tr>
			<td data-title="Device">Galaxy S3</td>
			<td data-title="Browser">Android 4.1.1 Browser</td>
			<td class="num" data-title="Median Parse">3ms</td>
			<td class="num" data-title="Median Execution">125ms</td>
			<td class="num" data-title="Median Total">128ms</td>
		</tr>
		<tr>
			<td data-title="Device">Kindle Paperwhite</td>
			<td data-title="Browser">Kindle 3.0+</td>
			<td class="num" data-title="Median Parse">43ms</td>
			<td class="num" data-title="Median Execution">71ms</td>
			<td class="num" data-title="Median Total">114ms</td>
		</tr>
		<tr>
			<td data-title="Device">Lumia 920</td>
			<td data-title="Browser">IE10</td>
			<td class="num" data-title="Median Parse">70ms</td>
			<td class="num" data-title="Median Execution">37ms</td>
			<td class="num" data-title="Median Total">107ms</td>
		</tr>
		<tr>
			<td data-title="Device">Droid X</td>
			<td data-title="Browser">Android 2.3.4 Browser</td>
			<td class="num" data-title="Median Parse">6ms</td>
			<td class="num" data-title="Median Execution">96ms</td>
			<td class="num" data-title="Median Total">102ms</td>
		</tr>
		<tr>
			<td data-title="Device">Nexus 5</td>
			<td data-title="Browser">Chrome 37</td>
			<td class="num" data-title="Median Parse">11ms</td>
			<td class="num" data-title="Median Execution">81ms</td>
			<td class="num" data-title="Median Total">92ms</td>
		</tr>
		<tr>
			<td data-title="Device">iPod Touch</td>
			<td data-title="Browser">iOS 6</td>
			<td class="num" data-title="Median Parse">26ms</td>
			<td class="num" data-title="Median Execution">37ms</td>
			<td class="num" data-title="Median Total">63ms</td>
		</tr>
		<tr>
			<td data-title="Device">Nexus 5</td>
			<td data-title="Browser">Firefox 32</td>
			<td class="num" data-title="Median Parse">20ms</td>
			<td class="num" data-title="Median Execution">41ms</td>
			<td class="num" data-title="Median Total">61ms</td>
		</tr>
		<tr>
			<td data-title="Device">iPad Mini</td>
			<td data-title="Browser">iOS6</td>
			<td class="num" data-title="Median Parse">16ms</td>
			<td class="num" data-title="Median Execution">30ms</td>
			<td class="num" data-title="Median Total">46ms</td>
		</tr>
		<tr>
			<td data-title="Device">Macbook Air (2014)</td>
			<td data-title="Browser">Chrome 37</td>
			<td class="num" data-title="Median Parse">5ms</td>
			<td class="num" data-title="Median Execution">29ms</td>
			<td class="num" data-title="Median Total">34ms</td>
		</tr>
		<tr>
			<td data-title="Device">Macbook Air (2014)</td>
			<td data-title="Browser">Opera 9.8</td>
			<td class="num" data-title="Median Parse">14ms</td>
			<td class="num" data-title="Median Execution">5ms</td>
			<td class="num" data-title="Median Total">19ms</td>
		</tr>
		<tr>
			<td data-title="Device">iPhone 5s</td>
			<td data-title="Browser">iOS 7</td>
			<td class="num" data-title="Median Parse">2ms</td>
			<td class="num" data-title="Median Execution">16ms</td>
			<td class="num" data-title="Median Total">18ms</td>
		</tr>
		<tr>
			<td data-title="Device">Macbook Air (2014)</td>
			<td data-title="Browser">Firefox 31</td>
			<td class="num" data-title="Median Parse">4ms</td>
			<td class="num" data-title="Median Execution">10ms</td>
			<td class="num" data-title="Median Total">14ms</td>
		</tr>
		<tr>
			<td data-title="Device">iPad (4th Gen)</td>
			<td data-title="Browser">iOS 7</td>
			<td class="num" data-title="Median Parse">1ms</td>
			<td class="num" data-title="Median Execution">13ms</td>
			<td class="num" data-title="Median Total">14ms</td>
		</tr>
		<tr>
			<td data-title="Device">iPhone 5s</td>
			<td data-title="Browser">Chrome 37</td>
			<td class="num" data-title="Median Parse">2ms</td>
			<td class="num" data-title="Median Execution">8ms</td>
			<td class="num" data-title="Median Total">10ms</td>
		</tr>
		<tr>
			<td data-title="Device">Macbook Air (2014)</td>
			<td data-title="Browser">Safari 7</td>
			<td class="num" data-title="Median Parse">1ms</td>
			<td class="num" data-title="Median Execution">4ms</td>
			<td class="num" data-title="Median Total">5ms</td>
		</tr>
	</tbody>
</table>

As you can see from the table above, even in this small sample size the parsing and execution times varied dramatically from device to device and browser to browser. On powerful devices, like my Macbook Air (2014), parse and execution time was negligible. Powerful mobile devices like the iPhone 5s also fared very well.

But as soon as you moved away from the latest and greatest top-end devices, the ugly truth of JS parse and execution time started to rear its head.

On a Blackberry 9650 (running BB6), the combined time to parse and execute jQuery was a whopping 725ms. My UMX running Android 2.3.6 took 652ms. Before you laugh off this little device running the 2.3.6 browser, it’s worth mentioning I bought this a month ago, brand new. It’s a device actively being sold by a few prepaid networks.

Another interesting note was how significant the impact of hardware has on the timing. The Lumia 520, despite running the same browser as the 920, had a median parse and execution time that was 46% slower than the 920. The Kindle Touch, despite running the same browser as the Paperwhite, was 71% slower than it's more powerful replacement. How powerful the device was, not just the browser, had a large impact. 

This is notable because we’re seeing companies such as [Mozilla](http://arstechnica.com/gadgets/2014/09/weve-got-a-35-firefox-os-phone-what-do-you-want-to-know/) and [Google](http://bits.blogs.nytimes.com/2014/09/15/google-aims-at-developing-markets-with-android-one-initiative/?_php=true&_type=blogs&_r=00) targeting emerging markets with affordable, low-powered devices that otherwise run modern browsers. Those markets are going to dominate internet growth over the next few years, and affordability is a more necessary feature than a souped up device.

In addition, as the cost of technology cheapens, we're going to continue seeing an incredibly diverse set of connected devices. With endless new form factors being released (even the Android Wear watches quickly got a [Chromium based browser](http://liliputing.com/2014/07/now-theres-web-browser-android-wear-smartwatches.html)), the adage about not knowing where our sites will end up has never been more true.

The truly frightening thing about these parse and execution times is that this is for the latest version of jQuery, and *only* the latest version of jQuery. No older versions. No additional plugins or frameworks. According to the latest run of [HTTP Archive](http://httparchive.org/), the median JS transfer size is 230kb and this test includes just a fraction of that size. I'm not even asking jQuery to actually *do* anything. Basically, I'm lobbing the browsers a softball here—these are best case results.

This re-affirms what [many](https://blog.twitter.com/2012/improving-performance-on-twittercom) [have](http://jakearchibald.com/2013/progressive-enhancement-is-faster/) [been](http://aaron-gustafson.com/notebook/2014/a-fundamental-disconnect/) [arguing](http://timkadlec.com/2013/08/being-practical/) for some time: reducing your dependency on JS is not healthy merely for the minor percentage of people who have JS disabled—it improves the experience for everyone. When anything over 100ms stops feeling instantaneous and anything over 1000ms breaks the users flow, taking 700ms to parse your JavaScript cripples the user experience before it really has a chance to get started.

So what's a web developer to do?

1. **Use less JavaScript.** This is the simple one. Anything you can offload onto HTML or CSS, do it. JavaScript is fun and awesome but it's also the most brittle layer of the web stack and, as we've seen, can seriously impact performance.

2. **Render on the server** If you're using a client-side MVC framework, make sure you pre-render on the server. If you build a client-side MVC framework and you're not ensuring those templates can easily be rendered on the server as well, you're being irresponsible. That's a bug. A bug that impacts performance, stability and reach.

3. **Defer all the scripts.**  Defer every bit of JavaScript that you can. Get it out of the critical path. When it makes sense, take steps to defer the parsing as well. Google had a great post a few years back about how they [reduced startup latency for Gmail](http://googlecode.blogspot.com/2009/09/gmail-for-mobile-html5-series-reducing.html). One of the things they did was initially comment out blocks of JavaScript so that it wouldn't be parsed during page load. The result was a 10x reduction in startup latency. That number is probably different on today's devices, but the approach still stands.

4. **Cut the mustard.** I'm a big fan of ["cutting the mustard"](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard), an approach made popular by the BBC. This doesn't solve the problem of low-end devices with modern browsers, but it will make a better experience for people using less capable browsers. Better yet, by consciously deciding not to overwhelm less capable browsers with excess scripts you not only provide a better experience for those users, but you reduce the need for extra polyfills and frameworks for modern browsers as well. On one recent project where we did this, the entire JavaScript for the site was about 43% of the size of jQuery alone! 

There are certainly cases to be made for JS libraries, client-side MVC frameworks, and the like, but providing a quality, performant experience across a variety of devices and browsers requires that we take special care to ensure that the initial rendering is not reliant on them. Frameworks and libraries should be carefully considered additions, [not the default](http://timkadlec.com/2014/01/smart-defaults-on-libraries-and-frameworks/).

When you consider the combination of weight, parse time and execution time, it becomes pretty clear that optimizing your JS and reducing your site's reliance on it is one of the most impactful optimizations you can make.
