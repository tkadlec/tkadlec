---
comments: false
date: 2008-01-02 19:00:00
layout: post
slug: using-prototypes-in-javascript
title: Using Prototypes in Javascript
wordpress_id: 87
categories:
- Javascript
tags: javascript
---

As mentioned in my [previous post](http://www.timkadlec.com/post.asp?q=35), I think using prototypes is powerful enough to deserve a more detailed explanation. To start off, let me say we are talking about the prototype method here, not the JavaScript library.

Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it. Let's use the Pet object that we created in the previous post. In case you don't remember it or didn't read the article (please do) here is the object again:

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
alert(pet1.view()); //Outputs "Gabriella is a Dog!"
</code>
</pre>

As you can see, by using simply using prototype when we attached the view method, we have ensured that all Pet objects have access to the view method. You can use the prototype method to create much more robust effects. For example, let's say we want to have a Dog object. The Dog object should inherit each of the methods and properties utilized in the Pet object and we also want a special function that only our Dog objects have access to. Prototype makes this possible.

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
function Dog(name){
	Pet.call(this, name, "dog");
}
Dog.prototype = new Pet();
Dog.prototype.bark = function(){
	alert("Woof!");
}
</code>
</pre>

We set up the Dog object, and have it call the Pet function using the call() method. The call method allows us to call a specific target function within an object by passing in the object we want to run the function on (referenced by 'this' on line 10) followed by the arguments. Theoretically, we don't need to do this. We could just create a 'name' and 'species' property inside of the Dog object instead of calling the Pet function. Our Dog object would still inherit from the Pet object because of line 12. However that would be a little redundant. Why recreate these properties when we already have access to identical properties inside of the Pet object?

Moving on, we then give Dog a custom method called bark that only Dog objects have access to. Keeping this in mind consider the following:

<pre>
<code class="language-javascript">	
var pet1 = new Pet('Trudy', 'Bird');
var pet2 = new Dog('Gabriella');
alert(pet2.view()); // Outputs "Gabriella is a Dog!"
pet2.bark(); // Outputs "Woof!"
pet1.bark(); // Error
</code>
</pre>

As you can see, the Dog object has inherited the view method from the Pet object, and it has a custom bark method that only Dog objects have access to. Since pet1 is just a Pet, not a Dog, it doesn't have a bark method and when we try to call it we get an error.

It is important to understand that prototype follows a chain. When we called pet2.view(), it first checked the Dog object (since that is the type of object pet2 is) to see if the Dog object has a view method. In this case it doesn't, so it moves up a step. Dog inherits from Pet, so it next checks to see if the Pet object has a view method. It does, so that is what runs. The bottom most layer of inheritance is actually from the Object.prototype itself. Every object inherits from that. So, in theory we could do this:

<pre>
<code class="language-javascript">
Object.prototype.whoAmI = function(){
	alert("I am an object!");
}
pet1.whoAmI(); //Outputs 'I am an object!'
pet2.whoAmI(); //Outputs 'I am an object!'
</code>
</pre>

Since all objects inherit from the Object.prototype, pet1 and pet2 both can run the whoAmI method. In short, prototype is an immensely powerful tool you can use in your coding. Once you understand how prototype inherits, and the chain of objects it inherits from, you can start to create some really advanced and powerful object combinations. Use the code examples used in this post to play around with and see the different ways you can use prototype to create more robust objects. With something like this, hands-on is definitely the best approach (at least I think so!).