
# Static Methods of JavaScript Promises, Try-Catch and finally block, Week5 Day3

JavaScript's `Promise` object provides static methods that allow developers to manage multiple promises and handle asynchronous operations more efficiently. This readme covers the six static methods: `Promise.all`, `Promise.race`, `Promise.allSettled`, `Promise.any`, `Promise.resolve`, and `Promise.reject`. Additionally, i will cover examples of using `try-catch` blocks, throwing custom errors, and utilizing `finally` clauses.

## Table of Contents

1. [Promise.all](#promiseall)
2. [Promise.race](#promiserace)
3. [Promise.allSettled](#promiseallsettled)
4. [Promise.any](#promiseany)
5. [Promise.resolve](#promiseresolve)
6. [Promise.reject](#promisereject)
7. [Using `try-catch`, Custom Errors, and `finally`](#try-catch-custom-errors-finally)

---

### 1. Promise.all

`Promise.all` takes an array of promises and resolves when all of them resolve or rejects if any promise rejects.

**Example:**

```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)) // Output: [10, 20, 30]
  .catch(error => console.error('Error:', error));
```

### 2. Promise.race

`Promise.race` returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

**Example:**

```javascript
const fastPromise = new Promise((resolve) => setTimeout(() => resolve('Fast'), 100));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve('Slow'), 1000));

Promise.race([fastPromise, slowPromise])
  .then(result => console.log(result)) // Output: 'Fast'
  .catch(error => console.error('Error:', error));
```

### 3. Promise.allSettled

`Promise.allSettled` waits for all promises to complete, regardless of their outcome (resolved or rejected).

**Example:**

```javascript
const promiseA = Promise.resolve('A');
const promiseB = Promise.reject('B');
const promiseC = Promise.resolve('C');

Promise.allSettled([promiseA, promiseB, promiseC])
  .then(results => console.log(results));
/* Output:
[
  { status: 'fulfilled', value: 'A' },
  { status: 'rejected', reason: 'B' },
  { status: 'fulfilled', value: 'C' }
]
*/
```

### 4. Promise.any

`Promise.any` resolves as soon as any of the promises in the array resolve and rejects if all promises are rejected.

**Example:**

```javascript
const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = Promise.resolve('First Success');

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // Output: 'First Success'
  .catch(error => console.error('All Promises rejected:', error));
```

### 5. Promise.resolve

`Promise.resolve` creates a resolved promise with a given value.

**Example:**

```javascript
const resolvedPromise = Promise.resolve('Resolved Value');
resolvedPromise.then(value => console.log(value)); // Output: 'Resolved Value'
```

### 6. Promise.reject

`Promise.reject` creates a promise that is rejected with a given reason.

**Example:**

```javascript
const rejectedPromise = Promise.reject('Rejected Value');
rejectedPromise.catch(reason => console.error(reason)); // Output: 'Rejected Value'
```

---

### Using `try-catch`, Custom Errors, and `finally`

Here's an example demonstrating `try-catch` blocks, throwing a custom error, and using the `finally` clause.

**Example:**

```javascript
function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Data fetch failed!'));
      } else {
        resolve('Data fetched successfully');
      }
    }, 1000);
  });
}

async function fetchDataWithHandling() {
  try {
    const result = await fetchData(false); // Change to true to trigger an error
    console.log(result);
  } catch (error) {
    console.error('Custom Error Message:', error.message);
    throw new Error('Custom Error Thrown After Catch');
  } finally {
    console.log('Execution complete, cleaning up...');
  }
}

fetchDataWithHandling().catch(err => console.error('Caught Custom Error:', err.message));
```

**Explanation:**

- `try` block attempts to execute `fetchData`.
- `catch` block handles any errors, logs a custom error message, and throws a new custom error.
- `finally` block runs regardless of success or error, providing a place for cleanup logic.

