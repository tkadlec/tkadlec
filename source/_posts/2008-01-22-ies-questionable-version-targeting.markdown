---
comments: false
date: 2008-01-22 19:00:00
layout: post
slug: ies-questionable-version-targeting
title: IE's Questionable Version Targeting
wordpress_id: 82
categories:
- Web Standards
---

There has been an awful lot of talk around the web community about Microsoft's new feature in IE8 - version targeting. Initially, I hated the idea. However, instead of jumping in blindly, I thought it deserved a more detailed look on my part.


## What Is It?


Version targeting, as proposed by Microsoft, will use a X-UA-Compatible declaration, either via a META tag or as a HTTP header on the server, to determine which rendering engine the page will be displayed in. For example, the META tag below will tell IE to use the IE8 rendering engine to display the page:

If IE8 comes across a site that doesn't have this declaration either in a META tag or as a HTTP header, than it will render the page using IE7's rendering engine. This idea is not entirely new. DOCTYPE declarations have been switching IE browsers from 'quirks mode' to Web Standards mode since, I believe, IE6. There were some limitations with this. While using a DOCTYPE ensured standards mode, there is a definite difference in what standards mode is in IE6 versus in IE7.

The X-UA-Compatible declaration is meant to be more robust. Here, we can tell the browser exactly which version of IE to render the page in, thereby alleviating us from the headaches that may be caused by a different rendering engine in IE8 than in IE7 for example. We can also use the 'edge' keyword (which is apparently not recommended) instead of declaring a specific version. The 'edge' keyword is used below:

By using the 'edge' keyword, we are telling IE to always use the most current rendering engine available. This basically gives us the option of ignoring IE's new feature. However, this seems like a flawed idea, because as Jeremy Keith said "...even if you want to opt out, you have to opt in."


## Some Problems


I agree with Keith in thinking that the idea was implemented wrong. The X-UA-Compatible declaration should be a tool to use, not a required feature. If I want my site rendered in the newest version of IE, I shouldn't have to tell it that. It should assume that unless I tell it otherwise, I want my site rendered with the most current rendering engine, not the other way around. I guess I understand how from a business perspective this makes sense, this way everything works at least as well as before. However, for a community that puts so much emphasis on progressive enhancement, this doesn't seem to fit the mold.

I am also not so sure that this is any better than using conditional comments. If I can develop for standards supporting browsers and then use conditional comments to "fix" the other ones, than what benefit do I really get from using the X-UA-Compatible declaration? Also, what happens years down the road, after IE9 and IE10 are released? If I am one of those people still using IE8 at that time, and I come across a site that declares it should render in IE10, how will IE8 handle that? I would like to assume it would just render it using the highest version it knows (IE8 can only render IE8 or lower so an IE9 declaration results in IE8). Of course that just brings us back to using hacks again to ensure the older browsers still show our site reasonably well, and then we're back at the beginning.

I would also be interested to see if this is going to result in substantial code bloat for IE. If IE10 is potentially supporting four different rendering engines (quirks mode, standards mode in IE7, IE8, IE9) how is this going to affect the size of the browser code? I could see this potentially resulting in a pretty hefty amount of disk space being required in the future as more and more engines are being supported.


## Not All Bad


The idea is not totally off base. It offers a nice feature, we don't have to scramble to make sure our sites don't break in the newest version of IE. I just think that it should be an optional feature...I either use the declaration and therefore ensure that my code will be rendered as always, or I don't use it and allow progressive enhancement to work it's magic.

I still say kudos to IE for trying a new idea out. If nothing else, this has gotten the community discussing the advantages and disadvantages of Microsoft's proposed solution, as well as talking about other routes we could take. Even after looking at it in more detail though, I just don't think this is going to help solve much of anything. I don't know that there is that big of an advantage offered by it, and I just don't think that other browser vendors will think it is worth their time. Who knows though? Maybe in five years, people will be looking at this post and remarking about how short-sighted I was. I guess time will tell.


## Don't Take My Word For It


This is a very opinionated topic that has generated some great discussion already across the web. I encourage you to check out some of the varying opinions and arguments presented in the posts below:



	
  * [Chris Wilson's announcement](http://blogs.msdn.com/ie/archive/2008/01/21/compatibility-and-ie8.aspx)

	
  * [Aaron Gustafson's post at A List Apart](http://www.alistapart.com/articles/beyonddoctype)

	
  * [Eric Meyer's response](http://www.alistapart.com/articles/fromswitchestotargets)

	
  * [Jeremy Keith's take on it](http://adactio.com/journal/1402/)

	
  * [Johnathan Snook's argument for it](http://snook.ca/archives/browsers/version_targeting_ie8/)

	
  * [Some potential browser problems from Robert O'Callahan](http://weblogs.mozillazine.org/roc/archives/2008/01/post_2.html)


