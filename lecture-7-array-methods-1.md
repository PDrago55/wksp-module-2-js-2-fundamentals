# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);

```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string. // .join is the opposite of split...

```js
// Example
const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join();
'The, large, shaggy, dog, barked, at, the, silence'
```
let sentence = lexicon.join(' ');
'the large shaggy dog barked at the silence'
---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, let summer = ['annoying', 'sister, 'warrior'];
                    console.log(include(), summer.includes('sister'))
                    TRUE


    `.slice()`  let veg = ['carrot', 'celery', 'cabbage', 'brocoli',]
                const cruciferousVeg = veg.slice(2, 4);
                console.log(cruciferousVeg);


2. `.indexOf()`,


    `.push()` 


3.  `.pop()` // removes the last string of an array
                let yoda = ['size', 'matters', 'not']
                yoda.pop('matters')
                console.log(yoda)
                ['size' 'not']

    `.sort()` // sorts the array out alphabetically


4. `.shift()`, // removes the first item in an array
                let yoda = ['size', 'matters', 'not'];
                yoda.shift('');
                console.log(yoda);
                ['matters' 'not']


    `.unshift()` adds elements to the beginning of an array
                let yoda = ['size', 'matters', 'not']
                yoda.unshift('bruh')
                console.log(yoda)
                ['bruh', 'size', 'matters' 'not']

5. `.reverse()`, let backtalk = ['backwards', 'is', 'this'];
                backtalk.reserve()
                console.log(backtalk);
                ['this', 'is', 'backwards']


    `.lastIndexOf()` searches for a position of the element but starts at the end of an array
                let backtalk = ['backwards', 'is', 'this', 'bacon'];
                backtalk.lastIndexOf('is')
                console.log('is');
                2

6. `.splice()`, changes the content of an array
                let array = [1, 2, 3, 4];
                array.splice(0 2, 'string');
                console.log(array);
                ['string', 3, 4]

    `.toString()` 
                let array = [1, 2, 3, 4];
                array.toString();
                console.log(array);
                ["1 2 3 4']

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.

    //indexOf() is a methond in Javascript that allows us to search for the first occurence of a vlaue, string in a database. if the value/string does not exist, Javascript will return the value of -1.//
    // the push method allows us measly coders to add strings/ numbers to the end of an already existing array. 

    - create two examples of each method in use. Be creative. 😛
Example of indexOf(): 

let yoda = ["size", "matters", "not"];
let jedi = yoda.indexOf("not");
console.log(jedi) = 2;
---

Example of push()
let yoda = ["size", "matters", "not"];
yoda.push('lol', 'I', 'never', 'said', 'this');
console.log(yoda)
[Next lecture: Functions](../lecture-8-functions)