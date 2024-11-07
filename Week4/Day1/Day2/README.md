
# DOM Events with JavaScript, Week 4, Day2


## Table of Contents

1. [Introduction](#introduction)  
2. [Getting Started](#getting-started)  
3. [Event Types](#event-types)  
4. [Adding Event Listeners](#adding-event-listeners)  
5. [Removing Event Listeners](#removing-event-listeners)  
6. [Event Object](#event-object)  
7. [Example Code](#example-code)  
8. [Common Use Cases](#common-use-cases)  
9. [Contributing](#contributing)  

---

## Introduction

Events are actions or occurrences that happen in the browser, such as user interactions (clicks, form submissions, etc.) or changes in the DOM (loading content, resizing windows, etc.). Using JavaScript, you can respond to these events to create dynamic and interactive web applications.

## Getting Started

To get started with DOM events, you'll need:
1. An HTML file with elements to interact with.
2. A linked JavaScript file containing event-related code.

### Example HTML Setup

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Events Example</title>
</head>
<body>
    <button id="myButton">Click Me!</button>
    <input type="text" id="myInput" placeholder="Type here..." />
    <p id="message"></p>

    <script ></script>
</body>
</html>
```

## Event Types

Common types of DOM events include:
- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, etc.
- **Keyboard Events**: `keydown`, `keyup`, `keypress`.
- **Form Events**: `submit`, `focus`, `blur`, `change`, `input`.
- **Window Events**: `load`, `resize`, `scroll`.

## Adding Event Listeners

To respond to events, you can attach event listeners to DOM elements using the `addEventListener()` method.

### Syntax
```javascript
element.addEventListener('eventType', callbackFunction);
```

### Example

```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button was clicked!');
});
```

## Removing Event Listeners

To remove an event listener, you must use the `removeEventListener()` method with a reference to the same callback function used when adding it.

### Example

```javascript
function showAlert() {
    alert('Button was clicked!');
}

button.addEventListener('click', showAlert);
button.removeEventListener('click', showAlert);
```

## Event Object

When an event is triggered, it passes an event object as a parameter to the event listener function. This object contains properties and methods that provide information about the event.

### Example Usage

```javascript
const input = document.getElementById('myInput');

input.addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('message').textContent = `You typed: ${value}`;
});
```

### Common Properties of the Event Object
- `event.type`: The type of event (e.g., `click`).
- `event.target`: The element that triggered the event.
- `event.preventDefault()`: Prevents the default behavior of the event.
- `event.stopPropagation()`: Stops the event from bubbling up or propagating to parent elements.

## Example Code

Here's a sample JavaScript file (`app.js`) that demonstrates handling various events:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const input = document.getElementById('myInput');
    const message = document.getElementById('message');

    // Click event
    button.addEventListener('click', () => {
        message.textContent = 'Button was clicked!';
    });

    // Input event
    input.addEventListener('input', (event) => {
        message.textContent = `You typed: ${event.target.value}`;
    });

    // Mouseover event
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'lightblue';
    });

    // Mouseout event
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '';
    });
});
```

## Common Use Cases

1. **Form Validation**: Use events to validate user input on forms.
2. **Dynamic UI Updates**: Handle click, hover, and input events to dynamically update the UI.
3. **Event Delegation**: Use event delegation to handle events on dynamically created elements.




