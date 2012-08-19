---
comments: false
date: 2008-04-28 19:00:00
layout: post
slug: an-objective-look-at-javascript-2-0-strong-typing
title: 'An Objective Look at Javascript 2.0: Strong Typing'
wordpress_id: 64
categories:
- Javascript
tags:
- javascript
---

In our first look at the new features of Javascript 2.0, we will focus on the new typing system. We are just going to highlight some of the major changes and potential uses. For a more detailed look, take a look at the [ECMAScript 4.0 Language Overview](http://www.ecmascript.org/es4/spec/overview.pdf).

Traditionally, Javascript is a loosely-typed language, meaning that variables are declared without a type. For example:

`
`

`



	
  1. var a = 42; // Number declaration

	
  2. var b = "forty-two"; // String declaration


`

Since Javascript is loosely typed, we can get away with simple 'var' declarations...the language will determine which data type should be used. In contrast, Javascript 2.0 will be strongly typed, meaning that type declarations will be enforced. The syntax for applying a given type will be a colon (:) followed by the type expression. Type annotation can be added to properties, function parameters, functions (and by doing so declaring the return value type), variables, or object or array initializers. For example:

`
`

`



	
  1. var a:int = 42; //variable a has a type of int

	
  2. var b:String = "forty-two"; //variable b has a type of String

	
  3. 
	
  4. function (a:int, b:string)//the function accepts two parameters, one of type int, one of type string

	
  5. 
	
  6. function(...):int //the function returns a value with a type of int


`

NOTE: There has been some confusion about enforcing type declarations so I thought I'd try to clear it up. Enforcing type declarations simply means that if you define a type, it will be enforced. You can choose to not define a type, in which case the variable or property defaults to a type of 'Object' which is the root of the type heirarchy.


## Type Coercion


Being a strongly typed system, Javascript 2.0 will be much less permissive with type coercion. Currently, the following checks both return true:

`
`

`



	
  1. "42" == 42

	
  2. 42 == "42"


`

In both cases, the language performs type coercion...Javascript automatically makes them the same type before performing the check. In Javascript 2.0, both of those statements will resolve to a 'false' value instead. We can still perform comparisons like those above; we just need to explicitly convert the data type using type casting. To perform the checks above and have them both resolve to 'true', you would have to do the following:

`
`

`



	
  1. int("42") == 42

	
  2. string(42) == "42"


`

While adding a strongly typed system does make the language a bit more rigid, there are some benefits to this change, particularly for applications or libraries that may be worked with elsewhere. For example, for a given method, we can specify what kinds of objects it can be a method for using the special 'this' annotation. I'm sure there are many of you who just re-read that sentence and are scratching your heads trying to figure out what the heck that meant. An example may help:

`
`

`



	
  * function testing(this:myObject, a:int, b:string):boolean


`

The method above accepts two arguments, an int and a string. The first part of the parameters (this:myObject) uses the this: annotation to state that the function can only be a method of objects that have the type of 'myObject'. This way if someone else is using code we have created, we can restrict which objects they can use that method on, preventing it's misuse and potential confusion.


## Union Types


We can also use union types to add a bit of flexibility. Union types are collections of types that can be applied to a given property. There are four predefined union types in Javascript 2.0:

`
`

`



	
  1. type AnyString = (string, String)

	
  2. type AnyBoolean = (boolean, Boolean)

	
  3. type AnyNumber = (byte, int, uint, decimal, double, Number)

	
  4. type FloatNumber = (double, decimal)


`

In addition, we can set up our own union types based on what we need for a particular property:

`
`

`



	
  * type MySpecialProperty = (byte, int, boolean, string)


`

One final thing I would like to mention is that in contrast to Java and C++, Javascript 2.0 is a dynamically typed system, not statically typed. In a statically typed system, the compiler verifies that type errors cannot occur at run-time. Statically typing would catch a lot of potential programming errors, but it also severely alters the way Javascript can be used, and would make the language that much more rigid. Because JS 2.0 is dynamically typed, only the run-time value of a variable matters.
