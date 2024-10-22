
# JavaScript Functions - Day 2, Week 2

## Table of Contents
1. [Function Declaration](#function-declaration)
2. [Function Expression](#function-expression)
3. [Arrow Function (ES6)](#arrow-function-es6)
4. [Anonymous Function](#anonymous-function)
5. [Immediately Invoked Function Expression (IIFE)](#immediately-invoked-function-expression-iife)

---

## 1. Function Declaration

A **Function Declaration** is the most common way to define a function in JavaScript. It uses the `function` keyword followed by the function name and parameters. These functions are **hoisted** to the top of their scope, so you can call them before they are defined.

### Syntax
```js
function functionName(parameters) {
    // function body
    return value;
}
```

### Example
```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
```

### Key Features
- Hoisted to the top of their scope.
- Can be called before being defined.

---

## 2. Function Expression

A **Function Expression** is when a function is assigned to a variable. Unlike function declarations, function expressions are **not hoisted**, meaning you cannot call the function before it is defined.

### Syntax
```js
const variableName = function(parameters) {
    // function body
    return value;
};
```

### Example
```js
const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 10)); // Output: 15
```

### Key Features
- Not hoisted, so it must be defined before use.
- Can be used in anonymous functions.

---

## 3. Arrow Function (ES6)

An **Arrow Function** is a more concise way to write functions introduced in ES6. It uses the `=>` (arrow) syntax and omits the `function` keyword. Arrow functions do not bind their own `this` value, making them especially useful in callbacks or inside object methods.

### Syntax
```js
const functionName = (parameters) => {
    // function body
    return value;
};
```

### Example
```js
const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // Output: 12
```

### Key Features
- More concise syntax.
- Does not have its own `this` context.
- Can implicitly return values when used without braces.

---

## 4. Anonymous Function

An **Anonymous Function** is a function without a name. It is often used as a function expression or as an argument to other functions (e.g., callbacks). 

### Syntax
```js
const variableName = function(parameters) {
    // function body
    return value;
};
```

### Example
```js
setTimeout(function() {
    console.log('This is an anonymous function');
}, 1000);
```

### Key Features
- Typically used when a function is needed only once or within callbacks.
- Can be used in function expressions or as arguments.

---

## 5. Immediately Invoked Function Expression (IIFE)

An **Immediately Invoked Function Expression (IIFE)** is a function that runs as soon as it is defined. It is often used to create a private scope for variables, preventing them from polluting the global scope.

### Syntax
```js
(function() {
    // function body
})();
```

### Example
```js
(function() {
    console.log('This function runs immediately!');
})();
```

### Key Features
- Executes immediately after being defined.
- Creates a new scope, often used for encapsulation.
- Can help avoid polluting the global namespace.

---

## Conclusion

These are the main ways to define and use functions in JavaScript. Each type has its own use case, whether it be for hoisting (Function Declaration), modular coding (Function Expression), or more concise code (Arrow Functions). For more information, check out the [JavaScript Function Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).
```
