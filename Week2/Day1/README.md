`README.md` file for Day 1 of Week 2, covering JavaScript string methods such as `length`, `charAt()`, `toUpperCase()`, `indexOf()`, and more...

```md
# JavaScript String Methods - Day 1, Week 2

## Table of Contents
1. [String Length](#string-length)
2. [charAt()](#charat)
3. [toUpperCase() / toLowerCase()](#touppercase-tolowercase)
4. [indexOf()](#indexof)
5. [slice() / substring()](#slice-substring)
6. [replace()](#replace)
7. [split()](#split)
8. [trim()](#trim)
9. [includes()](#includes)
10. [concat()](#concat)

---

## String Length

The `length` property returns the number of characters in a string.
### Syntax
```js
string.length
```

### Example
```js
let str = "Hello, World!";
console.log(str.length); // Output: 13
```

---

## charAt()

The `charAt()` method returns the character at the specified index in a string.

### Syntax
```js
string.charAt(index)
```

### Example
```js
let str = "JavaScript";
console.log(str.charAt(3)); // Output: a
```

---

## toUpperCase() / toLowerCase()

- The `toUpperCase()` method converts all characters in a string to uppercase.
- The `toLowerCase()` method converts all characters in a string to lowercase.

### Syntax
```js
string.toUpperCase()
string.toLowerCase()
```

### Example
```js
let str = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
```

---

## indexOf()

The `indexOf()` method returns the index of the first occurrence of a specified substring. If the substring is not found, it returns `-1`.

### Syntax
```js
string.indexOf(substring)
```

### Example
```js
let str = "JavaScript is awesome!";
console.log(str.indexOf("is")); // Output: 11
console.log(str.indexOf("Python")); // Output: -1
```

---

## slice() / substring()

- The `slice()` method extracts a portion of a string and returns it as a new string. You can specify the start and end indices.
- The `substring()` method is similar to `slice()`, but it does not accept negative indices.

### Syntax
```js
string.slice(startIndex, endIndex)
string.substring(startIndex, endIndex)
```

### Example
```js
let str = "JavaScript is fun!";
console.log(str.slice(0, 10)); // Output: JavaScript
console.log(str.substring(11, 14)); // Output: fun
```

---

## replace()

The `replace()` method replaces a specified substring with another substring in a string. By default, it only replaces the first occurrence.

### Syntax
```js
string.replace(oldSubstring, newSubstring)
```

### Example
```js
let str = "Hello, World!";
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!
```

---

## split()

The `split()` method splits a string into an array of substrings based on a specified delimiter. we will discuss this letter in the array topic. just do a simple practice on this.

### Syntax
```js
string.split(delimiter)
```

### Example
```js
let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]
```

---

## trim()

The `trim()` method removes whitespace from both ends of a string.

### Syntax
```js
string.trim()
```

### Example
```js
let str = "   Hello, World!   ";
console.log(str.trim()); // Output: "Hello, World!"
```

---

## includes()

The `includes()` method checks if a string contains a specified substring. It returns `true` if the substring is found, and `false` otherwise.

### Syntax
```js
string.includes(substring)
```

### Example
```js
let str = "JavaScript is awesome!";
console.log(str.includes("awesome")); // Output: true
console.log(str.includes("Python"));  // Output: false
```

---

## concat()

The `concat()` method concatenates (joins) two or more strings and returns a new string.

### Syntax
```js
string1.concat(string2, string3, ...)
```

### Example
```js
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!
```

---

## Conclusion

These are some of the most commonly used string methods in JavaScript. For more information and details, check out the [JavaScript String Methods Documentation](https://www.programiz.com/javascript/string).

```

