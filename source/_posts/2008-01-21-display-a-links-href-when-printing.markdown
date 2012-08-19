---
comments: false
date: 2008-01-21 19:00:00
layout: post
slug: display-a-links-href-when-printing
title: Display a Link's Href When Printing
wordpress_id: 83
categories:
- Javascript
---

Using print stylesheets are a nice way to enhance a user's experience of a site. Our screen stylesheets don't necessarily turn out that nicely when printed out, so using a few different CSS rules on our print stylesheet we can increase readability and usability.

One of those nice features we can add is to display a link's href directly after the link on our print-outs. This will allow someone who has printed out the page to still be able to know where the links on the page are pointing to. We can do this with CSS by using the :after psuedo-class and some generated content.
`
`

`



	
  1. a[href]:after{

	
  2. content: " [" attr(href) "] ";

	
  3. }


`
There are really four important parts of the statement above:



	
  1. `a[href]`: Here, we use an attribute selector to select all links in our page with an href attribute.

	
  2. `:after`: The :after pseudo-class allows us to insert some content after the links and style it if necessary.

	
  3. `content`: This is what actually generates the content. We could just insert, for example, the letter "a" with a style call like content: "a".

	
  4. `attr(href)`: This gets the href attribute of the link currently being styled. This way, each link will display it's own href.


If we put this style in our print stylesheet, all of our links that actually have an href will print out like this: TimKadlec.com [http://www.timkadlec.com]

Obviously, this is a pretty handy enhancement to our print stylesheets. Now, the links printed out actually have some meaning to them. The problem is, Internet Explorer doesn't support the :after pseudo class, nor does it support the content style. So if a user is using Internet Explorer and tries to print our page out, they still won't see any href's displayed.


## Javascript to the Rescue


We can use a little bit of browser specific Javascript to fix this problem. Internet Explorer (version 5.0 and up) has a little known proprietary event called onbeforeprint. Just like it sounds, this event fires right before printing a page or viewing a print preview of the page. Since IE is the only major browser that doesn't create the effect using CSS, a proprietary event is the perfect fix. Now, we can draw up a simple function like so:
`
`

`



	
  1. window.onbeforeprint = function(){

	
  2. var links = document.getElementsByTagName("a");

	
  3. for (var i=0; i< links.length; i++){

	
  4. var theContent = links[i].getAttribute("href");

	
  5. if (!theContent == ""){

	
  6. links[i].newContent = " [" + theContent + "] ";

	
  7. links[i].innerHTML = links[i].innerHTML + links[i].newContent;

	
  8. }

	
  9. }

	
  10. }


`
Our function simply gets all the links on a page, and appends their respective href's immediately after them, creating the same effect that we were able to do using CSS in other browsers. You might be wondering why we set the new content we created to be a property of each link. That's because right after printing or canceling out of the print preview screen, we are now seeing the href on our actual web site. We obviously don't want this, and it's simple enough to get rid of with another IE proprietary function, onafterprint.
`
`

`



	
  1. window.onafterprint = function(){

	
  2. var links = document.getElementsByTagName("a");

	
  3. for (var i=0; i< links.length; i++){

	
  4. var theContent = links[i].innerHTML;

	
  5. if (!theContent == ""){

	
  6. var theBracket = theContent.indexOf(links[i].newContent);

	
  7. var newContent = theContent.substring(0, theBracket);

	
  8. links[i].innerHTML = newContent;

	
  9. }

	
  10. }

	
  11. }


`
Here we just again, loop through all the links, find the position of the new content we added, and remove it from the link. This returns the appearance of our site to the original view before trying to print.

Obviously, it would be ideal if we could simply use CSS to manage this. However, as we've seen, there is no need to wait for IE to support this feature before we implement it. Some proprietary Javascript events allow us to replicate the effect until it is supported later on.

The script/css effect has been tested in IE7, Opera, Firefox, and Safari. If you are interested, the complete Javascript to create the effect in IE is here: [printlinks.js](scripts/printlinks.js)
