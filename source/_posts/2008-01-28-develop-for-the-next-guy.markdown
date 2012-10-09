---
comments: false
date: 2008-01-28 19:00:00
layout: post
slug: develop-for-the-next-guy
title: Develop for the Next Guy
wordpress_id: 81
categories:
- Coding
tag: javascript coding
---

All developers at one point or another will have to work with code that they didn't develop. Whether we are replacing the person who created the application, or simply trying to work on a project developed by someone else in house, this is always a bit of an interesting experience. It becomes necessary to familiarize ourselves with the existing coding techniques used on the project so that we can quickly edit and maintain it for our purposes.

Unfortunately, this is often a total mess of a job. The code we have to work with is often quite long, poorly documented, looks like ancient Greek, and leaves us angrily spewing silent (perhaps in some cases not so silent) insults at whoever the poor person was who created this mess. Not only does this leave us frustrated, but it also can frustrate our employers, as projects that should've been easily taken care of now require much more time and effort.

Here then, are a few practices you can start using now to ensure that the next guy working on your application isn't hoping for your demise.


## Start Commenting


This is one practice that should be ingrained in your head from your early on in your development career. In addition to making the code easier for you to navigate in a month or two, effective commenting can also make it much easier for a new developer working with your code to understand what is going on. Any section of code that may require more explanation (functions in particular), should have a comment explaining what is going on there.

It can also be useful in some cases to explain why a particular solution was used instead of another one. If when developing, you found that one solution resulted in better performance than another, comment about it. A person just trying to understand your code may not realize that there is a performance benefit to your code, and ditch it in favor of something he/she is more familiar with.


## Use Descriptive Names

Few things are more frustrating to someone trying to work with your code than coming across blocks like this:

<pre>
<code class="language-javascript">		
var j = 0;
var a = getData();
for (var i=0; i < a.length; i++) {
	var x = a[i].getName();
	if (x === 'John') {
		j++;
	}
}
</code>
</pre>

Granted, a simple for loop like above is not to difficult to follow, but what exactly are the variables, a, j, and x? This may seem to save you some typing initially, but coming back to this in a few months will drive you crazy. Variable names should make some sense.

<pre>
<code class="language-javascript">		
var counter = 0;
var employees = getData();
for (var i=0; i < employees.length; i++){
	var firstName = employes.getName();
	if (firstName === 'John'){
		counter++;
	}
}
</code>
</pre>

Just by using better variable names, we have made the code much easier to understand. Even to someone completely unfamiliar with your application, it is easy to tell that we are looping through a bunch of employees, and counting how many of them have a first name of 'John'. Not so easy to tell in our first example.

## Be Consistent


This goes for naming conventions as well as formatting. Come up with a set way of naming variables and stick to it. Don't have my_variable on one line, and then otherVariable on the next. If you are going to use underscores, stick to underscores. If you want to use camel casing, then use camel casing on each of your variables. It makes it much easier to tell at a glance what values are variables in your code.

When you are declaring functions, decide how you want to display them. Some people like to use the following format:

<pre>
<code class="language-javascript">	
function getName()
{
	...
}
</code>
</pre>

Others will use stick the opening bracket of a function on the same line as the initial declaration.

<pre>
<code class="language-javascript">		
function getName(){
	...
}
</code>
</pre>

It doesn't really matter which method you use, just so long as you continue using it throughout your code.

## Utilize Common Design Patterns

Design patterns are solutions to specific programming problems that have been documented and allows developers not to have to solve the problem again and again. They provide us with a way of quickly communicating the method used to resolve a problem. Common design patterns, like the factory pattern or the singleton pattern, have the added benefit of being used by programmers of various different languages. Now anyone who recognizes the pattern used can tell right away what is being done, it's just a matter of figuring out the exact syntax of the specific language being used.

Be careful with this one though. Don't just use a design pattern to be using design patterns. If you make sure your code can benefit from the use of a design pattern, then go ahead and implement one. Otherwise, you will just end up with over-engineered code that is more complicated than it may need to be.

## Make it Flexible


Make sure your methods are flexible and can be used in a variety of different ways. You never know the different uses that may be required of your application in the future. Make sure your methods are built in a way that the data returned is then able to be used in various solutions. For example, let's look at some very simple Javascript that involves getting an employee's name and outputting it to a div.

<pre>
<code class="language-javascript">	
function getName(employee){
	var myDiv = document.getElementById("divName");
	var employeeName = employee.name;
	myDiv.innerHTML = employeeName;
}
</code>
</pre>

This works perfectly fine for our solution. What happens though if in 3 months, we decide that we actually want to use the name in an alert instead? Now we have to go back, find our getName function and rework it. Instead, if we make the getName function more flexible, we can allow future developers to use it however they choose.

<pre>
<code class="language-javascript">	
function getName(employee){
	return employee[i].name;
}
</code>
</pre>

Separate the retrieval of information from the usage of it. It makes the code more flexible, and much easier to adjust in the future.

These are just five simple techniques you can use to ensure that your code is easier both to understand and to adapt for the next guy who comes along and has to modify it. It also has the added benefit of making your life a little easier when several months down the road, your boss tells you to change some of the functionality. It is now easy to both understand what the code is doing, and how to make it do what you want.
