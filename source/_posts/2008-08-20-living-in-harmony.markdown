---
comments: false
date: 2008-08-20 19:00:00
layout: post
slug: living-in-harmony
title: Living In Harmony
wordpress_id: 52
categories:
- Javascript
tags:
- javascript
---

The big news in the Javascript community for the last week has been the announcement of ECMAScript Harmony. A lot of news is really just overblown, but this is a big development, and one that any Javascript developer should be following.


## Some Background


There's been a lot of talk in the Javascript community over the past 9 years or so about the development of ECMAScript 4, what was to be the foundation for what was being called Javascript 2. It was a controversial and fairly dramatic change from ECMAScript 3 (Javascript). There was going to be support for classes, inheritance, type annotations, namespaces...the whole flavor of the language was going to dramatically change.

ECMAScript 4 was being developed primarily by Adobe, Mozilla, Opera and Google and was primarily based on the features those organizations wished to implement. Others, including Microsoft and Yahoo, found the proposed changes in ES4 to be to dramatic, and instead wanted to implement minor changes and bug fixes to ES3, labeling it ES3.1 instead.


## What Happened?


Obviously with division among such major organizations, something was going to have to give. So, at a recent TC39 meeting (the committee in charge of developing the ECMAScript standard) met and a resolution was met. The two sides would merge their ideas together with a new committed focus to ensuring simplicity in the new changes to the language...enter ECMAScript Harmony. In an email, Brendan Eich of Mozilla laid down the 4 primary goals of ECMAScript Harmony:



	
  1. Focus work on ES3.1 with full collaboration of all parties, and target two interoperable implementations by early next year.

	
  2. Collaborate on the next step beyond ES3.1, which will include syntactic extensions but which will be more modest than ES4 in both semantic and syntactic innovation.

	
  3. Some ES4 proposals have been deemed unsound for the Web, and are off the table for good: packages, namespaces and early binding. This conclusion is key to Harmony.

	
  4. Other goals and ideas from ES4 are being rephrased to keep consensus in the committee; these include a notion of classes based on existing ES3 concepts combined with proposed ES3.1 extensions.




## What Does It Mean?


Well, for one, it means that the series of posts I had started on Javascript 2.0 are now completely worthless...and no...I will not reimburse you for the time spent reading them.

But far more importantly, it means that progress should speed up immensely. (There are ES4 proposals from 1999.) The plan appears to be to implement certain de facto standards rather quickly. For example, getters and setters are already implemented in each of the major browsers except for IE, and they will be thrown into the ES Harmony specification. (Which, by the way, brings up the interesting situation where implementation precedes specification, something that occurs often on the web and something you'll probably see me talk more about in the future.)

Meanwhile, ActionScript 3.0 was already built to reflect the ECMAScript 4 proposed specifications...so it would appear they're kind of left a bit high and dry. It sounds as though they are definitely committed to keeping in line with specifications, and that they plan on implementing new features laid out in the newly developed specification. They are also going to continue to keep their current features, like classes and type annotations, available in their language...think of it as an extension to the ECMAScript standard.


## My Thoughts


All in all, I think the outcome is positive. ES4 had been taking forever to get going, and ES3.1 hadn't been sounding like it would do much besides fix bugs. Now, we'll have a new implementation soon and while it won't have the same dramatic changes ES4 had in mind, there will be some interesting new features being added.

While I would've enjoyed some of the new features, Javascript gets to maintain a lot of flexibility here. ES4 would've tightened that up a bit, and I still haven't really made up my mind on whether that would've been a good thing or not.

It's also quite encouraging to see so many major players working together. Microsoft, Yahoo, Google, Mozilla, Opera and Adobe all working together in harmony. (I apologize for the pun...it was just there, and I decided to go with it.) One can only imagine having these organizations working together will ensure a high quality specification, and also lead to faster implementation of the spec.


## Around the Web


This is certainly a huge development, and there has been no shortage of postings about it. There's a lot of high quality discussion going on by some major players in the world of Javascript and ActionScript, and I highly recommend checking them out.



	
  * [Bredan Eich's Original Email](https://mail.mozilla.org/pipermail/es-discuss/2008-August/003400.html)

	
  * [John Resig: ECMAScript Harmony](http://ejohn.org/blog/ecmascript-harmony/)

	
  * [Mike Chambers: ActionScript 3 and ECMAScript 4](http://www.mikechambers.com/blog/2008/08/14/actionscript-3-and-ecmascript-4/)

	
  * [Douglas Crockford: The Only Thing We Have To Fear Is Premature Standardization](http://yuiblog.com/blog/2008/08/14/premature-standardization/)

	
  * [Alex Russell: Thoughts on Harmony](http://alex.dojotoolkit.org/2008/08/thoughts-on-harmony/)


