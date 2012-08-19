---
comments: false
date: 2008-08-11 19:00:00
layout: post
slug: new-way-to-store-custom-data
title: New Way to Store Custom Data
wordpress_id: 54
categories:
- Web Standards
tags:
- standards
---

There's a lot of interesting new features being suggested for HTML5 and XHTML2. Some of them are extremely useful, some of them seem to be more questionable additions. One feature being implemented in HTML5 that I do like is the addition of custom data attributes to HTML elements.


## Manage Your Data


A custom data attribute is simply any attribute starting with the string "data-". They can be used to store data that you want kept private to the page (not viewable by the user) in cases where there is no appropriate attribute available. Every element can have any number of custom data attributes.

For example, consider a form validation script. The script needs to know what form of validation is required for each field. Currently, many of these scripts will use the class attribute to signal that.



	
  * `
`


Making use of the new HTML5 custom data attributes, we might choose to store the information like this instead:

	
  * `
`


To gain access to the value of the data-validation attribute, there are two options. First, you can simply use the getAttribute() method. This method should be familiar to anyone who's worked with the DOM in Javascript and is supported by all major browsers. The second method is to make use of the new dataset DOM attribute. Currently, no major browsers support the dataset attribute, but to be fair, here's how you would use it:

	
  1. `var theInput = document.getElementById('myInput');`

	
  2. `var validationType = theInput.dataset.validation;`




## What I Think


Custom data attributes have been met with varied opinions...some think it's fantastic while others either don't get the value or simply don't like the idea. Personally...I think it's a good idea.

Currently there's two popular ways of providing hooks for scripts in HTMl where no appropriate attribute exists:



	
  1. Use an existing attribute even though it may not necessarily be semantically correct.

	
  2. Create a new attribute and have the page no longer valid.


Where you stand personally along those lines, of course, varies. Some people don't mind a page that doesn't fully validate and would rather not clog up their id's and classes. Others don't mind adding an extra class to an element as long as the page is valid.

With the new data-* attributes, you can have the best of both worlds; your page can validate and you don't have to add extra classes and id's to make your scripts work. It's also very easy to implement, and manages to keep all the data needed for scripting together in one dataset. What's not to like?

You can actually start making use of custom data attributes right now. The page won't validate for HTML4 of course, but once HTML5 rolls around you'll be set. Just remember that to access the dataset values in Javascript you will need to use the getAttribute() and setAttribute() methods as the dataset DOM attribute is not currently supported.
