---
layout: post
title: "Reducing JavaScript Bloat with Shoestring"
date: 2014-10-30 13:13
comments: true
categories: 
tags:
- performance
- javascript
---
Those smart and clever folks at [The Filament Group](http://www.filamentgroup.com/) formally announced yet another useful tool yesterday: a “lightweight, simple DOM utility” they call [Shoestring](https://github.com/filamentgroup/shoestring).

I’ve been using Shoestring for awhile now, and I’m a huge fan. In fact it has become my go-to solution when I need such a tool. It’s small, powerful, and very, very smart.

It’s very rare that I write about a specific tool. [Tools come and go](http://futurefriendlyweb.com/come-aboard.html). However after talking so much about [the importance](http://timkadlec.com/2014/01/smart-defaults-on-libraries-and-frameworks/) of [reducing JavaScript bloat](http://timkadlec.com/2014/09/js-parse-and-execution-time/), I figured I should take the time to explain a little about how I'm doing that myself. Shoestring has played a large role in that. In addition, Shoestring has made some really smart decisions that are worth noting regardless of whether the tool is a fit for you or not:

- [Iterating on the wheel](#iterating)
- [Allowing smart defaults](#defaults)

<h2 id="iterating">Iterating on the wheel</h2>
One argument against throwing together yet another framework or utility is that we shouldn’t be reinventing the wheel. It's not just about making use of the work others have done, but it's also about avoiding the disruption caused by yet another syntax to learn. Shoestring doesn’t reinvent the wheel so much as it iterates on it.

jQuery is massively popular. In fact, it’s far easier to find information about how to solve a problem with jQuery than it is to find information about how to solve that same problem with plain old JavaScript. 

As a results, its syntax is widely recognized and familiar to many. If you’re working on a re-build, it can also hard to escape the hold it has over existing systems and components.

Shoestring is modeled after jQuery. That makes it a very comfortable transition for folks who have become very familiar with jQuery. Anything that works in Shoestring should also work in jQuery, and while it’s not guaranteed, I’ve found the opposite is often true as well.

<h2 id="defaults">Allowing smart defaults</h2>
I’ve written in the past about [the importance of smart defaults](http://timkadlec.com/2014/01/smart-defaults-on-libraries-and-frameworks/). Jared Spool has talked about [discovering only 5% of users changed the default Word settings](http://www.uie.com/brainsparks/2011/09/14/do-users-change-their-settings/). An academic study showed that you could get a huge [increase in organ donors](http://www.dangoldstein.com/papers/DefaultsScience.pdf) (an increase between 17-50%) simply by making the default option “Yes” instead of “No”. Point being, defaults matter because very few people will change them.

Shoestring consists of a tiny core and three sets of extensions: DOM manipulation, events, and AJAX. Using the build tool, you can get very granular about what you do and don’t include and keep things as light as possible. Instead of rolling everything in all at once, it’s set up in a way that you can easily pick and choose as needed. Each extension lives on its own (ex: [the after method](https://github.com/filamentgroup/shoestring/blob/master/src/dom/after.js)).

<h2 id="how">How I'm using it</h2>
While you are free to use the build however you want, the way I’ve been using it is to start with a really sparse set of extensions: 

<pre>
<code class="language-javascript">
require([
	"shoestring",
	"dollar",
	"core/each",
	"core/inarray",
	"core/ready",
	"events/bind"
]);
</code>
</pre>

As I code, I pull in additional extensions only as I find I need them. If I need to use some AJAX functionality, I drop the relevant extensions into the build and move along. The result is that only what is absolutely needed goes in.

There are other ways of doing this. You could look for used Shoestring extensions in your code and have a custom build automatically created based on that, for example. But I like the deliberateness that this “simple by default” approach enforces. It makes me think very carefully about every little piece of code that I’m adding to my project, consciously justifying its existence.

<h2 id="cut-mustard">Cutting the Mustard</h2>
[Cutting the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) is an incredibly valuable approach in its own right. By drawing a line in the sand between what a core and enhanced experience (and which browsers get each) you remove a lot of complexity and overhead from the process. Less capable browsers benefit from less code and overall bloat. Modern browsers benefit from no longer needed to carry around the extra baggage of endless polyfills and frameworks. Each browser gets what it needs to provide an experience fit for its capabilities, and very little more.

Since Shoestring expects browser to support <code>querySelectorAll</code>, one of the tests commonly used to determine what cuts the mustard and what doesn’t, the two compliment each other very nicely.

At the top of the page, I’ll do a check to see if the browser cuts the mustard. If it does, I’ll then asynchronously load in Shoestring and the rest of the JavaScript (using Filament’s tiny [loadJS](https://github.com/filamentgroup/loadJS)) to get things kicked off. It's a snippet that probably looks familar to anyone who's used a cutting-the-mustard approach themselves:

<pre>
<code class="language-markup">
&lt;script type="text/javascript"&gt;
window.myApp = {};
function loadJS(src,cb){...}

if ("querySelector" in document && "addEventListener" in window) {
	window.myApp.cutsMustard = true;
	document.documentElement.className += " mustard";		
	loadJS("main.js");
}
&lt;/script&gt;
</code>
</pre>

Pairing Shoestring with a cutting the mustard approach ensures I’m safe to use Shoestring and benefit from its smaller file size. Cutting the mustard also means I’m a lot less reliant on polyfills and the like, helping keep the overall weight down and reducing the pain of maintenance and overall fragility of the site.

<h2 id="results">The results</h2>
I’ve been very happy with the results I’ve gotten on projects where I use Shoestring. Here’s the total weight of the JavaScript used on the last three projects I used Shoestring on, after gzip was applied:

- 8.6kb
- 11.8kb
- 9.5kb

That’s pretty tiny and goes a long way towards helping keep the overall weight, load time, and [rendering time](http://timkadlec.com/2014/09/js-parse-and-execution-time/) of the site down.

Because the API is modeled after jQuery, the transition for has been virtually seamless for team members. And in situations where we stumble upon a legacy script that just can’t be re-written (say, for example, an ad loading script maintained by another team within an organization), switching to jQuery requires no more than a minute or two and results in no loss in productivity.

The Filament Group has released a ton of great tools, but this may be my personal favorite of the bunch. Even if you decide you can’t use Shoestring for your own projects, there is a lot to be learned from the approach.
