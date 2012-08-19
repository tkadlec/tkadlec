---
comments: false
date: 2008-12-02 19:00:00
layout: post
slug: manageable-css-with-cssdoc
title: Manageable CSS with CSSDOC
wordpress_id: 46
categories:
- CSS
tags:
- css
---

I've been very interested in finding better ways to create CSS stylesheets that are easy to navigate, understand and maintain. After leaving a stylesheet alone for awhile, if you didn't take the time to organize the stylesheet originally, it's really easy to forget why certain rules are being used, or where you defined styles for an area. One way of managing your stylesheets that's got my attention is [CSSDOC.](http://www.cssdoc.net)

CSSDOC was an idea apparently conceived sometime in 2007, and the Second Public Draft of the spec was just released on November 16th. The intent behind CSSDOC is to provide a standardized way of commenting CSS making use of the very well known DocBlock way of commenting source-code.

DocBlock is a very common form of documenting source code in programming that has proven to be very popular for both [PHP](http://www.phpdoc.org/) and [Javascript](http://jsdoc.sourceforge.net/). The beauty of the method is that it's so simple to use DocBlock to organize your code and since it's a standardized format, other developers will be familiar with it and tools can be developed to parse it and auto-generate documentation.

There are a great deal of tags being developed for CSSDOC that can provide a lot of great information. For example, here is a sample header from the CSSDOC draft:



	
  1. /**

	
  2. * Homepage Style

	
  3. *

	
  4. * Standard Layout (all parts) for Big Little Homepage

	
  5. *

	
  6. * This style has been designed by Mina Margin. It reflects

	
  7. * the composition of colors through the years of the

	
  8. * customers project as well as the boldness it implies.

	
  9. *

	
  10. * @project   Big Little Homepage

	
  11. * @version   0.2.8

	
  12. * @package   xhtml-css

	
  13. * @author    Mina Margin

	
  14. * @copyright 2008 by the author

	
  15. * @cssdoc    version 1.0-pre

	
  16. * @license   GPL v3

	
  17. *

	
  18. * @colordef  #fff; white

	
  19. * @colordef  #808080; standard grey

	
  20. */


Just by this simple header, we've already provided a great deal of information to both future developers and to a documentation parser. In our header we've provided the project we're working on, a version number for the project, copyright and author information, and some definitions of recurring colors used in the project.

You then make use of the @section and @subsection comments to divide your CSS file into manageable sections of related styles. I'd love to see this implemented in editors like [CSSEdit's](http://macrabbit.com/cssedit/) @group comment. For those of you unfamiliar, the @group comment in CSSEdit is parsed out and made into easy to navigate folders in the sidebar (see the image below).

![CSS Edit - Screenshot](/rantpics/cssedit_screen.jpg)

I won't go through all the available comments (the draft can give you that and does a great job of explaining), but suffice it to say there's a lot of extremely useful comments available: @affected comment which describes what browsers are affected by a certain bug/workaround; @tested comments to specify what browsers a certain section has been tested on; @fontdef for font definitions, similar to the @colordef rule in the example above; etc.

I'm very excited by this project and think the team behind the spec has done a fantastic job thus far. The few concerns I had, they've either addressed, or are in the process of doing so. It's very easy to get involved with the project as they have been very transparent in the development of the specification.

In addition, if you want to start playing around with CSSDOC a bit on your own CSS, there are bundles made already for editors like Textmate, EditPlus, and KomodoEdit just to name a few. You can keep up to date on new bundles and snippets at [http://cssdoc.net/wiki/EditorIntegration](http://cssdoc.net/wiki/EditorIntegration).
