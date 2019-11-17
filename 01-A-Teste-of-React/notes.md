## A Taste of React

## Goals

- What is React? History & Goals
- Components
- Play with a React Component
- Write Your Own Component!

## React

- Popular, powerul front-end framework/libray devloped by and sponsored by Facebook.
- Makes it easy to make reusable "view components"
- These "encapsulate" login and HTML into a class
- Often make it easier to build modular applications

## Front End Frameworks

- Larger JS libraries
- Provide "blueprint" for apps
- Opinionated
  - This is how you should design a JS app
- Often: provide for code re-use
- Often: provide templating of HTML

## Library of Framework?

- I consider React to be a library on its own
- However, few people use React on its own
- Usually combined w/ things like React Router, Webpack, etc.
- The standard "React Ecosystem" is a framework
- Later on we'll see an actual framework built around React (Next.js)

## Components

- The building blocks of React
- Pieces of UI & view logic
- Classes that know how to render themselves into HTML

```js
class Dog {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  render() {
    return `<p>${this.name}</p>`;
  }
}
```

## Setup

- VS Code
- live-server Extansion
- another command
- `python3 -m http.server`

## Class Components

- The 'traditional' React component
- Write logic in a JS Class
- Must include a render method

```js
class Dog extends React.Component {
  render() {
    return `<p>Hi Everyone!</p>`;
  }
}
```

## Function components

- Historically used for simpler 'dumb' components
- Write logic in a JS Function
- No render method needed, just return content
-

```js
function Dog() {
  return `<p>Hi Everyone!</p>`;
}
```

## What's the difference?

- Both can accept props and render content
- Historically, function components couldn't use important features like:
  - State
  - Lifecycle Methods
- With the introduction of Hooks, we can now write full-featured funciton components
- This course covers hooks!

## Our Approach

- We'll begin working with mainly class components
- That way you only have to worry about one syntax at first
- Leter in the course we learn Hooks and mainly write function components

## Download

- All code
- Slides
- Handouts
