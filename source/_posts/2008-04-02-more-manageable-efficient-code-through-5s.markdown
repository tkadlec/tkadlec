---
comments: false
date: 2008-04-02 19:00:00
layout: post
slug: more-manageable-efficient-code-through-5s
title: More Manageable, Efficient Code Through 5S
wordpress_id: 70
categories:
- Coding
tags:
- coding
---

Sometimes code turns ugly. We add quick fixes or enhancements and our code starts to become a big tangle of functions that aren't laid out in any sort of organized fashion. Over time, our code becomes bloated, difficult to maintain and what should be simple little fixes can quickly turn into long walks through messy syntax. One way of combating this is by implementing the 5S System.

The 5S System is actually a Japanese improvement process originally developed for the manufacturing industry. Each of the five words when translated to English began with 'S' hence we call it the 5S System. Like many good philosophies however, the 5S System can apply to a variety of topics. For example, the 5S System has been applied by the Hewlett-Packard Support Center in a business context and has resulted in improvements like reduced training time for employees and reduced call-times for customers. By using the system applied to coding, we can make our code more efficient and much easier to maintain.


## Seiri (Sort)


The first 'S' is Seiri which roughly translates to 'Sort'. Applied to the manufacturing industry, the goal of sorting was to eliminate unnecessary clutter in the workspace. The idea here is that in a workspace, you need to sort out what is needed and what is not. If you eliminate all of the items that are not necessary, you immediately have a workspace that is cleaner and thereby more efficient

Applied to coding, this can mean going through our code and determining if we have any lines of code that are really just taking up space. This can be things like error checking that has already been done at a previous step, or if working in the DOM, retrieving the same element in more than one function, instead of simply passing a reference to the element. This definitely applies to CSS code as well. There are very few stylesheets in use that don't have a line or two that are really just unnecessary because they either accomplish nothing different than the user agent's default behavior, or are being overridden elsewhere.


## Seition (Straighten)


The next 'S' means to straighten or 'sort in order.' This step involves arranging resources in the most efficient way possible so that those resources are easy to access.

For coders, this means going through and making sure that functions and code snippets that are related are grouped together in some way. This can be done by a variety of ways. If you are working with server-side scripting, consider placing related code together in an include. In CSS, use either comments or imported stylesheets to separate style declarations based on either the section of page they refer to or the design function that they carry out. (Typographic styles in one place, layout styles in another). In object-oriented programming, organize your code into logical classes and subclasses to show relationships.


## Seiso (Shine)


The third step laid down in the 5S system is the Shine phase. This involves getting and keeping the workplace clean. This is an on-going phase that should be done frequently to polish up anything that is starting to lose its luster.

As we go back and work on code, we can often start to get lazy and just throw things wherever and use messy coding techniques because it's quick and dirty. The long term result of that though is unorganized code that is difficult to maintain. The phase requires a bit of discipline, we have to be willing to keep an eye out for portions of our code that are becoming a bit unwieldy and take the time to clean it up so 6 months down the road we aren't pulling out hair trying to remember what the heck we were thinking there.


## Seiketsu (Standardize)


The Standardize phase involves setting down standards to ensure consistency. We can apply this to our coding and make it much easier both for us in the future, and for new employees who may have to try and work with some of the code we have developed.

Standardization in code can come in a variety of forms. We've seen some standardization in coding for-loops for example. In a for-loop it is very typical for people to use the variable i as the counter variable throughout the loop. Coders of various levels of expertise recognize the variable i in those situations very quickly and easily, because it is used so frequently.

You can also standardize the way you format your code. Some people prefer to indent code inside of loops or functions for readability, others don't. Whatever the case may be, be consistent with it. Having a consistent coding style makes it a lot easier to come back to that code later and be able to quickly locate where that new feature needs to be dropped in.


## Shitsuke (Sustain)


Finally, our last step is to sustain the work we set down in each of the previous phases. This is perhaps the most difficult phase of all because it is never ending. There is a definite level of commitment to the process that has to be displayed here in order for us to continue using and utilizing this process when we code. We can't be satisfied with doing this once or twice and then letting it go. If we work to continually implement this process, we help ourselves to create more manageable and efficient code from the start of the development process to the conclusion.
