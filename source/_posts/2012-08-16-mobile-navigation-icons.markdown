---
layout: post
title: "Mobile Navigation Icons"
date: 2012-08-16 09:04
comments: true
categories: 
tags: icons responsive mobile navigation
---

Jeremy Keith just wrote a post about [mobile navigation icons](http://adactio.com/journal/5666) wherein he talks about the &#8220;three lines&#8221; icon that Andy Clarke also advocated when he [explored the topic earlier](http://stuffandnonsense.co.uk/blog/about/we_need_a_standard_show_navigation_icon_for_responsive_web_design).

Theoretically, it would be easy to create the icon using Unicode symbols. For instance, you could create the icon by using the following HTML:

<pre>
<code class="language-markup">
&lt;a&gt;&amp;#9776; Menu &lt;/a&gt;
</code>
</pre>


Unfortunately, as Jeremy points out, many mobile devices fail to handle it correctly. Android and Blackberry devices, for example, don&#8217;t display the icon as intended.

I recently wanted to use the icon, and ran into this same issue. Inspired by Nicolas Gallagher&#8217;s post on [pure CSS generated icons](http://nicolasgallagher.com/pure-css-gui-icons/), I was able to get the icon to render nicely in about 10 minutes of CSS wrangling. So, if you&#8217;re dead set on rendering the icon without using an image, here&#8217;s how you can render it in CSS:

<pre>
<code class="language-markup">
&lt;li id="menu"&gt;&lt;a href="#"&gt;Menu&lt;/a>&gt;&lt;/li&gt;
</code>
</pre>




<pre>
<code class="language-css">
li {
    list-style-type: none;
}
#menu{
    position: relative;
}
#menu a{
    padding-left: 20px;
}
#menu a:before {
    content: "";
    position: absolute;
    top: 30%;
    left:0px;
    width:12px;
    height:2px;
    border-top: 6px double #000;
    border-bottom: 2px solid #000;
}
</code>
</pre>


The above will render the icon to the left of the Menu link. (As someone pointed out on Twitter yesterday, Stu Robson did [something very similar](http://alwaystwisted.com/post.php?s=2012-05-14-create-a-responsive-mobile-first-menu).) This is great, but we still have the problem of scalability. If the font-size is 16px, you&#8217;re sitting pretty. If it&#8217;s any larger or smaller, the icon will become disproportionate. Converting to ems makes for a more flexible solution.

<pre>
<code class="language-css">
li{
    list-style-type: none;
}
#menu{
    position: relative;
}
#menu a{
    padding-left: 1.25em; /* 20px/16px */
}
#menu a:before {
    content: "";
    position: absolute;
    top: 30%;
    left:0px;
    width:.75em; /* 12px/16px */
    height:.125em; /* 2px/16px */
    border-top: .375em double #000; /* 6px/16px */
    border-bottom: .125em solid #000; /* 2px / 16px */
}​​​​​​​​​​​​​​​​​​​​​​​​​​​
</code>
</pre>


If you want to be extra safe, you can wrap those styles inside of a media query as [Roger Johanson has suggested](http://www.456bereastreet.com/archive/201206/using_media_queries_to_hide_css3_from_older_browsers/). This should ensure that the styles are only applied to devices that can support generated content.

Is it a hack? Oh, absolutely. And several people were quick to point that out on Twitter. The result though, is the same: the trigram icon rendered without the use of images. The only difference? It's supported much better.

If you see anyway to improve on it, feel free to [fork the Gist](https://gist.github.com/3091105).