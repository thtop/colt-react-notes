# Introducing State

## Goals

- Understand the concent of state in web applications
- Learn how to model state in React
- Use events to trigger state changes

## What is State?

> In any sufficiently advanced web application, the user interface has to be stateful.

- logged-in users see a different screen than logged-out users
- clicking 'edit profile' opens up a model (pop-up) window
- sections for a website can expand or collapse, for instance clicking 'read moew'

> The state of the client interface (frontend) is not always directly tied to state on the server.

## State Changes

> State is designed to constantly change in response to events.

> A great way to think about state is to think of games, for instance chess. At any point in time, the board is in a complex state.

## what Does State Track?

There are two types of things state on the client/frontend keeps track of:

- UI logic - the changeing state of the interface e.g., there is a modal open right now because I'm editing my profile
- businesss logic - the changing state of data e.g, in my inbox, messages are either read or unread, and this in turn affects how they display.

## Vanilla / jQuery State

- The way we kept track of state with jQuery was by selecting DOM elements and seeing if they were displayed/hidden, or if they had certain styles or attributes.

```js
// getting a text input value
var firstName = $("#firstNameInput").val();

// setting a text input value
$("#firstNameInput").val("Michael");
```

- In other words, we were inferring the state of the application from the DOM itself.
- React is going to do the opposite!

## Core React Concept Review

- component
  - building block of React
  - combines logic (JS) and presentation (JSX)
- prop
  - data passed to a component (or tound via defaults)
  - immutable; component cannot change its own props
- state
  - internal data specific to a component
  - data that chances over time!

## What is React State?

- In REact, state is an instance attribute on a component. It's always an object (POJO), since you'll want ot keep track of several keys/values.

```js
// what is the current state of my component?
console.log(this.state);

{
  playerName: 'Whiskey',
  score: 100
}
```

## Initial State

- State should be initialized as soon as the component is created. So we set it in the constructor function:

```js
class ClickCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0 // start at zero clicks
    };
  }
}
```

## React Constructor Function

- If your component is stateless, you can omit the constructor funciton.
- If you are building a component with state, you need a standard React constructor

```js
constructor(props) {
  super(props);
  this.state = {
    /* values we want to track */
  };
}
```

- **constructor** takes one argument, **props**
- You must call `super(props)` at start of constructor, which 'registers' your class as a React **Component**
- Inside the instance methods, you can refer to `this.state` just like you did `this.props`

## Example

demo/basicExample.js

```js
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false
    };
  }

  // state = {
  //   score: 99,
  //   gameOver: false
  // };

  render() {
    return (
      <div>
        <h1>Battleship</h1>
        <p>Current Player: {this.state.player}</p>
        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}
```

## Constructor

```js
class Component {
  constructor() {
    console.log("INSIDE COMPONENT CONSTRUCTOR!");
  }
}

class Game extends Component {
  constructor() {
    super();
    console.log("INSIDE GAME CONSTRUCTOR");
  }
}
```

- props

**App.js**

```js
class App extends Component {
  reder() {
    return (
      <div>
        <Demo animal="Bobcat" food="Pineapple" />
      </div>
    );
  }
}

// new Demo({ animal: "Bobact" });
export default App;
```

**Demo.js**

```js
class Demo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return <div>{this.props.animal}</div>;
  }
}
```

## Change State

- this.setState() is the built-in React method of changing a component's state

```js
this.setState({ playerName: "Matt", score: 0 });
```

- Can call in any instance method expept the costructor
- Takes an object describing the state change
- Patches state object - keys that you didn't specify don't change
- Asynchronous!
  - The component state will _eventually_ update.
  - React controls when the state will actually change, for performance reasons.
- Components re-render when their state changes

## React Events

- State most commonly changes in direct response to some event.
- In React, event JSX element has built-in attributes representing every kind of browser event.
- They are camel-cased, like **onClick**, and take callback functions as event listeners.

```js
<button
  onClick={function(e) {
    alert("You clicked me!");
  }}
></button>
```

## `this` is back

- But **this** is undefined!
- Who is calling **handleClick** for us?
  - React is, on click
- What is it calling it on?
  - it doesn't remember to call it on our instance
  - The method was called "out or context"
- What do we do?
  - `.bind()` it!

## The "State As Props" Design Pattern

> State and Props are the most important concepts in React (after knowing what a "compon")

| term  | structure | mutable | purpose                        |
| ----- | --------- | ------- | ------------------------------ |
| state | POJO `{}` | yes     | store changing compoonent date |
| props | POJP `{}` | no      | store component configuration  |

## State As Props

- A common pattern we will see over and over again is a stateful ("smart") parent component passing down its state values as props to stateless ("dumb") child components.

```js
class CounteParent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  }

  render() {
    // passing down parent state as a prop to the child
    return (
      <div>
        <CounterChild count={this.state.count} />
      </div>
    );
  }
}
```

- This idea is generalized in React as "**downward data flow**". It means that components get simpler as you go down the compoonet hierarchy, and parents tend to be more stateful than their children.
