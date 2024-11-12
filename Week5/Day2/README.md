

# Asynchronous JavaScript: `setTimeout`, `setInterval`, Callbacks, Promises, and Async/Await, Week 5 day 2

## Introduction

JavaScript is single-threaded but highly capable of handling asynchronous operations using various mechanisms. This README introduces key asynchronous concepts, including `setTimeout` and `setInterval`, and explores asynchronous patterns like callbacks, promises, and async/await.

## Table of Contents

1. [setTimeout](#settimeout)
2. [setInterval](#setinterval)
3. [Callbacks](#callbacks)
4. [Promises](#promises)
5. [Async/Await](#async-await)

---

### `setTimeout`

`setTimeout` schedules a function to be executed after a specified delay (in milliseconds).

#### Syntax:
```javascript
setTimeout(function, delay, ...args);
```

#### Example:
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);

console.log('End');
```

#### Explanation:
- The above code will first log `Start` and `End`, then log `Executed after 2 seconds` after a 2-second delay.

---

### `setInterval`

`setInterval` repeatedly executes a function at specified intervals (in milliseconds).

#### Syntax:
```javascript
setInterval(function, delay, ...args);
```

#### Example:
```javascript
let count = 0;
const intervalId = setInterval(() => {
  console.log(`Interval running: ${++count}`);
  if (count === 5) {
    clearInterval(intervalId); // Stops the interval after 5 executions
  }
}, 1000);
```

#### Explanation:
- This code logs a message every second and stops after 5 executions using `clearInterval()`.

---

### Callbacks

A callback is a function passed as an argument to another function, to be "called back" later.

#### Example:
```javascript
function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched');
    callback('Sample data');
  }, 1000);
}

function processData(data) {
  console.log('Processing:', data);
}

fetchData(processData);
```

#### Explanation:
- Here, `fetchData` simulates a delay (like fetching data from a server). After 1 second, it executes the `callback` function (`processData`).

---

### Promises

A promise is an object representing the eventual completion (or failure) of an asynchronous operation.

#### Syntax:
```javascript
const promise = new Promise((resolve, reject) => {
  // Perform an async task
});
```

#### Example:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

fetchData()
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

#### Explanation:
- The `fetchData` function returns a promise that resolves after 1 second. `then` handles the resolved value, and `catch` handles errors.

---

### Async/Await

`async/await` provides a cleaner syntax to work with promises. `async` functions return a promise, and `await` pauses the execution until the promise is resolved.

#### Example:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

async function processData() {
  try {
    const data = await fetchData();
    console.log('Processed:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();
```

#### Explanation:
- `await fetchData()` waits for the promise to resolve before logging the data. Errors are caught using `try...catch`.

---

## Summary

- `setTimeout` and `setInterval` are basic timing functions in JavaScript.
- Callbacks are functions passed to other functions and executed later.
- Promises provide a robust way to handle asynchronous operations.
- `async/await` simplifies working with promises and makes asynchronous code more readable.

