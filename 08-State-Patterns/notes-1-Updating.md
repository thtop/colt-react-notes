# Section 8: React State Patterns

## Goals

- Learn how to update state based off of existing state
- Properly manage state updates for mutable data structures
- Discuss best practices for modeling state and designing components

**ScorkKeeper.js** (1)
```js
class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.steta = { score: 0};
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1});
  }

  tripleKill() {
    this.setState({ score: this.state.score + 1});
    this.setState({ score: this.state.score + 1});
    this.setState({ score: this.state.score + 1});
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>

        <button onClick={this.tripleKill}>Triple Kill!</button>
      <div>
    )
  }
}
```

## Setting State Using State

- We've eatabilshed that **setState()** is asynchroonus...
- So: it's risky to assume previous call has finished when you call it. 
- Also, React will sometimes batch (squash together) calls to **setState** together into one for perrormance reasons.

- If a call to **setState()** depends on current state, the safest thing is to use the alternate "callback form".

## setState Callback Form

- `this.setState(callback)`
- Instead of passing an object, pass it a callback with the current state as a parameter.
- The callback should return an object representing the new state.
- `this.setState(curState => ({ count: curState.count + 1 })`

**ScorkKeeper.js** (2)
```js
class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.steta = { score: 0};
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1});
  }

  tripleKill() {
    this.setState(st => {
      return { score: st.score + 1}
    });
    this.setState(st => {
      return { score: st.score + 1}
    });
    this.setState(st => {
      return { score: st.score + 1}
    });
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>

        <button onClick={this.tripleKill}>Triple Kill!</button>
      <div>
    )
  }
}
```

## Abstracting State Updates

- The fact that you can pass a function `this.setState` lends itself nicely to a more abvanced pattern called **functional setState**.
- Basically you can describe your state updates abstractly as separate function. But why would you so this?

```js
// elsewhere in the code
function incrementCounter(prevState) {
  return { count: prevState.count + 1};
}

// somewhere in the component
this.setState(incrementCounter);
```

- Because testing your state changes is as simple as testing a plain function:

```js
expect(incrementCounter({ count: 0})).toEqual({ count: 1})
```
- This pattern also comes up all the time in Recux!

**ScorkKeeper.js** (3)
```js
class ScoreKeeper extends Component {
  constructor(props) {
    super(props);
    this.steta = { score: 0};
    this.singleKill = this.singleKill.bind(this);
    this.tripleKill = this.tripleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1});
  }

  incrementScore(curState) {
    return { score: curState.score + 1};
  }

  tripleKill() {
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);
    this.setState(this.incrementScore);

  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>

        <button onClick={this.tripleKill}>Triple Kill!</button>
      <div>
    )
  }
}
```