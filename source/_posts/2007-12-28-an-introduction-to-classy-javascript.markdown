---
comments: false
date: 2007-12-28 19:00:00
layout: post
slug: an-introduction-to-classy-javascript
title: An Introduction to Classy Javascript
wordpress_id: 88
categories:
- Javascript
tags:
- javascript
---

Let me first tell you the why and then I will explain the what. By using classes in Javascript, you will notice a couple immediate benefits:

	
  1. Custom classes make your code more reusable. If many of your applications use a similar functionality, you can define a class to help and facilitate that functionality. Now you can just use your new class in multiple projects to provide the common functionality. For example, let's say you create a custom accordion effect. If you use classes to define the effect you can use the same code to provide the same effect on another page simply by utilizing the class you created.

	
  2. Using classes helps to organize your code. If you are using classes, you will see that instead of just one really long piece of code, your code will become broken into smaller pieces of related methods and properties. This will make your coding easier to maintain and troubleshoot.


So what is this terrific sounding little tool and how do we use them? A class is used to define a common type of object that will be used in a given application. For example, let's say that we are creating an application to keep track of animals in a pet store. Each animal will have a name, and a species. We could do the following:

<pre>
<code class="language-javascript">
var pet1 = new Object();
pet1.name = 'Gabriella';
pet1.species = 'Dog';

var pet2 = new Object();
pet2.name = 'Trudy';
pet2.species = 'Bird';

// and so on
</code>
</pre>

As you can hopefully see, that is just going to get long and annoying very quickly. If I have twenty different pets then it takes 60 lines of code just to create the objects. There is also no good organization to this. We have no indication that pet1 and pet2 are actually the same type of object. A much better way is to declare a class.

<pre>
<code class="language-javascript">	
function Pet(name, species){
	this.name = name;
	this.species = species;
}
var pet1 = new Pet('Gabriella', 'Dog');
var pet2 = new Pet('Trudy', 'Bird');
</code>
</pre>

We have just created a custom Pet class. Each Pet object has two properties: a name and a species. Now we can tell at first glance that pet1 and pet2 are the same type of object, and our code instantly becomes more readable. It also takes only one line to declare an object, shortening the long code we would have had if we had created the objects each individually without a common class.

## What About Methods?

We have seen how to set properties in classes, but we can also use these classes to define common methods to objects. We could do this by simply adding another line inside of our class declaration.

<pre>
<code class="language-javascript">	
function Pet(name, species){
	this.name = name;
	this.species = species;
	this.view = view;
}
function view(){
	return this.name + " is a " + this.species + "!";
}
var pet1 = new Pet('Gabriella', 'Dog');
alert(pet1.view());
</code>
</pre>

We just added a view method to any object that is a Pet. The call above would return "Gabriella is a Dog!". There is one problem here though. If we have 20 pets, each pet is carrying a view function. That may not seem like much, but as this pet store grows, and we have more and more pet objects, each with the view function, we are going to start running into memory problems.

What we should be doing here instead, is use the prototype keyword. The prototype keyword allows us to have objects inherit the method from the class they are members of. The prototype keyword is a very powerful tool, and I will go into more detail on it in a later post, but for now some basic understanding should suffice. For example, take a look at the code below:

<pre>
<code class="language-javascript">
function Pet(name, species){
	this.name = name;
	this.species = species;
}
function view(){
	return this.name + " is a " + this.species + "!";
}
Pet.prototype.view = view;
var pet1 = new Pet('Gabriella', 'Dog');
alert(pet1.view());
</code>
</pre>

We have now dropped the view from the initial construction of our class, saving us some memory space. Now using the prototype keyword, we have set a view method to the Pet object. Since pet1 is a member of Pet, it has access to the function. Essentially, we have created the same effect as before, only now, the view function is only stored once, instead of once for each pet object declared.

As you can see, classes are a very valuable coding tool. They help to provide organization, and help to make our code more reusable. When used in conjunction with the prototype keyword, they can be extremely powerful and provide a lot of flexibility. This article really just touched the tip of the iceberg. There is so much you can do with this combination, and I highly recommend taking a deeper look. Once you start to use prototypes and classes in your applications, you will find them indispensable and wonder how you got along without them.