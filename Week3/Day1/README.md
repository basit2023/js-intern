
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
9. [Practice Questions](#practice-questions)

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


## Practice Questions

```
1. Creating and Accessing Properties
   - Create an object called `car` with properties: `make`, `model`, `year`, and `color`.
   - Access and log the `make` and `year` of the `car` object to the console.

2. Modifying Properties
   - Create an object called `restaurant` with properties: `name`, `location`, `cuisine`, and `rating`.
   - Update the `rating` of the `restaurant` object, then log the entire object to see the updated rating.

 3. Adding New Properties
   - Create an object `game` with properties: `title`, `genre`, and `platform`.
   - Add a new property called `releaseYear` to the `game` object and set it to the current year. Then log the updated object.

 4. Deleting Properties
   - Create an object `employee` with properties: `name`, `position`, `department`, and `salary`.
   - Delete the `salary` property from the `employee` object and log the object to confirm the property was removed.

 5. Calling Methods
   - Create an object `person` with properties `name`, `age`, and a method `greet` that logs `"Hello, my name is [name]"`.
   - Set the `name` property and call the `greet` method to see the output in the console.

### 6. Using `this` in Methods
   - Create an object `player` with properties `username` and `score` and a method `showScore` that logs `"Score for [username] is [score]"`.
   - Set values for `username` and `score`, then call `showScore` to test how `this` works.

 7. Looping Through Properties
   - Create an object `house` with properties `rooms`, `bathrooms`, `garage`, and `yard`.
   - Use a `for...in` loop to log each property name and value in the `house` object.
   ```