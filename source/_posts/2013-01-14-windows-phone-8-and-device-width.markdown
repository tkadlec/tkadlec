---
layout: post
title: "Windows Phone 8 and Device-Width"
date: 2013-01-14 09:20
comments: true
categories: 
tags:
- microsoft
- responsive
- viewport
---
When I wrote about IE10 and the new snap mode [back in October](http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/) I advised using `width: device-width` to fix responsive design in snap mode instead of Microsoft's recommendation, which was to use `width: 320px`. Using `device-width` is a far more future friendly approach and testing I had done on a tablet running Windows 8 showed this worked just as well.

However, the other week Matt Stow discovered that [device-width wasn't getting the job done on a Lumia 920](http://mattstow.com/responsive-design-in-ie10-on-windows-phone-8.html). Apparently the Lumia 920 (which boasts a 4.5" screen) reports a viewport width of 768px for `device-width`, which is much larger than what you would expect for a device its size.

[Tomomi Imura](http://girliemac.com/blog/), who has done a lot of testing around viewports, apparently discovered this behavior awhile back: 

> So it is correct &lt;meta name=viewport content=width=device-width&gt; gives 320px width, while @-ms-viewport {width:device-width} 768 on Lumia 920" ([Source](https://twitter.com/girlie_mac/statuses/270727043199684608))

Here's where things get interesting. When you use `device-width` inside the meta tag on Windows Phone 8, it returns CSS pixels. When you set `width=device-width` through CSS device adaptation, it returns the actual device pixels. (If that sounds a bit murky, PPK's excellent articles on viewports should help clear it up: [part one](http://www.quirksmode.org/mobile/viewports.html) and [part two](http://www.quirksmode.org/mobile/viewports2.html))

This is an issue because using CSS device adaptation is necessary for getting responsive sites to work in snap mode in IE10 for Metro. So while CSS device adaptation fixes our issues with snap mode, it causes issues on Windows Phone 8 devices like the Lumia.

After talking to [Rey Bango](https://twitter.com/reybango) at Microsoft (who is awesome to work with and did not pay me (much) to say that) this behavior was confirmed as a bug—not intentional behavior and the team over there is going to get an update out (not sure when) to fix it. The good news is that this fix will also clear up another issue in IE10 that causes it to always report a screen resolution of 96dpi, regardless of if that is true or not.

The bad news is that getting those updates to people using Windows 8 phones won't be an overnight thing. Just ask anyone with an Android device about how quickly carriers release updates. Once they've finished crying they'll fill you in.

In the meantime, we're in a bit of a jam. We have a few options, none of which are ideal:

We could do what Matt (and Microsoft) initially suggested and apply the following code:

<pre>
<code class="language-css">
@media screen and (max-width:400px) {
    @-ms-viewport{
        width:320px;
    }
}
</code>
</pre>

This would address the snap mode issue, as well as make Windows Phone 8 devices like the Lumia 920 display nicely. Unfortunately this would also impact future devices that may not actually need (nor should they get) this "fix". Since each Windows 8 device will support the same syntax, the "fix" would be applied to any phone running Windows 8.

We could also leave the @-ms-viewport stuff out entirely. This would mean that phones, tablets and desktops would all behave as you would expect unless the person was using the browser in snap mode. I haven't seen any stats about this behavior yet, so I really can't speak to how large an audience that is.

Finally could use `width=device-width`, which is certainly the most "future friendly" approach. To address the issue on Windows Phone 8, we could apply the temporary fix that the folks at Microsoft has come up with. Their recommendation is to set the meta viewport tag to device-width as you normally would, and set the viewport in your CSS like so:

<pre>
<code class="language-css">
@-webkit-viewport{width:device-width}
@-moz-viewport{width:device-width}
@-ms-viewport{width:device-width}
@-o-viewport{width:device-width}
@viewport{width:device-width}
</code>
</pre>

Then, you would need to add the following JavaScript.

<pre>
<code class="language-javascript">
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
        document.createTextNode(
            "@-ms-viewport{width:auto!important}"
        )
    );
    document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
}
</code>
</pre>

The code above checks for the version of IE that has this issue (IE Mobile 10) and then injects a stylesheet that overrides the device-width declaration in your CSS. This gets all Windows 8 devices playing along nicely. Windows Phone 8 devices will pay apply a friendlier viewport, and snap mode users will see a site scaled to their viewport size as well.

My recommendation is to use Microsoft's fix. Client-side UA sniffing may not be the most eloquent solution, but I prefer it to potentially harming the user experience—something which each of the other two solutions would be guilty of. Perhaps this would be a different scenario if this was IE8 or IE7, but considering it's the behavior in an operating system that just came out (and therefore, most likely will only increase in marketshare for the time being) I think it's worth implementing.