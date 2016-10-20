#Functions Lesson
-

####Install
This lesson assumes you have node & git are already installed.


Paste this line into your terminal to download the lesson:
`git clone https://github.com/Shurlow/functions-lesson.git`

####Testing Solutions
We can use the included tests to check your solutions for each excercise. To test a solution navigate to the repo's root directory and run:

`node excercise#/test.js`

replacing `#` with the excercise number you'd like to test. e.g. `node excercise2/test.js`


#Functions
-

Functions are one of the core pillars of programming. The bread and butter of every programmer. In javascript they are both a tool and a concept.

This lesson will take us through how to define and use functions, how to use parameters and return values, and how to handle variable scope effectively.

###Objectives

* define and call functions real good 
* handle scoped variables in and outside functions to avoid accidental interference.
* identify repitition in program and abstract with writing functions.
* utilize synchronous and asynchronous functions to abstract a task.


A **function** is a block of code that can be used and reused. It wraps a sequence of commands, rules, or calculations and gives them a name. It's kind like an Easy Bake Oven!

![easy bake oven](http://www.gannett-cdn.com/-mm-/831250b3be5476246a6f08c61a986ad46d977194/c=0-39-1421-903&r=x329&c=580x326/local/-/media/USATODAY/popcandy/2013/10/02/1380730235000-eb-81.JPG "Easy Bake Oven!")

You put the uncooked cake batter into the oven and a delicously baked cake exits minutes later.
The oven doesnt care how you made the cake batter, it just knows ONE thing, how to bake.

Why might this concept be helpful when writing programs or applications?
What advantages does grouping code in functions give us?

<details>
  <summary>Functions are used to:</summary>
  
* Improve clarity / readability
* Structure large applications
* Reduce repetition
* Isolate behavior
  
</details>

<details>
	<summary>Defining & Using Functions</summary>

We can define functions in the same way as regular variable definitions but using the `function` keyword.

```javascript
var printName = function() {
  console.log('name');
};
```

the code between the `{ }` is called the function **body**. In this example the  body simply logs the string "name" to the console. **Calling** or **invoking** a function tells the function to execute the code in it's body. To call this function we simply use its name and append `()` like so:

`printName()`
</details>

<details>
	<summary>Return</summary>

Sometimes you want a function to **return** a new value instead of just logging it. For instance `Math.random` is a function that returns a random number for you to use. To return a value from a function use the `return` keyword followed by the value you want to return.

```javascript
var twoPlusTwo = function() {
  return 2 + 2;
};
```
The function `twoPlusTwo` returns the number `4` but
when you call `twoPlusTwo()` nothing is printed. This is because the `return` command only passes the variable on without logging anything.

If we want to see the output we can assign this function call to a new variable and log the variable.

```javascript
var value = twoPlusTwo();
console.log(value) // prints the number '4'
```

####Question:
What if we wanted it to print a specific name? What if we wanted to print lots of differnet names?

**-- Complete Excercise #1 --**

</details>

<details>
	<summary>Parameters</summary>
	
Functions can also take values as input and return new values as output. The inputs are called **parameters** and are defined inside the `()`. A parameter could be a string, a number, an array, an object and even another function

The following example takes 1 parameter `name` and logs it to the console:

```javascript
var printAnyName = function(name) {
  console.log(name);
};
```

It's called in the same way but with a string passed as a parameter.

`printAnyName('fin') //logs string 'fin'`

Note that the parameters of a function are NOT declared using `var` and you can name them however you like.

--

We can also make functions with multiple parameters!
Just separate them with a `,`

```javascript
var printManyNames = function(name1, name2) {
  console.log(name1, name2);
};

printManyNames('me', 'you');
```

**-- Complete Excercise #2 --**
</details>

<details>
	<summary>Variables & Scope</summary>
	
An important property of functions is that variables declared inside functions (like parameters) are **local** to the function body. This means that parameters and local variables only exist *inside* the function and are re-created every time the function is called.

For example, we are given the function `sum` which takes an array of numbers and calculates the sum of all numbers in that array.

```javascript
var total = 0;
var sum = function(numbers) {
	for(var i = 0; i <= numbers.length, i++) {
		total = total + numbers[i];
	}
};
```
If we call `sum([1,2,3])` and then `console.log(total)` we see the correct value '6' get logged. Everything looks ok right? **NO.** The problem here is that the variable `total` is declared *outside* the function so everytime `sum` is called we add on to the previous result held by `total`. This is called a **side effect**.

A safer solution would be to place the variable `total` inside the function block and and then return it.

```javascript
var sum = function(numbers) {
	var total = 0;
	for(var i = 0; i <= numbers.length, i++) {
		total = total + numbers[i];
	}
	return total;
};
```

In general we want to avoid unwanted side effects by keeping all the variables declared inside a function or passed in through its parameters.

> “Functions that create values are easier to combine in new ways than functions that directly perform side effects” 
― Marijn Haverbeke (*Eloquent Javascript*)

Sometimes we DO want function side effects. In fact, sometimes it's necessary! For example the function `console.log` does not return anything, but instead has the side effect of printing text to the console.
	
**-- Complete Excercise #3 --**
</details>

<details>
	<summary>Declaration Notation</summary>

There are actually two ways of defining a function. Earlier we learned the expression notation using `var` and `function` but there is a slightly shorter option.
Keep in mind, though, that the way you define a function changes the scope (aka when/where it can be used).

**Function Expression:**

```javascript
var printName = function() {
  console.log('name');
};
```
if you define a function as an **expression**, you can only call it **bellow** the definition. 

**Function Declaration**

```javascript
function printName() {
  console.log('name');
}
```
A function created with this **declaration** syntax is automatically moved to the top of your code and is availible to call globally no matter where you actually define it.

####Question:
In what scenario would you use function **expression** declarations? What scenario would you rather use function **declaration** style?



</details>



<style>
 summary {
	font-size: 1.25em;
 	font-weight: bold
 }
</style>