---
comments: false
date: 2008-03-20 19:00:00
layout: post
slug: getting-started-with-aria
title: Getting Started With ARIA
wordpress_id: 72
categories:
- Accessibility
tags:
- accessibility
- ARIA
---

Finding purely static websites today is becoming harder and harder. The line between website and web application blurs more and more as clients want more interactivity and real-time interaction on their site. This rich experience raises accessibility concerns though.

To create a lot of these dynamic interfaces, we often have to use (X)HTML elements outside of their semantic meaning. For example, navigation is marked up using list-items. That is all fine and well for a sighted visitor...we can see that the list is meant to be navigation. However, to a non-sighted user who is relying on a screen reader to determine the usage of elements on a site, it is difficult at best to determine that the list is used as a navigation structure.

That is where Accessible Rich Internet Applications (ARIA) come into play. ARIA offers attributes that we can use to add semantic meaning to elements. One of those is the role attribute.


## Add Some Information


Roles provide information on what an object in the page is and help to make markup semantic, usable,  and accessible. Using our previous example of a list used for navigation, by providing the role attribute, we can help the user agent to understand that the list is being used for navigation.

`
`

`



	
  * <ul role="navigation">...</ul>


`

Likewise, we can tell the user agent if a paragraph is being used as a button:

`
`

`



	
  * <p role="button">...</p>


`

There are many different WAI roles to utilize. Nine of them where imported from the XHTML Role Attribute Module:



	
  1. `banner` - typically an advertisement at the top of a page

	
  2. `contentinfo` - information about the content in a page, for example, footnotes or copyright information

	
  3. `definition` - the definition of a term

	
  4. `main` - the main content of a page

	
  5. `navigation` - a set of links suitable for using to navigate a site

	
  6. `note` - adds support to main content

	
  7. `search` - search section of a site, typically a form.

	
  8. `secondary` - a unique section of site

	
  9. `seealso` - contains content relevant to main content


The ARIA 1.0 specification also includes support for many more roles set down in the ARIA Role taxonomy. These include roles like `button`, `checkbox`, `textbox` and `tree`. There are many available there, so I am not going to try and show them all here For that you can take a look at the [ARIA working draft](http://www.w3.org/TR/wai-aria/).


## Now For Some Meaning


In addition to the information provided by the role attribute, we can further add meaning about the state and relationship of elements with states and properties. Unlike roles, which are static, states and properties may change. For example, one state that is available is `checked`, which as you may guess is used with an element that has a role of `checkbox`. When a `checkbox` is unchecked the `checked` state is false. When the `checkbox` is checked, the `checked` state should change to true.

Using states and properties is rather easy to do:

`
`

`



	
  1. <input type="text" name="email" aria-required="true"/>

	
  2. <li aria-checked="true" tabindex="0" role="checkbox>>My Item</li>


`

As you can see, you just append the name of the state or property with an 'aria-a' prefix.


## Add Some Style


In browsers that support attribute selectors in CSS, we can even use our new roles, states and properties to provide different visual effects to reflect an elements meaning. For example, we can target all items on a page that have an `aria-required` state with this:

`
`

`



	
  * *[aria-required="true"] { background: yellow;}


`

In addition, some states have pseudo-classes that can be used to reflect the changes in state. Consider a list-item that is tagged with an aria-checked state. Using the `:before` pseudo-class, we can provide a different image with each state change. (Note: this example is used in the [W3C Working Draft](http://www.w3.org/TR/wai-aria/))

`
`

`



	
  1. *[aria-checked=true]:before {content:   url('checked.gif')}

	
  2. *[aria-checked=false]:before {content:  url('unchecked.gif')}


`

There is a lot of value in using ARIA. It helps to give meaning to the usage of an element on a page, greatly increasing the accessibility of a site. It's very easy to use, and doesn't break in browsers that don't support it. If you want to learn more about ARIA and how to start implementing it, I highly recommend checking out the [W3C's overview](http://www.w3.org/WAI/intro/aria) on the topic.
