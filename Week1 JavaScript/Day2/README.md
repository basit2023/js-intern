
# Understanding Data Types and Arithmetic Operations in JavaScript, Week 1 Day 2.

## Overview of Data Types in JavaScript

### Primitive Data Types
- **Number**: Represents numeric values (e.g., `1`, `3.14`).
- **String**: Represents text data (e.g., `"hello"`).
- **Boolean**: Represents logical values (`true` or `false`).
- **undefined**: Represents a variable that has been declared but not assigned a value.
- **null**: Represents an intentional absence of value.
- **NaN**: Represents a "Not-a-Number" value.
- **Symbol**: Represents a unique and immutable value, often used as object keys.
- **BigInt**: Used for representing integers larger than `Number.MAX_SAFE_INTEGER`.

### Non-Primitive Data Types
- **Object**: A collection of properties, where each property has a key-value pair (e.g., objects, arrays, functions).

#### Example of an Object
```javascript
const obj = {
    name: "Basit",
    age: "25"
};
```

---

## Arithmetic Operations

### Addition (`+`)
```javascript
const a = 5;
const b = 10;
console.log("The addition is:", a + b); // Output: The addition is: 15
```

- The `+` operator adds two numbers or concatenates strings.

### Subtraction (`-`)
```javascript
const c = 20;
const d = 10;
console.log("The subtraction is:", c - d); // Output: The subtraction is: 10
```

- The `-` operator subtracts one number from another.

### Multiplication (`*`)
```javascript
const mult1 = 5;
const mult2 = 10;
console.log("The multiplication is:", mult1 * mult2); // Output: The multiplication is: 50
```

- The `*` operator multiplies two numbers.

### Division (`/`)
```javascript
const div1 = 41;
const div2 = 10;
const result = div1 / div2;
console.log("The division is:", result); // Output: The division is: 4.1
```

- The `/` operator divides the first operand by the second.

### Modulus (`%`)
```javascript
const m1 = 41;
const m2 = 10;
const result1 = m1 % m2;
console.log("The modulus % is:", result1); // Output: The modulus % is: 1
```

- The `%` operator returns the remainder of the division of two numbers.

### Exponentiation (`**`)
```javascript
const p1 = 3;
const p2 = 2;
console.log("The power is:", p1 ** 2); // Output: The power is: 9
console.log("The power is:", p1 ** p2); // Output: The power is: 9
console.log("The power is:", p2 ** p1); // Output: The power is: 8
```

- The `**` operator raises the first operand to the power of the second operand.

---

## Summary of Arithmetic Operators

- **Addition (`+`)**: Adds values.
- **Subtraction (`-`)**: Subtracts one value from another.
- **Multiplication (`*`)**: Multiplies values.
- **Division (`/`)**: Divides values.
- **Modulus (`%`)**: Returns the remainder of a division.
- **Exponentiation (`**`)**: Raises one value to the power of another.

### Example Code Output Summary:

```
The addition is: 15
The subtraction is: 10
The multiplication is: 50
The division is: 4.1
The modulus % is: 1
The power is: 9
The power is: 9
The power is: 8
```

