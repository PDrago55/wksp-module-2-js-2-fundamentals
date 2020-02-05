# 2.1.6 - JavaScript String Methods

---

## Methods

Methods have to be the most exciting part of JavaScript!

- Methods are special functions that reference the values of the data stored in the object.
- Methods are called with dot notation `object.method(arguments)`. _The period between object and method is the dot in dot notation._
- Because ALL of the data types we've learned about are actually objects, they all have a bunch of built-in methods and special properties.

---

For example, all objects have `toString` and `valueOf` methods.

```js
let num = 3;
num.toString(); // "3"

let bool = true;
bool.toString(); // "true"

let str = 'hello';
str.toString(); // "hello"

let arr = [1, 2, 'three'];
arr.toString(); // "1, 2, three" turned the array into a string

let dip = {value: 3};
dip.toString(); // "[object, object]" cannot obtain info from object...
```

Let's look at the examples above again using `valueOf`.

let dip = {value: 3};
valueOf(); // {value: 3}
let arr = [1, 2, 'three'];
valueOf(); // [1, 2, 'three']
---

- When programming with JavaScript we don't generally care that booleans, numbers and functions are objects. Their methods aren't that useful most of the time.

- The most helpful built-in methods are on strings and arrays.

_We'll talk more about objects and methods later when we talk about creating our own methods._

---

## Common String Methods

Strings have a bunch of methods and properties that will be immediately useful. 😉

- `.length` // returns the length, no arguments thus no brackets
- `.replace()`// change value/ string
- `.slice()` // cuts string
- `.concat()` // combines
- `split()` // splits
- `indexOf()` // finds the position you're looking for in an array

📝 None of these methods **mutate** the string; strings are **immutable**.
📝 They return a new version of the string which you can then work with as you like.

---

### [`.length`](https://www.w3schools.com/jsreF/jsref_length_string.asp)

Calling `.length` returns the length of the sequence.

```js
// Example
const sentiment = 'I love programming';
sentiment.length; // counts the letters and spacing of string//
```

---

### [`.replace()`](https://www.w3schools.com/jsreF/jsref_replace.asp)

The `.replace()` method replaces a specified value with another value in a string.

It takes 2 parameters, the value to replace and the new value.

```js
// Example
const sentiment = 'I love programming';
// sentiment.replace('programming', 'bacon')
sentiment = 'I love bacon'
```

---

### [`.slice()`](https://www.w3schools.com/jsreF/jsref_slice_string.asp)

`.slice()` extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: the start position (count the characters), and the end position (count the characters in the string).

```js
// Example
const sentiment = 'I love programming';

```
const sentiment = 'I love programming'; 
sentiment.slice(2, 6);
'love'
---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_string.asp)

The `.concat()` method is used to join two or more strings.

```js
// Example
let partOne = 'Do or do not.';
let partTwo = 'There is no try.';

```
const newSentence = partOne.concat(partTwo);
const newSentence = '${partOne} ${partTwo};
const newSentence = partOne + partTwo;
---

### [`.split()`](https://www.w3schools.com/jsreF/jsref_split.asp)

The `.split()` method "split" a string into an array of _substrings_.

```js
// Example
const truth = 'The greatest teacher, failure is.';
truth.split('')
```
truth.split('e') // removes "e"
truth.split(' ') // spaces string words
---

### [`.indexOf()`](https://www.w3schools.com/jsreF/jsref_indexof.asp)

The `.indexOf()` method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

```js
// Example
let yodaSpeak = "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";

```
let yodaSpeak = "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";

yodaSpeak.indexOf("anger")

_Why would JavaScript decide to return `-1` instead of some other value? like `0`?_

since it doesn't exists according to Javascript, it will return -1 instead of anything else. It is basically saying FALSE. 
---

## More String Methods here...

https://www.w3schools.com/jsreF/jsref_obj_string.asp

---

[Next lecture: Array Methods P1](../lecture-7-array-methods-1)