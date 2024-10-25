

# JavaScript Array Methods, Day4 Week 2;

This document covers some of the most commonly used array methods in JavaScript. Arrays are powerful data structures, and JavaScript provides several built-in methods to manipulate, transform, and iterate through them.

## Table of Contents
- [Array Methods](#array-methods)
  - [map()](#map)
  - [filter()](#filter)
  - [forEach()](#foreach)
  - [slice()](#slice)
  - [splice()](#splice)
  - [reduce()](#reduce)
  - [find()](#find)
  - [findIndex()](#findindex)
  - [some()](#some)
  - [every()](#every)
  - [concat()](#concat)
  - [join()](#join)
  - [includes()](#includes)

---

## Array Methods

### `map()`
Creates a new array by applying a function to each element of the original array.

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

### `filter()`
Returns a new array containing only the elements that pass a specified condition (i.e., the elements for which the provided function returns `true`).

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### `forEach()`
Executes a provided function once for each array element. It does not return a new array.

```js
const fruits = ['apple', 'banana', 'mango'];
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// mango
```

### `slice()`
Returns a shallow copy of a portion of an array into a new array object, without modifying the original array.

```js
const fruits = ['apple', 'banana', 'mango', 'orange'];
const slicedFruits = fruits.slice(1, 3);  // slice from index 1 to index 3 (not including index 3)
console.log(slicedFruits); // Output: ['banana', 'mango']
```

### `splice()`
Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99); // removes 1 element at index 2 and inserts 99
console.log(numbers); // Output: [1, 2, 99, 4, 5]
```

### `reduce()`
Reduces the array to a single value by executing a reducer function on each element.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

### `find()`
Returns the value of the first element that satisfies the provided testing function. Otherwise, it returns `undefined`.

```js
const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 2
```

### `findIndex()`
Returns the index of the first element that satisfies the provided testing function. Otherwise, it returns `-1`.

```js
const numbers = [1, 2, 3, 4, 5];
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1
```

### `some()`
Tests whether at least one element in the array passes the provided function's test. It returns a Boolean (`true` or `false`).

```js
const numbers = [1, 3, 5, 7, 8];
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true
```

### `every()`
Tests whether all elements in the array pass the provided function's test. It returns `true` if all elements pass; otherwise, it returns `false`.

```js
const numbers = [2, 4, 6];
const areAllEven = numbers.every(num => num % 2 === 0);
console.log(areAllEven); // Output: true
```

### `join()`
Joins all elements of an array into a string, separated by a specified separator.

```js
const fruits = ['apple', 'banana', 'mango'];
const fruitString = fruits.join(', ');
console.log(fruitString); // Output: 'apple, banana, mango'
```

### `includes()`
Determines whether an array includes a certain value among its entries. Returns `true` or `false`.

```js
const fruits = ['apple', 'banana', 'mango'];
const hasApple = fruits.includes('apple');
console.log(hasApple); // Output: true
```


## practive questions

### 1. `map()`
- **Question 1:** Given an array of numbers, return a new array where each number is doubled.  
   Input: `[1, 2, 3, 4]`  
   Output: `[2, 4, 6, 8]`

- **Question 2:** Write a function that takes an array of names and returns an array where each name is converted to uppercase.
   

### 2. `filter()`
- **Question 1:** Given an array of numbers, return a new array containing only the even numbers.  
   Input: `[1, 2, 3, 4, 5, 6]`  
   Output: `[2, 4, 6]`

- **Question 2:** Write a function that takes an array of numbers and returns an array of numbers greater than 10..  
 

### 3. `forEach()`
- **Question 1:** Given an array of numbers, print each number to the console.  
   Input: `[1, 2, 3, 4]`  
   Output: (Printed in console)  
   ```
   1  
   2  
   3  
   4  
   ```

- **Question 2:** Given an array of strings, append the string `'!'` to each element and log the result.  
   Input: `['Hello', 'World']`  
   Output: (Printed in console)  
   ```
   Hello!  
   World!  
   ```

### 4. `slice()`
- **Question 1:** Given an array of numbers, return a new array with the first 3 elements.  
   Input: `[1, 2, 3, 4, 5]`  
   Output: `[1, 2, 3]`

- **Question 2:** Given an array of strings, return a new array with elements from index 2 to 4 (inclusive of index 2, exclusive of index 4).  
   Input: `['a', 'b', 'c', 'd', 'e']`  
   Output: `['c', 'd']`

### 5. `splice()`
- **Question 1:** Given an array of numbers, remove the second and third elements from the array and return the modified array.  
   Input: `[1, 2, 3, 4, 5]`  
   Output: `[1, 4, 5]`

- **Question 2:** Given an array of strings, replace the first two elements with new strings `'x'` and `'y'` and return the modified array.  
   Input: `['a', 'b', 'c', 'd']`  
   Output: `['x', 'y', 'c', 'd']`









