
# JavaScript DOM Methods - Week 4, Day1

## Table of Contents
1. [Introduction](#introduction)
2. [Methods Overview](#methods-overview)
   - `getElementsByClassName`
   - `getElementsByTagName`
3. [Examples](#examples)

## Introduction
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. JavaScript provides several ways to access and manipulate elements in the DOM.

## Methods Overview

### 1. `getElementsByClassName`
   - **Description**: Selects all elements with a specific class name.
   - **Syntax**: `document.getElementsByClassName('className')`
   - **Returns**: A live `HTMLCollection` of elements with the specified class name.
   - **Note**: You can access individual elements in the collection by using indexing (e.g., `[0]`, `[1]`).

### 2. `getElementsByTagName`
   - **Description**: Selects all elements with a specific tag name (e.g., `div`, `p`, `h1`).
   - **Syntax**: `document.getElementsByTagName('tagName')`
   - **Returns**: A live `HTMLCollection` of elements with the specified tag name.
   - **Note**: Use indexing to access individual elements.

## Examples

### Example 1: Using `getElementsByClassName`
```html
<!DOCTYPE html>
<html>
<head>
  <title>getElementsByClassName Example</title>
</head>
<body>
  <div class="example">First element with class "example"</div>
  <div class="example">Second element with class "example"</div>

  <script>
    // Select all elements with class "example"
    const elements = document.getElementsByClassName('example');
    console.log(elements[0].textContent); // Outputs: First element with class "example"
  </script>
</body>
</html>
```


### Example 2: Using `getElementsByTagName`
```html
<!DOCTYPE html>
<html>
<head>
  <title>getElementsByTagName Example</title>
</head>
<body>
  <p>First paragraph</p>
  <p>Second paragraph</p>

  <script>
    // Select all <p> elements
    const paragraphs = document.getElementsByTagName('p');
    paragraphs[0].style.fontWeight = 'bold'; // Makes first paragraph bold
  </script>
</body>
</html>
```

## Practice Questions

```
getElementsByClassName
Example 1: Changing Text Color for All Elements with a Specific Class
Example 2: Adding Text to Elements with a Specific Class
Example 3: Toggling Visibility of Elements with a Specific Class
getElementsByTagNam
Example 1: Changing the Font Size of All Paragraphs
Example 2: Setting a Border for All Div Elements
Example 3: Changing Background Color of All Elements with a Specific Tag

```