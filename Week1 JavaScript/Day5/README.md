
```md
# JavaScript Loops - Day 5

## Table of Contents
1. [For Loop](#for-loop)
2. [While Loop](#while-loop)
3. [Do...While Loop](#do-while-loop)

---

## For Loop

The `for` loop repeats a block of code as long as a specified condition is true. It is ideal when you know how many times you want to execute the code.

### Syntax
```js
for (statement1; statement2; statement3) {
  // Code block to execute
}
```

- **statement1**: Executed once before the loop starts. It’s usually used to initialize variables.
- **statement2**: Condition that is evaluated before each iteration. If `true`, the loop runs. If `false`, the loop stops.
- **statement3**: Executed after every loop iteration, usually used to increment or modify the loop variable.

### Example: Multiplication Table of 2
```js
for (let i = 0; i <= 10; i++) {
  console.log("The 2 table is:", i + " X " + 2 + " = " + i * 2);
}
```

- In this example:
  - `statement1`: `let i = 0` initializes the loop variable `i`.
  - `statement2`: `i <= 10` is the condition that ensures the loop runs as long as `i` is less than or equal to 10.
  - `statement3`: `i++` increments `i` by 1 after each iteration.

Output:
```
The 2 table is: 0 X 2 = 0
The 2 table is: 1 X 2 = 2
The 2 table is: 2 X 2 = 4
...
The 2 table is: 10 X 2 = 20
```

---

## While Loop

The `while` loop continues to execute a block of code as long as the specified condition is `true`. The condition is checked before the loop body runs.

### Syntax
```js
while (condition) {
  // Code block to execute
}
```

### Example: Multiplication Table of 2
```js
let i = 0;
while (i <= 10) {
  console.log(`The loops is: ${i} X ${2} = ${i * 2}`);
  i++;
}
```

- The condition `i <= 10` is evaluated before each iteration. If it’s `true`, the loop continues; if `false`, the loop stops.

Output:
```
The loops is: 0 X 2 = 0
The loops is: 1 X 2 = 2
The loops is: 2 X 2 = 4
...
The loops is: 10 X 2 = 20
```

---

## Do...While Loop

The `do...while` loop is similar to the `while` loop, but with one key difference: the block of code inside the loop is executed **once before the condition is checked**. It will continue running as long as the condition is `true`.

### Syntax
```js
do {
  // Code block to execute
} while (condition);
```

### Example: Multiplication Table of 2
```js
let i = 0;
do {
  console.log(`The loops is: ${i} X ${2} = ${i * 2}`);
  i++;
} while (i <= 10);
```

- Here, the loop body executes at least once, even if the condition `i <= 10` is false at the start.

Output:
```
The loops is: 0 X 2 = 0
The loops is: 1 X 2 = 2
The loops is: 2 X 2 = 4
...
The loops is: 10 X 2 = 20
```

---

## Conclusion

- Use a `for` loop when you know how many times the loop should run.
- Use a `while` loop when the number of iterations is unknown, but the condition is checked **before** the loop body runs.
- Use a `do...while` loop when you want the loop to execute **at least once** before checking the condition.

For more information on JavaScript loops, you can refer to the following resources:
- [JavaScript Loops on Programiz](https://www.programiz.com/javascript/loop)
```