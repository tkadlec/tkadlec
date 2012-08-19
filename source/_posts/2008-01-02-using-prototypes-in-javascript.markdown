---
comments: false
date: 2008-01-02 19:00:00
layout: post
slug: using-prototypes-in-javascript
title: Using Prototypes in Javascript
wordpress_id: 87
categories:
- Javascript
---

As mentioned in my [previous post](http://www.timkadlec.com/post.asp?q=35), I think using prototypes is powerful enough to deserve a more detailed explanation. To start off, let me say we are talking about the prototype method here, not the JavaScript library.

Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it. Let's use the Pet object that we created in the previous post. In case you don't remember it or didn't read the article (please do) here is the object again:
`
`

`



	
  1. function Pet(name, species){

	
  2. this.name = name;

	
  3. this.species = species;

	
  4. }

	
  5. function view(){

	
  6. return this.name + " is a " + this.species + "!";

	
  7. }

	
  8. Pet.prototype.view = view;

	
  9. var pet1 = new Pet('Gabriella', 'Dog');

	
  10. alert(pet1.view()); //Outputs "Gabriella is a Dog!"


`
As you can see, by using simply using prototype when we attached the view method, we have ensured that all Pet objects have access to the view method. You can use the prototype method to create much more robust effects. For example, let's say we want to have a Dog object. The Dog object should inherit each of the methods and properties utilized in the Pet object and we also want a special function that only our Dog objects have access to. Prototype makes this possible.
`
`

`



	
  1. function Pet(name, species){

	
  2. this.name = name;

	
  3. this.species = species;

	
  4. }

	
  5. function view(){

	
  6. return this.name + " is a " + this.species + "!";

	
  7. }

	
  8. Pet.prototype.view = view;

	
  9. function Dog(name){

	
  10. Pet.call(this, name, "dog");

	
  11. }

	
  12. Dog.prototype = new Pet();

	
  13. Dog.prototype.bark = function(){

	
  14. alert("Woof!");

	
  15. }


`
We set up the Dog object, and have it call the Pet function using the call() method. The call method allows us to call a specific target function within an object by passing in the object we want to run the function on (referenced by 'this' on line 10) followed by the arguments. Theoretically, we don't need to do this. We could just create a 'name' and 'species' property inside of the Dog object instead of calling the Pet function. Our Dog object would still inherit from the Pet object because of line 12. However that would be a little redundant. Why recreate these properties when we already have access to identical properties inside of the Pet object?

Moving on, we then give Dog a custom method called bark that only Dog objects have access to. Keeping this in mind consider the following:
`
`

`



	
  1. var pet1 = new Pet('Trudy', 'Bird');

	
  2. var pet2 = new Dog('Gabriella');

	
  3. alert(pet2.view()); // Outputs "Gabriella is a Dog!"

	
  4. pet2.bark(); // Outputs "Woof!"

	
  5. pet1.bark(); // Error


`
As you can see, the Dog object has inherited the view method from the Pet object, and it has a custom bark method that only Dog objects have access to. Since pet1 is just a Pet, not a Dog, it doesn't have a bark method and when we try to call it we get an error.

It is important to understand that prototype follows a chain. When we called pet2.view(), it first checked the Dog object (since that is the type of object pet2 is) to see if the Dog object has a view method. In this case it doesn't, so it moves up a step. Dog inherits from Pet, so it next checks to see if the Pet object has a view method. It does, so that is what runs. The bottom most layer of inheritance is actually from the Object.prototype itself. Every object inherits from that. So, in theory we could do this:
`
`

`



	
  1. Object.prototype.whoAmI = function(){

	
  2. alert("I am an object!");

	
  3. }

	
  4. pet1.whoAmI(); //Outputs 'I am an object!'

	
  5. pet2.whoAmI(); //Outputs 'I am an object!'


`
Since all objects inherit from the Object.prototype, pet1 and pet2 both can run the whoAmI method. In short, prototype is an immensely powerful tool you can use in your coding. Once you understand how prototype inherits, and the chain of objects it inherits from, you can start to create some really advanced and powerful object combinations. Use the code examples used in this post to play around with and see the different ways you can use prototype to create more robust objects. With something like this, hands-on is definitely the best approach (at least I think so!).
