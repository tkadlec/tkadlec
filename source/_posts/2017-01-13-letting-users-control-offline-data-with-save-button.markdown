---
layout: post
title: "Letting users control offline data with a save button"
date: 2017-01-21 16:28:51 -0600
comments: true
categories: 
published: false
tags:
- performance
- offline
- service workers
---
One of my favorite tech books of last year was [Resilient Web Design](https://resilientwebdesign.com/) by [Jeremy Keith](https://adactio.com/). It's part principle and part history of the web. Jeremy does a wonderful job of detailing how to build a web that can withstand the onslaught of variability that is inherent in the medium.

The entire book is available freely online. You can read the full thing online, or grab the source code and use it to generate a PDF, Kindle version, ePub or whatever format you might prefer. As a nice touch, Jeremy made the book work offline as well by adding a service worker to the website (he's also [written about how he pulled it off](https://adactio.com/journal/11730)). When you visit the page, the book gets stored in its entirety to your device.

Last week there was a thoughtful critique of this decision by [Nicolas Hoizey](https://nicolas-hoizey.com/2017/01/how-much-data-should-my-service-worker-put-upfront-in-the-offline-cache.html). He pointed out that while the offline functionality is certainly nice, it does mean that the first time you visit the site your phone will download around 16MB of data—without you realizing it.

It's a fair critique. I remember having numerous discussions back in service workers infancy about what a responsible approach would be to this very issue. 

One option that could be implemented relatively easily is adding a "Save Offline" button to the sites that want to save a large amount of data offline. 

One of the less-discussed features of service workers is the ability to add items to the cache without having to use the service worker itself to accomplish it. 

You register the service worker as usual, and cache whatever resources you consider to be critical and within a reasonable data limit. At the same time that you test for service worker support in order to register the worker itself, you could also generate a button and insert it into the page:

<pre>
<code class="language-javascript">if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    });
    var button = document.createElement('button');
    button.className = "js-offline";
    button.innerHTML = "Save Offline";
    
    document.body.appendChild(button);

}
</code>
</pre>

Now you can add a function so that if the event is clicked, the rest of the book is saved offline:

<pre>
<code class="language-javascript">
button.addEventListener('click', function(event) {
    event.preventDefault();

    caches.open('my-cache').then(function(cache) {
        cache.addAll(
            //items to store
            );
        });
});
</code>
</pre>

So now you get the best of both worlds. The initial visit remains fast and lightweight, and the user can choose to save the book offline—putting them back in control over their data.

The one downside that I mentioned on Twitter about this approach is that we've now made a promise to the user that we are saving the site offline for them for later, meaning there's an expectation that the site will stay there. Jake "Service Worker" Archibald pointed me in the direction of [persistent storage](https://developers.google.com/web/updates/2016/06/persistent-storage), which I had either missed or forgotten about. 

Using persistent storage, we can request that the data saved for this sight is, well, persistent. In other words, that data will not be automatically cleared by the system—it can only be cleared by the user requesting it explicitly.

<pre>
<code class="language-javascript">
if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().then(function(granted) {
        if (granted) {
        // storage can only be cleared by user action
        } else {
        // storage can be cleared by system if need be 
        }
    });
}
</code>
</pre>

There's no guarantee that the request will be accepted by the UA. Chrome, in fact, declines unless the following criteria is met:

- The site is bookmarked (and the user has 5 or less bookmarks)
- The site has high site engagement
- The site has been added to home screen
- The site has push notifications enabled

Unfortunately on a first visit, none of these is likely to be true which means that if the user does explicitly ask to save the site offline, there's no guarantee it will be there when they try to use it. The logic makes sense though. Without these safety measurements in place, any site could request persistent storage and the poor user's device would fill up in no time.

This combination—allowing the user to explicitly decide to store large amounts of data and then requesting persistent storage if possible—may not be perfect, but it seems like the best way today to give users control when we need to store large amounts of data.
