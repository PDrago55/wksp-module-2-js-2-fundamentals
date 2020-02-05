# 2.1.8 - JavaScript Functions

---

## Functions in Math... 😱

<iframe width="840" height="472" src="https://www.youtube.com/embed/VhokQhjl5t0" frameborder="0" allowfullscreen></iframe>

---

### Example 1

```js
// Formula for area of rectangle

length * width

// Turn that into a more math-like function...

A = l * w

f(l , w) = l* w

// Define JavaScript function

function areaRectangle(length, width){
    return length * width;
}

// Call the JavaScript function
areaRectangle(23, 10);

```

---

### Example 2

```js
// Formula for area of circle

Area = pi * radius * radius

// Define JavaScript function

function areaCircle (radius) {
    return 3.14 * radius * radius;
}

// Call the JavaScript function
areaCircle (10) // 314
```

---

## WT* is this good for?

- Functions are reusable expressions.
- _Define_ a function with parameters between the brackets.
- to _call_ the function (i.e. use it), you pass it arguments whose values take the place of the parameters in the function definition.
- The function acts just like any other expression when called.
- It produces the value you'd expect from the body of the function.

---

```js
// Example

```

### Exercise 1

```js
// Q1. Write a function that returns the sum of 3 numbers.

function sum3 (num1, num2, num3){
    return 1 + 2 + 3;
}
console.log(1 + 2 + 3)

// Q2. Write a function that returns the square of a number minus twice the number.

function idk (square) {
    return 
}

// Q3. Write a function that returns the a person's full name, given their first and last names.

function personName (first, last) {
    const fullName = `${first} ${last}`;
    return fullName; 
}

console.log(personName("Paolo", "Drago"));
```

---

### Exercise 2

```js
// Q4. Write a function that returns the value of the tax for a given amount.

function gov (price, tax) {
    const payUp = price * tax;
    return payUp;
}
console.log(10 * .10)


// Q5. Write a function that returns the value 42.
function cheese (two, values){
    const cheat = two * values;
    return  cheat;
}
    console.log(cheese(42, 1));

    or

function theAnswer (){
    return 42
}

// Q6. Write a function that returns "Hello!".
function hi (hello){
    const greeting = `${hello}`;
    return greeting;
}
console.log (hi("hello"));
or

function hi (){
    return "hello"
}

```

---

- Functions are key in implementing these software development principles.
- Complexity emerges from simplicity

[Alternate Function definition](https://www.cs.utah.edu/~germain/PPS/Topics/functions.html)

---

[Next lecture: Array Methods P2](../lecture-9-array-methods-2)