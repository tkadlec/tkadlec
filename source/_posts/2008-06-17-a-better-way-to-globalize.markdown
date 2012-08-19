---
comments: false
date: 2008-06-17 19:00:00
layout: post
slug: a-better-way-to-globalize
title: A Better Way To Globalize
wordpress_id: 58
categories:
- PHP
tags:
- php
---

Lately I've been working quite a bit with some PHP code that made heavy use of global variables. It made the code quite rigid to work with...when changes were made in one function it had a ripple effect on many other key functions and more than once, made me curse global scope.

But sometimes it's necessary to share information between different functions, so what's a programmer to do? Global variables certainly make that possible, but they also create some problems. Heavy reliance on global variables makes it difficult to reuse code. Rarely can we uproot functions with a large dependency on global variables and insert them into different contexts or scripts without problem.

Debugging code also becomes difficult. When a variable is global in scope, it could be being instantiated virtually anywhere making it tough to track down. What's even worse is coming back to that code after a year, or as it was in my case, trying for the first time to decipher code that relies on global variables.

Luckily there's a much better way: the registry pattern. The registry pattern simply creates a class that servers as a central repository, or registry, of objects that we can now utilize throughout our code. It accomplishes this by utilizing static methods and properties, which means you'll want PHP5 to accomplish it....you can use it in PHP4 but it requires some workarounds. This pattern is particularly useful when used to store a data connection.


## Breaking It Down


The best way to explain this is to walk through the code.



	
  1. class Registry{

	
  2. private static $instance;

	
  3. static function instance(){

	
  4. if ( ! isset( self::$instance ) ){

	
  5. self::$instance = new self();

	
  6. }

	
  7. return self::$instance;

	
  8. }

	
  9. }


The code above first simply creates our registry class, aptly called Registry (line 1). We then create a static function (line 3) and variable (line 2). This is how we will keep track of whether or not an instance of this class exists. If it doesn't, then we create a new instance of the class.

Now we just need to create set and get functions for anything we want to use globally. In this case, we'll create set and get functions for a very simple object that we'll call a TestObject and a variable to contain that object.

	
  1. class Registry{

	
  2. //.....

	
  3. private $testObject;

	
  4. function getTestObject(){

	
  5. return $this->testObject;

	
  6. }

	
  7. function setTestObject( TestObject $test){

	
  8. $this->testObject = $test;

	
  9. }

	
  10. }


Our two new methods do exactly what they sound like...the get and set methods simply retrieve or save our testObject to the $testObject variable. That's all there is to it...now we can use our registry class to make a TestObject instance that we can use globally (for this post, just accept that TestObject allows us to set and display a message...[all the code is available](registry.zip) for those who want a closer look). Since we are using a static property and method to ensure that all instances of that class have access to the same values, it doesn't matter where we initially instantiate the class.



	
  1. function setting(){

	
  2. $myTest = new TestObject();

	
  3. $myTest->setMessage ( "Registry Patterns Rock!" );

	
  4. $reg = Registry::instance();

	
  5. $reg->setTestObject( $myTest );

	
  6. }

	
  7. function retrieve(){

	
  8. $reg = Registry::instance();

	
  9. $myObject = $reg->getTestObject();

	
  10. echo ( $myObject->getMessage() );

	
  11. }

	
  12. setting();

	
  13. retrieve(); //outputs Registry Patterns Rock!


Now despite the fact that we create the two instances of the registry class within two separate functions, you can see that they both have access to the same values thanks to the Registry pattern, without all the mess that can be caused by global variables. To add more values to our registry class, we simply add more private variables and some set and get functions.


## But Wait...There's More!


Another handy way of utilizing the registry pattern, is to use our Registry instance to create and then cache an object, skipping the need for a set or get function. For example, if I have a data connection that I know I want to be standard throughout the project I can create a function like this inside of my Registry class:



	
  1. class Registry{

	
  2. //.....

	
  3. function dataConn(){

	
  4. if ( ! isset ( $this->dataConn ) ) {

	
  5. $this->dataConn = new dataConn();

	
  6. $this->dataConn->setHost( 'localhost' );

	
  7. }

	
  8. return $this->dataConn;

	
  9. }

	
  10. }


Now, instead of worrying about the set and get functions, I can just call the dataConn() function. If the data connection has already been created, then it returns the connection. If not, it first creates my connection, and then returns it. So I can safely call the function without concerning myself with whether or not I've already created the connection...it takes care of that for me.

The registry pattern is so incredibly useful and a definite improvement over using the dreaded global variable in your code. I highly encourage you to play around with the [sample code](registry.zip) and see the different ways that the registry pattern can manage your code.
