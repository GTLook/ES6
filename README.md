# Learn to Code: ES6
Galvanize JavaScript ecmascript 6 class

Brought to you by Galvanize. Learn more about the way we teach code at [galvanize.com](http://galvanize.com).

Get to this repo by typing in URL: **www.github.com/GTLook/ES6**

## Overview
The goal of this brief course is to provide you with a fun introduction to the advantages of using EMCAScript 6.

#### Here's what we'll be doing:
* Overview of basic EMCAscript6 changes and JavaScript concepts
* Changing a simple function using ES6 javascript
* Playing around and break things


## Setting up your computer


#### Please set up the following:

* A web browser to see what we're working on as others see it (Recommend Google Chrome: [chrome.google.com](http://chrome.google.com) )
* We will be using an online text editor for this workshop. You can sign up here: [https://repl.it/](https://repl.it/) 


## What this workshop is

A super friendly introduction to ES6 JavaScript! 

You can't learn EVERYTHING in ~2 hours. But you can learn enough to get excited and comfortable to keep working and learning on your own! Come to our almost weekly code hours [meetups](https://www.meetup.com/Learn-Code-Seattle/events/) to ask questions if you get stuck and show off what you've been working on!

- This course is for beginners
- Ask Questions!
- Answer Questions!
- Help others when you can
- Its ok to get stuck, just ask for help!
- Feel free to move ahead
- Be patient and nice


## About me:

Hello I'm [Gavin Look](https://www.linkedin.com/in/gavinlook/). I'm a fullstack web developer that graduated from the Galvanize web developer program.  I love writing concise and robust code using ES6 and am currently working on AR projects that enhance user experince!

- gitHub: [GTLook](https://github.com/GTLook/)
- LinkedIn: [GavinLook](https://www.linkedin.com/in/gavinlook/) 
- Email: [GTLook@gmail.com](mailto:GTLook@gmail.com)


## Further Introductions! About you!

Give a quick Intro!

- Whats your name?
- Whats your background?
- Why are you interested in JavaScript?

## What is javaScript?

### A very brief history

Created by Brendan Eich in 1995 in ONLY 10 days during his time at Netscape Communications.

A lot of updates have happened of course since then, but its still fun to see some of the [quirks](https://www.destroyallsoftware.com/talks/wat) still in the language!

Read more about the history of JavaScript [here](https://en.wikipedia.org/wiki/JavaScript).

Javascript is often used with HTML and CSS to create dynamic web pages. 

### What is EMCAScript 6?

JavaScript is constantly growing and being improved!  We're going to talk about the newest changes!

ECMAScript 6 is also known as ES6 and ECMAScript 2015

Some people like to call it JavaScript 6.

This chapter will introduce some of the new features in ES6.


### What can you do with ES6 JavaScript

- JavaScript let
- JavaScript const
- for of and in loops
- JavaScript default parameter values
- Arrow Functions
- Array.find() and other new methods!
- Destucturing!  Also known as rest and spread
- template literals
- [And so much more](https://es6-features.org/)


## ES6 JavaScript:

### Variable Scope:
We're going to start with the basics var vs let and const.  

Feel free to try these code samples out in your developer console(I'll show you how) or your repl!

#### Let:

The let statement allows you to declare a variable with block scope.

```
var x = 10;
// Here x is 10
{ 
    let x = 2;
    // Here x is 2
}
// Here x is 10
```

#### Const:

The const statement allows you to declare a constant (a JavaScript variable with a constant value).

Constants are similar to let variables, except that the value cannot be changed.

```
var x = 10;
// Here x is 10
{ 
    const x = 2;
    // Here x is 2
    x = 3 //this will return an error!
}
// Here x is 10
```

#### For of and For in Loops

For of and for in loops allow you to quickly create the most basic for loops in JS when you need to iterate over a collection of data.

For of loops refrences the data in the given array.  A for loop *of* the data

```
const foo = ['cat', 'dog', 'snek']
for(let i in foo){
  console.log(i)
}
//logs cat
//logs dog
//logs snek
```

For in loops refrences the index in the given array.  A for loop of the *in*(dex) of the data

```
const foo = ['cat', 'dog', 'snek']
for(let i in foo){
  console.log(i)
}
//logs 0
//logs 1
//logs 2
```

lets try it out!  How does this make our lives easier?


#### Default Parameter Values:

ES6 allows function parameters to have default values.  These values are passed into a fucntion when no other value is given.

```
function myFunction(x = 10, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
myFunction(1,2) // will return 3
myFunction(5); // will return 15
myFunction(); // will return 20
```


## Arrow Functions:

Arrow functions allows a short syntax for writing function expressions.

You don't need the function keyword, the return keyword, and the curly brackets.

Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

```
// ES5
function mult(x, y) {
     return x * y;
}

//or

var mult = function(x, y) {
     return x * y;
}

// ES6
const mult = (x, y) => x * y;

// In all cases
mult(2, 5) // Will return 10
```

Try it out! 


## Array.find():

The find() method is a new ES6 method that returns the value of the first array element that passes a test function.

This example finds (returns the value of ) the first element that is larger than 18:

```
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
```

Let's write this with a fat arrow function in the repl!


## Rest:

ES6 has some amazing new tools to help deal with arrays of information.  When passing in an array we can grab varables out of the array to work with.  Lets try it out!

```
let restPractice = (a, b, ..rest) {
	console.log(rest)
	return a + ' ' + b
}

restPractice(['Hello', 'World', 'Goodbye', 'World'])
// Will log [Goodbye, World]
// Will return 'Hello World'
```
How can we modify this function to return a goodbye statement?


## Spread:

Spreading is the perfect sidekick to rest!  It is super useful in recursive statements and combinging information.

```
let pets = ['cat', 'dog', 'bird']
let newPets = ['fish', 'snek']

let allPets = [...pets, ...newPets, 'hamster']

console.log(allPets)
// will log ['cat', 'dog', 'bird', 'fish', 'snek', 'hamster']
```


## String Interpolation With Template Literals:

We know strings can be declared with the '' and the "".  Now with ES6 we can use ` ` to create a template literal string that can do some new and fun things!  This will make things like .concat and creating strings easier and more concise.


```
let favoritePetName = snek
let newString = `My farvorite name for a snake is calling them a ${favoritePetName}'
```

something more complex?

```
let customer = { name: "Foo" }
let card = { amount: 7, product: "Bar", unitprice: 42 }
let message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} 
		for a total of ${card.amount * card.unitprice} bucks?`
```

Whoah, did we just do inline JS in a string?  Let's check it out!


## Lets do some code!:
You just learned a lot! Lets put it together and build something!

Sign up if you haven't already and create a new project: https://repl.it/


We're going to use recursion and everything you just learned to solve a coding challenge:

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

![fib picture](https://i.imgur.com/EYcuB1wm.jpg)

Lets solve this problem together!


# YOU DID IT! YOU'RE NOW A PROGRAMMER!

### Welcome! :)

### Keep learning!



## What is Galvanize?
###### We are a community!


## Upcoming Events

#### Meetups and Free workshops!
 
We host so many events! check out out [calendar](https://www.galvanize.com/seattle/events)

- [How to Present your Project | Giving a Technical Talk](https://www.eventbrite.com/e/how-to-present-your-project-giving-a-technical-talk-tickets-51783298239) - Thursday, November 8, 2018
6:30 PM to 8:30 PM

- [JavaScript 101](https://www.eventbrite.com/e/learn-javascript-and-prepare-for-your-technical-interview-javascript-101-tickets-51774189996) - Wednesday, November 7, 2018 6:30 PM & Wednesday, November 28, 2018 6:30 PM

- [JavaScript Fundamentals Mini Bootcamp 1](https://www.eventbrite.com/e/learn-javascript-and-prepare-for-your-technical-interview-javascript-fundamentals-mini-bootcamp-1-tickets-51775610244) - Saturday, November 10, 2018 10:00 AM & Saturday, December 1, 2018 10:00 AM

- [Javascript Functions and Scopes](https://www.eventbrite.com/e/learn-javascript-and-prepare-for-your-technical-interview-javascript-functions-and-scopes-tickets-51775970321) - Wednesday, November 14, 2018 6:30 PM & Wednesday, December 5, 2018 6:30 PM

- [JavaScript Fundamentals Mini Bootcamp 2](https://www.eventbrite.com/e/learn-javascript-and-prepare-for-your-technical-interview-javascript-fundamentals-mini-bootcamp-2-tickets-51776185966) - Saturday, November 17, 2018 10:00 AM & Saturday, December 8, 2018 10:00 AM

- [PuPPy Programming Night](https://www.meetup.com/PSPPython/events/zdzrxpyxnbhc/) - Every Thusday 6:30pm

- [Practicing Coding Interviews](https://www.meetup.com/PSPPython/events/pmqfjqyxnbmc/) - Every Monday 6:30pm



#### Immersive Bootcamp
- [Data Science](https://www.galvanize.com/seattle/data-science) - Jan22 - Apr19 & May6 - Aug2

- [Software Engineer](https://www.galvanize.com/seattle/web-development) - Jan7 - May17 & Feb25 - Jul5

#### Part-Time Courses
- [Data Analytics](https://www.galvanize.com/seattle/data-analytics) - Jan22 - Apr11

- [Data Science Fundamentals](https://www.galvanize.com/seattle/data-science-fundamentals) - Feb20 - Mar29

- [Hack Reactor Structured Study Program](https://getcoding.hackreactor.com/ssp-overview/?utm_source=Galvanize&utm_medium=Part-Time-Courses&utm_campaign=SSP) - November 5 & November 12

## Questions:
Please feel free to reach out to Sage Elliott with any questions about Galvanize!

- Sage Elliott [sage.elliott@galvanize.com](sage.elliott@galvanize.com)

## Gavin's info:

- LinkedIn: [GavinLook](https://www.linkedin.com/in/gavinlook/) 
- Email: [GTLook@gmail.com](mailto:GTLook@gmail.com)


#### About the Instructors

[Gavin Look](https://www.linkedin.com/in/gavinlook/) is a full stack web developer that graduated from the galvanize web developer program speak to me after the presentation to talk about my expereince.

Thank you!
