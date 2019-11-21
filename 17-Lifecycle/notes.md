# React Lifecycle Methods

## Goals

- Describe what component lifecycle is
- Contrast methods for mounting, updating and unmuounting
- Overview the less commonly used lifecycle methods

## React Component Lifecycle

- Every component comes with methods that allow developers to update application state and reflect the changes to the UI before/after key react "events".
- There are three main phases to know about:
  - mountion
  - updating
  - unmounting

## constructor()

- Often used for initializing state or binding event handlers to class instance.

```js
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      value: 'Hey There!'
    };
    this.handleClick = this.handleClick.bind(this);
  }
}
```

## render()

- After the constructor, React calls render(). It tells React what should be displayed. React updates the DOM to match the output or `render()`.

## componentDidMount()

- This method runs after the component is mounted
- "Mounting" is the first time the component is rendered to DOM.
- This is a good place to load any via AJAX or set up subscriptions/timers.
- Calling `setState()` here will trigger re-render, so be cautious.


## CcomponentDidMount() Example

- Let's start a timer when Clock instance is first rendered to the DOM 
- **componentDidMount()** method runs after the component has been rendered.

```js
class Clock extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

    // ...
  }
}

```

## componentDidMount() AJAX Example

- **componentDidMount** is also quite useful for making AJAX requests when the component is mounted