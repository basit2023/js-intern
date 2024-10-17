
# JavaScript Learning - Day 4

## Table of Contents
1. [Logical Operators](#logical-operators)
2. [Conditional Statements](#conditional-statements)
   - [if Statement](#if-statement)
   - [else if Statement](#else-if-statement)
   - [else Statement](#else-statement)
3. [Ternary Operator](#ternary-operator)


## Logical Operators

Logical operators are used to combine multiple conditions in JavaScript and are often used in `if` statements and ternary operations to make decisions based on multiple criteria.

| Operator | Description | Example               | Result |
|----------|-------------|-----------------------|--------|
| `&&`     | AND         | `(x > 5 && y < 10)`  | `true` if both are true |
| `||`     | OR          | `(x > 5 || y < 10)`  | `true` if at least one is true |
| `!`      | NOT         | `!(x > 5)`           | `true` if `x` is not greater than 5 |

### Examples
```js
let x = 7;
let y = 3;

if (x > 5 && y < 10) {
  console.log("Both conditions are true");
}

if (x > 5 || y > 10) {
  console.log("At least one condition is true");
}

if (!(x < 5)) {
  console.log("The condition is false when negated");
}
```

---

## Conditional Statements

Conditional statements allow you to execute certain code blocks based on conditions. The most common conditional statements are `if`, `else if`, and `else`.

### `if` Statement
The `if` statement runs a block of code if a specified condition is `true`.

**Syntax**:
```js
if (condition) {
  // Code to run if the condition is true
}
```

**Example**:
```js
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

### `else if` Statement
The `else if` statement follows an `if` and provides an additional condition to check if the `if` condition is `false`.

**Syntax**:
```js
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true and condition1 is false
}
```

**Example**:
```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
```

### `else` Statement
The `else` statement runs if none of the preceding `if` or `else if` conditions are `true`.

**Syntax**:
```js
if (condition1) {
  // Code if condition1 is true
} else if (condition2) {
  // Code if condition2 is true
} else {
  // Code if both conditions are false
}
```

**Example**:
```js
let temperature = 35;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cold outside.");
}
```

---

## Ternary Operator

The ternary operator (`? :`) provides a shorthand way to write simple `if-else` statements. It evaluates a condition and returns one of two values based on whether the condition is `true` or `false`.

**Syntax**:
```js
condition ? valueIfTrue : valueIfFalse;
```

**Example**:
```js
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
```

### Explanation
- The expression `(age >= 18)` is evaluated.
- If `age` is `18` or higher, it returns `"Yes, you can vote."`.
- If `age` is less than `18`, it returns `"No, you cannot vote."`.

---
