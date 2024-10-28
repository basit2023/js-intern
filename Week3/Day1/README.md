
# JavaScript Objects - Week 3 Day 2

This guide covers the basics of working with objects in JavaScript, including creating objects, accessing and modifying properties, and using methods.

## Table of Contents
1. [Introduction to Objects](#introduction-to-objects)
2. [Creating an Object](#creating-an-object)
3. [Accessing Properties](#accessing-properties)
4. [Modifying Properties](#modifying-properties)
5. [Adding New Properties](#adding-new-properties)
6. [Deleting Properties](#deleting-properties)
7. [Calling Methods](#calling-methods)
8. [Looping Through Properties](#looping-through-properties)

## 1. Introduction to Objects
In JavaScript, an **object** is a collection of key-value pairs. Each key (or property) has a corresponding value, which can be any data type, including strings, numbers, arrays, or even functions. Objects are useful for grouping related information together.

### Example:
```javascript
const car = {
  color: "red",
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {
    console.log("Car is starting...");
  }
};
```

In the example above:
- **Properties**: `color`, `brand`, `model`, and `year` describe the car.
- **Method**: `start` is a function that represents an action the car can perform.

## 2. Creating an Object
You can create an object using curly braces `{}`, specifying properties and methods inside.
```javascript
const person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
```

## 3. Accessing Properties
You can access an object's property using **dot notation** or **bracket notation**.
```javascript
console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 25
```

## 4. Modifying Properties
You can modify an existing property by assigning a new value to it.
```javascript
person.age = 26; // Changes age to 26
person["name"] = "Bob"; // Changes name to Bob
```

## 5. Adding New Properties
You can add new properties to an object even after it’s created.
```javascript
person.gender = "female";
console.log(person.gender); // Output: female
```

## 6. Deleting Properties
To delete a property, use the `delete` keyword.
```javascript
delete person.age;
console.log(person.age); // Output: undefined
```

## 7. Calling Methods
Methods are functions within an object. Use dot notation with parentheses `()` to call a method.
```javascript
person.greet(); // Output: Hello, Bob
```

## 8. Looping Through Properties
Use a `for...in` loop to iterate over all properties in an object.
```javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```
