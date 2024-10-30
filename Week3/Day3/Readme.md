
# JavaScript DOM Manipulation Example: `id` Selector, Day3 week3

This project demonstrates basic DOM (Document Object Model) manipulation in JavaScript using the `id` selector. In this example, JavaScript is used to change the color and content of an HTML element based on user interaction.


## Introduction to DOM and the `id` Selector

The **Document Object Model (DOM)** represents the HTML structure as a tree of objects, making it possible to access and modify HTML elements with JavaScript.

In this example, we use the `id` selector to interact with the `h1` element by:
1. Selecting the element with `document.getElementById()`.
2. Modifying its `textContent` to change the visible text.
3. Changing its `style.color` to update the text color.

## Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 id="id">Welcome to DOM</h1>
    <button onclick="changetext()">Click Me</button>
</body>
<script>
    // Select the element with id "id" and change its color to red
    const id = document.getElementById("id");
    id.style.color = "red";

    console.log("The selected element is:", id);

    function changetext() {
        // Select the element again and update its text and color
        const id = document.getElementById("id");
        id.textContent = "Hello! Welcome to the DOM First Function";
        id.style.color = "blue";
    }
</script>
</html>
```

### How It Works

1. **Initial Color**: JavaScript sets the initial color of the heading (`<h1>`) to red.
2. **Button Click Action**: When the "Click Me" button is clicked, it triggers the `changetext()` function, which:
   - Changes the text content of the heading to "Hello! Welcome to the DOM First Function".
   - Changes the text color to blue.

## Key DOM Concepts

- **`document.getElementById(id)`**: Selects a single element with the specified `id`. This method is efficient and direct when working with unique elements in a document.
- **`element.style`**: Allows inline styling of elements, such as `color` and `backgroundColor`.
- **`element.textContent`**: Updates or retrieves the text content of an element, allowing us to dynamically change the text on a webpage.


for more information kindly follow this link ```https://www.freecodecamp.org/news/what-is-the-dom-document-object-model-meaning-in-javascript/```