
# Arrays of Objects in JavaScript, Day 2 Week 3

## Overview
An array of objects is a data structure that allows you to store a collection of related data in a structured format. Each object in the array can represent an entity with multiple properties, making it easy to manipulate and access the data.

## Definition
An array of objects is simply an array where each element is an object. Each object can contain key-value pairs, representing different attributes of the entity.

### Example
```javascript
const students = [
    {
        name: "Alice",
        age: 20,
        major: "Computer Science"
    },
    {
        name: "Bob",
        age: 22,
        major: "Mathematics"
    },
    {
        name: "Charlie",
        age: 21,
        major: "Physics"
    }
];
```

## Common Operations

### 1. Accessing Objects
You can access individual objects using their index.
```javascript
console.log(students[0]); // Outputs: { name: "Alice", age: 20, major: "Computer Science" }
console.log(students[1].name); // Outputs: "Bob"
```

### 2. Adding Objects
Add a new object to the end of the array using `push()`.
```javascript
students.push({ name: "Diana", age: 23, major: "Chemistry" });
```

### 3. Removing Objects
Remove the last object using `pop()` or remove an object at a specific index using `splice()`.
```javascript
students.pop(); // Removes the last student (Diana)
students.splice(1, 1); // Removes Bob (at index 1)
```

### 4. Updating Properties
Update properties of an object in the array.
```javascript
students[0].age = 21; // Updates Alice's age to 21
```

### 5. Iterating Over the Array
Use various methods to iterate through the array of objects.
- Using a `for` loop:
```javascript
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
```
- Using `forEach()`:
```javascript
students.forEach(student => {
    console.log(student.name);
});
```

### 6. Filtering
Filter the array based on certain conditions using the `filter()` method.
```javascript
const computerScienceStudents = students.filter(student => student.major === "Computer Science");
console.log(computerScienceStudents);
```

### 7. Mapping
Create a new array by transforming the objects using the `map()` method.
```javascript
const studentNames = students.map(student => student.name);
console.log(studentNames); // Outputs: ["Alice", "Charlie"]
```

### 8. Finding an Object
Find an object in the array based on a condition using `find()`.
```javascript
const foundStudent = students.find(student => student.name === "Alice");
console.log(foundStudent); // Outputs: { name: "Alice", age: 21, major: "Computer Science" }
```

### 9. Sorting
Sort the array of objects based on a property using the `sort()` method.
```javascript
students.sort((a, b) => a.age - b.age); // Sorts students by age in ascending order
```

## Complete Example
```javascript
const students = [
    { name: "Alice", age: 20, major: "Computer Science" },
    { name: "Bob", age: 22, major: "Mathematics" },
    { name: "Charlie", age: 21, major: "Physics" }
];

// Adding a new student
students.push({ name: "Diana", age: 23, major: "Chemistry" });

// Updating a student's age
students[1].age = 23; // Update Bob's age

// Removing a student
students.splice(0, 1); // Remove Alice

// Filtering students by major
const csStudents = students.filter(student => student.major === "Computer Science");

// Logging student names
students.forEach(student => console.log(student.name));
```

## Conclusion
Arrays of objects are a powerful way to organize and manipulate related data in JavaScript. Understanding how to perform various operations on arrays of objects is essential for effective programming and data management.


## Practice Questions
Kindly copy data from this link ```https://jsonplaceholder.typicode.com/users``` and solve the following examples. 
```
1. **Accessing Objects**
   - What is the `username` of the first user in the array?
   - What is the `zipcode` of the user whose `name` is "Patricia Lebsack"?

2. **Adding Objects**
   - How would you add a new user to the array with the name "John Doe" and email "john@example.com"?
   - How would you add a new user at the end of the array with the company name "TechCorp" and a catchphrase "Innovating the future"?

3. **Removing Objects**
   - How would you remove the last user in the array?
   - How would you remove the user with `id` 4 from the array?

4. **Updating Properties**
   - How would you update the `phone` number of the user with `id` 3 to "123-456-7890"?
   - How would you change the `website` of the user with `username` "Bret" to "newwebsite.com"?

5. **Iterating Over the Array**
   - How would you iterate over the array to print each user's `name`?
   - How would you loop through the array and print the `city` of each user's `address`?

6. **Filtering**
   - How would you filter the users to only include those who live in the city "South Elvis"?
   - How would you filter the array to find all users whose company name includes "LLC"?

7. **Mapping**
   - How would you create an array of all `email` addresses from the users?
   - How would you create an array containing only the `name` and `website` of each user?

8. **Finding an Object**
   - How would you find the user with `username` "Elwyn.Skiles"?
   - How would you locate the user whose `email` is "Chaim_McDermott@dana.io"?

9. **Sorting**
   - How would you sort the users by their `id` in descending order?
   - How would you sort the users by `name` in alphabetical order?
   
   ```
