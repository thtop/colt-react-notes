## Designing State: Minimizing state

- Designing the state of a React application (or any modern web app) is a challenging skill! It takes practice and time!
- However, there are some easy best-practices that we can talk about in this section to give you a jump-start.

## Minimize Your State

- In React, you want to try to put as little data in state as possible.
- Litmus test
- does x change? If not, x should not be part of state. It should be a prop.
- is x already captured by some other value y in state or props? Derive it from there instead.

## Bad Example of State Desing

Let's pretend we're modelling a Person...

```js
this.state = {
  firstName: 'Matt',
  lastName: 'Lane',
  birthday: '1955-01008T07:37:59.1717z',
  age: 64,
  mood: 'irate'
};
```

- Does Matt's first name or last name ever change? Not often I hope...
- Does Matt's birthday ever change? How is that even possible!
- Matt's **age** does change, however if we had `this.props.birthday` we could easily derive it from that.
- Therefore, the only property here that is truly stateful is arguably **mood** (although Natt might dispute this).


## State Should Live On the Parent

- As previously mentioned, we want to support the "downward data flow" philosophy of React.
- In general, it makes more sense for a parent compoment to manage state and have a bunch of "dumb" stateless child display componets.
- This makes debugging easier, because the state is centralized, It's easier to predict where to find state:
- Is the current component stateless? Find out what is rendering it. There's the state.

## Todo Example
```js
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'do the dishes', done: false, id: 1},
        { task: 'vacuum the floor', done: true, id: 2}
      ]
    };
  }
  /* ... lots of other methods ... */
  render() {
    return (
      <ul>
        {this.state.todos.map(t => <Todo {...t} />)}
      <ul>
    );
  }
}
```

**TodoList** is a smart parent with lots of methods, while the individual **Todo** items are just `<li>` tags with some text and styling.


## Example Desing: Lottery

**Design**

- What components will we need?
- What props will they need?
- What state will we need?

**Lottery Component**
- Props
  - **title**: title of the lottery
  - **numBalls**: num of balls to display
  - **maxNum**: max value of ball
- State
  - **nums**: array of `[num, num, num, ...]` for balls
- Event
  - **onClick**: regenerate nums is state

**LotteryBall Component**
- Props
  - **num**: value on this ball
- State
  - none!
- Events
  - none!