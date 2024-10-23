

# Day3, Week2  Array Basics and Operations

This guide covers basic array operations in JavaScript, including creation, modification, and various ways to loop through arrays.

### Table of Contents

1. [Creating an Array](#creating-an-array)
2. [Accessing Array Elements](#accessing-array-elements)
3. [Adding Elements](#adding-elements)
4. [Removing Elements](#removing-elements)
5. [Finding the Index of an Element](#finding-the-index-of-an-element)
6. [Modifying Elements](#modifying-elements)
7. [Array Length](#array-length)
8. [Concatenating Arrays](#concatenating-arrays)
9. [Sorting an Array](#sorting-an-array)
10. [Reversing an Array](#reversing-an-array)
11. [Looping Through Arrays](#looping-through-arrays)

---

## Creating an Array

In JavaScript, arrays are used to store multiple values in a single variable.

```js
let fruits = ['apple', 'banana', 'orange'];
```

## Accessing Array Elements

Elements in an array are accessed using their index. The first element has an index of `0`.

```js
console.log(fruits[0]);  // Output: 'apple'
console.log(fruits[2]);  // Output: 'orange'
```

## Adding Elements

### Add to the End

You can add an element to the end of the array using the `push()` method.

```js
fruits.push('grape');  // ['apple', 'banana', 'orange', 'grape']
```

### Add to the Beginning

Use `unshift()` to add an element to the beginning of the array.

```js
fruits.unshift('strawberry');  // ['strawberry', 'apple', 'banana', 'orange', 'grape']
```

## Removing Elements

### Remove from the End

The `pop()` method removes the last element from the array.

```js
fruits.pop();  // ['strawberry', 'apple', 'banana', 'orange'] (removes 'grape')
```

### Remove from the Beginning

The `shift()` method removes the first element from the array.

```js
fruits.shift();  // ['apple', 'banana', 'orange'] (removes 'strawberry')
```

### Remove Elements from Anywhere

To remove elements from any position in the array, use the `splice()` method.

```js
fruits.splice(1, 1);  // ['apple', 'orange'] (removes 1 element at index 1 - 'banana')
```

You can also use `splice()` to add elements at a specific position.

```js
fruits.splice(1, 0, 'kiwi', 'peach');  // ['apple', 'kiwi', 'peach', 'orange']
```

## Finding the Index of an Element

You can use `indexOf()` to find the index of a particular element.

```js
let index = fruits.indexOf('peach');  // Returns 2
```

If the element is not found, `indexOf()` returns `-1`.

## Modifying Elements

You can modify an array element by assigning a new value to its index.

```js
fruits[1] = 'mango';  // ['apple', 'mango', 'peach', 'orange'] (replaces 'kiwi' with 'mango')
```

## Array Length

The `length` property returns the number of elements in an array.

```js
console.log(fruits.length);  // Output: 4
```

## Concatenating Arrays

You can use `concat()` to join two or more arrays together.

```js
let vegetables = ['carrot', 'tomato'];
let food = fruits.concat(vegetables);  // ['apple', 'mango', 'peach', 'orange', 'carrot', 'tomato']
```

## Sorting an Array

Use the `sort()` method to sort elements alphabetically or in ascending order (for numbers).

```js
fruits.sort();  // ['apple', 'mango', 'orange', 'peach']
```

## Reversing an Array

You can reverse the order of elements in an array using `reverse()`.

```js
fruits.reverse();  // ['peach', 'orange', 'mango', 'apple']
```

---

## Looping Through Arrays

There are several ways to loop through the elements of an array in JavaScript.

### 1. `for` Loop

The traditional `for` loop allows you to iterate through an array by its index.

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// 'peach'
// 'orange'
// 'mango'
// 'apple'
```

### 2. `for...of` Loop

The `for...of` loop allows you to iterate over the elements directly.

```js
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// 'peach'
// 'orange'
// 'mango'
// 'apple'
```

### 3. `for...in` Loop

The `for...in` loop is used to iterate over the index properties of an array.

```js
for (let index in fruits) {
    console.log(index, fruits[index]);
}
// Output:
// 0 'peach'
// 1 'orange'
// 2 'mango'
// 3 'apple'
```

---

### Conclusion

This guide provides a basic understanding of how arrays work in JavaScript, from creation and modification to looping through their elements. Arrays are an essential data structure, and mastering these operations is crucial for efficient programming.

