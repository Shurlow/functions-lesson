#Functions
---
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

###Defining & Using Functions
-

We can define functions in the same way as regular variable definitions but using the `function` keyword.

```javascript
var printName = function() {
  console.log('name');
};
```

the code between the `{ }` is called the function **body**. In this example the  body simply logs the string "name" to the console. **Calling** or **invoking** a function tells the function to execute the code in it's body. To call this function we simply use its name and append `()` like so:

`printName()`

<mark>Demonstrate in node terminal

But what if we wanted it to print a specific name? What if we wanted to print lots of differnet names?

###Parameters and Return Values
-
Functions can also take values as input and **return** new values as output. The inputs are called **parameters** and are defined inside the `()`. Note that the parameter of a function is NOT declared using `var`.

The following example takes 1 parameter `name` and logs it to the console.

```javascript
var printAnyName = function(name) {
  console.log(name);
};
```
It is called the same way but with a string as a parameter.

`printAnyName('fin') //logs string 'fin'`

Here the string 'fin' is passed as a parameter to printAnyName

--

We can also make functions with multiple parameters!
Just separate them with a `,`

```javascript
var printManyNames = function(name1, name2) {
  console.log(name1, name2);
};
```
--

Sometimes you want a function to **return** a new value instead of just logging it. For instance `Math.random` is a function that returns a random number. To return a value from a function use the `return` keyword followed by the value you want to return.

```javascript
var square = function(x) {
  return x * x;
};
```

<mark>Complete Exercise #2


###Variable Scope
-
The way you define a function changes the scope.

**Function Expression:**

```javascript
var printName = function() {
  console.log('name');
};
```
**Function Declaration**

```javascript
function printName() {
  console.log('name');
}
```


> “Functions that create values are easier to combine in new ways than functions that directly perform side effects” 
― Marijn Haverbeke (*Eloquent Javascript*)

###

Functions can be roughly divided into those that are called for their side effects and those that are called for their return value. (Though it is definitely also possible to have both side effects and return a value.)

A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global variables that are occasionally changed by other code. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else). This makes it easy to reason about.