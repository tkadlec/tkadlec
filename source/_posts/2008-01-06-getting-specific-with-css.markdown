---
comments: false
date: 2008-01-06 19:00:00
layout: post
slug: getting-specific-with-css
title: Getting Specific With CSS
wordpress_id: 86
categories:
- CSS
tags: css
---

One very fundamental and integral part of CSS is understanding specificity. Understanding this basic concept can help to make your CSS development, and more specifically (no pun intended) your troubleshooting go more smoothly.

Every rule in CSS has a specificity value that is calculated by the user agent (the web browser for most web development purposes), and assigned to the declaration. The user agent uses this value to determine which styles should be assigned to an element when there are more than one rule for that particular element.

This is a basic concept most of us have at least a general understanding of. For example, most developers can tell you that the second declaration below carries more weight than the first:

<pre>
<code class="language-css">	
h1{color: blue;}
h1#title{color: red;}
</code>
</pre>

If both styles are defined in the same stylesheet, any h1 with an id of 'title' will of course be red. But just how is this determined?


## Calculating Specificity

Specificity in CSS is determined by using four number parts. Each type of value in the style declaration receives some sort of specificity rate:

  * Each id attribute value is assigned a specificity of 0,1,0,0.

  * Each class, attribute, or pseudo-class value is assigned a specificity of 0,0,1,0.

  * Each element or pseudo-element is assigned a specificity of 0,0,0,1.

  * Universal selectors are assigned a specificity of 0,0,0,0 and therefore add nothing to the specificity value of a rule.

  * Combinator selectors have no specificity. You will see how this differs from having a zero specificity later.

So going back to our previous example, the first rule has one element value, so its specificity is 0,0,0,1. The second rule has one element value and an id attribute, so its specificity is 0,1,0,1. Looking at their respective specificity values, it becomes quite clear why the second rule carries more weight.

Just so we are clear on how specificity is calculated, here are some more examples, listed in order of increasing specificity:

<pre>
<code class="language-css">	
h1{color: blue;} //0,0,0,1
body h1{color: silver;} //0,0,0,2
h1.title{color: purple;} //0,0,1,1
h1#title{color: pink;} //0,1,0,1
#wrap h1 em{color: red;} //0,1,0,2
</code>
</pre>

You should also note that the numbers go from left to right in order of importance. So a specificity of 0,0,1,0 wins over a specificity of 0,0,0,13.

At this point, you may be wondering where the fourth value comes into play. Actually, prior to CSS 2.1, there was no fourth value. However, now the value furthest to the left is reserved for inline styles, which carry a specificity of 1,0,0,0. So, obviously, inline styles carry more weight than styles defined elsewhere.

## It's Important

This can be changed, however, by the !important declaration. Important declarations always win out over standard declarations. In fact, they are considered separately from your standard declarations. To use the !important declaration, you simply insert !important directly in front of the semicolon. For example:

<pre>
<code class="language-css">
h1.title{color:purple !important;}
</code>
</pre>

Now any h1 with a class of 'title' will be purple, regardless of what any inline styles may say.

## No Specificity

As promised, I said I would explain the difference between no specificity and zero specificity. To see the difference, you need a basic understanding of inheritance in CSS. CSS allows us to define styles on an element, and have that style be picked up by the element's descendants. For example:

<pre>
<code class="language-css">	
h1.title{color: purple;}
</code>
</pre>

<pre>
<code class="language-markup"> 
&lt;h1 class="title"&gt;This is &lt;em&gt;purple&lt;/em&gt;&lt;/h1&gt;
</code>
</pre>

The em element above is a descendant of the h1 element, so it inherits the purple font color. Inherited values have no specificity, not even a zero specificity. That means that a zero specificity would overrule an inherited property:

<pre>
<code class="language-css">
*{color: gray} //0,0,0,0
h1.title{color: purple;}
</code>
</pre>
	
<pre>
<code class="language-markup">
&lt;h1 class="title"&gt;This is &lt;em&gt;purple&lt;/em&gt;&lt;/h1&gt;
</code>
</pre>

The em element inherits the purple font color as it is a descendant of h1. But remember, inherited values have no specificity. So even though our universal declaration has a specificity of 0,0,0,0, it will still overrule the inherited property. The result is the text inside of the em element is gray, and the rest of the text is purple.

Hopefully this introduction to specificity will help make your development process go smoother. It is not a new concept, or a terribly difficult one to learn, but understanding it can be very helpful.