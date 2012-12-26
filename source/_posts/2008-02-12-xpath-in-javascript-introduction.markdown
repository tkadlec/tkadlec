---
comments: false
date: 2008-02-12 19:00:00
layout: post
slug: xpath-in-javascript-introduction
title: 'XPath in Javascript: Introduction'
wordpress_id: 77
categories:
- Javascript
tags:
- javascript
- xpath
---

As reported by [John Resig](http://ejohn.org/blog/xpath-overnight/), Prototype, Dojo, and Mootools have all switched their CSS Selector engines to be using XPath expressions instead of traditional DOM methods. With the attention being placed on XPath expressions, now is a good time to get familiarized with them and what they can accomplish.

This is going to be a multi-post series, as there is just so much you can accomplish by using XPath expressions that if I tried putting it into one post, no one would have the time to sit and read the whole thing.


## What is XPath?


Any of you out there who are familiar with XSLT will no doubt be familiar with the XPath language. For the rest of you, XPATH is used to identify different parts of XML documents by indicating nodes by position, relative position, type, content, etc.

Similar to the DOM, XPath allows us to pick nodes and sets of nodes out of our XML tree. As far as the language is concerned, there are seven different node types XPath has access to (for most Javascript purposes the first four node types will most likely be sufficient):



	
  1. Root Node

	
  2. Element Nodes

	
  3. Text Nodes

	
  4. Attribute Nodes

	
  5. Comment Nodes

	
  6. Processing Instruction Nodes

	
  7. Namespace Nodes




## How Does XPath Traverse the Tree?


XPath can use location paths, attribute location steps, and compound location paths to very quickly and efficiently retrieve nodes from our document. You can use simple location paths to quickly retrieve nodes you want to work with. There are two basic simple location paths - the root location path (/) and child element location paths.

The forward slash (/) servers as the root location path...it selects the root node of the document. It is important to realize this is not going to retrieve the root element, but the entire document itself. The root location path is an absolute location path...no matter what the context node is, the root location path will always refer to the root node.

Child element location steps are simply using a single element name. For example, the XPath `p` refers to all `p` children of our context node.

One of the really handy things with XPath is we have quick access to all attributes as well by using the at sign '@' followed by the attribute name we want to retrieve. So we can quickly retrieve all title attributes by using `@title`.


## Using XPath in Javascript


That's all well and fine, but how do we use this in Javascript? Right now, Opera, Firefox and Safari 3 all support the XPath specification (at least to some extent) and allow us to use the document.evaluate() method. Unfortunately at this time, IE offers no support for XPath expressions. (Let's hope that changes in IE8)

The document.evaluate method looks like this:
`
`

`



	
  * var theResult = document.evaluate(expression, contextNode, namespaceResolver, resultType, result);


`
The `expression` argument is simply a string containing the XPath expression we want evaluated. The `contextNode` is the node we want the expression evaluated against. The `namespaceResolver` can safely be set to null in most HTML applications. The `resultType` is a constant telling what type of result to return. Again, for most purposes, we can just use the `XPathResult.ANY_TYPE` constant which will return whatever the most natural result would be. Finally, the `result` argument is where we could pass in an existing XPathResult to use to store the results in. If we don't have an XPathResult to pass in, we just set this value to `null` and a new XPathResult will be created.

Ok...all that talk and still no code. Let's remedy that shall we. Here's a very simple XPath expression that will return all elements in our document with a title attribute.
`
`

`



	
  * var titles = document.evaluate("//*[@title]", document, null, XPathResult.ANY_TYPE, null);


`
If you take a look at the XPath expression we passed in "//*[@title]", you will notice that we used the attribute location step followed by the attribute we want to find, 'title'. The two forward slashes preceding the at sign is how we tell the browser to select from all descendants of the root node (the document). The asterisk sign says to grab any nodes regardless of the type. Then we use the square brackets in combination with our attribute selector to limit our results only to nodes with a title attribute.

The evaluate method in this case returns an `UNORDERED_NODE_ITERATOR_TYPE`, which we can now move through by using the `iterateNext()` method like so:
`
`

`



	
  1. var theTitle = titles.iterateNext();

	
  2. while (theTitle){

	
  3. alert(theTitle.textContent);

	
  4. theTitle = titles.iterateNext();

	
  5. }


`
Since each item in the results is a node, we need to reference the text inside of it by using the `textContent` property (line 3). You can only iterate to a node once, so if you want to use your results later, you could save each node off into an array with something like below:
`
`

`



	
  1. var arrTitles = [];

	
  2. var theTitle = titles.iterateNext();

	
  3. while (theTitle){

	
  4. arrTitles.push(theTitle.textContent);

	
  5. theTitle = titles.iterateNext();

	
  6. }


`
Now `arrTitles` is filled with your results and you can use them however often you wish.

This is just the beginning...as we continue to look at XPath expressions and introduce predicates and XPath functions, you will start to see just how truly robust XPath expressions are. At this point, IE doesn't support using XPath expressions in Javascript, but with each of the other major browsers having some support, and major Javascript Libraries placing an emphasis on using them, it's only a matter of time before we can begin using these expressions to create more efficient code.
